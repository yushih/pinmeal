$(function () {


    var get_date_after_days = function (begin, n) {
	return new Date(begin.valueOf()+n*24*60*60*1000);
    };

    var get_next_monday = function () {
	var today = new Date;
	return get_date_after_days(today, (8-today.getDay())%7);
    };

    var get_date = function (start_date, offset_days) {
	var date = get_date_after_days(start_date, offset_days);
	var y = date.getFullYear();
	var m = date.getMonth()+1;
	var d = date.getDate();
	return ''+y+'.'+(m<10?'0':'')+m+'.'+(d<10?'0':'')+d;
    };

    var render_data = function (data) {
	return  data.map(function (d) {
	    return [d.date, d.time, d.supplier, d.name, d.price].join('\t');
	}).join('\n');
    };

    var make_preview = function (time) {
	var supplier = $('#supplier').val();
	var price = parseFloat($('#price').val());
	var txt = $('#drop_zone').val();
	var start_date = get_next_monday();
	var preview_data = _.flatten(txt.split('\n')
	    .filter(function (l) { return l.trim().length>0; })
	    .map(function (l) {
		console.log(l.replace(/\t/g, '\\t'));
		console.log(l.split('\t'));
		return l.split('\t')
		    .map(function (f, i) {
			if (f.trim().length > 0) {
			    return { date: get_date(start_date, i),
				     time: time,
				     supplier: supplier,
				     name: f,
				     price: price};
			} else {
			    return null;
			}
		    });
	    })).filter(function (x) { return !!x; });
	$('#preview').val(render_data(preview_data));
    };

    var add_preview = function () {
	var data;
	var t = $('#result').val();
	if (t.trim().length>0) {
	    data = JSON.parse(t);
	} else {
	    data = [];
	}
	var preview_data = $('#preview').val().split('\n')
	    .map(function (d) {
		var fields = d.split('\t');
		return { date: fields[0],
			 time: fields[1],
			 supplier: fields[2],
			 name: fields[3],
			 price: fields[4]};
	    });
	var data = data.concat(preview_data);
	$('#result').val(JSON.stringify(data).replace(/\},/g, '},\n'));
    };

    $('#make_lunch').click(function () {
	make_preview('lunch');
    });
    $('#make_supper').click(function () {
	make_preview('supper');
    });
    $('#add').click(function () {
	add_preview();
    });
});

//after adding to data clear preview and drop zone