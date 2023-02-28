import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between container mx-auto">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Home;
