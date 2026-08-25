const { TextDecoder, TextEncoder } = require('util')
const { ReadableStream, WritableStream, TransformStream } = require('stream/web')
const { MessageChannel } = require('worker_threads')

globalThis.TextDecoder = TextDecoder
globalThis.TextEncoder = TextEncoder
globalThis.ReadableStream = ReadableStream
globalThis.WritableStream = WritableStream
globalThis.TransformStream = TransformStream

const channel = new MessageChannel()
globalThis.MessagePort = channel.port1.constructor

globalThis.Request = class Request {
  constructor(input, init = {}) {
    this.url = typeof input === 'string' ? input : input.url
    this.method = init.method || 'GET'
  }
}

globalThis.Response = class Response {
  constructor(body, init = {}) {
    this.ok = init.status ? init.status >= 200 && init.status < 300 : true
    this.status = init.status || 200
    this._body = body
  }

  async json() {
    if (typeof this._body === 'string') {
      return JSON.parse(this._body)
    }
    return this._body ?? {}
  }
}

globalThis.Headers = class Headers {
  constructor(init = {}) {
    this._map = new Map(Object.entries(init))
  }
}

if (!globalThis.fetch) {
  globalThis.fetch = async () =>
    new Response('{}', {
      status: 200,
    })
}
