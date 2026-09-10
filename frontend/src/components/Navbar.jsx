import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

export default function Navbar() {
    const { i18n, t } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        localStorage.setItem('language', language);
    };

    return (
        <nav className="navbar-container">

            <div className="nav-logo">
                <Link to="/">
                    Port<span>folio.</span>
                </Link>
            </div>

            <div className="nav-links">
                <Link to="/">{t('navbar.home')}</Link>
                <Link to="/tools">{t('navbar.tools')}</Link>
                <Link to="/projects">{t('navbar.projects')}</Link>
               
            </div>

            <div className="language-switch">
                <button
                    className={i18n.language === 'th' ? 'active' : ''}
                    onClick={() => changeLanguage('th')}
                >
                    TH
                </button>

                <span>/</span>

                <button
                    className={i18n.language === 'en' ? 'active' : ''}
                    onClick={() => changeLanguage('en')}
                >
                    ENG
                </button>
            </div>

        </nav>
    );
}