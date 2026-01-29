"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TopBar from "./TopBar";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <div className="container-fluid fixed-top px-0">
      <TopBar />

      <nav className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5">
        <Link href="/" className="navbar-brand ms-4 ms-lg-0">
          <h1 className="display-5 text-primary m-0">TechGuru Digital</h1>
        </Link>

        <button
          className="navbar-toggler me-4"
          onClick={() => setOpen(!open)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`navbar-collapse ${open ? "d-block" : "d-none"} d-lg-flex`}
        >
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link
              href="/"
              className={`nav-item nav-link ${isActive("/") ? "active text-primary fw-bold" : ""}`}
              onClick={() => setOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`nav-item nav-link ${isActive("/about") ? "active text-primary fw-bold" : ""}`}
              onClick={() => setOpen(false)}
            >
              About
            </Link>

            <Link
              href="/services"
              className={`nav-item nav-link ${isActive("/services") ? "active text-primary fw-bold" : ""}`}
              onClick={() => setOpen(false)}
            >
              Services
            </Link>

            <Link
              href="/contact"
              className={`nav-item nav-link ${isActive("/contact") ? "active text-primary fw-bold" : ""}`}
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Social icons */}
        <div className="d-none d-lg-flex ms-2">
          <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="#">
            <small className="fab fa-facebook-f text-primary"></small>
          </a>
          <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="#">
            <small className="fab fa-twitter text-primary"></small>
          </a>
          <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="#">
            <small className="fab fa-linkedin-in text-primary"></small>
          </a>
        </div>
      </nav>
    </div>
  );
}
