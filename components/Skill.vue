<template>
  <div id="skills" class="py-8">
    <h2 class="text-center text--primary">SKILLS</h2>
    <v-container>
      <v-row>
        <v-col
          v-for="(skill, key) in skills"
          :key="key"
          class="d-flex child-flex"
          cols="12"
          xs="12"
          sm="6"
          md="4"
          data-aos="flip-right"
          :data-aos-delay="`${50 * key}`"
        >
          <v-card class="white text-center ">
            <v-icon class="py-5" color="background">{{ skill.icon }}</v-icon>
            <p class="text-center text--primary mb-0 font-weight-medium">
              {{ skill.title }}
            </p>
            <v-card-text class="pt-0 black--text ">
              {{ skill.description }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          icon: 'mdi-desktop-mac-dashboard',
          title: 'Frontend Development',
          description:
            'HTML, CSS, JavaScript, Tailwind CSS, Vue JS, Nuxt JS, Vuetify JS',
        },
        {
          icon: 'mdi-database',
          title: 'Backend Development',
          description: 'Node JS, PHP, Laravel, MongoDB, MySQL',
        },
        {
          icon: 'mdi-server',
          title: 'Version control system',
          description: 'Git',
        },
      ],
    }
  },
}
</script>
