import { Children, createContext, useContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export default function ContextProvider({children}) {
    const [count, setCount] = useState(0)
  return (
    <ShoppingCartContext.Provider value={{
        count,
        setCount
    }}>
        {children}
    </ShoppingCartContext.Provider>
  )
}
