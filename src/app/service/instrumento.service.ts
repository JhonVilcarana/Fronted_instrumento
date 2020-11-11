import { Injectable } from '@angular/core';
import { Instrumento } from '../models/instrumento';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstrumentoService {
  private httpHeaders = new HttpHeaders({ 'Content-Type':'application/json'});
  private instrumentoUrl:string = 'http://localhost:9090/tipoinstrumento';//endpoint
  constructor(private http: HttpClient) { }

  getInstrumentos():Observable<Instrumento[]>{
    return this.http.get<Instrumento[]>(this.instrumentoUrl+'/all');
  }
  getInstrumento(id:number):Observable<Object> {
    return this.http.get(`${this.instrumentoUrl}/${id}`);
  }
  
  addInstrumento(instrumento: Instrumento): Observable<number>{
    return this.http.post<number>(this.instrumentoUrl+"/add", instrumento, {headers:this.httpHeaders});
  }

  deleteInstrumento(id: number): Observable<number>{
    return this.http.delete<number>(this.instrumentoUrl+"/delete/"+id,{headers:this.httpHeaders});
  }

  updateInstrumento(instrumento: Instrumento):Observable<number> {
    return this.http.put<number>(`${this.instrumentoUrl}/update/${instrumento.id_tipo_instrumento}`, instrumento,{headers:this.httpHeaders});
  }
}

