import { AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, useDisclosure,
    Button,Text
  } from '@chakra-ui/react'
import React from 'react'

function CartDelete({id , handleDeleteProduct}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()

    const deleteProduct = ()=>{
        onClose()
        handleDeleteProduct(id)
    }
  
    return (
      <>
        <Text fontSize='16px' cursor="pointer" mt="8px"  onClick={onOpen} fontWeight="500" color="#727272" textAlign="left">REMOVE</Text> 

  
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Remove Item 
              </AlertDialogHeader>
  
              <AlertDialogBody>
              Are you sure you want to remove this item?
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme='#fb641b' background="#fb641b" onClick={deleteProduct} ml={3}>
                  Remove 
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }

  export {CartDelete}