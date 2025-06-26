import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Cliente } from '../../../model/Cliente';
import { CommonModule } from '@angular/common';
import { finalize } from 'rxjs';
import { ClienteService } from '../../../services/clientes/cliente.service';

@Component({
  selector: 'app-cliente-component',
  imports: [CommonModule],
  templateUrl: './cliente-component.html',
  styleUrl: './cliente-component.css'
})
export class ClienteComponent implements OnInit {

  clientes: Cliente[] = [];
  carregando: boolean = false;
  erro: string | null = null;
  constructor(
    private clienteService: ClienteService,
    private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.buscarClientes();
  }

  buscarClientes() {
    this.carregando = true;
    this.erro = null;

    console.log('>>> Iniciando chamada de clientes');

    this.clienteService.clientes().pipe(
     finalize(() => {this.carregando = false
      console.log('Finalizou, carregando:', this.carregando);
      this.cdr.detectChanges();
     })).subscribe({
      next: (response) => {
         console.log('>>> Resposta recebida');

        this.clientes = response;       
      },
      error: (err) => {
         console.log('>>> Erro recebido');
       
        if (err.status === 403) {
          this.erro = 'Acesso negado. Você não tem permissão para ver os clientes.';
        } else if (err.status === 401) {
          this.erro = 'Sessão expirada ou não autorizada.';
        } else {
          this.erro = 'Erro ao carregar clientes.';
        }

        console.error('Erro ao carregar clientes', err);
      }
    });
  }

  fecharModal() {
    this.erro = null;
  }
}


