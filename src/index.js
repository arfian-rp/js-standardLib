//Number
console.info("NUMBER");
const input = "120";
console.info(typeof Number(input)); //konversi string ke Number (jika tidak bisa maka akan NaN)
console.info(Number.MIN_VALUE); //min value
console.info(Number.MAX_VALUE); //max value
console.info(Number.isInteger("120"));
console.info(Number.isNaN("120"));
const value = 120;
console.info(value.toString(/*radix*/));
console.info(value.toString(2)); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#instance_methods
console.info(value.toLocaleString("ar-SA")); //https://www.lansweeper.com/knowledgebase/list-of-currency-culture-codes/

//String
console.info("\nSTRING");
console.info("Yudee".length);
console.info("Yudee".toLowerCase());
console.info("Yudee".toUpperCase());
console.info("Yudee Pratama".split(" "));

//Array
console.info("\nARRAY");
["sapi", "macan", "kucing"].forEach((e, i) => {
  console.info(`${i} => ${e}`);
});
//array queue (FIFO => first in first out)
const queue = [];
queue.push("tyson");
queue.push("jeka");
queue.push("theo");
console.info(queue.shift());
console.info(queue.shift());
console.info(queue.shift());
//array stack (LIFO) last in first out
const stack = [];
stack.push("mike");
stack.push("saragih");
stack.push("ginting");
console.info(stack.pop());
console.info(stack.pop());
console.info(stack.pop());
//array search
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2];
console.info(source.find((e) => e > 3)); //4
console.info(source.findIndex((e) => e > 3)); //3
console.info(source.includes(90)); //false
console.info(source.indexOf(2)); //1
console.info(source.lastIndexOf(2)); //9
//array filter
console.info(source.filter((e) => e % 2 === 1));
console.info(source.filter((e) => e % 2 === 0));
//array transform
const name = "Vladimir Petkovic Ks".split(" ");
console.info(name.map((e) => e.toUpperCase())); //melakukan transform tiap value dan menghasilkan array result
console.info(source.reduce((r, v) => r + v)); //melakukan transform dengan menggunakan value array dan value selanjutnya, lalu hasilnya dilanjutkan ke iterasi selanjutnya
console.info(source.reduceRight((r, v) => r + v)); //sama seperti Reduce tpi dari belakang

//Object
console.info("\nOBJECT");
const person = {
  firstName: "dwi",
  lastName: "hendrawan",
};
Object.freeze(person); //mengubah object menjadi object yang tidak bisa diubah/dihapus attribut nya
person.firstName = "heru"; //ga ngaruh
console.info(person.firstName);
//Object.seal() digunakan untuk mengubah object menjadi object yang tidak bisa dihapus attributenya
const target = { firstName: "Tyson" };
const source2 = { lastName: "Mike" };
Object.assign(target, source2); //menggabungkan source ke target
console.info(target);
console.info(Object.values(person)); //mengambil semua property value
console.info(Object.getOwnPropertyNames(person)); //mengambil semua property name

//JSON
console.info("\nJSON");
const json = JSON.stringify(person); //JS object to String(JSON)
console.info(json);
console.info(JSON.parse(json)); //String (JSON) to JS object

//Big Int
console.info("\nBIG INT");
const a = BigInt(Number.MAX_SAFE_INTEGER);
const b = BigInt(Number.MAX_SAFE_INTEGER);
const c = a + b;
console.info(c);
console.info(typeof c);

//Date
console.info("\nDATE");
console.info(new Date());
console.info(new Date(2020, 10, 10, 1, 0, 0, 0));
//                  (year,month,date?,hour?,minute?,second?,milis?) //membuat date dengan param (? => opsional)
//Epoch & Unix timestamp => hitungan milisecond sejak 1 jan 1970
console.info(Date.now());
console.info(new Date().getTime());
console.info(new Date(244851787524));
//Parsing Date
//Date.parse(YYYY-MM-DDTHH:mm:ss.sssZ)
/*
YYYY => tahun
MM => bulan
DD => tanggal
T => pemisah tanggal dan waktu
HH => jam
mm => menit
ss => detik
sss => milidetik
Z => timezone
*/
console.info(new Date(Date.parse("2010-10-22T16:22:16.222+07:00")));
//getter setter Date
const date = new Date();
date.setFullYear(2009);
console.info(date.getFullYear());
console.info(date.getMonth());
console.info(date.getDate());
console.info(date.getHours());
console.info(date.getMinutes());
console.info(date.getSeconds());
console.info(date.getMilliseconds());
console.info(date.getTimezoneOffset());

//Math
console.info("\nMATH");
console.info(Math.max(5, 8, 3, 7, 0, 2, 4));
console.info(Math.min(5, 8, 3, 7, 0, 2, 4));
console.info(Math.round(10.5));
console.info(Math.round(10.3));
console.info(Math.ceil(10.8));
console.info(Math.floor(10.8));

//Boolean
console.info("\nBOOLEAN");
console.info(Boolean(true));
console.info(Boolean(true).toString());
console.info(Boolean("true").valueOf());

//Map
console.info("\nMAP");
//MAP => key bisa tipedata apapun
const map = new Map();
map.set("name", "udeen");
map.set(true, "yes");
map.set(100, true);
console.info(map);
console.info(map.size);
console.info(map.get("name"));
console.info(map.get(true));
console.info(map.get(100));
for (const [key, val] of map) {
  console.info(`${key} => ${val}`);
}

//Set
console.info("\nSET");
//implementasi struktur data berisikan data-data uique
const set = new Set();
set.add("budi");
set.add("joko");
set.add("adi");
set.add("eko");
set.add("adi"); //hanya bisa 1x
console.info(set);
console.info(set.size);
set.forEach((e) => console.info(e));

//Symbol
console.info("\nSYMBOL");
//tipe data yang digaransi akan selalu unique setiap kali kita membuat data symbol
const first = Symbol();
const person1 = {};
person1[first] = "Tyson";
person1[Symbol.for("last")] = "Mike";
console.info(person1);

//RegExp
console.info("\nREGEXP");
console.info(/[a]/);
console.info(new RegExp("[a]"));
console.info(new RegExp(/[a]/));
console.info(/adi/.exec("adirahmantoadi")); //jika menemukan data sesuai pola maka kembalikan result, jika tidak maka null
console.info(/mike/.test("mike tyson")); //jika ada maka true, jika tidak false
//regexp modifier
/**
 * i => regex incase sensitive
 * g => pencarian secara global,default akan berhenti jika menemukan data
 * m => multiline
 */
const r = /ad[aiueo]/gi;
const t = "ada adi ade adu ado eda edi eki eka yudi yuda";
let result;
while ((result = r.exec(t)) !== null) {
  console.info(result);
}
//regex string
console.info(t.match(/ek[ai]/gi));
console.info(t.search(/ad[aiueo]/gi));
console.info(t.replace(/ek[aiu]/gi, "BIASA"));
console.info(t.split(/e/gi));

//Proxy
console.info("\nPROXY");
//proxy => wakil sebuah data (semua interaksi ke data akan melalui proxy)
const target2 = {};
const handler = {
  get: (target, property) => {
    console.info(`get(${target[property]})`);
    return target[property];
  },
  set: (target, property, value) => {
    console.log(`set(${value})`);
    target[property] = value;
  },
};
const proxy = new Proxy(target2, handler);
proxy.firstName = "Yudi";
console.info(proxy.firstName);
proxy.firstName = "Yuda";
console.info(proxy.firstName);

//Reflect
console.info("\nREFLECT");
//class yg digunakan mengeksekusi JS function
const person2 = {};
Reflect.set(person2, "key1", "value1");
Reflect.set(person2, "key2", "value2");
console.info(person2);
console.info(Reflect.has(person2, "key1"));
console.info(Reflect.has(person2, "key2"));

//Encode
console.info("\nENCODE");
//untuk menambah informasi dalam query URL agar aman(informasi tdk berubah)
const url = "http://localhost/?name=yudi ishandey";
console.info(url);
const encodedUrl = encodeURI(url);
console.info(encodedUrl);
const decodedUrl = decodeURI(encodedUrl);
console.info(decodedUrl);
//uri component
const value2 = "Yudi&Pratama=Yuda";
const url2 = "http://localhost/?name=";
console.info(url2 + encodeURIComponent(value2));
console.info(url2 + decodeURIComponent(encodeURIComponent(value2)));

//Base64
console.info("\nBASE64");
//base64 merupakan format text data yg aman dikirimkan ke web
console.info(btoa("hello world!")); //encode
console.info(atob(btoa("hello world!"))); //decode

//Eval
console.info("\nEVAL");
//eval => function yg digunakan mengeksekusi kode JS dari string
//fitur sangat menarik, namu perlu hati-hati ketika menggunakannya
eval("console.info(1+1);");
