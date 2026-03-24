import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/PhotoFrame.css';

interface PhotoFrameProps {
  position?: 'left' | 'right';
}

export default function PhotoFrame({ position = 'left' }: PhotoFrameProps) {
  const { t } = useTranslation();
  const [photos, setPhotos] = useState<string[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load photos from public/photos directory
    const loadPhotos = () => {
      // Known photo files in the public/photos directory
      const knownPhotos = [
        'HAI_6345.jpg',
        'IMG_20240616_125336.jpg',
        'IMG_20250921_200939.jpg'
      ];

      setPhotos(knownPhotos);
      if (knownPhotos.length > 0) {
        // Randomly select a photo
        const randomIndex = Math.floor(Math.random() * knownPhotos.length);
        setSelectedPhoto(knownPhotos[randomIndex]);
      }
      setLoading(false);
    };

    loadPhotos();
  }, []);

  const handleRandomPhoto = () => {
    if (photos.length > 0) {
      const randomIndex = Math.floor(Math.random() * photos.length);
      setSelectedPhoto(photos[randomIndex]);
    }
  };

  return (
    <div className={`photo-frame photo-frame-${position}`}>
      <div className="photo-frame-header">
        <h3>{t('photoFrame.title')}</h3>
      </div>
      
      {loading ? (
        <div className="photo-frame-loading">{t('photoFrame.loading')}</div>
      ) : photos.length === 0 ? (
        <div className="photo-frame-empty">
          <p>{t('photoFrame.noPhotos')}</p>
        </div>
      ) : (
        <>
          <div className="photo-frame-display">
            {selectedPhoto && (
              <img
                src={`${import.meta.env.BASE_URL}photos/${selectedPhoto}`}
                alt={t('photoFrame.photoAlt')}
                className="photo-frame-image"
              />
            )}
          </div>
          <button
            onClick={handleRandomPhoto}
            className="random-photo-btn"
            disabled={photos.length <= 1}
          >
            {t('photoFrame.changePhoto')}
          </button>
        </>
      )}
    </div>
  );
}
