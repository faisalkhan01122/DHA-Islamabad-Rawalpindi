// import { useState, useEffect } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import img1 from "../assets/Images/RandomImages/Facebook.png";
// import img2 from "../assets/Images/RandomImages/Mask Group 1.png";
// import img3 from "../assets/Images/RandomImages/WhatsApp Image 2024-.png";

// const ImageSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const slides = [img1, img2, img3];

//   // Automatically change slide every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? slides.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div
//       className="relative w-full h-[70vh] flex justify-center items-center bg-gray-100 overflow-hidden p-6"
//       style={{
//         backgroundImage: "url('/uper gradiant copy.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="absolute inset-0 bg-white/70"></div>

//       {/* Skewed Previous Image */}
//       <div
//         className={`absolute top-0 left-[-100px]  md:left-[-60px] w-0 md:w-48 lg:w-[22%] h-full overflow-hidden z-10 p-10  translate-x-4 -skew-y-6 transition-transform duration-500 ease-in-out ${
//           currentIndex === 0 ? "opacity-0 pointer-events-none" : "opacity-100"
//         }`}
//         onClick={handlePrev}
//       >
//         <img
//           src={slides[(currentIndex - 1 + slides.length) % slides.length]}
//           alt="Previous Slide"
//           className="w-full h-full object-cover  "
//         />
//       </div>

//       {/* Main Image */}
//       <div className="w-full md:w-[60%]  h-full relative z-10">
//         <img
//           src={slides[currentIndex]}
//           alt="Main Slide"
//           className="w-full h-full object-cover  sh transition-transform duration-500 ease-in-out"
//         />
//         <button className="absolute bottom-5 left-[60px] md:left-[80px] transform -translate-x-1/2 px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-3 border border-primary font-semibold rounded shadow-md bg-primary text-white">
//           See More
//         </button>
//       </div>

//       {/* Skewed Next Image */}
//       <div
//         className="absolute top-0 right-0  md:right-[-40px] w-0 md:w-48 lg:w-[22%] h-full overflow-hidden z-10 p-10 translate-x-4 skew-y-6 transition-transform duration-500 ease-in-out cursor-pointer"
//         onClick={handleNext}
//       >
//         <img
//           src={slides[(currentIndex + 1) % slides.length]}
//           alt="Next Slide"
//           className="w-full h-full border-b-2 border-gray-800 shadow-md shadow-gray-700 object-cover "
//         />
//       </div>

//       {/* Navigation Arrows */}
//       <button
//         onClick={handlePrev}
//         className="absolute left-2 md:left-36 lg:left-64 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-large hover:bg-gray-700 z-20"
//       >
//         <FaChevronLeft />
//       </button>
//       <button
//         onClick={handleNext}
//         className="absolute right-2 md:right-36 lg:right-64 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-large hover:bg-gray-700 z-20"
//       >
//         <FaChevronRight />
//       </button>
//     </div>
//   );
// };

// export default ImageSlider;
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import img1 from "../assets/Images/RandomImages/Facebook.png";
import img2 from "../assets/Images/RandomImages/Mask Group 1.png";
import img3 from "../assets/Images/RandomImages/WhatsApp Image 2024-.png";
// import img4 from "../assets/Images/RandomImages/slide1.jpg";
// import img5 from "../assets/Images/RandomImages/Facebook.jpg";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // img4, img5
  const slides = [img1, img2, img3];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="relative w-full h-[70vh] flex justify-center items-center bg-gray-100 overflow-hidden p-6"
      style={{
        backgroundImage: "url('/uper gradiant copy.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-white/70"></div>
      <div
        className="absolute top-[4%] left-[-60px] md:left-[-40px] w-[20%] h-[70%] z-10 overflow-hidden transform transition-transform duration-500 ease-in-out cursor-pointer"
        onClick={handlePrev}
        style={{
          transform: "skewY(12deg)", // Skew only the left side of the image
          transformOrigin: "left center", // Apply the skew effect from the left side
        }}
      >
        <div
          className="w-full h-full overflow-hidden"
          style={{
            transform: "skewY(0deg)", // No skew on the right side, keeps it fixed
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // Ensure right side stays intact
          }}
        >
          <img
            src={slides[(currentIndex - 1 + slides.length) % slides.length]}
            alt="Previous Slide"
            className="w-full h-full object-fill shadow-md shadow-primary"
          />
        </div>
      </div>

      {/* Main Image */}
      <div
        className="w-full md:w-[60%]  h-full relative z-10"
        style={{ boxShadow: "#6c726c -4px 20px 10px" }}
      >
        <img
          src={slides[currentIndex]}
          alt="Main Slide"
          className="w-full h-full object-fill  sh transition-transform duration-500 ease-in-out"
        />
        {/* Glass effect background */}
        <div className="absolute bg-[#0a0a0a6b] py-2 bottom-14 left-0 w-full flex  items-center z-20">
          <div className=" px-4 ">
            <button className="px-4  md:px-6 md:py-1 border border-primary font-semibold rounded shadow-md bg-primary text-white">
              See More
            </button>
          </div>
        </div>
      </div>

      {/* Skewed Next Image */}
      <div
        className="absolute top-0 right-0 md:right-[-40px] w-0 md:w-48 lg:w-[22%] h-[85%] overflow-hidden z-10 p-10 translate-x-4 skew-y-30 transition-transform duration-500 ease-in-out cursor-pointer"
        onClick={handleNext}
        style={{
          transform: "rotateY(0deg)", // Ensures no rotation (or you can adjust if needed)
        }}
      >
        <div
          className="w-full h-full overflow-hidden"
          style={{
            transform: "skewY(-12deg)", // Skew only the right side of the image
            transformOrigin: "right center", // Apply the skew effect from the right side
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // Ensure left side stays intact
          }}
        >
          <img
            src={slides[(currentIndex + 1) % slides.length]}
            alt="Next Slide"
            className="w-full h-full object-fill border-b-2 border-gray-800 shadow-md shadow-gray-700"
          />
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-2 md:left-36 lg:left-64 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-large hover:bg-gray-700 z-20"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 md:right-36 lg:right-64 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-large hover:bg-gray-700 z-20"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ImageSlider;
