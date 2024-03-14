import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { remarkReadingTime } from './src/utils/readTime.ts'
import node from '@astrojs/node'
import { config } from 'dotenv'
import vercel from '@astrojs/vercel/serverless'

config()

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: vercel(),
  base: '',
  site: process.env.BASE_URL, // Write here your website url
  markdown: {
    remarkPlugins: [remarkReadingTime],
    drafts: true,
    shikiConfig: {
      theme: 'material-theme-palenight',
      wrap: true,
    },
  },
  integrations: [sitemap(), tailwind()],
})
