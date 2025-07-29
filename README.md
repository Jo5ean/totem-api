# TOTEM API - UCASAL

API REST para gestión de cronogramas de exámenes.

## Deploy en Railway:
1. Push a GitHub  
2. Conectar con Railway
3. Deploy automático

## Endpoints principales:
- /health - Health check
- /api/v1/setup/inicial - Setup automático
- /api/v1/totem/simple-sync - Sincronización


Error sugiriendo aula: Error [PrismaClientValidationError]: 

Invalid `prisma.aula.findMany()` invocation:

 

<!-- {

  where: {

    disponible: true,

    ~~~~~~~~~~

    capacidad: {

      gte: 1

    },

?   AND?: AulaWhereInput | AulaWhereInput[],

?   OR?: AulaWhereInput[],

?   NOT?: AulaWhereInput | AulaWhereInput[],

?   id?: IntFilter | Int,

?   nombre?: StringFilter | String,

?   sede?: StringFilter | String,

?   activa?: BoolFilter | Boolean,

?   createdAt?: DateTimeFilter | DateTime,

?   updatedAt?: DateTimeFilter | DateTime,

?   examenes?: ExamenListRelationFilter,

?   ocupaciones?: OcupacionAulaListRelationFilter

  },

  orderBy: {

    capacidad: "asc"

  }

}

 

Unknown argument `disponible`. Available options are marked with ?.

    at eO (.next/server/chunks/574.js:21:7532)

    at hI.handleRequestError (.next/server/chunks/574.js:114:7485)

    at hI.handleAndLogRequestError (.next/server/chunks/574.js:114:7087)

    at hI.request (.next/server/chunks/574.js:114:6794)

    at async f (.next/server/chunks/574.js:126:7668)

    at async k (.next/server/pages/api/v1/examenes/[id]/inscripciones.js:1:6819)

    at async j (.next/server/pages/api/v1/examenes/[id]/inscripciones.js:1:5344)

    at async Module.r (.next/server/pages/api/v1/examenes/[id]/inscripciones.js:1:8758) {

  clientVersion: '6.12.0'

}
 -->