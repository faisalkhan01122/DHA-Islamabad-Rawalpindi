import { Link } from "react-router-dom";

const ServicesCard = ({
  img,
  title,
  description,
  description1,
  description2,
  link,
  bgImg,
}) => {
  return (
    <div className="bg-white rounded-md cursor-pointer group overflow-hidden border h-full md:h-[70vh] lg:h-full  shadow-md shadow-primary">
      {/* Image Section */}
      <div className="relative w-full  m-0 p-0">
        <img
          src={img}
          alt={title}
          className="w-full h-full md:h-64 object-cover"
        />
      </div>

      {/* Content Section */}
      <div className=" p-3">
        <h1 className="text-primary text-center  font-bold text-xl mb-2">
          {title}
        </h1>
        <div
          className="relative  text-wrap text-gray-600 border-b-2 pb-2 border-primary text-[.7rem] font-bold mb-2"
          // style={{
          //   backgroundImage: `url(/pngwing.com.png)`,
          //   backgroundPosition: "right",
          //   backgroundRepeat: "no-repeat",
          //   backgroundSize: "150px 150px",
          // }}
        >
          {" "}
          <div
            className="absolute inset-0 bg-no-repeat bg-right bg-cover opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none"
            style={{
              backgroundImage: `url(/pngwing.com.png)`,
              backgroundSize: "150px 150px",
            }}
          ></div>
          <p> {description}</p>
          <p>{description1}</p>
          <p>{description2}</p>
        </div>

        <Link
          to={link}
          className="text-primary font-semibold hover:text-primarylight hover:scale-105 transition-transform duration-300"
        >
          See more
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;
