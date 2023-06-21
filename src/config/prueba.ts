export interface Admin {
  id_admin: number;
  name_admin: string;
  email: string;
  thephone: string;
  password: string;
  image: string;
}

export interface Provider {
  id_provider: number;
  name_provider: string;
  direction: string;
  telephone: string;
}

export interface Input {
  id_input: number;
  input_number: number;
  input_details: string;
  date: Date;

  //FK - Provider
  id_provider: number;
}

export interface InputDetails {
  id_input_details: number;
  incoming_quantity: number;

  //FK - INPUT, PRODUCT
  id_input: number;
  id_product: number;
}

export interface Product {
  id_product: number;
  name_product: string;
  description: string;
  price: number;
  quantity_aviable: number;
  stock: boolean;
  image: string;
  until_box: boolean;

  //FK - CATEGORY
  id_category: number;
}

export interface Category {
  id_category: number;
  name_category: string;
  description: string;
}

export interface Output {
  id_output: number;
  date_output: Date;
  outgoing_amount: number;

  //FK - PRODUCT
  id_product: number;
}
