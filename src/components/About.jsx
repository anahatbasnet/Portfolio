import React from "react";

const About = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full" >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
          </div>
         
          <p className="text-xl mt-20 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            enim aut voluptate provident illum, nisi vitae, sunt rem sint
            voluptatum soluta tempore temporibus quia ipsa praesentium excepturi
            placeat saepe architecto eligendi illo! Voluptas libero vel nostrum
            omnis similique aspernatur officia.
          </p>
          <br />
        
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus,
          eligendi sint debitis cum illum beatae magnam vitae vero odit animi a
          magni doloremque voluptatum fugit error dolorem. Facilis repudiandae
          illum eius quidem ab corrupti, aperiam expedita, excepturi voluptas
          sunt debitis.
        </p>
      </div>
    </div>
  );
};

export default About;
