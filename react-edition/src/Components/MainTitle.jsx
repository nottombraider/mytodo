import React from 'react';

const MainTitle = ({ title }) => (
  <header className="flex justify-center main-header">
    <h1 className="main-header-title">{title}</h1>
    <i className="gg-list gg-list-scale" />
  </header>
);

export default MainTitle;
