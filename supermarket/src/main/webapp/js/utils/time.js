function disptime() {
	var today = new Date();
	var hh = today.getHours();
	var mm = today.getMinutes();
	var ss = today.getSeconds();
	var year = today.getFullYear();
	var month = today.getMonth() + 1;
	var day = today.getDate();
	var xq = today.getDay();
	var dayNames = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");

	if (ss < 10) {
		ss = "0" + ss + "";
	}
	if (mm < 10) {

		mm = "0" + mm;

	}
	if (hh < 10) {
		hh = "0" + hh;
	}

	if (month <= 9) {
		month = "0" + month;
	}
	if (day <= 9) {
		day = "0" + day;
	}

	var currentDate = year + "年" + month + "月" + day + "日";
	var currentTime = "" + hh + ":" + mm + ":" + ss + "";

	$("#myclock").html(currentTime);
	$("#my-time").html(currentDate);
	$("#my-tt").html(dayNames[xq]);

	var myTime = setTimeout("disptime()", 1000);
}

