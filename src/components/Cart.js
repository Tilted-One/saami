import React from 'react'

export default function Cart(props) {
    const [amount, setAmount] = React.useState(0)

    const handleDecrement = () => {
        setAmount(prevAmount => (prevAmount > 1 ? prevAmount - 1 : 0));
    }
    const handleIncrement = () => {
        setAmount(prevAmount => prevAmount + 1);
    }
    const handleChange = (event) => {
        const value = parseInt(event.target.value, 10);
        setAmount(value > 0 ? value : 0);
    }

    const [isExpanded, setIsExpanded] = React.useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };
    const truncatedText = props.description.length > 90 ? props.description.substring(0, 90) + '...' : props.description
    const isTruncated = props.description.length > 90

    return (
        <div className='w-[450px] h-[600px] px-10 py-12 flex flex-col items-start'>
            <div className='w-full h-full bg-bgColor text-white'>img</div>
            <div className='bg-white'>
                <div className='flex justify-between w-full mt-4 mb-2'>
                    <div>
                        <h1 className='text-lg text-start'>{props.title}</h1>
                        <h1 className='text-2xl text-start'>{props.price}</h1>
                    </div>
                    <div className='flex text-center items-center'>
                        <button onClick={handleDecrement} className={`text-3xl ${amount == 0 ? 'disabled cursor-auto' : ''}`}>-</button>
                        <input type='text' className='w-12 text-center outline-none border-2 rounded-lg mx-4' value={amount} onChange={handleChange}></input>
                        <button onClick={handleIncrement} className='text-2xl'>+</button>
                    </div>
                </div>
                <div className='flex justify-between w-full items-start'>
                    <div className='text-start'>
                        <p className={`relative overflow-hidden ${!isExpanded}`}>
                            {isExpanded ? props.description : truncatedText + (isTruncated ? '...' : '')}
                        </p>
                        <button onClick={toggleExpansion} className='max-w-20 opacity-50 mt-2'>
                            {isExpanded ? 'See Less' : 'See More'}
                        </button>
                    </div>
                </div>
                <div className='flex flex-col w-full'>
                    <button className='w-full bg-bgColor text-white rounded-lg py-3 my-4'>Shop know</button>
                    <button className='w-full bg-bgColor text-white rounded-lg py-3'>Add Cart</button>
                </div>
            </div>
        </div>
    )
}