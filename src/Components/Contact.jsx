const Contact = () => {
  return (
    <div className="bg-base-200 pt-[96px] my-10 px-3">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        <div className="text-center md:text-start space-y-4 md:space-y-6">
          <h6 className="text-2xl sm:text-3xl font-semibold">Get in touch</h6>
          <p className="text-lg font-medium">Contact our Sales Department</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-primary">
            (+880)1555-777777
          </h2>
          <div className="grid grid-cols-2 justify-between">
            <ul className="text-base font-medium space-y-1 md:space-y-2">
              <li>Saturday:</li>
              <li>Sunday:</li>
              <li>Monday:</li>
              <li>Tuesday:</li>
              <li>Wednesday:</li>
              <li>Thursday:</li>
              <li>Friday:</li>
            </ul>
            <ul className="text-base font-medium space-y-1 md:space-y-2">
              <li>9.00-5.00</li>
              <li>9.00-5.00</li>
              <li>9.00-5.00</li>
              <li>9.00-5.00</li>
              <li>9.00-5.00</li>
              <li>9.00-5.00</li>
              <li className="font-medium text-primary">CLOSED</li>
            </ul>
          </div>
        </div>
        <div>
          <form className="p-4 mb-4 sm:p-6 md:p-8 md:mb-12 rounded-lg duration-1000">
            <div>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-base font-medium">
                    Your Name
                  </span>
                </div>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter Your Name"
                  className="input input-bordered w-full"
                  required
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-base font-medium">
                    Your Address
                  </span>
                </div>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter Your Address"
                  className="input input-bordered w-full"
                  required
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-base font-medium">
                    Your Contact
                  </span>
                </div>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter Your Contact Number"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>

            <div className="card-actions justify-center md:justify-start pt-4">
              <input
                value="Submit"
                type="submit"
                className="btn btn-primary bg-primary hover:bg-[#ff4805d3] border-none text-white w-32  duration-700"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
