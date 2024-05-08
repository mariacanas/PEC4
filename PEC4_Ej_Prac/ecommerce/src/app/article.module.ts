import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleItemComponent } from './article-item/article-item.component';
import { ArticleListComponent } from './article-list/article-list.component';

@NgModule({
  declarations: [ArticleItemComponent, ArticleListComponent],
  imports: [CommonModule],
  exports: [ArticleItemComponent, ArticleListComponent]
})
export class ArticleModule { }