import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkStyle = (id) => ({
    borderRadius: '25px',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    background: activeSection === id ? 'rgba(255,255,255,0.2)' : 'transparent',
    backdropFilter: activeSection === id ? 'blur(10px)' : 'none',
    border: activeSection === id ? '1px solid rgba(255,255,255,0.3)' : '1px solid transparent'
  });

  const shineEffect = {
    position: 'absolute',
    top: '0',
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
    transition: 'left 0.5s ease',
    pointerEvents: 'none'
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top transition-all duration-300 ${
        isScrolled ? 'bg-primary shadow-lg py-2' : 'bg-gradient-to-r from-blue-600 to-purple-700 py-3'
      }`}
      style={{
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        background: isScrolled
          ? 'rgba(13, 110, 253, 0.95)'
          : 'linear-gradient(135deg, #1e40af 0%, #7c3aed 100%)'
      }}
    >
      <div className="container-fluid px-4">
        {/* Logo */}
        <Link
          className="navbar-brand fw-bold d-flex align-items-center"
          to ="/login"
          style={{
            direction: 'rtl',
            fontSize: '1.8rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.textShadow = '3px 3px 6px rgba(0,0,0,0.5)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.textShadow = '2px 2px 4px rgba(0,0,0,0.3)';
          }}
        >
          <span className="me-2">🎓</span>
        أسامة طيب
        </Link>

        {/* Burger button */}
        <button
          className="navbar-toggler border-0 p-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '8px',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.background = 'rgba(255,255,255,0.2)';
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'rgba(255,255,255,0.1)';
            e.target.style.transform = 'scale(1)';
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto" style={{ direction: 'rtl' }}>
            {/* الرئيسية */}
            <li className="nav-item mx-1">
              <Link
                className={`nav-link fw-semibold d-flex align-items-center px-3 py-2 ${activeSection === 'home' ? 'active' : ''}`}
                to="/"
                onClick={() => setActiveSection('home')}
                style={linkStyle('home')}
                onMouseOver={(e) => {
                  if (activeSection !== 'home') {
                    e.target.style.background = 'rgba(255,255,255,0.1)';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                  }
                }}
                onMouseOut={(e) => {
                  if (activeSection !== 'home') {
                    e.target.style.background = 'transparent';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }
                }}
              >
                <span className="me-2">🏠</span>الرئيسية
                <div className="shine-effect" style={shineEffect} />
              </Link>
            </li>

            {/* من نحن */}
            <li className="nav-item mx-1">
              <Link
                className={`nav-link fw-semibold d-flex align-items-center px-3 py-2 ${activeSection === 'about' ? 'active' : ''}`}
                to="/About"
                onClick={() => setActiveSection('about')}
                style={linkStyle('about')}
                onMouseOver={(e) => {
                  if (activeSection !== 'about') {
                    e.target.style.background = 'rgba(255,255,255,0.1)';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                  }
                }}
                onMouseOut={(e) => {
                  if (activeSection !== 'about') {
                    e.target.style.background = 'transparent';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }
                }}
              >
                <span className="me-2">👥</span>من نحن
                <div className="shine-effect" style={shineEffect} />
              </Link>
            </li>

            {/* اتصل بنا */}
            <li className="nav-item mx-1">
              <Link
                className={`nav-link fw-semibold d-flex align-items-center px-3 py-2 ${activeSection === 'contact' ? 'active' : ''}`}
                to="/Contact"
                onClick={() => setActiveSection('contact')}
                style={linkStyle('contact')}
                onMouseOver={(e) => {
                  if (activeSection !== 'contact') {
                    e.target.style.background = 'rgba(255,255,255,0.1)';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                  }
                }}
                onMouseOut={(e) => {
                  if (activeSection !== 'contact') {
                    e.target.style.background = 'transparent';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }
                }}
              >
                <span className="me-2">📞</span>اتصل بنا
                <div className="shine-effect" style={shineEffect} />
              </Link>
            </li>

            {/* الدروس */}
<li className="nav-item dropdown mx-1">
    <Link
      className={`nav-link dropdown-toggle fw-semibold d-flex align-items-center px-3 py-2 ${
        ['history', 'geography'].includes(activeSection) ? 'active' : ''
      }`}
      to="#courses"
      id="coursesDropdown"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      style={{
        borderRadius: '25px',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
        background: ['history', 'geography'].includes(activeSection)
          ? 'rgba(255,255,255,0.2)'
          : 'transparent',
        backdropFilter: ['history', 'geography'].includes(activeSection)
          ? 'blur(10px)'
          : 'none',
        border: ['history', 'geography'].includes(activeSection)
          ? '1px solid rgba(255,255,255,0.3)'
          : '1px solid transparent'
      }}
      onMouseOver={(e) => {
        if (!['history', 'geography'].includes(activeSection)) {
          e.target.style.background = 'rgba(255,255,255,0.1)';
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
        }
      }}
      onMouseOut={(e) => {
        if (!['history', 'geography'].includes(activeSection)) {
          e.target.style.background = 'transparent';
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = 'none';
        }
      }}
    >
      <span className="me-2">📚</span>
      الدروس
      <div className="shine-effect" />
    </Link>
    <ul className="dropdown-menu text-end" aria-labelledby="coursesDropdown">
      <li>
        <Link
          className="dropdown-item"
          to="/courses"
          onClick={() => setActiveSection('history')}
        >
          التاريخ
        </Link>
      </li>
      <li>
        <Link
          className="dropdown-item"
          to="/geographique"
          onClick={() => setActiveSection('geography')}
        >
          الجغرافيا
        </Link>
      </li>
    </ul>
  </li>



            {/* الامتحانات */}
            <li className="nav-item mx-1">
              <Link
                className={`nav-link fw-semibold d-flex align-items-center px-3 py-2 ${activeSection === 'exams' ? 'active' : ''}`}
                to="/examens"
                onClick={() => setActiveSection('exams')}
                style={linkStyle('exams')}
                onMouseOver={(e) => {
                  if (activeSection !== 'exams') {
                    e.target.style.background = 'rgba(255,255,255,0.1)';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                  }
                }}
                onMouseOut={(e) => {
                  if (activeSection !== 'exams') {
                    e.target.style.background = 'transparent';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }
                }}
              >
                <span className="me-2">📝</span>الامتحانات
                <div className="shine-effect" style={shineEffect} />
              </Link>
            </li>

            {/* التمارين */}
            <li className="nav-item mx-1">
              <Link
                className={`nav-link fw-semibold d-flex align-items-center px-3 py-2 ${activeSection === 'exercises' ? 'active' : ''}`}
                to="/exercices"
                onClick={() => setActiveSection('exercises')}
                style={linkStyle('exercises')}
                onMouseOver={(e) => {
                  if (activeSection !== 'exercises') {
                    e.target.style.background = 'rgba(255,255,255,0.1)';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                  }
                }}
                onMouseOut={(e) => {
                  if (activeSection !== 'exercises') {
                    e.target.style.background = 'transparent';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }
                }}
              >
                <span className="me-2">🧩</span>التمارين
                <div className="shine-effect" style={shineEffect} />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Ligne animée en bas */}
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          width: '100%',
          height: '3px',
          background: 'linear-gradient(90deg, #ffd700, #ff6b6b, #4ecdc4, #45b7d1)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 8s ease infinite'
        }}
      />

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .nav-link:hover .shine-effect {
          left: 100% !important;
        }

        .navbar-brand:hover {
          animation: bounce 0.6s ease;
        }

        @keyframes bounce {
          0%, 20%, 60%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          80% { transform: translateY(-5px); }
        }

        .transition-all {
          transition: all 0.3s ease;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
