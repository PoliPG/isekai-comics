import type { HookParameters } from 'astro'

export default () => ({
  name: 'container-integration',
  hooks: {
    'astro:server:setup': ({}: HookParameters<'astro:server:setup'>) => {},
  },
})
