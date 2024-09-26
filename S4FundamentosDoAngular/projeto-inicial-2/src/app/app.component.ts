import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  inputText = "Texto Inicial Alterado";
  inputType = "text";
  isDisabled = false;
  widfhButton1 = '110px';
  widfhButton2 = 130;
  isRedButton = true;
  isGreenButton = true;

  stylesObj = {
    width: '160px',
    backgroundColor: 'grey',
  }

  updateStyleObj() {
    console.log('updateStyleObj')
    this.stylesObj.width = '170px';
    this.stylesObj.backgroundColor = 'lightblue';
  }

  updateStyleObjCorrect() {
    console.log('updateStyleObjCorrect');

    this.stylesObj = {
      width : '170px',
      backgroundColor: 'lightblue',
    };
  }

  updateWidth() {
    this.widfhButton2 = 200;
  }

  enableInput() {
    this.isDisabled = false;
  }

  disableInput() {
    this.isDisabled = true;
  }

  setPasswordTypeInput() {
    this.inputType = 'password';
  }

  setTextTypeInput() {
    this.inputType = 'text';
  }

  logInputText() {
    console.log(this.inputText);
  }

  handleInputKeyup(event: KeyboardEvent) {
    const currentText = (event.target as HTMLInputElement).value
    console.log(currentText);
  }

  buttonTitle = 'Título do botão';
  buttonDisable = false;
  onButtonClick() {
    this.buttonTitle = 'Título ALTERADOOOOOO';
    this.buttonDisable = !this.buttonDisable;
  }
}
