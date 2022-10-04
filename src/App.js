import React from 'react';
import './App.scss';
import { Splash, Footer, Navbar } from './containers';

const App = () => {
	return (
		<div className="App">
		  <Navbar />
		  <Splash />
		  <Footer />
		</div>
	  );
};

export default App;
