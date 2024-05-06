import { Component, OnInit } from '@angular/core';
import { Article } from '../article.model';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {
  articles: Article[] = [{
    name: 'Zapatillas',
    imageUrl: './assets/images/zapatillas.jpg',
    price: 100,
    isOnSale: true,
    quantityInCart: 0
  },
  {
    name: 'Pantalon',
    imageUrl: './assets/images/pantalones.jpeg',
    price: 50,
    isOnSale: false,
    quantityInCart: 0
  },
  {
    name: 'Camiseta',
    imageUrl: './assets/images/camiseta.jpeg',
    price: 20,
    isOnSale: true,
    quantityInCart: 0
  }];

  constructor() { }

  ngOnInit(): void {
  }

  incrementQuantity(article: Article): void {
    article.quantityInCart++;
  }

  decrementQuantity(article: Article): void {
    if (article.quantityInCart > 0) {
      article.quantityInCart--;
    }
  }
}