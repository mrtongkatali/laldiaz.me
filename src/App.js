import logo from '@/logo.svg';
import mugshot from "@/assets/images/leod-mugshot.png"
import '@/App.css';

import "@/assets/style.scss"

const App = () => {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  return (
    <>
      <div className="container-fluid px-0 position-relative">
        <div className="row no-gutters">
          <div className="section-header-content">
            <img src={mugshot} />
            <h1 className="display-4">Leo Diaz</h1>
            <h5 className="text-light">Full-Stack Developer</h5>
          </div>
        </div>
      </div>
    </>
  )
};

export default App;
