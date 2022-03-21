const net = require('net');
const server = net.createServer();

// listening
server.on('listening', () => {
    console.log(`服务已开启在 127.0.0.1:3000`);
});
// connection
server.on('connection', socket => {
    socket.setNoDelay(true);
    // data 事件就是读取数据
    socket.on('data', buffer => {
        const msg = buffer.toString();
        console.log(msg);

        // write 方法写入数据，发回给客户端
        socket.write(Buffer.from('你好 ' + msg));
    });
})
// close
server.on('close', () => {
    console.log('Server Close!');
});
// error
server.on('error', err => {
    console.error(err);
});

// listen
server.listen(3000, '127.0.0.1');