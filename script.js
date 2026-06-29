let sepet = [];
let favoriler = [];

const aramaKutusu = document.querySelector(".search input");

aramaKutusu.addEventListener("keyup", function () {
    let filtre = this.value.toLowerCase();
    let kartlar = document.querySelectorAll(".card");

    kartlar.forEach(function(kart){
        let isim = kart.querySelector("h3").innerText.toLowerCase();

        if(isim.includes(filtre)){
            kart.style.display = "block";
        }else{
            kart.style.display = "none";
        }
    });
});

document.querySelectorAll(".card button").forEach(function(btn){

    btn.addEventListener("click", function(){

        let kart = this.parentElement;

        let urun = kart.querySelector("h3").innerText;
        let fiyat = kart.querySelector("p").innerText;

        sepet.push({
            urun: urun,
            fiyat: fiyat
        });

        alert("🛒 " + urun + " sepete eklendi!");

        console.log(sepet);

    });

});
erkekBtn.addEventListener("click", function () {
  // Erkek ürünlerini gösteren kodlar

  bilgiGoster("👕 Buraya basınca erkek kıyafetleri açılır.");
});
kadinBtn.addEventListener("click", function () {
  // Kadın ürünlerini gösteren kodlar

  bilgiGoster("👗 Buraya basınca kadın kıyafetleri açılır.");
});