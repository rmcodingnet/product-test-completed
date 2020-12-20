import React, { useState } from 'react'
import { Redirect } from "react-router-dom";
const { v4: uuidv4 } = require('uuid');

export default function FormProduct({ addNewProduct }) {

    const [values, setValues] = useState({})
    const [redirect, setRedirect] = useState(false)

    const handleChangeValues = (newValue) => {
        setValues({ ...values, ...newValue });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newElem = {
            id: uuidv4(), // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
            name: values.name,
            category: values.category,
            price: values.price

        }
        addNewProduct(newElem)
        setRedirect(true)
    }

    if (redirect) {
        return <Redirect to=""></Redirect>
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>NAME</label>
                <input type="text" value={values.name} onChange={(e) => handleChangeValues({ name: e.target.value })}></input>
                <label>CATEGORY</label>
                <select name="categories" id="categories" onChange={(e) => handleChangeValues({ category: e.target.value })}>
                    <option value={"all"}>All</option>
                    <option value="meat">Meat</option>
                    <option value="greens">Greens</option>
                    <option value="fish">Fish</option>
                </select>
                <label>PRICE</label>
                <input type="number" value={values.price} onChange={(e) => handleChangeValues({ price: e.target.value })}></input>
                <button type="submit">ADD</button>
            </form>
        </div>
    )
}
