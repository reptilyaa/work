import logo from "./img/_Logo.svg"
import logo1 from "./img/Screenshot 2024-03-13 at 11.09 1.svg"
function App() {
  return (
    <div className="App">
      <div className='b1'>
      <p>SUMMER SALE UP TO 50% OFF</p>
      </div>
      <div className='b2'>
      <img src={logo} alt="logo" center/>
      </div>
      <div className='items-center flex justify-center'>
      <img src={logo1} alt="" className="w-full"/>
      </div>
      <div className='b4'>
      <p>Spring Season</p>
      </div>
      <div className='b5'>
      <p>view collection</p>
      </div>
    </div>

  );
}

export default App;
