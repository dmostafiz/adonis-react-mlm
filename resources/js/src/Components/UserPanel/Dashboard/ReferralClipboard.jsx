import { Button, Flex, Icon, Input, useClipboard } from '@chakra-ui/react'
import { usePage } from '@inertiajs/inertia-react'
import React, { useState } from 'react'
import { HiClipboardCheck, HiClipboardCopy } from 'react-icons/hi'


export default function ReferralClipboard() {
  const { authUser } = usePage().props

  const [value] = useState(`${window.location.protocol}//${window.location.hostname}/?ref_id=${authUser.ref_id}`)
  const { hasCopied, onCopy } = useClipboard(value)

  return (
    <Flex mb={2}>
      <Input value={value} isReadOnly placeholder='Welcome' />
      <Button onClick={onCopy} ml={2} bg={hasCopied ? 'green.200' : 'whiteAlpha.300'}>
        {hasCopied ? <Icon as={HiClipboardCheck} h={6} w={6} color='green.500' /> : <Icon as={HiClipboardCopy} h={6} w={6} />}
      </Button>
    </Flex>
  )
}
