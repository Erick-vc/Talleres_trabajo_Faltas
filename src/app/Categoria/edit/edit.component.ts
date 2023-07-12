import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Categoria } from 'src/app/Modelo/Categoria';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  modelCategoria:Categoria = new Categoria();
  constructor(private router:Router, private service:ServiceService) {}

  ngOnInit() {
    this.Editar();
  }

  Editar() {
    let id = localStorage.getItem("id");
    if (id !== null) {
      this.service.get_CategoriaId(+id)
        .subscribe((response:any) => {
          console.log(response.data)
          this.modelCategoria=response.data;
        })
    } else{
      console.log('El ID es nulo')
    }
  }

  Actualizar(platillo:Categoria) {
    this.service.update_Categoria(platillo)
      .subscribe((response:any) => {
        this.modelCategoria=response.data;
        Swal.fire('¡Éxito!', 'El platillo se ha actualizado correctamente', 'success');
        this.router.navigate(["listar"]);
      })
  }

}
