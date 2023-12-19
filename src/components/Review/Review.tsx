import { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import './Review.scss';

const Review = () => {
  const { t } = useTranslation();
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="d-flex flex-column">

               <div className="d-flex justify-content-around align-items-center mb-5">
        <div className="divider" />
        <h2 className="text-secondary text-center mx-3">
        {t('servi.resena')}
        </h2>
        <div className="divider" />
     
    </div>
    <div className="review-container">
 
      <div className="elfsight-app-b9cda379-5dba-40e4-b39a-32ce90f7bc2d"></div>
      <div className="ocultador"></div>
    </div>
    </div>
  );
};

export default Review;
