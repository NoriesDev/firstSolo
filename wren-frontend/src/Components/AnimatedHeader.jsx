
import { Card, CardBody, Image } from '@nextui-org/react';
import TypingAnimation from "./VidAnimate";


const AnimatedHeader = () => {
  return (
    <div className="flex items-center justify-center bg-olive pb-8">
      <Card className="text-center px-4 w-[55%] bg-beige/20 h-[30vh] my-8 rounded ">
      <Image
              alt="Album cover"
              className="object-cover w-[150px] h-[150px] left-0 top-1 mt-8 rounded-full relative z-0 shadow-2xl shadow-olive opacity-70"
              src='https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/392743005_792226386035331_3853139993225799945_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=v_FC5lES-tMAX-7TG4i&_nc_ht=scontent-ham3-1.xx&oh=00_AfDIRtcwx30PoTbeMFzxg6dxbWZL3StuDZeJUoZZJerKDw&oe=65861A56' />
        <CardBody className='text-rosa text-9xl font-special mx-auto flex-col absolute z-10'>
          <h1 className="text-center pt-8 font-special text-rosa">
            WrenCreations
          </h1>
          <TypingAnimation 
            texts={[
              "Handmade Rings, bracelets and more...",
              "Made with love...",
              "Silver, Gold and Copper Jewelry...",
            ]}
            speed={100} 
            
          />
        </CardBody>
      </Card>
    </div>
  );
};


  

export default AnimatedHeader;
