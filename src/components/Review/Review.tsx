import { useEffect } from "react";
import './Review.scss';

const Review = () => {
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
    <div className="review-container">
      <div className="elfsight-app-b9cda379-5dba-40e4-b39a-32ce90f7bc2d"></div>
      <div className="ocultador"></div>
    </div>
  );
};

export default Review;
