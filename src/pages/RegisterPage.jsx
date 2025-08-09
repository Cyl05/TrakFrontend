import { Box, Button, Heading, HStack, Image, Input, Link, Text, Theme, VStack } from '@chakra-ui/react';
import { PasswordInput } from '../components/chakra-comps/password-input';
import { Toaster, toaster } from '../components/chakra-comps/toaster';
import React, { useEffect, useState } from 'react';

const RegisterPage = () => {
    const [registerForm, setRegisterForm] = useState({
        username: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setRegisterForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const isPasswordInvalid = () => {
        if (registerForm.password !== registerForm.confirmPassword && registerForm.confirmPassword !== '' && registerForm.password !== '') {
            toaster.create({
                title: "Passwords do not match",
                type: 'error',
                closable: true,
            });
            return true;
        }
        return false;
    };

    const validateSubmit = () => {
        if (registerForm.password === '' || registerForm.confirmPassword === '' || registerForm.username === '') {
            toaster.create({
                title: "Fill all fields",
                type: 'error',
                closable: true,
            });
            return true;
        }
        return false;
    }

    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} w={'100%'} h={'100vh'}>
            <HStack gap={0} w={'70%'} h={'70vh'}>
                <Toaster />
                {/* Left Form Area */}
                <Box
                    w={'40%'}
                    h={'70vh'}
                    textAlign={'center'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    bgColor={'white'}
                    borderLeftRadius={20}
                >
                    <Box w={'100%'} px={10} color={'black'}>
                        <Heading size={'3xl'} mb={10} fontWeight={'bold'}>Register</Heading>
                        <Theme appearance='light'>
                            <VStack gap={3}>
                                <Input
                                    placeholder='Enter Username'
                                    name={'username'}
                                    onChange={handleChange}
                                    value={registerForm.username}
                                />
                                <PasswordInput
                                    placeholder='Enter Password'
                                    name={'password'}
                                    onChange={handleChange}
                                    value={registerForm.password}
                                    onBlur={isPasswordInvalid}
                                />
                                <PasswordInput
                                    placeholder='Confirm Password'
                                    name={'confirmPassword'}
                                    onChange={handleChange}
                                    value={registerForm.confirmPassword}
                                    onBlur={isPasswordInvalid}
                                />
                                <Button colorScheme="blue" w="100%" onClick={validateSubmit}>Register</Button>
                                <Text>
                                    Already have an account? {' '}
                                    <Link href='/login' variant={'underline'} textDecoration={'underline'}>Login</Link>
                                </Text>
                            </VStack>
                        </Theme>
                    </Box>
                </Box>

                {/* Right Image */}
                <Image
                    src='https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm00NTUtMjAwMWEteC5qcGc.jpg'
                    w={'60%'}
                    h={'70vh'}
                    objectFit={'cover'}
                    borderRightRadius={'20px'}
                />
            </HStack>
        </Box>
    )
}

export default RegisterPage;
