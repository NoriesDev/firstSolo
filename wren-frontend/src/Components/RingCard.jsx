import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import {useNavigate} from 'react-router-dom'

export default function RingCard() {
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/ring/');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleClick = () => {
    window.open('https://www.etsy.com/sell?ref=ftr', '_blank'); 
  };

  const handleSingle = (id) => {
    navigate('/item', { state: { id } });
  };
  

  return (
    <div className="bg-beige py-8 font-paragraph1 " >
      <div className="flex space-x-8 justify-center mb-8">
        {data.map((item) => (
          <Card  key={item._id} data={item} isFooterBlurred radius="lg" className="border-none w-[200px] rounded">
            <Image
              alt={`Image of a ${item.headline || 'ring'}`}
              className="object-cover h-[200px] w-[200px] bottom-0 rounded"
              src={item.imgSrc}
            />
            <CardFooter className="justify-between bg-olive/30 border-beige/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100% - _px)] shadow-small ml-1 z-10">
              <a onClick={() => handleSingle(item._id)} className="text-tiny text-beige hover:text-rosa rounded">{item.headline}</a>
              <Button onClick={handleClick} className="text-tiny text-beige bg-olive/20 hover:bg-rosa hover:text-olive" variant="flat" color="default" radius="lg" size="sm">
                go to shop
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
