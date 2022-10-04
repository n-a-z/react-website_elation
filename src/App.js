import React from 'react';
import './App.scss';
import { Splash, Footer, Navbar, Cta, Successful } from './containers';

const App = () => {
	return (
		<div className="App">
		  <Navbar />
		  <Splash />
		  <Successful />
		  <Cta />
		  <Footer />
		</div>
	  );
};

export default App;
