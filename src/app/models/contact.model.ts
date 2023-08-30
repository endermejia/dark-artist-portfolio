import {ItemModel} from './item.model';

export interface ContactModel {
  email?: string;
  items: ItemModel[];
  phone?: string;
}
