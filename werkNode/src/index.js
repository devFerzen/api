import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors';
import multer from 'multer';
import {
  graphqlHTTP
} from 'express-graphql';
import graphqlSchema from './graphql/schema';
import config from './config';
import mongoose from 'mongoose';
import werkModels from './graphql/mdbModels'; //Modelos BD
import cookieParser from "cookie-parser";
import * as WerkConstants from './utilities/constants';
import jwt from 'jsonwebtoken';
import crearTokens from './utilities/auth';
import path from 'path';

// AFSS Investigar zeit/ms

// AFSS Pediente añadir debugModed
mongoose.connect(config.mongoUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(mongoose => console.log(">>> DB online"))
  .catch(err => console.log("MongoDB Err", err));


const app = express();

app.use(cors({
  origin: true,
  credentials: true,
  maxAge: 3600
 }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use(cookieParser());

/*<<< Autenticación >>>*/
app.use(async (req, res, next) => {
    const accessCookieToken = req.cookies['auth-token'];
    const refreshCookieToken = req.cookies['refresh-token'];

    if (!accessCookieToken && !refreshCookieToken) {
      console.log("Access and refresh cookie not found");
      return next();
    }

    //Esta loggeado
    try {
      const data = await jwt.verify(accessCookieToken, WerkConstants.SEGURO_AUTH_TOKEN);
      return next();
    } catch (e) {
      //No tienen un Token de autorización
      console.log(">>> error en loggeado");
      console.log(e);
    }

    if (!refreshCookieToken) {
      return next();
    }

    //Verifica que refreshToken no haya sido invalidada
    let refreshData;
    try {
      refreshData = await jwt.verify(refreshCookieToken, WerkConstants.SEGURO_REFRESH_TOKEN);
    } catch (e) {
      console.log("error en refreshData");
      return next();
    }

    const user = await werkModels.Usuario.findOne({
      _id: refreshData.usuarioId
    });

    if (!user || user.token_count != refreshData.token_count) {
      //refreshToken si fue invalidado
      console.log("token count no son iguales, mandar a cerrar");
      return next();
    }

    //refreshToken valido
    //Informacion extra para usuario werker - traer arreglo de favoritos y likes

    req.userLogged = {
      id: user._id,
      tipo: user.werker.tipo
    };

    const {
      authToken,
      refreshToken
    } = crearTokens(user);

    res.cookie('auth-token', authToken, {
      expire: 15 + Date.now()
    });

    res.cookie('refresh-token', refreshToken, {
      expire: 420000 + Date.now()
    });

    next();
  }
);

/*<<< Destino dínamico de imagenes el servidor >>>*/
let storage = multer.diskStorage({
  destination: function(req, file, cb) {
    console.log("file destination", file);

    let imageData = JSON.parse(req.body.filePondImages);
    let imagePath = WerkConstants.UPLOAD_IMAGE_PATH(imageData.objetotipo);
    console.log("dirName...",__dirname);
    let uploadPath = path.join(__dirname, '..', 'uploads'+imagePath);//+ WerkConstants.UPLOAD_IMAGE_PATH(file.file.objetotipo)

    cb(null, uploadPath);
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname );
  },
});

/*<<< Filtro de imágenes permitidas >>>*/
let upload = multer({
  storage: storage,
  fileFilter: function(req, file, cb){
    //console.log('filter', file);
    let ext = path.extname(file.originalname);

    if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
      return callback(new Error('Only images are allowed'))
    }
    cb(null, true);
  }
});

app.post('/upload', upload.array('filePondImages',12), (req, res, next) => {
    //console.dir(req.files); // save info : { originalname, filename }
    console.log("app.post/upload->req.files:",req.files);
    console.log("app.post/upload->req.body.objetoImagen:",req.body);

    /*{
    fieldname: 'filePondImages',
    originalname: 'fondo.jpg',
    encoding: '7bit',
    mimetype: 'image/jpeg',
    destination: 'C:\\Users\\aqual\\repositorioWerk\\playgroundWerk\\werkNode\\uploads\\imagenes\\anuncio',
    filename: '1619460111681-fondo.jpg',
    path: 'C:\\Users\\aqual\\repositorioWerk\\playgroundWerk\\werkNode\\uploads\\imagenes\\anuncio\\1619460111681-fondo.jpg',
    size: 5510
  }*/
    //console.log("body upload", req.body); info extra dada en metadata

    if(!req.files) {
        const error = new Error("Something went mejeWrong");
        error.httpStatusCode = 400
        return next(error)
    }

    res.send([req.files[0].filename]);
});

/*AFSS - No se supo como filePond pasa el file al servidor, se recurre a otro procedimiento */
app.delete('/delete', (req, res, next) => {
  console.log("app.delete/delete->req.query:",req.query);
  res.send("proceed");
});

app.get('/load/:nombre_werk', (req, res, next) => {
  console.log("app.get/load->nombre_werk",req.params.nombre_werk);
  console.log("app.get/load->req.files",req.files);
  console.log("app.get/load->req.body",req.body);

  res.send("nose load");
});


var seguro_auth_token = WerkConstants.SEGURO_AUTH_TOKEN;
var seguro_refresh_token = WerkConstants.SEGURO_REFRESH_TOKEN;
/*<<< GraphQL endPoint >>>*/
/* Pendiente añadir un context con la autenticacion por roles Definir la mejor manera */
app.use('/graphql', bodyParser.json(), graphqlHTTP((req, res) =>({
  schema: graphqlSchema,
  graphiql: true, // Enable GraphiQL tools -> http://localhost:3000/graphql
  context: {
    werkModels,
    res,
    userLogged: req.userLogged,
    seguro_auth_token,
    seguro_refresh_token,
    }
  }))
);

app.listen(3000,() => {
  console.log('Empezando servidor...');
});
