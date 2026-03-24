import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';
import PhotoFrame from '../components/PhotoFrame';
import '../styles/Home.css';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <div className="home-header">
        <LanguageSwitcher />
      </div>

      <div className="home-content">
        <h1 className="title">{t('home.title')}</h1>
        <p className="subtitle">{t('home.subtitle')}</p>
        
        <div className="buttons-grid">
          <Link to="/plus" className="nav-button plus-button">
            <span className="button-icon">➕</span>
            <span className="button-text">{t('buttons.addition')}</span>
          </Link>
          
          <Link to="/minus" className="nav-button minus-button">
            <span className="button-icon">➖</span>
            <span className="button-text">{t('buttons.subtraction')}</span>
          </Link>
          
          <Link to="/test" className="nav-button test-button">
            <span className="button-icon">🧪</span>
            <span className="button-text">{t('buttons.test')}</span>
          </Link>
        </div>
      </div>

      <div className="photo-frames-container">
        <PhotoFrame position="left" />
        <PhotoFrame position="right" />
      </div>

      <div className="stars">
        <span>⭐</span>
        <span>⭐</span>
        <span>⭐</span>
      </div>
    </div>
  );
}
