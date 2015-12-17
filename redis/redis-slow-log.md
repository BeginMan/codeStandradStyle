在配置文件中特别说明了[SLOW LOG](https://github.com/BeginMan/codeStandradStyle/blob/master/redis/redis.conf#L753)的配置，这里开始实战吧😊：

使用`SLOWLOG GET`命令来获得当前的耗时命令日志，如：

	redis＞SLOWLOG GET  
	1) 1) (integer) 4  
	2) (integer) 1356806413  
	3) (integer) 58  
	4) 1) "get"  
	2) "foo"  

每条日志都由以下4个部分组成：

- （1）该日志唯一ID；
- （2）该命令执行的UNIX时间；
- （3）该命令的耗时时间，单位是微秒；
- （4）命令及其参数。

为了产生一些耗时命令日志作为演示，这里将slowlog-log-slower-than 参数值设置为O，即记录所有命令。如果设置为负数则会关闭耗时命令日志。

