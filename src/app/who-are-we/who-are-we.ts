import { Component } from '@angular/core';
import { AdasaData, Author } from '../models/blog.models';
import pureData from '../data/data.json';
import { TitleDescription } from '../title-description/title-description';

@Component({
  selector: 'app-who-are-we',
  imports: [TitleDescription],
  templateUrl: './who-are-we.html',
  styleUrl: './who-are-we.css',
})
export class WhoAreWe {
  data: AdasaData = pureData;

get authors(): Author[] {
  return this.data.posts
    .map(post => post.author)
    .filter(
      (author, index, self) =>
        index === self.findIndex(a => a.name === author.name)
    );
}
}
