import { useState, useEffect } from 'react';
import LandingPage from '@/components/LandingPage';
import LoginPage from '@/components/LoginPage';
import RegisterPage from '@/components/RegisterPage';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('landing');

  // Handle navigation based on hash
  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page;
  };

  // Listen to hash changes for navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash === 'login' || hash === 'register') {
        setCurrentPage(hash);
      } else {
        setCurrentPage('landing');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check initial hash

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Render current page
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage />;
      case 'register':
        return <RegisterPage />;
      default:
        return <LandingPage />;
    }
  };

  return renderCurrentPage();
};

export default Index;
