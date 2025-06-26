import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-home',
 imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(private router: Router, private authService: AuthService) {}

  logout() {
    Swal.fire({
    title: 'Tem certeza?',
    text: 'Você deseja sair do sistema?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sim, sair',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      this.authService.logout();
      this.router.navigate(['/login']);
    }
  });
  }
}
