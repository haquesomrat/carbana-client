import { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const coffee = useLoaderData();
  console.log(coffee);
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
    rating,
    image,
    details,
  } = coffee;

  const handleUpdateProduct = (e) => {
    // console.log("updated");
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const type = form.type.value;
    const price = form.price.value;
    const brand = form.brand.value;
    const model = form.model.value;
    const fuel = form.fuel.value;
    const drive = form.drive.value;
    const colors = form.colors.value;
    const doors = form.doors.value;
    const cylinders = form.cylinders.value;
    const transmission = form.transmission.value;
    const rating = form.rating.value;
    const image = form.image.value;
    const details = form.details.value;
    const updatedProduct = {
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
      rating,
      image,
      details,
    };
    console.log(updatedProduct);

    // send updated data to the server

    fetch(`https://carbana-server.vercel.app/cars/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // if()
      });
  };

  return (
    <div className="pt-[91px]">
      <div className="container mx-auto px-3">
        <h2 className="text-center text-4xl font-bold py-6">
          Update Product Info
        </h2>
        <form
          onSubmit={handleUpdateProduct}
          className="p-4 mb-4 sm:p-6 md:p-8 md:mb-12 rounded-lg bg-base-300 duration-1000"
        >
          <div>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-base font-medium">
                  Title *
                </span>
              </div>
              <input
                type="text"
                name="title"
                defaultValue={title}
                placeholder="Enter title"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-base font-medium">Type</span>
              </div>
              <select
                className="select select-bordered"
                name="type"
                defaultValue={type}
              >
                <option disabled>{type}</option>
                <option className="text-base">Convertible</option>
                <option className="text-base">Hatchback</option>
                <option className="text-base">Coupe</option>
                <option className="text-base">Sedan</option>
                <option className="text-base">SUV</option>
                <option className="text-base">Wagon</option>
              </select>
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-base font-medium">
                  Price (EUR) *
                </span>
              </div>
              <input
                type="text"
                name="price"
                defaultValue={price}
                placeholder="Enter Price"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-base font-medium">Brand</span>
              </div>
              <select
                className="select select-bordered"
                name="brand"
                defaultValue={brand}
              >
                <option disabled>{brand}</option>
                <option className="text-base">Audi</option>
                <option className="text-base">Bentley</option>
                <option className="text-base">BMW</option>
                <option className="text-base">Cadillac</option>
                <option className="text-base">Chevrolet</option>
                <option className="text-base">Ferrari</option>
                <option className="text-base">Ford</option>
                <option className="text-base">Mercedes</option>
                <option className="text-base">Porsche</option>
              </select>
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-base font-medium">
                  Model *
                </span>
              </div>
              <input
                type="text"
                name="model"
                defaultValue={model}
                placeholder="Enter Model Name"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-base font-medium">
                  Fuel Type
                </span>
              </div>
              <select
                className="select select-bordered"
                name="fuel"
                defaultValue={fuel}
              >
                <option disabled>{fuel}</option>
                <option className="text-base">Diesel</option>
                <option className="text-base">Electric</option>
                <option className="text-base">Hybrid</option>
                <option className="text-base">Petrol</option>
              </select>
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-base font-medium">
                  Drive Type
                </span>
              </div>
              <select
                className="select select-bordered"
                name="drive"
                defaultValue={drive}
              >
                <option disabled>{drive}</option>
                <option className="text-base">AWD/4WD</option>
                <option className="text-base">Front Wheel Drive</option>
                <option className="text-base">Rear Wheel Drive</option>
              </select>
            </label>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-base font-medium">Colors</span>
              </div>
              <select
                className="select select-bordered"
                name="colors"
                defaultValue={colors}
              >
                <option disabled>{colors}</option>
                <option className="text-base">Black</option>
                <option className="text-base">Blue</option>
                <option className="text-base">Brown</option>
                <option className="text-base">Gold</option>
                <option className="text-base">Green</option>
                <option className="text-base">Gray</option>
                <option className="text-base">Orange</option>
                <option className="text-base">Red</option>
                <option className="text-base">Silver</option>
                <option className="text-base">White</option>
                <option className="text-base">Yellow</option>
              </select>
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-base font-medium">Doors</span>
              </div>
              <select
                className="select select-bordered "
                name="doors"
                defaultValue={doors}
              >
                <option disabled>{doors}</option>
                <option className="text-base">2-door</option>
                <option className="text-base">3-door</option>
                <option className="text-base">4-door</option>
                <option className="text-base">5-door</option>
              </select>
            </label>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-base font-medium">
                  Cylinders
                </span>
              </div>
              <select
                className="select select-bordered "
                name="cylinders"
                defaultValue={cylinders}
              >
                <option disabled>{cylinders}</option>
                <option className="text-base">4</option>
                <option className="text-base">6</option>
                <option className="text-base">8</option>
              </select>
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-base font-medium">
                  Transmission
                </span>
              </div>
              <select
                className="select select-bordered "
                name="transmission"
                defaultValue={transmission}
              >
                <option disabled>{transmission}</option>
                <option className="text-base">Automatic</option>
                <option className="text-base">Manuel</option>
                <option className="text-base">Semi Automatic</option>
              </select>
            </label>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-base font-medium">
                  Rating *
                </span>
              </div>
              <input
                type="text"
                name="rating"
                defaultValue={rating}
                placeholder="Rate This Car"
                className="input input-bordered w-full"
                required
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-base font-medium">
                  Image *
                </span>
              </div>
              <input
                type="text"
                name="image"
                defaultValue={image}
                placeholder="Enter Image Link"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-base font-medium">
                  Description *
                </span>
              </div>
              <textarea
                name="details"
                defaultValue={details}
                className="textarea textarea-bordered h-24"
                placeholder="Write About This Car"
                required
              ></textarea>
            </label>
          </div>
          <div className="card-actions justify-center md:justify-end pt-4">
            <input
              value="Update Car Info"
              type="submit"
              className="btn btn-primary bg-primary hover:bg-[#ff4805d3] border-none text-white w-32  duration-700"
            ></input>
          </div>
        </form>
        <Toaster />
      </div>
    </div>
  );
};

export default UpdateProduct;
