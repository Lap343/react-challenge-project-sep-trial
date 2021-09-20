import React from 'react';
import { useSelector } from 'react-redux';
import { Nav } from '../../components';
import './template.css';

const Template = props => {

    const user = useSelector(state => state.auth.email);

    return (
        <div className="bg-layer">
            <div className="fg-layer">
                <label className="logo">Luigi's Pizzeria</label>
                {user && <div>Hello {user}</div>}
                <Nav />
                {props.children}
            </div>
        </div>
    );
}

export default Template;