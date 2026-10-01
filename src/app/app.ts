import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Home } from './home/home';
import { Blog } from './blog/blog';
import { TitleDescription } from './title-description/title-description';
import { ObjectCard } from './object-card/object-card';
import { BlogDetails } from './blog-details/blog-details';
import { NotFound } from './not-found/not-found';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Home, Blog, TitleDescription, ObjectCard, BlogDetails, NotFound, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Project');
}
