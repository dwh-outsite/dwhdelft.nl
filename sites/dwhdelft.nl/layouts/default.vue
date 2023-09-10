<template>
  <div>
    <main class="bg-white relative z-10">
      <nuxt />
    </main>
    <footer id="contact" class="bg-gray-700 relative z-10">
      <Footer />
    </footer>
  </div>
</template>

<script>
export default {
  head: {
    link: [
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap',
      },
    ],
    script: [
      {
        src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
      },
    ],
  },
  beforeMount() {
    if (window.netlifyIdentity) {
      const redirectToAdmin = () => {
        setTimeout(() => {
          document.location.href = '/admin/'
        }, 5000)
      }

      if (window.netlifyIdentity.currentUser()) {
        redirectToAdmin()
      }

      window.netlifyIdentity.on('init', (user) => {
        if (!user) {
          window.netlifyIdentity.on('login', () => redirectToAdmin())
        }
      })
    }
  },
}
</script>
