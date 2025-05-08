import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'
import {ShoppingCarContext} from '../../Context'
import  OrdersCard  from  '../../Components/OrdersCard/index'

function MyOrders() {
  const context = React.useContext(ShoppingCarContext);
  return (
    <Layout>
      <div className='flex items-center relative justify-center w-80 p-8 bg-black h-4 text-white rounded-lg m-4 font-medium'>
        <h1>My Orders</h1>
      </div>
      
      {
        context.order.map((order,index) => (
          <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard
                  totalPrice = {order.totalPrice} 
                  totalProducts = {order.totalProducts} />
          </Link>
        ))
      }
    
    </Layout>
  )
}

export default MyOrders

  