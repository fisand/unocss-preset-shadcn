import { defineConfig, presetIcons, presetUno, presetWind } from 'unocss'
import { presetExtra } from 'unocss-preset-extra'

export default defineConfig({
  presets: [presetUno(), presetIcons(), presetExtra()],
  shortcuts: [
    {
      'flex-center': 'flex justify-center items-center',
      'flex-col-center': 'flex flex-col justify-center items-center',
    },
  ],
  rules: [],
  theme: {
    animation: {
      keyframes: {
        "accordion-down": '{from{ height: 0 }to{ height: var(--radix-accordion-content-height)}}',
        "accordion-up": '{from{ height: var(--radix-accordion-content-height)}to{ height: 0 }}',
      },
    },
  }
})
