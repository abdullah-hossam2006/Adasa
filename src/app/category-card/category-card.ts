import { Component, Input } from '@angular/core';
import { Category } from '../models/blog.models';

@Component({
  selector: 'app-category-card',
  imports: [],
  templateUrl: './category-card.html',
  styleUrl: './category-card.css',
})
export class CategoryCard {
  @Input() category!: Category;
}
