import React from "react";
import { useParams } from "react-router-dom";
import { vanData } from "../../components/data";

const VanDetail = () => {
  const params = useParams();
  const details = vanData.map((van) => {
    if (van.id === params.id) {
      return (
        <div className="w-full " key={van.id}>
          <div className="w-[75%] mx-auto mt-2">
            <img src={van.imageUrl} alt="van" />
            <div>
              <div>
                <div className="p-2 bg-[#E17654] w-[25%] text-center rounded text-white mt-2">
                  {van.type}
                </div>

                <h1 className="text-[30px] font-bold">{van.name}</h1>
                <p className="text-[25px] font-bold"> ${van.price}/day</p>
              </div>

              <p className="mb-4 mt-4">{van.description}</p>
            </div>
            <button className="p-2 bg-[#E17654] w-full text-white mb-3">
              Rent this van
            </button>
          </div>
        </div>
      );
    }
    return null;
  });
  return <div>{details}</div>;
};

export default VanDetail;
