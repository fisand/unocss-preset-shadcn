import { defineConfig, presetIcons, presetUno } from 'unocss'
import { presetExtra } from 'unocss-preset-extra'
import { Theme } from 'unocss/preset-mini'

export default defineConfig({
  presets: [presetUno(), presetIcons(), presetExtra()],
  shortcuts: [
    {
      'flex-center': 'flex justify-center items-center',
      'flex-col-center': 'flex flex-col justify-center items-center',
    },
  ],
  rules: [
    [
      'accordion-down',
      {
        animation: 'down 0.2s ease-out',
      },
    ],
    [
      'accordion-up',
      {
        animation: 'up 0.2s ease-out',
      },
    ],
    [
      'animate-in',
      {
        'animation-name': 'enter',
        'animation-duration': '150ms',
        '--un-enter-opacity': 'initial',
        '--un-enter-scale': 'initial',
        '--un-enter-rotate': 'initial',
        '--un-enter-translate-x': 'initial',
        '--un-enter-translate-y': 'initial',
      },
    ],
    [/^fade-in-(\d+)$/, ([, d]) => ({ '--un-enter-opacity': `${Number(d) / 100}` })],
    [/^slide-in-from-bottom-(\d+)$/, ([, d]) => ({ '--un-enter-translate-y': `${Number(d) / 4}rem` })]
  ],
  theme: {
    animation: {
      keyframes: {
        down: '{from{ height: 0 }to{ height: var(--radix-accordion-content-height)}}',
        up: '{from{ height: var(--radix-accordion-content-height)}to{ height: 0 }}',
        enter:
          '{ from{ opacity: var(--un-enter-opacity, 1); transform: translate3d(var(--un-enter-translate-x, 0), var(--un-enter-translate-y, 0), 0) scale3d(var(--un-enter-scale, 1), var(--un-enter-scale, 1), var(--un-enter-scale, 1)) rotate(var(--un-enter-rotate, 0)) } }',
        exit: '{ to{ opacity: var(--un-exit-opacity, 1); transform: translate3d(var(--un-exit-translate-x, 0), var(--un-exit-translate-y, 0), 0) scale3d(var(--un-exit-scale, 1), var(--un-exit-scale, 1), var(--un-exit-scale, 1)) rotate(var(--un-exit-rotate, 0)) } }',
      },
      durations: {
        DEFAULT: '.2s',
      },
    },
  } as Theme,
})
