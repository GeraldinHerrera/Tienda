import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import {ShoppingCarContext} from '../../Context'
import OrderCard from '../../Components/OrderCard'
import Layout from '../../Components/Layout'

function MyOrder() {
  const context = React.useContext(ShoppingCarContext);
   const currentPath = window.location.pathname
   let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);
   if(index === 'last') index = context.order?.length -1 ;
   
    return (
      <Layout>
          <div className='flex items-center relative justify-center w-80 bg-black h-4 p-8 rounded-lg text-white font-medium'>
          <Link to='/my-orders' className='absolute left-0'>
            <ChevronLeftIcon className='h-6v w-6 text-white cursor-pointer font-medium ml-2'/>
          </Link>
          <h1>My Orders</h1>
      </div>
        <div className='flex flex-col w-80 m-6 p-4 overflow-y-auto'>
            {
                context.order?.[index]?.products.map(product => (
                    <OrderCard 
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        image = {product.image}
                        price = {product.price}
                    />
                ))
            }
            </div>
      </Layout>
    )
  }
  
  export default MyOrder
  