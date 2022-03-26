import { useMediaQuery } from '@chakra-ui/react'

// interface queries {
//     isMobile: boolean,
//     isDesktop: boolean
// }


export default function isDesktop() {
    const [isDesktop] = useMediaQuery('(min-width:786px)')

    return isDesktop
    
}

