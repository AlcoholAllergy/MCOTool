import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetUserSelectionState } from '../../redux/userSelection/userSelectionSlice';

const loadImageAndStore = async (url: string): Promise<void> => {
  try {
    const response = await fetch(url);
    const imageBlob = await response.blob();
    const reader = new FileReader();

    reader.readAsDataURL(imageBlob);
    reader.onloadend = () => {
      if (reader.result) {
        localStorage.setItem('logoImage', reader.result as string);
      }
    };
  } catch (error) {
    console.error('Error fetching image:', error);
  }
};

const Logo: React.FC = () => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(resetUserSelectionState());
  };

  const [logoSrc, setLogoSrc] = useState<string | null>(null);

  useEffect(() => {
    const storedLogo = localStorage.getItem('logoImage');
    const imageUrl = `/logo.png`;

    if (storedLogo) {
      setLogoSrc(storedLogo);
    } else {
      setLogoSrc(imageUrl);
      loadImageAndStore(imageUrl);
    }
  }, []);

  return (
    <div className="col-end-2 row-end-2" onClick={onClickHandler}>
      <Image
        src={logoSrc || ''}
        alt="HECC"
        width={530}
        height={95.99}
        style={{ width: '230px', height: '95.99px' }}
        placeholder="blur" // Add a placeholder for better UX
        blurDataURL="/path/to/low-res-placeholder.png" // Path to a low-res placeholder image
      />
    </div>
  );
};

export default Logo;
