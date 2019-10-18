import { Component, OnInit } from '@angular/core';
import {CursosService} from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  //cursos: string[] = ['Java', 'C', 'Angular'];
  cursos: string[];

  constructor(private cursosService: CursosService) {
    this.nomePortal = 'http://loiane.training';

    /*
      var service = new CursosService();
      this.cursos = service.getCursos();
    */

    this.cursos = this.cursosService.getCursos();

  }

  ngOnInit() {
  }

}
