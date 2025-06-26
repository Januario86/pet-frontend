import { ChangeDetectorRef, Component } from '@angular/core';
import { PetService } from '../../services/pet/pet.service';
import { finalize } from 'rxjs';
import { Pets } from '../../model/Pets';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pet',
  imports: [CommonModule],
  templateUrl: './pet.html',
  styleUrl: './pet.css'
})
export class Pet {
  pets: Pets[] = [];
  carregando = false;
  erro: string | null = null;
  
 constructor(
  private petService: PetService,
  private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
   this.buscarPets();
  }
  buscarPets(){
     this.carregando = true;
    this.petService.listarPets().pipe(
         finalize(() => {this.carregando = false
           this.cdr.detectChanges();
         })).subscribe({
      next: (res) => {
        this.pets = res;
        this.carregando = false;
      },
      error: (err) => {
        console.error('Erro ao carregar pets', err);
        this.carregando = false;
      }
    });
  }

  editarPet(pet: Pet) {
  // Aqui você pode navegar para uma tela de edição
  console.log('Editar pet', pet);
}

  excluirPet(id: number) {
    if (confirm('Deseja realmente excluir este pet?')) {
     this.petService.excluirPet(id).subscribe(() => {
       this.pets = this.pets.filter(p => p.id !== id);
    });
    }
  }

 fecharModal() {
    this.erro = null;
  }

}
