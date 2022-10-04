import React from 'react';
import './App.scss';
import { Splash, Footer, Navbar, Cta, Successful, Awesome } from './containers';

const App = () => {
	return (
		<div className="App">
		  <Navbar />
		  <Splash />
		  <Successful />
		  <Awesome />
		  <Cta />
		  <Footer />
		</div>
	  );
};

export default App;
