import { Box, Button, Heading, HStack, Image, Input, Link, Text, Theme, VStack } from '@chakra-ui/react';
import { PasswordInput } from '../components/ui/password-input';
import { FaUser } from "react-icons/fa";
import React, { useState, useEffect } from 'react';

const LoginPage = () => {
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        setLoginForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} w={'100%'} h={'100vh'}>
            {/* Main content */}
            {/* <Box w={'70%'} bgColor={'white'} h={'70vh'} borderRadius={'25px'}> */}
                <HStack gap={0} w={'70%'} h={'70vh'}>
                    {/* Left Image */}
                    <Image 
                        src='https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm00NTUtMjAwMWEteC5qcGc.jpg' 
                        w={'60%'}
                        h={'70vh'}
                        borderLeftRadius={'20px'}
                    />

                    {/* Right Form Area */}
                    <Box 
                        w={'40%'} 
                        h={'70vh'} 
                        textAlign={'center'} 
                        display={'flex'} 
                        justifyContent={'center'} 
                        alignItems={'center'} 
                        bgColor={'white'}
                        borderRightRadius={20}
                    >
                        <Box w={'100%'}  px={10} color={'black'}>
                            <Heading size={'4xl'} mb={10} fontWeight={'bold'}>Login</Heading>
                            <Theme appearance='light'>
                                <VStack gap={3}>
                                    <Input 
                                        placeholder='Enter Username' 
                                        name={'username'} 
                                        onChange={handleChange} 
                                        value={loginForm.username} 
                                    />
                                    <PasswordInput 
                                        placeholder='Enter Password' 
                                        name={'password'} 
                                        onChange={handleChange} 
                                        value={loginForm.password} 
                                    />
                                    <Button>Login</Button>
                                    <Text>
                                        Don't have an account? {' '}
                                        <Link href='/register' variant={'underline'} textDecoration={'underline'}>Register</Link>
                                    </Text>
                                </VStack>
                            </Theme>
                        </Box>
                    </Box>
                </HStack>
            {/* </Box> */}
        </Box>
    )
}

export default LoginPage;