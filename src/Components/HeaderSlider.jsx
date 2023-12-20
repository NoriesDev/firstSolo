
import { Card, CardBody, CardFooter, Image, Button } from '@nextui-org/react';
import Ring3 from '../assets/img/Ring3.png';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

const ImageSlider = () => {
  const [headlineData, setHeadlineData] = useState({});
  const images = [
    Ring3,
  ];
  const navigate = useNavigate()
  

  useEffect(() => {
    const fetchHeadlineData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/headline/657c9ec4ed647f5055373dbf');
        if (response.data && typeof response.data === 'object') {
          setHeadlineData(response.data);
        } else {
          console.error('Invalid data structure:', response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchHeadlineData();
  }, []);
  

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const handleCollection = () => {
    navigate('/collection')
  }

  return (
    <div className='mx-auto w-[100%]'>
      <Card {...settings}                   
                  isBlurred
                  className="border-none bg-olive rounded-none pt-4 pb-8"
                  shadow="sm">
        {images.map((image, index) => (
          <div key={index}>
            <CardBody className="relative w-[75%] mx-auto rounded">
            <div className="relative w-[75%] mx-auto">
            <Image
              alt="Album cover"
              className="object-cover w-[100vw] h-full mx-auto rounded"
              shadow="md"
              src={Ring3} />
            </div>
            </CardBody>
          </div>
        ))}
              <CardFooter className="absolute top-0 left-0 right-0 text-center z-10 ">
              <div className="text-beige font-paragraph1  w-[75%] mx-auto rounded py-8">
              <h1 className='font-bold text-7xl text-beige mt-8 text-center font-special'>{headlineData.title}</h1>
                <h3 className="font-semibold text-6xl font-special my-4">
                {headlineData.headline}
                </h3>
                <p className="text-lg mx-56">
                {headlineData.paragraph}
                </p>
                <Button onClick={handleCollection} className="w-[350px] mt-4 mx-auto hover:text-olive hover:bg-rosa bg-beige/20 text-beige font-headlines text-xl rounded">
                  Check our latest Collection
                </Button>
                  </div>
                </CardFooter>
      </Card>
    </div>
  );
};

export default ImageSlider;
