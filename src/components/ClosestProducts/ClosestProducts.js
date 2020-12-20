import React from 'react'
import {
    useParams
} from "react-router-dom";


export default function ClosestProducts({ products }) {
    const { productID } = useParams();

    // FIND THE PRODUCT 
    const product = products.length > 0 && products.find(elem => elem.id === productID)

    const nearestProductsList = products
        .filter(prod => prod.id !== productID)
        .map(prod => {
            return { ...prod, referenceValue: (Math.abs(prod.price - product.price)) }
        })
        .sort((a, b) => a.referenceValue - b.referenceValue)
        .slice(0, 6);

    return (
        <div className="root">
            <div style={{ border: "1px solid red" }}>
                <p>PRODUCT OF REFERENCE</p>
                <p>
                    ID: {product.id}
                </p>
                <p>
                    NAME: {product.name}
                </p>
                <p>
                    CATEGORY: {product.category}
                </p>
                <p>
                    PRICE: {product.price}
                </p>
            </div>

            <div>
                {nearestProductsList.length > 0 && nearestProductsList.map((product, index) => {
                    return (
                        <div key={index} style={{ border: "1px solid black" }}>
                            <p>No. {index + 1}</p>
                            <p>
                                ID: {product.id}
                            </p>
                            <p>
                                NAME: {product.name}
                            </p>
                            <p>
                                CATEGORY: {product.category}
                            </p>
                            <p>
                                PRICE: {product.price}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
