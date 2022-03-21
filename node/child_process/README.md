# [child_process](http://nodejs.cn/api/child_process.html)

## child_process api

| api                                                         | 朕已阅 | more                                                                                                           |
| ----------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------- |
| child_process.spawn(command[, args][, options])             | ✅     | 异步地衍生子进程，且不阻塞 Node.js 事件循环                                                                    |
| child_process.spawnSync(command[, args][, options])         | -      | 以同步地衍生子进程，但会阻塞事件循环直到衍生的进程退出或终止。                                                 |
| child_process.exec(command[, options][, callback])          | ✅     | 衍生一个 shell 并在该 shell 中运行命令，当完成时则将 stdout 和 stderr 传给回调函数                             |
| child_process.execSync(command[, options])                  | ✅     | child_process.exec() 的同步版本，将会阻塞 Node.js 事件循环                                                     |
| child_process.execFile(file[, args][, options][, callback]) | -      | 类似于 child_process.exec()，但是默认情况下它会直接衍生命令而不先衍生 shell                                    |
| child_process.execFileSync(file[, args][, options])         | -      | child_process.execFile() 的同步版本，将会阻塞 Node.js 事件循环                                                 |
| child_process.fork(modulePath[, args][, options])           | -      | 衍生一个新的 Node.js 进程，并调用一个指定的模块，该模块已建立了 IPC 通信通道，允许在父进程与子进程之间发送消息 |

-   options

| option   | more                                                             |
| -------- | ---------------------------------------------------------------- |
| detached | 设置 options.detached 为 true 可以使子进程在父进程退出后继续运行 |
| cwd      | 子进程的工作目录                                                 |

## ChildProcess 类

| class | api                                                           | 朕已阅 | more                                                                                                                                                                                                                                             |
| ----- | ------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 事件  | close                                                         | -      | 当子进程的 stdio 流已被关闭时会触发 'close' 事件                                                                                                                                                                                                 |
| ^     | disconnect                                                    | -      | 调用父进程中的 subprocess.disconnect() 或子进程中的 process.disconnect() 后会触发 'disconnect' 事件。 断开连接后就不能再发送或接收信息，且 subprocess.connected 属性为 false。                                                                   |
| ^     | error                                                         | -      | 每当出现以下情况时触发 'error' 事件：无法衍生进程；无法杀死进程；向子进程发送消息失败。                                                                                                                                                          |
| ^     | exit                                                          | -      | 当子进程结束后时会触发 'exit' 事件。 如果进程退出，则 code 是进程的最终退出码，否则为 null。 如果进程是因为收到的信号而终止，则 signal 是信号的字符串名称，否则为 null                                                                           |
| ^     | message                                                       | -      | 当子进程使用 process.send() 发送消息时会触发 'message' 事件                                                                                                                                                                                      |
| 属性  | subprocess.channel                                            | -      | 对子进程的 IPC 通道的引用。 如果当前没有 IPC 通道，则此属性为 undefined。                                                                                                                                                                        |
| ^     | subprocess.connected                                          | -      | 表明是否可以从子进程发送和接收消息。 当 subprocess.connected 为 false 时，则不能再发送或接收消息                                                                                                                                                 |
| ^     | subprocess.killed                                             | -      | 当使用 subprocess.kill() 成功发送信号到子进程后，该值会被设为 true                                                                                                                                                                               |
| ^     | subprocess.pid                                                | -      | 返回子进程的进程标识符（PID）。                                                                                                                                                                                                                  |
| ^     | subprocess.stdio                                              | -      | 一个到子进程的管道的稀疏数组，对应于传给 child_process.spawn() 的被设为 'pipe' 值的 stdio 选项中的位置。 subprocess.stdio[0]、 subprocess.stdio[1] 和 subprocess.stdio[2] 也分别可用作 subprocess.stdin、 subprocess.stdout 和 subprocess.stderr |
| ^     | subprocess.stderr / subprocess.stdio[2]                       | -      | 表示子进程的 stderr 的可读流                                                                                                                                                                                                                     |
| ^     | subprocess.stdin / subprocess.stdio[0]                        | -      | 表示子进程的 stdin 的可写流                                                                                                                                                                                                                      |
| ^     | subprocess.stdout / subprocess.stdio[1]                       | -      | 表示子进程的 stdout 的可读流                                                                                                                                                                                                                     |
| 方法  | subprocess.disconnect()                                       | -      | 关闭父进程与子进程之间的 IPC 通道，一旦没有其他的连接使其保持活跃，则允许子进程正常退出。 调用该方法后，则父进程和子进程上各自的 subprocess.connected 和 process.connected 属性都会被设为 false，且进程之间不能再传递消息。                      |
| ^     | subprocess.kill([signal])                                     | -      | 向子进程发送一个信号。 如果没有给定参数，则进程将会发送 'SIGTERM' 信号                                                                                                                                                                           |
| ^     | subprocess.send(message[, sendHandle[, options]][, callback]) | -      | 当父进程和子进程之间已建立了一个 IPC 通道时（例如，使用 child_process.fork()）， subprocess.send() 方法可用于发送消息到子进程。 当子进程是一个 Node.js 实例时，则消息可以通过 'message' 事件接收。                                               |
| ^     | subprocess.unref()                                            | -      | 默认情况下，父进程将会等待已分离的子进程退出。 为了防止父进程等待给定的 subprocess 退出，可使用 subprocess.unref() 方法                                                                                                                          |
| ^     | subprocess.ref()                                              | -      | 调用 subprocess.unref() 之后再调用 subprocess.ref() 将会为子进程恢复已删除的引用计数，强迫父进程在退出自身之前等待子进程退出                                                                                                                     |
