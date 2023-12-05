import { useLoaderData } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const carDetails = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(user, carDetails);

  const {
    _id,
    title,
    type,
    price,
    brand,
    model,
    fuel,
    drive,
    colors,
    doors,
    cylinders,
    transmission,
    image,
    details,
  } = carDetails;

  // add product to cart
  const handleAddProduct = () => {
    const productDetails = {
      productId: _id,
      email: user.email,
      title,
      type,
      price,
      brand,
      model,
      fuel,
      drive,
      colors,
      doors,
      cylinders,
      transmission,
      image,
      details,
    };
    // add item to the cart
    if (user) {
      fetch(`https://curious-goat-sweatpants.cyclic.app/carts`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(productDetails),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            toast.success("Item Added to Cart");
          }
        });
    }
  };

  return (
    <div className="pt-[91px] container mx-auto px-3">
      {/* <h2 className="text-5xl">Product Details of :{carDetails.title}</h2> */}
      <div className="flex flex-col-reverse lg:flex-row justify-between lg:gap-12 py-4 mb-8 duration-700">
        <div className="basis-7/12 space-y-4 lg:space-y-8 duration-700">
          <figure className="rounded-md overflow-hidden hidden lg:block duration-700">
            <img src={image} alt={title} />
          </figure>
          <h2 className="text-3xl font-bold">Description</h2>
          <p>{details}</p>
        </div>
        <div className="basis-5/12 space-y-4 duration-700">
          <h2 className="text-4xl">{title}</h2>
          <ul className="list-disc list-inside flex gap-6 marker:text-primary">
            {model !== "Select" ? <li>{model}</li> : ""}
            {transmission !== "Select" ? <li>{transmission}</li> : ""}
          </ul>
          <div className="divider my-0"></div>
          <figure className="rounded-md overflow-hidden lg:hidden">
            <img src={image} alt={title} />
          </figure>
          <h4 className="text-4xl font-semibold text-primary">€ {price}</h4>
          <div className="flex gap-2">
            <CiStar className="text-xl" />
            <p>Add to fovourites</p>
          </div>
          <div className="bg-base-300 p-4 lg:p-8 rounded-lg grid grid-cols-2">
            <ul className="font-semibold space-y-2 lg:space-y-3">
              <li>Brand:</li>
              <li>Model:</li>
              <li>Type:</li>
              <li>Drive Type:</li>
              <li>Transmission:</li>
              <li>Doors:</li>
              <li>Cylinders:</li>
              <li>Color:</li>
              <li>Fuel Type:</li>
            </ul>
            <ul className="space-y-2 lg:space-y-3">
              <li>{brand}</li>
              <li>{model}</li>
              <li>{type}</li>
              <li>{drive}</li>
              <li>{transmission}</li>
              <li>{doors}</li>
              <li>{cylinders}</li>
              <li>{colors}</li>
              <li>{fuel}</li>
            </ul>
            <ul></ul>
          </div>
          <div className="py-2">
            <button
              onClick={handleAddProduct}
              className="btn btn-block bg-primary/80 text-white text-lg hover:bg-primary"
            >
              <FaCartPlus />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
