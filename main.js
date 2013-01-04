$(function () {

    var populate_menu = function () {

	var tmpl = $('#day_menu_template').text();

	var format_meal = function (meal) {
	    if (meal===null) {
		return '不点'
	    }
	    return meal.supplier+' '+meal.name;
	};

	var format_date = function (date) {
	    var d = new Date(Date.parse(date));
	    return ''+(d.getMonth()+1)+'月'+d.getDate()+'日 星期'+'日一二三四五六'[d.getDay()];
	};

	var format_time = function (time) {
	    return {lunch: '中餐', supper: '晚餐'}[time] || time;
	};


	var avail_everyday = PINMEAL_DATA.filter(function (m) {
	    return m.date === '*';
	});

	var total = 0;
	var data = _.map(
	    _.groupBy(PINMEAL_DATA.filter(function (m) {
		return m.date !== '*';
	    }), 'date'),
	    function (meals, date) {
		return {date:  date,
			meals: _.map(_.groupBy(meals, 'time'), 
				     function (meals, time) {
					 total += 1;
					 var d = [null].concat(
					     meals,
					     avail_everyday);
					 
					 return {time: time, 
						 meals: d};
				     })
		       };
	    }).sort(function (a, b) {
		return Date.parse(a.orig_date) - Date.parse(b.orig_date);
	    });


	$('#items').append($(_.template(tmpl, {data: data, format_date: format_date, format_time: format_time, format_meal: format_meal})));
	
	var gen_result = function () {
	    var user_name = $('#user_name').val();

	    var txt = _.flatten(data.map(function (date_meal) {
		return date_meal.meals.map(function (time_meal) {
		    return {date: date_meal.date,
			    time: time_meal.time,
			    meal: time_meal.select};
		});
	    })).filter(function (x) { return !!x.meal; })
		.sort(function (a, b) {
		    if (a.time==='lunch' && b.time==='supper') {
			return -1;
		    } else if (a.time==='supper' && b.time==='lunch') {
			return 1;
		    } else {
			return Date.parse(a.date)-Date.parse(b.date);
		    }
		})
		.map(function (m) {
		    return [m.date, 
			    format_time(m.time), 
			    user_name, 
			    m.meal.supplier, 
			    m.meal.name, 
			    m.meal.price].join('\t');
		}).join('\n');
/*
	    var txt = PINMEAL_DATA.filter(function (m) {
		return m.select;
	    })
*/
	    $('textarea').text(txt);
	};

	
	var update_sum = function () {
	    var ordered = 0;
	    data.forEach(function (date_meals) {
		date_meals.meals.forEach(function (time_meals) {
		    if (!!time_meals.select) {
			ordered += 1;
		    }
		});
	    });

	    var text = '总共'+total+'餐，点了'+ordered+'餐';

	    $('#sum').text(text);
	};

	update_sum();
	
	$('#items').delegate('select', 'change', function (event) {
	    var e = $(this).children(':selected');

	    var date_meal = _.find(data, function (date_meal) {
		return date_meal.date===e.attr('date');
	    });

	    var time_meal = _.find(date_meal.meals, function (time_meal) {
		return time_meal.time===e.attr('time');
	    });

	    time_meal.select = time_meal.meals[Number(e.attr('index'))];

	    gen_result();
	    update_sum();
	});

	$('#user_name').bind('keyup', function () {
	    gen_result();
	});
    };

    populate_menu();

    $('textarea').focus(function () {
	//http://stackoverflow.com/questions/5797539/jquery-select-all-text-from-a-textarea
	$(this).select().one('mouseup', function() {
            // Prevent further mouseup intervention
            return false;
	});
    });
});