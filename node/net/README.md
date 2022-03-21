# [net](http://nodejs.cn/api/net.html)

## net

| class | api                                                   | more |
| ----- | ----------------------------------------------------- | ---- |
| 构造  | net.Server([options][, connectionlistener])           | -    |
| ^     | new net.Socket([options])                             | -    |
| 方法  | net.connect(options[, connectListener])               | -    |
| ^     | net.connect(path[, connectListener])                  | -    |
| ^     | net.connect(port[, host][, connectlistener])          | -    |
| ^     | net.createConnection(options[, connectListener])      | -    |
| ^     | net.createConnection(path[, connectListener])         | -    |
| ^     | net.createConnection(port[, host][, connectlistener]) | -    |
| ^     | net.createServer([options][, connectionlistener])     | -    |
| ^     | net.isIP(input)                                       | -    |
| ^     | net.isIPv4(input)                                     | -    |
| ^     | net.isIPv6(input)                                     | -    |

## net.Server 类

| class | api                                                  | more                                                                          |
| ----- | ---------------------------------------------------- | ----------------------------------------------------------------------------- |
| 创建  | net.Server([options][, connectionlistener])          | -                                                                             |
| 事件  | close                                                | 当 server 关闭的时候触发。 如果有连接存在，直到所有的连接结束才会触发这个事件 |
| ^     | connection                                           | 当一个新的连接建立的时候触发。 socket 是一个 net.Socket 实例。                |
| ^     | error                                                | 当错误出现的时候触发                                                          |
| ^     | listening                                            | 当调用 server.listen() 绑定服务器之后触发                                     |
| 方法  | server.address()                                     | -                                                                             |
| ^     | server.close([callback])                             | -                                                                             |
| ^     | server.getConnections(callback)                      | -                                                                             |
| ^     | server.listen(handle[, backlog][, callback])         | -                                                                             |
| ^     | server.listen(options[, callback])                   | -                                                                             |
| ^     | server.listen(path[, backlog][, callback])           | -                                                                             |
| ^     | server.listen([port[, host[, backlog]]][, callback]) | -                                                                             |
| ^     | server.maxConnections                                | -                                                                             |
| ^     | server.ref()                                         | -                                                                             |
| ^     | server.unref()                                       | -                                                                             |
| 属性  | server.listening                                     | -                                                                             |

## net.Socket 类

| class | api                                             | more                                                                                                                                               |
| ----- | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 创建  | new net.Socket([options])                       | -                                                                                                                                                  |
| 事件  | close                                           | 一旦 socket 完全关闭就发出该事件                                                                                                                   |
| ^     | connect                                         | 当一个 socket 连接成功建立的时候触发该事件                                                                                                         |
| ^     | data                                            | 当接收到数据的时触发该事件                                                                                                                         |
| ^     | drain                                           | 当写入缓冲区变为空时触发                                                                                                                           |
| ^     | end                                             | 当 socket 的另一端发送一个 FIN 包的时候触发，从而结束 socket 的可读端。                                                                            |
| ^     | error                                           | 当错误发生时触发。'close' 事件也会紧接着该事件被触发                                                                                               |
| ^     | lookup                                          | 在找到主机之后创建连接之前触发                                                                                                                     |
| ^     | ready                                           | 套接字准备好使用时触发                                                                                                                             |
| ^     | timeout                                         | 当 socket 超时的时候触发                                                                                                                           |
| 属性  | socket.bufferSize                               | -                                                                                                                                                  |
| ^     | socket.bytesRead                                | -                                                                                                                                                  |
| ^     | socket.bytesWritten                             | -                                                                                                                                                  |
| ^     | socket.connecting                               | -                                                                                                                                                  |
| ^     | socket.destroyed                                | -                                                                                                                                                  |
| ^     | socket.localAddress                             | -                                                                                                                                                  |
| ^     | socket.localPort                                | -                                                                                                                                                  |
| ^     | socket.pending                                  | -                                                                                                                                                  |
| ^     | socket.remoteAddress                            | -                                                                                                                                                  |
| ^     | socket.remoteFamily                             | -                                                                                                                                                  |
| ^     | socket.remotePort                               | -                                                                                                                                                  |
| 方法  | socket.address()                                | -                                                                                                                                                  |
| ^     | socket.connect(options[, connectListener])      | -                                                                                                                                                  |
| ^     | socket.connect(path[, connectListener])         | -                                                                                                                                                  |
| ^     | socket.connect(port[, host][, connectlistener]) | -                                                                                                                                                  |
| ^     | socket.destroy([exception])                     | -                                                                                                                                                  |
| ^     | socket.end([data[, encoding]][, callback])      | -                                                                                                                                                  |
| ^     | socket.pause()                                  | -                                                                                                                                                  |
| ^     | socket.ref()                                    | -                                                                                                                                                  |
| ^     | socket.resume()                                 | -                                                                                                                                                  |
| ^     | socket.setEncoding([encoding])                  | -                                                                                                                                                  |
| ^     | socket.setKeepAlive([enable][, initialdelay])   | -                                                                                                                                                  |
| ^     | socket.setNoDelay([noDelay])                    | 禁止 Nagle 算法。默认情况下 TCP 连接使用 Nagle 算法，在发送之前缓冲数据。将 noDelay 设置为 true 将会在每次 socket.write() 被调用的时候立即发送数据 |
| ^     | socket.setTimeout(timeout[, callback])          | -                                                                                                                                                  |
| ^     | socket.unref()                                  | -                                                                                                                                                  |
| ^     | socket.write(data[, encoding][, callback])      | 在 socket 上发送数据。第二个参数制定了字符串的编码 - 默认是 UTF8 编码。                                                                            |



