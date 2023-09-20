<script setup lang="ts">
import {
  AccordionHeader,
  AccordionTrigger,
  type AccordionTriggerProps,
} from 'radix-vue'
import { cn } from '../../lib/utils'

const props = defineProps<AccordionTriggerProps & { class?: string }>()
</script>

<template>
  <AccordionHeader class="flex" as="div">
    <AccordionTrigger
      v-bind="props"
      :class="
        cn(
          'flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
          props.class,
        )
      "
    >
      <slot />
      <span
        class="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 i-lucide:chevron-down"
      />
    </AccordionTrigger>
  </AccordionHeader>
</template>