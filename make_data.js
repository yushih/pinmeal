var fs = require('fs');
var util = require('util');

var everyday_meals = [
    {name: '日式咖喱猪排饭', price: 11.8},
    {name: '红烧狮子头饭', price: 10.8},
    {name: '奥尔良鸡排饭', price: 10.8},
    {name: '宫爆鸡丁饭', price: 7.8},
    {name: '咖喱蛋包饭', price: 9.8},
    {name: '滑蛋牛肉饭', price: 11.8},
    {name: '滑蛋猪排饭', price: 11.8},
    {name: '香辣脆笋肉丝饭', price: 8.8},
    {name: '意大利肉酱面', price: 7.8 },
    {name: '葱油拌面', price: 6.8 },
    {name: '鱼香肉丝烩炒面', price: 9.8 },
    {name: '香菇鸡丝汤面', price: 9.8},
    {name: '什锦粉丝煲', price: 11.8 },
    {name: '酸汤肥牛面', price: 10.8 }
].map(function (m) {
	m.supplier = '全家';
	m.date = '*';
	return m;
});


    
var parse_line = function (line) {
    var SPEC = [
	//filed name, index in split fields, validator/transformer
	['date', 0, function (d) { return d.replace(/-/g, '.').match(/^201\d\.\d\d?\.\d\d?$/)[0]; }],
	['time', 1, function (t) { return {'中餐': 'lunch', '晚餐': 'supper'}[t]; }],
	['supplier', 2, function (s) { return s; }],
	['name', 3, function (n) { return n; }],
	['price', 4, function (p) { return parseFloat(p); }]
    ];

    var res = {};

    var fields =  line.split('\t')
	.map(function (f) {
	    return f.trim();
	})
	.forEach(function (f, field_idx) {
	    var i, spec;
	    for (i=0; i<SPEC.length; i++) {
		if (SPEC[i][1]===field_idx) {
		    spec = SPEC[i];
		    break;
		}
	    }
	    if (!spec) {
		return;
	    }
	    var val;
	    try {
		val = spec[2](f);
	    } catch (e) {
	    }
	    if (!val) {
		console.log('invalid line(%s)', spec[0], line);
		process.exit();
	    }
	    res[spec[0]] = val;
	});
    

    return res;
};

var parse = function (fn) {
    var res = fs.readFileSync(fn, 'utf8')
	.split('\n')
	.map(function (l) {
	    return l.trim();
	})
	.filter(function (l) {
	    return l.length>0;
	})
	.map(parse_line);

    return res;
};

var main = function () {
    var meals = Array.prototype.concat.apply(
	[],
	process.argv.slice(2).map(parse)
    );

    meals = meals.concat(everyday_meals);

   fs.writeFileSync('data.js',
		     '(window.PINMEAL_DATA=\n'+util.inspect(meals, false, 998)+'\n);',
		     'utf8');
    console.log('updated data.js');
};

main();
