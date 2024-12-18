const ContactUs = () => {
  const teamMembers = [
    {
      name: "Faizan Ahmed",
      designation: "Marketing & Sales Executive",
      ext: "1236",
    },
    {
      name: "Shafaat Sadiq",
      designation: "Marketing & Sales Executive",
      ext: "1236",
    },
    {
      name: "Mudassaar Naseer",
      designation: "Marketing & Sales Executive",
      ext: "1236",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center relative px-4"
      style={{ backgroundImage: 'url("/uper gradiant copy.jpg")' }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white/70"></div>

      {/* Page Content */}
      <div className="relative z-10 max-w-4xl mx-auto py-16 flex flex-wrap">
        {/* Title */}
        <div className="w-full">
          <h1 className="text-center text-3xl md:text-4xl font-bold text-primary mb-8 uppercase underline">
            Contact Us
          </h1>
        </div>

        {/* Subheading */}
        <div className="w-full">
          <p className="text-left text-xl text-primary font bold ml-6 underline  font-semibold mb-4">
            Contact Our Team
          </p>
        </div>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="p-10">
            {/* Team Members and Illustration */}
            <div className="w-full flex flex-wrap items-start">
              {/* Team Member Boxes */}
              <div className="flex flex-col w-full md:w-auto">
                <div className="bg-white shadow-lg rounded-lg p-4 w-full md:w-[70%] border border-gray-200 mb-6 animate-fade-in-up">
                  <h3 className="text-lg font-bold text-primary">
                    Name: {teamMembers[0].name}
                  </h3>
                  <p className="text-gray-700 mt-2">
                    Designation: {teamMembers[0].designation}
                  </p>
                  <p className="text-gray-700 mt-1">
                    Ext: {teamMembers[0].ext}
                  </p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-4 w-full md:w-[70%] border border-gray-200 mb-6 ml-0 md:ml-40 animate-fade-in-up animation-delay-200">
                  <h3 className="text-lg font-bold text-primary">
                    Name: {teamMembers[1].name}
                  </h3>
                  <p className="text-gray-700 mt-2">
                    Designation: {teamMembers[1].designation}
                  </p>
                  <p className="text-gray-700 mt-1">
                    Ext: {teamMembers[1].ext}
                  </p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-4 border w-full md:w-[70%] border-gray-200 ml-0 md:ml-80 animate-fade-in-up animation-delay-400">
                  <h3 className="text-lg font-bold text-primary">
                    Name: {teamMembers[2].name}
                  </h3>
                  <p className="text-gray-700 mt-2">
                    Designation: {teamMembers[2].designation}
                  </p>
                  <p className="text-gray-700 mt-1">
                    Ext: {teamMembers[2].ext}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* Illustration */}
            <div className="w-full md:w-auto md:mt-0 ml-auto">
              <img
                src="/contactUs.png"
                alt="Contact Illustration"
                className="w-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
