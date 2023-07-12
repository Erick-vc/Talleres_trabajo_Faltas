import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../Modelo/Categoria';


@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  
  constructor(private http: HttpClient) {}
  
  url_Mostrar = 'http://localhost:5000/ux-gestion-categorias/da/servicio-al-cliente/v1/mostrar-categorias';   
  get_Categorias() {
    return this.http.get<Categoria[]>(this.url_Mostrar);
  }


  url_Crear = 'http://localhost:5000/ux-gestion-categorias/da/servicio-al-cliente/v1/create'
  create_Categorias(categoria:Categoria) {
    return this.http.post<Categoria>(this.url_Crear, categoria);
  }

  url_Mostrar_Id = 'http://localhost:5000/ux-gestion-categorias/da/servicio-al-cliente/v1/mostrar-detalles-categorias'
  get_CategoriaId(id:number) {
    return this.http.get<Categoria>(this.url_Mostrar_Id+"/"+id);
  }

  url_Acutalizar_id = 'http://localhost:5000/ux-gestion-categorias/da/servicio-al-cliente/v1/editar-categorias'
  
  update_Categoria(categoria:Categoria) {
    return this.http.put<Categoria>(this.url_Acutalizar_id+"/"+categoria.id,categoria)
  }

  url_Delete_id = "http://localhost:5000/ux-gestion-categorias/da/servicio-al-cliente/v1/eliminar-categorias"

  delete_Categoria(categoria: Categoria) {
    return this.http.delete<Categoria>(this.url_Delete_id+"/"+categoria.id)
  }


}
