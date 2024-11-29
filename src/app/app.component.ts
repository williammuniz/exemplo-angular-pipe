import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StatusClassPipe } from './pipes/status-class.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, StatusClassPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  text = 'william';
  pessoa = {
    name: 'William',
    status: 1
  };
  pessoa2 = {
    name: 'Leticia',
    status: 2
  };
  pessoa3 = {
    name: 'Tobias',
    status: 3
  };

}
