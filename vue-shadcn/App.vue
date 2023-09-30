<script setup lang="ts">
import ButtonDemo from './demo/ButtonDemo.vue'
import AccordionDemo from './demo/AccordionDemo.vue'
import AlertDemo from './demo/AlertDemo.vue'
import AlertDialogDemo from './demo/AlertDialogDemo.vue'
import AspectRatioDemo from './demo/AspectRatioDemo.vue';
import AvatarDemo from './demo/AvatarDemo.vue';
import BadgeDemo from './demo/BadgeDemo.vue';
</script>

<template>
  <div class="py-16 w-120 lt-sm:w-full lt-sm:px-4 mx-auto space-y-3.5">
    <AccordionDemo />
    <AlertDemo class="" />
    <AlertDialogDemo class="" />
    <AspectRatioDemo />
    <AvatarDemo />
    <BadgeDemo class="flex max-w-min" />
    <ButtonDemo />
  </div>
</template>
