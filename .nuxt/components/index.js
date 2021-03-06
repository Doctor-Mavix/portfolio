export { default as About } from '../..\\components\\About.vue'
export { default as Contact } from '../..\\components\\Contact.vue'
export { default as Home } from '../..\\components\\Home.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Project } from '../..\\components\\Project.vue'
export { default as Skill } from '../..\\components\\Skill.vue'
export { default as VuetifyLogo } from '../..\\components\\VuetifyLogo.vue'
export { default as Youtube } from '../..\\components\\Youtube.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
