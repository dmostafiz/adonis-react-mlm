import { useMediaQuery } from '@chakra-ui/react'

// interface queries {
//     isMobile: boolean,
//     isDesktop: boolean
// }


export default function mediaQuery() {
    const [isMobile] = useMediaQuery('(max-width:786px)')
    const [isDesktop] = useMediaQuery('(min-width:786px)')

    return (
        {
            isMobile, isDesktop
        }
    )
    
}

