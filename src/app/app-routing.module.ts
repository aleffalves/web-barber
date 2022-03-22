import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AgendamentoComponent } from './component/agendamento/agendamento.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { ServicosComponent } from './component/servicos/servicos.component';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent,
  },

  {path: 'home', component: HomeComponent, canActivate : [AuthGuard],
    children: [
      {path: 'agendamento', component: AgendamentoComponent},
      {path: 'servicos', component: ServicosComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
