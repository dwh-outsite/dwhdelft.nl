<script setup>
// This component is used to render simple markdown content.
// For rendering Markdown documents, we use the `@nuxt/content` module.
// So, check that out if you need to render Markdown documents.
// If an actual `@nuxt/content` document is passed, we render it as is.

import markdownParser from '@nuxt/content/transformers/markdown'

const props = defineProps({
  content: { type: String, required: true },
  darkBackground: { type: Boolean, default: false }
})

const parsedMarkdown = props.content._type === 'markdown' ? props.content : await markdownParser.parse('custom.md', props.content)
</script>

<template>
  <ContentRendererMarkdown :value="parsedMarkdown" class="content" :class="{ 'dark-background': darkBackground }" />
</template>

<style>
.content h1 {
  @apply font-bold mt-6 mb-1 text-2xl;
}

.content h2 {
  @apply font-bold mt-2 mb-1 text-xl;
}

.content h3 {
  @apply font-bold;
}

.content p {
  @apply mb-4;
}

.content img {
  @apply mb-4;
}

.content h1 > a:hover, h2 > a:hover, h3 > a:hover, h4 > a:hover, h5 > a:hover, h6 > a:hover {
  @apply underline
}

.content p a {
  @apply text-brand-600;
}

.content p a:hover {
  @apply text-brand-800 underline;
}

.content.dark-background p a {
  @apply text-white font-bold;
}

.content ul {
  @apply mb-3 -mt-3;
}

.content li {
  @apply list-disc mb-1 ml-6;
}

.content table th, td {
  @apply pr-4
}
</style>
