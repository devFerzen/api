import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors';
import {
  graphqlHTTP
} from 'express-graphql';
import graphqlSchema from './graphql/schema';
import config from './config';
import mongoose from 'mongoose';
import werkModels from './graphql/mdbModels'; //Modelos BD
import cookieParser from "cookie-parser";
import {
  SEGURO_AUTH_TOKEN,
  SEGURO_REFRESH_TOKEN
} from './utilities/constants';
import jwt from 'jsonwebtoken';
import crearTokens from './utilities/auth';

//Investigar zeit/ms


//Pediente añadir debugModed
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
      const data = await jwt.verify(accessCookieToken, SEGURO_AUTH_TOKEN);
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
      refreshData = await jwt.verify(refreshCookieToken, SEGURO_REFRESH_TOKEN);
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

/*<<< GraphQL >>>*/
/* Pendiente añadir un context con la autenticacion por roles Definir la mejor manera */
app.use('/graphql', bodyParser.json(), graphqlHTTP((req, res) =>({
  schema: graphqlSchema,
  graphiql: true, // Enable GraphiQL tools -> http://localhost:3000/graphql
  context: {
    werkModels,
    res,
    userLogged: req.userLogged,
    SEGURO_AUTH_TOKEN,
    SEGURO_REFRESH_TOKEN,
    }
  }))
);


app.listen(3000,() => {
  console.log('Empezando servidor...');
});
