import { CierreDetalleDtoInterface } from './cierre-detalle.dto.interface';

// }
export interface CierreDtoInterface extends EmailDtoInterface {
  cierreDetalles: CierreDetalleDtoInterface[];
}

export interface EmailDtoInterface {
  ambiente: string; //ambiente local
  id: number;
  too: string;
  cc: string;
  cco: string;
  asunto: string;
  body: string;
}

export interface RespaldoDtoInterface extends EmailDtoInterface {
  respaldoDetalle: RespaldoDetalleDtoInterface;
}

export interface RespaldoDetalleDtoInterface {
  version: string;
  dbNombre: string;
  server_name: string;
  fechaInicio: string;
  fechaFinOFallo: string;
  dbbakfullpath: string;
  dbsize: number;
  success: boolean;
}
