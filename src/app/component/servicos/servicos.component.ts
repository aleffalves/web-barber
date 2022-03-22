import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Horarios } from 'src/app/model/Horarios';
import { HorarioService } from 'src/app/service/HorarioService.service';
import { ModalCadastroHorarioComponent } from '../modais/modal-cadastro-horario/modal-cadastro-horario.component';
import { ModalCadastroServicosComponent } from '../modais/modal-cadastro-servicos/modal-cadastro-servicos.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {

  @ViewChild('horarioSort') horarioSort = new MatSort();

  displayedColumns: string[] = ['demo-position', 'horario'];
  displayedColumns2: string[] = ['demo-position', 'demo-name', 'demo-preco']
  dataSource = ELEMENT_DATA;
  horarios : Horarios[] = []

  constructor(private router : Router,
              public dialog: MatDialog,
              private horarioService: HorarioService) { }

  ngOnInit(): void {
    this.buscarHorarios()
    console.debug(this.horarios)
  }

  buscarHorarios(){
    this.horarioService.buscarTodosHorarios().subscribe({
      next: (v) => {
        this.horarios = v
        console.log(v)},
      error: (e) => console.log(e),
      complete: () => {
        console.info('complete')}
    })
  }

  voltar(){
    this.router.navigate(['home'])
  }

  openCadastroHorarios(){
    this.dialog.open(ModalCadastroHorarioComponent, {
      width: '250px',
      height: '150px',
      data:{}
    })
  }

  openCadastroServicos(){
    this.dialog.open(ModalCadastroServicosComponent,{
      width: '350px',
      data: {}
    })
  }
}
