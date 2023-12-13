import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {toast} from 'react-hot-toast';
import ItemService from '../services/ItemService';

const AddScreen = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    username : "",
    name : "",
    price: "",
    quantity: ""
  });

  const addItem = async (e) => {
    e.preventDefault();
    const { username, name, price, quantity } = data;

    const item = {
        username,
        name,
        price,
        quantity
    }
    ItemService.addItem( item )
        .then((res) => {
            setData({})
                toast.success('Item Added!')
                navigate('/items')
        })
        .catch((error) => {
            toast.error(error)
        })
  }
    return (
        <Container className='form-container'>
            <h1>Add Item</h1>
           
            <Form onSubmit={addItem} >
                <Form.Group controlId='username' className='my-3'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter username'
                        value={data.username}
                        required
                        onChange={(e) => setData({...data, username : e.target.value})}
                    ></Form.Control>    
                </Form.Group>

                <Form.Group controlId='name' className='my-3'>
                    <Form.Label>Item Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter item name'
                        value={data.name}
                        required
                        onChange={(e) => setData({...data, name : e.target.value})}
                    ></Form.Control>    
                </Form.Group>

                <Form.Group controlId='price' className='my-3'>
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type='number'
                        placeholder='Enter price'
                        value={data.price}
                        required
                        onChange={(e) => setData({...data, price : e.target.value})}
                    ></Form.Control>    
                </Form.Group>

                <Form.Group controlId='quantity' className='my-3'>
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter quantity'
                        value={data.quantity}
                        required
                        onChange={(e) => setData({...data, quantity : e.target.value})}
                    ></Form.Control>    
                </Form.Group>

                    <Button
                        type='submit'
                        variant='primary'
                        className='mt-2'
                    >
                      Add
                    </Button>
            </Form>
        </Container>
    );
};
export default AddScreen;