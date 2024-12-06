import logo from "./img/_Logo.svg"
import logo1 from "./img/Screenshot 2024-03-13 at 11.09 1.svg"
import logo2 from "./img/Frame 3578.svg"
import logo3 from "./img/image 1.svg"
import log from "./img/Social Proof.svg"
import frame from "./img/1 1.svg"
import frame1 from "./img/Frame 3526.svg"
import img1 from "./img/image 3.svg"
import img2 from "./img/image 2.svg"
import i from "./img/Frame 3580.svg"
import i2 from "./img/Frame 3580 (1).svg"
import i3 from "./img/Frame 3580 (2).svg"
import i4 from "./img/Frame 3580 (3).svg"
import but from "./img/Button.svg"
import but1 from "./img/Button (1).svg"
import gr from "./img/Group 2.svg"

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
        <a className="absolute right-4 bottom-5" href="#">View collection</a>
      </div>

  

      <div className='b4'>
        <img src={log} alt="log" center />
      </div>

      <div className='box justify-center  items-start align-middle text-center flex '>
        <img src={logo2} alt="logo2" width= '100%' center className="image" />
        <img src={logo3} alt="logo3" width= '100%' center />
      </div>

      <div className='text1 text-[-1px] items-start flex font-bold ml-[1000px] mr-[-100px] mt-[-100px]'>
        <button className='bg-black text-[25px]  px-4 py-4 rounded'>Shop Shirts</button>
        </div>

    
      <div className='box1 text text-[100px] items-center ml-[400px]  mt-[100px] w-[596px] h-[-750px] flex px-2 py-3'>
        <img src={frame} alt="" />
        </div>
        <div className='text text-[100px] items-center ml-[1000px] mt-[-700px] w-[596px] h-[750px] flex px-2 py-3'>
        <img src={frame1} alt=""/>
      </div>

      <div className='text text-[100px] items-center ml-[400px] w-[596px] h-[636px] flex px-2 py-3'>
        <img src={img1} alt="w1"  center />
        <img src={img2} alt="frame2"  center />
      </div>

      <div className='b10 mt-[150px] h-[100px] '>
        <p>Hot off the press</p>
      </div>



      <div className='b15 ml-[280px] h-[60px] text-[30px]'>
        <p>Bloomberg</p>
      </div>

      <div className='a12 ml-[760px] mt-[-70px] h-[70px] text-[30px]'>
        <p>Forbes</p>
      </div>

      <div className='a13 ml-[1350px] mt-[-70px] h-[60px] text-[30px]'>
        <p>FaSTCoMPANY</p>
      </div>

      <div className='a13'>
        <p></p>
      </div>

      <div className='text-[18px] h-[75px] w-[298px] ml-[280px] mt-[50px]'>
        <p>“First Light: Where great design
           and the finest materials unite in
            ultimate comfort”</p>
      </div>

      <div className='text-[18px] h-[75px] w-[298px] ml-[760px] mt-[-75px]'>
        <p>“First Light: Where great design and the finest materials unite in ultimate comfort”</p>
      </div>

      <div className='text-[18px] h-[75px] w-[298px] ml-[1350px] mt-[-75px]'>
        <p>“Redefining excellence with premium materials and visionary robust design.”</p>
      </div>

      <div className='b10 mt-[150px] h-[100px] '>
        <p>Women - Must Haves</p>
      </div>
    
      <div className='box justify-between flex'>
        <img src={but} alt="" className="mt-[60px]"/>
        <div className="">
        <img src={i} alt="i"  center />
        <div className="flex justify-between">
        <p>Basic Shirt</p>
        <p>€49</p>
        </div>
        </div>
        <div className="">
        <img src={i2} alt="i2"  center />
        <div className="flex justify-between">
          <p>Beige Jumper</p>
          <p>€99</p>
        </div>
        </div>
        <div className="">
        <img src={i3} alt="i3"  center />
        <div className="flex justify-between">
          <p>Signature Jacket</p>
          <p>€249</p>
        </div>
        </div>
        <div className="">
        <img src={i4} alt="i4"  center />
        <div className="flex justify-between">
          <p>Navy Jumper</p>
          <p>€45</p>
        </div>
        </div>
        <img src={but1} alt="" className="mt-[60px]" />
      </div>
      <div className="">
        <div className="justify-center flex mt-10 text-[50px]">
          <p>We always have your back</p>
        </div>
        <div className="">
          <button className="bg-black text-[25px] text2 px-4 py-4 rounded">Made in Portugal <br/>With hand finished details</button>
        </div>
      </div>
      </div>
  );
}

export default App;




