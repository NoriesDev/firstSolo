import { FaFacebookF, FaTwitter, FaYoutube, FaPinterest } from "react-icons/fa";
import { Button } from "@nextui-org/react";

export default function Footer() {
  const iconsTab = [
    { icon: <FaFacebookF />, link: "https://www.facebook.com/handmadegiftcreations" }, 
    { icon: <FaTwitter /> },
    { icon: <FaYoutube /> },
    { icon: <FaPinterest /> },
  ];

  return (
    <>
    <div className="bg-olive font-paragraph1">
      <footer className="flex py-8 space-x-8 mx-auto justify-center">


            <div className="flex md:p-0 py-4 gap-8">
              <div className="flex gap-7 text-[18px] text-[#646464] justify-center md:justify-start">
                {iconsTab.map(({ icon, link }, index) => (
                 <a
                 key={index}
                 href={link}
                 target="_blank"
                 rel="noreferrer"
                 className="text-2xl bg-beige p-2 rounded-full hover:bg-rosa text-olive transition-all duration-300"
               >
                    {icon}
                  </a>
                ))}
              </div>


              <p className="text-[16px] text-center font-medium text-beige">
                Privacy Policy | © 2023 WrenCreations
                <br />
                Design by{" Nories "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.your-website.com/"
                >
                  WrenCreations
                  </a>
              </p>
            </div>


            {/* Join us */}

            <div className="flex flex gap-8 relative ">
              <Button className="text-[22px] font-bold bg-beige/10  text-beige  hover:text-olive hover:bg-rosa rounded">Home</Button>
              <Button className="text-[16px] text-olive bg-beige/10  text-beige  hover:text-olive hover:bg-rosa font-bold rounded">About</Button>
              <Button className="text-[16px] text-olive bg-beige/10  text-beige  hover:text-olive hover:bg-rosa font-medium rounded">
                Projects
              </Button>
              <Button className="text-[16px] text-olive bg-beige/10  text-beige  hover:text-olive hover:bg-rosa font-bold rounded">Contact </Button>
            </div>

      </footer>
      </div>
    </>
  );
}