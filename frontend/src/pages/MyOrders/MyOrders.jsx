import { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import OrderCard from "../../Components/OrderCard/OrderCard";
import { ShoppingCartContext } from "../../Context/Context";
import { Link } from "react-router-dom";

export default function MyOrders() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className="flex w-80 items-center relative justify-center mb-4">
        <h1 className="font-medium text-xl">My Orders</h1>
      </div>
      {context.order.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrderCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts} />
        </Link>
      ))}
    </Layout>
  );
}
