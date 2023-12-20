
import { Card, CardBody, CardFooter } from '@nextui-org/react';
import video from '../assets/img/video.mp4'
import TypingAnimation from './VidAnimate';

const VideoHeader = () => {

  const videoContent = video;



  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className='mx-auto w-[100%]'>
      <Card {...settings}                   
                  isBlurred
                  className="border-none bg-olive rounded-none top-0"
                  shadow="sm">

          <div >
            <CardBody className="relative w-full h-[85vh] mx-auto overflow-hidden z-0">
            <div className="relative w-full h-[85vh] mx-auto overflow-hidden">
            <video
          controls
          className="object-cover w-full rounded "
          src={videoContent}
          type="video/mp4"
          muted
          autoPlay
          loop
        >
          Your browser does not support the video tag.
        </video>
            </div>
            <div className='bg-olive/25 absolute top-0 w-[99%] h-[99%]'></div>
            </CardBody>
          </div>
          <CardFooter className='text-beige text-9xl font-special mx-auto flex-col absolute mt-60 z-10'>
            <h1>WrenCreations</h1>
          <TypingAnimation 
            texts={[
             
              "Discover Art you can wear.."
            ]}
            speed={100} 
            
          />
        </CardFooter>
      </Card>
    </div>
  );
};

export default VideoHeader;
