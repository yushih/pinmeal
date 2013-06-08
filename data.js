(window.PINMEAL_DATA=
[{"date":"2013.06.13","time":"lunch","supplier":"久味","name":"蜜汁烤鸡翅","price":"14.5"},
{"date":"2013.06.14","time":"lunch","supplier":"久味","name":"百叶结红烧肉","price":"14.5"},
{"date":"2013.06.13","time":"lunch","supplier":"久味","name":"啤酒鸭块","price":"14.5"},
{"date":"2013.06.14","time":"lunch","supplier":"久味","name":"白斩鸡","price":"14.5"},
{"date":"2013.06.13","time":"lunch","supplier":"久味","name":"咖喱牛肉","price":"14.5"},
{"date":"2013.06.14","time":"lunch","supplier":"久味","name":"油面筋塞肉","price":"14.5"},
{"date":"2013.06.13","time":"lunch","supplier":"福荣祥 ","name":"叉烧饭","price":"15"},
{"date":"2013.06.14","time":"lunch","supplier":"福荣祥 ","name":"烧鸭饭","price":"15"},
{"date":"2013.06.13","time":"lunch","supplier":"江南粗菜","name":"素食","price":"14.5"},
{"date":"2013.06.14","time":"lunch","supplier":"江南粗菜","name":"素食","price":"14.5"},
{"date":"2013.06.13","time":"lunch","supplier":"江南粗菜","name":"宫保肉丁","price":"14.5"},
{"date":"2013.06.14","time":"lunch","supplier":"江南粗菜","name":"青椒炒鸡块","price":"14.5"},
{"date":"2013.06.13","time":"lunch","supplier":"江南粗菜","name":"荠菜烩鱼片","price":"14.5"},
{"date":"2013.06.14","time":"lunch","supplier":"江南粗菜","name":"什锦跑蛋","price":"14.5"},
{"date":"2013.06.13","time":"lunch","supplier":"江南粗菜","name":"酱油虾","price":"14.5"},
{"date":"2013.06.14","time":"lunch","supplier":"江南粗菜","name":"干豇豆烧肉","price":"14.5"},
{"date":"2013.06.13","time":"lunch","supplier":"农家菜","name":"肉糜蒸蛋","price":"14.5"},
{"date":"2013.06.14","time":"lunch","supplier":"农家菜","name":"梅菜扣肉","price":"14.5"},
{"date":"2013.06.13","time":"lunch","supplier":"农家菜","name":"土豆牛肉","price":"14.5"},
{"date":"2013.06.14","time":"lunch","supplier":"农家菜","name":"红烧大肉","price":"14.5"},
{"date":"2013.06.13","time":"lunch","supplier":"农家菜","name":"百叶包","price":"14.5"},
{"date":"2013.06.14","time":"lunch","supplier":"农家菜","name":"丝瓜炒肉片","price":"14.5"},
{"date":"2013.06.13","time":"supper","supplier":"福荣祥","name":"油鸡饭","price":"15"},
{"date":"2013.06.14","time":"supper","supplier":"福荣祥","name":"盐鸡饭","price":"15"},
{"date":"2013.06.13","time":"supper","supplier":"久味","name":"粽香排骨","price":"14.5"},
{"date":"2013.06.14","time":"supper","supplier":"久味","name":"蛋皮包肉末","price":"14.5"},
{"date":"2013.06.13","time":"supper","supplier":"久味","name":"风味小炒肉","price":"14.5"},
{"date":"2013.06.14","time":"supper","supplier":"久味","name":"香酥鸡块","price":"14.5"},
{"date":"2013.06.13","time":"supper","supplier":"久味","name":"烤麸冷面配荷包蛋","price":"14.5"},
{"date":"2013.06.14","time":"supper","supplier":"久味","name":"菜肉馄饨配鱼排","price":"14.5"},
{"date":"2013.06.13","time":"supper","supplier":"江南粗菜","name":"毛豆炒鸡杂","price":"14.5"},
{"date":"2013.06.14","time":"supper","supplier":"江南粗菜","name":"干锅有机花菜","price":"14.5"},
{"date":"2013.06.13","time":"supper","supplier":"江南粗菜","name":"毛血旺","price":"14.5"},
{"date":"2013.06.14","time":"supper","supplier":"江南粗菜","name":"红烧大肉","price":"14.5"},
{"date":"2013.06.13","time":"supper","supplier":"江南粗菜","name":"水面筋青椒肉片","price":"14.5"},
{"date":"2013.06.14","time":"supper","supplier":"江南粗菜","name":"咸肉烧冬瓜","price":"14.5"},
{"date":"2013.06.13","time":"supper","supplier":"农家菜","name":"椒盐排条","price":"14.5"},
{"date":"2013.06.14","time":"supper","supplier":"农家菜","name":"葱烤鲫鱼","price":"14.5"},
{"date":"2013.06.13","time":"supper","supplier":"农家菜","name":"毛家肉","price":"14.5"},
{"date":"2013.06.14","time":"supper","supplier":"农家菜","name":"干煎带鱼","price":"14.5"},
{"date":"2013.06.13","time":"supper","supplier":"农家菜","name":"虾仁炒蛋","price":"14.5"},
{"date":"2013.06.14","time":"supper","supplier":"农家菜","name":"蚝油牛肉","price":"14.5"}]
);
/*
//in case date is screwed up, use this to fix
(function () {
    window.PINMEAL_DATA.forEach(function (d) {
	var m = d.date.match(/^(\d{4})\.(\d\d)\.(\d\d)$/);
	var day = String((Number(m[3])+6));
	if (day.length===1) {
	    day='0'+day;
	}
	d.date = m[1]+'.'+m[2]+'.'+day;
    });
    console.log(window.PINMEAL_DATA);
}());
*/