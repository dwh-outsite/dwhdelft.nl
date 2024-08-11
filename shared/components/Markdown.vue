<script setup>
// This component is used to render simple markdown content.
// For rendering Markdown documents, we use the `@nuxt/content` module.
// So, check that out if you need to render Markdown documents.
// If an actual `@nuxt/content` document is passed, we render it as is.

import markdownParser from '@nuxt/content/transformers/markdown'

const props = defineProps({
  content: { type: String, required: true }
})

const parsedMarkdown = props.content._type === 'markdown' ? props.content : await markdownParser.parse('custom.md', props.content)
</script>

<template>
  <ContentRendererMarkdown :value="parsedMarkdown" class="content" />
</template>
