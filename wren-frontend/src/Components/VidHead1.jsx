
import { Card, CardBody } from '@nextui-org/react';
import video from '../assets/img/video1.mp4'


const VidHead1 = () => {

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
                  className="border-none bg-olive rounded-none pt-4 pb-8"
                  shadow="sm">

          <div >
            <CardBody className="relative w-[75%] mx-auto">
            <div className="relative w-[75%] mx-auto">
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
      </Card>
    </div>
  );
};

export default VidHead1;
