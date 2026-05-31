import React from 'react';
import Footer from '../components/Footer/Footer';
import Forecast from '../components/Forecast/Forecast';
import Header from '../components/Header/Header';
import Search from '../components/Search/Search';
import Spinner from '../components/ui/Spinner/Spinner';
import CurrentWeather from '../components/CurrentWeather/CurrentWeather';
import { useAppContext } from '../context/AppContext';

const Home = () => {
  const { isLoading } = useAppContext();

  return (
    <>
      {isLoading && <Spinner />}

      <Header />

      <div className="dashboard-layout">

        <div className="left-panel">
          <Search />

<div className="welcome-card">
  <h2>🌤️ Welcome to SkyCast</h2>

  <p>
    Search any city to get real-time weather,
    temperature, humidity, wind speed and
    weekly forecasts.
  </p>

  <div className="welcome-stats">
    <div>
      <h3>☀️</h3>
      <span>Live Weather</span>
    </div>

    <div>
      <h3>🌧️</h3>
      <span>Forecast</span>
    </div>

    <div>
      <h3>💨</h3>
      <span>Wind Info</span>
    </div>
  </div>
</div>

<CurrentWeather />
        </div>

        <div className="right-panel">
          <div className="hero-card">
            <h1>🌤️ SkyCast Pro</h1>

            <p>
              Beautiful weather forecasts,
              real-time updates and
              location insights.
            </p>

            <button className="hero-btn">
              Explore Weather
            </button>
          </div>
        </div>

      </div>

      <Forecast />

      <Footer />
    </>
  );
};

export default Home;