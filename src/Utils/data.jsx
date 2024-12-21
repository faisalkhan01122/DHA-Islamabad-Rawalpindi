import image1 from "../assets/Images/Advertisements/real-state.jpg";
import image2 from "../assets/Images/Advertisements/DHA-security.jpg";
import image3 from "../assets/Images/Advertisements/notice.jpg";
import image4 from "../assets/Images/Advertisements/ips.jpg";
import image5 from "../assets/Images/Advertisements/phase-4.jpeg";
import image6 from "../assets/Images/Advertisements/river-view.jpg";
import image7 from "../assets/Images/Advertisements/phase-v.jpg";
import image8 from "../assets/Images/Advertisements/expressway.jpg";
import image9 from "../assets/Images/Advertisements/secter-j.jpg";
import image10 from "../assets/Images/Advertisements/secter-k.jpg";
import image12 from "../assets/Images/Advertisements/auction.jpg";
// import { title } from "framer-motion/client";
// import { label } from "framer-motion/client";
import ph1 from "../assets/Images/Phases/Ph-1.jpg";
import ph2 from "../assets/Images/Phases/Ph-2.jpg";
import ph3 from "../assets/Images/Phases/Ph-3.jpg";
import ph4 from "../assets/Images/Phases/Ph-4.jpg";
import ph5 from "../assets/Images/Phases/Ph-5.jpg";
import ph6 from "../assets/Images/Phases/Ph-6.jpg";
import mapphse1 from "../assets/Images/Phases/mapphase1.png";
import mapphse2 from "../assets/Images/Phases/mapphase2.png";
import mapphse3 from "../assets/Images/Phases/mapphase3.png";
import mapphse4 from "../assets/Images/Phases/mapphase4.png";
import mapphse5 from "../assets/Images/Phases/mapphase5.png";
import mapphse6 from "../assets/Images/Phases/mapphase6.png";

import event1 from "../assets/Images/Gallery/event1.png";
import event2 from "../assets/Images/Gallery/event2.png";
import event3 from "../assets/Images/Gallery/event3.png";
import event4 from "../assets/Images/Gallery/event4.png";
import event5 from "../assets/Images/Gallery/event5.png";
import event6 from "../assets/Images/Gallery/event6.png";
import event7 from "../assets/Images/Gallery/event7.png";
import event8 from "../assets/Images/Gallery/event8.png";
import event9 from "../assets/Images/Gallery/event9.png";
import event10 from "../assets/Images/Gallery/event10.png";
import event11 from "../assets/Images/Gallery/event11.png";
import event12 from "../assets/Images/Gallery/event12.png";
export const menuData = [
  { label: "Home", link: "/" },
  {
    label: "About Us",
    link: "/aboutus",
  },
  {
    label: "Projects",
    link: "/phase",
    sub: [
      { subLabel: "Phases", link: "/phase" },
      { subLabel: "Ongoing Projects", link: "/OnGoing" },
      { subLabel: "Upcoming Projects", link: "/Upcoming" },
    ],
  },
  {
    label: "Lifestyle",
    link: "lifestyle/education",
    sub: [
      { subLabel: "Education", link: "lifestyle/education" },
      { subLabel: "Healthcare", link: "/lifestyle/healthcare" },
      { subLabel: "Parks", link: "/lifestyle/parks" },
      { subLabel: "Sports", link: "/lifestyle/sports" },
      { subLabel: "Hospitality", link: "/lifestyle/hospitality" },
      { subLabel: "Retail", link: "/lifestyle/retail" },
      { subLabel: "Infrastructure", link: "/lifestyle/infrastructure" },
      { subLabel: "Amenities", link: "/lifestyle/amenities" },
    ],
  },
  {
    label: "Gallery",
    link: "/brochures",
    sub: [
      { subLabel: "Events", link: "/events" },
      { subLabel: "Brochures", link: "/brochures" },
      { subLabel: "Maps", link: "/maps" },
    ],
  },
  {
    label: "Facilities",
    link: "/facilities",
  },
  { label: "Services", link: "/services" },
  {
    label: "Member Portal",
    link: "/loginForm",
    sub: [
      // { subLabel: "Guide", link: "/guide" },

      { subLabel: "Login", link: "/loginForm" },
      // { subLabel: "Guide", link: "/guide" },
      { subLabel: "How to pay", link: "/HowToPay" },
    ],
  },
  {
    label: "Add Ons",
    // link: "/loginForm" ,
    sub: [
      {
        subLabel: "Selling Zone",
        link: "https://www.zameen.com/Homes/Islamabad-3-1.html",
      },
      // { subLabel: "Guide", link: "/guide" },
      { subLabel: "Home Services", link: "/" },
      { subLabel: "CMS", link: "/" },
    ],
  },
];
export const dropdownData = [
  {
    main: "Property Exchange",
    link: "/Introduction&Services",
    sub: [
      { label: "Introduction & Services", link: "/Introduction&Services" },
      {
        label: "Price Valuation & Benchmarking",
        link: "/dha-property-exchange/price-valuation-benchmarking",
      },
      { label: "Sales Of Property", link: "/saleproperty" },
      { label: "Purchase Of Property", link: "/purchaseofproperty" },
      { label: "Registration", link: "/dha-property-exchange/registration" },
      { label: "Contact Us", link: "/dha-property-exchange/contact-us" },
    ],
  },
  {
    main: "Affiliates",
    link: "/Propertydealer",
    sub: [
      { label: "Property Dealers", link: "/Propertydealer" },
      { label: "Architects", link: "/Architectspage" },
      { label: "Soil Test Firms", link: "/affiliates/soil-test-firms" },
      { label: "Vetting Engineers", link: "/affiliates/vetting-engineers" },
      { label: "PTCL", link: "/affiliates/ptcl" },
      {
        label: "Structural Engineers",
        link: "/affiliates/structural-engineers",
      },
      { label: "Solar Firms", link: "/affiliates/solar-firms" },
      { label: "MEP Engineers", link: "/affiliates/mep-engineers" },
    ],
  },
  {
    main: "Official Notice",
    link: "/DHABylawsPage",
    sub: [
      { label: "DHA ByLaws", link: "/DHABylawsPage" },
      { label: "Transfer Procedure", link: "/TransferProcedure" },
      { label: "DHA Valley", link: "/procedure/dha-valley/file-opening" },
      { label: "DHA Property Rentals", link: "/Renthome" },
      { label: "Downloads", link: "/DownloadPage" },
    ],
  },
];

export const advertisementData = [
  {
    imageUrl: image1,
    title: "Real Estate Investment in Pakistan",
  },
  {
    imageUrl: image2,
    title: "DHA Security",
  },
  {
    imageUrl: image3,
    title: "Important Notice",
  },
  {
    imageUrl: image4,
    title: "IPS - 2024",
  },
  {
    imageUrl: image5,
    title: "Possession of Plots Sector , Phase-IV",
  },
  {
    imageUrl: image6,
    title: "River View South",
  },
  {
    imageUrl: image7,
    title: "Possession of Residential Plots Sector J, Phase-V",
  },
  {
    imageUrl: image8,
    title: "Ground Breaking of DHA Interchange on Islamabad Express Way",
  },
  {
    imageUrl: image9,
    title: "Possession of Residential Plots Sector J, Phase-V",
  },
  {
    imageUrl: image10,
    title: "Possession of Residential Plots Sector J, Phase-V",
  },
  {
    imageUrl: image12,
    title: "Open Auction",
  },
];

export const EventData = [
  {
    imageUrl: event1,
    title: "Journey of Hajj pics dated 02 June 2024",
  },
  {
    imageUrl: event2,
    title: "IPS (Dubai)",
  },
  {
    imageUrl: event3,
    title: "Innovista Opening Cermony dated 28 April 2024",
  },
  {
    imageUrl: event4,
    title: "Basket Ball Championship Final dated 26 March 2024",
  },
  {
    imageUrl: event5,
    title: "Dha Training Workshop dated 14 Feb 2024",
  },
  {
    imageUrl: event6,
    title: "Table Tennis Championship Nov 2023",
  },
  {
    imageUrl: event7,
    title: "Meet & greet",
  },
  {
    imageUrl: event8,
    title: "Final Badminton Championship",
  },
  {
    imageUrl: event9,
    title: "Cycle Race & Heavy Bike Rally",
  },
  {
    imageUrl: event10,
    title: "Children Summer Camp Sports Jun 2023",
  },
  {
    imageUrl: event11,
    title: "Tambola Night June 2023",
  },
  {
    imageUrl: event12,
    title: "Chaand Raat Bazar Apr 2023",
  },
];
export const phasesData = [
  {
    img: ph1,
    title: "Phase I",
    description:
      "Phase I DHA Phase I Community has been meticulously planned and designed to best standards in order to present residents with an exceptional way of life and quality living in a semi",
    link: "/phase-I-details",
    bgImg: "/pngwing.com.png",
    imgHover: "/mapphase1.png",
  },
  {
    img: ph2,
    title: "Phase II",
    description:
      "Nestled between Grand Trunk Road and Islamabad Highway lies our DHA phase II comprising of approx 15.075 kanals: All the sectors are fully urbanized and now home to a number of",
    link: "/phase-II-details",
    bgImg: "/pngwing.com.png",
  },
  {
    img: ph3,
    title: "Phase III",
    description:
      "Located in the heart of enchanting Potohár Region, DHA Phase III promises elegant town planning with beating heart concept.comprising modernized residential and commercial areas, Its town plan also",
    link: "/phase-III-details",
    bgImg: "/pngwing.com.png",
  },
  {
    img: ph4,
    title: "Phase IV",
    description:
      "Designed over an area of approx 4000 Kanals, DHA Phase IV is located adjacent to Orchard Area, DHA Phase I along Soan River. Beautifully set in a semi-hilly area having eye-catching",
    link: "/phase-IV-details",
    bgImg: "/pngwing.com.png",
  },
  {
    img: ph5,
    title: "Phase V",
    description:
      "Formerly launched as Commoner's Town in 2006, over an area of approx 7000 kanals, it has been renamed as DHA Phase V with Sector A. B, C, D,E, F, G & H. Phase-V is located along the Main Islamabad",
    link: "/phase-V-details",
    bgImg: "/pngwing.com.png",
  },
  {
    img: ph6,
    title: "Phase VI",
    description:
      "DHA Islamabad-Rawalpindi Phase VI (Ex Phase - II Ext) has launched in March 2005 and is spread over an area of 55,000 kanals (estimated). After re-designing of masterplan",
    link: "/phase-VI-details",
    bgImg: "/pngwing.com.png",
  },
];

export const MapphasesData = [
  {
    imgHover: ph1,
    title: "Phase I",
    description:
      "Phase I DHA Phase I Community has been meticulously planned and designed to best standards in order to present residents with an exceptional way of life and quality living in a semi",
    link: "/phase-I-details",
    img: mapphse1,
    bgImg: "/mapphase1.png",
  },
  {
    imgHover: ph2,
    title: "Phase II",
    description:
      "Nestled between Grand Trunk Road and Islamabad Highway lies our DHA phase II comprising of approx 15.075 kanals: All the sectors are fully urbanized and now home to a number of",
    link: "/phase-II-details",
    bgImg: "/pngwing.com.png",
    img: mapphse2,
  },
  {
    imgHover: ph3,
    title: "Phase III",
    description:
      "Located in the heart of enchanting Potohár Region, DHA Phase III promises elegant town planning with beating heart concept.comprising modernized residential and commercial areas, Its town plan also",
    link: "/phase-III-details",
    bgImg: "/pngwing.com.png",
    img: mapphse3,
  },
  {
    imgHover: ph4,
    title: "Phase IV",
    description:
      "Designed over an area of approx 4000 Kanals, DHA Phase IV is located adjacent to Orchard Area, DHA Phase I along Soan River. Beautifully set in a semi-hilly area having eye-catching",
    link: "/phase-IV-details",
    bgImg: "/pngwing.com.png",
    img: mapphse4,
  },
  {
    imgHover: ph5,
    title: "Phase V",
    description:
      "Formerly launched as Commoner's Town in 2006, over an area of approx 7000 kanals, it has been renamed as DHA Phase V with Sector A. B, C, D,E, F, G & H. Phase-V is located along the Main Islamabad",
    link: "/phase-V-details",
    bgImg: "/pngwing.com.png",
    img: mapphse5,
  },
  {
    imgHover: ph6,
    title: "Phase VI",
    description:
      "DHA Islamabad-Rawalpindi Phase VI (Ex Phase - II Ext) has launched in March 2005 and is spread over an area of 55,000 kanals (estimated). After re-designing of masterplan",
    link: "/phase-VI-details",
    bgImg: "/pngwing.com.png",
    img: mapphse6,
  },
];

export const ServiceData = [
  {
    img: "/services1.jpg",
    title: "Environmental Sustainability",
    description: " * Community clean-up drives.",
    description1: "* Tree plantation and recycling programs.",
    description2: "* Water and energy conservation workshops.",
    // link: "/phase-I-details",
    bgImg: "/pngwing.com.png",
    imgHover: "/mapphase1.png",
  },
  {
    img: "/services2.jpg",
    title: "Community Support Services",
    description: "* Food banks and clothing donation drives. ",
    description1: "* Temporary shelters and housing assistance.",
    description2: "* Domestic violence support and crisis helplines.",
    // link: "/phase-I-details",
    bgImg: "/pngwing.com.png",
    imgHover: "/mapphase1.png",
  },
  {
    img: "/services3.jpg",
    title: "Employment & Entrepreneurship",
    description: "* Job fairs and career counseling.",
    description1: "* Microfinance and small business support.",
    description2: "* Apprenticeship and trade skills training programs.",
    // link: "/phase-I-details",
    bgImg: "/pngwing.com.png",
    imgHover: "/mapphase1.png",
  },
  {
    img: "/services4.jpg",
    title: "Housing and Accommodation",
    description: "* Tree plantation and recycling programs.",
    description1: "* Tree plantation and recycling programs.",
    description2: "* Water and energy conservation workshops.",
    // link: "/phase-I-details",
    bgImg: "/pngwing.com.png",
    imgHover: "/mapphase1.png",
  },
  {
    img: "/services5.jpg",
    title: "Cleaning and Maintenance",
    description: "* Tree plantation and recycling programs.",
    description1: "* Tree plantation and recycling programs.",
    description2: "* Water and energy conservation workshops.",
    // link: "/phase-I-details",
    bgImg: "/pngwing.com.png",
    imgHover: "/mapphase1.png",
  },
  {
    img: "/services6.jpg",
    title: "Relocation and Moving Assistance",
    description: "* Tree plantation and recycling programs.",
    description1: "* Tree plantation and recycling programs.",
    description2: "* Water and energy conservation workshops.",
    // link: "/phase-I-details",
    bgImg: "/pngwing.com.png",
    imgHover: "/mapphase1.png",
  },
  {
    img: "/services7.jpg",
    title: "Utilities and Facilities Management",
    description: "* Tree plantation and recycling programs.",
    description1: "* Tree plantation and recycling programs.",
    description2: "* Water and energy conservation workshops.",
    // link: "/phase-I-details",
    bgImg: "/pngwing.com.png",
    imgHover: "/mapphase1.png",
  },
  {
    img: "/services8.jpg",
    title: "Lifestyle and Convenience Services",
    description: "* Tree plantation and recycling programs.",
    description1: "* Tree plantation and recycling programs.",
    description2: "* Water and energy conservation workshops.",
    //  link: "/phase-I-details",
    bgImg: "/pngwing.com.png",
    imgHover: "/mapphase1.png",
  },
];
