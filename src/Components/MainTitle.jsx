import React from 'react';

const MainTitle = ({ title }) => (
  <header className="flex center wrap main-header">
    <h1 className="main-header-title">{title}</h1>
    <i className="gg-list gg-scale" />
  </header>
);

export default MainTitle;
