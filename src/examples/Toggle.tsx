import { Toggle } from '@/components/ui/toggle'

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle italic">
      <span className="i-lucide:bold flex h-4 w-4" />
    </Toggle>
  )
}
