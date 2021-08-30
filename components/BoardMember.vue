<template>
  <div class="leading-tight mb-6">
    <img class="w-full" :src="nameAsImage(name, role)" />
    <span class="text-gray-400">{{ email }}</span>
  </div>
</template>

<script>
export default {
  props: ['name', 'role', 'email'],
  methods: {
    nameAsImage(name, role) {
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
            | ${role}
          </span>
        </foreignObject>
      </svg>
      `

      const base64Encoded = Buffer.from(image).toString('base64')

      return `data:image/svg+xml;charset=utf-8;base64,${base64Encoded}`
    },
  },
}
</script>
