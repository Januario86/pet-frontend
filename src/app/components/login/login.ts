import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  
  username: string = '';
  password: string = '';

  constructor(
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router
  ) {}
  onSubmit() {
  const credentials = { login: this.username, senha: this.password };

  this.loginService.login(credentials).subscribe({
    next: (response) => {
      console.log('onSubmit >>>>')
      this.authService.setToken(response.token);
      this.router.navigate(['/home']);
    },
    error: (err) => {
      console.error('Erro ao logar:', err);
    }
  });   
  }
}
