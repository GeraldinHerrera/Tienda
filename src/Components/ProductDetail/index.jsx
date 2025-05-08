import React, { useContext } from 'react'
import {ShoppingCarContext} from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css'

const ProductDetail = () => {
    const context = React.useContext(ShoppingCarContext)
    return(
        <aside 
            className={`${context.isProductDetailOpen ? 'flex': 'hidden'} product-detail flex flex-col fixed left-0 shadow-md shadow-slate-400 rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>
                    <XMarkIcon
                        className='h-6 w-6 text-black cursor-pointer'
                        onClick={() => context.closeProductDetail()}></XMarkIcon>
                </div>
            </div>
            <figure className='px-6 flex justify-center'>
                <img 
                    className='w-50 h-60 rounded-lg border border-spacing-10 p-4' 
                    src={context.productToShow.image} 
                    alt={context.productToShow.title}/>
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-xl mb-2'>${context.productToShow.price}</span>
                <span className='font-medium text-md mb-2'>${context.productToShow.title}</span>
                <span className='font-light text-sm text-justify'>${context.productToShow.description}</span>
            </p>
       </aside>   
    )
}
export default ProductDetail