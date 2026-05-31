import React from 'react';
import GithubIcon from '../../assets/github.svg?react';
import { useAppContext } from '../../context/AppContext';

const Header: React.FC = () => {
  const { darkMode: isDarkMode, toggleDarkMode } = useAppContext();

  return (
    <header className="rw-header">
      <h1 className="rw-title">🌦️ SkyCast Weather</h1>

      <div className="rw-header-icons">
        <button
          className="rw-dark-mode-button"
          type="button"
          aria-label="Toggle dark mode"
          aria-pressed={isDarkMode}
          onClick={toggleDarkMode}
        >
          <span className="rw-dark-mode-thumb" />
        </button>

        <a
          className="rw-github-link"
          href="https://github.com/amritaaax"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon />
        </a>
      </div>
    </header>
  );
};

export default Header;