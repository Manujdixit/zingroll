import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

const backendurl = import.meta.env.VITE_BACKEND_URL;

function Title() {
  const { id } = useParams();

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .post(backendurl + "/clicked", { id, token })
      .then((res) => {
        console.log("Posted successfully:", res.data);
      })
      .catch((err) => {
        console.error("Error posting data:", err);
      });
  }, [id]);

  return (
    <div className="bg-black min-h-screen">
      <Header />
      <div className="flex items-center justify-center text-white h-screen w-screen">
        Content not available
      </div>
    </div>
  );
}

export default Title;
