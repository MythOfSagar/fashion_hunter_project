import React, { useState } from 'react'
import { useEffect } from 'react'
import ShoppingItem from '../components/ShoppingItem'
import { Box, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"





const AdminPage = () => {
    const [data, setData] = useState([])

    const [currentItem, setCurrent] = useState({})

    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const getData = async () => {
        const url = "http://localhost:7777/data"
        const resp = await fetch(url)
        const data = await resp.json()
        setData(data)
    }

    const deleteItem = (id) => {
        fetch(`http://localhost:7777/data/${id}`, {
            method: 'DELETE'
        })
        setData(data.filter((item) => item.id !== id))
    }

    const EditData = (id) => {
        onOpen()
        setCurrent(data.filter((item) => item.id === id)[0])
        console.log(currentItem)
    }

    const handleChange = (e) => {

        currentItem[e.target.name] = e.target.value
        setCurrent({ ...currentItem })
    }

    const saveEdit = () => {
        setData(data.map((item) => {
            if (item.id === currentItem.id) { return currentItem }
            else {
                return item
            }
        }))
        fetch(`http://localhost:7777/data/${currentItem.id}`, {
            method: 'PATCH',
            body: JSON.stringify(currentItem),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
        onClose()
    }



    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <>
                <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Create your account</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel>Title</FormLabel>
                                <Input ref={initialRef} placeholder='Title'
                                    name='title'
                                    onChange={handleChange}
                                    value={currentItem.title} />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Brand</FormLabel>
                                <Input placeholder='Brand'
                                    name='brand'
                                    onChange={handleChange}
                                    value={currentItem.brand} />
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button
                                onClick={saveEdit}
                                colorScheme='blue' mr={3}>
                                Save
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
            {data.map((item) => <Box key={item.id}><Button onClick={() => EditData(item.id)}>Edit</Button> <ShoppingItem
                mainImage={item.mainImage}  
                color={item.color} 
                Images={item.Images}  
                categories={item.categories} 
                title={item.title} 
                price={item.price} 
                realPrice={item.realPrice} 
                description={item.description} 
                discount={item.discount}  
                brand={item.brand}
                onClick={() => deleteItem(item.id)}
            ></ShoppingItem></Box>)}
        </div>
    )
}

export default AdminPage


