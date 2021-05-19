/** Simple data class that represents a Becario */
export class Becario {
  id: string;
  nombre: string;
  apellidos: string;
  puesto: string;
  horario: string;
  responsables: string[];
  fechaalta: string;

  constructor(
    id: string,
    nombre: string,
    apellidos: string,
    puesto: string,
    horario: string,
    responsables: string[],
    fechaalta: string,
  ) {
    this.id = id == "" ? "N/A" : id;
    this.nombre = nombre == "" ? "N/A" : nombre;
    this.apellidos = apellidos == "" ? "N/A" : apellidos;
    this.puesto = puesto == "" ? "N/A" : puesto;
    this.horario = horario == "" ? "N/A" : horario;
    this.responsables = responsables == [] ? ["N/A"] : responsables;
    this.fechaalta = fechaalta == "" ? "N/A" : fechaalta
  }
}