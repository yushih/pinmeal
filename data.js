(function () {
    var subs = (
	function () {/*
随机
香烤牛肉 (Roast Beef)
火腿 (Ham)
百味俱乐部 (Subway Club™)
火鸡胸 (Turkey Breast)
新鲜蔬菜 (Veggie Delite™)
火鸡火腿 (Turkey Breast & Ham)
培根 (BLT)
意大利经典 (Italian B.M.T.™)
金枪鱼 (Tuna)
意大利香辣 (Spicy Italian) 
奇士牛排 (Steak & Cheese)
香烤鸡排 (Roasted Chicken)
香葱照烤鸡排 (Chicken Teriyaki)
香热奇士 (Subway Melt™)
		     */
	}
    ).toString()
	.match(/\/\*([^]+)\*\//m)[1]
	.split('\n')
	.filter(function (r) {
	    return !!r.match(/(\S+)/);
	})
	.filter(function (r) {
	    return r.match(/(\S.*\S)/)[1];
	});

    var meals = [];
    var i;
    ['lunch', 'supper'].forEach(function (time) {
	for (i=0; i<5; i++) {
	    Array.prototype.push.apply(meals, subs.map(function (s) {
		return {date: '2013.08.0'+(5+i),
			time: time,
			supplier: 'Subway',
			name: s,
			price: 0};
	    }));
	}
    });
    window.PINMEAL_DATA = meals;

}());
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