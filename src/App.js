// Import Suspense
import React, { Suspense} from 'react';
import './App.css';
// import loading spinner
// install it in terminal with: npm install react-loader-spinner
//https://www.npmjs.com/package/react-loader-spinner
import { TailSpin } from 'react-loader-spinner';


function App() {
// imported with lazy loading
const AboutUs = React.lazy( () => import('./components/AboutUs'))
const Packages = React.lazy( () => import('./components/Packages'))


  return (
    <div className="App">
      <h1>Lonzo's Travel Agency</h1>
      <h2>Make your travel dreams come true</h2>
      <div className="contents">
        {/* suspense fallback first loading text*/}
        {/* <Suspense fallback={<h1>Loading...</h1>}>
            <AboutUs />
            <Packages />
        </Suspense> */}
        {/* suspense fallback loading spinner */}
        <Suspense fallback={<TailSpin color="#00BFFF" height={80} width={80} style={{margin: '0 auto'}} />}>
            <AboutUs />
            <Packages />
        </Suspense>        

      </div>
    </div>
  );
}

export default App;
