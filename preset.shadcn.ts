import type { Preset } from 'unocss'
import type { PresetMiniOptions, Theme } from 'unocss/preset-mini'

export interface PresetShadcnOptions extends PresetMiniOptions {}

export function presetShadcn(options: PresetShadcnOptions = {}): Preset<Theme> {
  return {
    name: 'unocss-preset-shadcn',
    preflights: [
      {
        getCSS: () => `
          @keyframes shadcn-down { from{ height: 0 } to { height: var(--radix-accordion-content-height)} }
          @keyframes shadcn-up { from{ height: var(--radix-accordion-content-height)} to { height: 0 } }
          @keyframes shadcn-enter { from{ opacity: var(--un-enter-opacity, 1); transform: translate3d(var(--un-enter-translate-x, 0), var(--un-enter-translate-y, 0), 0) scale3d(var(--un-enter-scale, 1), var(--un-enter-scale, 1), var(--un-enter-scale, 1)) rotate(var(--un-enter-rotate, 0)) } }
          @keyframes shadcn-exit { to{ opacity: var(--un-exit-opacity, 1); transform: translate3d(var(--un-exit-translate-x, 0), var(--un-exit-translate-y, 0), 0) scale3d(var(--un-exit-scale, 1), var(--un-exit-scale, 1), var(--un-exit-scale, 1)) rotate(var(--un-exit-rotate, 0)) } }
        `,
      },
    ],
    rules: [
      [
        'accordion-down',
        {
          animation: 'shadcn-down 0.2s ease-out',
        },
      ],
      [
        'accordion-up',
        {
          animation: 'shadcn-up 0.2s ease-out',
        },
      ],
      [
        'animate-in',
        {
          'animation-name': 'shadcn-enter',
          'animation-duration': 'var(--un-animate-duration)',
          '--un-animate-duration': '150ms',
          '--un-enter-opacity': 'initial',
          '--un-enter-scale': 'initial',
          '--un-enter-rotate': 'initial',
          '--un-enter-translate-x': 'initial',
          '--un-enter-translate-y': 'initial',
        },
      ],
      [
        'animate-out',
        {
          'animation-name': 'shadcn-exit',
          'animation-duration': 'var(--un-animate-duration)',
          '--un-animate-duration': '150ms',
          '--un-exit-opacity': 'initial',
          '--un-exit-scale': 'initial',
          '--un-exit-rotate': 'initial',
          '--un-exit-translate-x': 'initial',
          '--un-exit-translate-y': 'initial',
        },
      ],
      [/^fade-in-?(\d+)?$/, ([, d]) => ({ '--un-enter-opacity': `${Number(d ?? 0) / 100}` })],
      [/^fade-out-?(\d+)?$/, ([, d]) => ({ '--un-exit-opacity': `${Number(d ?? 0) / 100}` })],
      [/^zoom-in-?(\d+)?$/, ([, d]) => ({ '--un-enter-scale': `${Number(d ?? 0) / 100}` })],
      [/^zoom-out-?(\d+)?$/, ([, d]) => ({ '--un-out-scale': `${Number(d ?? 0) / 100}` })],
      [/^spin-in-?(\d+)?$/, ([, d]) => ({ '--un-enter-rotate': `${Number(d ?? 0)}deg` })],
      [/^spin-out-?(\d+)?$/, ([, d]) => ({ '--un-exit-rotate': `${Number(d ?? 0)}deg` })],
      [/^slide-in-from-top-?(\d+)?$/, ([, d]) => ({ '--un-enter-translate-y': typeof d === 'undefined' ? '-100%' : `-${Number(d) / 4}rem` })],
      [/^slide-in-from-bottom-?(\d+)?$/, ([, d]) => ({ '--un-enter-translate-y': typeof d === 'undefined' ? '100%' : `${Number(d) / 4}rem` })],
      [/^slide-in-from-left-?(\d+)?$/, ([, d]) => ({ '--un-enter-translate-x': typeof d === 'undefined' ? '-100%' : `-${Number(d) / 4}rem` })],
      [/^slide-in-from-right-?(\d+)?$/, ([, d]) => ({ '--un-enter-translate-x': typeof d === 'undefined' ? '100%' : `${Number(d) / 4}rem` })],
      [/^slide-out-from-top-?(\d+)?$/, ([, d]) => ({ '--un-exit-translate-y': typeof d === 'undefined' ? '-100%' : `-${Number(d) / 4}rem` })],
      [/^slide-out-from-bottom-?(\d+)?$/, ([, d]) => ({ '--un-exit-translate-y': typeof d === 'undefined' ? '100%' : `${Number(d) / 4}rem` })],
      [/^slide-out-from-left-?(\d+)?$/, ([, d]) => ({ '--un-exit-translate-x': typeof d === 'undefined' ? '-100%' : `-${Number(d) / 4}rem` })],
      [/^slide-out-from-right-?(\d+)?$/, ([, d]) => ({ '--un-exit-translate-x': typeof d === 'undefined' ? '100%' : `${Number(d) / 4}rem` })],
    ],
  }
}

export default presetShadcn
