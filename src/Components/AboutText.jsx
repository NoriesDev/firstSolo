import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from "@nextui-org/react";

const AboutText = () => {
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/about');
        setAboutData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAboutData();
  }, []);

  return (
    <div className='bg-beige py-8'>
<Card className='text-center text-beige/80 w-[55%] mx-auto py-8 bg-olive/80 rounded'>
  {aboutData.map((aboutItem) => (
    <div key={aboutItem._id}>
      <h1 className='font-bold text-7xl text-rosa my-8 font-special'>{aboutItem.title}</h1>
      {aboutItem.text.map((item, itemIndex) => (
        <div
          className={`my-8 ${
            itemIndex % 2 === 0 ? 'text-left mr-96' : 'text-right ml-96'
          } mx-8`}
          key={item._id}
        >
          <h3 className='font-bold text-5xl text-rosa/80 font-special my-2'>{item.headline}</h3>
          <p className='font-paragraph1'>{item.paragraph}</p>
        </div>
      ))}
    </div>
  ))}
</Card>
</div>
  );
};

export default AboutText;
