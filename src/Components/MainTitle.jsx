import React from 'react';

const MainTitle = ({ title, titleDescription }) => (
  <header className="flex align-center main-header">
    <h1 className="title-text-container">
      <span className="main-header-title">{title}</span>
      <span className="main-header-title-description">{titleDescription}</span>
    </h1>
    <i className="gg-list gg-scale" />
  </header>
);

export default MainTitle;
