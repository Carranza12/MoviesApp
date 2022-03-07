import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OmdbService } from 'src/app/services/omdb.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  busqueda:string='';
  resultado:any;
  resultados:any;
  showDefaultMessage:boolean=true;
  constructor(private omdb:OmdbService, private route:Router) { }

  ngOnInit(): void {
   
  }
  buscar(){
    this.omdb.getQuery(`&s=${this.busqueda}`)
    .subscribe(response=>{
      this.resultados=Object.values(response);
      this.resultado=this.resultados[0]
      this.showDefaultMessage=false;
    })
  }

  detalle(id:number){
    this.route.navigate(['/detalle',id]);
  }
}
