import React, { useState } from 'react'
import { useEffect } from 'react'
import ShoppingItem from '../components/ShoppingItem'
import { Box, Button, FormControl, FormLabel, Grid, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Text, useDisclosure, useToast } from "@chakra-ui/react"
import { EditIcon, DeleteIcon, AddIcon } from "@chakra-ui/icons"



const AdminPage = () => {

    const dataUrl = "https://data-vercel-sagar1079.vercel.app/data/"

    // const dataUrl="http://localhost:7777/data/"

    const [data, setData] = useState([])

    let newProduct = {
        "id": data.length + 70,
        "rating": 0,
        "categories": "",
        "title": "",
        "price": 0,
        "realPrice": 0,
        "brand": "",
        "description": "",
        "color": "",
        "discount": "",
        "reviews": [
            "",
            ""
        ],
        "Images": [
            {
                "imageFront": ""
            },
            {
                "imageFront": ""
            },
            {
                "imageFront": ""
            }
        ],
        "mainImage": ""
    }

    const [currentItem, setCurrent] = useState(newProduct)
    const [status, setStatus] = useState(true)

    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const getData = async () => {
        const resp = await fetch(dataUrl)
        const data = await resp.json()
        setData(data)
    }

    const deleteItem = (id) => {
        fetch(`${dataUrl}${id}`, {
            method: 'DELETE'
        })
        setData(data.filter((item) => item.id !== id))
        toast({
            title: 'Product Deleted',
            position: 'top',
            description: "Product has been deleted successfully",
            status: 'success',
            duration: 1500,
            isClosable: true,
        })
    }

    const EditData = (id) => {
        setStatus(true)
        onOpen()
        setCurrent(data.filter((item) => item.id === id)[0])
    }

    const handleChange = (e) => {
        let type = e.target.name
        if (+(type) <= 3) {
            currentItem.Images[+(type)].imageFront = e.target.value
        }
        else { currentItem[type] = e.target.value }
        setCurrent({ ...currentItem })
    }

    const saveEdit = () => {
        if (status) {
            setData(data.map((item) => {
                if (item.id === currentItem.id) { return currentItem }
                else {
                    return item
                }
            }))
            fetch(`${dataUrl}${currentItem.id}`, {
                method: 'PATCH',
                body: JSON.stringify(currentItem),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => console.log(json));

            toast({
                title: `Edit Successfully`,
                position: 'top',
                description: `Product Details has been edited.`,
                status: 'success',
                duration: 1500,
                isClosable: true,
            })
        }
        else {
            setData([...data, currentItem])

            fetch(`${dataUrl}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(currentItem)
            })
                .then(response => response.json())
                .then(response => console.log(JSON.stringify(response)))

            setStatus(true)
            toast({
                title: `Added Successfully`,
                position: 'top',
                description: `New Product has been added.`,
                status: 'success',
                duration: 1500,
                isClosable: true,
            })
        }
        onClose()
    }

    const addProduct = () => {
        setStatus(false)
        setCurrent(newProduct)
        onOpen()
    }



    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <>
                <Modal
                    size={"xl"}
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalOverlay
                        bg='blackAlpha.300'
                        backdropFilter='blur(10px) hue-rotate(90deg)'
                    />
                    <ModalContent>
                        <ModalHeader>{status ? "Edit Product Details" : "Add New Product"}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <Box display={"flex"}>
                                <FormControl>
                                    <FormLabel>Title</FormLabel>
                                    <Input ref={initialRef} placeholder='Enter Title'
                                        name='title'
                                        onChange={handleChange}
                                        value={currentItem.title} />
                                </FormControl>

                            </Box>
                            <Box display={"flex"}>
                                <FormControl>
                                    <FormLabel>Brand</FormLabel>
                                    <Input ref={initialRef} placeholder='Enter Brand'
                                        name='brand'
                                        onChange={handleChange}
                                        value={currentItem.brand} />
                                </FormControl>

                                <FormControl>
                                    <FormLabel>Category</FormLabel>
                                    <Input placeholder='Enter Category'
                                        name='categories'
                                        onChange={handleChange}
                                        value={currentItem.categories} />
                                </FormControl>
                            </Box>
                            <Box display={"flex"}>
                                <FormControl>
                                    <FormLabel>Price</FormLabel>
                                    <Input ref={initialRef} placeholder='Enter Price'
                                        name='price'
                                        onChange={handleChange}
                                        value={currentItem.price} />
                                </FormControl>

                                <FormControl>
                                    <FormLabel>Real Price</FormLabel>
                                    <Input placeholder='Enter Real Price'
                                        name='realPrice'
                                        onChange={handleChange}
                                        value={currentItem.realPrice} />
                                </FormControl>
                            </Box>
                            <Box display={"flex"}>
                                <FormControl>
                                    <FormLabel>Discount</FormLabel>
                                    <Input ref={initialRef} placeholder='Enter Discount'
                                        name='discount'
                                        onChange={handleChange}
                                        value={currentItem.discount} />
                                </FormControl>

                                <FormControl>
                                    <FormLabel>Color</FormLabel>
                                    <Input placeholder='Enter Color'
                                        name='color'
                                        onChange={handleChange}
                                        value={currentItem.color} />
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl>
                                    <FormLabel>Discription</FormLabel>
                                    <Input ref={initialRef} placeholder='Enter Discription'
                                        name='description'
                                        onChange={handleChange}
                                        value={currentItem.description} />
                                </FormControl>

                            </Box>
                            <Box>
                                <FormControl>
                                    <FormLabel>Main Image</FormLabel>
                                    <Input ref={initialRef} placeholder='Enter Main Image URL'
                                        name='mainImage'
                                        onChange={handleChange}
                                        value={currentItem.mainImage} />
                                </FormControl>

                            </Box>
                            <Box display={"flex"}>
                                <FormControl>
                                    <FormLabel>Side Image 1</FormLabel>
                                    <Input ref={initialRef} placeholder='Enter URL'
                                        name='0'
                                        onChange={handleChange}
                                        value={currentItem.Images[0].imageFront} />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Side Image 2</FormLabel>
                                    <Input ref={initialRef} placeholder='Enter URL'
                                        name='1'
                                        onChange={handleChange}
                                        value={currentItem.Images[1].imageFront} />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Side Image 3</FormLabel>
                                    <Input placeholder='Enter URL'
                                        name="2"
                                        onChange={handleChange}
                                        value={currentItem.Images[2].imageFront} />
                                </FormControl>
                            </Box>
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
            <Box>
                <Spacer></Spacer>
                <Box></Box>
                <Box

                    margin={"auto"}
                    marginBottom={5}
                >
                    <Heading marginBottom={10} fontSize={60} color="blue">Admin Panel</Heading>

                    <Button
                        onClick={addProduct}
                        leftIcon={<AddIcon />} colorScheme='orange'>Add New Product</Button>
                </Box>
                <Spacer></Spacer>
                <Box></Box>
            </Box>

            <Box width={{ base: '90%', md: '80%', lg: '70%' }}

                margin={"auto"}
                alignContent={"center"}>
                <Grid
                    margin={"auto"}



                    templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
                    gap={4}>
                    {data.map((item) => <Box
                        justifySelf={"center"}
                        justifyItems={"center"}
                        justifyContent={"center"}
                        alignContent={"center"}
                        alignItems={"center"}
                        alignSelf={"center"}
                        margin={"auto"}



                        key={item.id} > <ShoppingItem
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
                        ></ShoppingItem>
                        <Box display={"flex"}
                            margin={3}
                            alignItems='center'
                            justifyContent='center'
                            gap={10}
                        >
                            <Button colorScheme='blue' leftIcon={<EditIcon />} onClick={() => EditData(item.id)}>Edit</Button>
                            <Button colorScheme='red' leftIcon={<DeleteIcon />} onClick={() => deleteItem(item.id)}>Delete</Button>
                        </Box>

                    </Box>)}
                </Grid>
            </Box>
        </div>
    )
}

export default AdminPage


