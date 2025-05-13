import { createContext, useState } from "react";

interface ProductListContextValue {
    setCategorySelected: (category: string) => void;
}

const ProductListContext = createContext<ProductListContextValue | null>(null);

interface ProductListProviderProps {
    children: React.ReactNode;
}

const ProductListProvider = ({ children }: ProductListProviderProps) => {
    const [categorySelected, setCategorySelected] = useState("Habitação");

    return (
        <ProductListContext.Provider value={{ setCategorySelected }}>
            {children}
        </ProductListContext.Provider>
    );
};

export default ProductListProvider;
