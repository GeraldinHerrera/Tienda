import {createContext,useState, useEffect } from "react";

export const ShoppingCarContext = createContext();

export const ShoppingCartProvider = ({children}) => {
    //Shopping Cart Increment quanty
    const [count,setCount] = useState(0);

    //Product Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false); 

    //Checkout SideMenu - Open/Close
     const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
     const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
     const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);    
    

    //Product Detail - Show product
    const [productToShow, setProductToShow] = useState({})

    // Shopping Cart - Add Products to cart
    const [cartProducts, setCartProducts] = useState([])

    const [order, setOrder] = useState([])

    // Get Products
    const [items,setItems] = useState(null);
    const [filteredItems,setFilteredItems] = useState(null);
   

    //Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null)
     //Get products by Category
    const [searchByCategory, setSearchByCategory] = useState(null)
  
  

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
           .then(response  => response.json())
            .then(data => setItems(data))
        },[])

     const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
     }  

    //  const filteredItemsByCategory = (items, searchByCategory) => {
    //     return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
    //  }  
     
     useEffect(() => {
        if(searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))

     },[items,searchByTitle])

    return(
        <ShoppingCarContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            isProductDetailOpen,
            closeProductDetail,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            searchByCategory,
            setSearchByCategory
        }}>
            {children}
        </ShoppingCarContext.Provider>
    )
}
 export default ShoppingCartProvider
