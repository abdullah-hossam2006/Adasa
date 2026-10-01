import { Component } from '@angular/core';
import { TitleDescription } from '../title-description/title-description';
import { ObjectCard } from '../object-card/object-card';
import { OrangeTitle } from '../orange-title/orange-title';
import { AdasaData ,Post} from '../models/blog.models';
import pureData from '../data/data.json'
import { BlogCard } from '../blog-card/blog-card';
import { CategoryCard } from '../category-card/category-card';
@Component({
  selector: 'app-home',
  imports: [TitleDescription, ObjectCard, OrangeTitle, BlogCard, CategoryCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  data:AdasaData = pureData;

  get latestPosts(): Post[] {
  return [...this.data.posts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);
}
}
