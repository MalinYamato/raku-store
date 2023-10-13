export interface Product {
    id?: number,
    img?: string,
    title?: string,
    price?: number,
    color?: string,
    description?: string,
    impedance?: number,
    sensitivity?: string,
    type?: string,
  }

export interface State {
    productInfo: Product,
    cartItems: Product[],
    items: Product[],
  }