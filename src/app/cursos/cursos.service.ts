import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();

  private cursos: string[] = ['Angular', 'Java', 'JavaScript'];

  constructor() {
    console.log('CursosService')
  }

  getCursos() {
    return this.cursos;
  }

  addCurso(curso: string) {
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
  }
}
