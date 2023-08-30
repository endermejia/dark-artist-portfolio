import {TestBed} from '@angular/core/testing';

import {CartService} from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a cart property', () => {
    expect(service.cart).toBeTruthy();
  });

  it('should have a totalPrice property', () => {
    expect(service.totalPrice).toBeTruthy();
  });

  it('should have a add method', () => {
    expect(service.add).toBeTruthy();
  });

  it('should have a remove method', () => {
    expect(service.remove).toBeTruthy();
  });

  it('test add and totalPrice methods', () => {
    service.add({name: 'test', price: 10, icon: 'test', sizes: [], stock: 10}, 'M', 1);
    expect(service.totalPrice).toBe(10);
  });

});
