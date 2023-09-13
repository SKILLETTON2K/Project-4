import React from 'react';
import CardItem from '../CardItem/CardItem'; // Import your existing CardItem component

function DownloadableCardItem({ src, text, label, fileUrl, fileName }) {
  const handleDownloadClick = () => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  };

  return (
    <div className='downloadable-card'>
      <CardItem
        src={src}
        text={text}
        label={
          <span>
            {label}
            <button onClick={handleDownloadClick}>Download</button>
          </span>
        }
      />
    </div>
  );
}

export default DownloadableCardItem;