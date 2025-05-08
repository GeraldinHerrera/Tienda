import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {ShoppingCarContext} from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'
import OrderCard from '../OrderCard'
import {totalPrice} from '../../utils/index'
import './styles.css'


const CheckoutSideMenu = () => {
    const context = React.useContext(ShoppingCarContext);

    const handleDelete = (id) =>{
        const filteredProducts = context.cartProducts.filter(product => product.id != id);
        context.setCartProducts(filteredProducts);
        context.setCount(context.count - 1);
    }

    const handleCheckout = () =>{
        const orderToAdd = {
            date:'01.02.25',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([]);
    }

    return(
        <aside 
            className={`${context.isCheckoutSideMenuOpen ? 'flex': 'hidden'} scrollable-cards checkout-side-menu flex flex-col fixed right-0 shadow-md shadow-slate-400 rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XMarkIcon
                        className='h-6 w-6 text-black cursor-pointer'
                        onClick={() => context.closeCheckoutSideMenu()}></XMarkIcon>
                </div>
            </div>
            <div className='px-6 flex-1'>
            {
                context.cartProducts.map(product => (
                    <OrderCard 
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        image = {product.image}
                        price = {product.price}
                        handleDelete = {handleDelete}
                    />
                ))
            }
            </div>
            <div className='px-6 p-3'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light text-lg '>Total:</span>
                    <span className='font-medium text-xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                <button className='w-full bg-black py-3 text-white rounded-lg mb-6' onClick={() => handleCheckout()}>Checkout</button>
                </Link>
                
            </div>

       </aside>   
    )
}
export default CheckoutSideMenu