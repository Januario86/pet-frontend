import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  
  username: string = '';
  password: string = '';
  erro: string | null = null;
  constructor(
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router
  ) {}
  onSubmit() {
  const credentials = { login: this.username, senha: this.password };

  this.loginService.login(credentials).subscribe({
    next: (response) => {
      this.authService.setToken(response.token);
      this.router.navigate(['/home']);
    },
    error: (err) => {
        this.erro = 'Erro ao realizar login';
        console.error('Erro ao realizar login', err);
      }
    });
  }

  fecharModal() {
    this.erro = null;
  }
}
