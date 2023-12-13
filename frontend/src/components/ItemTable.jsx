import {Table, Button} from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemService from '../services/ItemService';
import '../App.css'

const ItemTable = ( {item} ) => {

    const navigate = useNavigate()

    const handleDelete = ( _id ) => {
        ItemService.deleteItem( _id )
            .then(() => {
                toast.success('Item Deleted!')
                    window.location.replace('/items');
            })
            .catch((err) => {
                toast.error(err)
            })
    }
    const handleUpdate = ( _id ) => {
        navigate(`/update/${_id}`)
    }

    return(
        <>
        <Table striped bordered hover variant="dark" className='table-style'>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Item name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total($)</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    item.map((ite) => (
                        <tr key={ite._id}>
                            <td>{ite.username}</td>
                            <td>{ite.name}</td>
                            <td>{ite.price}</td>
                            <td>{ite.quantity}</td>
                            <td>{ite.price * ite.quantity}</td>
                            <td>
                                <Button variant="info" size="sm" onClick={() => handleUpdate(ite._id)}>                                  
                                    <FaEdit />
                                </Button>
                                {' '}
                                <Button variant="danger" size="sm" onClick={() => handleDelete(ite._id)}>
                                    <FaTrash />
                                </Button>
                            </td>
                        </tr>
                    ))
                }         
            </tbody>
        </Table>
        </>
    );
};

export default ItemTable;