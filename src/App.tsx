import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { QuoteModal } from './components/common/QuoteModal';
import { ClaimModal } from './components/common/ClaimModal';
import { VideoModal } from './components/common/VideoModal';
import { Home } from './pages/Home';
import { HealthInsurance } from './pages/HealthInsurance';
import { AboutUs } from './pages/AboutUs';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [claimModalOpen, setClaimModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [quoteData, setQuoteData] = useState<{
    category?: string;
    name?: string;
    mobile?: string;
    recipientType?: string;
    age?: string;
    coverageAmount?: string;
  }>({});

  const handleOpenQuoteModal = (data?: any) => {
    if (data) {
      setQuoteData(data);
    } else {
      setQuoteData({ category: 'Health Insurance' });
    }
    setQuoteModalOpen(true);
  };

  const handleOpenClaimModal = () => {
    setClaimModalOpen(true);
  };

  const handleOpenVideoModal = () => {
    setVideoModalOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-[#1E2329] selection:bg-[#B6422A] selection:text-white">
        {/* Global Header */}
        <Header
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onOpenClaimModal={handleOpenClaimModal}
        />

        {/* Main Routes */}
        <main className="grow">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  onOpenQuoteModal={handleOpenQuoteModal}
                  onOpenClaimModal={handleOpenClaimModal}
                  onOpenVideoModal={handleOpenVideoModal}
                />
              }
            />
            <Route
              path="/health-insurance"
              element={
                <HealthInsurance
                  onOpenQuoteModal={handleOpenQuoteModal}
                />
              }
            />
            <Route
              path="/about-us"
              element={
                <AboutUs
                  onOpenClaimModal={handleOpenClaimModal}
                  onOpenVideoModal={handleOpenVideoModal}
                />
              }
            />
            {/* Fallback route */}
            <Route
              path="*"
              element={
                <Home
                  onOpenQuoteModal={handleOpenQuoteModal}
                  onOpenClaimModal={handleOpenClaimModal}
                  onOpenVideoModal={handleOpenVideoModal}
                />
              }
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onOpenClaimModal={handleOpenClaimModal}
        />

        {/* Global Interactive Modals */}
        <QuoteModal
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
          data={quoteData}
        />

        <ClaimModal
          isOpen={claimModalOpen}
          onClose={() => setClaimModalOpen(false)}
        />

        <VideoModal
          isOpen={videoModalOpen}
          onClose={() => setVideoModalOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}
