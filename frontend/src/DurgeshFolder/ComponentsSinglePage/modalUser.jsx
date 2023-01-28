import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton, Button, useDisclosure , Text, Box , Image, SimpleGrid} from '@chakra-ui/react'
// #ffffff
function Modaluser({data}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <Box>
        <Box position="absolute" left={{base:"180px", sm: "242px", md: "242px", lg: "242px" ,xl: "236px",'2xl': "240px",}} top={{base:"8px", sm: "15px", md: "15px", lg: "15px" ,xl: "15px",'2xl': "15px",}}  fontSize="24px" fontWeight={800} color="#ff6161"  cursor="pointer">
       {data.length > 4 &&  <Text  onClick={onOpen}>+{data.length-4}</Text> }
        </Box>
        <Modal  blockScrollOnMount={true} isOpen={isOpen} onClose={onClose} size={{base:"xs", sm: "sm", md: "md", lg: "md" ,xl: "md",'2xl': "md",}} >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>User Images ({data.length})</ModalHeader>
            <ModalCloseButton />
            {/* Body starts from here -------------------------------------------------------- */}

            <ModalBody >
            <SimpleGrid columns={{base:"4", sm: "5", md: "5", lg: "6" ,xl: "6",'2xl': "6",}} spacing={1}>
             {data.length > 0 && data?.map((item , i)=>{
              return (
               <Box key={i} >
                <Image src={item} alt={i}  boxSize={{base:"70x", sm: "70px", md: "80px", lg: "80px" ,xl: "80px",'2xl': "80px",}} />
                </Box>
                
              )
             })}
            </SimpleGrid>
            </ModalBody>

          </ModalContent>
        </Modal>
      </Box>
    )
  }

export {Modaluser}
