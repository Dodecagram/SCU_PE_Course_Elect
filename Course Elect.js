javascript:var s=document.createElement('script');s.type='text/javascript';s.src='http://202.115.47.163/Portal/Js/md5.js';document.documentElement.appendChild(s);globalV=1;



function toXanke(){

var str = {
    courseClassId:"4**",
    studentUid:"201714*******",
    teacherUid:"81***624",
    teacherName:"张**",
};
var path = "/api/courses/students";
var key = "cgsoft";
var code = "6d3121b650e42855976d0f70dd2048e4";
var sign;
var time=Date.parse(new Date)+5000;
var arr = [],
    temp = "";
for (o in str) {
    str.hasOwnProperty(o) && arr.push(o)
};
arr = arr.sort();
for (x = 0; x < arr.length; x++) {
    temp += arr[x] + str[arr[x]]
};
var text = code + path + temp + time + " " + code;
sign = hex_md5(text);
/*str["app_key"] = key;
str["timestamp"] = time;
str["sign"] = sign;*/
str["teacherName"]=encodeURI(str["teacherName"]);
temp = "";
for (x in str) {
   // temp += x + "=" + str[x] + "&";
    temp += "&" + x + "=" + str[x] ;
}
temp = temp.replace(/&$/, "");

var xhr = new XMLHttpRequest;
xhr.open("post", "http://202.115.33.181:8086" + path, true);
xhr.setRequestHeader("Authorization", "bearer " + localStorage.getItem("Authorization"));
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xhr.send("app_key=cgsoft&timestamp="+time+"&sign="+sign+temp);

	if(globalV==1)setTimeout("toXanke()",1000);
	else setTimeout("toXanke()",100);

}

