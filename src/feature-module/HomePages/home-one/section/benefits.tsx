import React from "react";
import SchoolCardComponent from "../../../../core/common/schoolCard/SchoolCard";
import { SchoolCard } from "../../../../core/common/data/interface/index"

const schools: SchoolCard[] = [
  {
    id: 1,
    name: "Iris Florets Preschool & Primary School",
    board: "CBSE",
    type: "CO-ED",
    address: "Sri Chandeshwari Colony, beside KBR, Hyderabad, Telangana",
    rating: 0,
    views: 90,
    badge: "Admission Open | 2025-26",
    image: "/images/iris-florets.png",
  },
  {
    id: 2,
    name: "Pallavi Aware School",
    board: "CBSE",
    type: "CO-ED",
    address: "Survey No. 37 & 40, Bairamalguda, Saroornagar, Hyderabad",
    rating: 0,
    views: 326,
    image: "/images/pallavi.png",
  },
  {
    id: 3,
    name: "Gowtham World School",
    board: "CBSE",
    type: "CO-ED",
    address: "Plot No. 5, Road No. 3, Venkateswara Colony, Saroornagar, Hyderabad",
    rating: 1,
    views: 1657,
    image: "/images/gowtham.png",
  },
  {
    id: 4,
    name: "Lotus National School",
    board: "CBSE",
    type: "CO-ED",
    address: "Gautham Nagar Near Doctors Colony, Opp: Koti Cheruvu, Hyderabad",
    rating: 0,
    views: 695,
    image: "/images/lotus.png",
  },
  {
    id: 5,
    name: "Sanskriti The School",
    board: "CBSE",
    type: "CO-ED",
    address: "23-70/2, Netaji Nagar, Saroornagar, Rangareddy, Telangana",
    rating: 0,
    views: 444,
    image: "/images/sanskriti.png",
  },
  {
    id: 6,
    name: "Panineeya Mahavidyalaya Public School",
    board: "CBSE",
    type: "GIRLS",
    address: "Vivekananda Nagar, Dilsukhnagar, Hyderabad",
    rating: 0,
    views: 1604,
    image: "/images/panineeya.png",
  },
  {
    id: 7,
    name: "Bhavishya School",
    board: "CBSE",
    type: "CO-ED",
    address: "9 no 58/1, Karmanghat village, Saroornagar mandal, Hasthinapuram",
    rating: 0,
    views: 497,
    image: "/images/bhavishya.png",
  },
  {
    id: 8,
    name: "Kendriya Vidyalaya",
    board: "CBSE",
    type: "CO-ED",
    address: "Kanchan Bagh, Hyderabad, Andhra Pradesh",
    rating: 0,
    views: 395,
    image: "/images/kendriya.png",
  }
];


const Benefits: React.FC = () => {
  return (
    <div className="container py-4">
        <h1>Recommeded Schools</h1>
      <div className="row">
        {schools.map((school) => (
          <SchoolCardComponent key={school.id} school={school} />
        ))}
      </div>
    </div>
  );
};

export default Benefits;

