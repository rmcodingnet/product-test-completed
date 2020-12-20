import React, { useState } from "react";
import { Link } from "react-router-dom";


const pagination = (data, page = 1, pageLimit = 24) => {
    let result = data.slice((page - 1) * pageLimit, page * pageLimit);
    return result;
}

const ProductList = ({ products }) => {

    const [page, setPage] = useState(1)
    const [criteria, setCriteria] = useState({ category: "all", minPrice: "", maxPrice: "" })

    const handleChangeCriteria = (newCriteria) => {
        setCriteria({ ...criteria, ...newCriteria });
    }

    const filteredProducts = products
        .filter(item => {
            if (criteria.category !== "all") {
                return item.category === criteria.category
            } else { return true }
        })
        .filter(item => {
            if (criteria.minPrice !== "") {
                return item.price >= criteria.minPrice
            } else { return true }
        })
        .filter(item => {
            if (criteria.maxPrice !== "") {
                return item.price <= criteria.maxPrice
            } else { return true }
        })

    return (
        <div className="">
            <div className={"filers"}>
                <label>Category</label>
                <select name="categories" id="categories" onChange={(e) => handleChangeCriteria({ category: e.target.value })}>
                    <option value={"all"}>All</option>
                    <option value="meat">Meat</option>
                    <option value="greens">Greens</option>
                    <option value="fish">Fish</option>
                </select>
                <label>Min Price</label>
                <input type="number" name="minPrice" id="minPrice" value={criteria.minPrice} onChange={(e) => handleChangeCriteria({ minPrice: e.target.value })}></input>
                <label>Max Price</label>
                <input type="number" name="maxPrice" id="maxPrice" value={criteria.maxPrice} onChange={(e) => handleChangeCriteria({ maxPrice: e.target.value })}></input>
            </div>

            <div className="pagination">
                <button onClick={() => setPage(page - 1)}>PREV</button>
                <h4>{page}</h4>
                <button onClick={() => setPage(page + 1)}>NEXT</button>
            </div>

            <div className="list">
                {filteredProducts.length > 0 && pagination(filteredProducts, page).map((product, index) => {
                    return (
                        <Link to={`/closestProducts/${product.id}`} key={index} >
                            <div style={{ border: "1px solid black" }}>
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
                        </Link>
                    )
                })}
            </div>

        </div>
    );
};

export default ProductList;
