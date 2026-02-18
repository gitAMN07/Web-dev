import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15',
      description: 'Apple smartphone with A16 chip and improved camera.',
      price: 398405,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h81/h37/86303335186462.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hea/h39/83559339655198.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h22/hf6/83559333953566.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hf0/h8c/83559334019102.png?format=gallery-medium'],
      link: 'https://surl.lu/xanoeo'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      description: 'Flagship Android smartphone with AMOLED display.',
      price: 375784,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p6b/pc0/1610157.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p87/pc0/1610158.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p9c/pc3/1610165.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p80/pc3/1610164.png?format=gallery-medium'],
      link: 'https://surl.li/czsvka'
    },
    {
      id: 3,
      name: 'Banila Co Clean It Zero Original',
      description: 'Clean It Zero Cleansing Balm, with a creamy texture like soft butter, removes makeup and unclogs pores without irritating or leaving behind any impurities.',
      price: 4199,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pf7/p4a/56907595.jpg?format=gallery-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p6e/p00/56907600.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p52/p00/56907601.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p1a/p00/56907603.jpg?format=gallery-medium'],
      link: 'https://surl.lt/kmdaiv'
    },
    {
      id: 4,
      name: 'Apple MacBook Air 13 2020 13.3" / 8 Гб / SSD 256 Гб / macOS / MGN63RU/A',
      description: 'The first chip designed specifically for the Mac, the Apple M1 system-on-a-chip packs an astonishing 16 billion transistors and integrates the CPU, GPU, Neural Engine, I/O controllers, and many other components.',
      price: 429990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h0a/h85/64213178351646.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h3a/h0d/64213216755742.jpg?format=gallery-medium'],
      link: 'https://surl.li/bkucxn'
    },
    {
      id: 5,
      name: 'Puzzle: Fruits and vegetables, colors, shapes, cars, fish, numbers',
      description: 'The Montessori Busy Book is a fun early development tool that helps children develop fine motor skills, logical thinking, and attention through play.',
      price: 1700,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p51/p70/39436117.png?format=gallery-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p6d/p70/39436118.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p89/p70/39436119.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/pf5/p72/39436120.jpg?format=gallery-medium'],
      link: 'https://surl.li/wnnzyi'
    },
    {
      id: 6,
      name: 'Aesthetic slicker brush for cats and dogs, gray',
      description: 'The universal slicker brush for pets is an indispensable assistant in grooming your pets coat, ensuring effective hair removal and a comfortable brushing process.',
      price: 790,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he1/h0a/87061916090398.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h25/h7c/87061916352542.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h22/hf2/87061916221470.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hc7/h36/87061916549150.jpg?format=gallery-medium'],
      link: 'https://surl.li/yebili'
    },
    {
      id: 7,
      name: 'iPhone 13 case with a cat design',
      description: 'A durable and stylish case for your smartphone that provides protection from scratches, impacts, and dirt.',
      price: 288,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p3f/pe3/92240595.bin?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p5b/pe3/92240596.bin?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hed/hf1/86602501324830.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hed/hf1/86602501324830.jpg?format=gallery-medium'],
      link: 'https://surl.li/gxbywo'
    },
    {
      id: 8,
      name: 'Ultra-S ULTMICE11-H2 Mouse',
      description: 'Introducing the Ultra-S gaming mouse—a combination of style, power, and advanced functionality for true victories.',
      price: 9800,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p23/pee/69280945.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p47/peb/69280950.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p9e/pea/69280956.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p65/pea/69280958.jpg?format=gallery-medium'],
      link: 'https://surl.li/lctijc'
    },
    {
      id: 9,
      name: 'Freestanding multi-tier dryer',
      description: 'A freestanding dish drainer is an indispensable tool in your kitchen, providing effective drying and organization of dishes.',
      price: 5999,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf0/h61/84201003712542.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hf0/h61/84201003712542.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h44/h96/84201003778078.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h44/h96/84201003778078.jpg?format=gallery-medium'],
      link: 'https://surl.lu/etuemq'
    },
    {
      id: 10,
      name: 'Crossbody bag',
      description: 'This elegant crossbody bag is a perfect addition to your everyday wardrobe.',
      price: 1348,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p17/pb5/30561995.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p46/p52/30562003.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p62/p52/30562002.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p9a/p52/30562000.jpg?format=gallery-medium'],
      link: 'https://surl.li/ndjqyk'
    }
  ];
}