import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleModule } from './article-item/article.module';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet,CommonModule, ArticleModule]
})
export class AppComponent {
  title = 'ecommerce';

}
