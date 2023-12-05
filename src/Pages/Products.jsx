import { useLoaderData } from "react-router-dom";
import Product from "../Components/Product/Product";
import Advertisement from "../Components/Advertisement/Advertisement";

const Products = () => {
  const cars = useLoaderData();

  return (
    <div className="pt-[91px] container mx-auto px-3">
      {cars.length > 0 ? (
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center py-8 duration-1000">
          Cars Available: {cars.length}
        </h2>
      ) : (
        <h2 className="py-32 lg:py-52 text-center text-4xl font-bold ">
          Oops, No cars found
        </h2>
      )}
      <Advertisement></Advertisement>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 duration-1000 mb-8">
        {cars.map((car) => (
          <Product key={car._id} car={car}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
