import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Categoria } from 'src/app/Modelo/Categoria'
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})

export class ListarComponent implements OnInit {
  
  // * Objeto de la clase categoria
  modelCategoria: Categoria[] = [];
  constructor(private service:ServiceService, private router:Router) {}

  ngOnInit() {
    // ? aqui trabajaremos listar
    this.service.get_Categorias().subscribe(
      // En este caso, hemos utilizado response: any para permitir cualquier tipo de respuesta en la variable response.
      (response: any) => {
        if (response && response.data) {
          this.modelCategoria = response.data;
        } else {
          console.log('Error en la respuesta de la API');
        }
      },
      (error) => {
        console.log('Error al obtener los platillos:', error);
      }
    );;
  }

  Editar(platillo: Categoria):void {
    // almacenamos el id en local
    localStorage.setItem("id", platillo.id.toString());
    // y nos redirecciona al formulario
    this.router.navigate(["edit"]);
  }

  Delete(platillo:Categoria) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.delete_Categoria(platillo)
      .subscribe(() => {
        this.modelCategoria=this.modelCategoria.filter(p => p!==platillo);
      })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Acción si se cancela la confirmación
      }
    });
    
  }

}
