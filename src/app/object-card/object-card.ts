import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-object-card',
  imports: [],
  templateUrl: './object-card.html',
  styleUrl: './object-card.css',
})

export class ObjectCard {
@Input() icon! :string;
@Input() title! :string;
@Input() description! :string;
}
