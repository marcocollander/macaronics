import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import product from './schemas/product'

export default defineConfig({
  name: 'default',
  title: 'macaronics',

  projectId: '3104c6qw',
  dataset: 'macaronicsdata',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes.concat([product]),
  },
})
