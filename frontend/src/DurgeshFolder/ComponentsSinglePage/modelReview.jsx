import { StarIcon } from '@chakra-ui/icons'
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton, useDisclosure, Button, FormControl, FormLabel, Input, Select} from '@chakra-ui/react'
import { useState } from 'react' 
import { useReducer } from 'react'
 

const initialState = {
      review: "",
      title:"" ,
      image:"" ,
      like: 0 ,
      disLike: 0,
}
   
const reducer = (state , action)=>{
      switch(action.type){
        case "RATING":{
          return {...state , review:action.payload}
        }
        case "TITLE":{
          return{...state , title:action.payload} 
        }
        case "IMAGE":{
          return{...state , image:action.payload}
        }
        case "reset":
          return initialState ;
        default: return state ; 
      }
}


//  Reducer and initial State are up above -------------------------------------


function Modelreview({handleSubmit}) {
  const [state , dispatch] = useReducer(reducer , initialState)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [star , setStar] = useState(0)  
   


    const handleStar = (i)=>{
       setStar(i+1)
       dispatch({type:"RATING", payload:i+1})
       
    }

    const handleChange = ()=>{
       onClose()
      }
      
      const sendReview = ()=>{
        onClose()
        handleSubmit(state)
        dispatch({type:"reset"})
        setStar(0)


        // console.log(state)
      } 


    return (
      <>
        <Button colorScheme='#2874f0' borderRadius="4px"  mt="10px" backgroundColor="#2874f0" onClick={onOpen}>Write a review</Button>
  
        <Modal isOpen={isOpen} onClose={()=>handleChange()} size={{base:"xs", sm: "sm", md: "md", lg: "md" ,xl: "md",'2xl': "md",}} >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Help us to become better</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            
            <FormControl isRequired>
          <FormLabel>About product</FormLabel>
          <Input placeholder='About Product' value={state.title} onChange={(e)=>dispatch({type:"TITLE" ,payload:e.target.value})}  />

          <FormLabel mt="10px">Share Product Pic</FormLabel>
          <Input placeholder='URL' value={state.image} onChange={(e)=>dispatch({type:"IMAGE" ,payload:e.target.value})} />
           
          <FormLabel mt="10px">Rate us</FormLabel>
          {Array(5)
            .fill('')
            .map((_, i) => (
              
            
              <StarIcon
                key={i}
                color={i < star ? 'teal.500' : 'gray.300'} 
                width="20px" height="20px" mt="" onClick={()=>handleStar(i)} cursor="pointer"
              />
             
            ))}

           </FormControl>


            </ModalBody>
  
            <ModalFooter>
              <Button  mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='solid' disabled={state.review == 0 || state.title == "" } colorScheme='#2874f0' backgroundColor="#2874f0" onClick={sendReview} >Send</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export {Modelreview}