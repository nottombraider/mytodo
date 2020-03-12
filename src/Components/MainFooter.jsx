import React from 'react';

const MainFooter = ({ rights }) => (
  <footer className="footer-text">
    <a href="https://github.com/nottombraider" className="rights-link">
      {rights}
    </a>
  </footer>
);

export default MainFooter;
