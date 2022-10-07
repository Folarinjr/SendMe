import type { NextPage } from 'next'
import Link from 'next/link'
import {useForm} from 'react-hook-form'
import React, {useState, useContext} from 'react'
import {data} from '../components/data/Data'

import { SendMeContext } from '../context/SendMeContext'

import { Box, Button, Flex, Select, Input,  Checkbox } from '@chakra-ui/react'

interface Item {
  id: number;
  selected: boolean;
}

const Home: NextPage = () => {
  const {handleSubmit} = useForm();
  const {orderItems, setOrderItems, setTotal} = useContext(SendMeContext);

  const [checkedState, setCheckedState] = useState<Item[]>(
    data.map((el) => ({ id: el.id, selected: false }))
  );



  //On Change Function
  const handleChange = (id: number) => {
    const newState = checkedState.filter((item) => item.id === id);
    if (newState.length === 0) {
      throw new Error("Something went wrong");
    }
    const updatedObject = newState[0];
    const arr = [...checkedState];
    const arrayPosition = id - 1;
    arr[arrayPosition] = {
      ...updatedObject,
      selected: !updatedObject.selected
    };
    setCheckedState(arr);
    const ids = arr.map((value) => (value.selected ? value.id : null));
    const selectedItems = data.filter((el) => ids.includes(el.id));
    setOrderItems(selectedItems);
    const totalPrice = selectedItems.reduce((sum, curr) => {
      return curr.price > 0 ? sum + curr.price : sum;
    }, 0);

    setTotal(totalPrice);
  }


  //On Submit Function
  const onSubmit = () => {
    if(orderItems.length < 1) {
      alert('Please Select Atleast One Item, Thanks');
      return;
    }
  }


  return (
    <Box
      mx='auto'
      pt={20}
    >
      <Box width={{sm:'100%', md: '80%',lg:'40%'}} mx='auto' p={10}>
        <Flex align='center' justifyContent={'space-between'} mb={5}>
          <h3>New Order</h3>
          <Link href={orderItems.length ? '/Next' : '/'}>
            <Button 
              colorScheme='red'
              variant={'solid'}
              size='sm'
              onClick={onSubmit}
            >
              NEXT
            </Button>
          </Link>
        </Flex>
        <Box mb={5} color='gray.500'>
          <h4>SELECT PRODUCTS</h4>
        </Box>
        <Box display={'flex'} justifyContent='space-between' mb={50}>
          <Select placeholder='COW' color={'red.400'} borderColor={'red.200'} bg={'red.100'} size='sm' width={'25%'} fontSize='17' borderRadius={10}/>
          <Input placeholder='Search' size={'sm'} borderRadius={10} width={'70%'}/>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          {data.map(({ name, price }, index) => {
            return (
              <Flex 
                key={index}
                justify={'space-between'}
                align={'center'}
                grow={1}
                p={3}
                /* bg='blue.200' */
              >
                <Box
                  display={'flex'}
                  //justifyContent='space-between'
                  alignItems={'center'}
                  w={'50%'}
                  /* bg='red' */
                >
                  <Checkbox
                    colorScheme={'red'}
                    color='gray.600'
                    size='lg'
                    spacing='1.2rem'
                    name={name}
                    value={name}
                    checked={checkedState[index].selected}
                    onChange={() => handleChange(index + 1)}
                  >
                    {name}
                  </Checkbox>
                </Box>
                <Box>&#8358;{(price).toLocaleString()}</Box>
              </Flex>
              );
            })}
        </form>
      </Box>
    </Box>
  )
}

export default Home
