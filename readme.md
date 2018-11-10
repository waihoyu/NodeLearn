Node.js 异步io特性。


```bash

var mime = {
    ".jpg":"image/jpg",
    ".jpeg":"image/jpeg",
    ".gif":"image/gif",
    ".png":"image/png",
    ".html" : "text/html;charset=UTF-8",
    ".css":"text/css",
    ".js":"application/x-javascript"
}

```


nodejs 是一个JavaScript 的runtime  ，运行环境，实际上就是利用Chrome V8 引擎，将它移植到服务器上，用它开发服务器程序，可以提供HTTP 服务。


single  Thread  单线程。

Non-blocking  I/O  非阻塞I/o 

event driven  事件驱动

node为了在低硬件服务器条件下进行高并发，所以就减少内存消耗，剑走偏锋，选择了单线程。

必须要非阻塞I/O ,因为你只有一个线程，你必须要当A用户去IO的时候，处理B业务的事情，B业务区IO。
你要去处理C的事情...... A、B、C 都有回调函数。


为了让A B  C 不乱套，每个人都进行合理调度，谁先来处理谁。你不能让B一直等待，处理C  D  E  。。。。。所以Node 使用了一个机制叫做事件环，采用事件驱动来调度事件。



