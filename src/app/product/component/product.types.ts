export interface Color {
    name: string,
    color: string
}

export type Sizes = "small" | "medium" | "large"

export interface Product {
    "id": string,
    "code": `#${string}`,
    "imageUrl": string,
    "name": string,
    "rate": number,
    "howManyReviews": number,
    "price": number,
    "oldPrice": number,
    "availability": "In stock" | "Not available" | "Coming soon",
    "tags": string[],
    "description": string,
    "features": string[],
    "colors": Color[],
    "sizes": Sizes[]
}
