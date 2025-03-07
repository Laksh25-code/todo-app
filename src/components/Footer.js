import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3 fixed-bottom">
      <p className="mb-0">© {new Date().getFullYear()} To-Do App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
