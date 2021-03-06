/**
 * Feel free to let me know via PR,
 * if you find something broken in this config file.
 */

//  import { HttpContext } from '@adonisjs/core/build/standalone';
import { InertiaConfig } from '@ioc:EidelLev/Inertia';
//  import HttpContext from '@ioc:Adonis/Core/HttpContext'

/*
|--------------------------------------------------------------------------
| Inertia-AdonisJS config
|--------------------------------------------------------------------------
|
*/

export const inertia: InertiaConfig = {
  view: 'app',
  ssr: {
    enabled: false,
    mode: 'react', // can also be 'vue2', 'vue3', 'svelte'
    pageRootDir: 'js/src/Pages/', // Where inertia should look for page components
  }
};
