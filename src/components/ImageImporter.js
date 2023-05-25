import React from 'react'

const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace('./', '')] = r(item);
      return null;
    });
    return images;
  };
  const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

function ImageImporter() {
  return (
    <div>
      <img src={images['analytics.svg',
                        'avatar2.jpg',
                        'avatar3.jpg',
                        'folio-1.jpg',
                        'folio-2.jpg',
                        'folio-3.jpg',
                        'header.jpg',
                        'img-1.jpg',
                        'img-2.jpg',
                        'man.png',
                        'pencil-case.svg',
                        'responsive.svg',
                        'scooter.svg',
                        'shipped.svg',
                        'startup.svg',
                        'toolbox.svg'].
        default} alt="Image 1" />
      
    </div>
  )
}

export default ImageImporter



