import { defineConfig, presetIcons, presetUno, presetWind } from 'unocss'
import { presetExtra } from 'unocss-preset-extra'

export default defineConfig({
  presets: [presetUno(), presetWind(), presetIcons(), presetExtra()],
  shortcuts: [
    {
      'flex-center': 'flex justify-center items-center',
      'flex-col-center': 'flex flex-col justify-center items-center',
    },
  ],
  rules: [
    ['accordion-down', {
      animation: 'accordion-down 0.2s ease-out'
    }]
  ],
  theme: {
    animation: {
      keyframes: {
        "accordion-down": '{from{ height: 0 }to{ height: var(--radix-accordion-content-height)}}',
        "accordion-up": '{from{ height: var(--radix-accordion-content-height)}to{ height: 0 }}',
      },
      durations: {
        DEFAULT: '0.2s',
        'pulse': '2s',
        'heart-beat': '1.3s',
        'bounce-in': '0.75s',
        'bounce-out': '0.75s',
        'flip-out-x': '0.75s',
        'flip-out-y': '0.75s',
        'hinge': '2s',
      },
      timingFns: {
        DEFAULT: 'ease-out',
        'pulse': 'cubic-bezier(0.4,0,.6,1)',
        'ping': 'cubic-bezier(0,0,.2,1)',
        'head-shake': 'ease-in-out',
        'heart-beat': 'ease-in-out',
        'pulse-alt': 'ease-in-out',
        'light-speed-in-left': 'ease-out',
        'light-speed-in-right': 'ease-out',
        'light-speed-out-left': 'ease-in',
        'light-speed-out-right': 'ease-in',
      },
    },
  }
})
