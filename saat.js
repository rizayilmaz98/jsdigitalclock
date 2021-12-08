let isim = prompt("İsim Giriniz")
let girilenisim = document.querySelector("#girilenisim")
girilenisim.innerHTML= isim
function canliSaat () {
let zaman = document.querySelector("#zaman")
let tarih =  new Date()
let saat = tarih.getHours()
let dakika = tarih.getMinutes()
let saniye = tarih.getSeconds()
var gunisimleri = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
let gun = gunisimleri[tarih.getDay()]
zaman.innerHTML = (`${saat}:${dakika}:${saniye} ${gun}`)
if(saniye <10) {
    saniye = "0"+saniye
}
if(dakika <10) {
    dakika = "0"+dakika
}
if(saat <10){
    saat = "0"+saat
}
zaman.innerHTML = (`${saat}: ${dakika}: ${saniye} ${gun}` )
}
var yenileme
yenileme = setInterval('canliSaat()', 1000)
