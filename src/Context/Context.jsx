import { createContext, useState, useEffect } from 'react'

export const ShoppingCartContext = createContext()

export default function ContextProvider({children}) {
  // Shopping Cart · Increment quantity  
  const [count, setCount] = useState(0)

  // Product Detail · Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail=()=>{setIsProductDetailOpen(true)}
    const closeProductDetail=()=>{setIsProductDetailOpen(false)}

    //CheckoutSideMenu · Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu=()=>{setIsCheckoutSideMenuOpen(true)}
    const closeCheckoutSideMenu=()=>{setIsCheckoutSideMenuOpen(false)}

    // Product Detail · Show product
    const [productToShow, setProductToShow] = useState({})

    // Shopping Cart · Add products to cart
    const [ cartProducts, setCartProducts ] = useState([])
     
    // Shopping Cart · Order
    const [order, setOrder] = useState([])

    //Get product
    const [items, setItems] = useState(null);

    // Get product by title
    const [searchByTitle, setSearchByTitle] = useState(null);
   

    useEffect(() => {
      fetch("https://api.escuelajs.co/api/v1/products")
        .then((response) => response.json())
        .then((data) => setItems(data));
    }, []);

  return (
    <ShoppingCartContext.Provider value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
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
        setSearchByTitle
    }}>
        {children}
    </ShoppingCartContext.Provider>
  )
}
