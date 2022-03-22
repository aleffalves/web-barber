import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-cadastro-servicos',
  templateUrl: './modal-cadastro-servicos.component.html',
  styleUrls: ['./modal-cadastro-servicos.component.css']
})
export class ModalCadastroServicosComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
