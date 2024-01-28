import type { HookParameters } from 'astro'

export default () => ({
  name: 'container-integration',
  hooks: {
    'astro:config:setup': ({
      injectScript,
    }: HookParameters<'astro:config:setup'>) => {
      injectScript('head-inline', './plugin.ts')
    },
  },
})
