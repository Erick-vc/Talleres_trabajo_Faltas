import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/Modelo/Categoria';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  modelCategoria= new Categoria();

  constructor(private router:Router, private service:ServiceService) {}

  ngOnInit() {

  }

  // metodo guardar
  Guardar(platillo:Categoria) {
    this.service.create_Categorias(platillo)
    .subscribe(data => {
      Swal.fire('¡Éxito!', 'La categoria se ha guardado correctamente', 'success');
      this.router.navigate(["listar"]);
    })
  }

}
