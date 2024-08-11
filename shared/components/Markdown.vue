<script setup>
// This component is used to render simple markdown content.
// For rendering Markdown documents, we use the `@nuxt/content` module.
// So, check that out if you need to render Markdown documents.

import markdownParser from '@nuxt/content/transformers/markdown'

const props = defineProps({
  content: { type: String, required: true }
})

const parsedMarkdown = await markdownParser.parse('custom.md', props.content)
</script>

<template>
  <ContentRendererMarkdown :value="parsedMarkdown" class="markdown-content" />
</template>

<style>
.markdown-content a {
  @apply text-brand-500;
}

.markdown-content a:hover {
  @apply underline;
}
</style>
