import MerchCard from '../Cards/MerchCard';
import merchList from '@/app/_lib/data/merch';
import { motion } from 'framer-motion';

const Gallery = () => {
  console.log(merchList);
  return (
    <div className="flex gap-3 flex-wrap items-center justify-center">
      {merchList.map((item) => (
        <>
          <MerchCard key={item.title} merch={item} />
        </>
      ))}
    </div>
  );
};

export default Gallery;
