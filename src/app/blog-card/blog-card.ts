import { Component,Input } from '@angular/core';
import { Post } from '../models/blog.models';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  imports: [RouterLink],
  templateUrl: './blog-card.html',
  styleUrl: './blog-card.css',
})
export class BlogCard {
  @Input() post!:Post;
  @Input() viewMode: 'grid' | 'list' = 'grid';
}
