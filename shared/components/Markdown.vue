<script setup>
// This component is used to render simple markdown content.
// For rendering Markdown documents, we use the `@nuxt/content` module.
// So, check that out if you need to render Markdown documents.
// If an actual `@nuxt/content` document is passed, we render it as is.

import markdownParser from '@nuxt/content/transformers/markdown'

const props = defineProps({
  content: { type: String, required: true },
  darkBackground: { type: Boolean, default: false },
})

let renderableContent = ''
if (props.content?._type === 'markdown') {
  renderableContent = props.content
} else {
  try {
    renderableContent = await markdownParser.parse('custom.md', props.content)
  } catch (error) {
    console.error(`Error parsing markdown content: ${error}`)
  }
}
</script>

<template>
  <ContentRendererMarkdown :value="renderableContent" class="content" :class="{ 'dark-background': darkBackground }" />
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

.content h1 > a,
.content h2 > a,
.content h3 > a,
.content h4 > a,
.content h5 > a,
.content h6 > a {
  @apply text-inherit;
}

.content h1 > a:hover,
.content h2 > a:hover,
.content h3 > a:hover,
.content h4 > a:hover,
.content h5 > a:hover,
.content h6 > a:hover {
  @apply underline;
}

.content a {
  @apply text-brand-600;
}

.content a:hover {
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

.content table th,
td {
  @apply pr-4;
}
</style>
