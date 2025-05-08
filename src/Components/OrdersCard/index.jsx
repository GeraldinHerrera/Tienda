import { ChevronRightIcon, CalendarDaysIcon, ShoppingCartIcon} from '@heroicons/react/24/solid'

const OrdersCard = props => {
    const {totalPrice, totalProducts } = props;

    return(
        <div className="flex justify-between items-center relative mb-4  p-4 rounded-lg w-80 shadow-md shadow-slate-500 hover:bg-gray-200 hover:shadow-inner">
            <div className='flex justify-between w-full'>
                <p className='flex flex-col'>
                    <div className='flex'>
                        <CalendarDaysIcon className='h-6v w-6  text-black'/>
                        <span className='font-light p-2'>01.02.25</span>
                    </div>
                 
                    <div className='flex'>
                        <ShoppingCartIcon className='h-6v w-6  text-black'/>
                        <span className='font-light p-2'>{totalProducts} articles</span>
                    </div>

                    
                    
                </p>
                <p className='flex items-center gap-2'>
                    <span className='font-medium text-xl'>{totalPrice}</span>
                    <ChevronRightIcon className='h-6v w-6 text-black cursor-pointer'/>
                </p>
              
            </div>
        </div>
    )
    
}

export default OrdersCard