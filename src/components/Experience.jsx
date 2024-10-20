import React from "react";
import nchl from "../assets/nchl.png";
import stn from "../assets/stn logo.png";
import f1p from "../assets/f1p.png";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      src: f1p,
      company_name: "Nepal Clearing House Limited (NCHL)",
      duration: "March 2024 - May 2024",
      position: "Full-Stack Developer (Java/React)",
      description: `
        - Developed foundational understanding of Object-Oriented Programming (OOP) principles in Java.
        - Gained practical experience in database management with PostgreSQL.
        - Proficient in using Postman for API development and testing.
        - Designed and implemented applications using Spring Boot framework.
        - Successfully built an Employee Management System to streamline operations.
        - Developed a Bike Rental System to facilitate efficient rental processes and customer management.
      `,
    },
    {
      id: 2,
      src: nchl,
      company_name: "Nepal Clearing House Limited (NCHL)",
      duration: "March 2024 - May 2024",
      position: "Full-Stack Developer (Java/React)",
      description: `
        - Developed foundational understanding of Object-Oriented Programming (OOP) principles in Java.
        - Gained practical experience in database management with PostgreSQL.
        - Proficient in using Postman for API development and testing.
        - Designed and implemented applications using Spring Boot framework.
        - Successfully built an Employee Management System to streamline operations.
        - Developed a Bike Rental System to facilitate efficient rental processes and customer management.
      `,
    },
    {
      id: 3,
      src: stn,
      company_name: "SoAni Tech Nepal (STN)",
      duration: "March 2024 - May 2024",
      position: "Full-Stack Developer (Java/React)",
      description: `
        - Developed foundational understanding of Object-Oriented Programming (OOP) principles in Java.
        - Gained practical experience in database management with PostgreSQL.
        - Proficient in using Postman for API development and testing.
        - Designed and implemented applications using Spring Boot framework.
        - Successfully built an Employee Management System to streamline operations.
        - Developed a Bike Rental System to facilitate efficient rental processes and customer management.
      `,
    },
    {
      id: 4,
      src: stn,
      company_name: "SoAni Tech Nepal (STN)",
      duration: "March 2024 - May 2024",
      position: "Full-Stack Developer (Java/React)",
      description: `
        - Developed foundational understanding of Object-Oriented Programming (OOP) principles in Java.
        - Gained practical experience in database management with PostgreSQL.
        - Proficient in using Postman for API development and testing.
        - Designed and implemented applications using Spring Boot framework.
        - Successfully built an Employee Management System to streamline operations.
        - Developed a Bike Rental System to facilitate efficient rental processes and customer management.
      `,
    },
  ];

  return (
    <div
      id="Experience"
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full min-h-screen text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are my experiences</p>
        </div>
        <div className="w-full ">
          {experiences.map(
            ({ id, src, position, company_name, duration, description }) => (
              <div key={id} className="pb-10">
                <div className="flex justify-between text-xl  ">
                  <div className="flex h-14 space-x-3 justify-center">
                    <img
                      src={src}
                      alt={company_name}
                      className="h-14 w-14 object-contain"
                    />
                    <div className="flex flex-col md:text-xl text-sm  ">
                      <p>{company_name}</p>
                      <p className="md:text-sm">{position}</p>
                    </div>
                  </div>
                  <div className=" md:text-xl text-sm ">
                    <p>{duration}</p>
                  </div>
                </div>
                <div className="md:text-xl text-sm pt-12 md:pt-0">
                  <p className="py-3 whitespace-pre-line">{description}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
