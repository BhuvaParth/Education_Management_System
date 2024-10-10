import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "./AuthProvider ";

export default function Header() {
  const navigate = useNavigate();
  const { isAuthenticated, logout, user } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
    toast.success("Successfully logged out!");
  };

  return (
    <nav className="bg-gray-700	 shadow-md">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center">
            <span className="text-white text-lg font-bold">
              Education Buddy
            </span>
          </div>
          <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-end">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {user && user.role === "admin" && (
                  <>
                    <Link
                      to="/addcourse"
                      className="ml-4 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white"
                    >
                      Add Course
                    </Link>
                    <Link
                      to="/student"
                      className="ml-4 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white"
                    >
                      Students
                    </Link>
                    <Link
                      to="/teacher"
                      className="ml-4 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white"
                    >
                      Teacher
                    </Link>
                  </>
                )}
                {!isAuthenticated ? (
                  <Link
                    to="/login"
                    className="ml-4 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white"
                  >
                    Logout
                  </Link>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="ml-4 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white"
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
