import { defineCollection } from 'astro:content'

const docsCollection = defineCollection({})

export const collections = {
  docs: docsCollection,
}
