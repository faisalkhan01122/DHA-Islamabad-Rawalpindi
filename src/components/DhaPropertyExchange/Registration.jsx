const Registration = () => {
  return (
    <div
      className="relative bg-cover min-h-screen flex items-center justify-center px-4"
      style={{ backgroundImage: 'url("/uper gradiant copy.jpg")' }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white/70"></div>

      <div className="relative  w-full max-w-4xl mx-auto ">
        <div>
          <h1 className="flex justify-center items-center p-4 text-3xl font-bold underline text-primary uppercase">
            registration
          </h1>
        </div>
        <div className="p-2 md:p-4 flex justify-center items-center">
          <div className="bg-white w-full  border-3 border-gray-500 rounded-lg p-3">
            <div className=" p-3">
              <div className="bg-white rounded-md shadow-lg">
                {/* Header Section */}
                <div className="bg-[#007BFF] text-white p-4 rounded-t-md">
                  <h2 className="text-lg font-semibold text-sm text-center">
                    Please fill the form below
                  </h2>
                </div>
                <div className="p-4 text-red-500 font-semibold text-sm text-sm">
                  <p>
                    FOR FUTURE INVESTMENT OPPORTUNITIES/CUSTOM REQUIREMENTS YOU
                    ARE REQUESTED TO PROVIDE FOLLOWING INFORMATION:-
                  </p>
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
                  {/* country */}
                  <div className="flex flex-col">
                    <label className="text-gray-700 font-semibold text-sm mb-1 uppercase">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <select className="border border-gray-300 p-2 rounded">
                      <option value="Aland Island">Aland Island</option>
                      <option value="Pakistan">Pakistan</option>
                    </select>
                  </div>
                  {/* Requirements */}
                  <div className="flex flex-col">
                    <label className="text-gray-700 font-semibold text-sm mb-1 uppercase">
                      Requirements <span className="text-red-500">*</span>
                    </label>
                    <select className="border border-gray-300 p-2 rounded">
                      <option value="Residential Plot">Residential Plot</option>
                      {/* <option value="Commercial">Commercial</option> */}
                    </select>
                  </div>
                  {/* Phase */}
                  <div className="flex flex-col">
                    <label className="text-gray-700 font-semibold text-sm mb-1 uppercase">
                      Phase <span className="text-red-500">*</span>
                    </label>
                    <select className="border border-gray-300 p-2 rounded">
                      <option value="Phase I">Phase I</option>
                      <option value="Phase II">Phase II</option>
                      <option value="Phase III">Phase III</option>
                      <option value="Phase V">Phase V</option>
                    </select>
                  </div>
                  {/* Size */}
                  <div className="flex flex-col">
                    <label className="text-gray-700 font-semibold text-sm mb-1 uppercase">
                      Size <span className="text-red-500">*</span>
                    </label>
                    <select className="border border-gray-300 p-2 rounded">
                      <option value="2 Kanal">2 Kanal</option>
                      <option value="5 Kanal">5 Kanal</option>
                      <option value="7 Kanal">7 Kanal</option>
                    </select>
                  </div>
                  {/* Price Range */}
                  <div className="flex flex-col">
                    <label className="text-gray-700 font-semibold text-sm mb-1 uppercase">
                      Budget <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="border border-gray-300 p-2 rounded"
                    />
                  </div>
                  {/* Remarks */}
                  <div className="flex flex-col sm:col-span-2">
                    <label className="text-gray-700 font-semibold text-sm mb-1 uppercase">
                      Remarks
                    </label>
                    <textarea
                      placeholder="Write your remarks here..."
                      className="border border-gray-300 p-2 rounded h-24 resize-y"
                    ></textarea>
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

export default Registration;
