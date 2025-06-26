import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pets } from '../../model/Pets';

@Injectable({
  providedIn: 'root'
})
export class PetService {


   private apiUrl = 'http://localhost:8080/api/pets';

  constructor(private http: HttpClient) { }

  listarPets(): Observable<Pets[]> {
    return this.http.get<Pets[]>(this.apiUrl);
  }

    excluirPet(id: number) : Observable<Pets[]>{
    throw new Error('Method not implemented.');
  }
}
