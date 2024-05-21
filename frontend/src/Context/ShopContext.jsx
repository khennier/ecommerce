import React, { createContext } from "react";
import all_product from '../components/assets/all_product';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const contextValue = { all_product };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children} {/* Renderiza correctamente los componentes hijos */}
        </ShopContext.Provider> 
    );
};

export default ShopContextProvider;
