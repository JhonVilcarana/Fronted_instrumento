import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Instrumento } from 'src/app/models/instrumento';
import { InstrumentoService } from 'src/app/service/instrumento.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-instr',
  templateUrl: './listar-instr.component.html',
  styleUrls: ['./listar-instr.component.css']
})
export class ListarInstrComponent implements OnInit {

  instrumentos:any;
  constructor(private instrumentoService:InstrumentoService, private router: Router) { }
  ngOnInit(): void {
    this.listar();
    }
  delInstrumento(num:number):void{
        Swal.fire({
          title: 'Estas seguro?',
          text: "No podras reverti esto!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.instrumentoService.deleteInstrumento(num).subscribe(
              response=>{
            this.listar()
            Swal.fire(
              'Eliminado!',
              'El registro ha sido eliminado.',
              'success'
            )})
          }
          }
        )   
  }
  listar():void{
    this.instrumentoService.getInstrumentos().subscribe(
      (data)=>{
        this.instrumentos = data['CURSOR_TIPO_INSTRUMENTO'];
      }
    ) 
  }

}