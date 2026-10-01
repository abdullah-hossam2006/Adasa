import { Component ,EventEmitter,Input,Output} from '@angular/core';

@Component({
  selector: 'app-category-button',
  imports: [],
  templateUrl: './category-button.html',
  styleUrl: './category-button.css',
})
export class CategoryButton {
   @Input() name!: string;
  @Input() active: boolean = false;

  @Output() categorySelected = new EventEmitter<string>();

  selectCategory() {
    this.categorySelected.emit(this.name);
  }
}

