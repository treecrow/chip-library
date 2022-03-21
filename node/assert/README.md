# [assert](http://nodejs.cn/api/assert.html)

## assert

| class | api                                                    | 朕已阅 | more                                                                                                                               |
| ----- | ------------------------------------------------------ | ------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| 方法  | assert.strictEqual(actual, expected[, message])        | ✅     | 比较值和类型，不能比较数组，json 等数据类型的数据，不能进行深度比较                                                                |
| ^     | assert.notStrictEqual(actual, expected[, message])     | ✅     | ^                                                                                                                                  |
| ^     | assert.deepStrictEqual(actual, expected[, message])    | ✅     | 可以进行深度比较,既比较值也比较类型                                                                                                |
| ^     | assert.notDeepStrictEqual(actual, expected[, message]) | ✅     | ^                                                                                                                                  |
| ^     | assert.rejects(asyncFn[, error][, message])            | ✅     | 等待 asyncFn Promise，或者，如果 asyncFn 是一个函数，则立即调用该函数并等待返回的 Promise 完成。 然后它将检查 Promise 是否被拒绝。 |
| ^     | assert.doesNotReject(asyncFn[, error][, message])      | ✅     | 等待 asyncFn Promise，或者，如果 asyncFn 是一个函数，则立即调用该函数并等待返回的 Promise 完成。 然后它将检查 Promise 是否被拒绝   |
| ^     | assert.throws(fn[, error][, message])                  | ✅     | 期望 fn 函数抛出错误。                                                                                                             |
| ^     | assert.doesNotThrow(fn[, error][, message])            | ✅     | 断言 fn 函数不会抛出错误。                                                                                                         |
| ^     | assert.fail([message])                                 | ✅     | 使用提供的错误消息或默认错误消息抛出 AssertionError                                                                                |
| ^     | assert.ifError(value)                                  | ✅     | 如果 value 不为 undefined 或 null，则抛出 value（通常用于断言回调函数里的参数）                                                    |
| ^     | assert.ok(value[, message])                            | ✅     | 测试 value 是否为真值                                                                                                              |
| ^     | assert(value[, message])                               | ✅     | assert.ok() 的别名。                                                                                                               |

## assert.AssertionError 类

| class   | api                                | 朕已阅 | more                                                   |
| ------- | ---------------------------------- | ------ | ------------------------------------------------------ |
| 创建    | new assert.AssertionError(options) | ✅     | -                                                      |
| options | message                            | ✅     | 如果提供，则将错误消息设置为此值。                     |
| ^       | actual                             | ✅     | 错误实例上的 actual 属性将包含此值。                   |
| ^       | expected                           | ✅     | 错误实例上的 expected 属性将包含此值。                 |
| ^       | operator                           | ✅     | 错误实例上的 operator 属性将包含此值。                 |
| ^       | stackStartFn                       | -      | 如果提供，则生成的堆栈跟踪将移除所有帧直到提供的函数。 |
| 属性    | name                               | ✅     | AssertionError                                         |
| ^       | message                            | ✅     | -                                                      |
| ^       | actual                             | ✅     | actual 参数                                            |
| ^       | expected                           | ✅     | expected 参数                                          |
| ^       | generatedMessage                   | ✅     | 表明消息是否是自动生成的。                             |
| ^       | code                               | ✅     | ERR_ASSERTION(表明错误实际上是断言错误)                |
| ^       | operator                           | ✅     | 设置为传入的运算符值                                   |
