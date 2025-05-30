import React, { useEffect } from "react";
import Header from "../components/Header";
import NewReleases from "../components/NewReleases";
import { generateToken } from "../firebase.config";

function Home() {
  useEffect(() => {
    const generateTokens = async () => {
      const token = await generateToken();
      localStorage.setItem("token", token);
    };

    generateTokens();
  }, []);

  return (
    <main className="min-h-screen bg-black">
      <div className="relative">
        {/* Content */}
        <div className="relative">
          <Header />
          <NewReleases />
        </div>
      </div>
    </main>
  );
}

export default Home;
