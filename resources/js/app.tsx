import '../css/app.css'
import { InertiaApp } from '@inertiajs/inertia-react'
import React from 'react'
import { render } from 'react-dom'
import {ChakraProvider} from '@chakra-ui/react'

const el = document.getElementById('app')

render(
    <ChakraProvider>
        <InertiaApp
            // Pass props from the server down to the client app
            initialPage={ JSON.parse(el?.dataset.page || '')}
            // Dynamically load the required page component
            resolveComponent={ (name) => import(`./src/Pages/${name}`).then((module) => module.default) }
    
            initialComponent={''}
        />
    </ChakraProvider>
    ,
    el
)