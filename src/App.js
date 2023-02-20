import './App.css';

function App() {
  return (
    <div className="App">

      <header>
      <div className='headerTop'>
      <p>ЛЕКТОРИЙ ПРОВОДНИК В МИР ИСКУССТВА СЛОВА</p>
      </div>

       <div className='headerMain'>
        <img className='logo' width={60} src='\img\logo.jpg' alt='logo'></img>
        <button>НАША КОЛЛЕКЦИЯ</button>
        <img className='burger' width={50} src='\img\burger.jpg' alt='menuBurger'></img>
       </div>
       </header>
    </div>
  );
}

export default App;
