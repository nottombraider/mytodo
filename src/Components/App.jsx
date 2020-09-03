import React from 'react';
import MainTitle from './MainTitle';
import MainLayout from './MainLayout';
import MainFooter from './MainFooter';

const App = () => (
  <>
    <MainTitle title="DoDo" titleDescription="Do Things Done" />
    <MainLayout />
    <MainFooter rights="@nottombraider" />
  </>
);


export default App;
