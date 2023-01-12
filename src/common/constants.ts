export enum RabbitMQ {
  //
  CorreoCierresQueue = 'correo.cierres',
}

export enum CorreoCierresMSG {
  INICIO_CIERRE = 'INICIO_CIERRE',
  RESPALDO_CIERRE = 'RESPALDO_CIERRE', //cierre respaldado
  // RESPALDO_ANTES_CIERRE = 'RESPALDO_ANTES_CIERRE', //cierre respaldado
  // RESPALDO_DESPUES_CIERRE = 'RESPALDO_DESPUES_CIERRE', //
  FIN_CIERRE = 'FIN_CIERRE',
}

export enum Order {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum EmailTemplates {
  // FIN_DE_CIERRE = 'src/API/cierre/templates/fincierre.hbs',
  // INICIA_CIERRE = 'src/API/cierre/templates/iniciacierre.hbs',
  FIN_DE_CIERRE = 'src/mail-templates/cierres/fincierre.hbs',
  INICIA_CIERRE = 'src/mail-templates/cierres/iniciacierre.hbs',
  NOTIFICACION_CIERRE = 'src/mail-templates/cierres/notificacioncierre.hbs',
}
