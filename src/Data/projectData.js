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


import m1 from "../assets/steve9003-attachments (3)/5-web-or-mls-52nd Ave W-06042025-005.jpg";
import m2 from "../assets/steve9003-attachments (3)/6-web-or-mls-52nd Ave W-06042025-006.jpg";
import m3 from "../assets/steve9003-attachments (3)/11-web-or-mls-52nd Ave W-06042025-011.jpg";
import m4 from "../assets/steve9003-attachments (3)/17-web-or-mls-52nd Ave W-06042025-017.jpg";
import m5 from "../assets/steve9003-attachments (3)/20-web-or-mls-52nd Ave W-06042025-020.jpg";
import m6 from "../assets/steve9003-attachments (3)/26-web-or-mls-52nd Ave W-06042025-026.jpg";

import l1 from "../assets/steve9003-attachments (5) (1)/lawndale 1.jpg"
import l2 from "../assets/steve9003-attachments (5) (1)/lawndale 2.jpg"
import l3 from "../assets/steve9003-attachments (5) (1)/lawndale 3.jpg"
import l4 from "../assets/steve9003-attachments (5) (1)/lawndale listing 1.jpeg"
import l5 from "../assets/steve9003-attachments (5) (1)/lawndale listing 11.jpeg"
import l6 from "../assets/steve9003-attachments (5) (1)/lawndale listing 13.jpeg"
import l7 from "../assets/steve9003-attachments (5) (1)/lawndale listing 18.jpeg"
import l8 from "../assets/steve9003-attachments (5) (1)/lawndale listing 7.jpeg"


import d1 from "../assets/steve9003-attachments (6)/861 2nd bath.jpg"
import d2 from "../assets/steve9003-attachments (6)/861 adu.jpg"
import d3 from "../assets/steve9003-attachments (6)/861 living.jpg"

export const projectsData = {
  com: {
    title: "Commercial & Mixed Use",
    items: [
      {
        id: 1,
        title: "BlueStar Home Office - Seattle, WA",
        image: img1,
        description:
          'Ryco Equipment is a 40,000 plus square foot facility located in Mountlake Terrace, Washington specifically designed and built as a state of the art equipment designer and builder of custom fish processing technology.  BlueStar was enagaged to provide design and construction services that included complex electrical and plumbing systems as well as "clean room" construction.  ',
        images: [cc1],
      },
      {
        id: 2,
        title: "Ryco Manufacturing Building - Shoreline, WA",
        image: img2,
        images: [],
      },
      {
        id: 3,
        title: "Fauntleroy Place - Seattle, WA",
        image: img3,
        description:
          "Fauntleroy Place is a 210 unit mixed use retail/residential project located atthe gateway to the West Seattle Neighborhood.  Bluestar originally acquired the site from Hanock Fabrics.  After sucessfully lobbying the City of Seattle to abandon a public alleyway in order to create the necessary footprint, Bluestar acquired entitlements and permits for the project before selling to a third party to complete construction.  The retail portion of the building was ultimately leased to 24 Hour Fitness.  ",
        images: [],
      },
      {
        id: 4,
        title: "Multicare MRI Clinic - Tacoma, WA",
        image: img4,
        images: [],
      },
      {
        id: 5,
        title: "The Blake Apartments - Seattle, WA",
        image: img5,
        images: [],
      },
      {
        id: 6,
        title: "Cielo Vista Condominiums - Las Vegas, NV",
        image: img6,
        
      },
    ],
  },
  res: {
    title: "Residential Development",
    items: [
      {
        id: 1,
        title: "Sandhurst Cove - Indio, CA",
        description:
          "Sandhurst Cove is a 132 lot residential, single family home project designed, developed and constructed by BlueStar's Residential Division.  The project was conceived in late 2006 and was fully developed and built out in record time by 2008, selling out all units within 18 months.",
        image: img12,
        images: [imgres11, imgres12, imgres13],
      },
      {
        id: 2,
        title: "Shoreline Sustainable Condominiums - Shoreline, WA",
        image: img22,
        images: [],
      },
      {
        id: 3,
        title: "407 Townhomes - Tacoma, WA",
        image: img32,
        images: [],
      },
      {
        id: 4,
        title: "Meadowpark Townhomes - University Place, WA",
        image: img42,
        images: [m1,m2,m3,m4,m5,m6],
        more:"Explore More"
      },
      {
        id: 5,
        title: "Parkland Condominiums - Parkland, WA",
        image: img52,
        images: [r51, r52, r53],
      },
      {
        id: 6,
        title: "Roosevelt Condominiums - Seattle, WA",
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
    title: "Custom Homes",
    items: [
      {
        id: 1,
        title: "Lake Washington Waterfront - Seattle, WA",
        description:
          "BlueStar constructed this home in the Seattle neighborhood of Lake Forest Park for a private client interested in a custom designed home on their lot on Lake Washington.  The project presented complex challenges due to its proximity to the lake that required a deep excavation and steel piles driven into the site to maintain its stability. In addition, many design ",
        image: imgh1,
        images: [ch11, ch12, ch13, ch14],
      },
      {
        id: 2,
        title: "Desert Custom - Palm Desert, CA",
        image: imgh2,
        images: [],
      },
      {
        id: 3,
        title: "Family Custom - Lakewood, WA",
        image: imgh3,
        images: [],
      },
      {
        id: 4,
        title: "Custom DADU - Parkland, WA",
        description:"Bluestar now offers custom DADU (Detached Accessory Dwelling Unit) as a secondary home built on the same lot as a primary residence. Designing one is both creative and technical, balancing regulations, aesthetics, and function. Here’s the step-by-step design process: 1. Site & Zoning Analysis. Research local codes: Check city zoning rules, lot size requirements, height limits, setbacks, parking requirements, and maximum square footage. Site conditions: Measure the lot, identify utilities (water, sewer, power), and note features like slope, trees, or easements. Placement options: Decide where the DADU fits best—often at the rear or side of the lot for privacy. 2. Needs & Goals Assessment. Purpose: Rental income, multigenerational living, guest space, office, or future downsizing? Occupants: Singles, couples, or families—this informs bedroom count, accessibility, and storage. Budget: Establish a realistic range, factoring in construction, permits, and site work. 3. Conceptual Design. Size & layout: Maximize efficiency with an open plan, vertical space, and built-ins. Style: Match or complement the primary home’s architecture, or choose a contrasting modern design. Privacy: Place windows, entries, and outdoor areas to reduce sightlines between the main house and DADU. Outdoor connection: Patios, decks, or shared gardens improve livability. 4. Schematic Design. Floor plans: Sketch multiple options for living, kitchen, bath, and bedroom placement. Mass & form: Develop 3D studies or models to understand rooflines, scale, and shadows. Sustainability: Integrate energy-efficient systems, natural lighting, and good insulation early. 5. Design Development. Detailed drawings: Refine kitchen, bath, storage, and circulation. Material selection: Choose siding, roofing, windows, and finishes within budget. Systems planning: HVAC, plumbing, and electrical systems. 6. Permitting & Approvals. Submit plans: Work with an architect, designer, or engineer to prepare permit drawings. City review: Address zoning, building codes, energy requirements, and any neighborhood covenants. 7. Construction Documentation. 8. Construction. Site prep: Grading, utility hookups, foundation work. Build: Framing, enclosure, interior finishes, and landscaping. Inspections: City checks for code compliance at each stage. 9. Finalization. Landscaping: Complete privacy plantings, pathways, and outdoor space. Occupancy permit: Approved before move-in or rental.",

        image: imgh4,
        images: [d1,d2,d3],
      },
      {
        id: 5,
        title: "Lawndale",
        image:l4 ,
        images: [l1,l2,l3,l6,l5,l7,l8],
      },
    ],
  },
};
