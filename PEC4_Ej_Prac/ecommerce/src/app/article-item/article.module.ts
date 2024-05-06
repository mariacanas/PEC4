import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleItemComponent } from './article-item.component';

@NgModule({
  declarations: [ArticleItemComponent],
  imports: [CommonModule],
  exports: [ArticleItemComponent]
})
export class ArticleModule { }