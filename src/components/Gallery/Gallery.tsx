import MerchCard from '../Cards/MerchCard';
import merchList from '../../data/merch.js';

const Gallery = () => {
  console.log(merchList);
  return (
    <>
      {merchList.map((item) => {
        return (
          <>
            <MerchCard key={item.title} merch={item} />
          </>
        );
      })}
    </>
  );
};

export default Gallery;
