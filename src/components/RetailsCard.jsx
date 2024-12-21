import { Link } from "react-router-dom";

const RetailsCard = ({ img, title, description, link }) => {
  return (
    <div className="bg-white rounded-md overflow-hidden border h-full md:h-[70vh] lg:h-full shadow-md shadow-primary relative">
      {/* Image Section */}
      <div className="relative w-full m-0 p-0">
        <img
          src={img}
          alt={title}
          className="w-full h-full md:h-64 object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-3 relative">
        <h1 className="text-primary text-center font-bold text-xl mb-2">
          {title}
        </h1>

        {/* Description Section with Background Image */}
        <div className="relative text-gray-600 border-b-2 pb-2 border-primary text-[.7rem] font-bold mb-2 group">
          {/* Background Image (Visible by Default) */}
          <div
            className="absolute inset-0 bg-no-repeat bg-right bg-cover opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none"
            style={{
              backgroundImage: `url(/pngwing.com.png)`,
              backgroundSize: "150px 150px",
            }}
          ></div>
          {/* Description Text */}
          <span className="relative cursor-pointer z-10">{description}</span>
        </div>
      </div>
    </div>
  );
};

export default RetailsCard;
