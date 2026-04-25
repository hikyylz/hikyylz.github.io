## Plan: Iki Dilli Kisisel Website Kurulumu

TR/EN destekli, GitHub Pages uyumlu sade HTML/CSS/JS tabanli bir kisisel site kurulacak. Site; kendini tanitim, egitim/deneyim ozeti, yetenekler, GitHub projeleri, iletisim ve CV indirme bolumlerini icerir. Proje kartlari GitHub API ile otomatik cekilecek, API sorunu durumunda statik yedek veri gosterilecek.

**Steps**

1. Faz 1 - Proje Iskeleti: Repository kokunde statik site klasor ve dosya yapisini olustur; semantik sayfa iskeletini ve bolum anchorlarini tanimla.
2. Faz 1 - Icerik Modeli: TR/EN icerikleri tek bir JS veri modeli icinde toplandir; dil degisimi ile metinlerin yeniden render edilmesi mekanizmasini kur. _depends on 1_
3. Faz 2 - Arayuz Tasarimi: Mobil-oncelikli, modern ve okunabilir tipografiyle responsive layout kur; header/nav, hero, section kartlari, butonlar, rozetler ve footer stillerini olustur. _depends on 1_
4. Faz 2 - Etkilesim: Dil degistirici, yumusak kaydirma, aktif menu vurgusu, erisilebilirlik odakli klavye odagi ve reduced-motion uyumlulugunu ekle. _depends on 2 and 3_
5. Faz 3 - GitHub Projeleri: GitHub API uzerinden secilen kullanici reposunu cek; yildiz, dil, aciklama, baglantilar ile proje kartlari render et. API limiti/hata halinde yerel fallback JSON verisini kullan. _depends on 1_
6. Faz 3 - Sabit Bolumler: Hakkimda, egitim/deneyim, yetenekler, iletisim ve CV indirme bolumlerinin iceriklerini son hale getir; iletisim linklerini (mail, LinkedIn, GitHub) bagla. _parallel with 5 after 2_
7. Faz 4 - SEO ve Meta: Temel SEO etiketleri, Open Graph, favicon, robots ve sitemap dosyalarini ekle; sayfa baslik/aciklama metinlerini iki dil senaryosuna uygun hale getir. _depends on 2 and 3_
8. Faz 4 - Dogrulama: Masaustu + mobil responsive kontrol, dil gecisi, proje cekme/fallback, erisilebilirlik temel kontrolleri ve GitHub Pages dagitim adimlarini dogrula. _depends on all prior steps_

**Relevant files**

- Su an repo bos oldugu icin mevcut uygulama dosyasi yok; implementasyon asamasinda statik web girisi, stil, istemci scripti, proje fallback verisi ve SEO dosyalari olusturulacak.

**Verification**

1. Lokal onizleme ile tum bolumlerin gorunurlugunu ve anchor gezinmeyi test et.
2. Dil degistiricide tum sabit metinlerin ve buton etiketlerinin TR/EN arasinda dogru degistigini test et.
3. GitHub API baglantisini calistir; basarili durumda repo kartlari gelirken hata simulasyonunda fallback verinin yuklendigini dogrula.
4. Mobil breakpointlerde nav, kart yerlesimi, tipografi ve buton erisilebilirligini kontrol et.
5. Lighthouse benzeri temel kontrollerle performans/SEO/erisilebilirlikte kritik hata olmadigini dogrula.
6. GitHub Pages uzerinde yayinlama adimlarini test ederek canli URLden son kontrol yap.

**Decisions**

- Teknoloji: Sade HTML/CSS/JS
- Dil: Iki dilli (TR/EN)
- Dahil kapsam: Iletisim, CV indirme, Yetenekler, Deneyim/Egitim ozeti, GitHub proje listesi
- Haric kapsam: Blog, admin paneli, backend veri tabani, form backend entegrasyonu

**Further Considerations**

1. Proje listesi icin tum repolar mi yoksa secili (featured) repolar mi gosterilecek? Oneri: featured liste + tum projeler icin GitHub profil linki.
2. CV dosyasi repo icinde PDF olarak mi tutulacak yoksa harici baglanti mi olacak? Oneri: repo icinde versionlanmis PDF.
3. Ana dil varsayilan olarak TR mi EN mi olsun? Oneri: TR varsayilan + tek tikla EN gecis.
