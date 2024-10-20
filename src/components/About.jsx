import React from "react";

const About = () => {
  return (
    <div
      id="About"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-56 md:pt-0">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="md:pb-8 pb-5 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="md:text-xl mt-0 md:mt-20 text-sm ">
          I am a dedicated software engineer with a strong foundation in Java,
          React, and modern web services. I specialize in full-stack
          development, using frameworks like Spring Boot and Javalin for
          efficient backends and ReactJS for building responsive frontends. I
          have a proven track record of collaborating with teams to deliver
          high-quality software solutions, working with technologies such as
          Redux Toolkit, Hibernate, PostgreSQL, MySQL, and NATS.io. My
          experience includes developing applications like an Employee
          Management System, Bike Rental System, and Notification System.
          Passionate about problem-solving, I thrive in Agile/Scrum
          environments.
        </p>
        <br />
      </div>
    </div>
  );
};

export default About;
