export interface Customer {
        id: number,
        name: string,
        country: {
            name: string,
            code: string
        },
        company: string,
        date: Date,
        status: string,
        verified: true,
        activity: number,
        representative: {
            name: string,
            image: string
        },
        balance: number
 
}

export interface Product {
    code: number,
    name: string,
    category: string,
    quantity: number
}