import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-clicker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clicker.html',
  styleUrl: './clicker.scss'
})
export class Clicker implements OnInit, AfterViewInit, OnDestroy {
  @Input() counter = 0;
  @Output() counterChange = new EventEmitter();
  timeoutRef?: ReturnType<typeof setTimeout>;

  constructor() {
  console.log('soy el constructor de clicker');
}

  ngOnInit() {
    console.log('soy el oninit de clicker');
    this.timeoutRef = setTimeout(() => {
      console.log('soy un timeout');
    }, 3000)
}

  ngAfterViewInit(): void {
    clearTimeout(this.timeoutRef);
    console.log('soy el afterviewinit de clicker');
}

  ngOnDestroy(): void {
    console.log('soy el ondestroy de clicker');
}
  
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