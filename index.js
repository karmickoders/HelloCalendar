var _milliSecondsInOneDay = 86400000;
var _date = new Date(2014, 0, 1);
var _months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var calendarElement = document.getElementById('calendar');

var html = '';
html += '</p>';
html += '<div class="container-fluid">';
for(var month = 0; month <= 11; month++){
	html += '<div class="col-md-4">';
	html += '<table class="table table-condensed table-bordered table-striped">';
	html += '<tr><td colspan="7" align="center">' + _months[month] + '</td></tr>';
	html += '<tr><td>S</td><td>M</td><td>T</td><td>W</td><td>T</td><td>F</td><td>S</td></tr>';
	for(var week = 0; week <= 5; week++) {
		html += '<tr>';
		for(var day = 0; day <= 6; day++) {
			html += '<td>' + getDate(month, week, day) + '</td>';
		}
		html += '</tr>';
	}
	html += "</table>";
	html +=	'</div>';
}
html +=	'</div>';
	
calendar.innerHTML = html;
	
function getDate(month, week, day) {
	if(month != _date.getMonth( )) {
		return '&nbsp';
	}
	if(day != _date.getDay( )) {
		return '&nbsp';
	}
	var date = _date.getDate();
	_date = new Date(_date.getTime() + _milliSecondsInOneDay);
	return date;
};
	
