// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';

import {get} from '@loopback/rest';

export class SaludoController {
  constructor() {}

  //crear un servivio dentro del controlador
  //router.get(/saludar)
  @get('/saludar')
  
  saludar(): string{
    return 'Hola desde mi primer controlador loopback';
  }

}
