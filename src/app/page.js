"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import GridScan from '../components/GridScan';
import Ribbons from '../components/Ribbons';
import Lightning from '../components/Lightning';

export default function LandingPage() {
  const router = useRouter();
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const targetCount = 2500000;
    const duration = 2000;
    const increment = targetCount / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setUserCount(targetCount);
        clearInterval(timer);
      } else {
        setUserCount(Math.floor(current));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black">
      <main className="h-screen flex items-center justify-center relative">
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
          <GridScan
            sensitivity={0.55}
            lineThickness={1}
            linesColor="#392e4e"
            gridScale={0.1}
            scanColor="#f74ad4"
            scanOpacity={0.4}
            enablePost
            bloomIntensity={0.6}
            chromaticAberration={0.002}
            noiseIntensity={0.01}
          />
        </div>
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 5 }}>
          <Ribbons
            key={Date.now()}
            baseThickness={30}
            colors={['#c084fc']}
            speedMultiplier={0.5}
            maxAge={500}
            enableFade={false}
            enableShaderEffect={true}
          />
        </div>
        <div className="text-center space-y-8 relative z-10">
          <div className="overflow-hidden">
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-2xl font-light tracking-wider text-gray-300 mb-4"
            >
              Welcome to
            </motion.div>
          </div>
          
          <div className="overflow-hidden">
            <motion.h1
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              className="text-6xl font-bold tracking-widest text-white"
            >
              SuryaPrakash's Portfolio
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.p
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
              className="text-lg font-medium tracking-wide text-gray-400 mb-8"
            >
              Professional Developer & Designer
            </motion.p>
          </div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            onClick={() => router.push("/auth")}
            className="px-8 py-3 border border-white text-white uppercase tracking-wider hover:bg-white hover:text-black transition"
          >
            Get Started →
          </motion.button>
        </div>
      </main>
      
      <section className="h-screen relative flex items-center justify-center">
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
          <Lightning
            hue={280}
            xOffset={0}
            speed={1.2}
            intensity={1.5}
            size={0.8}
          />
        </div>
        <div className="text-center space-y-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold text-white mb-4"
          >
            Most Preferred Portfolio Design
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl font-bold text-purple-400 mb-2"
          >
            {userCount.toLocaleString()}+
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Used by Millions of Users - Experience cutting-edge web design with interactive effects
          </motion.p>
        </div>
      </section>
    </div>
  );
}
