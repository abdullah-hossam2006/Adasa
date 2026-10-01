import { Data } from '@angular/router';
import { Component, Input,inject } from '@angular/core';
import { Post, AdasaData } from '../models/blog.models';
import pureData from '../data/data.json';
import { log } from 'console';
import { BlogCard } from '../blog-card/blog-card';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  imports: [BlogCard],
  templateUrl: './blog-details.html',
  styleUrl: './blog-details.css',
})
export class BlogDetails {
 private route = inject(ActivatedRoute);
private router = inject(Router);
  data: AdasaData = pureData;
  post: Post = this.data.posts[3];
  get firstSentence(): string {
    return this.post.content[0].split('#')[0] + '.';
  }
  get contentSections() {
    const parts = this.post.content.split('\n\n');

    return parts
      .filter((part) => part.trim())
      .map((part) => {
        if (part.startsWith('## ')) {
          return {
            type: 'heading',
            text: part.replace('## ', '').trim(),
          };
        }

        return {
          type: 'paragraph',
          text: part.trim(),
        };
      });
  }

  get relatedPosts(): Post[] {
    return this.data.posts.filter((post) => post.id !== this.post.id).slice(0, 3);
  }
 ngOnInit() {
  const slug = this.route.snapshot.paramMap.get('slug');

  const post = this.data.posts.find(post => post.slug === slug);

  if (!post) {
    this.router.navigate(['/not-found']);
    return;
  }

  this.post = post;
}
}
