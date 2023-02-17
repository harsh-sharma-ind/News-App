import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar bg-light">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">
        <Link to={"/"} className="Link">
              TODAY'S NEWS
            </Link>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
