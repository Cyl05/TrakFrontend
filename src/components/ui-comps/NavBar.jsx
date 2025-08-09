import { Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const NavBar = () => {
	const location = useLocation();
	const blockedPaths = ['/login', '/register'];

	const [blocked, setBlocked] = useState('null');

	useEffect(() => {
		blockedPaths.forEach(blockedPath => {
			if (location.pathname.includes(blockedPath)) {
				setBlocked('none');
			}
		});
	}, []);

	return (
		<Text display={blocked}>Hello</Text>
	)
}

export default NavBar;