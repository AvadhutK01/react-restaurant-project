import React, { useState, useEffect } from "react";

const productContext = React.createContext({
    products: [],
    addProduct: () => { }
})


export const ProductContextProvider = (props) => {
    const [productList, setProductList] = useState(JSON.parse(localStorage.getItem("foodProducts")) || [
        { Id: 1, name: 'Butter Chicken', description: 'Creamy and flavorful chicken curry', price: '250', image: 'Butter_chicken.jpg' },
        { Id: 2, name: 'Vegetable Biryani', description: 'Fragrant rice with mixed vegetables', price: '180', image: 'Veg_biryani.jpg' },
        { Id: 3, name: 'Paneer Tikka', description: 'Grilled cottage cheese with spices', price: '210', image: 'paneer_tikka.jpg' },
        { Id: 4, name: 'Chicken Biryani', description: 'Spiced rice with tender chicken pieces', price: '200', image: 'chicken_biryani.jpg' },
    ]
    );

    useEffect(() => {
        localStorage.setItem("foodProducts", JSON.stringify(productList));
    }, [productList]);

    const addProduct = (newProduct) => {
        setProductList((prevProducts) => [
            ...prevProducts,
            {
                Id: Math.random() * new Date(),
                ...newProduct
            }
        ]);
    };

    return <productContext.Provider value={{ products: productList, addProduct: addProduct }}>
        {props.children}
    </productContext.Provider>
}

export default productContext;