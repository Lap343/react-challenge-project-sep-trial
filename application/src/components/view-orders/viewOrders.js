import React, { useState, useEffect } from 'react';
import { Template } from '..';
import { SERVER_IP } from '../../private';
import OrdersList from './ordersList';
import './viewOrders.css';

const ViewOrders = () => {
    const [orders, setOrders] = useState([]);
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        fetch(`${SERVER_IP}/api/current-orders`)
            .then(response => response.json())
            .then(response => {
                if(response.success) {
                    setOrders(response.orders);
                } else {
                    console.log('Error getting orders');
                }
            });
        setRerender(false);
    }, [rerender])

    return (
        <Template>
            <div className="container-fluid">
                <OrdersList orders={orders} setRerender={setRerender} />
            </div>
        </Template>
    );
}

export default ViewOrders;