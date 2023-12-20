import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';


const RingHeadline = () => {
  const [headlineData, setHeadlineData] = useState({});
  const navigate = useNavigate()

  const handleCollection = () => {
    navigate('/collection')
  }

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

  return (
    <div className='bg-beige py-8'>
    <Card className='text-center w-[55%] mx-auto bg-olive/80 rounded'>
      <div>
        <h1 className='font-bold text-7xl text-rosa mt-8 text-center font-special'>{headlineData.title}</h1>
        <div className='mb-8 text-center mx-8 text-beige/80 '>
          <h3 className='font-bold text-5xl mb-4 text-center font-special'>{headlineData.headline}</h3>
          <p className='font-paragraph1 text-lg'>{headlineData.paragraph}</p>
        </div>
      </div>
      <div className='pb-4'>
      <Button onClick={handleCollection} className="w-[300px] my-2 mx-2 hover:text-olive hover:bg-rosa bg-beige/30 text-beige font-headlines text-xl rounded">Our Collection</Button>
      </div>
    </Card>
    </div>
  );
};

export default RingHeadline;
