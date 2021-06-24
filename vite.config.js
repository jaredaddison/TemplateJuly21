// @ts-nocheck
import Vue from '@vitejs/plugin-vue'
import LinkAttributes from 'markdown-it-link-attributes'
import Prism from 'markdown-it-prism'
import path from 'path'
import { defineConfig } from 'vite'
import ViteComponents from 'vite-plugin-components'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'
import Markdown from 'vite-plugin-md'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
  Pages({
    extensions: ['vue', 'md'],
    }),
  Layouts(),
  Markdown({
    wrapperClasses: 'prose prose-sm m-auto text-left',
    headEnabled: true,
    markdownItSetup(md) {
      md.use(Prism)
      md.use(LinkAttributes, {
      pattern: /^https?:\/\//,
      attrs: {
        target: '_blank',
        rel: 'noopener',
        },
      })
    },
  }),
  ViteComponents({
    extensions: ['vue', 'md'],
    customLoaderMatcher: id => id.endsWith('.md'),
    globalComponentsDeclaration: true,
    customComponentResolvers: [
        ViteIconsResolver({
          componentPrefix: '',
        }),
      ],
    }),
    ViteIcons(),
    WindiCSS({
      safelist: 'prose prose-sm m-auto text-left',
    }),
  ],
})