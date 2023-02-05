export interface IProduct{
    id:number,
    name:string,
    quantity:number,
    price:number,
    imgURL:string
}

export interface ICategory{
    id:number,
    name:string
}

export enum DiscountOffers{
    NoDiscount,
    "10%",
    "15%"
}