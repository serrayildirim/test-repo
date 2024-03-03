// Hesap makinesi fonksiyonu
function hesapMakinesi(islem, sayi1, sayi2) {
    let sonuc;

    switch (islem) {
        case 'toplama':
            sonuc = sayi1 + sayi2;
            break;
        case 'cikarma':
            sonuc = sayi1 - sayi2;
            break;
        case 'carpma':
            sonuc = sayi1 * sayi2;
            break;
        case 'bolme':
            sonuc = sayi1 / sayi2;
            break;
        default:
            console.log('Geçersiz işlem!');
            return;
    }

    console.log('Sonuç:', sonuc);
}

// Hesap makinesi kullanımı
hesapMakinesi('toplama', 5, 3); // Sonuç: 8
hesapMakinesi('cikarma', 10, 4); // Sonuç: 6
hesapMakinesi('carpma', 2, 6); // Sonuç: 12
hesapMakinesi('bolme', 15, 3); // Sonuç: 5
hesapMakinesi('mod', 7, 2); // Sonuç: 1
hesapMakinesi('us', 2, 3); // Sonuç: 8