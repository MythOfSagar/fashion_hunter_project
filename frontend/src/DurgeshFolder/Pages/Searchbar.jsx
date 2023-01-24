import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../../components/Navbar'
import { Search } from '../ComponentsSearchbar/Search'


const Searchbar = () => {
  return (
    <Box>
        <Navbar />
        {/* CODES START FROM HERE --------------------------- */}
        <Box >
             <Search />
      </Box>
    </Box>
  )
}

export  {Searchbar}
