import React from 'react';
import { Provider } from './components/ui/provider.jsx';
import { Button } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';

const App = () => {
	return (
		<Provider>
			<Routes>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
			</Routes>
		</Provider>
	)
}

export default App;