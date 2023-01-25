<template>
  <main>
   <Header />
    <div class="intro">
      <h2>Nuxt Toolbox</h2>
       <a href="https://bluise-nuxt.netlify.app/"
          >Home</a>

      <p>
        Hi 👋! This template gives you a
        <a href="https://nuxtjs.org/">Nuxt</a> app with the scaffolding for
        <a href="https://bluise-nuxt.netlify.app/"
          > Bluise-nuxt</a
        >, <a href="https://www.netlify.com/products/forms/">Forms</a>, and
        <a href="https://docs.netlify.com/routing/redirects/">Redirects</a>. Our
        aim was to give you the code you would need to hit the ground running
        with a few fun features.
      </p>

      <p>
        You can find the code for this project on GitHub at
        <a href="https://github.com/AVbeauty/bluise-nuxt"
          > https://github.com/AVbeauty/bluise-nuxt</a
        >! Happy you!
      </p>
    </div>
    <FeedbackForm />
    <JokeBlock />
    <Footer />
  </main>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&display=swap');

* {
  font-family: 'Cormorant Garamond', serif;
 }

.intro {
  min-width: 400px;
  padding: 10px 40px;
  width: 60%;
}
</style>
