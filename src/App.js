import React, { useState } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import Marketing from './pages/Marketing';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Consulting from './pages/Consulting';
import './App.css';
import Design from './pages/Design';
import Development from './pages/Development';

function App() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar
            click={click}
            handleClick={handleClick}
            closeMobileMenu={closeMobileMenu}
          />
        </header>
        <Switch>
          <main className={click ? 'content noscroll' : 'content'}>
            <Route path="/" exact component={Home} />
            <Route path="/services" exact component={Services} />
            <Route path="/products" exact component={Products} />
            <Route path="/marketing" exact component={Marketing} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/consulting" exact component={Consulting} />
            <Route path="/design" exact component={Design} />
            <Route path="/development" exact component={Development} />
          </main>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
