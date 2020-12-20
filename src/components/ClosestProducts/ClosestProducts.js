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


            <table className="table">
                <thead>
                    <tr>
                        <th>NUMBER</th>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>CATEGORY</th>
                        <th>PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    {nearestProductsList.length > 0 && nearestProductsList.map((product, index) => {
                        return (
                            <tr key={index} >
                                <td>{index + 1}</td>
                                <td>
                                    {product.id}
                                </td>
                                <td>
                                    {product.name}
                                </td>
                                <td>
                                    {product.category}
                                </td>
                                <td>
                                    {product.price}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
