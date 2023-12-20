
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link,  Image} from "@nextui-org/react";
import {useNavigate} from 'react-router-dom'

export default function App() {
  const navigate = useNavigate()

  const handleCollection = () => {
    navigate('/collection')
  }

  const handleAbout = () => {
    navigate('/about')
  }

  const handleHome = () => {
    navigate('/')
  }

  return (
    <Navbar className="w-full h-auto bg-olive pt-2">
            <Image
              alt="Album cover"
              className="object-cover w-[65px] h-[65px] mx-auto mb-2 rounded-full"
              src='https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/392743005_792226386035331_3853139993225799945_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=v_FC5lES-tMAX-7TG4i&_nc_ht=scontent-ham3-1.xx&oh=00_AfDIRtcwx30PoTbeMFzxg6dxbWZL3StuDZeJUoZZJerKDw&oe=65861A56' />
      <NavbarBrand onClick={handleHome}>
        <p className="text-5xl text-rosa hover:text-beige font-special">WrenCreations</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-8 font-paragraph1" justify="end">
        <NavbarItem isActive>
          <Link onClick={handleHome} className='text-beige hover:text-rosa' href="#" aria-current="page">
          Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link onClick={handleAbout} className='text-beige hover:text-rosa' color="foreground" href="#">
            About
          </Link>
          
        </NavbarItem>
        <NavbarItem>
          <Link onClick={handleAbout} className='text-beige hover:text-rosa' color="foreground" href="#">
            About
          </Link>
          
        </NavbarItem>
        <NavbarItem>
          <Link onClick={handleCollection} className='text-beige hover:text-rosa' color="foreground" href="#">
          Our Collection
          </Link>
          
        </NavbarItem>
      </NavbarContent>

    </Navbar>
  );
}
