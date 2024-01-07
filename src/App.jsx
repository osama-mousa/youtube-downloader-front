import { useState,useEffect } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Download from './Components/Download'
import './App.css'


// const CountdownTimer = ({ initialTime, onTimerEnd }) => {
//   const [time, setTime] = useState(initialTime);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTime(prevTime => prevTime - 1);

//       if (time === 0) {
//         clearInterval(intervalId);
//         onTimerEnd();
//       }
//     }, 1000);

//     // تنظيف المؤقت عندما يتم إلغاء تحميل المكون
//     return () => clearInterval(intervalId);
//   }, [time, onTimerEnd]);

//   // قم بتحويل الوقت إلى ساعات ودقائق وثواني
//   const hours = Math.floor(time / 3600);
//   const minutes = Math.floor((time % 3600) / 60);
//   const seconds = time % 60;

//   return (
//     <div>
//       <p>{hours} : {minutes} : {seconds}</p>
//     </div>
//   );
// };


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      {/* <div className='error'>
        <p>The service is not available now</p>
        <CountdownTimer initialTime={79200} />
      </div> */}
      <h1 className='title'>YouTube Video Downloader</h1>
      <Download />
      <Footer />

    </>
  )
}

export default App
