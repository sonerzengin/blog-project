import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FindMe from '../components/FindMe';

const Home = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Home;
