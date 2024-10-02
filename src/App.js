import './App.css';
import { BackgroundBeamsWithCollisionDemo } from './components/BackgroundBeamDemo';
import NavBar from './components/NavBar';
import SocialBar from './components/SocialBar';

function App() {
  return (
   <>
   <SocialBar></SocialBar>
   <BackgroundBeamsWithCollisionDemo></BackgroundBeamsWithCollisionDemo>
   {/* <TabsDemo></TabsDemo> */}
   {/* <HomePage></HomePage> */}
   <NavBar></NavBar>

   </>
  );
}

export default App;
