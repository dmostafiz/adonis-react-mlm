// @ts-ignore
import { Button, Flex, Icon, Input, useClipboard } from '@chakra-ui/react'
import React, { useState } from 'react'
import { HiClipboardCheck, HiClipboardCopy } from 'react-icons/hi'


export default function ReferralClipboard() {

    const [value, setValue] = useState('https://salient-demo.com/?ref_id=443535')
    const { hasCopied, onCopy } = useClipboard(value)

    return (
        <Flex mb={2}>
          <Input value={value} isReadOnly placeholder='Welcome' />
          <Button onClick={onCopy} ml={2} bg={hasCopied ? 'green.200' : 'whiteAlpha.300'}>
            {hasCopied ? <Icon as={HiClipboardCheck} h={6} w={6} color='green.500' />  : <Icon as={HiClipboardCopy} h={6} w={6} />}
          </Button>
        </Flex>
    )
}
