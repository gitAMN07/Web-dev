import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 17',
      description: 'Apple iPhone 17 Pro 256GB Orange.',
      price: 844207,
      rating: 4.8,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pc3/p95/64168416.png?format=gallery-medium'],
      link: 'https://surl.li/mgineb',
      likes: 1119,
      categoryId: 1
    },
    {
        id: 2,
        name: 'Realme Note 60X',
        description: 'Realme Note 60X 4GB/128GB Black Smartphone + Gift.',
        price: 61490,
        rating: 5.0,
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p27/pbe/43671494.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p95/pfc/43671495.jpeg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pc3/pf5/43671499.jpeg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p2e/p73/43671503.jpg?format=gallery-medium'],
        link: 'https://surl.lu/rcmttz',
        likes: 1788,
        categoryId: 1
      },
      {
        id: 3,
        name: 'Xiaomi Redmi Note 14 Pro 8',
        description: 'Xiaomi Redmi Note 14 Pro 8GB/256GB Black Smartphone.',
        price: 156956,
        rating: 4.9,
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p64/p81/67214865.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p65/p99/45808873.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p81/p99/45808874.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pb9/p99/45808876.jpg?format=gallery-medium'],
        link: 'https://surl.li/ubjsvh',
        likes: 1339,
        categoryId: 1
      },
      {
        id: 4,
        name: 'OPPO A78',
        description: 'OPPO A78 5G 8GB/256GB Black Smartphone.',
        price: 88998,
        rating: 4.8,
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p79/pb5/25477542.jpeg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pf2/pfc/64346866.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pb9/pfc/64346868.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p31/pfa/64346870.png?format=gallery-medium'],
        link: 'https://surl.li/fecrny',
        likes: 1340,
        categoryId: 1
      },
      {
        id: 5,
        name: 'Poco X7 Pro',
        description: 'Poco X7 Pro 12GB/512GB Green Smartphone.',
        price: 248800,
        rating: 4.6,
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pfe/p6c/67021880.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p7b/pec/19979679.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p0f/pea/19979680.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p82/pe9/19979685.png?format=gallery-medium'],
        link: 'https://surl.li/knkxfy',
        likes: 138,
        categoryId: 1
      }, 
       {
        id: 1,
        name: 'MacBook Air 13',
        description: 'Laptop Apple MacBook Air 13 2020 13.3" / 8 GB / SSD 256 GB / macOS.',
        price: 439952,
        rating: 5.0,
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h0a/h85/64213178351646.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hdb/hb3/64213181169694.jpg?format=gallery-medium'],
        link: 'https://surl.li/phmzjn',
        likes: 585,
        categoryId: 2
      },  
      {
       id: 2,
       name: 'HYDRA Home H20',
       description: 'Laptop HYDRA Home H20 15.6" / 12 GB / SSD 512 GB.',
       price: 135000,
       rating: 4.7,
       images: ['https://resources.cdn-kaspi.kz/img/m/p/pcf/p46/69607281.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pec/p46/69607282.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p7d/p51/36556289.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p6f/p03/36556305.jpg?format=gallery-medium'],
       link: 'https://surl.li/ydlvax',
       likes: 778,
       categoryId: 2
     },
     {
        id: 3,
        name: 'Acer Aspire 3',
        description: 'Acer Aspire 3 15.6" Laptop with 8GB of Storage and 256GB SSD.',
        price: 166828,
        rating: 4.8,
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p24/pae/30100209.jpeg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p62/p4f/30100210.png?format=gallery-medium'],
        link: 'https://surl.li/ufxeoe',
        likes: 450,
        categoryId: 2
      },
      {
        id: 4,
        name: 'VisionX yoga notebook 3',
        description: 'VisionX Yoga Notebook 3 15.6" / 16 GB / 512 GB SSD.',
        price: 239999,
        rating: 4.9,
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p80/pb3/60370908.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pf8/pb0/60370910.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pdc/pb0/60370911.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pbf/pb0/60370912.png?format=gallery-medium'],
        link: 'https://surl.li/jxcavw',
        likes: 30,
        categoryId: 2
      },
      {
        id: 5,
        name: 'ASUS TUF Gaming F16',
        description: 'ASUS TUF Gaming F16 16" Laptop with 16GB of Storage and 512GB of SSD.',
        price: 538820,
        rating: 4.2,
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p88/p17/33000228.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p6c/p17/33000229.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p00/p15/33000230.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pe4/p14/33000231.jpg?format=gallery-medium'],
        link: 'https://surl.li/axdcqy',
        likes: 37,
        categoryId: 2
      },
      {
        id: 1,
        name: 'Apple AirPods 4',
        description: 'Apple AirPods 4 white headphones.',
        price: 59975,
        rating: 4.9,
        images: ['https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pec/pd7/97865769.jpeg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h9f/had/87309385662494.png?format=gallery-medium'],
        link: 'https://surl.lt/mglnkt',
        likes: 3268,
        categoryId: 3
      },
      {
        id: 2,
        name: 'JASPER JS70',
        description: 'JASPER JS70 Beige Headphones.',
        price: 3490,
        rating: 5.0,
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pa8/p4f/66068562.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pc4/p4f/66068563.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pe0/p4f/66068564.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pfc/p4f/66068565.jpg?format=gallery-medium'],
        link: 'https://surl.li/ijesji',
        likes: 274,
        categoryId: 3
      },
      {
        id: 3,
        name: 'Apple EarPods Lightning',
        description: 'Apple EarPods Lightning Headphones (White).',
        price: 9675,
        rating: 4.9,
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p6a/p23/108964618.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hff/h5c/63764029243422.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h49/h9c/63764029636638.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hb2/h57/63764030029854.jpg?format=gallery-medium'],
        link: 'https://surl.li/iwkknw',
        likes: 3007,
        categoryId: 3
      },
      {
        id: 4,
        name: 'JBL Tune 510BT',
        description: 'JBL Tune 510BT Pink Headphones.',
        price: 13547,
        rating: 5.0,
        images: ['https://resources.cdn-kaspi.kz/img/m/p/hf0/h17/86453058535454.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h3c/hdd/86453058568222.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h3d/h10/63917315784734.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hff/h13/63917320667166.jpg?format=gallery-medium'],
        link: 'https://surl.li/rzxdtp',
        likes: 333,
        categoryId: 3
      },
      {
        id: 5,
        name: 'Huawei FreeBuds Pro 4',
        description: 'Huawei FreeBuds Pro 4 Black Headphones.',
        price: 74890,
        rating: 4.7,
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p34/p19/35108547.JPG?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p18/p19/35108548.JPG?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pfc/p18/35108549.JPG?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p90/p16/35108550.JPG?format=gallery-medium'],
        link: 'https://surl.lu/bhjiqy',
        likes: 83,
        categoryId: 3
      },
      {
        id: 1,
        name: 'Apple iPad A16',
        description: 'Apple iPad A16 11 2025 Wi-Fi 11-inch 6GB/128GB Silver Tablet.',
        price: 206230,
        rating: 4.8,
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p85/pe5/37011897.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p69/pe5/37011898.png?format=gallery-medium'],
        link: 'https://surl.li/qbwxai',
        likes: 818,
        categoryId: 4
      },
      {
        id: 2,
        name: 'Xiaomi Redmi Pad 2',
        description: 'Xiaomi Redmi Pad 2 4G Tablet 11-inch 8GB/256GB Gray.',
        price: 129990,
        rating: 5.0,
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p34/pcd/81439931.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pbd/p9b/46318883.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pa0/p9b/46318884.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p84/p9b/46318885.jpg?format=gallery-medium'],
        link: 'https://surl.li/byitvh',
        likes: 165,
        categoryId: 4
      },
      {
        id: 3,
        name: 'AIRSTAR G2000',
        description: 'AIRSTAR G2000 10-inch Tablet 16GB/512GB Black.',
        price: 38950,
        rating: 4.5,
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p19/pb7/109050903.jpeg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p56/pc1/109050906.jpeg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pc0/pc4/109050907.jpeg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p93/pcb/109050909.jpeg?format=gallery-medium'],
        link: 'https://surl.li/mtstui',
        likes: 739,
        categoryId: 4
      },
      {
        id: 4,
        name: 'Samsung Galaxy Tab A9',
        description: 'Samsung Galaxy Tab A9 LTE ​​8.7-inch 4GB/64GB Blue.',
        price: 112995,
        rating: 5.0,
        images: ['https://resources.cdn-kaspi.kz/img/m/p/hf9/hdc/84176279076894.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p2f/p4c/78317027.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p13/p4c/78317028.png?format=gallery-medium'],
        link: 'https://surl.li/fixjoi',
        likes: 263,
        categoryId: 4
      },
      {
        id: 5,
        name: 'Apple iPad Air 11',
        description: 'Apple iPad Air 11 2025 Wi-Fi 11-inch 8GB/128GB Purple.',
        price: 318961,
        rating: 4.8,
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pae/pf8/37020299.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p39/pbd/37020300.png?format=gallery-medium'],
        link: 'https://surl.li/qxzfsy',
        likes: 76,
        categoryId: 4
      }
  ];

  getCategories(): Category[] {
    return [
        {id: 0 , name:"Favorites"},
        ...this.categories
    ];
  }

  getFavorites(): Product[] {
    return this.products
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}