import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faTrashAlt, faPen} from '@fortawesome/free-solid-svg-icons';
const ItemProducto = (props) => {
    console.log(props.producto)
    return (
        <div>
            <ListGroup.Item className='d-flex justify-content-between'>
                {/* <p>{props.producto.nombreProducto}<span className='font-weight-bold'>${props.producto.precioProducto}</span></p>  */}
                <div>
                <Button variant='warning' className='mx-1'> <FontAwesomeIcon className='text-light' icon={faPen}></FontAwesomeIcon></Button>
                <Button variant='danger' className='mx-1'> <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></Button>
                </div>
            </ListGroup.Item>
        </div>
    );
};

export default ItemProducto;