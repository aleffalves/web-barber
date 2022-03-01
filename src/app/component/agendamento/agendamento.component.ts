import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: '08:00', weight: 1.0079, symbol: 'H'},
  {position: 2, name: '09:00', weight: 4.0026, symbol: 'He'},
  {position: 3, name: '10:00', weight: 6.941, symbol: 'Li'},
  {position: 4, name: '11:00', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: '13:00', weight: 10.811, symbol: 'B'},
  {position: 6, name: '14:00', weight: 12.0107, symbol: 'C'},
  {position: 7, name: '15:00', weight: 14.0067, symbol: 'N'},
  {position: 8, name: '16:00', weight: 15.9994, symbol: 'O'},
  {position: 9, name: '17:00', weight: 18.9984, symbol: 'F'},
  {position: 10, name: '18:00', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit {
  selected!: Date | null;
  selectedValue!: string;

  displayedColumns = [ 'horario','select']
  dataSource = ELEMENT_DATA;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  voltar(){
    this.router.navigate(['/home'])
  }

}
