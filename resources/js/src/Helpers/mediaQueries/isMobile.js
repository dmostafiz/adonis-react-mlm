import { useMediaQuery } from '@chakra-ui/react'

// interface queries {
//     isMobile: boolean,
//     isDesktop: boolean
// }


export default function isMobile() {
    const [isMobile] = useMediaQuery('(max-width:786px)')

    return isMobile
    
}

