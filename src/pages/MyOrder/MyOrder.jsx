import { useContext } from "react";
import { ShoppingCartContext } from '../../Context/Context';
import OrderCard from '../../Components/OrderCard/OrderCard';
import Layout from '../../Components/Layout/Layout';
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1)
  if(index === "last") index = context.order?.length - 1
  
  return (
    <Layout>
           <div className="flex w-80 items-center relative justify-center mb-10">
        <Link to='/my-orders' className="absolute left-0">
        <ArrowLeftIcon
        className="h-6 w-6 text-black cursor-pointer"/>
        </Link>
        <h1>My Order</h1>
      </div>
     <div className="px-4 overflow-y-scroll flex-1">
        {
        context.order?.[index]?.product.map(product => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
          />
        ))}
      </div>
    </Layout>
  )
}
