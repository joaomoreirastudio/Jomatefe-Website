import { createContext, useState } from "react";

interface ProductListContextValue {
    setCategorySelected: (category: string) => void;
}

const ProductListContext = createContext<ProductListContextValue | null>(null);

export default ProductListContext;
