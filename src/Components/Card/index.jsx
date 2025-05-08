import React, { useContext } from 'react'
import { PlusIcon,CheckIcon } from '@heroicons/react/24/solid'
import {ShoppingCarContext} from '../../Context'
import './styles.css'

const Card = (data) => {
    // const context = useContext(ShoppingCarContext);
    const context = React.useContext(ShoppingCarContext)

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }

    const addProductsToCart = (event,productData) =>{
        event.stopPropagation();
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData]);
        context.openCheckoutSideMenu();
        context.closeProductDetail();
    }

    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id ).length > 0;

        if (isInCart){
            return (
                <div 
                    className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1  shadow-md shadow-slate-600'>
                    <CheckIcon className='h-6 w-6 text-white'></CheckIcon>
                </div>
            )
        }else {
            return (
                <div 
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1  shadow-md shadow-slate-600'
                    onClick={(event) => addProductsToCart(event,data.data) }>
                    <PlusIcon className='h-6 w-6 text-black'></PlusIcon>
                </div>
            )
        }
    }

    return(
        <div
         className='bg-white cursor-pointer w-60 h-80 rounded-lg m-6 border border-spacing-2 p-4 scrollable-Cards'
         onClick={() => showProduct(data.data)}>
            <figure className='relative mb-2 w-full h-4/5 flex justify-center'>
                <span className='absolute bottom-0 left-0 bg-slate-500/20 rounded-md text-black text-xs m-2 px-3 py-1'>{data.data.category}</span>
                <img className='w-50 h-40 object-cover rounded-lg'
                 src={data.data.image} alt={data.data.title}/>
                 {renderIcon(data.data.id)}
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{data.data.title}</span>
                <span className='text-lg font-medium'>${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card