import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const backendurl = import.meta.env.VITE_BACKEND_URL;

function NewReleases() {
  const [titles, setTitles] = useState([]);
  const navigate = useNavigate();
  const gotocard = async (id) => {
    navigate(`/title/${id}`);
  };

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(backendurl + "/titles");
      setTitles(response.data);
    };
    getData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
        New Releases
      </h1>
      <div className="mt-12">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {titles.map((card) => (
            <div
              key={card.id}
              onClick={() => gotocard(card.id)}
              className="group relative bg-white/5 rounded-xl p-6 hover:bg-white/10 
                       transition-all duration-300 ease-in-out cursor-pointer
                       border border-white/10 backdrop-blur-sm"
            >
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-400 transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {card.description}
                </p>
              </div>
              <div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 
                            group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewReleases;
