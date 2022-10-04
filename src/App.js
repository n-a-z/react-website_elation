import React from 'react';
import './App.scss';
import { Splash, Footer, Navbar, Cta } from './containers';

const App = () => {
	return (
		<div className="App">
		  <Navbar />
		  <Splash />
		  <Cta />
		  <Footer />
		</div>
	  );
};

export default App;
