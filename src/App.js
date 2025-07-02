import { Navbar, Brand, CTA } from './components';
import { Header, Blog, Features, Footer, Possibility, WhatGPT3 } from './containers';

import './App.css';
import './index.css'

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
