import React, { createContext, ReactNode, useContext, useState } from 'react';

export interface Product {
    id: number;
    name: string;
    quantity: number;
    price:number
}

export interface MyContextType {
    cart: Product[];
    addToCart: (product: Product) => void;
    delToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
}

const defaultContextValue: MyContextType = {
    cart: [],
    addToCart: () => {},
    delToCart: () => {},
    removeFromCart: () => {},
};


interface MyProviderProps {
    children: ReactNode;
}
const MyContext = createContext<MyContextType>(defaultContextValue);

const MyProvider: React.FC<MyProviderProps> =  ({ children }: { children: ReactNode })=> {
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        console.log(product);
        const existingProductIndex = cart.findIndex((item) => item.id === product.id);

        if (existingProductIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingProductIndex].quantity += 1;
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const delToCart = (product: Product) => {
        const existingProductIndex = cart.findIndex((item) => item.id === product.id);

        if (existingProductIndex !== -1) {
            const updatedCart = [...cart];
            if (updatedCart[existingProductIndex].quantity > 0) {
                updatedCart[existingProductIndex].quantity -= 1;
                if (updatedCart[existingProductIndex].quantity === 0) {
                    removeFromCart(product.id);
                } else {
                    setCart(updatedCart);
                }
            }
        } else {
            setCart([...cart, { ...product, quantity: 0 }]);
        }
    };

    const removeFromCart = (productId: number) => {
        const updatedCart = cart
            .map((item) =>
                item.id === productId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
            .filter((item) => item.id !== productId);

        setCart(updatedCart);
    };

    return (
        <MyContext.Provider value={{ cart, addToCart, delToCart, removeFromCart }}>
            {children}
        </MyContext.Provider>
    );
};

const useMyContext = () => {
    const context = useContext(MyContext);
    return context;
};

export { useMyContext };
export default MyProvider;
