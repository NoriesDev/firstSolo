import { Card, CardBody, Image, Button, CardFooter } from "@nextui-org/react";
import Ring from '../assets/img/Ring.png'
import {useNavigate} from 'react-router-dom'

export default function About() {
  const navigate = useNavigate()

  const handleAbout = () => {
    navigate('/about')
  }


  return (
    <div className="bg-beige mx-auto">
      <div className="mx-auto w-[100%] ">
        <Card
          isBlurred
          className="border-none bg-beige rounded-none mx-auto py-8"
          shadow="sm"
        >
          <CardBody>
            <div className="relative w-[56%] mx-auto">
              <Image
                alt="Album cover"
                className="object-cover w-[100vw] h-full mx-auto rounded"
                shadow="md"
                src={Ring}

              />
            </div>

            <CardFooter className="absolute top-5 left-0 right-0 text-center z-10 ">
              <div className="text-beige font-paragraph1 bg-olive/30 w-[50%] mx-auto rounded pb-2 py-4">
                <h3 className="font-semibold text-6xl font-special mx-32 text-rosa">
                  Handmade Rings from South Africa
                </h3>
                <p className="text-lg mx-8 mt-2">
                  Discover the Essence of Artistry: Our exclusive collection of meticulously handcrafted rings embodies the spirit of craftsmanship and individuality. Each piece tells a story, crafted with passion and precision, offering you a timeless symbol of elegance and personal expression.
                </p>

                <Button onClick={handleAbout} className="w-[350px] mt-4 mb-2 mx-auto hover:text-olive hover:bg-rosa bg-beige/30 text-beige font-headlines text-xl rounded">
                  About WrenCreations
                </Button>
              </div>
            </CardFooter>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
