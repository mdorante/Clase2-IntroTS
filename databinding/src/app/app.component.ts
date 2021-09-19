import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'databinding';

  persona: Object = {
    Nombre: 'Lionel',
    Apellido: 'Messi',
    Edad: 34,
    Documento: 1234567890,
  };
}
