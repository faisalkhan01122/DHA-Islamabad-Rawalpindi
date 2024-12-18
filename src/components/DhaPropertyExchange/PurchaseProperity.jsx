const PurchaseProperity = () => {
  return (
    <div
      className="relative bg-cover min-h-screen flex items-center justify-center px-4"
      style={{ backgroundImage: 'url("/uper gradiant copy.jpg")' }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white/70"></div>
      <div className="relative   w-full  ">
        <div>
          <h1 className="flex justify-center items-center p-4 text-3xl font-bold underline text-primary uppercase">
            purchase of property
          </h1>
        </div>
        <div className="p-2 flex justify-center items-center border-none">
          <div className="bg-white w-full max-w-4xl mx-auto border-3 border-gray-500 rounded-lg p-3">
            <div className=" p-3">
              <div className="bg-white rounded-md shadow-lg">
                {/* Header Section */}
                <div className="bg-[#007BFF] text-white p-4 rounded-t-md">
                  <h2 className="text-lg font-semibold text-center">
                    Please fill the form below
                  </h2>
                </div>
                {/* Form Section */}
                <form className="p-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="flex flex-col">
                    <label className="text-gray-700 font-semibold text-sm mb-1 uppercase">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      className="border border-gray-300 p-2 rounded"
                    />
                  </div>
                  {/* CNIC */}
                  <div className="flex flex-col">
                    <label className="text-gray-700 font-semibold text-sm mb-1 uppercase">
                      CNIC <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="CNIC"
                      className="border border-gray-300 p-2 rounded"
                    />
                  </div>
                  {/* Mobile No */}
                  <div className="flex flex-col">
                    <label className="text-gray-700 font-semibold text-sm mb-1 uppercase">
                      Mobile No <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Mobile No"
                      className="border border-gray-300 p-2 rounded"
                    />
                  </div>
                  {/* Email */}
                  <div className="flex flex-col">
                    <label className="text-gray-700 font-semibold text-sm mb-1 uppercase">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="border border-gray-300 p-2 rounded"
                    />
                  </div>
                  {/* Type */}
                  <div className="flex flex-col">
                    <label className="text-gray-700 font-semibold text-sm mb-1 uppercase">
                      Type <span className="text-red-500">*</span>
                    </label>
                    <select className="border border-gray-300 p-2 rounded">
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                    </select>
                  </div>
                  {/* Phase */}
                  <div className="flex flex-col">
                    <label className="text-gray-700 font-semibold text-sm mb-1 uppercase">
                      Phase <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Phase"
                      className="border border-gray-300 p-2 rounded"
                    />
                  </div>
                  {/* Size */}
                  <div className="flex flex-col">
                    <label className="text-gray-700 font-semibold text-sm mb-1 uppercase">
                      Size <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Size"
                      className="border border-gray-300 p-2 rounded"
                    />
                  </div>
                  {/* Price Range */}
                  <div className="flex flex-col">
                    <label className="text-gray-700 font-semibold text-sm mb-1 uppercase">
                      Price Range/Budget <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="border border-gray-300 p-2 rounded"
                    />
                  </div>
                  {/* Submit Button */}
                  <div className="col-span-1 sm:col-span-2">
                    <button
                      type="submit"
                      className="w-full bg-[#007BFF] text-white py-2 rounded-md hover:bg-primarylight"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* Contact Details */}
            <div className="text-start text-sm text-gray-700 ">
              *For Details / Rates please contact our team at Mob No:
              0321-5355988 & 0303-8255475
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseProperity;
