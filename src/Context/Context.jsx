import { Children, createContext, useContext } from 'react'

const ShoppingCartContext = createContext()

export default function ContextProvider({chhildren}) {
  return (
    <ShoppingCartContext.Provider>
        {Children}
    </ShoppingCartContext.Provider>
  )
}
