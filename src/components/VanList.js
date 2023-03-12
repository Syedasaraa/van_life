import React from "react";

const VanList = ({ content }) => {
  const colors = {
    simple: "#E17654",
    rugged: "#115E59",
    luxury: "#161616",
  };
  const vanElements = content.map((van) => {
    return (
        <div return key={van.id} className="lg:w-[60%] w-[90%] mx-auto mt-4">
          <img src={van.imageUrl} />
          <div className="font-bold lg:text-[20px] md:text-[15px] flex justify-between whitespace-nowrap">
            <p>{van.name}</p>
            <p> ${van.price}</p>{" "}
          </div>
          <div className="text-end">/day</div>
          <div
            className={`bg-[${
              colors[van.type]
            }] p-2 text-center lg:w-[30%] w-[60%] rounded text-white`}
          >
            <p>{van.type}</p>
          </div>
        </div>
    );
  });
  return <div className="grid grid-cols-2">{vanElements}</div>;
};

export default VanList;
