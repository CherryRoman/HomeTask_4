var pattIndex = /\b\d{5}\b/g;
var index = "15673";
var pattIp = /\d{3}.\d{3}.\d{3}.\d{3}/g;
var ip = "255.255.255.255";
var pattPriceDoll = /\$[-+]?[0-9]*[.]?[0-9]+(?:[eE][-+]?[0-9]+)?/g;
var priceDoll = "$1232.84";
var pattDateFormat = /(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/](19|20)\d\d/g;
var dateFormat = "31/12/2016";
var str = document.querySelector('body').innerHTML;

var resPattIndex = str.match(pattIndex);
var resPattIp = str.match(pattIp);
var resPattPriceDoll = str.match(pattPriceDoll);
var resPattDateFormat = str.match(pattDateFormat);
var count = 0;

for(var i = 0; i < resPattIndex.length; i++) {
  count = count + 1;
  document.write(count + " - " + resPattIndex[i] + "</br>");
}
document.write("Всего чисел с Индексом 5 numbers = " + count + "</br></br>");
count = 0;

for(var i = 0; i < resPattIp.length; i++) {
  count = count + 1;
  document.write(count + " - " + resPattIp[i] + "</br>");
}
document.write("Всего ip адресов = " + count + "</br></br>");
count = 0;

for(var i = 0; i < resPattPriceDoll.length; i++) {
  count = count + 1;
  document.write(count + " - " + resPattPriceDoll[i] + "</br>");
}
document.write("Всего цен в долларах  = " + count + "</br></br>");
count = 0;

for(var i = 0; i < resPattDateFormat.length; i++) {
  count = count + 1;
  document.write(count + " - " + resPattDateFormat[i] + "</br>");
}
document.write("Всего  Дат = " + count + "</br></br>");