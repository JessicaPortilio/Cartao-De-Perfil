import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cartao-de-perfil',
  imports: [CommonModule, FormsModule],
  templateUrl: './cartao-de-perfil.component.html',
  styleUrl: './cartao-de-perfil.component.scss'
})
export class CartaoDePerfilComponent {
  // @Input(): Diz que esse valor vem de fora, ou seja, do componente pai 
  // Nesse caso o nosso componente pai é o AppComponent
  // Estamos definindo o objeto do perfil com nome, idade, descrição e avatar.
  @Input() profile: any = {
    name: '',
    age: null,
    description: '',
    avatar: ''
  };


  // @Output(): Permite enviar informações de volta para o componente pai.
  // Nesse caso vamos enviar para o componente pai que é o AppComponent
  // EventEmitter: Ferramenta que dispara eventos.
  // Quando algo mudar no perfil, esse EventEmitter será usado para 
  // avisar o componente pai.
  @Output() profileChange = new EventEmitter<any>();

  // isEditing: Diz se o formulário está sendo editado.
  // Começa como false (sem edição).
  isEditing: boolean = false;

  // Função para emitir mudança
  onProfileChange() {
    // Toda vez que o usuário altera algo (nome, idade etc.), essa função é chamada.
    // this.profileChange.emit(this.profile): Envia os dados atualizados para o componente pai.
    this.profileChange.emit(this.profile);
  }

}
