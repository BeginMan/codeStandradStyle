print("		    *** 努力实践mongodb,佛祖保佑!*** \n")
lis = new Array(
	"                                 _oo8oo_", 
	"                                o8888888o",
	'                                88" . "88',
	'                                (| -_- |)',
	'                                0\\  =  /0',
	'                              ___/'==='\\___',
	"                            .' \\\|     |// '.",
	"                           / \\\|||  :  |||// \\",
	"                          / _||||| -:- |||||_ \\",
	"                         |   | \\\\  -  /// |   |",
	"                         | \\_|  ''\\---/''  |_/ |",
	"                         \\  .-\\__  '-'  __/-.  /",
	"                       ___'. .'  /--.--\\  '. .'___",
	"                       . '<  '.___\\_<|>_/___.'  >' .",
	"                   | | :  `- \\`.:`\\ _ /`:.`/ -`  : | |",
	"                   \\  \\ `-.   \\_ __\\ /__ _/   .-` /  /",
	"                 =====`-.____`.___ \\_____/ ___.`____.-`=====",
	"                                 `=---=`"
	);

for(x in lis){
	print(lis[x]);
}

//过滤危险的辅助函数
var no = (function(){
	print("Sorry,我不允许你做出删除这样危险的操作!");
});

// 禁止删除数据库
db.dropDatabase = DB.prototype.dropDatabase = no;

// 禁止删除集合
DBCollection.prototype.drop = no;

// 禁止删除索引
DBCollection.prototype.dropIndex = no;

// 更改提示
prompt = (function(){
	return "😊 > "
})();
