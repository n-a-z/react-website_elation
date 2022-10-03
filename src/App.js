import React from 'react';
import './App.scss';
import { Splash, Footer } from './containers';
import { ScrollTop } from './components';

const App = () => {
	return (
		<div className="App">
		  <Splash />
		  <Footer />
		  <ScrollTop />
		</div>
	  );
};

export default App;
