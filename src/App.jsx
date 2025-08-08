import React from 'react';
import { Provider } from './components/ui/provider.jsx';
import { Button } from '@chakra-ui/react';

const App = ({ Component, pageProps }) => {
	return (
		<Provider>
			<Button>Hello world</Button>
		</Provider>
	)
}

export default App;