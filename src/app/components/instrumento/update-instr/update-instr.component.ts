import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Instrumento } from 'src/app/models/instrumento';
import { InstrumentoService } from 'src/app/service/instrumento.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-update-instr',
  templateUrl: './update-instr.component.html',
  styleUrls: ['./update-instr.component.css']
})
export class UpdateInstrComponent implements OnInit {

  instrumentos: any;  
  instrumento:Instrumento=new Instrumento();
  constructor(private instrumentoService:InstrumentoService,
    private router: Router, private activatedRoute:ActivatedRoute) { }
  ngOnInit(): void {
    this.cargarInstrumento();
  }
cargarInstrumento():void{
  this.activatedRoute.params.subscribe(params=>{
    let id = params['id']
    if(id){
      this.instrumentoService.getInstrumento(id).subscribe(
        (data)=>{
        this.instrumentos=data['CURSOR_TIPO_INSTRUMENTO'] 
        this.instrumento.nombre=this.instrumentos[0].NOMBRE;
        this.instrumento.id_tipo_instrumento=this.instrumentos[0].ID_TIPO_INSTRUMENTO;
        this.instrumento.estado=this.instrumentos[0].ESTADO
      })
    }
  })
}
modificarInstrumento():void{
  this.instrumentoService.updateInstrumento(this.instrumento).subscribe(
    response=>{
      swal.fire({
        title: 'Estas seguro?',
        text: "No podras revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, update it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/listar'])
          swal.fire(
            'Actualizado!',
            'El registro ha sido Modificado.',
            'success'
          )
        }
      })    
  })
}
}
