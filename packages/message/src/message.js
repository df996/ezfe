export default class Message {
  static config = null

  constructor (config) {
    this.config (config)
  }

  config (config) {
    Message.config = config
  }

  static optionsBuilder (args) {
    const opts = {
      ...Message.config,
      content: '',
      onClose: () => {}
    }

    if (args.length == 1 && typeof args[0] === 'object') {
      return {...opts, ...args[0]}
    }

    for (let opt of args) {
      if (typeof opt === 'function') {
        opts.onClose = opt
      } else if (typeof opt === 'number') {
        opts.duration = opt
      } else if (typeof opt === 'string') {
        opts.content = opt
      }
    }

    return opts
  }

  open (options) {
    console.log (options)
  }

  success () {
    this.open ({...Message.optionsBuilder (arguments), type: 'success'})
  }

  error () {
    this.open ({...Message.optionsBuilder (arguments), type: 'error'})
  }

  info () {
    this.open ({...Message.optionsBuilder (arguments), type: 'info'})
  }

  loading () {
    this.open ({...Message.optionsBuilder (arguments), type: 'loading'})
  }

  warning () {
    this.open ({...Message.optionsBuilder (arguments), type: 'warning'})
  }

  warn () {
    this.open ({...Message.optionsBuilder (arguments), type: 'warning'})
  }
}
