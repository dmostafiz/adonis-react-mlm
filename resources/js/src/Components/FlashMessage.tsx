import { useToast } from '@chakra-ui/react'
import React from 'react'
export default function FlashMessages({ flash, type }: any) {

    const toast = useToast()
    const id = 'test-toast'
    return (
        <>

            {
                !toast.isActive(id) &&
                toast({
                    id,
                    title: type == 'success' ? 'Success' : 'Error',
                    description: flash,
                    status: type,
                    isClosable: true,
                })
            }
        </>
    )
}