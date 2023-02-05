import { StarIcon } from '@chakra-ui/icons'
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton, Button, useDisclosure , Text, Box , Image, SimpleGrid} from '@chakra-ui/react'
import { useState } from 'react'

function Modelrating({handleStarRating}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [star , setStar] = useState(0)

    const handleStar = (i)=>{
       setStar(i+1)
    }
  const handleChange = ()=>{
    setStar(0)
   onClose()
  }

  const handleRating =()=>{
    handleStarRating(star)
    onClose()
    setStar(0)
  }

    return (
      <Box >
         <Button  colorScheme='#2874f0' variant="solid" color="#ffffff" borderRadius="4px" mr="10px" mt="10px" backgroundColor="#2874f0" onClick={onOpen}>Rate Product</Button>
        <Modal  blockScrollOnMount={true} isOpen={isOpen} onClose={()=>handleChange()} size={{base:"xs", sm: "sm", md: "md", lg: "md" ,xl: "md",'2xl': "md",}}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Rate this Product</ModalHeader>
            <ModalCloseButton />
            {/* Body starts from here -------------------------------------------------------- */}

            <ModalBody >
            {Array(5)
            .fill('')
            .map((_, i) => (
              
            
              <StarIcon
                key={i}
                color={i < star ? 'teal.500' : 'gray.300'} 
                width="40px" height="40px" ml="5px" onClick={()=>handleStar(i)} cursor="pointer"
              />
             
            ))}
            </ModalBody>
            
            <ModalFooter>
            <Button  mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button variant='solid' colorScheme='#2874f0' backgroundColor="#2874f0" onClick={handleRating} isDisabled={star == 0} >Rate</Button>
          </ModalFooter>

          </ModalContent>
        </Modal>
      </Box>
    )
  }

export {Modelrating}
