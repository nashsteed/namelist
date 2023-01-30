import { Button, FormControl, FormLabel, IconButton, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai"

const CreateNameModal = () => {
        const { isOpen, onOpen, onClose } = useDisclosure()
        const [name, setName] = useState("");
        const onSubmit = async (event) => {
            event.preventDefault();
            const req = await fetch("/api/create", {
                headers: {
                    'Content-Type': 'application/json'
                  },
                method: "POST", body: JSON.stringify({name})
            })
            if (req.status === 200){
                setName("")
                onClose()
            }
        }
        return (
          <>
            <IconButton icon={<AiOutlinePlus />} onClick={onOpen} colorScheme="blue" />
      
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent p="6">
                <ModalHeader>Create Name</ModalHeader>
                <ModalBody>
                  <Stack as="form" spacing="4" onSubmit={onSubmit}>
                    <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input onChange={(event) => setName(event.target.value)}
                                placeholder="Name"
                                value={name} required/>
                    </FormControl>
                    <Button colorScheme="blue" type="submit">Create Name</Button>
                  </Stack>
                </ModalBody>
      
              </ModalContent>
            </Modal>
          </>
        )
}

export default CreateNameModal;