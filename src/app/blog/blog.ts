import { Data } from '@angular/router';
import { BlogCard } from '../blog-card/blog-card';
import { Component } from '@angular/core';
import { AdasaData, Post } from '../models/blog.models'; //Interface
import pureData from '../data/data.json'; //the actual data in JSON file
import { FormsModule } from '@angular/forms';
import { TitleDescription } from '../title-description/title-description';
import { CategoryButton } from '../category-button/category-button';

@Component({
  selector: 'app-blog',
  imports: [BlogCard, FormsModule, TitleDescription, CategoryButton],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  //data.json => pureData => data => html
  data: AdasaData = pureData; //the property that we will use
  viewMode: 'grid' | 'list' = 'grid';
  searchTerm: string = '';
  selectedCategory: string = 'الكل';

  get filteredPosts() {
    return this.data.posts.filter((post) => {
      const matchesCategory =
        this.selectedCategory === 'الكل' || post.category === this.selectedCategory;

      const search = this.searchTerm.toLowerCase().trim();

      const matchesSearch =
        post.title.toLowerCase().includes(search) ||
        post.excerpt.toLowerCase().includes(search) ||
        post.category.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }
  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
