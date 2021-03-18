
//*****Contratante
  /*
  query informacionPerfilContratante($params: paramsPerfilViewInput!){
    informacionPerfilContratante(paramsPerfil: $params){
      informacion_personal{
        nombre{
          nombres
          apellidos
          }
        nacimiento
        genero
      }
      werker{
        empresa_id
        ubicacion{
          pais
          estado
          ciudad
        }
      }
      tipo_perfil
      negocio{
        nombre
        descripcion
        anos_activos
        telefono
        direccion
      }
      contacto{
        telefonos{
          fijo
          celular
        }
        redes_sociales{
          red
          url
        }
        url
        correo
      }
      categorizaciones_interes{
        tipo
        nombre
      }
      tags_interes{
        nombre
        experiencia
      }
    }
  }
    ---------------------------------------
    {
  "paramsPerfil": {
      "id": "603aa15b8925d86df0f18ae9"
    }
  }
  -Query informacionPerfilContratante*/

  /*
  mutation creandoPerfilContratante($input: paramsPerfilInput!{
    creandoPerfilContratante(input: $input)
  }
  ---------------------------------------
  {
    "input": {
      "informacion_personal": {
        "nombre": {
          "nombres": "ALFREDO X",
          "apellidos": " - MEN"
        },
        "nacimiento": "1989-12-01T05:00:00.000+00:00",
        "genero": "masculino"
      },
      "werker": {
        "ubicacion": {
          "estado": "Nuevo León",
          "ciudad": "Monterrey"
        }
      },
      "tipo_perfil": 1,
      "negocio": {
        "nombre": "El mas verga del mundo",
        "descripcion": "El negocio más verga del mundo",
        "anos_activos": "1",
        "telefono": "83000000",
        "direccion": "Abajo"
      },
      "contacto": {
        "telefonos": {
          "fijo": "83000001",
          "celular": "8110000000"
        },
        "url": "www.penes.com"
      },
      "categorizaciones_interes": [
        {
          "tipo": "Categoría",
          "nombre": "Sexo"
        }
      ],
      "tags_interes": [
        {
          "nombre": "Anal",
          "experiencia": 1
        }
      ]
    }
  }
  -Resolver creandoPerfilContratante*/

  /*
  mutation actualizandoPerfilContratante($id: String!, $input: paramsPerfilInput!){
      actualizandoPerfilContratante(id: $id, input: $input){
        informacion_personal{
          nombre{
            nombres
            apellidos
            }
          nacimiento
          genero
        }
        werker{
          empresa_id
          ubicacion{
            pais
            estado
            ciudad
          }
        }
        tipo_perfil
        negocio{
          nombre
          descripcion
          anos_activos
          telefono
          direccion
        }
        contacto{
          telefonos{
            fijo
            celular
          }
          redes_sociales{
            red
            url
          }
          url
          correo
        }
        categorizaciones_interes{
          tipo
          nombre
        }
        tags_interes{
          nombre
          experiencia
        }
      }
    }
    ---------------------------------------
    {
      "id": "603aa15b8925d86df0f18ae9",
      "input": {
        "informacion_personal": {
          "nombre": {
            "nombres": "ALFREDO X",
            "apellidos": " - MEN"
          },
          "nacimiento": "1989-12-01T05:00:00.000+00:00",
          "genero": "masculino"
        },
        "werker": {
          "ubicacion": {
            "estado": "Nuevo León",
            "ciudad": "Monterrey"
          }
        },
        "tipo_perfil": 2,
        "negocio": {
          "nombre": "El mas verga del mundo",
          "descripcion": "El negocio más verga del mundo",
          "anos_activos": "1",
          "telefono": "83000000",
          "direccion": "Abajo"
        },
        "contacto": {
          "telefonos": {
            "fijo": "83000001",
            "celular": "8110000000"
          },
          "url": "www.penes.com"
        },
        "categorizaciones_interes": [
          {
            "tipo": "Categoría",
            "nombre": "Sexo"
          }
        ],
        "tags_interes": [
          {
            "nombre": "Anal",
            "experiencia": 1
          }
        ]
      }
    }
  -Resolver actualizandoPerfilContratante*/


  //*****ObjetoWerk
  /*

mutation creandoObjetoWerk($params: ParamsObjetoWerkInput!){
    creandoObjetoWerk(params:$params){
    	__typename
      id
      descripcion,
      categorizaciones{
          tipo
          nombre
        }
        tags{
          nombre
          experiencia
        }
        contacto{
          telefonos{
            fijo
            celular
          }
          redes_sociales{
            red
            url
          }
          url
          correo
        }
        werker{
          id
          nombre {
            nombres
            apellidos
          }
          factura
          ubicacion{
            pais
            estado
            ciudad
          }
          objetos_werk{
            tipo
            id
          }
        }
        objeto_werk{
          tipo
          esquemas
          capacidad
          estatus{
            tipo
          }
        }
      ... on Freelance{
        informacion_personal{
          nombre{
            nombres
            apellidos
          }
          nacimiento
          genero
        }
        negocio{
          nombre
          descripcion
          anos_activos
        }
        areas_de_especialidad
        costo{
          min
          max
        }
      },
      ... on Anuncio {
        titulo
        areas_de_especialidad
        costo{
          min
          max
        }

      },
      ... on Vacante {
        titulo
        habilidades_req
        prestaciones_beneficios
      }
    }
  }
  ---------------------------------
  {
    "input": {
  		"informacion_personal": {
        "nombre": {
          "nombres": "Pacheco Chupame",
          "apellidos": "Melap Utonio"
        },
        "nacimiento": "1989-12-01T05:00:00.000+00:00",
        "genero": "masculino"
      },
      "negocio": {
        "nombre": "Pies company",
        "descripcion": "Vendo fotos de pies",
        "anos_activos": 1
      },
      "areas_de_especialidad": ["Fotos de pie completo", "Fotos de talón", "Fotos de dedos raros"],
      "descripcion": "Soy fotografo de pies, Lorem ipsum dolor sit amet, te la comes Winnies lol consectetur adipiscing elit. Morbi aliquet molestie ligula in eleifend. PENE Nulla facilisi. Suspendisse potenti. Integer dictum ullamcorper enim sed suscipit. Vivamus iaculis lacus viverra velit suscipit rhoncus. Quisque quis nisi posuere, finibus mi non, malesuada est. Cras vehicula cursus malesuada. Suspendisse fringilla quis lectus a ornare.",
      "categorizaciones": [
        {
          "tipo": "categoria",
          "nombre": "Marketing"
      	},
      	{
          "tipo": "categoria",
          "nombre": "Fotografía"
        },
      	{
          "tipo": "sub-categoria",
          "nombre": "Publicidad"
        }],
      "tags": [{
        "nombre": "Pies",
        "experiencia": 5
      },
      {
        "nombre": "Fotografía Nocturna Astral",
        "experiencia": 1
      }],
      "contacto": {
        "telefonos": {
          "fijo": "83000000",
          "celular": "8110000000"
        },
        "redes_sociales": [{
          "red": "faWhatsapp",
          "url": "url@urlwhatsapp"
        },
        {
          "red": "faTwitter",
          "url": "url@urltwitter"
        },
        {
          "red": "faLinkedin",
          "url": "url@urllinkedin"
        }]
      },
      "werker": {
        "factura": true,
        "ubicacion": {
          "pais": "MX",
          "estado": "NLE",
          "ciudad": "MTY"
        },
        "objetos_werk": [{
          "tipo": "anuncio",
          "id": "600f9fa8015c570ab870f400"
        },{
          "tipo": "anuncio",
          "id": "600f9fa4015c570ab870f3ff"
        }]
      },
      "objeto_werk": {
        "tipo": "freelance",
        "esquemas": [1,2,3],
        "capacidad": [1,2],
        "estatus": {
          "tipo": true
        }
      }
    }
  }
  -Resolver creandoObjetoWerk - freelance*/

  /*
    ---------------------------------
    {
      "params": {
        "input": {
          "titulo": "Anuncio de pieses 4",
          "costo": {
            "min": 18000,
            "max": 15000
          },
          "areas_de_especialidad": [
            "Fotos de pie completo de Padre",
            "Fotos de talón de huerfanos",
            "Fotos de dedos raros de huerfanos"
          ],
          "descripcion": "Soy Anuncio de pies, Lorem ipsum dolor sit amet, te la comes Winnies lol consectetur adipiscing elit. Morbi aliquet molestie ligula in eleifend. PENE Nulla facilisi. Suspendisse potenti. Integer dictum ullamcorper enim sed suscipit. Vivamus iaculis lacus viverra velit suscipit rhoncus. Quisque quis nisi posuere, finibus mi non, malesuada est. Cras vehicula cursus malesuada. Suspendisse fringilla quis lectus a ornare.",
          "categorizaciones": [
            {
              "tipo": "categoria",
              "nombre": "Fotografía"
            }
          ],
          "tags": [
            {
              "nombre": "Pies",
              "experiencia": 2
            }
          ],
          "contacto": {
            "telefonos": {
              "fijo": "83000000",
              "celular": "8110000000"
            },
            "redes_sociales": [
              {
                "red": "faWhatsapp",
                "url": "url@urlwhatsapp"
              },
              {
                "red": "faTwitter",
                "url": "url@urltwitter"
              },
              {
                "red": "faLinkedin",
                "url": "url@urllinkedin"
              }
            ]
          },
          "werker": {
            "id": "6002706a8343ff508c0316d3",
            "nombre": {
              "nombres": "Puto el que",
              "apellidos": "Lolea Utop"
            },
            "factura": true,
            "ubicacion": {
              "pais": "MX",
              "estado": "NLE",
              "ciudad": "MTY"
            }
          },
          "objeto_werk": {
            "tipo": "anuncio",
            "esquemas": [
              1,
              2
            ],
            "capacidad": [
              1
            ],
            "estatus": {
              "tipo": true
            }
          }
        }
      }
    }
  -Resolver creandoObjetoWerk - anuncio*/
