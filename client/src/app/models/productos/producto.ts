import { Categoria } from './categoria';


export class Producto {
    constructor(
        public id: number,
        public nombre: string,
        public imagen: string,
        public variedades: Variedad[],
        public type: type.products,
    ) { }
}


export class Variedad {
    constructor(
        public id: number,
        public codigo: string,
        public imagen: string,
        public categoria: Categoria,
        public nombre: string,
        public stock: number,
        public precio: number,
        public type: type.product,
    ) { }
}

export enum type {
    product = 'product',
    products = 'products'
}
