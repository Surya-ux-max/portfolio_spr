"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Lightning from "../../components/Lightning";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin && name) {
      sessionStorage.setItem("userName", name);
    }
    sessionStorage.setItem("isLoggedIn", "true");
    const username = name || sessionStorage.getItem("userName") || "guest";
    router.push(`/${username.toLowerCase()}`);
  };

  return (
    <div className="min-h-screen bg-black relative flex items-center justify-end pr-16">
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
        <Lightning hue={280} xOffset={0} speed={1.2} intensity={1.5} size={0.8} />
      </div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-black/50 backdrop-blur-lg border border-purple-500/30 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {!isLogin && (
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 bg-black/50 border border-purple-500/30 rounded text-white focus:outline-none focus:border-purple-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-black/50 border border-purple-500/30 rounded text-white focus:outline-none focus:border-purple-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 bg-black/50 border border-purple-500/30 rounded text-white focus:outline-none focus:border-purple-500"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded transition"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-purple-400 hover:text-purple-300 transition"
            >
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
