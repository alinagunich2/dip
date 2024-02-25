import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ArticleCartComponent } from 'src/app/shared/components/article-cart/article-cart.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  {path:'blog',component:BlogComponent},
  {path:'article/:url',component:ArticleComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
