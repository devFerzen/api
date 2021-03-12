
//QUERIES >>>>
//*****Usuario



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
