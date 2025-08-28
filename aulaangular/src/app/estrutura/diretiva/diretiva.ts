import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diretiva',
  standalone: true,                
  imports: [CommonModule],  
  templateUrl: './diretiva.html',
  styleUrls: ['./diretiva.css']
})
export class Diretiva {
  mostrarLista = true;
  fontSize = 16;

  alunos = [
    { id: 123, nome: 'Victor', ativo: true },
    { id: 238, nome: 'Marcos', ativo: false },
    { id: 456, nome: 'Gabriel', ativo: true }
  ];

  toggleLista() {
    this.mostrarLista = !this.mostrarLista;
  }

  aumentarFonte() {
    this.fontSize += 2;
  }

  diminuirFonte() {
    if (this.fontSize > 10) {
      this.fontSize -= 2;
    }
  }
}
