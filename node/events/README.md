# [events](http://nodejs.cn/api/events.html)

> 事件触发器

## EventEmitter 类

| class | api                                              | more |
| ----- | ------------------------------------------------ | ---- |
| 事件  | newListener                                      | -    |
| ^     | removeListener                                   | -    |
| ^     | error                                            | -    |
| 属性  | EventEmitter.defaultMaxListeners                 | -    |
| 方法  | emitter.addListener(eventName, listener)         | -    |
| ^     | emitter.emit(eventName[, ...args])               | -    |
| ^     | emitter.eventNames()                             | -    |
| ^     | emitter.getMaxListeners()                        | -    |
| ^     | emitter.listenerCount(eventName)                 | -    |
| ^     | emitter.listeners(eventName)                     | -    |
| ^     | emitter.off(eventName, listener)                 | -    |
| ^     | emitter.on(eventName, listener)                  | -    |
| ^     | emitter.once(eventName, listener)                | -    |
| ^     | emitter.prependListener(eventName, listener)     | -    |
| ^     | emitter.prependOnceListener(eventName, listener) | -    |
| ^     | emitter.removeAllListeners([eventName])          | -    |
| ^     | emitter.removeListener(eventName, listener)      | -    |
| ^     | emitter.setMaxListeners(n)                       | -    |
| ^     | emitter.rawListeners(eventName)                  | -    |
