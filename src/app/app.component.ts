import { Component } from '@angular/core';
import { CartaoDePerfilComponent } from "./components/cartao-de-perfil/cartao-de-perfil.component";

@Component({
  selector: 'app-root',
  imports: [CartaoDePerfilComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  // userProfile: É um objeto com as informações do usuário
  userProfile = {
    name: 'Jessica Smith',
    age: 30,
    description: 'Frontend Developer | Angular Specialist | UI/UX Enthusiast',
    avatar: 'assets/images/avatar1.png'
  };



  // onProfileChange(updatedProfile: any): Função que é 
  // chamada sempre que o perfil é alterado no componente filho.
  // updatedProfile: Contém os novos dados do perfil (nome, idade, etc.).
  onProfileChange(updatedProfile: any) {
    // console.log(...): Apenas imprime no console (para o programador ver).
    console.log('Profile updated:', updatedProfile);
    
  }

}
