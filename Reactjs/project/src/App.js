import logo from './logo.svg';
import './App.css';

// A component is a function that returns UI

function Header(){
  return(
    <header>
      <h1>About Me</h1>
    </header>
  )
}

function Main(){
  return(
    <section>
      <p>My Name: Ian Muyumba</p>
    </section>
  )
}

function Footer(){
  return(
    <section>
      <p>Website: www.play360.solutions</p>
    </section>
  )
}


// Compose the function to create a larger application
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
