import Gallery from '@/components/Gallery/Gallery';
import Image from 'next/image';
const Products = () => {
  return (
    <div className="h-screen w-screen">
      <Image
        src="/hero.png"
        height={400}
        width={500}
        quality={100}
        alt="basketball hero image"
        className="min-w-full lg:object-fit"
      />
      <Gallery />
    </div>
  );
};

export default Products;
