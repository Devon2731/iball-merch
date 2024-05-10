'use client';
// import merchList from '../../data/merch.js';
import { motion } from 'framer-motion';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from '@nextui-org/react';
// import Image from 'next/image';
type merch = {
  title: string;
  amount: string;
  currencyCode: string;
  image: string;
};

const MerchCard = ({ merch }: { merch: merch }) => {
  return (
    <div className="mt-20 rounded-md shadow-xl border hover:bg-stone-grey border-spacing-4">
      <motion.div
        animate={{
          x: 0,
          backgroundColor: '#000',
          boxShadow: '10px 10px 0 rgb(0, 0, 0, 0.2)',
          position: 'fixed',
          transitionEnd: {
            display: 'none',
          },
        }}
      />
      <Card
        className="flex justify-center items-center "
        shadow="lg"
        radius="md"
        // isHoverable={true}
      >
        <CardHeader className="">
          <h3>{merch.title}</h3>
        </CardHeader>

        <CardBody className="overflow-visible py-2">
          {/* //! Replace with images we receive */}
          <Image
            src={merch.image}
            height={270}
            width={270}
            alt={merch.title}
            className="object-cover rounded-xl p-2 h-64"
            // quality={100}
            sizes="200px, 400px, 800px"
          />
          <p>{merch.amount}</p>
          {/* <p>{merch.currencyCode}</p> */}
          <CardFooter className="justify-between">
            <Button>Add to Cart</Button>
            <Button>Buy Now</Button>
          </CardFooter>
        </CardBody>
      </Card>
    </div>
  );
};

export default MerchCard;
