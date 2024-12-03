import logo from "./img/_Logo.svg"
import logo1 from "./img/Screenshot 2024-03-13 at 11.09 1.svg"
import logo2 from "./img/Frame 3579.svg"
import logo3 from"./img/image 1.svg"
import log from"./img/Social Proof.svg"
function App() {
  return (
    <div className="App">
      <div className='b1'>
      <p>SUMMER SALE UP TO 50% OFF</p>
      </div>
      <div className='b2'>
      <img src={logo} alt="logo" center/>
      </div>
      <div className='items-center flex justify-center  '>
      <img src={logo1} alt="" width='100%' className="w-full"/>
      </div>
      <div className='b4'>
      <img src={log} alt="log" center/>
      </div>
      <div className='b5'>
      <img src={logo2} alt="" width='40%' className="w-full"/>
      </div>
      <div className='text text-[100px] items-center flex justify-between px-2 py-3'>
      <img src={logo3} alt="logo3" center/>
      </div>

    </div>

  );
}

export default App;




