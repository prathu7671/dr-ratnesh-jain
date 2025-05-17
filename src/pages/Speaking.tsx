
import { Presentation, Mic, Users } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useEffect } from "react";

const speakingData = [
  {
    role: "Panelist",
    items: [
      {
        title: "Ideas in Motion: Panel Discussion on Clinical Diagnostics Solutions- The Road Ahead",
        event: "ThermoFisher Scientific’s Global Health Equity Conclave",
        organizers: "United States Commercial Service and ThermoFisher Scientific",
        date: "27th February 2024",
        location: "Mumbai",
      },
      {
        title: "Developing a Biosimilar - Defining the Pipeline",
        event: "Biopharma Conclave",
        organizers: "CPHI-Informa",
        date: "11th-12th October, 2023",
        location: "Mumbai",
      },
      {
        title: "Developing a Biosimilar - Defining the Pipeline",
        event: "5th Annual Biopharma Conclave",
        organizers: "Hotel Sahara Star",
        date: "2023",
        location: "Mumbai",
      },
      {
        title: "Vaibhav Vaishwik Bhartiya Vaigyanik Summit",
        event: "Panelist",
        date: "2nd - 31st Oct 2020",
        location: "",
      },
    ],
    icon: Users,
  },
  {
    role: "Speaker",
    items: [
      {
        title: "Developing biopharmaceuticals from lab to manufacturing",
        event: "International Proteomics Conference (APT-2024) Biopharma Track",
        organizers: "Proteomics Lab, IITB Bombay",
        date: "19th Feb, 2024",
        location: "Mumbai",
      },
      {
        title: "Emerging Technologies and Roadmap for Translational Research",
        event: "IITB Biopharma Summit 2023",
        organizers: "IIT Bombay",
        date: "23rd and 24th November, 2023",
        location: "Mumbai",
      },
      {
        title: "Bioprocess development",
        event: "Biopharmaceutical Development and Characterization",
        organizers: "IIT Bombay",
        date: "1st - 4th November, 2023",
        location: "Mumbai",
      },
      {
        title: "Developing additives for biosimilar manufacturing and product development",
        event: "Biopharma Conclave",
        organizers: "CPHI-Informa",
        date: "11th-12th October, 2023",
        location: "Mumbai",
      },
      {
        title: "Oral Protein Delivery and Analytical Characterisation for peptide biosimilar",
        event: "Lectures, Various Events",
        date: "2023",
        location: "",
      },
      {
        title: "Developing Next Generation affordable drugs",
        event: "IIT Gandhinagar",
        date: "12 November",
        location: "",
      },
      {
        title: "Digital Twin: Next Generation Bioreactor Control Technology",
        event: "Virtual - Labs Of The Future",
        date: "8th Aug, 2022",
        location: "",
      },
      {
        title: "Innovative Strategies In Upstream Bioprocessing For mAb Therapeutics",
        event: "Great Indian Biologics Festival, IMPAC Pte Ltd",
        date: "5th May, 2022",
        location: "Pune",
      },
      {
        title: "Upstream Developments in Biosimilars",
        event: "Biopharma conclave",
        date: "21st September, 2021",
        location: "Online",
      },
      {
        title: "Research: Way of Thinking",
        event: "K.R.T. Arts, B.H. Commerce and A.M. Science College, Nashik",
        date: "20th July,2021",
        location: "Online",
      },
      {
        title: "Biosimilars: affordable and accessible Medicine for patients",
        event: "Mithibai College",
        date: "3rd July, 2021",
        location: "Online",
      },
      {
        title: "Nuances on Biopharma Innovation, Manufacturing Strategies & Market Development",
        event: "India Biopharma Leaders Conclave",
        date: "20th May 2021",
        location: "Online, Mumbai",
      },
      {
        title: "Bio-Pharmaceuticals Acceleration Initiatives (Bench to Bed Side) in Indian Ecosystem",
        event: "Bio Pharma World. IE 2021",
        date: "Feb 25th 2021",
        location: "Online",
      },
      {
        title: "Analytical methods for Biopharmaceuticals",
        event: "Ruia College, Mumbai",
        date: "11th Jan,2021",
        location: "Online",
      },
      {
        title: "Characterization of protein aggregation for therapeutic peptides and monoclonal antibodies",
        event: "Venture Centre, Pune",
        date: "21st Nov, 2020",
        location: "Online",
      },
      {
        title: "Decoding protein aggregation for therapeutic peptides and mAbs",
        event: "Biopharma conclave",
        date: "25th Sept,2020",
        location: "Online",
      },
      {
        title: "Short Term Course on ‘Research Methodology’ for Teachers from All Science disciplines",
        event: "R J College of Arts, Science and Commerce, Mumbai",
        organizers: "UGC Human Resource Development Centre, University of Mumbai",
        date: "2015",
        location: "Mumbai",
      },
      {
        title: "DFG Meeting for Lindau Nobel Laureate Meeting participants from India and China",
        event: "DFG Meeting",
        date: "July 7, 2011",
        location: "Bonn, Germany",
      },
      {
        title: "Workshop on Nanotechnology",
        event: "MIT Aurangabad",
        date: "2013",
        location: "",
      },
    ],
    icon: Mic,
  },
  {
    role: "Moderator",
    items: [
      {
        title: 'CXO Panel Discussion: "Making Biotherapeutics a Viable Business"',
        event: "5th Annual Biopharma Conclave",
        organizers: "Hotel Sahara Star",
        date: "2023",
        location: "Mumbai",
      },
    ],
    icon: Presentation,
  },
];

const Speaking = () => {
  useEffect(() => {
    // Add animation to elements when page loads
    const animateItems = () => {
      const items = document.querySelectorAll(".animate-item");
      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add("fade-in");
        }, 100 * index);
      });
    };
    
    animateItems();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-grow bg-gradient-to-br from-white via-blue-50 to-purple-50 py-16 px-4">
        <div className="max-w-5xl mx-auto animate-item">
          <h1 className="section-title text-center mb-10 fade-in">Speaking Engagements</h1>
          <p className="text-lg text-center text-gray-700 mb-12 animate-item">
            Dr. Ratnesh Jain is frequently invited as a <span className="font-medium text-primary">Speaker</span>, <span className="font-medium text-primary">Panelist</span>, and <span className="font-medium text-primary">Moderator</span> at premier national and international forums in biopharma, diagnostics, biosimilars, nanomedicine, innovation, and research. Below are highlights of his engagements and topics delivered.
          </p>
          <div className="space-y-12">
            {speakingData.map(({ role, items, icon: Icon }, idx) => (
              <div key={role} className="animate-item">
                <div className="flex items-center mb-6">
                  <Icon className="w-8 h-8 text-accent mr-3" />
                  <h2 className="text-2xl font-semibold">{role} Roles</h2>
                </div>
                <ul className="pl-2 border-l-4 border-accent/50 space-y-6">
                  {items.map((item, i) => (
                    <li key={i} className="bg-white rounded-lg shadow-md p-5 card-hover transition-all animate-item">
                      <p className="font-semibold mb-1 text-primary">{item.title}</p>
                      {item.event && (
                        <p className="text-gray-700">
                          <span className="font-medium">Event: </span>
                          {item.event}
                        </p>
                      )}
                      {item.organizers && (
                        <p className="text-gray-600">
                          <span className="font-medium">Organizers: </span>
                          {item.organizers}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-6 mt-1">
                        {item.date && (
                          <span className="inline-block text-sm px-2 py-1 bg-accent/10 text-accent rounded mr-2">
                            {item.date}
                          </span>
                        )}
                        {item.location && (
                          <span className="inline-block text-sm px-2 py-1 bg-secondary/20 text-secondary rounded">
                            {item.location}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Speaking;
