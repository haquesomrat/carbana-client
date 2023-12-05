import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CartItem = ({ cartItem, cartItems, setCartItems }) => {
  const { productId, title, price, fuel, transmission, image } = cartItem;

  const handleDeleteCartItem = (id) => {
    console.log(id);
    fetch(`https://curious-goat-sweatpants.cyclic.app/userCart/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Deleted item from cart");
          // remove single cart item
          const remainingCartItems = cartItems.filter(
            (item) => item.productId !== productId
          );
          setCartItems(remainingCartItems);
        }
      });
  };

  return (
    <div>
      <div className="card lg:h-80 grid grid-cols-1 md:grid-cols-2 md:gap-4 bg-base-300 shadow-xl duration-1000 md:p-4">
        <figure className="aspect-video md:rounded-2xl h-full w-full">
          <img className="duration-1000" src={image} alt={title} />
        </figure>
        <div className="card-body p-4 md:p-0 lg:p-4 duration-1000">
          <p className="font-medium md:text-4xl">{title}</p>
          <h2 className="text-2xl md:text-3xl font-bold">€ {price}</h2>
          <div className="flex gap-4 text-primary">
            {transmission !== "Select" ? (
              <div className="badge lg:badge-lg badge-outline">
                {transmission}
              </div>
            ) : (
              ""
            )}
            {fuel !== "Select" ? (
              <div className="badge lg:badge-lg badge-outline">{fuel}</div>
            ) : (
              ""
            )}
          </div>
          <div className="divider my-0 lg:my-4"></div>
          <div className="card-actions justify-between items-center">
            <Link to={`/productdetails/${productId}`}>
              <button className="btn btn-sm lg:btn-md lg:px-8 lg:text-lg rounded-full bg-primary/90 text-white hover:bg-primary">
                Details
              </button>
            </Link>

            <button
              onClick={() => handleDeleteCartItem(productId)}
              className="btn btn-sm lg:btn-md lg:px-8 lg:text-lg rounded-full bg-primary/90 text-white hover:bg-primary"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

CartItem.propTypes = {
  cartItem: PropTypes.object,
  cartItems: PropTypes.object,
  setCartItems: PropTypes.function,
};
