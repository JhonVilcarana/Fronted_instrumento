import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddInstrComponent } from './components/instrumento/add-instr/add-instr.component';
import { ListarInstrComponent } from "./components/instrumento/listar-instr/listar-instr.component";
import { UpdateInstrComponent } from './components/instrumento/update-instr/update-instr.component';

const ROUTES: Routes = [
  {path :'listar', component: ListarInstrComponent },
  {path :"instrumento/add", component: AddInstrComponent },
  {path :"editar/:id", component: UpdateInstrComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
