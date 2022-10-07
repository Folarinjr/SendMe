import React from 'react'
import Link from 'next/link'
import {ArrowBackIcon} from '@chakra-ui/icons'
import { Box, Text, Divider, Flex, Button, Center } from '@chakra-ui/react'

const next = () => {
  return (
    <Box width={{sm:'100%', md: '80%',lg:'40%'}} mx='auto' p={10} bg={'gray.100'}>
        <Link href={'/'}>
            <ArrowBackIcon
                color={'gray.600'}
                w={12} h={8}
            />
        </Link>
        <Text fontSize='2xl' mt={2}>Order Information</Text>
        <Text fontSize='lg' mt={2} color={'gray.500'}>Here is your order details. Kindly confirm before you proceed to pay</Text>
        <Divider orientation='horizontal' borderWidth={'1px'} color={'gray.200'} mt={8}/>
        <Text mt={5}>Phone Number</Text>
        <Text mt={2} color={'gray.500'}>09076857432</Text>
        <Text mt={3}>Delivery Address</Text>
        <Text mt={2} color={'gray.500'}>No 26, Agbowo opposite Agbowo shopping complex</Text>

        <Box mt={8} bg={'white'} borderRadius={8} pt={8} pr={8} pl={4}>
            <Text>Products Ordered</Text>
            <Box mt={5}>
                <Flex justify={'space-between'}>
                    <Text>Lorem ipsum dolor sit amet.</Text>
                    <Text>&#8358;{(8000).toLocaleString()}</Text>
                </Flex>
            </Box>
            <Box mt={5}>
                <Flex justify={'space-between'}>
                    <Text>Lorem ipsum dolor sit amet.</Text>
                    <Text>&#8358;{(8000).toLocaleString()}</Text>
                </Flex>
            </Box>
            <Box mt={5}>
                <Flex justify={'space-between'}>
                    <Text>Subtotal</Text>
                    <Text>&#8358;{(8000).toLocaleString()}</Text>
                </Flex>
            </Box>

            <Divider orientation='horizontal' borderWidth={'1px'} color={'gray.200'} mt={5}/>

            <Box>
                <Flex justify={'space-between'} mt={5} color={'gray.500'}>
                    <Text>Subtotal</Text>
                    <Text>&#8358;{(8000).toLocaleString()}</Text>
                </Flex>

                <Flex justify={'space-between'} mt={4} color={'gray.500'}>
                    <Text>Delivery Fee</Text>
                    <Text>&#8358;{(300).toLocaleString()}</Text>
                </Flex>

                <Flex justify={'space-between'} mt={4} pb={5}>
                    <Text>Total</Text>
                    <Text>&#8358;{(8300).toLocaleString()}</Text>
                </Flex>
            </Box>

        </Box>
        <Center mt={5}>
            <Button
                colorScheme='red'
                size={'lg'}
                width={'80%'}
                display='flex'
                justifyContent={'center'}
            >
                MAKE PAYMENT
            </Button>
        </Center>
    </Box>
  )
}

export default next