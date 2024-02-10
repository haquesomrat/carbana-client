import { useLoaderData } from "react-router-dom";
import Product from "../Components/Product/Product";
import Advertisement from "../Components/Advertisement/Advertisement";
import { useState } from "react";

const Products = () => {
  const cars = useLoaderData();
  const [searchedCar, setSearchedCar] = useState(cars);
  // console.log(cars);

  const searchCar = (e) => {
    let searchText = e.target.value;
    let searchedCars = cars.filter((car) => {
      return car.title.toLowerCase().includes(searchText.toLowerCase());
    });
    setSearchedCar(searchedCars);
  };

  return (
    <div className="pt-[91px] container mx-auto px-3">
      <div className="flex flex-col items-center md:flex-row  md:justify-between pb-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center py-8 duration-1000">
          Cars Available: {searchedCar.length}
        </h2>
        <input
          name="search"
          type="text"
          onChange={searchCar}
          placeholder="Search here"
          className="input input-bordered w-full max-w-xs focus:outline-0"
        />
      </div>
      <Advertisement></Advertisement>
      {searchedCar.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 duration-1000 mb-8">
          {searchedCar.map((car) => (
            <Product key={car._id} car={car}></Product>
          ))}
        </div>
      ) : (
        <h2 className="py-32 text-center text-4xl font-bold ">
          Oops, No cars found
        </h2>
      )}
    </div>
  );
};

export default Products;
