"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import AboutSection from "../../components/sections/AboutSection";

export default function PublicPortfolio() {
  const params = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const username = params.username;
    const about = JSON.parse(localStorage.getItem("about") || '{}');
    const mockData = {
      name: about.name || username,
      about: about,
      academics: [],
      skills: [],
      projects: [],
      experience: [],
      vision: "",
      blog: [],
      contact: {}
    };
    setUserData(mockData);
  }, [params]);

  if (!userData) return <div className="min-h-screen bg-black flex items-center justify-center text-white">Loading...</div>;

  return (
    <div className="bg-black text-white">
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-lg border-b border-purple-500/30 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">{userData.name}</h1>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-purple-400 transition">About</a>
            <a href="#academics" className="hover:text-purple-400 transition">Academics</a>
            <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
            <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
            <a href="#experience" className="hover:text-purple-400 transition">Experience</a>
            <a href="#vision" className="hover:text-purple-400 transition">Vision</a>
            <a href="#blog" className="hover:text-purple-400 transition">Blog</a>
            <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        <section id="about">
          <AboutSection
            name={userData.about.name}
            tagline={userData.about.tagline}
            bio={userData.about.bio}
          />
        </section>

        <section id="academics" className="min-h-screen flex items-center justify-center p-8">
          <h2 className="text-5xl font-bold">Academics Section</h2>
        </section>

        <section id="skills" className="min-h-screen flex items-center justify-center p-8">
          <h2 className="text-5xl font-bold">Skills Section</h2>
        </section>

        <section id="projects" className="min-h-screen flex items-center justify-center p-8">
          <h2 className="text-5xl font-bold">Projects Section</h2>
        </section>

        <section id="experience" className="min-h-screen flex items-center justify-center p-8">
          <h2 className="text-5xl font-bold">Experience Section</h2>
        </section>

        <section id="vision" className="min-h-screen flex items-center justify-center p-8">
          <h2 className="text-5xl font-bold">Vision Section</h2>
        </section>

        <section id="blog" className="min-h-screen flex items-center justify-center p-8">
          <h2 className="text-5xl font-bold">Blog Section</h2>
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center p-8">
          <h2 className="text-5xl font-bold">Contact Section</h2>
        </section>
      </div>
    </div>
  );
}
