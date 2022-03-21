# [http](http://nodejs.cn/api/http.html)

## http

| class | api                                             | 朕已阅 | more                  |
| ----- | ----------------------------------------------- | ------ | --------------------- |
| 方法  | http.createServer([options][, requestlistener]) | ✅     | 创建 http.Server 实例 |
| ^     | http.get(options[, callback])                   | -      | -                     |
| ^     | http.get(url[, options][, callback])            | -      | -                     |
| ^     | http.request(options[, callback])               | -      | -                     |
| ^     | http.request(url[, options][, callback])        | -      | -                     |
| 属性  | http.METHODS                                    | -      | -                     |
| ^     | http.STATUS_CODES                               | -      | -                     |
| ^     | http.globalAgent                                | -      | -                     |
| ^     | http.maxHeaderSize                              | -      | -                     |

## http.Agent 类

| class | api                                         | 朕已阅 | more |
| ----- | ------------------------------------------- | ------ | ---- |
| 创建  | new Agent([options])                        | -      | -    |
| 方法  | agent.createConnection(options[, callback]) | -      | -    |
| ^     | agent.keepSocketAlive(socket)               | -      | -    |
| ^     | agent.reuseSocket(socket, request)          | -      | -    |
| ^     | agent.destroy()                             | -      | -    |
| ^     | agent.getName(options)                      | -      | -    |
| 属性  | agent.freeSockets                           | -      | -    |
| ^     | agent.maxFreeSockets                        | -      | -    |
| ^     | agent.maxSockets                            | -      | -    |
| ^     | agent.requests                              | -      | -    |
| ^     | agent.sockets                               | -      | -    |

## http.Server 类

| class | api                                    | more                     |
| ----- | -------------------------------------- | ------------------------ |
| 事件  | 'checkContinue'                        | -                        |
| ^     | 'checkExpectation'                     | -                        |
| ^     | 'clientError'                          | -                        |
| ^     | 'close'                                | -                        |
| ^     | 'connect'                              | -                        |
| ^     | 'connection'                           | -                        |
| ^     | 'request'                              | -                        |
| ^     | 'upgrade'                              | -                        |
| 方法  | server.close([callback])               | -                        |
| ^     | server.listen()                        | 启动 HTTP 服务器监听连接 |
| ^     | server.setTimeout([msecs][, callback]) | 调节超时时间             |
| 属性  | server.headersTimeout                  | -                        |
| ^     | server.listening                       | -                        |
| ^     | server.maxHeadersCount                 | -                        |
| ^     | server.timeout                         | -                        |
| ^     | server.keepAliveTimeout                | -                        |

## http.ClientRequest 类

| class | api                                                  | 朕已阅 | more |
| ----- | ---------------------------------------------------- | ------ | ---- |
| 事件  | 'abort'                                              | -      | -    |
| ^     | 'connect'                                            | -      | -    |
| ^     | 'continue'                                           | -      | -    |
| ^     | 'information'                                        | -      | -    |
| ^     | 'response'                                           | -      | -    |
| ^     | 'socket'                                             | -      | -    |
| ^     | 'timeout'                                            | -      | -    |
| ^     | 'upgrade'                                            | -      | -    |
| 方法  | request.abort()                                      | -      | -    |
| ^     | request.end([data[, encoding]][, callback])          | -      | -    |
| ^     | request.flushHeaders()                               | -      | -    |
| ^     | request.removeHeader(name)                           | -      | -    |
| ^     | request.getHeader(name)                              | -      | -    |
| ^     | request.setHeader(name, value)                       | -      | -    |
| ^     | request.setNoDelay([noDelay])                        | -      | -    |
| ^     | request.setSocketKeepAlive([enable][, initialdelay]) | -      | -    |
| ^     | request.setTimeout(timeout[, callback])              | -      | -    |
| ^     | request.write(chunk[, encoding][, callback])         | -      | -    |
| 属性  | request.aborted                                      | -      | -    |
| ^     | request.connection                                   | -      | -    |
| ^     | request.finished                                     | -      | -    |
| ^     | request.maxHeadersCount                              | -      | -    |
| ^     | request.path                                         | -      | -    |
| ^     | request.socket                                       | -      | -    |
| ^     | request.writableEnded                                | -      | -    |
| ^     | request.writableFinished                             | -      | -    |

## http.IncomingMessage 类

| class | api                                   | 朕已阅 | more |
| ----- | ------------------------------------- | ------ | ---- |
| 事件  | 'aborted'                             | -      | -    |
| ^     | 'close'                               | -      | -    |
| 方法  | message.destroy([error])              | -      | -    |
| ^     | message.setTimeout(msecs[, callback]) | -      | -    |
| 属性  | message.aborted                       | -      | -    |
| ^     | message.complete                      | -      | -    |
| ^     | message.headers                       | -      | -    |
| ^     | message.httpVersion                   | -      | -    |
| ^     | message.method                        | -      | -    |
| ^     | message.rawHeaders                    | -      | -    |
| ^     | message.rawTrailers                   | -      | -    |
| ^     | message.socket                        | -      | -    |
| ^     | message.statusCode                    | -      | -    |
| ^     | message.statusMessage                 | -      | -    |
| ^     | message.trailers                      | -      | -    |
| ^     | message.url                           | -      | -    |

## http.ServerResponse 类

| class | api                                                        | 朕已阅 | more                                                                             |
| ----- | ---------------------------------------------------------- | ------ | -------------------------------------------------------------------------------- |
| 事件  | 'close'                                                    | -      | -                                                                                |
| ^     | 'finish'                                                   | -      | -                                                                                |
| 方法  | response.writeHead(statusCode[, statusMessage][, headers]) | ✅     | 向请求发送响应头                                                                 |
| ^     | response.write(chunk[, encoding][, callback])              | ✅     | -                                                                                |
| ^     | response.end([data[, encoding]][, callback])               | ✅     | 此方法向服务器发出信号，表明已发送所有响应头和主体，该服务器应该视为此消息已完成 |
| ^     | response.addTrailers(headers)                              | -      | -                                                                                |
| ^     | response.flushHeaders()                                    | -      | -                                                                                |
| ^     | response.getHeader(name)                                   | -      | -                                                                                |
| ^     | response.getHeaderNames()                                  | -      | -                                                                                |
| ^     | response.getHeaders()                                      | -      | -                                                                                |
| ^     | response.hasHeader(name)                                   | -      | -                                                                                |
| ^     | response.removeHeader(name)                                | -      | -                                                                                |
| ^     | response.setHeader(name, value)                            | -      | -                                                                                |
| ^     | response.setTimeout(msecs[, callback])                     | -      | -                                                                                |
| ^     | response.writeContinue()                                   | -      | -                                                                                |
| ^     | response.writeProcessing()                                 | -      | -                                                                                |
| 属性  | response.connection                                        | -      | -                                                                                |
| ^     | response.finished                                          | -      | -                                                                                |
| ^     | response.headersSent                                       | -      | -                                                                                |
| ^     | response.sendDate                                          | -      | -                                                                                |
| ^     | response.socket                                            | -      | -                                                                                |
| ^     | response.statusCode                                        | -      | -                                                                                |
| ^     | response.statusMessage                                     | -      | -                                                                                |
| ^     | response.writableEnded                                     | -      | -                                                                                |
| ^     | response.writableFinished                                  | -      | -                                                                                |
