import React from 'react';

const MainTitle = ({ title, titleDescription }) => (
  <header className="flex center wrap main-header">
    <div className="title-text-container">
      <h1 className="main-header-title">{title}</h1>
      <span className="main-header-title-description">{titleDescription}</span>
    </div>
    <i className="gg-list gg-scale" />
  </header>
);

export default MainTitle;
