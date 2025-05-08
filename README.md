# Cartão de Perfil - Angular

Este projeto contém um componente `CartaoDePerfil` em Angular que exibe um cartão de perfil de usuário com informações editáveis, incluindo nome, idade, descrição e avatar. Ele permite que o usuário edite as informações e as salve, além de enviar as atualizações de volta para o componente pai.

## Funcionalidades

* **Exibição do perfil**: O componente exibe as informações de nome, idade, descrição e avatar.
* **Modo de edição**: O usuário pode alternar entre o modo de visualização e o modo de edição.
* **Edição**: No modo de edição, o usuário pode alterar o nome, idade, descrição e avatar.
* **Emissão de mudanças**: Ao editar qualquer campo, as alterações são enviadas para o componente pai.
* **Avatar condicional**: O avatar será exibido somente se um link válido for fornecido.

## Estrutura do Componente

O componente possui dois modos:

1. **Modo de Visualização**: Exibe as informações do perfil como texto estático.
2. **Modo de Edição**: Permite a edição das informações do perfil em campos de texto.

### Componentes

#### `cartao-de-perfil.component.html`

Este arquivo contém o layout do cartão de perfil, com seções para o cabeçalho, informações do perfil, formulário de edição e botão de salvar.

#### `cartao-de-perfil.component.scss`

Este arquivo contém os estilos para o componente, incluindo a formatação do cartão de perfil, os campos de entrada e os botões de edição e salvar.

#### `cartao-de-perfil.component.ts`

Este arquivo contém a lógica do componente, incluindo a inicialização de dados, controle do estado de edição e a emissão de mudanças para o componente pai.

### Funcionalidade de Edição

* **Editar Perfil**: Ao clicar no botão "Editar perfil", o modo de edição é ativado.
* **Cancelar**: O botão de "Cancelar" retorna ao modo de visualização sem salvar as alterações.
* **Salvar Alterações**: O botão "Salvar alterações" envia as atualizações para o componente pai.

### Inputs e Outputs

* **Input**: Recebe os dados do perfil (nome, idade, descrição e avatar) do componente pai.
* **Output**: Emite os dados atualizados para o componente pai quando houver uma alteração.

## Instalação

1. Clone o repositório em sua máquina.
2. Execute `npm install` para instalar as dependências do Angular.
3. Execute `ng serve` para rodar o aplicativo localmente.

## Exemplos de Uso

Para usar o componente `CartaoDePerfil` em um componente pai:

### Componente Pai (exemplo)

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-cartao-de-perfil 
      [profile]="userProfile" 
      (profileChange)="onProfileChange($event)">
    </app-cartao-de-perfil>
  `
})
export class AppComponent {
  userProfile = {
    name: 'Jessica Portilio',
    age: 30,
    description: 'Desenvolvedora Angular',
    avatar: 'https://www.example.com/avatar.jpg'
  };

  onProfileChange(updatedProfile: any) {
    this.userProfile = updatedProfile;
    console.log('Perfil atualizado', updatedProfile);
  }
}

### Componente Pai (exemplo)
<app-cartao-de-perfil 
  [profile]="userProfile" 
  (profileChange)="onProfileChange($event)">
</app-cartao-de-perfil>
