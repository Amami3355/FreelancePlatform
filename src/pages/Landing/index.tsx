import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleAuth = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Navbar onAuth={handleAuth} />
      <Hero onGetStarted={handleAuth} />
      <Features />
      <Pricing onSubscribe={handleAuth} />
      <FAQ />
      <CTA onGetStarted={handleAuth} />
      <Footer />
    </div>
  );
}
