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

            <table style={{ width: "100%" }}>
                <tr>
                    <th>NUMBER</th>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>CATEGORY</th>
                    <th>PRICE</th>
                    <th>SIMILAR</th>
                </tr>

                {filteredProducts.length > 0 && pagination(filteredProducts, page).map((product, index) => {

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
                            <Link to={`/closestProducts/${product.id}`}> <td><button>SIMILAR</button></td></Link>
                        </tr>


                    )
                })}


            </table >

        </div >
    );
};

export default ProductList;
