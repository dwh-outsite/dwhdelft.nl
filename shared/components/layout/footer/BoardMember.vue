<script setup>
defineProps({
  name: { type: String, required: true },
  pronouns: { type: String, required: false },
  role: { type: String, required: true },
  email: { type: String, required: true },
})

const nameAsImage = (name, pronouns) => {
  const image = `
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="20">
      <foreignObject width="100%" height="100%" x="0" y="0" externalResourcesRequired="true">
        <span xmlns="http://www.w3.org/1999/xhtml" style="
          color: rgb(255, 255, 255);
          font: 16px / 20px &quot;Source Sans Pro&quot;, -apple-system, system-ui, &quot;Segoe UI&quot;,
                Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif;
          font-kerning: auto;
          font-optical-sizing: auto;
          word-spacing: 1px;
          ">
          <strong>${name}</strong>
          <span style="color: rgb(180, 171, 183); font-size: 12px;">${pronouns}</span>
        </span>
      </foreignObject>
    </svg>
  `

  return `data:image/svg+xml;charset=utf-8;base64,${btoa(image)}`
}
</script>

<template>
  <div class="relative rounded-2xl rounded-l-none border border-l-0 border-gray-600 pb-3 pr-4 pt-5 leading-tight">
    <div class="absolute -top-2.5 bg-gray-700 pr-2 text-sm font-semibold uppercase tracking-wider">
      {{ role }}
    </div>
    <img class="mb-1" :src="nameAsImage(name, pronouns)" />
    <div class="text-sm text-gray-400">{{ email }}</div>
  </div>
</template>
