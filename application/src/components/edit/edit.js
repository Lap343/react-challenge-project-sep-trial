import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Template } from "..";
import { SERVER_IP } from '../../private';

const EDIT_ORDER_URL = `${SERVER_IP}/api/edit-order`;

const Edit = () => {

    const [orderItem, setOrderItem] = useState("");
    const [quantity, setQuantity] = useState("1");

    const menuItemChosen = (event) => setOrderItem(event.value);
    const menuQuantityChosen = (event) => setQuantity(event.value);

    const editID = useSelector(state => state.edit.id);
    const user = useSelector(state => state.auth.email);
    let history = useHistory();

    const finalEdit = () => {
        fetch(EDIT_ORDER_URL, {
            method: 'POST',
            body: JSON.stringify({
                id: editID,
                order_item: orderItem,
                quantity,
                ordered_by: user
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(response => console.log("Success", JSON.stringify(response)))
        .catch(error => console.error(error));

        setTimeout(() => {
            history.push('/view-orders');
        }, 500)
    }

    return (
        <Template>
            <div>Hello! the order you want to edit is order number: {editID}</div>
            <div className="form-wrapper">
                <form>
                    <label className="form-label">I'd like to order...</label><br />
                    <select 
                        value={orderItem} 
                        onChange={(e) => menuItemChosen(e.target)}
                        className="menu-select"
                    >
                        <option value="" defaultValue disabled hidden>Lunch menu</option>
                        <option value="Soup of the Day">Soup of the Day</option>
                        <option value="Linguini With White Wine Sauce">Linguini With White Wine Sauce</option>
                        <option value="Eggplant and Mushroom Panini">Eggplant and Mushroom Panini</option>
                        <option value="Luigi's Specialty Pizza">Luigi's Specialty Pizza</option>
                    </select><br />
                    <label className="qty-label">Qty:</label>
                    <select 
                        value={quantity} 
                        onChange={(event) => menuQuantityChosen(event.target)}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                    <button type="button" className="order-btn" onClick={() => finalEdit()}>Edit It!</button>
                </form>
            </div>
        </Template>
    )
}

export default Edit;