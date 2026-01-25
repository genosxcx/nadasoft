import { Component } from '@angular/core';

@Component({
  selector: 'app-solar-link',
  imports: [],
  templateUrl: './solar-link.html',
  standalone:true,
  styleUrl: './solar-link.scss',
})
export class SolarLink {
  currentYear = new Date().getFullYear();
}
