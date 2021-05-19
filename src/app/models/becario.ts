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
    this.id = id;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.puesto = puesto;
    this.horario = horario;
    this.responsables = responsables;
    this.fechaalta = fechaalta
  }
}