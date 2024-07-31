import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Card from './components/Card';
import BlueCard from './components/BlueCard';
import ImageCard from './components/ImageCard';
import NameCard from './components/NameCard';
import { InfoCard } from './components/InfoCard';

/* Bg changer */

// function App() {

//   const [color, setColor] = useState("red");
  
//   return(
//     <div className={`bg-${color}-500 h-screen flex justify-end flex-col pb-4`}>
      
//       <Card setColor={setColor}></Card>
//     </div>
    
//   )
  
// }
// function App(){
//   return(
//     <div className='flex flex-col justify-center items-center m:20 sm:m-28 md:m-52'>
//     <BlueCard></BlueCard>
    
//     <NameCard></NameCard>
    
//     <InfoCard></InfoCard>
  
    
//     </div>
//   )
// }

// export default App;


function App() {
    return (
        <div className='flex flex-col justify-center items-center mx-auto my-8 sm:my-12 md:my-40 lg:my-40'>
            <BlueCard />
            <NameCard />
            <InfoCard />
        </div>
    );
}

export default App;
