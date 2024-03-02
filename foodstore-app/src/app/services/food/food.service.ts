import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }


  getAll():String[] {
    return [
      'assets/images/food-1.png',
      'assets/images/food-2.png',
      'assets/images/food-3.png',
      'assets/images/food-4.png',
      'assets/images/food-5.png',
      'assets/images/food-6.png',
    ]
  }
}
