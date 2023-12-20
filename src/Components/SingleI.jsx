
import {Card, CardFooter, Image, Button} from "@nextui-org/react";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Single() {
    const [selectedItem, setSelectedItem] = useState(null);
    const location = useLocation();
    const { id } = location.state || {};
    
  const handleClick = () => {
    window.open('https://www.etsy.com/sell?ref=ftr', '_blank'); 
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/ring/${id}`);
        setSelectedItem(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (!selectedItem) {
    return <div>Loading...</div>;
  }


  return (
    <div className="bg-beige py-8 font-paragraph1">
      <div className="flex space-x-8 justify-center mb-8">
        <Card
          isFooterBlurred
          radius="lg"
          className="border-none w-[55%] rounded flex-row bg-olive"
        >
          <div className="justify-self-start">
            <Image
              alt="Image of a WrenCreation Ring"
              className="object-cover w-[25vw] h-[500px] rounded-none"
              src={selectedItem.imgSrc}
            />
          </div>
          <div className="justify-self-end mx-8">
            <CardFooter className="flex-col h-[90%] justify-between bg-beige/50 border-beige/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded bottom-0 right-16 w-[40%] shadow-small z-10 mb-8">
              <p className="text-4xl text-rosa font-special">{selectedItem.headline}</p>
              {selectedItem.text && selectedItem.text.map((textItem) => (
                          <div className="text-tiny text-olive text-center" key={textItem._id}>
                            <h2 className="text-beige text-sm mb-2">{textItem.headline}</h2>
                            <p>{textItem.paragraph}</p>
                          </div>
                        ))}
              <Button onClick={handleClick} className="text-tiny text-beige bg-olive/20 hover:bg-rosa hover:text-olive mb-2" size="sm">
                go to shop
              </Button>
            </CardFooter>
          </div>
        </Card>
      </div>
    </div>
  );
}


