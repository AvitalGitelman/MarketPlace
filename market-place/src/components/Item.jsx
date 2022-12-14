import { useCallback, useState } from 'react'

export function Item({ item, amount: itemAmount, onClick, onAddItem }) {
    const { name, price, picture, _id } = item;
    const [amount, setAmount] = useState(0);

    const onChange = useCallback((e) => setAmount(+e.target.value), [])

    const onClickItem = useCallback(() => onClick && onClick(_id), [_id, onClick]);

    const onAdd = useCallback(() => {
        onAddItem(item, amount);
        setAmount(0)
    }, [item, amount])

    const stopProppgation = useCallback((e) => e.stopPropagation(),[])

    return <div className='shopping-list' key={name} onClick={onClickItem}>
        <div className='item-info'>
            <div className='item-name'><span>Name:</span> {name}</div>
            <div className='item-price'><span>Price:</span> {price}</div>
            {itemAmount && <div className='item-amount'><span>Amount:</span> {itemAmount}</div>}
            <div className='actions' onClick={stopProppgation}>
                <input type='number' value={amount} min={0} onChange={onChange} />
                {amount > 0 ? <div className='btn' onClick={onAdd}>ADD</div> : null}
            </div>
        </div>
        <img src={picture} alt={name} className='item-img' />
    </div>
}
