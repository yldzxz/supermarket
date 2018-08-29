
package com.hkz.supermarket.utils;

import java.util.Date;
import java.util.Random;

public class Utils {

	public static String orderId(String username,Date date){
		//时间+随机数+用户名
		String orderId = "o";
		String  time= String.valueOf(new Date().getTime());
		String ramd = String.valueOf(new Random().nextInt(1000));
		orderId = orderId + time + ramd + username ;
		return orderId;
	}

	public static String dealId(String username, Date date) {
		String dealId = "d";
		String  time= String.valueOf(new Date().getTime());
		String ramd = String.valueOf(new Random().nextInt(1000));
		dealId = dealId + time + ramd + username;
		return dealId;
	}
	
	public static String inboundId(Date date) {
		String dealId = "i";
		String  time= String.valueOf(new Date().getTime());
		String ramd = String.valueOf(new Random().nextInt(1000));
		dealId = dealId + time + ramd;
		return dealId;
	}
}
