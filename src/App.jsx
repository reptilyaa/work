import logo from "./img/_Logo.svg"
import logo1 from "./img/Screenshot 2024-03-13 at 11.09 1.svg"
import logo2 from "./img/Frame 3578.svg"
import logo3 from "./img/image 1.svg"
import log from "./img/Social Proof.svg"
import frame from "./img/Frame 3578 (1).svg"
import frame1 from "./img/Frame 3526.svg"
import img1 from "./img/image 3.svg"
import img2 from "./img/image 2.svg"


function App() {
  return (

    
    <div className="App">
      <div className='b1'>
        <p>SUMMER SALE UP TO 50% OFF</p>
      </div>
   

      <div className='b2'>
        <img src={logo} alt="logo" center />
      </div>


    

      <div className='text-white relative text -[30px]'>
      <img src={logo1} alt="" width='100%' className="w-full" />
        <h1 className="absolute right-4 bottom-5 left-8">Spring Season</h1>
        <a className="absolute right-4 bottom-5">View collrction</a>
      </div>
   
  

      <div className='b4'>
        <img src={log} alt="log" center />
      </div>

      <div className='box justify-center items-start align-middle text-center flex '>
        <img src={logo2} alt="logo2" width= '100%' center className="image" />
        <img src={logo3} alt="logo3" width= '100%' center />
      </div>

    
      <div className='text text-[100px] items-center flex px-2 py-3'>
        <img src={frame} alt="q" width= '50%' center />
        <img src={frame1} alt="frame1" width= '50%' center />
      </div>

      <div className='text text-[100px] items-center flex px-2 py-3'>
        <img src={img1} alt="w1" width= '50%' center />
        <img src={img2} alt="frame2" width= '50%' center />
      </div>

      <div className='b10'>
        <p>Hot off the press</p>
      </div>

      </div>
     

  );
}

export default App;




