import { useTranslation } from 'react-i18next';
import '../styles/LanguageSwitcher.css';

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const language = e.target.value;
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
  };

  return (
    <div className="language-switcher">
      <label htmlFor="language-select">{t('language')}</label>
      <select
        id="language-select"
        value={i18n.language}
        onChange={handleLanguageChange}
        className="language-select"
      >
        <option value="en">English</option>
        <option value="vi">Tiếng Việt</option>
      </select>
    </div>
  );
}
