import React, { useState, useEffect} from 'react';
import { useHistory } from 'react-router';

export const ItemsList = () => {
    const history = useHistory()
    const [current, setCurrent] = useState('')

    useEffect(() => {
        users.getCurrent().then(setCurrent)
    })

    return (<div>
        <div>Logged In: {JSON.stringify(current)}</div>
        <button onClick={users.signOff().then(() => 
        history.push('/'))}>LOG OUT</button>
    </div>
    )
}

export default ItemsList;