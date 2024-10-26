import { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import Card from "../../Components/Card/Card";
import ProductDetail from "../../Components/ProductDetail/ProductDetail";
import { ShoppingCartContext } from "../../Context/Context";

export default function Home() {
  const context = useContext(ShoppingCartContext);
  return (
    <Layout>
      <div className="flex w-80 items-center relative justify-center mb-4">
        <h1 className="font-medium text-xl">Inicio</h1>
      </div>
      <input
        className="border border-black rounded-lg w-80 p-4 mb-10 focus:outline-none"
        type="text"
        placeholder="Busca un producto"
        onChange={(e) => {
          context.setSearchByTitle(e.target.value)
        }}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {context.items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <ProductDetail />
    </Layout>
  );
}
