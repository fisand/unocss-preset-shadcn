import type { Theme } from 'unocss/preset-mini'
import { defineConfig, presetIcons, presetUno } from 'unocss'
import { presetExtra } from 'unocss-preset-extra'
import { presetShadcn } from './preset.shadcn'

export default defineConfig({
  presets: [presetUno(), presetIcons(), presetExtra(), presetShadcn()],
  shortcuts: [
    {
      'flex-center': 'flex justify-center items-center',
      'flex-col-center': 'flex flex-col justify-center items-center',
    },
  ],
  rules: [],
  theme: {} as Theme,
})
