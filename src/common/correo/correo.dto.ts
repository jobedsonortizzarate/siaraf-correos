import { EmailTemplates } from "../constants";

export class CorreoDTO {
  de: string;
  para: string;
  cc: string;
  cco: string;
  template: EmailTemplates;
  asunto: string;
  context: any;
  //importante: boolean; preguntar si es necesario este bolean
  constructor(
    de: string,
    para: string,
    cc: string,
    cco: string,
    template: EmailTemplates,
    asunto: string,
    context: any
    //importante: boolean
  ) {
    this.de = de;
    this.para = para;
    this.cc = cc;
    this.cco = cco;
    this.template = template;
    this.asunto = asunto;
    this.context = context;
    //this.importante = importante;
  }
}
