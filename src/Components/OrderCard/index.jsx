import { XMarkIcon } from '@heroicons/react/24/solid'

const OrderCard = props => {
    const { id,title, image, price,handleDelete} = props;
    let renderXmarkIcon
    if(handleDelete){
        renderXmarkIcon = <XMarkIcon onClick={() => handleDelete(id)} className='h-3 w-3 text-black cursor-pointer'></XMarkIcon>
    }
    return(
        <div className="flex justify-between items-center mb-6 border border-spacing-2 p-2 rounded-lg">
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-30 '>
                    <img className='w-10 h-30 rounded-lg object-cover ' src={image} alt= {title}/>
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>
            <div className='flex items-start gap-2 '>
                <p className='text-sm font-medium '>{price}</p>
                {renderXmarkIcon}
            </div>
           
        </div>
    )
    
}

export default OrderCard