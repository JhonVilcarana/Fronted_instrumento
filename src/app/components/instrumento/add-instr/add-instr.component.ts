import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute} from '@angular/router';
import { Instrumento} from 'src/app/models/instrumento';
import { InstrumentoService } from 'src/app/service/instrumento.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-instr',
  templateUrl: './add-instr.component.html',
  styleUrls: ['./add-instr.component.css']
})
export class AddInstrComponent implements OnInit {

  instrumentoModel:Instrumento = new Instrumento();
  constructor(private instrumentoService:InstrumentoService,
    private router: Router, private activatedRoute:ActivatedRoute) { }
  
  ngOnInit(): void {}  
  
  public create():void{       
      this.instrumentoService.addInstrumento(this.instrumentoModel).subscribe(        
        response=>{
          this.router.navigate(['/listar'])
        swal.fire('Nuevo Instrumento', `Instrumento ${this.instrumentoModel.nombre} creado con exito`,"success")      
      })
     
  }
}
