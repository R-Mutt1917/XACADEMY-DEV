import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-clicker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clicker.html',
  styleUrl: './clicker.scss'
})
export class Clicker {
  @Input() counter = 0;
  @Output() counterChange = new EventEmitter();
  
  disableBtn = false;
  textClasses = {
    danger: this.counter > 10,
    warning: this.counter > 5 && this.counter <= 10
  }

  textStyles = {
    'font-size': this.counter <= 10 ? '20px' : '25px'
  }

  incrementar() {
    this.counter = this.counter + 1;
    this.textClasses = {
      danger: this.counter > 10,
      warning: this.counter > 5 && this.counter <= 10
    }

    this.textStyles = {
      'font-size': this.counter < 11 ? '20px' : '25px'
    }
    this.counterChange.emit(this.counter);
}

  decrementar() {
    this.counter = this.counter - 1;
    this.textClasses = {
      danger: this.counter > 10,
      warning: this.counter > 5 && this.counter <= 10
    }

      this.textStyles = {
        'font-size': this.counter < 11 ? '20px' : '25px',
    }
        this.counterChange.emit(this.counter);
  }
} 