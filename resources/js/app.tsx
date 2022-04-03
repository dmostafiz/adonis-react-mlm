import '../css/app.css'
import { InertiaApp } from '@inertiajs/inertia-react'
import React from 'react'
import { render } from 'react-dom'
import {ChakraProvider} from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react";
import 'regenerator-runtime/runtime'
// import { InertiaProgress } from '@inertiajs/progress'

import NProgress from 'nprogress'
import { Inertia } from '@inertiajs/inertia'


let timeout: any = null

Inertia.on('start', () => {
  timeout = setTimeout(() => NProgress.start(), 250)
})

Inertia.on('progress', (event) => {
  if (NProgress.isStarted() && event.detail.progress?.percentage) {
    NProgress.set((event.detail.progress?.percentage / 100) * 0.9)
  }
})

Inertia.on('finish', (event) => {
  clearTimeout(timeout)
  if (!NProgress.isStarted()) {
    return
  } else if (event.detail.visit.completed) {
    NProgress.done()
  } else if (event.detail.visit.interrupted) {
    NProgress.set(0)
  } else if (event.detail.visit.cancelled) {
    NProgress.done()
    NProgress.remove()
  }
})

function variantOutlined() {
  return ({
    field: {
      _focus: {
        borderColor: "var(--chakra-ui-focus-ring-color)",
        boxShadow: "0 0 0 0px var(--chakra-ui-focus-ring-color)"
      }
    }
  })
}

const variantFilled = () => ({
  field: {
    _focus: {
      borderColor: "var(--chakra-ui-focus-ring-color)",
      boxShadow: "0 0 0 0px var(--chakra-ui-focus-ring-color)"
    }
  }
});

const variantFlushed = () => ({
  field: {
    _focus: {
      borderColor: "var(--chakra-ui-focus-ring-color)",
      boxShadow: "0 0px 0 0 var(--chakra-ui-focus-ring-color)"
    }
  }
});

export const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false
  },
  styles: {
    global: {
      // Create a CSS variable with the focus ring color desired.
      // rgba function does not work here so use the hex value.
      // Either :host,:root or html work. body does not work for
      // button, checkbox, radio, switch.
      // html: {
      ":host,:root": {
        "--chakra-ui-focus-ring-color": "#553C9A"
      }
    }
  },
  shadows: {
    // This is also possible. Not sure I like inject this into
    // an existing theme section.
    // It creates a CSS variable named --chakra-shadows-focus-ring-color
    // 'focus-ring-color': 'rgba(255, 0, 125, 0.6)',
    outline: "0 0 0 0px var(--chakra-ui-focus-ring-color)"
  },
  components: {
    Input: {
      variants: {
        outline: variantOutlined,
        filled: variantFilled,
        flushed: variantFlushed
      }
    },
    Select: {
      variants: {
        outline: variantOutlined,
        filled: variantFilled,
        flushed: variantFlushed
      }
    },
    Textarea: {
      variants: {
        outline: () => variantOutlined().field,
        filled: () => variantFilled().field,
        flushed: () => variantFlushed().field
      }
    }
  }
});


// Just care about this

const el = document.getElementById('app')

render(

    <ChakraProvider theme={theme}>
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