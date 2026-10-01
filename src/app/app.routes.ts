import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Blog } from './blog/blog';
import { BlogDetails } from './blog-details/blog-details';
import { NotFound } from './not-found/not-found';
import { WhoAreWe } from './who-are-we/who-are-we';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'blog', component: Blog },
  {path: 'blog/:slug',component: BlogDetails},
  {path:'not-found',component:NotFound},
  {path:'who-are-we',component:WhoAreWe},
  {path: '**',component: NotFound,
  },{path:'who-are-we',component:WhoAreWe}
];
