// Solves the cyclic dependency problem
import { ActionOn, Action, Thunk, Computed } from 'easy-peasy';
import { Languages, Language } from 'types/languages';
import { Injections } from 'services';

export interface ProductsModel {
  items: Product[];
  getById: Computed<ProductsModel, (id: number) => Product | undefined>;
}

export interface BasketModel {
  productIds: number[];
  count: Computed<BasketModel, number>;
  products: Computed<BasketModel, (Product | undefined)[], StoreModel>;
  addedProduct: Action<BasketModel, number>;
  addProduct: Thunk<BasketModel, number, Injections>;
  removeProduct: Action<BasketModel, number>;
}

export interface AuditModel {
  logs: string[];
  onAddToBasket: ActionOn<AuditModel, StoreModel>;
}

export interface LanguagesModel {
  items: Languages;
  currentLanguage: Language;
  getByCode: Computed<
    LanguagesModel,
    (code: Language['code']) => Language | undefined
  >;
  selectLanguage: Action<LanguagesModel, Language>;
}

// The interface representing our entire store model
export interface StoreModel {
  audit: AuditModel;
  products: ProductsModel;
  basket: BasketModel;
  languages: LanguagesModel;
}
