import { Button } from '@/components/ui/button';
import React from 'react';

const Home = () => {
  return (
    <div className="p-10 bg-shop-light-pink">
      <h2 className="text-xl font-semibold">Home</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
        soluta enim, numquam beatae ex, dolorem quidem consectetur quo animi,
        iste quod excepturi! Praesentium eos tempora qui corrupti placeat
        blanditiis alias voluptatum? Asperiores maiores obcaecati enim, quasi
        minus non. Saepe atque laudantium odit consequatur quos fuga aperiam
        molestiae reprehenderit voluptas beatae?
      </p>
      <Button size={'lg'}>Check out</Button>
    </div>
  );
};

export default Home;
