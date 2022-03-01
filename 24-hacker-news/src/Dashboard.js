import React from 'react';
import MainNews from './components/MainNews';
import PopularNews from './components/PopularNews';
import Header from './components/Header';
const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <Header />
        <div className="container">
          <div className="flex-box">
            <div className="mai-news">
              <MainNews />
            </div>
            <div className="popular-news">
              <PopularNews />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
