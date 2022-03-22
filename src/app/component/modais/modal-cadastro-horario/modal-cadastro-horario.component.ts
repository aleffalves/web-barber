import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Horarios } from 'src/app/model/Horarios';
import { HorarioService } from 'src/app/service/HorarioService.service';

@Component({
  selector: 'app-modal-cadastro-horario',
  templateUrl: './modal-cadastro-horario.component.html',
  styleUrls: ['./modal-cadastro-horario.component.css']
})
export class ModalCadastroHorarioComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog : MatDialog,
              private horarioService : HorarioService) { }

  horario : Horarios = new Horarios();

  ngOnInit(): void {
  }

  cadastrar(horario : string){
    this.horario.horario = horario;
    this.horario.isDisponivel = true;
    this.horarioService.salvarHorario(this.horario).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => {console.info('complete')
      this.dialog.closeAll();  
    } 
    })
  }
  cancelar(){
    this.dialog.closeAll();
  }
}
