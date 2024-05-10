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
    <div className="mt-4 rounded-md border">
      <motion.div
        animate={{
          x: 0,
          backgroundColor: '#000',
          boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
          position: 'fixed',
          transitionEnd: {
            display: 'none',
          },
        }}
      />
      <Card
        className="py-4 hover:-translate-y-1 hover:scale-103 duration-300 m-2 w-72 flex justify-center items-center hover:border border-spacing-4"
        shadow="md"
        radius="md"
        isHoverable={true}
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
