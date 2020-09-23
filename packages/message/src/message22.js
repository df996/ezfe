const config = {
  top: 80,
  duration: 3
}

export default {
  config (conf) {
    if (conf && typeof conf.top === "number") {
      config.top = conf.top
    }

    if (conf && typeof conf.duration === "number") {
      config.duration = conf.duration
    }
  },

  success (options) {
    console.log (options, config)
  }
}
