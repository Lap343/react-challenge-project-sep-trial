import React from 'react';
import { SERVER_IP } from '../../private';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { edit } from '../../redux/features/edit';

const DELETE_ORDER_URL = `${SERVER_IP}/api/delete-order`;

const OrdersList = (props) => {

    const { orders, setRerender } = props;

    const dispatch = useDispatch();
    let history = useHistory();

    if (!props || !props.orders || !props.orders.length) return (
        <div className="empty-orders">
            <h2>There are no orders to display</h2>
        </div>
    );

    const sendEditOrder = (id) => {
        dispatch(edit({id}));
        console.log('before: ', id)
        setRerender(true);
        history.push("/edit");
    }

    const deleteOrder = (id) => {
        fetch(DELETE_ORDER_URL, {
            method: 'POST',
            body: JSON.stringify({
                id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(response => console.log("Success", JSON.stringify(response)))
        .catch(error => console.error(error));
        setRerender(true);
    }

    return orders.map(order => {

        const createdDate = new Date(order.createdAt);
        const fixedCreatedDate = createdDate.toLocaleTimeString();

        return (
            <div className="row view-order-container" key={order._id}>
                <div className="col-md-4 view-order-left-col p-3">
                    <h2>{order.order_item}</h2>
                    <p>Ordered by: {order.ordered_by || ''}</p>
                </div>
                <div className="col-md-4 d-flex view-order-middle-col">
                    <p>Order placed at {`${fixedCreatedDate}`}</p>
                    <p>Quantity: {order.quantity}</p>
                </div>
                <div className="col-md-4 view-order-right-col">
                    <button className="btn btn-success" onClick={() => sendEditOrder(order._id)}>Edit</button>
                    <button className="btn btn-danger" onClick={() => deleteOrder(order._id)}>Delete</button>
                </div>
            </div>
        );
    });
}

export default OrdersList;