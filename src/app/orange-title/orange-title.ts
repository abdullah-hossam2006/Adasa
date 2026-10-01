import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-orange-title',
  imports: [RouterLink],
  templateUrl: './orange-title.html',
  styleUrl: './orange-title.css',
})
export class OrangeTitle {
  @Input() text! :string;
  @Input() link! :string;
}
