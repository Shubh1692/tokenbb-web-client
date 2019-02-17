export const mapStateAndMutations = function (module, properties) {
  var props = {}
  if (Array.isArray(properties)) {
    properties.forEach(property => {
      props[property] = {
        get () { return this.$store.state[module][property] },
        set (value) { this.$store.commit(`${module}/${property}`, value) }
      }
    })
  } else {
    Object.keys(properties).forEach(key => {
      var property = properties[key]
      props[key] = {
        get () { return this.$store.state[module][property] },
        set (value) { this.$store.commit(`${module}/${property}`, value) }
      }
    })
  }
  return props
}

export const mapGettersAndMutations = function (module, properties) {
  var props = {}
  if (Array.isArray(properties)) {
    properties.forEach(property => {
      props[property] = {
        get () {
          return this.$store.getters[`${module}/${property}`]
        },
        set (value) {
          this.$store.commit(`${module}/${property}`, value)
        }
      }
    })
  } else {
    Object.keys(properties).forEach(key => {
      var property = properties[key]
      props[key] = {
        get () { return this.$store.getters[`${module}/${property}`] },
        set (value) { this.$store.commit(`${module}/${property}`, value) }
      }
    })
  }
  return props
}