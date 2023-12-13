import React, { useEffect, useState } from 'react';
import ItemTable from './ItemTable';
import ItemService from '../services/ItemService';
import { toast } from 'react-hot-toast';
import Spinner from '../components/Spinner';

const Items = () =>  {

    const [ item, setItem ] = useState([]);

    useEffect(() => {
        ItemService.getAllItems()
            .then((res) => {
                setItem(() => {
                    return res.data;
                });
            })
            .catch((err) => {
                toast.error(err)
            })
    }, [])

    return (
        <>
            {
                item.length === 0 && <Spinner /> 
            }
            {
                item && <ItemTable item={item} />
            }
        </>
    )
};

export default Items;