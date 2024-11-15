import React from "react";

const Navbar = () => {
    const navLinks = [
        { id: 1, name: "Login", href: "#" },
        { id: 2, name: "Sign Up", href: "#" },
        { id: 3, name: "About", href: "#" },
      ];
    
      const renderNavLinks = () => {
    
       const listItems = navLinks.map( (link)=> {
        const liElement = <li className="nav-item" >
            <a className="nav-link" href={link.href}>
            {link.name}
            </a>
        </li>;
        return liElement;
       });
        return listItems;
      };
    
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <span style={{ color: "white", fontWeight: "bold", background: "red" }}>Lexicon</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
              {
                renderNavLinks()
              }           
              </ul>
            </div>
          </div>
        </nav>
      );
};
    
    export default Navbar;
