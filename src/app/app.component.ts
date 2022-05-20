import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public shouldMenuOpen = false;
  public toggleMenu(): void{
    this.shouldMenuOpen = !this.shouldMenuOpen;
  }
}
