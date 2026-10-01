import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-title-description',
  imports: [],
  templateUrl: './title-description.html',
  styleUrl: './title-description.css',
})
export class TitleDescription {
  @Input() text!:string;
}
