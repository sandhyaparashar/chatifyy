import React from "react";
import { useState } from 'react';
import { useAuthStore } from "../store/useAuthStore";
import BorderAnimatedContainer from "../components/BorderAnimatedcontainer";
import { MessageCircle, Mail, Loader, Lock } from "lucide-react";
import { Link } from "react-router";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // FIXED: Destructure 'isLoggingIn' to match your store
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="w-full flex items-center justify-center p-4 bg-slate-900">
      <div className="relative w-full max-w-6xl md:h-[800px] h-[650px]">

        <BorderAnimatedContainer>

          <div className="w-full flex flex-col md:flex-row">

            {/* FORM COLUMN - LEFT SIDE */}
            <div className="md:w-1/2 p-8 flex items-center justify-center md:border-r border-slate-600/30">

              <div className="w-full max-w-md">

                <div className="text-center mb-8">
                  <MessageCircle className="w-12 h-12 mx-auto text-slate-400 mb-4" />

                  <h2 className="text-2xl font-bold text-slate-200 mb-2">
                    Welcome Back
                  </h2>

                  <p className="text-slate-400">
                    Login to access your account 
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                      Email
                    </label>

                    <div className="relative">
                      <Mail className="auth-input-icon" />

                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                        className="input"
                        placeholder="sanaya@gmail.com"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-1">
                      Password
                    </label>

                    <div className="relative">
                      <Lock className="auth-input-icon" />

                      <input
                        id="password"
                        type="password"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            password: e.target.value,
                          })
                        }
                        className="input"
                        placeholder="Enter your Password"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    className="auth-btn w-full"
                    type="submit"
                    disabled={isLoggingIn}
                  >
                    {isLoggingIn ? (
                      <Loader className="w-5 h-5 animate-spin mx-auto" />
                    ) : (
                      "Sign In"
                    )}
                  </button>

                </form>

                <div className="mt-6 text-center">
                  <Link to="/signup" className="auth-link">
                    Don't have an account? Sign Up
                  </Link>
                </div>

              </div>
            </div>

            {/* FORM ILLUSTRATION - RIGHT SIDE */}
            <div className="hidden md:w-1/2 md:flex items-center justify-center p-6 bg-gradient-to-bl from-slate-800/20 to-transparent">
              <div>
                <img
                  src="/login.png"
                  alt="People using mobile devices"
                  className="w-full h-auto object-contain"
                />

                <div className="mt-6 text-center">
                  <h3 className="text-xl font-medium text-cyan-400">
                    Anytime, anywhere connection
                  </h3>

                  <div className="mt-4 flex justify-center gap-4">
                    <span className="auth-badge">Free</span>
                    <span className="auth-badge">Easy Setup</span>
                    <span className="auth-badge">Private</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </BorderAnimatedContainer>

      </div>
    </div>
  );
}

export default Login;