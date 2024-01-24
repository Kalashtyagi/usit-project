import { useState } from "react";
import maleDev from "../../../assets/img/male-developer.webp";
import femaleDev from "../../../assets/img/female-developer.webp";

function DeveloperProfile() {
  const data = [
    {
      id: 1,
      name: "Aashish",
      skills: ["Java", "React"],
      experince: "8+ years of Experience",
      Image: maleDev,
    },
    {
      id: 2,
      name: "Damini",
      skills: ["Java", "React", "C#"],
      experince: "8+ years of Experience",
      Image: femaleDev,
    },
    {
      id: 3,
      name: "Aashish",
      skills: ["Laravel", "Python"],
      experince: "8+ years of Experience",
      Image: maleDev,
    },
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          marginTop: "140px",
          marginBottom: "400px",
          justifyContent: "center",
          background: "linear-gradient(to right, #6a85b6, #bac8e0)", // Gradient background
          padding: "20px", // Add some padding for better visual separation
          borderRadius: "10px", // Rounded corners for the container
        }}
      >
        {data &&
          data.map((item) => (
            <div
              key={item.id}
              className="card"
              style={{
                width: "20rem",
                border: "none",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                margin: "30px", // Increased margin for better spacing
                borderRadius: "8px", // Rounded corners for the cards
                overflow: "hidden", // Ensure content stays within rounded corners
                transition: "transform 0.3s", // Smooth transition on hover
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              } // Hover effect - scale up
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <img
                className="card-img-top"
                src={item.Image}
                alt={`${item.name} avatar`}
              />
              <div className="card-body">
                <h5 className="card-title">Name: {item.name}</h5>
                <p className="card-text">Skills: {item.skills.join(", ")}</p>
                <p className="card-text">Experience: {item.experince}</p>
                <a href="#" className="btn btn-primary">
                  Hire
                </a>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default DeveloperProfile;
