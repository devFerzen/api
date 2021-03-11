
//QUERIES >>>>
//*****Usuario



//*****Contratante
  /*
  query informacionPerfilContratante( $paramsPerfil: paramsPerfilViewInput!){
    informacionPerfilContratante(paramsPerfil: $paramsPerfil){
        informacion_personal{
          nombre{
            nombres
            apellidos
          }
          genero
          nacimiento
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

//RESOLVERS >>>>
//*****Usuario

//*****Contratante
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
          nombre {
            nombres
            apellidos
          }
          nacimiento
          genero
        }
      }
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
