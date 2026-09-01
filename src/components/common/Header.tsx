import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  MapPin,
  Mail,
  Phone,
  ChevronDown,
  ArrowUpRight,
  Menu,
  X,
  Shield,
  Heart,
  Car,
  Plane,
  Ship,
  HardHat,
  FileText,
  Search,
  CheckCircle2,
  PhoneCall,
  User,
  ShieldCheck
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO } from '../../data/mockData';

interface HeaderProps {
  onOpenQuoteModal?: () => void;
  onOpenClaimModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal, onOpenClaimModal }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [claimsDropdownOpen, setClaimsDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileClaimsOpen, setMobileClaimsOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const claimsRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setClaimsDropdownOpen(false);
  }, [location.pathname]);

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
      if (claimsRef.current && !claimsRef.current.contains(event.target as Node)) {
        setClaimsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const servicesList = [
    { name: 'Health Insurance', href: '/health-insurance', icon: Heart, description: 'Medical, hospital & surgery cover' },
    { name: 'Car Insurance', href: '/#categories', icon: Car, description: 'Comprehensive motor & accidental cover' },
    { name: 'Travel Insurance', href: '/#categories', icon: Plane, description: 'International travel & medical care' },
    { name: 'Life Insurance', href: '/#categories', icon: Shield, description: 'Secure future for your loved ones' },
    { name: 'Marine Insurance', href: '/#categories', icon: Ship, description: 'Cargo, transit & export safety' },
    { name: 'Engineering Insurance', href: '/#categories', icon: HardHat, description: 'Plant, machinery & project cover' },
    { name: 'Other Insurance', href: '/#categories', icon: ShieldCheck, description: 'Specialized corporate policies' },
  ];

  const claimsList = [
    { name: 'Track Claim', action: onOpenClaimModal, href: '#track', icon: Search, description: 'Real-time 24/7 status tracking' },
    { name: 'Claim Process', href: '/#process', icon: FileText, description: 'Step-by-step settlement guideline' },
    { name: 'Submit Claim', action: onOpenClaimModal, href: '#submit', icon: CheckCircle2, description: 'Instant digital claim registration' },
  ];

  return (
    <header className="w-full sticky top-0 z-40 bg-white shadow-xs font-['Poppins',sans-serif]">
      {/* -----------------------------
          TOP INFORMATION BAR
          ----------------------------- */}
      <div className="bg-[#B6422A] text-white text-[12px] py-1.5 px-4 sm:px-6 lg:px-8 border-b border-[#a43822]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-1.5 md:gap-4">
          {/* Left Side Information */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-5 gap-y-1 text-white/95">
            <div className="flex items-center gap-1.5 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-white/80 shrink-0" />
              <span className="truncate max-w-[280px] sm:max-w-none">{COMPANY_INFO.address}</span>
            </div>

            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-white/80 shrink-0" />
              <span>{COMPANY_INFO.email}</span>
            </a>

            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-white/80 shrink-0" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>

          {/* Right Side: Portals & Social Icons */}
          <div className="flex items-center gap-4 text-[11px] font-medium tracking-wide">
            <div className="flex items-center gap-3 border-r border-white/25 pr-3">
              <button
                onClick={onOpenQuoteModal}
                className="hover:underline hover:text-white uppercase tracking-wider text-[11px] transition-colors cursor-pointer"
              >
                CLIENT PORTAL
              </button>
              <span className="text-white/40">|</span>
              <button
                onClick={onOpenQuoteModal}
                className="hover:underline hover:text-white uppercase tracking-wider text-[11px] transition-colors cursor-pointer"
              >
                AGENT PORTAL
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 text-white/90">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-5 h-5 rounded-full bg-white/10 hover:bg-white hover:text-[#B6422A] flex items-center justify-center transition-colors"
                title="Facebook"
                aria-label="Facebook"
              >
                <span className="text-[10px] font-bold">f</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-5 h-5 rounded-full bg-white/10 hover:bg-white hover:text-[#B6422A] flex items-center justify-center transition-colors"
                title="Twitter / X"
                aria-label="Twitter / X"
              >
                <span className="text-[10px] font-bold">𝕏</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-5 h-5 rounded-full bg-white/10 hover:bg-white hover:text-[#B6422A] flex items-center justify-center transition-colors"
                title="YouTube"
                aria-label="YouTube"
              >
                <span className="text-[9px] font-bold">▶</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-5 h-5 rounded-full bg-white/10 hover:bg-white hover:text-[#B6422A] flex items-center justify-center transition-colors"
                title="Instagram"
                aria-label="Instagram"
              >
                <span className="text-[9px] font-bold">📷</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-5 h-5 rounded-full bg-white/10 hover:bg-white hover:text-[#B6422A] flex items-center justify-center transition-colors"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <span className="text-[10px] font-bold">in</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* -----------------------------
          MAIN NAVIGATION BAR
          ----------------------------- */}
      <div className="bg-white border-b border-gray-100 px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <BrandLogo />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* Home */}
            <Link
              to="/"
              className={`px-3.5 py-2 text-sm font-medium transition-all relative ${
                location.pathname === '/'
                  ? 'text-[#B6422A] font-semibold'
                  : 'text-[#1E2329] hover:text-[#B6422A]'
              }`}
            >
              Home
              {location.pathname === '/' && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#B6422A] rounded-full" />
              )}
            </Link>

            {/* About Us */}
            <Link
              to="/about-us"
              className={`px-3.5 py-2 text-sm font-medium transition-all relative ${
                location.pathname === '/about-us'
                  ? 'text-[#B6422A] font-semibold'
                  : 'text-[#1E2329] hover:text-[#B6422A]'
              }`}
            >
              About Us
              {location.pathname === '/about-us' && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#B6422A] rounded-full" />
              )}
            </Link>

            {/* Services Dropdown */}
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium transition-all relative cursor-pointer ${
                  location.pathname === '/health-insurance' || servicesDropdownOpen
                    ? 'text-[#B6422A] font-semibold'
                    : 'text-[#1E2329] hover:text-[#B6422A]'
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                {location.pathname === '/health-insurance' && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#B6422A] rounded-full" />
                )}
              </button>

              {/* Services Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 pb-2 mb-1 border-b border-gray-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Our Insurance Policies</span>
                  </div>
                  {servicesList.map((item) => {
                    const Icon = item.icon;
                    const isHealth = item.href === '/health-insurance';
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setServicesDropdownOpen(false)}
                        className={`flex items-start gap-3 px-3.5 py-2.5 hover:bg-[#FDF7F5] transition-colors group ${
                          location.pathname === item.href ? 'bg-[#FDF7F5] text-[#B6422A]' : 'text-gray-700'
                        }`}
                      >
                        <div className={`p-1.5 rounded-lg shrink-0 mt-0.5 ${isHealth ? 'bg-[#B6422A] text-white' : 'bg-gray-100 text-[#B6422A] group-hover:bg-[#B6422A] group-hover:text-white transition-colors'}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-[#1E2329] group-hover:text-[#B6422A] flex items-center gap-1.5">
                            <span>{item.name}</span>
                            {isHealth && <span className="text-[9px] bg-[#B6422A]/15 text-[#B6422A] px-1.5 py-0.2 rounded font-bold">Featured</span>}
                          </div>
                          <p className="text-[11px] text-gray-500 line-clamp-1">{item.description}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Claims Dropdown */}
            <div
              ref={claimsRef}
              className="relative"
              onMouseEnter={() => setClaimsDropdownOpen(true)}
              onMouseLeave={() => setClaimsDropdownOpen(false)}
            >
              <button
                onClick={() => setClaimsDropdownOpen(!claimsDropdownOpen)}
                className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium transition-all relative cursor-pointer ${
                  claimsDropdownOpen
                    ? 'text-[#B6422A] font-semibold'
                    : 'text-[#1E2329] hover:text-[#B6422A]'
                }`}
                aria-expanded={claimsDropdownOpen}
              >
                <span>Claims</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${claimsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Claims Dropdown Menu */}
              {claimsDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 pb-2 mb-1 border-b border-gray-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Claims Department</span>
                  </div>
                  {claimsList.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.name}
                        onClick={() => {
                          setClaimsDropdownOpen(false);
                          if (item.action) {
                            item.action();
                          } else if (item.href) {
                            window.location.href = item.href;
                          }
                        }}
                        className="w-full text-left flex items-start gap-3 px-3.5 py-2.5 hover:bg-[#FDF7F5] transition-colors group cursor-pointer"
                      >
                        <div className="p-1.5 rounded-lg bg-gray-100 text-[#B6422A] group-hover:bg-[#B6422A] group-hover:text-white transition-colors shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-[#1E2329] group-hover:text-[#B6422A]">
                            {item.name}
                          </div>
                          <p className="text-[11px] text-gray-500 line-clamp-1">{item.description}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Blogs */}
            <Link
              to="/#news"
              className="px-3.5 py-2 text-sm font-medium text-[#1E2329] hover:text-[#B6422A] transition-colors"
            >
              Blogs
            </Link>

            {/* Contact Us */}
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="px-3.5 py-2 text-sm font-medium text-[#1E2329] hover:text-[#B6422A] transition-colors"
            >
              Contact Us
            </a>
          </nav>

          {/* Right Action: Get A Quote Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="px-5 py-2.5 rounded-full bg-[#B6422A] hover:bg-[#9E3520] text-white font-medium text-sm flex items-center gap-1.5 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer group"
            >
              <span>Get A Quote</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-[#B6422A] hover:bg-gray-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* -----------------------------
          MOBILE NAVIGATION DRAWER
          ----------------------------- */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 shadow-xl px-4 py-4 space-y-3 animate-in slide-in-from-top duration-200 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col space-y-1">
            <Link
              to="/"
              className={`px-3 py-2 rounded-lg text-sm font-medium ${
                location.pathname === '/' ? 'bg-[#FDF7F5] text-[#B6422A] font-semibold' : 'text-gray-800'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about-us"
              className={`px-3 py-2 rounded-lg text-sm font-medium ${
                location.pathname === '/about-us' ? 'bg-[#FDF7F5] text-[#B6422A] font-semibold' : 'text-gray-800'
              }`}
            >
              About Us
            </Link>

            {/* Mobile Services Accordion */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-50"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 pr-2 py-1 space-y-1 bg-gray-50 rounded-lg mt-1">
                  {servicesList.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block px-3 py-2 text-xs font-medium rounded ${
                        location.pathname === item.href ? 'text-[#B6422A] font-bold' : 'text-gray-600 hover:text-[#B6422A]'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Claims Accordion */}
            <div>
              <button
                onClick={() => setMobileClaimsOpen(!mobileClaimsOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-50"
              >
                <span>Claims</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileClaimsOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileClaimsOpen && (
                <div className="pl-4 pr-2 py-1 space-y-1 bg-gray-50 rounded-lg mt-1">
                  {claimsList.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        if (item.action) item.action();
                      }}
                      className="w-full text-left px-3 py-2 text-xs font-medium text-gray-600 hover:text-[#B6422A]"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/#news"
              className="px-3 py-2 rounded-lg text-sm font-medium text-gray-800"
            >
              Blogs
            </Link>

            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="px-3 py-2 rounded-lg text-sm font-medium text-gray-800"
            >
              Contact Us
            </a>
          </div>

          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenQuoteModal) onOpenQuoteModal();
              }}
              className="w-full py-3 rounded-xl bg-[#B6422A] text-white font-medium text-sm flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>Get A Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
