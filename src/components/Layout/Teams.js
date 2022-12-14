import React from "react";
import Cards from "../Cards";

const Teams = () => {
  return (
    <>
      <div className="w-full mt-16">
        <h2 className="text-xl tracking-widest text-center font-bold text-gray-400">
          Multimedia Laboratory
        </h2>
        <h1 className="text-black font-bold text-center tracking-wide text-3xl">
          Team
        </h1>
        <div className="flex justify-center mt-10 items-center gap-10">
          <img src="/IMG/buYasni.png" alt="buyasni" />
          <div>
            <h1 className="text-black font-bold text-center tracking-wide text-3xl">
              Yasni Djamain, M.Kom
            </h1>
            <h2 className="text-xl text-center  text-gray-400">
              HEAD OF MULTIMEDIA LABORATORY
            </h2>
          </div>
        </div>
        <div>
          <Cards />
        </div>
      </div>
    </>
  );
};

export default Teams;
