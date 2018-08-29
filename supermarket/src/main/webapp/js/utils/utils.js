function isPageNum(pageNum){
	var re = /^[1-9]*[1-9][0-9]*$/;
	return re.test(pageNum);
}
function isSalary(salary){
	var re = /^[1-9]*[1-9][0-9]*$/;
	return re.test(salary);
}
function isEmail(email){
	
}

function isPhone(phone){
	var re = /^1(3|4|5|7|8)\d{9}$/;
	return re.test(phone);
	
}
//判断是否正实数
function isNum(money){  
    var t=/^\d+(\.\d+)?$/;
    return t.test(money)  
}

//只能输入正整数,触发事件
function onlyZ(commodityCode){
	var buyNum =$("#a"+commodityCode).val();
	var price = $("#"+commodityCode).children("td").eq(3).html();
	
	if(buyNum.length==1){
		buyNum=buyNum.replace(/[^1-9]/g,'')
	}
	else{
		buyNum=buyNum.replace(/\D/g,'')
	}
	$("#a"+commodityCode).val(buyNum);
	
	var num = price * buyNum;
	$("#"+commodityCode).children("td").eq(5).html(num);
}
//只能输入金钱
function onlyZZZ(){
	var pay =$("#pay-money").val();
	var re =  /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
	var flag = re.test(pay);
	if(flag){
		$("#pay-money").val(pay);
	}else{
		alert("请输入正确的金币额");
		$("#pay-money").val("");
		return;
	}
}
function isNull(obj){
	if (obj !== null || obj !== undefined || obj !== '')
	return false;
	else return true;
}

var TimeUtils = {
		formatToDate : function(timestamp) {
			var date = new Date(timestamp);
			var hh = date.getHours();
			var mm = date.getMinutes();
			var ss = date.getSeconds();
			var year = date.getFullYear();
			var month = date.getMonth() + 1;
			var day = date.getDate();
			var xq = date.getDay();
			
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

			var currentDate = year + "-" + month + "-" + day+" ";
			var currentTime = "" + hh + ":" + mm + ":" + ss + "";
			return currentDate + currentTime;
		}

	}


function checkUndefine(obj){
	return obj == undefined ? "":obj;
}












