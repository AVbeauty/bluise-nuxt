<template>
  <main>
    <div class="intro">
      <h2>Nuxt Toolbox</h2>
       <a href="https://bluise-nuxt.netlify.app/">Home</a>

      <p>
       I share knowledge on web design, development & APIs., Visit my site https://bluise-nuxt.netlify.app
      </p>

      <p>
        You can find the code for this project on GitHub at
        <a href="https://github.com/AVbeauty/bluise-nuxt"
          > https://github.com/AVbeauty/bluise-nuxt</a
        >! Happy you!
      </p>
    </div>
    <Header />
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
