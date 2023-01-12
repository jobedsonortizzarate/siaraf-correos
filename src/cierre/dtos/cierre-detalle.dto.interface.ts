export interface CierreDetalleDtoInterface {
  descripcionCierre: string; //descripcion del cierre
  cveEncomienda: number; //clave de la encomienda
  nombreEncomienda: string;
  fecha: string; //fecha inicio
  hora: string; //hora de inicio
  fechaFin: Date;
  fechaCartera: Date; // viene de tabla DB_SIARAF.dbo.tbl_sci_cal
  horaFin: string;
  encomiendaError: string; // usado para el mensaje de error en caso de existir
}
