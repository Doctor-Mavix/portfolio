<template>
  <v-container>
    <v-row class="my-3">
      <v-col
        order="2"
        order-lg="1"
        order-md="1"
        cols="12"
        sm="12"
        md="7"
        lg="7"
        class="align-self-center"
      >
        <p class="mb-0 text--primary">Hello,</p>
        <h1 class="my-1 display-1 h1-v font-weight-bold">
          I'm
          <span class="text--primary">Manoël Vital (Doctor Mavix)</span>
        </h1>
        <p>
          A world class full stack software developer;<br> passionate
          about changing the world by solving problems.
        </p>

        <v-btn
          href="mailto:doctormavix@gmail.com"
          class="primary black--text scrollactive-item"
          nuxt
          small
          >Hire Me</v-btn
        >

        <section class="mt-15">
          <v-btn
            v-for="social in socialLinks"
            :key="social.link"
            :href="social.link"
            target="_blank"
            class="mr-2"
            fab
            outlined
            x-small
            color="white"
          >
            <v-icon size="12"> {{ social.icon }}</v-icon>
          </v-btn>
        </section>
      </v-col>
      <v-col
        order="1"
        order-lg="2"
        order-md="2"
        cols="12"
        sm="12"
        md="5"
        lg="5"
      >
        <div
          class="rounded-circle overflow-hidden ma-auto"
          style="max-width: 250px"
        >
          <v-img
            src="./img/techreagan-profile-pics.jpg"
            alt="Tech Reagan's Avatar"
            max-height="300"
          ></v-img>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      socialLinks: [
        {
          link: 'https://github.com/doctor-mavix',
          icon: 'mdi-github',
        },
        {
          link: 'https://www.youtube.com/channel/UC01DvwM2kBZAvEp1Hf6hNbQ',
          icon: 'mdi-youtube',
        },
        {
          link: 'https://www.linkedin.com/in/manoel-vital-a779a31ba/',
          icon: 'mdi-linkedin',
        },
        {
          link: 'https://wa.me/+22968428247',
          icon: 'mdi-whatsapp',
        },
      
      ],
    }
  },
}
</script>

<style>
  h1.h1-v{

  }
</style>
