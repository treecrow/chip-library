# [errors](http://nodejs.cn/api/errors.html)

## Error 类

| class | api                                                     | 朕已阅 | more                                                         |
| ----- | ------------------------------------------------------- | ------ | ------------------------------------------------------------ |
| 创建  | new Error(message)                                      | ✅     | 新建一个 Error 实例，并设置 error.message 属性以提供文本信息 |
| 方法  | Error.captureStackTrace(targetObject[, constructorOpt]) | -      | -                                                            |
| 属性  | Error.stackTraceLimit                                   | ✅     | 指定了堆栈跟踪收集的栈帧数量                                 |
| ^     | error.code                                              | ✅     | 标识错误类别的字符标签                                       |
| ^     | error.message                                           | ✅     | 错误的字符串描述                                             |
| ^     | error.stack                                             | ✅     | 一个字符串，描述代码中 Error 被实例化的位置                  |

## 其它衍生错误类

| 类             | api           | 朕已阅 | more                                                                                                     |
| -------------- | ------------- | ------ | -------------------------------------------------------------------------------------------------------- |
| AssertionError | -             | ✅     | 表明断言的失败                                                                                           |
| RangeError     | -             | ✅     | 表明提供的参数不在函数的可接受值的集合或范围内；无论是一个数字范围，还是在给定的函数参数的选项的集合之外 |
| ReferenceError | -             | ✅     | 表明试图访问一个未定义的变量。 此类错误通常表明代码有拼写错误或程序已损坏                                |
| SyntaxError    | -             | ✅     | 表明程序不是有效的 JavaScript                                                                            |
| SystemError    | error.address | -      | 如果存在，则 error.address 是描述网络连接失败的地址的字符串                                              |
| ^              | error.code    | -      | error.code 属性是表示错误代码的字符串                                                                    |
| ^              | error.dest    | -      | -                                                                                                        |
| ^              | error.errno   | -      | -                                                                                                        |
| ^              | error.info    | -      | 一个对象，其中包含有关错误情况的详细信息                                                                 |
| ^              | error.message | -      | 系统提供的可读性错误描述                                                                                 |
| ^              | error.path    | -      | 包含相关无效路径名的字符串                                                                               |
| ^              | error.port    | -      | 是不可用的网络连接端口                                                                                   |
| ^              | error.syscall | -      | 属性是一个字符串，描述失败的系统调用                                                                     |
| TypeError      | -             | -      | 表明提供的参数不是被允许的类型。 例如，将函数传给期望字符串的参数，将会被视为 TypeError。                |
