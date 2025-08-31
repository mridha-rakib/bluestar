import img1 from "../assets/c12.jpeg";
import img2 from "../assets/c22.jpeg";
import img3 from "../assets/c32.jpeg";
import img4 from "../assets/c42.jpeg";
import img5 from "../assets/c52.jpeg";
import img6 from "../assets/c62.jpeg";
import cc1 from "../assets/cc1.jpg";

import img12 from "../assets/r1.jpeg";
import img22 from "../assets/r2.webp";
import img32 from "../assets/r3.jpeg";
import img42 from "../assets/r4.jpeg";
import img52 from "../assets/r5.webp";
import img62 from "../assets/r6.jpeg";
import img72 from "../assets/r7.jpeg";

import imgh1 from "../assets/h1.webp";
import imgh2 from "../assets/h2.jpeg";
import imgh3 from "../assets/h3.webp";
import imgh4 from "../assets/h4.jpeg";

import imgres11 from "../assets/res11.jpg";
import imgres12 from "../assets/res12.jpg";
import imgres13 from "../assets/res13.jpg";

import r51 from "../assets/r5-1.webp";
import r52 from "../assets/r5-2.jpg";
import r53 from "../assets/r5-3.jpg";
import r61 from "../assets/r6-1.jpg";
import r62 from "../assets/r6-2.jpg";
import r63 from "../assets/r6-3.jpg";
import r64 from "../assets/r6-4.jpg";
import r65 from "../assets/r6-5.jpg";
import r66 from "../assets/r6-6.jpg";

import ch11 from "../assets/ch1-1.webp";
import ch12 from "../assets/ch1-2.webp";
import ch13 from "../assets/ch1-3.webp";
import ch14 from "../assets/ch1-4.webp";

export const projectsData = {
  com: {
    title: "Commercial & Mixed Use",
    items: [
      {
        id: 1,
        title: "Project One",
        image: img1,
        description:
          'Ryco Equipment is a 40,000 plus square foot facility located in Mountlake Terrace, Washington specifically designed and built as a state of the art equipment designer and builder of custom fish processing technology.  BlueStar was enagaged to provide design and construction services that included complex electrical and plumbing systems as well as "clean room" construction.  ',
        images: [cc1],
      },
      {
        id: 2,
        title: "Project Two",
        image: img2,
        images: [],
      },
      {
        id: 3,
        title: "Project Two",
        image: img3,
        description:
          "Fauntleroy Place is a 210 unit mixed use retail/residential project located atthe gateway to the West Seattle Neighborhood.  Bluestar originally acquired the site from Hanock Fabrics.  After sucessfully lobbying the City of Seattle to abandon a public alleyway in order to create the necessary footprint, Bluestar acquired entitlements and permits for the project before selling to a third party to complete construction.  The retail portion of the building was ultimately leased to 24 Hour Fitness.  ",
        images: [],
      },
      {
        id: 4,
        title: "Project Two",
        image: img4,
        images: [],
      },
      {
        id: 5,
        title: "Project Two",
        image: img5,
        images: [],
      },
      {
        id: 6,
        title: "Project Two",
        image: img6,
        children: [
          { id: 21, title: "Project Two-A", image: "/images/com2a.png" },
          { id: 22, title: "Project Two-B", image: "/images/com2b.png" },
        ],
      },
    ],
  },
  res: {
    title: "Residential Development",
    items: [
      {
        id: 1,
        title: "Project One",
        description:
          "Sandhurst Cove is a 132 lot residential, single family home project designed, developed and constructed by BlueStar's Residential Division.  The project was conceived in late 2006 and was fully developed and built out in record time by 2008, selling out all units within 18 months.",
        image: img12,
        images: [imgres11, imgres12, imgres13],
      },
      {
        id: 2,
        title: "Project Two",
        image: img22,
        images: [],
      },
      {
        id: 3,
        title: "Project Three",
        image: img32,
        images: [],
      },
      {
        id: 4,
        title: "Project Four",
        image: img42,
        images: [],
      },
      {
        id: 5,
        title: "Project Five",
        image: img52,
        images: [r51, r52, r53],
      },
      {
        id: 6,
        title: "Project Six",
        description:
          "Centrally located in this highly sought after North Seattle neighborhood, this condominium project features light, bright open spaces, custom finishes, ample onsite parking, all within a short commute to downtown and walking distance to shopping, entertainment and outdoor parks and playfields",
        image: img62,
        images: [r61, r62, r63, r64, r65, r66],
      },
      {
        id: 7,
        title: "Project Seven",
        image: img72,
        images: [],
      },
    ],
  },
  cus: {
    title: "Custom Home",
    items: [
      {
        id: 1,
        title: "Project One",
        description:
          "BlueStar constructed this home in the Seattle neighborhood of Lake Forest Park for a private client interested in a custom designed home on their lot on Lake Washington.  The project presented complex challenges due to its proximity to the lake that required a deep excavation and steel piles driven into the site to maintain its stability. In addition, many design ",
        image: imgh1,
        images: [ch11, ch12, ch13, ch14],
      },
      {
        id: 2,
        title: "Project Two",
        image: imgh2,
        images: [],
      },
      {
        id: 3,
        title: "Project Three",
        image: imgh3,
        images: [],
      },
      {
        id: 4,
        title: "Project Four",
        image: imgh4,
        images: [],
      },
    ],
  },
};
