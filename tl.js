/* ================= i18n ================= */
const T={tr:{
co_cut:'Cevap yarıda kesildi. Aynı soruyu tekrar sorabilirsin.',
sy_paused:'Pro sona erdiği için otomatik senkron durduruldu. İşlemlerin yerinde duruyor; Pro\'yu yenileyince hesabı yeniden bağlayabilirsin.',sy_pro_end:'Pro sona erdi; otomatik senkron durdu. Pro\'yu 7 gün içinde yenilersen bağlantı olduğu gibi devam eder.',
rec:'Önerilen',wel_man:'İşlemlerimi kendim gireceğim',wel_man_d:'Önce hesabının bakiyesini ve para birimini gir, sonra işlemlerini tek tek ekle. Her platformla çalışır.',wel_alt2:'Önce uygulamayı tanımak mı istiyorsun?',first_k:'Son adım',first_t:'İlk işlemini gir',first_d:'{k} hazır. Sembol ve sonucu yazman yeterli; diğer alanları istersen sonra doldurursun.',acc_first_t:'Hesap bilgilerin',acc_first_d:'Bakiye ve para birimi kâr/zarar ve getiri hesapları için kullanılır. Hepsini sonra Hesaplar sayfasından değiştirebilirsin.',acc_adv:'Gelişmiş ayarlar: risk ve başabaş aralığı',es_t:'Henüz işlem yok',es_acc_t:'Henüz hesabın yok',es_cal:'Takvim ilk işlemlerinle dolar; her gün sonucuna göre yeşil ya da kırmızı görünür.',es_trades:'İşlemlerin burada listelenecek; arayıp filtreleyebilir, sütunları seçebileceksin.',es_rep:'Raporlar ilk işlemlerinle dolar: kazanma oranı, beklenti, drawdown, setup, saat ve hata analizleri.',es_acc:'Hesabını kurduğunda bakiyen, net kazancın ve prop kuralların burada görünür.',es_setup:'Kuruluma başla',es_add:'İşlem ekle',
sup_t:'Bize yaz',sup_btn:'Destek ekibine yaz',sup_d:'Bir hata mı buldun, bir şeye takıldın mı ya da bir önerin mi var? Yaz, e-postayla dönüş yapalım. Hesap şifreni ya da yatırımcı şifreni asla yazma.',sup_from:'Dönüş yapacağımız adres',sup_email:'E-posta adresin',sup_topic:'Konu',sup_msg:'Mesajın',sup_ph:'Ne yapmaya çalıştın, ne oldu? Ekran ve cihaz bilgisi de işimize yarar.',sup_send:'Gönder',sup_sending:'Gönderiliyor…',sup_ok:'Mesajın bize ulaştı. E-postayla dönüş yapacağız.',sup_tp_bug:'Hata bildirimi',sup_tp_sync:'Hesap bağlama / senkron',sup_tp_import:'Rapor yükleme',sup_tp_account:'Üyelik ve giriş',sup_tp_billing:'Pro ve ödeme',sup_tp_idea:'Öneri',sup_tp_other:'Diğer',sup_e_email:'Geçerli bir e-posta adresi yaz.',sup_e_msg:'Mesajın çok kısa.',sup_e_limit:'Kısa sürede çok fazla mesaj gönderildi. Biraz sonra tekrar dene.',sup_e_net:'İnternet bağlantına ulaşılamadı. Bağlantını kontrol edip tekrar dene.',sup_e_setup:'Mesaj şu an gönderilemedi. Biraz sonra tekrar dene.',sup_e_server:'Mesaj şu an gönderilemedi. Biraz sonra tekrar dene.',sup_e_message:'Mesajın çok kısa ya da çok uzun.',s_help:'Yardım ve destek',s_help_s:'Bir sorun mu var? Buradan bize ulaş.',s_help_c:'Yardım merkezi',gs_app:'Telefonuna ekle',gs_app_d:'Ana ekrandan tek dokunuşla aç; uygulama gibi tam ekran çalışır.',a2_t:'Ana ekrana ekle',a2_d:'TradeLog\'u ana ekranına ekle; tek dokunuşla, uygulama gibi tam ekran açılsın. İndirme ya da mağaza gerekmez.',a2_ios:['Safari\'de alttaki <b>Paylaş</b> düğmesine dokun (yukarı oklu kare).','Listeyi kaydır ve <b>Ana Ekrana Ekle</b>\'yi seç.','Sağ üstte <b>Ekle</b>\'ye dokun.'],a2_and:['Chrome\'da sağ üstteki <b>⋮</b> menüsüne dokun.','<b>Ana ekrana ekle</b> ya da <b>Uygulamayı yükle</b>\'yi seç.','<b>Ekle</b> ya da <b>Yükle</b>\'ye dokunarak onayla.'],a2_ok:'Ekledim',a2_later:'Sonra',
mt_e_gone:'Bu hesaba erişimin kaldırılmış.',mt_invite:'Davet et',mt_ph:'mentor@ornek.com',mt_h:'Mentorun, gönderdiğin linki açıp bu e-postayla giriş yaptığında hesabını görebilir; hiçbir şeyi değiştiremez.',mt_pending:'Bekliyor',mt_active:'Aktif',mt_copy:'Daveti kopyala',mt_remove:'Kaldır',mt_remove_c:'{e} artık hesabını göremeyecek. Emin misin?',mt_inv_t:'Davet hazır',mt_inv_p:'Bu mesajı mentoruna ({e}) WhatsApp ya da e-postayla gönder. Linki açıp bu e-postayla giriş yapınca hesabını görebilecek.',mt_msg:'Merhaba! TradeLog\'da işlemlerimi görebilmen için seni mentor olarak ekledim. Bu linki aç ve {e} adresiyle giriş yap (hesabın yoksa ücretsiz kayıt ol): {l}',mt_e_dup:'Bu kişiyi zaten davet ettin.',mt_e_lim:'En fazla 5 mentor ekleyebilirsin.',mt_e_self:'Kendini mentor olarak ekleyemezsin.',mt_students:'Mentor olduğun hesaplar',mt_view:'Görüntüle',mt_leave:'Ayrıl',mt_leave_c:'{e} hesabından ayrılmak istiyor musun? Bir daha görmek için yeni davet gerekir.',mt_need_login:'Mentor davetini kabul etmek için davet edilen e-postayla giriş yap ya da kayıt ol.',mt_ok:'{e} hesabının mentoru oldun.',mt_e_email:'Bu davet {e} adresine gönderilmiş. O adresle giriş yapman gerekiyor.',mt_e_nf:'Bu davet linki geçersiz ya da kaldırılmış.',mt_viewing:'{e} hesabını görüntülüyorsun · salt okunur',mt_back:'Kendi hesabıma dön',mt_ro:'Bu hesap salt okunur; değişiklik yapamazsın.',mt_loading:'Yükleniyor…',mt_none:'Henüz mentor eklemedin.',
soon_l:'Yakında',pro_title:'TradeLog Pro',plan_pro:'Pro',plan_pro_tr:'Pro · ücretsiz deneme',plan_trial:'Pro deneme · {n} gün kaldı',pro_see:'Pro\'yu incele',pro_trial:'Pro yayına girdiğinde 7 gün ücretsiz deneyebileceksin; deneme boyunca ücret alınmaz.',pro_mo:'/ ay',pro_yr:'/ yıl (%30 indirim)',pro_wait:'Pro açılınca haber ver',pro_side_try:'7 gün ücretsiz dene →',pw_t:'TradeLog Pro\'ya hoş geldin!',pw_trial:'7 günlük ücretsiz denemen başladı. {d} tarihine kadar ücret alınmaz; Ayarlar → Plan\'dan istediğin an iptal edebilirsin.',pw_active:'Aboneliğin aktif. Pro\'nun bütün özellikleri hesabında açıldı.',pw_k:'Artık hesabında',pw_d_sync:'İşlemlerin her gece MT4/MT5\'ten kendiliğinden gelir.',pw_d_ai:'Günlüğünü okuyan koçuna istediğini sor.',pw_d_accounts:'Kişisel, challenge ve funded hesapların tek panelde.',pw_d_shots:'Her işleme giriş, çıkış ve analiz görüntülerini ekle.',pw_d_mentor:'Mentoruna hesabını salt okunur aç.',pw_sync_a:'Hesap bağla',pw_ai_a:'Soru sor',pw_mt_a:'Mentor ekle',pw_foot:'Onay e-postası Paddle\'dan gönderildi. Planını Ayarlar → Plan\'dan yönetebilirsin.',pw_later:'Panele dön',pw_go:'MT4/MT5 hesabını bağla',pc_t:'Plan',pc_trial:'Ücretsiz deneme',pc_active:'Aktif',pc_ending:'İptal edildi',pc_due:'Ödeme bekliyor',pc_free:'Ücretsiz',pc_paddle:'Kart bilgilerin ve faturaların Paddle\'ın güvenli müşteri sayfasında.',pc_free_d:'Sınırsız işlem, bütün raporlar, haftalık özet, takvim, playbook ve prop firm kuralları. 2 aktif hesap, işlem başına 1 ekran görüntüsü.',pc_up_t:'TradeLog Pro',pc_up_s:'Otomatik MT4/MT5 senkronu, TradeLog AI ve 20 hesap. 7 gün ücretsiz.',pc_up_s2:'Otomatik MT4/MT5 senkronu, TradeLog AI ve 20 hesap.',pn_t:'İşlemlerini TradeLog AI yorumlasın',pn_s:'Pro ile koçun setup\'larına, seanslarına ve hatalarına bakıp neyi değiştirmen gerektiğini söyler; işlemlerin MT4/MT5\'ten kendiliğinden gelir. 7 gün ücretsiz, bugün ücret alınmaz.',pn_later:'Şimdi değil',pay_go:'7 gün ücretsiz başla',pay_yr_m:'yıllık · ayda $13,25',pay_today:'Bugün',pay_today_s:'7 gün ücretsiz Pro',pay_then_s:'Aboneliğin başlar. Öncesinde e-postayla hatırlatırız; bu tarihten önce iptal edersen ücret alınmaz.',pay_fine:'İstediğin an iptal · İlk ödemede 14 gün koşulsuz iade · Ödeme Paddle güvencesiyle',pay_amt_m:'$19 / ay',pay_amt_y:'$159 / yıl',pay_ren_m:'Her ay yenilenir',pay_ren_y:'Her yıl yenilenir',sub_cancel:'Aboneliği iptal et',pay_go2:'Pro\'ya geç',pay_mo:'aylık',pay_yr:'yıllık',pay_save:'%30 indirim',pay_hint:'<b>Bugün ücret alınmaz.</b> Kart bilgisi istenir ama 7 günlük deneme boyunca hiçbir ödeme alınmaz; bitmeden iptal edersen hiç ödemezsin. İptal etmezsen deneme bitiminde {p} başlar. Ödeme Paddle üzerinden güvenle alınır; ilk ödemede 14 gün koşulsuz iade.',pay_hint2:'Ödeme Paddle üzerinden güvenle alınır. İstediğin an iptal et; ilk ödemede 14 gün koşulsuz iade.',pay_pm:'aylık $19',pay_py:'yıllık $159',pay_opening:'Açılıyor…',pay_login:'Pro\'ya geçmek için önce hesabınla giriş yap.',pay_e_load:'Ödeme sayfası açılamadı. İnternetini kontrol edip tekrar dene.',pay_wait:'Ödemen alındı, Pro açılıyor…',pay_ok:'Pro açıldı. Hoş geldin!',pay_slow:'Ödemen alındı ama Pro henüz açılmadı. Birkaç dakika içinde açılmazsa destek ekibine yaz.',pay_e_portal:'Abonelik sayfası açılamadı. Biraz sonra tekrar dene.',sub_renews:'Pro · {p} · Sonraki ödeme {d} ({a})',sub_trial:'Ücretsiz deneme · {d} tarihinde {a} ile başlar',sub_ends:'Pro iptal edildi · {d} tarihine kadar açık',sub_due:'Son ödeme alınamadı. Pro\'nun kapanmaması için kartını güncelle.',sub_over:'Pro aboneliğin sona erdi.',sub_manage:'Aboneliği yönet',pro_waited:'Listedesin',pro_wait_ok:'Listeye eklendin. Pro açılınca sana e-posta göndereceğiz.',pro_wait_login:'Haber almak için önce hesabınla giriş yap.',pro_side_t:'TradeLog Pro',pro_side_s:'Otomatik senkron, AI koç ve daha fazlası',ai_ask:'TradeLog AI\'ye sor',mentor_t:'Mentor erişimi',mentor_p:'Mentoruna ya da arkadaşına hesabını salt okunur aç; işlemlerini, notlarını ve raporlarını görsün, sana yol göstersin.',mentor_add:'Mentor ekle',
pro_f_sync:'MT4/MT5 otomatik senkron',pro_f_accounts:'20 aktif hesap, hepsi tek panelde',pro_f_ai:'TradeLog AI: yorum ve soru-cevap',pro_f_shots:'İşlem başına 10 ekran görüntüsü',pro_f_mentor:'Mentoruna salt okunur erişim',
pro_h_sync:'İşlemlerin kendiliğinden gelsin',pro_p_sync:'MT4/MT5 hesabını bir kez bağla; kapanan işlemler, bakiye ve para hareketleri otomatik eklensin. Rapor yüklemeye gerek kalmaz.',
pro_h_accounts:'Bütün hesapların tek panelde',pro_p_accounts:'Ücretsiz planda 2 aktif hesap var. Pro ile 20 hesaba kadar challenge, funded ve kişisel hesaplarını birlikte takip et.',
pro_h_ai:'Verilerini okuyan bir koç',pro_p_ai:'TradeLog AI işlemlerine, notlarına ve hatalarına bakar; neyi sürdürmen, neyi bırakman gerektiğini söyler ve sorularını cevaplar.',
pro_h_shots:'Her işleme 10 ekran görüntüsü',pro_p_shots:'Giriş, yönetim ve çıkış grafiklerini aynı işlemde sakla.',
pro_h_mentor:'Mentorunla birlikte çalış',pro_p_mentor:'Mentoruna hesabını salt okunur aç; işlemlerini, notlarını ve raporlarını görsün.',
pro_h_gen:'Daha az kayıt, daha çok içgörü',pro_p_gen:'Pro; işlemlerini MT4/MT5\'ten kendiliğinden getirir, birden çok hesabı tek yerden yönetmeni ve verilerini bir koçla yorumlamanı sağlar.',
sh_btn:'Paylaş',sh_t_trade:'İşlemi paylaş',sh_t_week:'Haftalık özeti paylaş',sh_p:'Linki olan herkes bu sayfayı görebilir. Sayfa, linki oluşturduğun andaki hali gösterir; istediğin zaman kapatabilirsin.',sh_o_notes:'Notlarımı göster',sh_o_money:'Para tutarını göster',sh_o_shots:'Ekran görüntülerini göster',sh_o_focus:'Gelecek hafta önerilerini göster',sh_o_note:'Haftanın notunu göster',sh_name:'Adın (isteğe bağlı)',sh_name_ph:'Örn. Taner',sh_prev:'Önizleme',sh_make:'Link oluştur',sh_making:'Hazırlanıyor…',sh_ready:'Linkin hazır',sh_copy:'Linki kopyala',sh_open:'Aç',sh_revoke:'Linki kapat',sh_revoke_c:'Link kapatılsın mı? Linki olanlar artık bu sayfayı göremez.',sh_revoked:'Link kapatıldı',sh_err:'Link oluşturulamadı. Bağlantını kontrol edip tekrar dene.',sh_list:'Paylaşım linklerim',sh_list_s:'Kapatınca link çalışmaz',sh_list_empty:'Henüz paylaşım linkin yok. İşlem detayında ya da haftalık özette Paylaş\'a bas.',sh_views:'{n} görüntülenme',sh_by:'{k} paylaştı',sh_anon:'Bir TradeLog kullanıcısı paylaştı',sh_cta_t:'Sen de her işlemden bir ders çıkar.',sh_cta_p:'TradeLog ücretsiz trading günlüğü: işlemlerini kaydet, neyin işe yaradığını R cinsinden gör.',sh_cta:'Ücretsiz başla',sh_gone_t:'Bu link artık geçerli değil',sh_gone_p:'Paylaşan kişi linki kapatmış ya da adres hatalı olabilir.',sh_loading:'Yükleniyor…',
l_shots_img:'Ekran görüntüleri',shot_add:'Görsel ekle',shot_paste:'ya da Ctrl+V ile yapıştır',shot_up:'Yükleniyor…',shot_err:'Görsel yüklenemedi. Bağlantını kontrol edip tekrar dene.',shot_max:'Bir işleme en fazla {n} görsel ekleyebilirsin.',shot_need:'Ekran görüntüsü eklemek için hesabınla giriş yap.',shot_tg:'Ekran görüntüsü eklemek için TradeLog\'u web\'de aç.',shot_rm:'Görseli kaldır',shot_view:'Görseli büyüt',
au_in_t:'Tekrar hoş geldin',au_in_s:'Hesabına giriş yap.',au_in_btn:'Giriş yap',au_in_link:'Giriş yap',au_up_t:'Ücretsiz hesabını oluştur',au_up_s:'Süresiz ücretsiz plan, işlem sınırı yok. Bir dakikada hazır.',au_up_btn:'Hesap oluştur',au_up_link:'Ücretsiz kayıt ol',au_google_up:'Google ile kayıt ol',
au_pw:'Şifre',au_pw_new:'Yeni şifre',au_pw_new_ph:'En az 8 karakter',au_pw_h:'En az 8 karakter. Harf ve rakamı karıştırman önerilir.',au_show:'Göster',au_hide:'Gizle',au_forgot:'Şifremi unuttum',au_new:'Hesabın yok mu?',au_have:'Zaten hesabın var mı?',au_back_in:'Girişe dön',
au_fg_t:'Şifreni sıfırla',au_fg_s:'E-posta adresini yaz, sana şifre sıfırlama linki gönderelim.',au_fg_btn:'Sıfırlama linki gönder',au_rs_s:'Şifre sıfırlama linkini gönderdik.',au_rs_sent:'Linki {e} adresine gönderdik. Linke tıklayınca yeni şifreni belirleyeceksin.',
au_vf_s:'Hesabın neredeyse hazır. E-posta adresini doğrulaman gerekiyor.',au_vf_sent:'Doğrulama linkini {e} adresine gönderdik. Linke tıklayınca hesabın açılacak.',au_spam:'Birkaç dakika içinde gelmezse spam klasörüne bak.',au_resend_l:'Linki tekrar gönder',
au_np_t:'Yeni şifreni belirle',au_np_s:'Bundan sonra bu şifreyle giriş yapacaksın.',au_np_btn:'Şifreyi kaydet',au_pw_saved:'Şifren kaydedildi',au_pw_dlg:'Şifre belirle / değiştir',
au_e_cred:'E-posta ya da şifre hatalı.',au_e_exists:'Bu e-postayla zaten bir hesap var. Giriş yap ya da şifreni sıfırla.',au_e_weak:'Şifre en az 8 karakter olmalı.',au_e_pw:'Şifreni yaz.',au_e_unconf:'E-posta adresin henüz doğrulanmadı. Gelen kutundaki doğrulama linkine tıkla.',au_e_noauth:'Şu an bu adrese e-posta gönderemiyoruz. Google ile devam etmeyi dene ya da daha sonra tekrar dene.',au_e_same:'Yeni şifre eskisiyle aynı olamaz.',
au_s_l:'Hesabın yoksa aynı adımlarla açılır. Şifre yok: e-postana tek kullanımlık bir giriş linki göndereceğiz.',au_s2l:'Giriş linkini gönderdik. E-postandaki linke tıkla; TradeLog açılıp seni içeri alacak.',au_sent_l:'Linki {e} adresine gönderdik.',au_link_h:'E-postayı bu cihazda açarsan giriş burada tamamlanır. Birkaç dakika içinde gelmezse spam klasörüne bak. Link tek kullanımlıktır ve kısa süre geçerlidir.',au_resent_l:'Yeni bir link gönderdik.',au_linking:'Giriş yapılıyor…',au_e_link:'Bu giriş linkinin süresi dolmuş ya da daha önce kullanılmış. Yeni bir link iste.',
au_t:'TradeLog\'a giriş yap',au_t2:'E-postanı kontrol et',au_s:'Hesabın yoksa aynı adımlarla açılır. Şifre yok: e-postana tek kullanımlık bir kod göndereceğiz.',au_s2:'Gelen kutunda TradeLog\'dan gelen kodu gir. Birkaç dakika içinde gelmezse spam klasörüne bak.',
au_google:'Google ile devam et',au_or:'ya da',au_email:'E-posta',au_send:'Kod gönder',au_wait:'Bekle…',au_sent:'Kodu {e} adresine gönderdik.',au_code:'Doğrulama kodu',au_verify:'Giriş yap',au_change:'E-postayı değiştir',au_resend:'Kodu tekrar gönder',au_resend_in:'Tekrar gönder ({s} sn)',au_resent:'Yeni bir kod gönderdik.',
au_local:'Bu cihazdaki {n} işlemin giriş yapınca hesabına taşınacak.',au_legal:'Devam ederek {t} ve {p} kabul etmiş olursun.',au_terms:'Kullanım koşullarını',au_privacy:'Gizlilik politikasını',au_preview:'Önizlemede hesapsız devam et',
au_net:'Sunucuya bağlanılamadı. İnternet bağlantını kontrol edip tekrar dene.',au_pt:'Hesabınla gelenler',au_p1:'Her cihazda aynı veri. ',au_p1d:'Telefonda kaydet, bilgisayarda incele.',au_p2:'Verilerin güvende. ',au_p2d:'Şifreli bağlantı, Avrupa\'daki sunucular; verini yalnızca sen görürsün.',au_p3:'Kontrol sende. ',au_p3d:'İstediğin an indir ya da hesabını tamamen sil.',
au_e_rate:'Çok fazla deneme yapıldı. Birkaç dakika bekleyip tekrar dene.',au_e_code:'Kod hatalı ya da süresi dolmuş. Kontrol edip tekrar dene ya da yeni kod iste.',au_e_closed:'Şu an yeni hesap açılamıyor. Daha sonra tekrar dene.',au_e_gen:'Bir şeyler ters gitti. Tekrar dene.',au_e_mail:'Geçerli bir e-posta adresi yaz.',
sb_moved:'Bu cihazdaki verilerin hesabına taşındı',sb_both_t:'Verilerini nasıl birleştirelim?',sb_both_p:'Bu cihazda {a} işlem, hesabında {b} işlem var.',sb_merge:'Birleştir (önerilen)',sb_merge_d:'İkisi de korunur; aynı işlem iki kez eklenmez.',sb_server:'Hesabımdakini kullan',sb_server_d:'Bu cihazdaki veriler hesabındakiyle değiştirilir.',sb_device:'Bu cihazdakini kullan',sb_device_d:'Hesabındaki veriler bu cihazdakiyle değiştirilir.',
sb_acc:'Profil',plan_free_n:'Ücretsiz plan',sb_now:'Şimdi senkronize et',sb_out:'Çıkış yap',sb_del:'Hesabı sil',sb_acc_h:'Verilerin hesabında saklanır; giriş yaptığın her cihazda aynı veriyi görürsün.',
sb_out_c:'Çıkış yapılsın mı? Verilerin hesabında kalır; bu cihazdaki kopya silinir.',sb_out_c2:'Bazı değişiklikler henüz hesabına gönderilemedi (bağlantı yok). Şimdi çıkarsan bu değişiklikler kaybolur. Yine de çıkılsın mı?',
sb_del_c:'Hesabın ve hesabındaki bütün veriler kalıcı olarak silinecek. Bu işlem geri alınamaz. Devam edilsin mi?',sb_deleted:'Hesabın silindi',sb_del_err:'Hesap silinemedi. İnternet bağlantını kontrol edip tekrar dene.',
sbs_ing:'Senkronize ediliyor…',sbs_ok:'Hesabınla senkronize',sbs_err:'Senkron başarısız; tekrar denenecek. Veriler bu cihazda duruyor.',sbs_off:'Çevrimdışı. Değişiklikler bağlantı gelince gönderilecek.',
privacy_sb:'Verilerin hesabında, Avrupa\'daki (Frankfurt) sunucularda şifreli bağlantıyla saklanır. Yalnızca sen görebilirsin; istediğin an indirebilir ya da hesabını silebilirsin.',confirm_wipe_sb:'Bütün işlemler, hesaplar, playbook\'lar ve günlük notları hem bu cihazdan hem hesabından silinecek. Emin misin?',
rt_week:'Haftalık özet',wk_t:'Haftalık özet',wk_this:'Bu hafta',wk_prev:'Geçen hafta',wk_copy:'Özeti kopyala',wk_copy_h:'Özeti kopyalayıp mentoruna, arkadaşına ya da kendine gönderebilirsin.',wk_empty:'Bu hafta kayıtlı işlem yok.',wk_go_prev:'Geçen haftaya bak',
wk_vs:'Geçen hafta {x}',wk_vs_none:'Geçen hafta işlem yok',wk_dl:'geçen haftaya göre {x}',wk_vs_t:'Geçen hafta',wk_net:'Net sonuç',wk_green:'Yeşil gün',wk_days_n:'{n} işlem günü',wk_hi:'Öne çıkanlar',wk_best_t:'En iyi işlem',wk_worst_t:'En kötü işlem',wk_best_d:'En iyi gün',wk_worst_d:'En zor gün',wk_best_s:'En çok kazandıran setup',wk_mis:'Hataların maliyeti',wk_jr:'Günlük yazılan gün',
wk_focus:'Gelecek hafta için',wk_focus_s:'Bu haftanın verilerinden',wk_focus_none:'Öneri çıkarmak için yeterli veri yok. İşlemlere setup ve hata eklersen burası dolar.',wk_note:'Haftanın notu',wk_note_s:'Ne iyi gitti, neyi değiştireceksin?',wk_note_ph:'Örn. Breakout\'larda sabırlıydım. Gelecek hafta pazartesi işlem sayımı 2 ile sınırlayacağım.',wk_note_save:'Notu kaydet',wk_open:'Özeti aç',wk_card_s:'{n} işlem · kazanma {w}',
wf_mis:'"{k}" hatası bu hafta {r} kaybettirdi ({n} işlem). Gelecek hafta işleme girmeden önce bunu kontrol et.',wf_off:'Plan dışı {n} işlem toplam {r}. Gelecek hafta yalnızca playbook\'undaki setup\'ları al.',wf_emo:'"{k}" işaretli {n} işlem toplam {r}. Bu duyguyu fark ettiğinde işlem açmadan önce dur.',wf_dll:'{n} günde günlük kayıp sınırını (−{l}R) aştın. Sınıra gelince o gün ekranı kapat.',wf_maxt:'{n} günde günlük işlem sınırını ({l} işlem) geçtin.',wf_setup_bad:'{k} bu hafta {r} getirdi ({n} işlem). Kurallarını gözden geçir ya da bir hafta ara ver.',wf_setup_good:'{k} bu hafta {r} getirdi ({n} işlem). Gelecek hafta ona odaklan.',wf_clean:'Bu hafta bütün işlemlerin plana uygundu. Aynı şekilde devam et.',wf_jr:'Bu hafta günlük yazmadın. Aşağıya haftanın notunu iki cümleyle yaz.',
nav_imp:'Rapor yükle',ok_btn:'Tamam',cols_btn:'Sütunlar',cols_t:'Tablo sütunları',cols_h:'Tabloda görmek istediğin sütunları seç. Tarih, sembol ve R her zaman görünür.',cols_reset:'Varsayılana dön',acc_added:'Hesap eklendi',gs_t:'Başlangıç',gs_s:'{d} / {n} adım tamamlandı',gs_hide:'Gizle',gs_go:'Başla',gs_acc:'Hesabını ekle',gs_trade:'İlk işlemini ekle',gs_trade_d:'Elle ekle ya da MT4/MT5 raporunu yükle.',gs_pb:'Bir playbook oluştur',gs_pb_d:'Setup kurallarını yaz; hangi kurala uyunca kazandığını gör.',gs_rules:'Prop firm kurallarını gir',gs_rules_d:'Günlük ve toplam kayıp limitini gir; yaklaşınca uyarı al.',gs_jr:'İlk günlüğünü yaz',gs_jr_d:'Seans öncesi planını ya da gün sonu notunu kaydet.',acc_word:'hesap',wel_step2:'2. adım',wel_ready_t:'Hesabın hazır',wel_ready_d:'{k} eklendi. Şimdi ilk işlemini ekle; panel, takvim ve raporlar işlemlerinle dolacak.',add_t:'İşlem ekle',add_man:'İşlemi elle gir',add_rep:'Rapor yükle',add_how:'İşlemlerin nereden gelsin?',add_accs:'{n} hesap',add_man_d:'Sembol, yön ve sonucu formdan gir. Yaklaşık 15 saniye.',add_rep_d:'Rapordaki işlemler hesabına eklenir. Daha önce eklenenler atlanır, elle girdiklerin rapordakiyle eşleşir.',wel_step:'1. adım',wel_acc_t:'Hesabını kuralım',wel_acc_d:'İşlemlerin, bakiyen ve prop kuralların hesaba göre takip edilir. İşlemlerin nereden gelsin?',wel_alt:'Önce bakmak mı istiyorsun?',acc_m_auto:'Otomatik bağla',acc_m_auto_d:'MT4/MT5 hesabını yatırımcı şifresiyle bağla; işlemler ve bakiye kendiliğinden gelsin.',soon_pro:'Yakında · Pro',acc_manage_all:'Hesapları yönet',acc_n:'{n} hesap',mood_1:'Çok kötü',mood_2:'Kötü',mood_3:'Normal',mood_4:'İyi',mood_5:'Çok iyi',nav_home:'Ana sayfa',th_to_dark:'Koyu tema',th_to_light:'Açık tema',
r_hint:'R, riske ettiğin tutarın katıdır. Stop olduysan −1, riskinin 2 katını kazandıysan 2 yaz. Emin değilsen aşağıdan sonucu seçmen yeterli.',ph_rra:'Örn. 2 veya −1',l_emo_q:'Nasıl hissettin?',rr_hint:'Girişte hedeflediğin kazanç (R)',pnl_hint:'Para olarak net sonuç; girersen bakiye kesinleşir',rating_hint:'Sonuçtan bağımsız: kurallara ne kadar iyi uydun?',k_rr_s:'Ortalama kazanç ÷ ortalama kayıp',k_plan_s2:'Plana uyduğun işlemler',acc_add_how:'Hesabın işlemleri nereden gelsin?',acc_m_rep:'MT4/MT5 raporu yükle',acc_m_rep_d:'Hesap adı, para birimi, bakiye ve geçmiş işlemlerin tek seferde gelir. Şifre gerekmez.',acc_m_man:'Hesabı elle oluştur',acc_m_man_d:'Hesap adını, bakiyeyi ve para birimini sen yazarsın; işlemlerini sonra tek tek eklersin.',acc_from_rep:'MetaTrader verisinden alındı',show_more:'Daha fazla göster ({n} işlem daha)',wr_s:'Kazanma',period:'Dönem',dg_in:'İçe aktar',dg_out:'Yedek ve dışa aktarma',dg_demo:'Örnek veri',archived:'Arşiv',acc_link:'Rapor eşleştirmesi',acc_link_on:'Bu numaradaki MT4/MT5 raporları otomatik olarak bu hesaba eklenir.',acc_link_off:'Henüz eşleşmedi. Bu hesabın MT4/MT5 raporunu yüklediğinde hesap numarası otomatik eşleşir; sonraki raporlar buraya gelir. Bu bir hesap bağlantısı değildir, şifre istenmez.',acc_unlink:'Eşleştirmeyi kaldır',acc_unlink_c:'#{n} eşleştirmesi kaldırılsın mı? İşlemler silinmez; bir sonraki raporda hesabı yeniden seçmen istenir.',acc_risk_l:'risk',at_challenge:'Challenge',at_funded:'Funded',at_personal:'Kişisel',at_demo:'Demo / backtest',acc_type:'Hesap türü',acc_alltype:'Tüm {k} hesaplar',
acc_edit:'Hesabı düzenle',acc_name_ph:'Örn. FTM 10K Funded',acc_risk_h:'Sonucu girilmeyen işlemlerde PnL tahmini için',acc_req:'Bakiye ve risk 0 veya daha büyük olmalı.',
acc_manage:'Hesap yönetimi',acc_arch:'Arşivle',acc_arch_h:'Veriler silinmez; hesap birleşik görünümlerden ve yeni işlem seçimlerinden kalkar. Eski challenge hesapları için.',acc_unarch:'Arşivden çıkar',
acc_del:'Hesabı verileriyle sil',acc_del_h:'Hesap, {n} işlemi ve para hareketleri kalıcı olarak silinir.',acc_del_c2:'"{k}" hesabı, içindeki {n} işlem ve para hareketleri kalıcı olarak silinecek. Bu geri alınamaz. Devam edilsin mi?',
acc_last:'En az bir aktif hesap kalmalı.',acc_archived:'Hesap arşivlendi',acc_unarchived:'Hesap arşivden çıkarıldı',
s_arch:'Arşivlenmiş hesaplar ({n})',s_dedup:'Birleşik görünümde kopya işlemleri bir kez say',s_dedup_d:'Aynı işlemi birden fazla hesapta açtıysan (aynı sembol ve yön, 2 dakika içinde) istatistiklerde tek işlem sayılır; PnL toplanır.',
s_rules_s:'Tüm hesaplar için, R cinsinden',copies:'{n} hesapta',
ar_title:'Prop firm kuralları',ar_sub:'başlangıç bakiyesinin yüzdesi',ar_dll:'Günlük max kayıp',ar_dll_h:'Örn. 5',ar_mll:'Toplam max kayıp',ar_mll_h:'Örn. 10',ar_tgt:'Kâr hedefi',ar_tgt_h:'Örn. 8 (funded ise boş bırak)',
ar_note:'Hesaplama kapanmış işlemlere göredir; açık pozisyonların anlık zararı dahil değildir. Firman günlük limiti gün başı bakiyesi veya equity üzerinden hesaplıyorsa küçük farklar olabilir.',
ar_dll_s:'günlük %{v}',ar_mll_s:'toplam %{v}',ar_tgt_s:'hedef %{v}',ar_card:'Hesap kuralları',ar_card_s:'Bugün ve toplamda kalan limitler',
ar_left:'{x} kaldı / {l}',ar_prog:'{x} / {l}',ar_hit:'Limit aşıldı',ar_done:'Hedefe ulaşıldı',
al_dll_hit:'{k}: günlük kayıp limiti ({l}) aşıldı. Bugün yeni işlem açma.',al_dll_near:'{k}: günlük kayıp limitine {x} kaldı.',al_mll_hit:'{k}: toplam kayıp limiti aşıldı.',al_mll_near:'{k}: toplam kayıp limitine {x} kaldı.',
im_flow_h:'Raporu ne sıklıkla yüklemeliyim?',im_drop:'Raporunu buraya sürükle ya da seç',im_drop_s:'MT4/MT5 raporu: HTML, Excel (XLSX) ya da CSV',im_how:'Raporu nasıl alırım?',im_phone_h:'Telefonda rapor alabilir miyim?',im_flow:'İstediğin sıklıkla, örneğin haftada bir. Daha önce eklenen işlemler atlanır. İşlemden hemen sonra telefondan kısa bir kayıt girdiysen, rapordaki aynı işlemle eşleşir: senin notların, setup ve hataların korunur; lot, fiyat, net kâr ve R rapordan güncellenir. Para yatırma ve çekmeler de rapordan alınır.',
im_add:'{n} yeni işlem eklenecek.',im_match:'{n} işlem, elle girdiğin kayıtlarla eşleşti. Notların korunacak; rakamlar rapordan güncellenecek.',
im_ops:'Para hareketleri: {d} yatırma ({da}), {w} çekme ({wa}).',im_bal_ok:'Hesaplanan bakiye rapordaki son bakiyeyle eşleşiyor ({b}).',
im_bal_diff:'Rapordaki son bakiye {b}, hesaplanan {c}. Rapor hesabın tüm geçmişini kapsamıyorsa başlangıç bakiyesini düzelt.',im_bal_set:'Başlangıç bakiyesi rapordaki ilk para yatırmadan alınacak: {a} → {b}.',im_nothing:'Bu rapordaki her şey zaten ekli.',im_tz_auto:'Saat farkı, elle girdiğin işlemlere göre otomatik seçildi ({h} saat). Bir sonraki raporda bu hesap için hatırlanacak.',
im_done:'{n} işlem eklendi, {u} işlem güncellendi',
acc_now:'Güncel bakiye',im_linked:'Bu rapor {k} hesabına ait (#{n}); işlemler oraya eklenecek.',im_willlink:'{k} hesabı #{n} numarasıyla eşleştirilecek. Bu numaradaki sonraki raporlar otomatik olarak buraya gelir.',im_wrongacc:'{k} hesabı #{a} numarasıyla eşleşmiş, ama bu rapor #{b} hesabına ait. Doğru hesabı seç ya da yeni hesap oluştur.',im_choose:'Eklediğin hesaplardan biri bu rapora aitse onu seç; değilse yeni hesap oluşturulur. Seçtiğin hesap bu numarayla eşleşir, sonraki raporlar otomatik oraya gider.',tx_btn:'Para hareketleri ({n})',tx_title:'{k}: bakiye',tx_start:'Başlangıç',tx_dep:'Yatırılan',tx_wd:'Çekilen',tx_pnl:'İşlem sonucu',
tx_est:'≈ PnL girilmemiş işlemlerin sonucu, R ve hesabın risk ayarından tahmin edildi.',tx_add:'Para hareketi ekle',tx_dep1:'Yatırma',tx_wd1:'Çekme',tx_amt:'Tutar',tx_note:'Not',tx_note_ph:'Örn. prop firm ödemesi',
tx_addbtn:'Ekle',tx_list:'Geçmiş',tx_empty:'Henüz para hareketi yok.',tx_rep:'rapordan',tx_req:'Tutar ve tarih gerekli.',tx_del_c:'Bu para hareketi silinsin mi?',
cancel:'Vazgeç',im_btn:'İçe aktar',m_broker:'MT4/MT5 raporu içe aktar',f_rev:'Tüm işlemler',f_rev_p:'Değerlendirilmemiş',
im_title:'MT4/MT5 raporu yükle',im_intro:'MetaTrader raporundaki işlemler sembol, yön, saat, lot, fiyat ve kâr bilgileriyle eklenir. Stop loss varsa R otomatik hesaplanır; setup ve psikolojiyi sonra hızlıca eklersin.',
im_mt5:'MetaTrader 5 (bilgisayar)',im_mt5_s:'Alttaki Araç Kutusu\'nda Geçmiş sekmesini aç (Ctrl+T)|Listeye sağ tıkla, Pozisyonlar görünümünü ve dönemi seç (ör. Son 3 ay)|Tekrar sağ tıkla: Rapor → HTML veya Open XML (Excel)|Kaydedilen dosyayı buraya yükle',
im_mt4:'MetaTrader 4 (bilgisayar)',im_mt4_s:'Terminal penceresinde Hesap Geçmişi sekmesini aç|Sağ tıkla, dönemi seç (ör. Tüm geçmiş)|Sağ tıkla: Raporu Kaydet veya Detaylı Raporu Kaydet|Kaydedilen .htm dosyasını buraya yükle',
im_phone:'Telefondaki MetaTrader uygulamaları işlem listesini dosya olarak veremiyor; ürettikleri PDF sadece özet. Raporu bilgisayardaki MT4/MT5 ile, aynı hesapla giriş yaparak al. Prop firm panelin işlem geçmişini CSV/Excel olarak veriyorsa onu da deneyebilirsin.',
im_formats:'Desteklenen: MT5 HTML ve Excel (.xlsx), MT4 HTML, TradeLog CSV ve yedek. Türkçe ve İngilizce raporlar okunur. Aynı raporu tekrar yüklersen eklenmiş işlemler atlanır.',
im_pick:'Dosya seç',im_none:'Bu dosyada içe aktarılacak kapanmış işlem bulunamadı. MetaTrader\'ın Geçmiş sekmesinden alınan raporu yüklediğinden emin ol (Raporlar menüsündeki özet rapor işlem listesi içermez).',
im_err:'Dosya okunamadı. MT4/MT5 HTML/Excel raporu ya da TradeLog CSV/yedek dosyası yükle.',im_xlsx_err:'Excel dosyasını okumak için gereken bileşen yüklenemedi. İnternet bağlantını kontrol et ya da raporu HTML olarak kaydet.',
im_prev:'İçe aktarma önizlemesi',im_range:'Tarih aralığı',im_net:'Net sonuç',
im_r:'{a} işlemde R, stop loss\'tan hesaplanacak. {b} işlemde stop yok; R hesabın risk ayarından tahmin edilecek (≈ ile gösterilir).',
im_dup:'{n} işlem daha önce eklenmiş, atlanacak.',im_acc:'Hangi hesaba eklensin?',im_newacc:'Yeni hesap oluştur: {n}',
im_tz:'Saat farkı',im_tz0:'Fark yok',im_hours:'saat',im_tz_h:'Rapordaki saatler broker sunucusunun saatidir. Kendi saatinle arasındaki farkı seç; örneğin sunucu GMT+2 ve sen İstanbul\'daysan +1.',
im_queue:'Değerlendirme listesine ekle',im_go:'İçe aktar',
rv_tag:'değerlendir',rv_card:'{n} işlem değerlendirme bekliyor',rv_card_s:'Setup, plan ve hatalarını eklemek işlem başına 10 saniye sürer; içgörüler bu bilgilerden çıkar.',rv_start:'Değerlendir',
rv_title:'Değerlendir · {i}/{n}',rv_skip:'Atla',rv_skip_h:'İstemediğin işlemi Atla ile geçebilirsin.',rv_save:'Kaydet ve sonraki',rv_done:'Tüm işlemler değerlendirildi',
d_px:'Giriş → çıkış',d_lots:'Lot',d_close:'Kapanış',d_rest:'≈ Bu işlemde stop loss olmadığı için R, hesabın risk ayarından tahmin edildi.',
wel_imp:'MT4/MT5 raporu yükle',
v_dash:'Panel',v_trades:'İşlemler',v_cal:'Takvim',v_rep:'Raporlar',v_pb:'Playbook',v_jr:'Günlük',v_set:'Ayarlar',
t_dash:'Panel',t_trades:'İşlemler',t_cal:'Takvim',t_rep:'Raporlar',t_more:'Diğer',
new_trade:'Yeni işlem',save:'Kaydet',del:'Sil',edit:'Düzenle',dup:'Kopyala',close:'Kapat',copy:'Kopyala',copied:'Panoya kopyalandı',restore:'Geri yükle',
details:'Detaylar',see_all:'Tümünü gör',today:'Bugün',week:'Hafta',yes:'Evet',no:'Hayır',off:'Kapalı',optional:'isteğe bağlı',start:'Başlangıç',cum:'toplam',
per_w:'Bu hafta',per_m:'Bu ay',per_30:'30 gün',per_90:'90 gün',per_y:'Bu yıl',per_all:'Tümü',per_empty:'Seçili dönemde işlem yok.',per_all_btn:'Tüm dönemi göster',
acc_all:'Tüm hesaplar',acc_default:'Ana hesap',acc_name:'Hesap adı',acc_bal:'Başlangıç bakiyesi',acc_cur:'Para birimi',acc_risk:'Risk %',acc_add:'Hesap ekle',

o_Win:'Kazanç',o_Loss:'Kayıp',o_BE:'Başa baş',
wel_t:'İşlemlerini kaydet, nerede para kaybettiğini gör',wel_d:'Her işlemi R cinsinden kaydet; setup, seans ve hatalarına göre neyin çalıştığını otomatik gör. Üyelik gerekmez.',
wel_add:'İlk işlemini ekle',wel_demo:'Örnek veriyle dene',
wel_f1:'Playbook kuralların: hangi kurala uyunca kazandığını gör',wel_f2:'Hata maliyeti: FOMO\'nun ya da erken çıkışın sana kaç R\'a mal olduğunu ölç',
wel_f3:'Otomatik içgörüler: tilt, aşırı işlem ve en iyi saatlerin',wel_f4:'Telegram ile telefon ve masaüstünde aynı veriler',
al_day:'Bugün {x}: günlük kayıp limitine (−{l}R) ulaştın. Bugünlük durmayı düşün.',al_str:'Üst üste {n} kayıp (limit {l}). Mola ver, planını gözden geçir.',al_max:'Bugün {n} işlem yaptın (limit {l}). Yeni işlem açmadan önce iki kez düşün.',
hero_w:'Bu haftanın net sonucu',hero_m:'Bu ayın net sonucu',hero_30:'Son 30 günün net sonucu',hero_90:'Son 90 günün net sonucu',hero_y:'Bu yılın net sonucu',hero_all:'Toplam net sonuç',kpi_wl:'{w} kazanç, {l} kayıp{b}',kpi_be:', {n} başa baş',trades_l:'işlem',strip_l:'Her çubuk bir işlem, en yeni sağda',strip_off:'Soluk çubuk: plan dışı',
k_wr:'Kazanma oranı',k_pf:'Profit factor',k_pf_s:'Kazancın, kaybının kaç katı',k_exp:'Beklenti',k_exp_s:'İşlem başı ortalama',k_rr:'Kazanç/kayıp oranı',k_dd:'Max drawdown',k_dd_s:'Zirveden en büyük düşüş',
k_plan:'Plana uyum',k_plan_s:'Ort. işlem kalitesi {r}/5',k_bal:'Bakiye',
c_eq:'Equity eğrisi',c_eq_s:'Kümülatif R',lg_eq:'Kümülatif R',lg_off:'Plan dışı işlem',eq_need:'Grafik için sonucu girilmiş en az 2 işlem gerekli.',
c_score:'TradeLog puanı',c_daily:'Günlük sonuç',c_daily_s:'Son 30 işlem günü',c_ins:'İçgörüler',ins_need:'İçgörüler için bu dönemde en az 5 işlem gerekli.',c_recent:'Son işlemler',c_stats:'İstatistikler',c_disc:'Disiplin',
score_need:'Puan için bu dönemde en az 5 işlem gerekli.',score_h:'Puan altı bileşenin ortalamasıdır. Kazanma oranı %60, profit factor 2.5, kazanç/kayıp oranı 2.5 ve drawdown\'ın 3 katı getiri tam puan kabul edilir.',
sc_hi:'Güçlü ve tutarlı',sc_mid:'Gelişiyor; zayıf bileşene odaklan',sc_lo:'Önce disiplin ve risk',
sc_wr:'Kazanma oranı',sc_wr_s:'Kazanma',sc_pf:'Profit factor',sc_pf_s:'PF',sc_rr:'Kazanç/kayıp',sc_rr_s:'Kâr/zarar',sc_dd:'Drawdown kontrolü',sc_dd_s:'Drawdown',sc_cons:'Tutarlılık (yeşil gün)',sc_cons_s:'Tutarlılık',sc_disc:'Disiplin',sc_disc_s:'Disiplin',
in_best_setup:'En iyi setup\'ın {k}: {n} işlemde {r}, kazanma oranı {w}.',in_worst_setup:'{k} bu dönemde {r} kaybettirdi ({n} işlem). Kurallarını gözden geçir ya da bir süre bırak.',
in_mistakes:'Hata işaretlediğin {n} işlemin toplamı {r}. En pahalı hata: {k} ({r2}).',in_plan:'Plana uyduğunda işlem başı {a}, uymadığında {b}.',
in_tilt:'Üst üste 2 kayıptan sonraki işlemlerin ortalaması {a}; genel ortalaman {b}. İki kayıptan sonra mola vermeyi dene.',
in_weekday:'En iyi günün {a} ({ra}/işlem), en zayıf günün {b} ({rb}/işlem).',in_session:'En verimli seansın {k}: işlem başı {r}.',
in_emotion:'{k} hissettiğin işlemler ortalama {r} ({n} işlem).',in_overtrade:'Günün 3. işleminden sonraki {n} işlemin ortalaması {a}. Günlük işlem sınırı koymayı düşün.',
in_mfe:'Kazanan işlemlerde hareketin ortalama %{p} kadarını aldın; masada {r} kaldı.',
search_ph:'Sembol, setup, not veya etiket ara',filters:'Filtreler',f_reset:'Temizle',f_out:'Tüm sonuçlar',f_setup:'Tüm setuplar',f_sym:'Tüm semboller',f_dir:'Long ve short',f_mis:'Tüm hatalar',f_tag:'Tüm etiketler',
no_match:'Filtrelere uyan işlem yok.',no_trades:'Henüz işlem yok.',no_data:'Veri yok.',n_tr:'{n} işlem',off_plan_s:'Plan dışı',
h_date:'Tarih',h_sym:'Sembol',h_dir:'Yön',h_acc:'Hesap',h_setup:'Setup',h_sess:'Seans',h_out:'Sonuç',h_plan:'Plan',h_mis:'Hata',h_emo:'Duygu',h_rating:'Kalite',h_trades:'İşlem',h_tot:'Toplam',h_avg:'Ort. R',h_month:'Ay',h_adh:'Kural uyumu',
d_title:'İşlem detayı',d_rules:'{k} kuralları',
f_new:'Yeni işlem',f_edit:'İşlemi düzenle',fs_trade:'İşlem',fs_result:'Sonuç',fs_rules:'Playbook kontrol listesi',fs_review:'Değerlendirme',fs_more:'Daha fazla bilgi',fs_notes:'Ekran görüntüsü ve notlar',
l_time:'Saat',l_rr:'Planlanan R:R',l_rra:'Sonuç (R)',l_plan:'Plana uydun mu?',l_rating:'İşlem kalitesi',l_emo:'Duygu durumu',l_mis:'Hatalar',l_tags:'Etiketler',l_sess:'Seans / killzone',l_shots:'Grafik linkleri',l_notes:'Notlar',
ph_setup:'Örn. London Breakout',ph_tags:'news, A+, partial',ph_notes:'Neden girdim, ne öğrendim?',shots_h:'Her satıra bir link. TradingView anlık görüntüleri otomatik önizlenir.',
mfe_h:'İşlem lehine en fazla kaç R gitti',mae_h:'İşlem aleyhine en fazla kaç R gitti',
req:'Sembol ve sonuç gerekli. Sonucu R olarak yazabilir ya da Kazanç / Kayıp / Başa baş seçebilirsin.',saved:'Kaydedildi',deleted:'Silindi',confirm_del:'Bu işlem silinsin mi?',
plan_yes:'Plana uydum',plan_no:'Plana uymadım',
rt_ov:'Genel bakış',rt_time:'Zaman',rt_setup:'Setup ve semboller',rt_psy:'Psikoloji ve disiplin',rt_dist:'Dağılım ve çıkışlar',
r_month:'Aylık performans',r_wd:'Haftanın günü',r_hour:'Giriş saati',hour_need:'Saat analizi için işlemlere giriş saati ekle.',r_sess:'Seans',r_mis:'Hata maliyeti',r_mis_s:'En pahalı hata en üstte',a_plan:'Plana uyum',
r_hist:'R dağılımı',r_exit:'Çıkış verimliliği',
st_aw:'Ortalama kazanç',st_al:'Ortalama kayıp',st_tgt:'Ortalama hedef RR',st_best:'En iyi işlem',st_worst:'En kötü işlem',st_streak:'En uzun seri (kazanç / kayıp)',st_days:'İşlem günü',st_green:'{p} yeşil',green_days:'Yeşil gün',
ds_today:'Bugünkü sonuç',ds_streak:'Güncel kayıp serisi',ds_over:'Kayıp limitini aşan gün',ds_overT:'İşlem limitini aşan gün',ds_leak:'Hata işaretli işlemlerin toplamı',ds_clean:'Hatasız işlemlerde beklenti',
ds_h:'Limitleri Ayarlar sayfasından değiştirebilirsin. Hatasız ve hatalı işlemler arasındaki fark, disiplinin sana kaç R kazandıracağını gösterir.',
x_cap:'Kazançlarda yakalanan hareket',x_left:'Kazançlarda masada kalan',x_lmfe:'Kayıpların ortalama MFE\'si',x_lmfe1:'Önce 1R+ lehe gidip kayıpla kapanan',x_mae:'Ortalama MAE',x_tgt:'Kazançlarda hedefe ulaşma',
x_h:'Bu bölüm için işlemlere MFE ve MAE gir. Yakalanan oran düşükse erken çıkıyorsun; kayıpların çoğu önce 1R lehe gidiyorsa başa baş stop kuralı düşün.',
day_empty:'Bu gün işlem yok.',j_open:'Günlük notu aç',j_write:'Günlük not yaz',
pb_intro:'Playbook, bir setup\'ın giriş kurallarıdır. İşlem eklerken setup\'ı seçtiğinde kurallar kontrol listesi olarak çıkar; hangi kurala uyduğunda kazandığını burada görürsün.',
pb_new:'Yeni playbook',pb_edit:'Playbook\'u düzenle',pb_used:'Playbook\'u olmayan setuplar:',pb_empty:'Henüz playbook yok. İlk setup\'ını ve kurallarını ekle.',pb_rules:'Kural',pb_followed:'Uyulma oranı',
pb_norules:'Kural eklenmemiş.',pb_cmp:'Tüm kurallara uyduğunda işlem başı {a}, eksik kuralla {b}.',pb_name:'Setup adı',pb_desc:'Açıklama',pb_desc_ph:'Bu setup ne zaman ve neden çalışır?',
pb_rules_l:'Giriş kuralları',pb_rules_ph:'HTF trend yönünde\nLikidite alındı\nFVG içinden giriş',pb_rules_h:'Her satıra bir kural.',pb_req:'Setup adı gerekli.',pb_dup:'Bu adla bir playbook zaten var.',pb_del_c:'Playbook silinsin mi? İşlemler silinmez.',
j_mood:'Günün nasıldı?',j_see:'İşlemleri gör',j_plan:'Seans öncesi plan',j_plan_ph:'Bias, takip ettiğin seviyeler, haberler',j_rev:'Gün sonu değerlendirme',j_rev_ph:'Ne iyi gitti, ne kötü gitti?',
j_les:'Yarın için ders',j_les_ph:'Tek bir somut değişiklik',j_save:'Notu kaydet',j_past:'Geçmiş notlar',j_empty:'Henüz günlük notu yok.',j_saved:'Not kaydedildi',j_cleared:'Not silindi',
s_acc:'Hesaplar',s_acc_s:'Prop firm, kişisel ve demo hesaplarını ayrı takip et',s_rules:'Disiplin kuralları',s_day:'Günlük max kayıp (R)',s_day_d:'Aşılınca panelde uyarı çıkar',
s_str:'Max ardışık kayıp',s_str_d:'Bu sayıya ulaşınca mola uyarısı',s_maxT:'Günlük max işlem',s_maxT_d:'0 ise kapalı',s_look:'Görünüm',s_lang:'Dil',s_theme:'Tema',
th_auto:'Sistem',th_light:'Açık',th_dark:'Koyu',s_data:'Veri',s_priv:'Gizlilik',
m_csv_exp:'CSV olarak dışa aktar',m_csv_imp:'CSV içe aktar',m_bak:'Yedek indir',m_res:'Yedek dosyasından geri yükle',m_paste:'Metin yapıştırarak yükle',m_demo:'Örnek veri ekle',m_demo_rm:'Örnek veriyi kaldır',m_wipe:'Tüm verileri sil',
csv_h:'CSV ilk satırında en az date ve symbol sütunları olmalı. Noktalı virgüllü Excel dosyaları da okunur.',
privacy:'Verilerin yalnızca bu tarayıcıda saklanır ve hiçbir sunucuya gönderilmez. Tarayıcı verilerini temizlersen kaybolur; düzenli yedek al.',
privacy_tg:'Verilerin Telegram hesabına bağlı bulutta saklanır; telefonda ve masaüstünde aynı veriler görünür. Bu verileri yalnızca sen görebilirsin.',
sync_ing:'Senkronize ediliyor…',sync_ok:'Telegram bulutuyla senkronize',sync_err:'Bulut senkronu başarısız. Veriler bu cihazda duruyor, tekrar denenecek.',
cloud_full:'Bulut depolama sınırına ulaşıldı. Eski işlemleri CSV olarak dışa aktarıp silebilirsin.',storage_err:'Kaydedilemedi: tarayıcı depolaması dolu veya kapalı.',
x_exp_h:'Telegram içinde dosya indirilemiyor. Metni kopyala; Kayıtlı Mesajlar\'a yapıştırarak saklayabilir ya da bilgisayarda Excel\'e aktarabilirsin.',
x_imp_h:'Daha önce kopyaladığın yedeği (JSON) veya CSV metnini buraya yapıştır.',
confirm_demo:'Mevcut verilerinin yanına 48 örnek işlem ve 3 playbook eklenecek. İstediğin zaman Ayarlar\'dan kaldırabilirsin. Devam edilsin mi?',
confirm_wipe:'Tüm işlemler, playbooklar, günlük notları ve ayarlar kalıcı olarak silinecek. Bu geri alınamaz. Devam edilsin mi?',
imported:'{n} işlem eklendi, {s} atlandı',bad_backup:'Geçersiz yedek dosyası.',bad_csv:'CSV okunamadı. İlk satırda date ve symbol sütunları olmalı.',
demo_added:'Örnek veri eklendi',demo_removed:'Örnek veri kaldırıldı',wiped:'Tüm veriler silindi',demo_note:'Örnek işlem',demo_tag:'örnek',
dm_d1:'Londra açılışında Asya aralığının kırılımı.',dm_r1:'Asya aralığı net belirlendi|Kırılım mumu güçlü kapandı|HTF bias ile aynı yönde|Stop aralığın diğer tarafında',
dm_d2:'NY seansında trend yönünde geri çekilmeden giriş.',dm_r2:'1H trend net|Geri çekilme FVG\'ye ulaştı|LTF yapı kırılımı oldu|Haber saatinden uzak',
dm_d3:'Likidite alımından sonra dönüş.',dm_r3:'Önceki gün tepe/dibi alındı|Displacement ile dönüş|Giriş OB veya FVG\'den|Hedef karşı likidite',
emo_calm:'Sakin',emo_focused:'Odaklı',emo_confident:'Güvenli',emo_impatient:'Sabırsız',emo_stressed:'Stresli',emo_tired:'Yorgun',emo_angry:'Öfkeli',emo_greedy:'Aç gözlü',emo_fearful:'Korkulu',emo_bored:'Sıkılmış',
mis_early_entry:'Erken giriş',mis_late_entry:'Geç giriş',mis_no_confirmation:'Onaysız giriş',mis_tight_sl:'SL çok dar',mis_moved_sl:'SL\'i kaydırdım',mis_early_exit:'Erken çıkış',mis_tight_tp:'TP çok yakın',
sy_title:'MT4/MT5 hesabını bağla',sy_intro:'Hesabını yatırımcı (salt okunur) şifresiyle bir kez bağla; kapanan işlemlerin, para yatırma ve çekmelerin kendiliğinden bu hesaba gelsin. MetaTrader\'ın açık olması gerekmez.',
sy_safe:'Yatırımcı şifresi salt okunurdur: bu şifreyle işlem açılamaz, para çekilemez. Şifreni saklamayız; bağlantı kurulurken bir kez MetaTrader bağlantı servisimize iletilir.',sy_acc:'TradeLog hesabı',sy_acc_new:'Yeni hesap (bilgileri MetaTrader\'dan gelir)',sy_plat:'Platform',
sy_server:'Sunucu',sy_server_ph:'ör. ICMarketsSC-Live05',sy_server_h:'MetaTrader\'a giriş yaparken seçtiğin sunucu adı; aracı kurumunun gönderdiği e-postada da yazar.',sy_login_l:'Hesap numarası',sy_pw:'Yatırımcı şifresi',
sy_what_q:'Yatırımcı şifresi nedir, nerede bulurum?',sy_what:'Hesabına sadece bakmaya izin veren ikinci şifredir. Hesap açılınca aracı kurumun ya da prop firmanın gönderdiği bilgilerde yazar. Bulamazsan MetaTrader\'da Araçlar → Seçenekler → Sunucu → Değiştir\'e bas, “Yatırımcı (salt okunur) şifresini değiştir”i seçip yeni bir tane belirle.',
sy_connect:'Bağlan',sy_wait:'Aracı kuruma bağlanılıyor… Bu bir dakika kadar sürebilir, pencereyi kapatma.',sy_linked:'Hesap bağlandı. İlk senkron yapılıyor; işlemlerin birkaç dakika içinde gelir. Bu pencereyi kapatabilirsin.',
sy_e_input:'Sunucu, hesap numarası ve yatırımcı şifresini kontrol et.',sy_e_auth:'Hesap numarası, yatırımcı şifresi ya da sunucu yanlış. Bilgileri kontrol edip tekrar dene.',sy_e_server:'Bu sunucu bulunamadı. Adı MetaTrader\'daki gibi tam yaz; şunlardan biri olabilir:',
sy_e_exists:'Bu MetaTrader hesabı zaten bağlı.',sy_e_limit:'En fazla {n} hesap bağlayabilirsin. Kullanmadığın bir bağlantıyı kaldır.',sy_e_slow:'Aracı kurum yanıt vermedi',sy_e_config:'Otomatik bağlantı şu an kurulamıyor.',sy_e_plan:'Hesap bağlama Pro özelliğidir.',
sy_st_wait:'Durum kontrol ediliyor…',sy_st_start:'Bulut terminali başlatılıyor…',sy_st_conn:'Aracı kuruma bağlanılıyor…',sy_st_broker:'Aracı kurum sunucusu henüz yanıt vermiyor, bekleniyor…',sy_st_ready:'Bağlandı, işlemlerin alınıyor…',sy_st_min:'{n} dk',sy_checking:'Kontrol ediliyor…',sy_still:'Bağlantı hâlâ kuruluyor; hazır olunca işlemlerin kendiliğinden gelecek.',v_acc:'Hesaplar',ax_moved:'{n} hesabını, bakiyelerini ve ayarlarını Hesaplar sayfasında gör',ax_total:'Toplam bakiye',ax_pnl:'Net kazanç',ax_net:'Net kazanç',ax_netr:'Net R',ax_active:'Aktif hesap',ax_open:'Panelde aç',ax_be:'Başabaş',ax_live:'Otomatik',ax_nochart:'Eğri için en az 2 işlem gerekli',acc_be:'Başabaş aralığı',acc_be_h:'Kâr/zararı bu tutarın içinde kalan işlemler (artı ya da eksi) başabaş sayılır ve kazanma oranını etkilemez. Örn. 200 yazarsan −200 ile +200 arası başabaş olur. Boş bırakırsan kapalı.',d_beauto:'Kâr/zarar ±{v} başabaş aralığında olduğu için başabaş sayıldı; kazanma oranını etkilemez.',shs_title:'İşlemi paylaş',shs_prev:'Paylaşım kartı önizlemesi',shs_story:'Story (9:16)',shs_square:'Gönderi (1:1)',shs_money:'Tutarı göster',shs_money_h:'Kapalıysa kartta sadece R görünür',shs_share:'Paylaş',shs_dl:'Görseli indir',shs_link:'Bağlantı oluştur',shs_back:'Detaya dön',shs_h:'Paylaş\'a basınca telefonunun paylaşım menüsü açılır; Instagram\'ı seçip story\'ne ekleyebilirsin.',shs_h_pc:'Görseli indirip Instagram, X ya da Telegram\'da paylaşabilirsin. Telefonda Paylaş\'a basınca Instagram doğrudan çıkar.',shs_wait:'Kart hazırlanıyor, bir saniye…',shs_saved:'Görsel indirildi',shs_foot:'TradeLog ile kaydedildi',fs_res:'Sonuç',l_pnl:'Kâr/zarar',ph_pnl:'Örn. 250',r_hint2:'R ya da kâr/zarardan birini yazman yeterli; sonuç kendiliğinden seçilir. R, riske ettiğin tutarın katıdır (stop = −1).',rr_other:'Diğer',rr_hint2:'Girişte hedeflediğin risk/ödül. Örn. 1:2 = riskinin 2 katını hedefledin.',l_mis_q:'Hata yaptın mı? (varsa seç)',sy_daylim:'Bu hesap için bugünkü elle senkron hakkın doldu (günde {n}). Yeni işlemlerin {night} otomatik gelecek; beklemek istemezsen {t} civarında tekrar deneyebilirsin.',sy_e_ours_t:'Otomatik bağlantı şu an kurulamıyor',sy_e_ours:'Sorun senin bilgilerinde değil, bizim tarafımızda. Biraz sonra tekrar dene; sürerse destek kodunu bize ilet. O zamana kadar MT4/MT5 raporunu yükleyerek devam edebilirsin.',sy_e_slow_d:'Aracı kurum zamanında yanıt vermedi. Bilgilerin büyük ihtimalle doğru; birkaç dakika sonra tekrar dene.',sy_e_report:'Rapor yükle',sy_e_code:'Destek kodu',sy_e_net:'İnternet bağlantına ulaşılamadı. Bağlantını kontrol edip tekrar dene.',sy_e_tries:'Çok fazla hatalı deneme. Hesap numarasını, sunucuyu ve yatırımcı şifresini kontrol et; bir saat sonra tekrar deneyebilirsin.',sy_left:'bugün {n} elle senkron hakkın kaldı',sy_next:'sıradaki otomatik {x}',sy_night_now:'şu an sürüyor',sy_night_tonight:'bu gece {t}',sy_night_today:'bugün {t}',sy_night_day:'{d} {t}',sy_night_dayn:'{d} gecesi {t}',sy_e_broker:'Aracı kuruma bağlanılamadı. Yatırımcı şifresi değişmiş olabilir; bağlantıyı kaldırıp yeniden bağla.',sy_e_gone:'Bağlantı artık yok; kaldırıp yeniden bağla.',sy_e_slow2:'Bağlantı hâlâ kuruluyor. Birkaç dakika sonra hesabı düzenle ekranından kontrol et.',
sy_err:'Bir şeyler ters gitti. İnternetini kontrol edip tekrar dene.',sy_login:'Hesap bağlamak için önce giriş yap',sy_connecting:'Bağlanıyor…',sy_first:'ilk senkron bekleniyor',sy_last:'son senkron {t}',sy_sent:'{n} kayıt',sy_now_b:'Senkronize et',sy_rm:'Kaldır',
sy_rm_c:'Bu bağlantı kaldırılsın mı? İşlemler artık otomatik gelmez. Gelmiş işlemlerin silinmez.',sy_rm_ok:'Bağlantı kaldırıldı',sy_got:'MetaTrader\'dan {n} yeni işlem geldi',sy_got_u:'MetaTrader\'dan {n} işlem eşleşti',sy_got_c:'MetaTrader\'dan {n} para hareketi geldi',sy_ok_none:'Senkron tamam, yeni işlem yok',
sy_auto_bal:'MetaTrader bakiyesinden hesaplanıyor',sy_manage:'Otomatik senkron',sy_manage_d:'MT4/MT5 hesabını yatırımcı şifresiyle bağla, işlemlerin kendiliğinden gelsin.',sy_open:'Hesabı bağla',
sy_now:'az önce',sy_min:'{n} dk önce',sy_hour:'{n} sa önce',sy_day:'{n} gün önce',sy_imp:'Her seferinde rapor yüklemek istemiyor musun?',
co_title:'TradeLog AI',co_side:'Verilerini okuyan koçun',co_hi:'Merhaba, ben TradeLog AI.',co_hi_p:'Günlüğünü, işlemlerini ve hatalarını okuyorum. Neyin işe yaradığını sayılarla söyler, bir sonraki adımı birlikte netleştiririz.',
co_ideas:'Senin için fark ettiklerim',co_i_week:'Bu hafta',co_q_mis_x:'“{k}” bana {r} kaybettirmiş. Bunu nasıl önlerim?',co_q_set_x:'{k} en iyi setup\'ım mı? Ona daha mı çok odaklanmalıyım?',co_q_day_x:'{k} günleri neden kötü gidiyor?',
co_q_week:'Bu haftamı değerlendir',co_q_mistake:'En pahalı hatam ne?',co_q_setup:'Hangi setup\'ım gerçekten işe yarıyor?',co_q_risk:'Risk yönetimim nasıl?',co_q_emo:'Duygularım sonuçlarımı nasıl etkiliyor?',co_q_next:'Gelecek hafta neye odaklanmalıyım?',
co_ph:'TradeLog AI\'ye sor…',co_send:'Gönder',co_new:'Yeni sohbet',co_left:'{n} soru kaldı · ',co_note:'Sadece senin verilerine bakar, yatırım tavsiyesi değildir.',co_sub:'{n} işlem · {v}',co_thinking:'Verilerine bakıyor…',
co_login:'TradeLog AI için önce giriş yap',co_err:'Cevap alınamadı. İnternetini kontrol edip tekrar dene.',co_e_fail:'Cevap alınamadı, sorun bizde olabilir. Bir daha dene; sürerse destek koduyla bize yaz.',co_e_limit:'Bugünkü {n} soru hakkını kullandın. Yarın yine buradayım.',co_e_config:'TradeLog AI şu an yanıt veremiyor; sorun bizde. Biraz sonra tekrar dene, sürerse destek koduyla bize yaz.',co_e_busy:'Şu an çok yoğunum, birkaç dakika sonra tekrar dene.',co_e_input:'Soru çok uzun, biraz kısaltıp tekrar dene.',
db_t:'Örnek verileri görüyorsun.',db_d:'Paneli tanıman için örnek işlemler ekledik. Kendi işlemlerini ekleyince örnekleri tek tıkla kaldırabilirsin.',db_own:'Kendi işlemlerin de var. Sonuçlarına karışmasın diye örnekleri kaldırmanı öneririz.',db_add:'Kendi verimi ekle',db_rm:'Örnekleri kaldır',
tr_net_t:'Toplam sonucun, R cinsinden',tr_net_d:'Her işlemde riske ettiğin tutar 1R\'dir. 100$ riskle 250$ kazandıysan +2,5R, stopa gittiysen −1R. R, hesap büyüklüğünden bağımsız olarak ne kadar iyi trade ettiğini gösterir. Sağdaki çubuklar son işlemlerin.',
tr_kpi_t:'Temel oranlar',tr_kpi_d:'Kazanma oranı tek başına yetmez. Profit factor 1\'in, beklenti 0R\'nin üstündeyse sistemin para kazandırıyor demektir. Her kutunun altında ne anlama geldiği yazar.',
tr_score_t:'TradeLog puanı',tr_score_d:'Kazanma, kâr oranı, düşüş, tutarlılık ve plan uyumundan tek bir not. Detaylar\'a basınca hangi alanda zayıf olduğunu görürsün.',
tr_week_t:'Haftalık özet',tr_week_d:'Bu hafta neyin iyi, neyin kötü gittiğini ve gelecek haftanın odağını burada bulursun. İstersen paylaşabilirsin.',
tr_ins_t:'İçgörüler',tr_ins_d:'Verilerinden kendiliğinden çıkan bulgular: en iyi setup\'ın, pahalı hataların, kötü giden günlerin. Daha fazlası için TradeLog AI\'ye sorabilirsin.',
tr_add_t:'İşlem ekle',tr_add_d:'Yeni işlemlerini buradan eklersin: hesabını bağla, rapor yükle ya da elle gir. Hepsi aynı panele gelir.',
tr_skip:'Turu geç',tr_back:'Geri',tr_next:'İleri',tr_done:'Başlayalım',tr_again:'Panel turunu başlat',tr_need:'Tur için önce birkaç işlem ya da örnek veri ekle',
r_what:'R nedir?',r_p1:'R, bir işlemde riske ettiğin tutardır: girişle stop arasındaki mesafenin parası. TradeLog sonuçları dolar yerine R ile gösterir; böylece 1.000$\'lık ve 100.000$\'lık hesaplar aynı ölçüyle karşılaştırılır.',
r_ex_risk:'Riske ettiğin (1R)',r_ex_win:'Hedefte kapandı',r_ex_loss:'Stopa gitti',r_p2:'Beklenti +0,3R ise her işlemde ortalama riskinin %30\'u kadar kazanıyorsun demektir. Toplam +20R, 20 işlemlik riskini geri kazandığın anlamına gelir.',
r_p3:'Stop girmediğin işlemlerde R, hesabındaki “işlem başı risk %” ayarına göre tahmin edilir ve başında ≈ işareti olur.',
wel_hi:'Hoş geldin',wel_acc_d2:'İki kısa adım: hesabının türünü seç, sonra işlemlerin nereden geleceğini. Bir dakikada panelin hazır.',wel_q1:'Bu hesap ne tür?',wel_q1_s:'Prop hesabıysa kurallarını da takip ederiz.',wel_q2:'İşlemlerin nereden gelsin?',
wel_t_personal:'Kendi paranla işlem yaptığın hesap',wel_t_challenge:'Prop firm değerlendirme aşaması',wel_t_funded:'Geçtiğin, fonlanmış prop hesabı',wel_rules_h:'Prop firmanın kuralları, hesap bakiyesinin yüzdesi olarak. Sık kullanılan değerlerle doldurduk; kendi firmanınkiyle değiştir. Sonra hesap ayarlarından da değiştirebilirsin.',
wel_sync_k:'Otomatik bağlantı',wel_sync_wait_t:'Hesabın bağlanıyor',wel_sync_wait_d:'MetaTrader hesabına ilk bağlantı birkaç dakika sürebilir. Hazır olunca işlemlerin kendiliğinden gelir ve panel dolar. Uygulamayı kapatsan da sonraki açışında devam eder.',
wel_sync_ok_t:'Hesabın bağlandı',wel_sync_ok_d:'Son 90 günde kapanmış işlem bulunamadı. Yeni işlemlerin her gece otomatik gelir; istersen şimdi kontrol edebilirsin.',wel_sync_err_t:'Bağlantı kurulamadı',wel_sync_chk:'Şimdi kontrol et',
mis_off_plan:'Plan dışı işlem',mis_revenge:'Revenge trade',mis_fomo:'FOMO',mis_oversize:'Risk büyüttüm',mis_overtrading:'Aşırı işlem'},
en:{
co_cut:'The answer was cut off. You can ask the same question again.',
sy_paused:'Auto-sync was paused because Pro ended. Your trades are kept; reconnect the account after renewing Pro.',sy_pro_end:'Pro ended, so auto-sync stopped. Renew within 7 days and the connection continues as it is.',
rec:'Recommended',wel_man:'I\'ll log my trades myself',wel_man_d:'Enter your account balance and currency first, then add trades one by one. Works with any platform.',wel_alt2:'Want to get to know the app first?',first_k:'Last step',first_t:'Log your first trade',first_d:'{k} is ready. Symbol and result are enough; fill in the other fields later if you like.',acc_first_t:'Your account details',acc_first_d:'Balance and currency are used for P&L and return. You can change all of this later on the Accounts page.',acc_adv:'Advanced: risk and breakeven range',es_t:'No trades yet',es_acc_t:'No accounts yet',es_cal:'The calendar fills up with your trades; each day turns green or red by its result.',es_trades:'Your trades will be listed here, with search, filters and the columns you choose.',es_rep:'Reports fill up with your first trades: win rate, expectancy, drawdown, setup, time and mistake analysis.',es_acc:'Once your account is set up, its balance, net gain and prop rules show up here.',es_setup:'Start setup',es_add:'Add trade',
sup_t:'Contact support',sup_btn:'Contact support',sup_d:'Found a bug, got stuck or have an idea? Write to us and we\'ll reply by email. Never include your account or investor password.',sup_from:'We\'ll reply to',sup_email:'Your email address',sup_topic:'Topic',sup_msg:'Message',sup_ph:'What were you trying to do and what happened? Device and browser details help too.',sup_send:'Send',sup_sending:'Sending…',sup_ok:'Your message has reached us. We\'ll reply by email.',sup_tp_bug:'Bug report',sup_tp_sync:'Account connection / sync',sup_tp_import:'Report upload',sup_tp_account:'Account and sign-in',sup_tp_billing:'Pro and billing',sup_tp_idea:'Feature request',sup_tp_other:'Other',sup_e_email:'Enter a valid email address.',sup_e_msg:'Your message is too short.',sup_e_limit:'Too many messages in a short time. Please try again later.',sup_e_net:'Couldn\'t reach the internet. Check your connection and try again.',sup_e_setup:'Your message couldn\'t be sent right now. Please try again later.',sup_e_server:'Your message couldn\'t be sent right now. Please try again later.',sup_e_message:'Your message is too short or too long.',s_help:'Help and support',s_help_s:'Something wrong? Reach us here.',s_help_c:'Help center',gs_app:'Add to your phone',gs_app_d:'Open it from your home screen in one tap, full screen like an app.',a2_t:'Add to home screen',a2_d:'Add TradeLog to your home screen so it opens in one tap, full screen like an app. No download or app store needed.',a2_ios:['In Safari, tap the <b>Share</b> button at the bottom (the square with an arrow).','Scroll down and choose <b>Add to Home Screen</b>.','Tap <b>Add</b> in the top right.'],a2_and:['In Chrome, tap the <b>⋮</b> menu at the top right.','Choose <b>Add to home screen</b> or <b>Install app</b>.','Confirm with <b>Add</b> or <b>Install</b>.'],a2_ok:'Done',a2_later:'Later',
mt_e_gone:'Your access to this account was removed.',mt_invite:'Invite',mt_ph:'mentor@example.com',mt_h:'Your mentor can see your account after opening the link you send and signing in with this email. They can\'t change anything.',mt_pending:'Pending',mt_active:'Active',mt_copy:'Copy invite',mt_remove:'Remove',mt_remove_c:'{e} will no longer see your account. Are you sure?',mt_inv_t:'Invite ready',mt_inv_p:'Send this message to your mentor ({e}) by WhatsApp or email. Once they open the link and sign in with this email, they can see your account.',mt_msg:'Hi! I added you as my mentor on TradeLog so you can see my trades. Open this link and sign in with {e} (sign up free if you don\'t have an account): {l}',mt_e_dup:'You already invited this person.',mt_e_lim:'You can add up to 5 mentors.',mt_e_self:'You can\'t add yourself as a mentor.',mt_students:'Accounts you mentor',mt_view:'View',mt_leave:'Leave',mt_leave_c:'Leave {e}\'s account? You\'ll need a new invite to see it again.',mt_need_login:'To accept the mentor invite, sign in or sign up with the email that was invited.',mt_ok:'You are now {e}\'s mentor.',mt_e_email:'This invite was sent to {e}. Sign in with that address.',mt_e_nf:'This invite link is invalid or was removed.',mt_viewing:'Viewing {e}\'s account · read-only',mt_back:'Back to my account',mt_ro:'This account is read-only; you can\'t make changes.',mt_loading:'Loading…',mt_none:'You haven\'t added a mentor yet.',
soon_l:'Coming soon',pro_title:'TradeLog Pro',plan_pro:'Pro',plan_pro_tr:'Pro · free trial',plan_trial:'Pro trial · {n} {n|day|days} left',pro_see:'See Pro',pro_trial:'When Pro launches you can try it free for 7 days; you won\'t be charged during the trial.',pro_mo:'/ month',pro_yr:'/ year (save 30%)',pro_wait:'Tell me when Pro opens',pro_side_try:'Try it free for 7 days →',pw_t:'Welcome to TradeLog Pro!',pw_trial:'Your 7-day free trial has started. You won\'t be charged until {d}; cancel any time from Settings → Plan.',pw_active:'Your subscription is active. Every Pro feature is now on in your account.',pw_k:'Now in your account',pw_d_sync:'Your trades arrive from MT4/MT5 on their own every night.',pw_d_ai:'Ask the coach that reads your journal anything.',pw_d_accounts:'Personal, challenge and funded accounts on one dashboard.',pw_d_shots:'Add entry, exit and analysis screenshots to every trade.',pw_d_mentor:'Give your mentor read-only access.',pw_sync_a:'Connect',pw_ai_a:'Ask',pw_mt_a:'Add mentor',pw_foot:'Paddle has emailed you a confirmation. Manage your plan from Settings → Plan.',pw_later:'Back to dashboard',pw_go:'Connect your MT4/MT5 account',pc_t:'Plan',pc_trial:'Free trial',pc_active:'Active',pc_ending:'Canceled',pc_due:'Payment due',pc_free:'Free',pc_paddle:'Your card details and invoices are on Paddle\'s secure customer page.',pc_free_d:'Unlimited trades, every report, weekly recap, calendar, playbooks and prop firm rules. 2 active accounts, 1 screenshot per trade.',pc_up_t:'TradeLog Pro',pc_up_s:'Automatic MT4/MT5 sync, TradeLog AI and 20 accounts. Free for 7 days.',pc_up_s2:'Automatic MT4/MT5 sync, TradeLog AI and 20 accounts.',pn_t:'Let TradeLog AI read your trades',pn_s:'With Pro, your coach looks at your setups, sessions and mistakes and tells you what to change, and your trades arrive from MT4/MT5 on their own. Free for 7 days, no charge today.',pn_later:'Not now',pay_go:'Start 7-day free trial',pay_yr_m:'yearly · $13.25/month',pay_today:'Today',pay_today_s:'7 days of Pro, free',pay_then_s:'Your subscription starts. We\'ll email you a reminder first; cancel before this date and you won\'t be charged.',pay_fine:'Cancel anytime · 14-day money-back on your first payment · Secure checkout by Paddle',pay_amt_m:'$19 / month',pay_amt_y:'$159 / year',pay_ren_m:'Renews every month',pay_ren_y:'Renews every year',sub_cancel:'Cancel subscription',pay_go2:'Upgrade to Pro',pay_mo:'monthly',pay_yr:'yearly',pay_save:'save 30%',pay_hint:'<b>You won\'t be charged today.</b> A card is required, but nothing is charged during the 7-day trial; cancel before it ends and you pay nothing. If you don\'t cancel, {p} starts when the trial ends. Payment is handled securely by Paddle; 14-day money-back guarantee on your first payment.',pay_hint2:'Payment is handled securely by Paddle. Cancel any time; 14-day money-back guarantee on your first payment.',pay_pm:'$19 per month',pay_py:'$159 per year',pay_opening:'Opening…',pay_login:'Sign in to your account first to upgrade to Pro.',pay_e_load:'The checkout couldn\'t open. Check your internet and try again.',pay_wait:'Payment received, opening Pro…',pay_ok:'Pro is on. Welcome!',pay_slow:'Your payment went through but Pro isn\'t on yet. If it doesn\'t open in a few minutes, contact support.',pay_e_portal:'The subscription page couldn\'t open. Please try again shortly.',sub_renews:'Pro · {p} · Next payment {d} ({a})',sub_trial:'Free trial · your {a} plan starts on {d}',sub_ends:'Pro canceled · active until {d}',sub_due:'Your last payment failed. Update your card so Pro stays on.',sub_over:'Your Pro subscription has ended.',sub_manage:'Manage subscription',pro_waited:'You\'re on the list',pro_wait_ok:'You\'re on the list. We\'ll email you when Pro opens.',pro_wait_login:'Sign in to your account first to get notified.',pro_side_t:'TradeLog Pro',pro_side_s:'Auto sync, AI coach and more',ai_ask:'Ask TradeLog AI',mentor_t:'Mentor access',mentor_p:'Give your mentor or a friend read-only access so they can see your trades, notes and reports and guide you.',mentor_add:'Add a mentor',
pro_f_sync:'Automatic MT4/MT5 sync',pro_f_accounts:'20 active accounts on one dashboard',pro_f_ai:'TradeLog AI: comments and Q&A',pro_f_shots:'10 screenshots per trade',pro_f_mentor:'Read-only access for your mentor',
pro_h_sync:'Let your trades arrive on their own',pro_p_sync:'Connect your MT4/MT5 account once and closed trades, balance and cash movements are added automatically. No more report uploads.',
pro_h_accounts:'All your accounts on one dashboard',pro_p_accounts:'The free plan includes 2 active accounts. With Pro, track up to 20 challenge, funded and personal accounts together.',
pro_h_ai:'A coach that reads your data',pro_p_ai:'TradeLog AI looks at your trades, notes and mistakes, tells you what to keep and what to drop, and answers your questions.',
pro_h_shots:'10 screenshots on every trade',pro_p_shots:'Keep your entry, management and exit charts on the same trade.',
pro_h_mentor:'Work with your mentor',pro_p_mentor:'Give your mentor read-only access so they can see your trades, notes and reports.',
pro_h_gen:'Less logging, more insight',pro_p_gen:'Pro brings your trades in from MT4/MT5 on its own, lets you run several accounts from one place, and helps you read your data with a coach.',
sh_btn:'Share',sh_t_trade:'Share trade',sh_t_week:'Share weekly recap',sh_p:'Anyone with the link can see this page. It shows things as they were when you created the link, and you can turn it off any time.',sh_o_notes:'Show my notes',sh_o_money:'Show the money amount',sh_o_shots:'Show screenshots',sh_o_focus:'Show suggestions for next week',sh_o_note:'Show the note of the week',sh_name:'Your name (optional)',sh_name_ph:'e.g. Alex',sh_prev:'Preview',sh_make:'Create link',sh_making:'Preparing…',sh_ready:'Your link is ready',sh_copy:'Copy link',sh_open:'Open',sh_revoke:'Turn off link',sh_revoke_c:'Turn off this link? People with the link will no longer see the page.',sh_revoked:'Link turned off',sh_err:'Could not create the link. Check your connection and try again.',sh_list:'My share links',sh_list_s:'Turning one off breaks the link',sh_list_empty:'No share links yet. Press Share on a trade or on your weekly recap.',sh_views:'{n} {n|view|views}',sh_by:'Shared by {k}',sh_anon:'Shared by a TradeLog user',sh_cta_t:'Learn something from every trade.',sh_cta_p:'TradeLog is a free trading journal: log your trades and see what works, in R.',sh_cta:'Start free',sh_gone_t:'This link is no longer active',sh_gone_p:'The person who shared it may have turned it off, or the address is wrong.',sh_loading:'Loading…',
l_shots_img:'Screenshots',shot_add:'Add image',shot_paste:'or paste with Ctrl+V',shot_up:'Uploading…',shot_err:'Could not upload the image. Check your connection and try again.',shot_max:'You can add up to {n} images to a trade.',shot_need:'Sign in to your account to add screenshots.',shot_tg:'Open TradeLog on the web to add screenshots.',shot_rm:'Remove image',shot_view:'Enlarge image',
au_in_t:'Welcome back',au_in_s:'Sign in to your account.',au_in_btn:'Sign in',au_in_link:'Log in',au_up_t:'Create your free account',au_up_s:'Free forever plan, no trade limit. Ready in a minute.',au_up_btn:'Create account',au_up_link:'Sign up free',au_google_up:'Sign up with Google',
au_pw:'Password',au_pw_new:'New password',au_pw_new_ph:'At least 8 characters',au_pw_h:'At least 8 characters. Mixing letters and numbers is recommended.',au_show:'Show',au_hide:'Hide',au_forgot:'Forgot password?',au_new:'No account yet?',au_have:'Already have an account?',au_back_in:'Back to sign in',
au_fg_t:'Reset your password',au_fg_s:'Enter your email and we\'ll send you a link to reset your password.',au_fg_btn:'Send reset link',au_rs_s:'We sent you a password reset link.',au_rs_sent:'We sent the link to {e}. Click it to set a new password.',
au_vf_s:'Almost there. Please confirm your email address.',au_vf_sent:'We sent a confirmation link to {e}. Click it to activate your account.',au_spam:'If it doesn\'t arrive in a few minutes, check your spam folder.',au_resend_l:'Resend link',
au_np_t:'Set a new password',au_np_s:'You\'ll use this password to sign in from now on.',au_np_btn:'Save password',au_pw_saved:'Password saved',au_pw_dlg:'Set / change password',
au_e_cred:'Wrong email or password.',au_e_exists:'An account with this email already exists. Sign in or reset your password.',au_e_weak:'Password must be at least 8 characters.',au_e_pw:'Enter your password.',au_e_unconf:'Your email isn\'t confirmed yet. Click the confirmation link in your inbox.',au_e_noauth:'We can\'t send email to this address right now. Try continuing with Google, or try again later.',au_e_same:'The new password must be different from the old one.',
au_s_l:'No account yet? The same steps create one. No password: we\'ll email you a one-time sign-in link.',au_s2l:'We sent you a sign-in link. Click the link in the email and TradeLog will open and sign you in.',au_sent_l:'We sent the link to {e}.',au_link_h:'Open the email on this device to finish signing in here. If it doesn\'t arrive in a few minutes, check your spam folder. The link works once and expires soon.',au_resent_l:'We sent a new link.',au_linking:'Signing you in…',au_e_link:'This sign-in link has expired or was already used. Ask for a new one.',
au_t:'Sign in to TradeLog',au_t2:'Check your email',au_s:'No account yet? The same steps create one. No password: we\'ll email you a one-time code.',au_s2:'Enter the code from TradeLog in your inbox. If it doesn\'t arrive in a few minutes, check your spam folder.',
au_google:'Continue with Google',au_or:'or',au_email:'Email',au_send:'Send code',au_wait:'Please wait…',au_sent:'We sent a code to {e}.',au_code:'Verification code',au_verify:'Sign in',au_change:'Change email',au_resend:'Resend code',au_resend_in:'Resend ({s}s)',au_resent:'We sent a new code.',
au_local:'The {n} {n|trade|trades} on this device will move to your account when you sign in.',au_legal:'By continuing you accept the {t} and the {p}.',au_terms:'Terms of use',au_privacy:'Privacy policy',au_preview:'Continue without an account (preview)',
au_net:'Could not reach the server. Check your connection and try again.',au_pt:'What your account gives you',au_p1:'The same data everywhere. ',au_p1d:'Log on your phone, review on your computer.',au_p2:'Your data is safe. ',au_p2d:'Encrypted connection, servers in Europe; only you can see your data.',au_p3:'You stay in control. ',au_p3d:'Download your data or delete your account any time.',
au_e_rate:'Too many attempts. Wait a few minutes and try again.',au_e_code:'The code is wrong or has expired. Check it or ask for a new one.',au_e_closed:'New accounts can\'t be created right now. Please try again later.',au_e_gen:'Something went wrong. Please try again.',au_e_mail:'Enter a valid email address.',
sb_moved:'The data on this device moved to your account',sb_both_t:'How should we combine your data?',sb_both_p:'This device has {a} {a|trade|trades}; your account has {b}.',sb_merge:'Merge (recommended)',sb_merge_d:'Both are kept; the same trade is never added twice.',sb_server:'Use my account\'s data',sb_server_d:'This device\'s data is replaced with your account\'s.',sb_device:'Use this device\'s data',sb_device_d:'Your account\'s data is replaced with this device\'s.',
sb_acc:'Profile',plan_free_n:'Free plan',sb_now:'Sync now',sb_out:'Sign out',sb_del:'Delete account',sb_acc_h:'Your data is stored in your account, so every device you sign in on shows the same data.',
sb_out_c:'Sign out? Your data stays in your account; the copy on this device is removed.',sb_out_c2:'Some changes couldn\'t be sent to your account yet (no connection). If you sign out now they will be lost. Sign out anyway?',
sb_del_c:'Your account and all of its data will be deleted permanently. This can\'t be undone. Continue?',sb_deleted:'Your account was deleted',sb_del_err:'Could not delete the account. Check your connection and try again.',
sbs_ing:'Syncing…',sbs_ok:'Synced with your account',sbs_err:'Sync failed; will retry. Your data is kept on this device.',sbs_off:'Offline. Changes will be sent when you\'re back online.',
privacy_sb:'Your data is stored in your account on servers in Europe (Frankfurt) over an encrypted connection. Only you can see it; you can download it or delete your account any time.',confirm_wipe_sb:'All trades, accounts, playbooks and journal notes will be deleted from this device and from your account. Are you sure?',
rt_week:'Weekly recap',wk_t:'Weekly recap',wk_this:'This week',wk_prev:'Last week',wk_copy:'Copy recap',wk_copy_h:'Copy the recap and send it to your mentor, a friend or yourself.',wk_empty:'No trades logged this week.',wk_go_prev:'See last week',
wk_vs:'Last week {x}',wk_vs_none:'No trades last week',wk_dl:'{x} vs last week',wk_vs_t:'Last week',wk_net:'Net result',wk_green:'Green days',wk_days_n:'{n} trading {n|day|days}',wk_hi:'Highlights',wk_best_t:'Best trade',wk_worst_t:'Worst trade',wk_best_d:'Best day',wk_worst_d:'Toughest day',wk_best_s:'Top setup',wk_mis:'Cost of mistakes',wk_jr:'Days journaled',
wk_focus:'For next week',wk_focus_s:'From this week\'s data',wk_focus_none:'Not enough data for suggestions yet. Add setups and mistakes to your trades and this fills up.',wk_note:'Note of the week',wk_note_s:'What went well, what will you change?',wk_note_ph:'e.g. I was patient with breakouts. Next week I\'ll cap Monday at 2 trades.',wk_note_save:'Save note',wk_open:'Open recap',wk_card_s:'{n} {n|trade|trades} · {w} win rate',
wf_mis:'"{k}" cost you {r} this week ({n} {n|trade|trades}). Check for it before you enter next week.',wf_off:'{n} off-plan {n|trade|trades} totalled {r}. Next week, take only the setups in your playbook.',wf_emo:'Trades tagged "{k}" totalled {r} ({n} trades). When you notice that feeling, pause before you enter.',wf_dll:'You went past your daily loss limit (−{l}R) on {n} {n|day|days}. When you hit it, close the charts for the day.',wf_maxt:'You went over your daily trade limit ({l}) on {n} {n|day|days}.',wf_setup_bad:'{k} made {r} this week ({n} {n|trade|trades}). Review its rules or pause it for a week.',wf_setup_good:'{k} made {r} this week ({n} {n|trade|trades}). Focus on it next week.',wf_clean:'Every trade this week followed your plan. Keep it up.',wf_jr:'You didn\'t journal this week. Write the note of the week below in two sentences.',
nav_imp:'Import report',ok_btn:'OK',cols_btn:'Columns',cols_t:'Table columns',cols_h:'Choose the columns you want in the table. Date, symbol and R are always shown.',cols_reset:'Reset to default',acc_added:'Account added',gs_t:'Getting started',gs_s:'{d} of {n} steps done',gs_hide:'Hide',gs_go:'Start',gs_acc:'Add your account',gs_trade:'Add your first trade',gs_trade_d:'Add it manually or upload your MT4/MT5 report.',gs_pb:'Create a playbook',gs_pb_d:'Write your setup rules and see which rules pay off.',gs_rules:'Enter your prop firm rules',gs_rules_d:'Set daily and total loss limits and get warned as you get close.',gs_jr:'Write your first journal entry',gs_jr_d:'Save your pre-session plan or end-of-day note.',acc_word:'account',wel_step2:'Step 2',wel_ready_t:'Your account is ready',wel_ready_d:'{k} was added. Now add your first trade; your dashboard, calendar and reports will fill up from there.',add_t:'Add trade',add_man:'Log a trade manually',add_rep:'Upload a report',add_how:'Where should your trades come from?',add_accs:'{n} {n|account|accounts}',add_man_d:'Enter symbol, side and result in the form. About 15 seconds.',add_rep_d:'Trades in the report are added to your account. Ones already added are skipped and your manual entries are matched.',wel_step:'Step 1',wel_acc_t:'Let\'s set up your account',wel_acc_d:'Your trades, balance and prop rules are tracked per account. Where should your trades come from?',wel_alt:'Want to look around first?',acc_m_auto:'Connect automatically',acc_m_auto_d:'Connect your MT4/MT5 account with its investor password; trades and balance arrive on their own.',soon_pro:'Coming soon · Pro',acc_manage_all:'Manage accounts',acc_n:'{n} accounts',mood_1:'Very bad',mood_2:'Bad',mood_3:'Okay',mood_4:'Good',mood_5:'Great',nav_home:'Home page',th_to_dark:'Dark theme',th_to_light:'Light theme',
r_hint:'R is a multiple of the amount you risked. Stopped out: −1. Won twice your risk: 2. Not sure? Just pick the outcome below.',ph_rra:'e.g. 2 or −1',l_emo_q:'How did you feel?',rr_hint:'The gain you aimed for at entry (R)',pnl_hint:'Net result in money; makes your balance exact',rating_hint:'Regardless of the result: how well did you follow your rules?',k_rr_s:'Average win ÷ average loss',k_plan_s2:'Trades where you followed your plan',acc_add_how:'Where will this account\'s trades come from?',acc_m_rep:'Upload an MT4/MT5 report',acc_m_rep_d:'Account name, currency, balance and your trade history come in at once. No password needed.',acc_m_man:'Create the account manually',acc_m_man_d:'You enter the account name, balance and currency, then add trades one by one.',acc_from_rep:'Taken from your MetaTrader data',show_more:'Show more ({n} more)',wr_s:'Win rate',period:'Period',dg_in:'Import',dg_out:'Backup and export',dg_demo:'Sample data',archived:'Archive',acc_link:'Report matching',acc_link_on:'MT4/MT5 reports for this number are added to this account automatically.',acc_link_off:'Not matched yet. When you upload this account\'s MT4/MT5 report, the account number is matched automatically and future reports come here. This is not an account connection; no password is needed.',acc_unlink:'Remove matching',acc_unlink_c:'Remove the #{n} matching? Trades are kept; you will be asked to choose the account again on the next report.',acc_risk_l:'risk',at_challenge:'Challenge',at_funded:'Funded',at_personal:'Personal',at_demo:'Demo / backtest',acc_type:'Account type',acc_alltype:'All {k} accounts',
acc_edit:'Edit account',acc_name_ph:'e.g. FTM 10K Funded',acc_risk_h:'Used to estimate PnL for trades without a result',acc_req:'Balance and risk must be 0 or more.',
acc_manage:'Manage account',acc_arch:'Archive',acc_arch_h:'Data is kept; the account leaves combined views and new-trade choices. For old challenge accounts.',acc_unarch:'Unarchive',
acc_del:'Delete account with its data',acc_del_h:'The account, its {n} {n|trade|trades} and cash movements are permanently deleted.',acc_del_c2:'"{k}", its {n} {n|trade|trades} and cash movements will be permanently deleted. This cannot be undone. Continue?',
acc_last:'At least one active account must remain.',acc_archived:'Account archived',acc_unarchived:'Account unarchived',
s_arch:'Archived accounts ({n})',s_dedup:'Count copied trades once in combined views',s_dedup_d:'If you opened the same trade on several accounts (same symbol and side within 2 minutes), statistics count it once; PnL is added up.',
s_rules_s:'For all accounts, in R',copies:'on {n} accounts',
ar_title:'Prop firm rules',ar_sub:'percent of starting balance',ar_dll:'Daily max loss',ar_dll_h:'e.g. 5',ar_mll:'Total max loss',ar_mll_h:'e.g. 10',ar_tgt:'Profit target',ar_tgt_h:'e.g. 8 (leave empty if funded)',
ar_note:'Calculated from closed trades; open positions are not included. If your firm measures the daily limit from start-of-day balance or equity, small differences may occur.',
ar_dll_s:'daily {v}%',ar_mll_s:'total {v}%',ar_tgt_s:'target {v}%',ar_card:'Account rules',ar_card_s:'Remaining limits today and overall',
ar_left:'{x} left / {l}',ar_prog:'{x} / {l}',ar_hit:'Limit breached',ar_done:'Target reached',
al_dll_hit:'{k}: daily loss limit ({l}) breached. Don\'t open new trades today.',al_dll_near:'{k}: {x} left to the daily loss limit.',al_mll_hit:'{k}: total loss limit breached.',al_mll_near:'{k}: {x} left to the total loss limit.',
im_flow_h:'How often should I upload a report?',im_drop:'Drag your report here or choose it',im_drop_s:'MT4/MT5 report: HTML, Excel (XLSX) or CSV',im_how:'How do I get the report?',im_phone_h:'Can I get the report on my phone?',im_flow:'As often as you like, for example weekly. Trades already added are skipped. If you logged a trade on your phone right after closing it, it is matched with the same trade in the report: your notes, setup and mistakes are kept; lots, prices, net profit and R are updated from the report. Deposits and withdrawals are taken from the report too.',
im_add:'{n} new {n|trade|trades} will be added.',im_match:'{n} {n|trade|trades} matched trades you logged manually. Your notes are kept; numbers are updated from the report.',
im_ops:'Cash movements: {d} {d|deposit|deposits} ({da}), {w} {w|withdrawal|withdrawals} ({wa}).',im_bal_ok:'The calculated balance matches the report\'s final balance ({b}).',
im_bal_diff:'The report\'s final balance is {b}, calculated {c}. If the report doesn\'t cover the full account history, correct the starting balance.',im_bal_set:'Starting balance will be taken from the report\'s opening deposit: {a} → {b}.',im_nothing:'Everything in this report is already added.',im_tz_auto:'The time offset was picked automatically from your manually logged trades ({h} h). It will be remembered for this account.',
im_done:'{n} {n|trade|trades} added, {u} updated',
acc_now:'Current balance',im_linked:'This report belongs to {k} (#{n}); trades will be added there.',im_willlink:'{k} will be matched to #{n}. Future reports for this number go here automatically.',im_wrongacc:'{k} is matched to #{a}, but this report belongs to #{b}. Choose the right account or create a new one.',im_choose:'If one of your accounts belongs to this report, choose it; otherwise a new account is created. The chosen account is matched to this number and future reports go there automatically.',tx_btn:'Cash movements ({n})',tx_title:'{k}: balance',tx_start:'Starting',tx_dep:'Deposited',tx_wd:'Withdrawn',tx_pnl:'Trading result',
tx_est:'≈ Results of trades without PnL were estimated from R and the account risk setting.',tx_add:'Add cash movement',tx_dep1:'Deposit',tx_wd1:'Withdrawal',tx_amt:'Amount',tx_note:'Note',tx_note_ph:'e.g. prop firm payout',
tx_addbtn:'Add',tx_list:'History',tx_empty:'No cash movements yet.',tx_rep:'from report',tx_req:'Amount and date are required.',tx_del_c:'Delete this cash movement?',
cancel:'Cancel',im_btn:'Import',m_broker:'Import MT4/MT5 report',f_rev:'All trades',f_rev_p:'Not reviewed',
im_title:'Upload MT4/MT5 report',im_intro:'Trades from your MetaTrader report are added with symbol, side, time, lots, prices and profit. If a stop loss is set, R is calculated automatically; you add setup and psychology quickly afterwards.',
im_mt5:'MetaTrader 5 (desktop)',im_mt5_s:'Open the History tab in the Toolbox (Ctrl+T)|Right-click the list, choose the Positions view and a period (e.g. Last 3 months)|Right-click again: Report → HTML or Open XML (Excel)|Upload the saved file here',
im_mt4:'MetaTrader 4 (desktop)',im_mt4_s:'Open the Account History tab in the Terminal window|Right-click and choose a period (e.g. All history)|Right-click: Save as Report or Save as Detailed Report|Upload the saved .htm file here',
im_phone:'MetaTrader phone apps cannot export the trade list as a file; their PDF is only a summary. Get the report from desktop MT4/MT5 by logging in with the same account. If your prop firm dashboard exports trade history as CSV/Excel, you can try that too.',
im_formats:'Supported: MT5 HTML and Excel (.xlsx), MT4 HTML, TradeLog CSV and backups. English and Turkish reports work. Uploading the same report again skips trades already added.',
im_pick:'Choose file',im_none:'No closed trades were found in this file. Make sure you uploaded the report from MetaTrader\'s History tab (the summary report from the Reports menu has no trade list).',
im_err:'Could not read the file. Upload an MT4/MT5 HTML/Excel report or a TradeLog CSV/backup.',im_xlsx_err:'The component needed to read Excel files could not load. Check your connection or save the report as HTML.',
im_prev:'Import preview',im_range:'Date range',im_net:'Net result',
im_r:'R will be calculated from the stop loss on {a} {a|trade|trades}. {b} {b|trade has|trades have} no stop; R is estimated from the account risk setting (shown with ≈).',
im_dup:'{n} {n|trade was|trades were} already added and will be skipped.',im_acc:'Add to which account?',im_newacc:'Create new account: {n}',
im_tz:'Time offset',im_tz0:'No offset',im_hours:'hours',im_tz_h:'Report times are the broker server\'s. Choose the difference to your own time; for example, server GMT+2 and you in London (GMT+0) is −2.',
im_queue:'Add to the review list',im_go:'Import',
rv_tag:'review',rv_card:'{n} {n|trade|trades} waiting for review',rv_card_s:'Adding setup, plan and mistakes takes about 10 seconds per trade; insights come from this information.',rv_start:'Review',
rv_title:'Review · {i}/{n}',rv_skip:'Skip',rv_skip_h:'Use Skip for any trade you don\'t want to tag now.',rv_save:'Save and next',rv_done:'All trades reviewed',
d_px:'Entry → exit',d_lots:'Lots',d_close:'Closed',d_rest:'≈ This trade had no stop loss, so R was estimated from the account risk setting.',
wel_imp:'Upload MT4/MT5 report',
v_dash:'Dashboard',v_trades:'Trades',v_cal:'Calendar',v_rep:'Reports',v_pb:'Playbooks',v_jr:'Journal',v_set:'Settings',
t_dash:'Home',t_trades:'Trades',t_cal:'Calendar',t_rep:'Reports',t_more:'More',
new_trade:'New trade',save:'Save',del:'Delete',edit:'Edit',dup:'Duplicate',close:'Close',copy:'Copy',copied:'Copied to clipboard',restore:'Restore',
details:'Details',see_all:'See all',today:'Today',week:'Week',yes:'Yes',no:'No',off:'Off',optional:'optional',start:'Start',cum:'total',
per_w:'This week',per_m:'This month',per_30:'30 days',per_90:'90 days',per_y:'This year',per_all:'All',per_empty:'No trades in the selected period.',per_all_btn:'Show all time',
acc_all:'All accounts',acc_default:'Main account',acc_name:'Account name',acc_bal:'Starting balance',acc_cur:'Currency',acc_risk:'Risk %',acc_add:'Add account',

o_Win:'Win',o_Loss:'Loss',o_BE:'Breakeven',
wel_t:'Log your trades and see where you lose money',wel_d:'Record every trade in R and automatically see what works by setup, session and mistake. No sign-up needed.',
wel_add:'Add your first trade',wel_demo:'Try with sample data',
wel_f1:'Playbook rules: see which rules you follow when you win',wel_f2:'Mistake cost: measure how many R FOMO or early exits cost you',
wel_f3:'Automatic insights: tilt, overtrading and your best hours',wel_f4:'Same data on phone and desktop through Telegram',
al_day:'Today {x}: you hit your daily loss limit (−{l}R). Consider stopping for the day.',al_str:'{n} losses in a row (limit {l}). Take a break and review your plan.',al_max:'You placed {n} trades today (limit {l}). Think twice before the next one.',
hero_w:'Net result this week',hero_m:'Net result this month',hero_30:'Net result, last 30 days',hero_90:'Net result, last 90 days',hero_y:'Net result this year',hero_all:'Total net result',kpi_wl:'{w} {w|win|wins}, {l} {l|loss|losses}{b}',kpi_be:', {n} breakeven',trades_l:'trades',strip_l:'Each bar is one trade, newest on the right',strip_off:'Faded bar: off plan',
k_wr:'Win rate',k_pf:'Profit factor',k_pf_s:'How many times your losses you won',k_exp:'Expectancy',k_exp_s:'Average per trade',k_rr:'Win/loss ratio',k_dd:'Max drawdown',k_dd_s:'Largest drop from a peak',
k_plan:'Plan adherence',k_plan_s:'Avg trade quality {r}/5',k_bal:'Balance',
c_eq:'Equity curve',c_eq_s:'Cumulative R',lg_eq:'Cumulative R',lg_off:'Off-plan trade',eq_need:'At least 2 trades with a result are needed for the chart.',
c_score:'TradeLog score',c_daily:'Daily result',c_daily_s:'Last 30 trading days',c_ins:'Insights',ins_need:'Insights need at least 5 trades in this period.',c_recent:'Recent trades',c_stats:'Statistics',c_disc:'Discipline',
score_need:'The score needs at least 5 trades in this period.',score_h:'The score averages six components. A 60% win rate, 2.5 profit factor, 2.5 win/loss ratio and a return of 3× drawdown count as full marks.',
sc_hi:'Strong and consistent',sc_mid:'Improving; focus on the weakest part',sc_lo:'Discipline and risk first',
sc_wr:'Win rate',sc_wr_s:'Win rate',sc_pf:'Profit factor',sc_pf_s:'PF',sc_rr:'Win/loss ratio',sc_rr_s:'Win/loss',sc_dd:'Drawdown control',sc_dd_s:'Drawdown',sc_cons:'Consistency (green days)',sc_cons_s:'Consistency',sc_disc:'Discipline',sc_disc_s:'Discipline',
in_best_setup:'Your best setup is {k}: {r} over {n} {n|trade|trades}, {w} win rate.',in_worst_setup:'{k} lost {r} this period ({n} {n|trade|trades}). Review its rules or pause it.',
in_mistakes:'The {n} {n|trade|trades} you flagged with mistakes total {r}. Most expensive: {k} ({r2}).',in_plan:'When you follow your plan you make {a} per trade; when you don\'t, {b}.',
in_tilt:'After 2 losses in a row your next trades average {a}, versus {b} overall. Try taking a break after two losses.',
in_weekday:'Your best day is {a} ({ra}/trade), your weakest is {b} ({rb}/trade).',in_session:'Your most productive session is {k}: {r} per trade.',
in_emotion:'Trades taken while feeling {k} average {r} ({n} {n|trade|trades}).',in_overtrade:'The {n} {n|trade|trades} after your 3rd trade of the day average {a}. Consider a daily trade cap.',
in_mfe:'On winners you captured {p}% of the move on average; {r} was left on the table.',
search_ph:'Search symbol, setup, notes or tags',filters:'Filters',f_reset:'Clear',f_out:'All outcomes',f_setup:'All setups',f_sym:'All symbols',f_dir:'Long and short',f_mis:'All mistakes',f_tag:'All tags',
no_match:'No trades match the filters.',no_trades:'No trades yet.',no_data:'No data.',n_tr:'{n} {n|trade|trades}',off_plan_s:'Off plan',
h_date:'Date',h_sym:'Symbol',h_dir:'Side',h_acc:'Account',h_setup:'Setup',h_sess:'Session',h_out:'Outcome',h_plan:'Plan',h_mis:'Mistake',h_emo:'Mindset',h_rating:'Quality',h_trades:'Trades',h_tot:'Total',h_avg:'Avg R',h_month:'Month',h_adh:'Rule adherence',
d_title:'Trade details',d_rules:'{k} rules',
f_new:'New trade',f_edit:'Edit trade',fs_trade:'Trade',fs_result:'Result',fs_rules:'Playbook checklist',fs_review:'Review',fs_more:'More details',fs_notes:'Screenshots and notes',
l_time:'Time',l_rr:'Planned R:R',l_rra:'Result (R)',l_plan:'Did you follow your plan?',l_rating:'Trade quality',l_emo:'Mindset',l_mis:'Mistakes',l_tags:'Tags',l_sess:'Session / killzone',l_shots:'Chart links',l_notes:'Notes',
ph_setup:'e.g. London Breakout',ph_tags:'news, A+, partial',ph_notes:'Why did I enter, what did I learn?',shots_h:'One link per line. TradingView snapshots preview automatically.',
mfe_h:'Furthest the trade went in your favour, in R',mae_h:'Furthest the trade went against you, in R',
req:'Symbol and result are required. Enter the result in R or pick Win / Loss / Breakeven.',saved:'Saved',deleted:'Deleted',confirm_del:'Delete this trade?',
plan_yes:'Followed plan',plan_no:'Broke plan',
rt_ov:'Overview',rt_time:'Time',rt_setup:'Setups & symbols',rt_psy:'Psychology & discipline',rt_dist:'Distribution & exits',
r_month:'Monthly performance',r_wd:'Day of week',r_hour:'Entry hour',hour_need:'Add entry times to your trades for hourly analysis.',r_sess:'Session',r_mis:'Mistake cost',r_mis_s:'Most expensive first',a_plan:'Plan adherence',
r_hist:'R distribution',r_exit:'Exit efficiency',
st_aw:'Average win',st_al:'Average loss',st_tgt:'Average target RR',st_best:'Best trade',st_worst:'Worst trade',st_streak:'Longest streak (win / loss)',st_days:'Trading days',st_green:'{p} green',green_days:'Green days',
ds_today:'Today\'s result',ds_streak:'Current losing streak',ds_over:'Days over loss limit',ds_overT:'Days over trade limit',ds_leak:'Total of trades with mistakes',ds_clean:'Expectancy without mistakes',
ds_h:'Change limits in Settings. The gap between clean and mistake trades shows how many R discipline is worth to you.',
x_cap:'Move captured on winners',x_left:'Left on the table (winners)',x_lmfe:'Average MFE of losers',x_lmfe1:'Losers that first went 1R+ in favour',x_mae:'Average MAE',x_tgt:'Winners that reached target',
x_h:'Enter MFE and MAE on trades to fill this section. A low capture rate means early exits; if many losers first go 1R in your favour, consider a breakeven rule.',
day_empty:'No trades on this day.',j_open:'Open journal note',j_write:'Write journal note',
pb_intro:'A playbook is the entry rules of a setup. Pick the setup when adding a trade and its rules appear as a checklist; here you see which rules you followed on winners.',
pb_new:'New playbook',pb_edit:'Edit playbook',pb_used:'Setups without a playbook:',pb_empty:'No playbooks yet. Add your first setup and its rules.',pb_rules:'Rule',pb_followed:'Followed in',
pb_norules:'No rules added.',pb_cmp:'With every rule followed: {a} per trade; with a rule missing: {b}.',pb_name:'Setup name',pb_desc:'Description',pb_desc_ph:'When and why does this setup work?',
pb_rules_l:'Entry rules',pb_rules_ph:'With the HTF trend\nLiquidity taken\nEntry from FVG',pb_rules_h:'One rule per line.',pb_req:'Setup name is required.',pb_dup:'A playbook with this name already exists.',pb_del_c:'Delete this playbook? Trades are kept.',
j_mood:'How was your day?',j_see:'See trades',j_plan:'Pre-session plan',j_plan_ph:'Bias, levels you watch, news',j_rev:'End-of-day review',j_rev_ph:'What went well, what went wrong?',
j_les:'Lesson for tomorrow',j_les_ph:'One concrete change',j_save:'Save note',j_past:'Past notes',j_empty:'No journal notes yet.',j_saved:'Note saved',j_cleared:'Note deleted',
s_acc:'Accounts',s_acc_s:'Keep prop firm and personal accounts apart',s_rules:'Discipline rules',s_day:'Daily max loss (R)',s_day_d:'Shows a warning on the dashboard when hit',
s_str:'Max consecutive losses',s_str_d:'Break reminder at this count',s_maxT:'Daily max trades',s_maxT_d:'0 turns it off',s_look:'Appearance',s_lang:'Language',s_theme:'Theme',
th_auto:'System',th_light:'Light',th_dark:'Dark',s_data:'Data',s_priv:'Privacy',
m_csv_exp:'Export as CSV',m_csv_imp:'Import CSV',m_bak:'Download backup',m_res:'Restore from backup file',m_paste:'Restore by pasting text',m_demo:'Add sample data',m_demo_rm:'Remove sample data',m_wipe:'Delete all data',
csv_h:'The first CSV row needs at least date and symbol columns. Semicolon-separated Excel files work too.',
privacy:'Your data is stored only in this browser and never sent to a server. Clearing browser data erases it, so take regular backups.',
privacy_tg:'Your data is stored in the cloud tied to your Telegram account, so phone and desktop show the same data. Only you can see it.',
sync_ing:'Syncing…',sync_ok:'Synced with Telegram cloud',sync_err:'Cloud sync failed. Data is kept on this device and will retry.',
cloud_full:'Cloud storage limit reached. Export old trades as CSV and delete them.',storage_err:'Could not save: browser storage is full or disabled.',
x_exp_h:'Files cannot be downloaded inside Telegram. Copy the text; keep it by pasting into Saved Messages or move it to Excel on a computer.',
x_imp_h:'Paste a backup (JSON) or CSV text you copied earlier.',
confirm_demo:'48 sample trades and 3 playbooks will be added next to your data. You can remove them anytime in Settings. Continue?',
confirm_wipe:'All trades, playbooks, journal notes and settings will be permanently deleted. This cannot be undone. Continue?',
imported:'{n} {n|trade|trades} added, {s} skipped',bad_backup:'Invalid backup file.',bad_csv:'Could not read the CSV. The first row must contain date and symbol columns.',
demo_added:'Sample data added',demo_removed:'Sample data removed',wiped:'All data deleted',demo_note:'Sample trade',demo_tag:'sample',
dm_d1:'Breakout of the Asian range at the London open.',dm_r1:'Asian range clearly defined|Breakout candle closed strong|Aligned with HTF bias|Stop beyond the other side of the range',
dm_d2:'Trend pullback entry in the New York session.',dm_r2:'Clear 1H trend|Pullback reached the FVG|LTF structure break|Away from news time',
dm_d3:'Reversal after a liquidity grab.',dm_r3:'Previous day high/low taken|Reversal with displacement|Entry from OB or FVG|Target opposing liquidity',
emo_calm:'Calm',emo_focused:'Focused',emo_confident:'Confident',emo_impatient:'Impatient',emo_stressed:'Stressed',emo_tired:'Tired',emo_angry:'Angry',emo_greedy:'Greedy',emo_fearful:'Fearful',emo_bored:'Bored',
mis_early_entry:'Early entry',mis_late_entry:'Late entry',mis_no_confirmation:'No confirmation',mis_tight_sl:'SL too tight',mis_moved_sl:'Moved stop loss',mis_early_exit:'Early exit',mis_tight_tp:'TP too close',
sy_title:'Connect your MT4/MT5 account',sy_intro:'Connect your account once with its investor (read-only) password and your closed trades, deposits and withdrawals arrive in this account on their own. MetaTrader doesn\'t need to be open.',
sy_safe:'The investor password is read-only: it can\'t open trades or withdraw money. We don\'t store it; it is passed once to our MetaTrader connection service while connecting.',sy_acc:'TradeLog account',sy_acc_new:'New account (details come from MetaTrader)',sy_plat:'Platform',
sy_server:'Server',sy_server_ph:'e.g. ICMarketsSC-Live05',sy_server_h:'The server name you pick when logging in to MetaTrader; it\'s also in your broker\'s welcome email.',sy_login_l:'Account number',sy_pw:'Investor password',
sy_what_q:'What is the investor password and where do I find it?',sy_what:'It\'s a second password that only lets someone view the account. Your broker or prop firm sends it with your account details. If you can\'t find it, in MetaTrader go to Tools → Options → Server → Change, choose “Change investor (read only) password” and set a new one.',
sy_connect:'Connect',sy_wait:'Connecting to your broker… This can take up to a minute, keep this window open.',sy_linked:'Account connected. The first sync is running; your trades arrive within a few minutes. You can close this window.',
sy_e_input:'Check the server, account number and investor password.',sy_e_auth:'The account number, investor password or server is wrong. Check the details and try again.',sy_e_server:'This server wasn\'t found. Type the name exactly as in MetaTrader; it may be one of these:',
sy_e_exists:'This MetaTrader account is already connected.',sy_e_limit:'You can connect up to {n} accounts. Remove a connection you no longer use.',sy_e_slow:'The broker didn\'t answer',sy_e_config:'Automatic connection is unavailable right now.',sy_e_plan:'Connecting accounts is a Pro feature.',
sy_st_wait:'Checking status…',sy_st_start:'Starting the cloud terminal…',sy_st_conn:'Connecting to your broker…',sy_st_broker:'Your broker\'s server isn\'t answering yet, waiting…',sy_st_ready:'Connected, fetching your trades…',sy_st_min:'{n} min',sy_checking:'Checking…',sy_still:'Still connecting; your trades will arrive on their own once it\'s ready.',v_acc:'Accounts',ax_moved:'See your {n} account(s), balances and settings on the Accounts page',ax_total:'Total balance',ax_pnl:'Net gain',ax_net:'Net gain',ax_netr:'Net R',ax_active:'Active accounts',ax_open:'Open in dashboard',ax_be:'Breakeven',ax_live:'Auto',ax_nochart:'At least 2 trades needed for the curve',acc_be:'Breakeven range',acc_be_h:'Trades whose P&L stays within this amount (plus or minus) count as breakeven and don\'t affect your win rate. E.g. 200 means anything from −200 to +200 is breakeven. Leave empty to turn it off.',d_beauto:'Counted as breakeven because the P&L is within the ±{v} breakeven range; it doesn\'t affect your win rate.',shs_title:'Share trade',shs_prev:'Share card preview',shs_story:'Story (9:16)',shs_square:'Post (1:1)',shs_money:'Show amount',shs_money_h:'When off, the card shows only R',shs_share:'Share',shs_dl:'Download image',shs_link:'Create link',shs_back:'Back to details',shs_h:'Share opens your phone\'s share menu; pick Instagram to add it to your story.',shs_h_pc:'Download the image and post it on Instagram, X or Telegram. On a phone, Share offers Instagram directly.',shs_wait:'Preparing the card, one second…',shs_saved:'Image downloaded',shs_foot:'Logged with TradeLog',fs_res:'Result',l_pnl:'P&L',ph_pnl:'e.g. 250',r_hint2:'Enter either R or P&L; the outcome is picked for you. R is a multiple of what you risked (stop = −1).',rr_other:'Other',rr_hint2:'The risk/reward you aimed for at entry. E.g. 1:2 = you targeted twice your risk.',l_mis_q:'Any mistakes? (pick if so)',sy_daylim:'You\'ve used today\'s manual syncs for this account ({n} a day). Your new trades arrive automatically {night}; or try again around {t}.',sy_e_ours_t:'Automatic connection is unavailable right now',sy_e_ours:'The problem isn\'t your details, it\'s on our side. Try again a little later; if it continues, send us the support code. Meanwhile you can keep going by uploading your MT4/MT5 report.',sy_e_slow_d:'The broker didn\'t answer in time. Your details are most likely correct; try again in a few minutes.',sy_e_report:'Upload report',sy_e_code:'Support code',sy_e_net:'We couldn\'t reach the internet. Check your connection and try again.',sy_e_tries:'Too many failed attempts. Check the account number, server and investor password; you can try again in an hour.',sy_left:'{n} manual syncs left today',sy_next:'next automatic {x}',sy_night_now:'running now',sy_night_tonight:'tonight {t}',sy_night_today:'today {t}',sy_night_day:'{d} {t}',sy_night_dayn:'{d} night {t}',sy_e_broker:'Couldn\'t reach the broker. The investor password may have changed; remove the connection and connect again.',sy_e_gone:'The connection no longer exists; remove it and connect again.',sy_e_slow2:'Still connecting. Check again in a few minutes from the account editor.',
sy_err:'Something went wrong. Check your internet and try again.',sy_login:'Sign in first to connect an account',sy_connecting:'Connecting…',sy_first:'waiting for the first sync',sy_last:'last synced {t}',sy_sent:'{n} records',sy_now_b:'Sync now',sy_rm:'Remove',
sy_rm_c:'Remove this connection? Trades won\'t arrive automatically any more. Trades that already arrived are kept.',sy_rm_ok:'Connection removed',sy_got:'{n} new trades arrived from MetaTrader',sy_got_u:'{n} trades matched from MetaTrader',sy_got_c:'{n} cash movements arrived from MetaTrader',sy_ok_none:'Sync done, no new trades',
sy_auto_bal:'Calculated from your MetaTrader balance',sy_manage:'Auto sync',sy_manage_d:'Connect your MT4/MT5 account with its investor password and let trades arrive on their own.',sy_open:'Connect account',
sy_now:'just now',sy_min:'{n} min ago',sy_hour:'{n} h ago',sy_day:'{n} d ago',sy_imp:'Tired of uploading reports every time?',
co_title:'TradeLog AI',co_side:'Your coach that reads your data',co_hi:'Hi, I\'m TradeLog AI.',co_hi_p:'I read your journal, trades and mistakes. I\'ll tell you with numbers what works, and we\'ll pin down your next step together.',
co_ideas:'What I noticed for you',co_i_week:'This week',co_q_mis_x:'“{k}” cost me {r}. How do I stop it?',co_q_set_x:'Is {k} my best setup? Should I focus on it more?',co_q_day_x:'Why do my {k}s go badly?',
co_q_week:'Review my week',co_q_mistake:'What\'s my most expensive mistake?',co_q_setup:'Which of my setups really works?',co_q_risk:'How is my risk management?',co_q_emo:'How do my emotions affect my results?',co_q_next:'What should I focus on next week?',
co_ph:'Ask TradeLog AI…',co_send:'Send',co_new:'New chat',co_left:'{n} questions left · ',co_note:'Looks only at your data; not investment advice.',co_sub:'{n} trades · {v}',co_thinking:'Looking at your data…',
co_login:'Sign in first to use TradeLog AI',co_err:'Couldn\'t get an answer. Check your internet and try again.',co_e_fail:'Couldn\'t get an answer; the problem may be on our side. Try again, and if it continues, contact us with the support code.',co_e_limit:'You\'ve used today\'s {n} questions. I\'ll be here tomorrow.',co_e_config:'TradeLog AI can\'t answer right now; the problem is on our side. Try again soon, and if it continues, contact us with the support code.',co_e_busy:'I\'m very busy right now; try again in a few minutes.',co_e_input:'The question is too long; shorten it and try again.',
db_t:'You\'re looking at sample data.',db_d:'We added sample trades so you can get to know the dashboard. Once you add your own, remove the samples in one click.',db_own:'You have your own trades too. Remove the samples so they don\'t mix into your results.',db_add:'Add my own data',db_rm:'Remove samples',
tr_net_t:'Your total result, in R',tr_net_d:'The amount you risk on a trade is 1R. Risk $100 and make $250 and that\'s +2.5R; hit your stop and it\'s −1R. R shows how well you trade regardless of account size. The bars on the right are your latest trades.',
tr_kpi_t:'Key ratios',tr_kpi_d:'Win rate alone isn\'t enough. If profit factor is above 1 and expectancy above 0R, your system makes money. Each box says what it means underneath.',
tr_score_t:'TradeLog score',tr_score_d:'One grade from win rate, profit ratio, drawdown, consistency and plan adherence. Press Details to see where you\'re weak.',
tr_week_t:'Weekly recap',tr_week_d:'What went well and badly this week, and next week\'s focus. You can share it too.',
tr_ins_t:'Insights',tr_ins_d:'Findings that come out of your data on their own: your best setup, costly mistakes, bad days. Ask TradeLog AI for more.',
tr_add_t:'Add trade',tr_add_d:'Add new trades here: connect your account, upload a report or enter them by hand. Everything lands on the same dashboard.',
tr_skip:'Skip tour',tr_back:'Back',tr_next:'Next',tr_done:'Let\'s go',tr_again:'Start the dashboard tour',tr_need:'Add a few trades or sample data first to take the tour',
r_what:'What is R?',r_p1:'R is the amount you risk on a trade: the money between your entry and your stop. TradeLog shows results in R instead of dollars, so a $1,000 and a $100,000 account are measured the same way.',
r_ex_risk:'What you risk (1R)',r_ex_win:'Closed at target',r_ex_loss:'Hit the stop',r_p2:'An expectancy of +0.3R means you make 30% of your risk per trade on average. A total of +20R means you\'ve won back your risk on 20 trades.',
r_p3:'For trades without a stop, R is estimated from the account\'s “risk per trade %” setting and shown with ≈.',
wel_hi:'Welcome',wel_acc_d2:'Two quick steps: choose your account type, then where your trades come from. Your dashboard is ready in a minute.',wel_q1:'What kind of account is this?',wel_q1_s:'If it\'s a prop account, we\'ll track its rules too.',wel_q2:'Where should your trades come from?',
wel_t_personal:'An account you trade with your own money',wel_t_challenge:'Prop firm evaluation phase',wel_t_funded:'A funded prop account you passed',wel_rules_h:'Your prop firm\'s rules, as a percentage of the account balance. We filled in common values; change them to your firm\'s. You can edit them later in the account settings.',
wel_sync_k:'Automatic connection',wel_sync_wait_t:'Your account is connecting',wel_sync_wait_d:'The first connection to your MetaTrader account can take a few minutes. Once it\'s ready your trades arrive on their own and the dashboard fills up. If you close the app, it carries on next time you open it.',
wel_sync_ok_t:'Your account is connected',wel_sync_ok_d:'No closed trades were found in the last 90 days. New trades arrive automatically every night; you can check now if you like.',wel_sync_err_t:'Couldn\'t connect',wel_sync_chk:'Check now',
mis_off_plan:'Off-plan trade',mis_revenge:'Revenge trade',mis_fomo:'FOMO',mis_oversize:'Oversized risk',mis_overtrading:'Overtrading'}};

/* ================= core: data, storage, stats ================= */
const $=id=>document.getElementById(id);
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const K={trades:'tradelog_v2',set:'tradelog_set',jr:'tradelog_jr',pb:'tradelog_pb',theme:'tradelog_theme',lang:'tradelog_lang',view:'tradelog_view'};
const UPD='tradelog_upd';

const TG=(()=>{try{const w=window.Telegram&&window.Telegram.WebApp;return w&&w.initData?w:null}catch(e){return null}})();
const tgv=v=>{try{return !!TG&&TG.isVersionAtLeast(v)}catch(e){return false}};

let L=(()=>{try{const l=localStorage.getItem(K.lang);if(l==='tr'||l==='en')return l}catch(e){}if(!TG&&window.TL_PAGE&&(TL_PAGE.lang==='tr'||TL_PAGE.lang==='en'))return TL_PAGE.lang;const u=TG&&TG.initDataUnsafe&&TG.initDataUnsafe.user;return /^tr/i.test((u&&u.language_code)||navigator.language||'')?'tr':'en'})();
const t=(k,o)=>{let s=(T[L]&&T[L][k])!=null?T[L][k]:T.en[k]!=null?T.en[k]:k;
  if(o){s=s.replace(/\{(\w+)\|([^|}]*)\|([^}]*)\}/g,(m,p,one,many)=>+String(o[p]).replace(/<[^>]+>/g,'')===1?one:many);for(const p in o)s=s.split('{'+p+'}').join(o[p])}
  return s};
const loc=()=>L==='tr'?'tr-TR':'en-US';

const SYMS=['XAUUSD','XAGUSD','EURUSD','GBPUSD','USDJPY','GBPJPY','EURJPY','AUDUSD','NZDUSD','USDCAD','USDCHF','EURGBP','US100','US30','US500','GER40','UK100','BTCUSD','ETHUSD','SOLUSD','USOIL','NQ','MNQ','ES','MES','YM','GC','CL'];
const SESS=['Asia','London Open','London Close','NY AM','NY Lunch','NY PM'];
const TF=['1m','3m','5m','15m','30m','1H','2H','4H','1D','1W'];
const CUR=['USD','EUR','GBP','TRY','JPY','AUD','CAD','CHF'];
const ATYPES=['challenge','funded','personal','demo'];
const EMO=[['calm','😌'],['focused','🎯'],['confident','💪'],['impatient','😤'],['stressed','😰'],['tired','😴'],['angry','😡'],['greedy','🤑'],['fearful','😨'],['bored','🥱']];
const MIS=['early_entry','late_entry','no_confirmation','tight_sl','moved_sl','early_exit','tight_tp','off_plan','revenge','fomo','oversize','overtrading'];
const LEG_TR={emo:{calm:'Sakin',focused:'Odaklı',confident:'Güvenli',impatient:'Sabırsız',stressed:'Stresli',tired:'Yorgun',angry:'Öfkeli',greedy:'Aç gözlü'},
  mis:{early_entry:'Erken giriş',late_entry:'Geç giriş',tight_sl:'SL çok dar',tight_tp:'TP çok dar',off_plan:'Plan dışı işlem',revenge:'Revenge trade',fomo:'FOMO',early_exit:'Erken çıkış',oversize:'Risk büyüttüm',moved_sl:'SL\'i kaydırdım'}};
const EMO_LEG={},MIS_LEG={};
EMO.forEach(([k,e])=>{EMO_LEG[k]=k;const tr=LEG_TR.emo[k];if(tr){EMO_LEG[tr]=k;EMO_LEG[e+' '+tr]=k}});
MIS.forEach(k=>{MIS_LEG[k]=k;const tr=LEG_TR.mis[k];if(tr)MIS_LEG[tr]=k});
const emoL=k=>EMO.some(x=>x[0]===k)?t('emo_'+k):k;
const emoI=emoL;
const misL=k=>MIS.includes(k)?t('mis_'+k):k;

/* ---- storage ---- */
function ld(k,d){try{const v=JSON.parse(localStorage.getItem(k));return v==null?d:v}catch(e){return d}}
const lupd=()=>{try{return +localStorage.getItem(UPD)||0}catch(e){return 0}};
function put(k,v,touch=true){if(window.RO)return true;try{localStorage.setItem(k,JSON.stringify(v));if(touch){localStorage.setItem(UPD,String(Date.now()));cloudQ()}return true}catch(e){if(touch)cloudQ();toast(t('storage_err'));return false}}

/* ---- helpers ---- */
let _u=0;const uid=()=>Date.now()*1000+(_u++%1000);
const sid=()=>Math.random().toString(36).slice(2,9);
const str=v=>v==null?'':String(v).trim();
function num(v){
  if(v===''||v==null)return null;if(typeof v==='number')return isFinite(v)?v:null;
  let s=String(v).trim().replace(/[\s\u00a0\u2009\u202f]/g,'');
  if(/^[-+]?\d{1,3}(\.\d{3})+,\d+$/.test(s))s=s.replace(/\./g,'').replace(',','.');
  else if(/^[-+]?\d{1,3}(,\d{3})+(\.\d+)?$/.test(s))s=s.replace(/,/g,'');
  else s=s.replace(',','.');
  const n=parseFloat(s);return isFinite(n)?n:null;
}
const pad=n=>String(n).padStart(2,'0');
const iso=d=>`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const day=()=>iso(new Date());
const has=v=>v!==null&&v!==undefined;
const r2=v=>Math.round(v*100)/100;
const fr=v=>v==null?'—':(v>0?'+':v<0?'−':'')+Math.abs(r2(v)).toLocaleString(loc(),{maximumFractionDigits:2})+'R';
const pc=v=>v==null?'—':L==='tr'?'%'+Math.round(v):Math.round(v)+'%';
const cls=v=>v>0?'pos':v<0?'neg':'';
const clamp=(v,a=0,b=100)=>Math.max(a,Math.min(b,v));
const chrono=l=>[...l].sort((a,b)=>a.date.localeCompare(b.date)||(a.time||'').localeCompare(b.time||'')||a.id-b.id);
const wdi=d=>(new Date(d+'T12:00:00').getDay()+6)%7;
const wdName=(i,f='long')=>new Date(2024,0,1+i).toLocaleDateString(loc(),{weekday:f});
const dFmt=(d,o={day:'numeric',month:'short'})=>new Date(d+'T12:00:00').toLocaleDateString(loc(),o);
function money(v,sign,cur){if(v==null)return '—';try{return new Intl.NumberFormat(loc(),{style:'currency',currency:cur||curCur(),maximumFractionDigits:2,signDisplay:sign?'exceptZero':'auto'}).format(v)}catch(e){return (sign&&v>0?'+':'')+v.toFixed(2)}}
const avg=a=>a.length?a.reduce((x,y)=>x+y,0)/a.length:null;
const sum=a=>a.reduce((x,y)=>x+y,0);

/* ---- normalisation (also migrates v1/v2 data) ---- */
function arr(v,leg){
  if(typeof v==='string'){
    if(leg&&!v.includes('|')&&!v.includes(',')){const hit=Object.keys(leg).filter(k=>k.includes(' ')&&v.includes(k));if(hit.length)v=hit}
    if(typeof v==='string')v=v.split(/[|,]/);
  }
  return [...new Set((Array.isArray(v)?v:[]).map(x=>{x=str(x);return leg&&leg[x]||x}).filter(Boolean))];
}
function norm(x){
  if(!x||typeof x!=='object')return null;
  const date=str(x.date);if(!/^\d{4}-\d{2}-\d{2}$/.test(date))return null;
  const symbol=str(x.symbol).toUpperCase();if(!symbol)return null;
  const ra=num(x.rrActual);
  const outcome=['Win','Loss','BE'].includes(x.outcome)?x.outcome:ra!==null?(ra>0?'Win':ra<0?'Loss':'BE'):null;
  if(!outcome)return null;
  const p=str(x.plan);
  const plan=x.plan===true||/^(evet|yes|true|y|1)$/i.test(p)?'yes':x.plan===false||/^(hay[ıi]r|no|false|n|0)$/i.test(p)?'no':'';
  const mis=arr(x.mistakes,MIS_LEG);const er=str(x.error);if(er)mis.push(MIS_LEG[er]||er);
  const tm=str(x.time).match(/^(\d{1,2}):(\d{2})/),mfe=num(x.mfe),mae=num(x.mae),rt=Math.round(num(x.rating)||0);
  return{id:Number.isFinite(+x.id)&&+x.id>0?+x.id:uid(),date,time:tm&&+tm[1]<24&&+tm[2]<60?pad(+tm[1])+':'+tm[2]:'',symbol,
    dir:/^l/i.test(str(x.dir))?'Long':/^s/i.test(str(x.dir))?'Short':'',account:str(x.account),
    setup:str(x.setup),kz:str(x.kz)==='Asian'?'Asia':str(x.kz),tf:str(x.tf).replace(/^(\d+)M$/,'$1m'),
    rr:num(x.rr),rrActual:ra,pnl:num(x.pnl),mfe:mfe==null?null:Math.abs(mfe),mae:mae==null?null:-Math.abs(mae),
    plan,outcome,rating:rt>=1&&rt<=5?rt:null,
    emotions:arr(x.emotions,EMO_LEG),mistakes:[...new Set(mis)],tags:arr(x.tags),rules:arr(x.rules),
    chart:str(x.chart),notes:str(x.notes),demo:!!x.demo,...extras(x)};
}
function extras(x){
  const o={};['lots','entry','exit','sl','tp'].forEach(k=>{const v=num(x[k]);if(v!==null)o[k]=v});
  if(str(x.ext))o.ext=str(x.ext);if(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/.test(str(x.ct)))o.ct=str(x.ct);
  if(x.rEst)o.rEst=true;if(x.rev===false)o.rev=false;
  if(Array.isArray(x.shots)){const s=x.shots.filter(p=>typeof p==='string'&&/^[0-9a-f-]{36}\/[\w.-]{1,80}$/.test(p)).slice(0,10);if(s.length)o.shots=s}
  return o;
}
function normS(s){
  s=s&&typeof s==='object'?s:{};
  let acc=Array.isArray(s.accounts)&&s.accounts.length?s.accounts:[{id:'main',name:'',bal:s.bal,cur:s.cur,risk:s.risk}];
  acc=acc.map(a=>{const o={id:str(a.id)||sid(),name:str(a.name),bal:num(a.bal)!=null&&num(a.bal)>=0?num(a.bal):10000,cur:CUR.includes(a.cur)?a.cur:'USD',risk:num(a.risk)!=null&&num(a.risk)>=0?num(a.risk):1};if(str(a.initExt))o.initExt=str(a.initExt);const no=str(a.no).replace(/\D/g,'');if(no)o.no=no;if(str(a.srv))o.srv=str(a.srv).slice(0,80);
    if(ATYPES.includes(a.type))o.type=a.type;if(a.arch)o.arch=true;
    const ru=a.rules&&typeof a.rules==='object'?a.rules:{},rr={};['dll','mll','tgt'].forEach(k=>{const v=num(ru[k]);if(v!==null&&v>0&&v<100)rr[k]=v});if(Object.keys(rr).length)o.rules=rr;const z=num(a.tz);if(z!==null&&z>=-12&&z<=14)o.tz=Math.round(z);if(a.eab)o.eab=1;const be=num(a.be);if(be!==null&&be>0&&be<1e9)o.be=be;return o});
  const ids=new Set(acc.map(a=>a.id));
  const tx=(Array.isArray(s.tx)?s.tx:[]).map(z=>z&&typeof z==='object'?{id:str(z.id)||sid(),acc:str(z.acc),date:str(z.date),kind:z.kind==='wd'?'wd':'dep',amt:Math.abs(num(z.amt)||0),note:str(z.note),...(str(z.ext)?{ext:str(z.ext)}:{})}:null)
    .filter(z=>z&&z.amt>0&&/^\d{4}-\d{2}-\d{2}$/.test(z.date)&&ids.has(z.acc));
  const n=(v,d)=>{v=num(v);return v==null||v<0?d:v};
  if(!acc.some(a=>!a.arch))delete acc[0].arch;
  return{accounts:acc,tx,day:n(s.day,3),str:Math.round(n(s.str,3)),maxT:Math.round(n(s.maxT,0)),dedup:s.dedup!==false};
}
function normPB(a){
  return (Array.isArray(a)?a:[]).map(p=>p&&typeof p==='object'?{id:str(p.id)||sid(),name:str(p.name),desc:str(p.desc),rules:arr(p.rules),demo:!!p.demo}:null).filter(p=>p&&p.name);
}
const sortT=()=>trades.sort((a,b)=>b.date.localeCompare(a.date)||(b.time||'').localeCompare(a.time||'')||b.id-a.id);
const sig=x=>[x.date,x.time,x.symbol,x.dir,x.rrActual,x.setup,x.notes].join('|');

/* ---- state ---- */
let S=normS(ld(K.set,{}));
let trades=ld(K.trades,[]);trades=Array.isArray(trades)?trades.map(norm).filter(Boolean):[];
let PB=normPB(ld(K.pb,[]));
let JR=ld(K.jr,{});if(!JR||typeof JR!=='object'||Array.isArray(JR))JR={};
let V=Object.assign({acc:'all',per:'all'},ld(K.view,{}));
function fixAcc(){const ids=new Set(S.accounts.map(a=>a.id));trades.forEach(x=>{if(!ids.has(x.account))x.account=S.accounts[0].id});if(V.acc.startsWith('type:')?!actAccs().some(a=>a.type===V.acc.slice(5)):V.acc!=='all'&&!ids.has(V.acc))V.acc='all'}
fixAcc();sortT();
if(trades.length)put(K.trades,trades,false);
put(K.set,S,false);
const saveTrades=()=>put(K.trades,trades);
const saveS=()=>put(K.set,S);
const savePB=()=>put(K.pb,PB);
const saveJR=()=>put(K.jr,JR);
const saveV=()=>{try{localStorage.setItem(K.view,JSON.stringify(V))}catch(e){}};
const accOf=id=>S.accounts.find(a=>a.id===id)||S.accounts[0];
const actAccs=()=>S.accounts.filter(a=>!a.arch);
const multiView=()=>V.acc==='all'||V.acc.startsWith('type:');
/* accounts covered by the current account selector */
function scopeAccs(){
  if(V.acc==='all')return actAccs();
  if(V.acc.startsWith('type:'))return actAccs().filter(a=>a.type===V.acc.slice(5));
  return S.accounts.filter(a=>a.id===V.acc);
}
const accName=a=>a.name||t('acc_default');
const accLabel=a=>accName(a)+(a.no&&!accName(a).includes(a.no)?` #${a.no}`:'');
const curCur=()=>{const a=scopeAccs();return a.length&&new Set(a.map(x=>x.cur)).size===1?a[0].cur:'USD'};

/* ---- period filter ---- */
const PERS=['w','m','30','90','y','all'];
function perStart(p){
  const d=new Date();d.setHours(12,0,0,0);
  if(p==='w'){d.setDate(d.getDate()-((d.getDay()+6)%7));return iso(d)}
  if(p==='m')return iso(new Date(d.getFullYear(),d.getMonth(),1));
  if(p==='30'||p==='90'){d.setDate(d.getDate()-(+p-1));return iso(d)}
  if(p==='y')return `${d.getFullYear()}-01-01`;
  return '';
}
const tMin=(d,h)=>Date.UTC(+d.slice(0,4),+d.slice(5,7)-1,+d.slice(8,10),+(h||'00:00').slice(0,2),+(h||'00:00').slice(3,5))/6e4;
const symKey=s=>cleanSym(s).replace(/[^A-Z0-9]/g,'');
/* breakeven range per account: a trade whose P&L is within ±range counts as breakeven (not a win or a loss) */
function beFx(x,a){a=a||S.accounts.find(z=>z.id===x.account);return a&&a.be>0&&has(x.pnl)&&x.outcome!=='BE'&&Math.abs(x.pnl)<=a.be?{...x,outcome:'BE',beAuto:true}:x}
const rawAcc=l=>{const m=new Map(scopeAccs().map(a=>[a.id,a]));return l.filter(x=>m.has(x.account)).map(x=>beFx(x,m.get(x.account)))};
/* the same trade copied to several accounts (same symbol and side, opened within 2 minutes) counts once in combined views */
function collapse(l){
  if(!multiView()||!S.dedup)return l;
  const s=chrono(l),used=new Set(),out=[];
  s.forEach((x,i)=>{
    if(used.has(x.id))return;used.add(x.id);const g=[x],k=symKey(x.symbol),t0=x.time?tMin(x.date,x.time):null;
    for(let j=i+1;j<s.length&&s[j].date<=x.date;j++){
      const y=s[j];if(used.has(y.id)||g.some(z=>z.account===y.account)||symKey(y.symbol)!==k||y.dir!==x.dir)continue;
      const same=t0!==null&&y.time?Math.abs(tMin(y.date,y.time)-t0)<=2:(y.date===x.date&&has(x.rrActual)&&has(y.rrActual)&&Math.abs(x.rrActual-y.rrActual)<0.05);
      if(same){g.push(y);used.add(y.id)}
    }
    if(g.length===1){out.push(x);return}
    const pn=g.filter(z=>has(z.pnl));
    out.push({...x,pnl:pn.length?r2(sum(pn.map(z=>z.pnl))):null,copies:g.length,cids:g.map(z=>z.id)});
  });
  return out.sort((a,b)=>b.date.localeCompare(a.date)||(b.time||'').localeCompare(a.time||'')||b.id-a.id);
}
const byAcc=l=>collapse(rawAcc(l));
function fT(){const s=perStart(V.per);return byAcc(trades).filter(x=>!s||x.date>=s)}

/* ---- stats ---- */
function stats(l){
  const rs=l.filter(x=>has(x.rrActual)).map(x=>x.rrActual);
  const n=l.length,w=l.filter(x=>x.outcome==='Win').length,ls=l.filter(x=>x.outcome==='Loss').length,be=n-w-ls;
  const tot=sum(rs),gp=sum(rs.filter(x=>x>0)),gl=Math.abs(sum(rs.filter(x=>x<0)));
  const aw=avg(l.filter(x=>x.outcome==='Win'&&has(x.rrActual)).map(x=>x.rrActual)),al=avg(l.filter(x=>x.outcome==='Loss'&&has(x.rrActual)).map(x=>Math.abs(x.rrActual)));
  let c=0,pk=0,dd=0,ms=0,cs=0,mw=0,cw=0;
  chrono(l).forEach(x=>{if(has(x.rrActual)){c+=x.rrActual;pk=Math.max(pk,c);dd=Math.max(dd,pk-c)}
    if(x.outcome==='Loss'){cs++;ms=Math.max(ms,cs)}else cs=0;
    if(x.outcome==='Win'){cw++;mw=Math.max(mw,cw)}else cw=0});
  const pl=l.filter(x=>x.plan),pn=l.filter(x=>has(x.pnl));
  const byD={};l.forEach(x=>{if(has(x.rrActual))byD[x.date]=(byD[x.date]||0)+x.rrActual});
  const dv=Object.values(byD),rated=l.filter(x=>x.rating);
  return{n,w,ls,be,wr:w+ls?w/(w+ls)*100:null,tot,gp,gl,pf:gl?gp/gl:(gp?Infinity:null),exp:rs.length?tot/rs.length:null,aw,al,real:aw!==null&&al?aw/al:null,
    dd,ms,mw,best:rs.length?Math.max(...rs):null,worst:rs.length?Math.min(...rs):null,tgt:avg(l.filter(x=>has(x.rr)).map(x=>x.rr)),
    plan:pl.length?pl.filter(x=>x.plan==='yes').length/pl.length*100:null,hasR:rs.length,
    pnl:pn.length?sum(pn.map(x=>x.pnl)):null,pnlN:pn.length,days:dv.length,dayWin:dv.length?dv.filter(v=>v>0).length/dv.length*100:null,
    rating:rated.length?avg(rated.map(x=>x.rating)):null};
}
const pfTxt=s=>s.pf===null?'—':s.pf===Infinity?'∞':s.pf.toFixed(2);
function groupBy(l,keyFn){
  const m={};l.forEach(x=>[].concat(keyFn(x)).filter(k=>k!==''&&k!=null).forEach(k=>(m[k]=m[k]||[]).push(x)));
  return Object.entries(m).map(([k,v])=>({k,l:v,s:stats(v)}));
}

/* ---- score (0-100), inspired by composite journal scores ---- */
function score(l){
  const s=stats(l);if(s.n<5)return null;
  const c=[
    ['sc_wr',clamp((s.wr||0)/60*100)],
    ['sc_pf',s.pf===null?0:s.pf===Infinity?100:clamp((s.pf-.8)/(2.5-.8)*100)],
    ['sc_rr',s.real===null?(s.al===null&&s.aw!==null?100:0):clamp(s.real/2.5*100)],
    ['sc_dd',s.tot<=0?0:s.dd===0?100:clamp((s.tot/s.dd)/3*100)],
    ['sc_cons',s.dayWin===null?0:clamp((s.dayWin-30)/40*100)]];
  if(s.plan!==null)c.push(['sc_disc',clamp((s.plan-50)/50*100)]);
  return{total:Math.round(avg(c.map(x=>x[1]))),parts:c.map(([k,v])=>[k,Math.round(v)])};
}

/* ---- insights (rule based) ---- */
function insights(l){
  const out=[],s=stats(l);if(s.n<5)return out;
  const ok=g=>g.s.n>=3&&g.s.hasR;
  const pbs=groupBy(l,x=>x.setup).filter(ok).sort((a,b)=>b.s.tot-a.s.tot);
  if(pbs.length&&pbs[0].s.tot>0)out.push(['good',t('in_best_setup',{k:pbs[0].k,n:pbs[0].s.n,r:fr(pbs[0].s.tot),w:pc(pbs[0].s.wr)})]);
  if(pbs.length>1&&pbs[pbs.length-1].s.tot<0){const g=pbs[pbs.length-1];out.push(['bad',t('in_worst_setup',{k:g.k,n:g.s.n,r:fr(g.s.tot)})])}
  const mt=l.filter(x=>x.mistakes.length&&has(x.rrActual));
  if(mt.length>=2){const ms=groupBy(mt,x=>x.mistakes).sort((a,b)=>a.s.tot-b.s.tot);const tot=sum(mt.map(x=>x.rrActual));
    if(tot<0)out.push(['bad',t('in_mistakes',{n:mt.length,r:fr(tot),k:misL(ms[0].k),r2:fr(ms[0].s.tot)})])}
  const py=l.filter(x=>x.plan==='yes'),pn=l.filter(x=>x.plan==='no');
  if(py.length>=3&&pn.length>=3){const a=stats(py).exp,b=stats(pn).exp;if(a!==null&&b!==null&&a>b)out.push(['info',t('in_plan',{a:fr(a),b:fr(b)})])}
  const ch=chrono(l).filter(x=>has(x.rrActual));const after=[];
  for(let i=2;i<ch.length;i++)if(ch[i-1].outcome==='Loss'&&ch[i-2].outcome==='Loss')after.push(ch[i].rrActual);
  if(after.length>=3&&s.exp!==null&&avg(after)<s.exp-.2)out.push(['bad',t('in_tilt',{a:fr(avg(after)),b:fr(s.exp)})]);
  const wd=groupBy(l,x=>wdi(x.date)).filter(ok).sort((a,b)=>b.s.exp-a.s.exp);
  if(wd.length>=3&&wd[0].s.exp>0&&wd[wd.length-1].s.exp<0)out.push(['info',t('in_weekday',{a:wdName(+wd[0].k),ra:fr(wd[0].s.exp),b:wdName(+wd[wd.length-1].k),rb:fr(wd[wd.length-1].s.exp)})]);
  const ss=groupBy(l,x=>x.kz).filter(ok).sort((a,b)=>b.s.exp-a.s.exp);
  if(ss.length>=2&&ss[0].s.exp>0)out.push(['good',t('in_session',{k:ss[0].k,r:fr(ss[0].s.exp)})]);
  const em=groupBy(l,x=>x.emotions).filter(ok).sort((a,b)=>a.s.exp-b.s.exp);
  if(em.length&&em[0].s.exp<0)out.push(['bad',t('in_emotion',{k:emoL(em[0].k),r:fr(em[0].s.exp),n:em[0].s.n})]);
  const byDay={};chrono(l).forEach(x=>(byDay[x.date]=byDay[x.date]||[]).push(x));
  const late=[];Object.values(byDay).forEach(d=>d.slice(3).forEach(x=>{if(has(x.rrActual))late.push(x.rrActual)}));
  if(late.length>=3&&s.exp!==null&&avg(late)<s.exp)out.push(['bad',t('in_overtrade',{a:fr(avg(late)),n:late.length})]);
  const mf=l.filter(x=>x.outcome==='Win'&&x.mfe>0&&has(x.rrActual));
  if(mf.length>=3){const cap=avg(mf.map(x=>clamp(x.rrActual/x.mfe*100,0,100)));out.push([cap<60?'bad':'info',t('in_mfe',{p:Math.round(cap),r:fr(sum(mf.map(x=>Math.max(0,x.mfe-x.rrActual))))})])}
  return out.slice(0,7);
}

/* ---- weekly summary (rule based, runs on the device; Pro's AI coach will build on it) ---- */
const wkOf=d=>{const x=new Date(d+'T12:00:00');x.setDate(x.getDate()-wdi(d));return iso(x)};
const wkAdd=(m,n)=>{const x=new Date(m+'T12:00:00');x.setDate(x.getDate()+n);return iso(x)};
const wkEnd=m=>wkAdd(m,6);
const wkTrades=(m,l=byAcc(trades))=>{const e=wkEnd(m);return l.filter(x=>x.date>=m&&x.date<=e)};
/* the current week if it has trades, otherwise the latest week that has */
function wkLast(){const l=byAcc(trades),c=wkOf(day());if(wkTrades(c,l).length)return c;const p=l.find(x=>x.date<=day());return p?wkOf(p.date):c}
const wkNoteK=m=>'w'+m;
function wkFocus(l,m){
  const bad=[],good=[],info=[],s=stats(l);if(!s.n)return [];
  const rl=l.filter(x=>has(x.rrActual));
  const mt=rl.filter(x=>x.mistakes.length);
  if(mt.length){const g=groupBy(mt,x=>x.mistakes).sort((a,b)=>a.s.tot-b.s.tot)[0];if(g.s.tot<=-.5)bad.push(['bad',t('wf_mis',{k:misL(g.k),n:g.s.n,r:fr(g.s.tot)})])}
  const off=rl.filter(x=>x.plan==='no'),offR=sum(off.map(x=>x.rrActual));
  if(off.length&&offR<=-.5)bad.push(['bad',t('wf_off',{n:off.length,r:fr(offR)})]);
  const em=groupBy(rl,x=>x.emotions).filter(g=>g.s.n>=2&&g.s.tot<=-.5).sort((a,b)=>a.s.tot-b.s.tot)[0];
  if(em)bad.push(['bad',t('wf_emo',{k:emoL(em.k),n:em.s.n,r:fr(em.s.tot)})]);
  const byD={},cnt={};l.forEach(x=>{cnt[x.date]=(cnt[x.date]||0)+1;if(has(x.rrActual))byD[x.date]=(byD[x.date]||0)+x.rrActual});
  if(S.day>0){const n=Object.values(byD).filter(v=>v<=-S.day).length;if(n)bad.push(['bad',t('wf_dll',{n,l:S.day})])}
  if(S.maxT>0){const n=Object.values(cnt).filter(v=>v>S.maxT).length;if(n)bad.push(['bad',t('wf_maxt',{n,l:S.maxT})])}
  const su=groupBy(rl,x=>x.setup).sort((a,b)=>a.s.tot-b.s.tot);
  if(su.length>1&&su[0].s.tot<0&&su[0].s.n>=2)bad.push(['bad',t('wf_setup_bad',{k:su[0].k,n:su[0].s.n,r:fr(su[0].s.tot)})]);
  const best=su[su.length-1];
  if(best&&best.s.n>=2&&best.s.tot>=.5)good.push(['good',t('wf_setup_good',{k:best.k,n:best.s.n,r:fr(best.s.tot)})]);
  if(!bad.length&&s.plan===100)good.push(['good',t('wf_clean')]);
  const e=wkEnd(m);if(!Object.keys(JR).some(k=>/^\d{4}-/.test(k)&&k>=m&&k<=e)&&!JR[wkNoteK(m)])info.push(['info',t('wf_jr')]);
  return [...bad.slice(0,2),...good.slice(0,1),...info,...bad.slice(2)].slice(0,3);
}
function wkData(m){
  const l=wkTrades(m),pl=wkTrades(wkAdd(m,-7)),s=stats(l),p=stats(pl),rl=l.filter(x=>has(x.rrActual));
  const days=[0,1,2,3,4,5,6].map(i=>{const d=wkAdd(m,i),dl=l.filter(x=>x.date===d);return{d,n:dl.length,r:sum(dl.filter(x=>has(x.rrActual)).map(x=>x.rrActual))}});
  const act=days.filter(x=>x.n),srt=[...rl].sort((a,b)=>b.rrActual-a.rrActual);
  const su=groupBy(rl,x=>x.setup).filter(g=>g.s.tot>0).sort((a,b)=>b.s.tot-a.s.tot)[0];
  const mt=rl.filter(x=>x.mistakes.length);
  const e=wkEnd(m),jd=Object.keys(JR).filter(k=>/^\d{4}-/.test(k)&&k>=m&&k<=e).length;
  return{m,e,l,s,p,days,act,green:act.filter(x=>x.r>0).length,bestT:srt[0]||null,worstT:srt.length>1?srt[srt.length-1]:null,
    bestD:act.length>1?[...act].sort((a,b)=>b.r-a.r)[0]:null,worstD:act.length>1?[...act].sort((a,b)=>a.r-b.r)[0]:null,
    setup:su||null,mis:mt.length?sum(mt.map(x=>x.rrActual)):null,jd,focus:wkFocus(l,m)};
}

/* ---- discipline (today) ---- */
function discipline(){
  const l=byAcc(trades),td=day(),today=l.filter(x=>x.date===td);
  const tr=sum(today.filter(x=>has(x.rrActual)).map(x=>x.rrActual));
  let cs=0;const ch=chrono(l);for(let i=ch.length-1;i>=0&&ch[i].outcome==='Loss';i--)cs++;
  const byD={},cnt={};l.forEach(x=>{cnt[x.date]=(cnt[x.date]||0)+1;if(has(x.rrActual))byD[x.date]=(byD[x.date]||0)+x.rrActual});
  return{todayR:tr,todayN:today.length,streak:cs,
    overDays:S.day>0?Object.values(byD).filter(v=>v<=-S.day).length:null,
    overTDays:S.maxT>0?Object.values(cnt).filter(v=>v>S.maxT).length:null};
}

/* ---- accounts / balance ---- */
function accBal(a){
  const oneR=a.bal*a.risk/100;let pnl=0,est=false;
  trades.forEach(x=>{if(x.account!==a.id)return;if(has(x.pnl))pnl+=x.pnl;else if(has(x.rrActual)){pnl+=x.rrActual*oneR;est=true}});
  const tx=S.tx.filter(z=>z.acc===a.id),dep=sum(tx.filter(z=>z.kind==='dep').map(z=>z.amt)),wd=sum(tx.filter(z=>z.kind==='wd').map(z=>z.amt));
  return{start:a.bal,dep,wd,pnl:r2(pnl),est,cur:r2(a.bal+dep-wd+pnl)};
}
function balanceInfo(){
  const accs=scopeAccs();if(!accs.length)return null;
  if(accs.length>1&&new Set(accs.map(a=>a.cur)).size>1)return null;
  const b=accs.map(accBal),cap=sum(b.map(x=>x.start+x.dep));
  return{cur:sum(b.map(x=>x.cur)),pnl:sum(b.map(x=>x.pnl)),ret:cap?sum(b.map(x=>x.pnl))/cap*100:null,est:b.some(x=>x.est)};
}

/* ---- prop firm rules per account (% of starting balance, closed trades) ---- */
function propState(a){
  const r=a.rules||{};if(!(r.dll||r.mll||r.tgt))return null;
  const b=accBal(a),start=a.bal,oneR=start*a.risk/100,td=day();
  const today=r2(sum(trades.filter(x=>x.account===a.id&&x.date===td).map(x=>has(x.pnl)?x.pnl:has(x.rrActual)?x.rrActual*oneR:0)));
  const o={a,b,today};
  if(r.dll){const lim=start*r.dll/100;o.dl={lim,used:Math.max(0,-today),left:r2(lim+Math.min(0,today))}}
  if(r.mll){const lim=start*r.mll/100;o.ml={lim,used:Math.max(0,-b.pnl),left:r2(lim+Math.min(0,b.pnl))}}
  if(r.tgt){const goal=start*r.tgt/100;o.tg={goal,prog:b.pnl,pct:clamp(b.pnl/goal*100,0,100),left:r2(goal-b.pnl)}}
  return o;
}

/* ---- cloud sync (Telegram CloudStorage) ---- */
const CS=tgv('6.9')?TG.CloudStorage:null;
const csGet=keys=>new Promise((ok,no)=>CS.getItems(keys,(e,v)=>e?no(e):ok(v||{})));
const csSet=(k,v)=>new Promise((ok,no)=>CS.setItem(k,v,e=>e?no(e):ok()));
const csDel=keys=>new Promise(ok=>keys.length?CS.removeItems(keys,()=>ok()):ok());
const CH=4000,rng=(a,b)=>Array.from({length:Math.max(0,b-a)},(_,i)=>a+i);
let syncSt='',pushT=null,pushing=false,pushAgain=false;
function setSync(s){if(s!==undefined)syncSt=s;if((s==='ok'||s==='err')&&typeof $==='function'&&$('view')&&$('view').querySelector('.skel'))setTimeout(()=>{if(typeof formOpen==='function'&&!formOpen()){render();if(trades.length)viewIn()}},0);const on=typeof sbOn==='function'&&sbOn(),k=(on?'sbs_':'sync_')+syncSt;['syncSt','syncSt2','syncSt3'].forEach(i=>{const el=$(i);if(el)el.textContent=(CS||on)&&syncSt?t(k):''})}
async function csMeta(){const r=await csGet(['tl_meta']);try{return JSON.parse(r.tl_meta||'null')}catch(e){return null}}
/* chunks are diffed against the last state this device synced, so a save only rewrites the chunks that changed */
const hsh=s=>{let h=5381;for(let i=0;i<s.length;i++)h=(h*33+s.charCodeAt(i))|0;return (h>>>0).toString(36)+'.'+s.length.toString(36)};
const CK='tradelog_csc',CP='tlc_',CMAX=1000;
const ckGet=()=>{try{return JSON.parse(localStorage.getItem(CK)||'null')}catch(e){return null}};
const ckSet=v=>{try{localStorage.setItem(CK,JSON.stringify(v))}catch(e){}};
async function cloudPull(){
  const m=await csMeta();if(!m||!m.n)return null;
  const keys=rng(0,m.n).map(i=>m.p+i),parts=[];
  for(let i=0;i<keys.length;i+=20){const b=keys.slice(i,i+20),r=await csGet(b);b.forEach(k=>parts.push(r[k]||''))}
  const s=parts.join('');
  if(m.h&&hsh(s)!==m.h)throw new Error('integrity');
  const d=JSON.parse(s);d.u=m.u;
  if(m.p===CP)ckSet({u:m.u,h:parts.map(hsh)});
  return d;
}
const snapshot=()=>({app:'tradelog',version:4,trades,journal:JR,settings:S,playbooks:PB});
/* oldest trades first so that new trades only change the last chunks */
const cloudBlob=()=>JSON.stringify({trades:[...trades].reverse(),journal:JR,settings:S,playbooks:PB,app:'tradelog',version:5});
async function cloudPush(){
  if(!CS)return;if(pushing){pushAgain=true;return}
  pushing=true;setSync('ing');
  try{
    const u=lupd(),blob=cloudBlob();
    const parts=[];for(let i=0;i<blob.length;){let e=Math.min(i+CH,blob.length);const c=blob.charCodeAt(e-1);if(e<blob.length&&c>=0xD800&&c<=0xDBFF)e--;parts.push(blob.slice(i,e));i=e}
    if(parts.length>CMAX){toast(t('cloud_full'));setSync('err');pushing=false;return}
    const old=await csMeta(),cache=ckGet(),hs=parts.map(hsh);
    const prev=old&&old.p===CP&&cache&&cache.u===old.u?cache.h:[];
    ckSet(null);                                   // invalid until this push completes
    const todo=hs.map((h,i)=>i).filter(i=>prev[i]!==hs[i]);
    for(let i=0;i<todo.length;i+=10)await Promise.all(todo.slice(i,i+10).map(j=>csSet(CP+j,parts[j])));
    await csSet('tl_meta',JSON.stringify({p:CP,n:parts.length,u,h:hsh(blob)}));
    ckSet({u,h:hs});
    if(old&&old.p===CP&&old.n>parts.length)await csDel(rng(parts.length,old.n).map(i=>CP+i));
    if(old&&old.p&&old.p!==CP&&old.n)await csDel(rng(0,old.n).map(i=>old.p+i));
    setSync('ok');
  }catch(e){setSync('err');clearTimeout(pushT);pushT=setTimeout(cloudPush,15000)}
  pushing=false;if(pushAgain){pushAgain=false;cloudPush()}
}
function cloudQ(){if(typeof sbQ==='function'&&sbQ())return;if(!CS)return;setSync('ing');clearTimeout(pushT);pushT=setTimeout(cloudPush,800)}
function applyData(d){
  trades=(Array.isArray(d.trades)?d.trades:[]).map(norm).filter(Boolean);
  JR=d.journal&&typeof d.journal==='object'&&!Array.isArray(d.journal)?d.journal:{};
  S=normS(d.settings);PB=normPB(d.playbooks);fixAcc();sortT();
}
async function cloudInit(){
  if(!CS)return;setSync('ing');
  try{
    const d=await cloudPull(),lu=lupd();
    if(d&&d.u>lu){
      applyData(d);
      put(K.trades,trades,false);put(K.jr,JR,false);put(K.set,S,false);put(K.pb,PB,false);
      try{localStorage.setItem(UPD,String(d.u))}catch(e){}
      render();setSync('ok');
    }else if(lu&&(!d||d.u<lu))await cloudPush();
    else setSync('ok');
  }catch(e){setSync('err')}
}

/* ================= broker report import (MT4 / MT5) ================= */
const DTRE=/^(\d{4})[.\-/](\d{2})[.\-/](\d{2})[ T](\d{1,2}):(\d{2})(?::(\d{2}))?/;
function dtParse(v){
  if(v instanceof Date&&!isNaN(v))return[v.getFullYear(),v.getMonth()+1,v.getDate(),v.getHours(),v.getMinutes()];
  const m=DTRE.exec(String(v==null?'':v).trim());return m?[+m[1],+m[2],+m[3],+m[4],+m[5]]:null;
}
const isDT=v=>!!dtParse(v);
function bnum(v){
  if(v==null||v==='')return null;if(typeof v==='number')return isFinite(v)?v:null;
  let s=String(v).replace(/[\s   ]/g,'');
  if(/^[-+]?\d{1,3}(\.\d{3})+,\d+$/.test(s))s=s.replace(/\./g,'').replace(',','.');
  else if(/^[-+]?\d+,\d+$/.test(s))s=s.replace(',','.');
  else s=s.replace(/,(?=\d{3}(\D|$))/g,'');
  return /^[-+]?\d*\.?\d+(e[-+]?\d+)?$/i.test(s)?parseFloat(s):null;
}
const bside=v=>{const s=String(v==null?'':v).trim().toLowerCase();return /^(buy|alış|alis|al)$/.test(s)?'Long':/^(sell|satış|satis|sat)$/.test(s)?'Short':null};
const cellS=v=>String(v==null?'':v).trim();
const LAY={
  mt5p:['t1','id','sym','type','vol','entry','sl','tp','t2','exit','comm','swap','profit'],
  mt5o:['t1','id','sym','type','vol','entry','sl','tp','t2','state','comment'],
  mt4:['id','t1','type','vol','sym','entry','sl','tp','t2','exit','comm','tax','swap','profit']};

function decodeBuf(buf){
  const b=new Uint8Array(buf);
  if(b[0]===0xFF&&b[1]===0xFE)return new TextDecoder('utf-16le').decode(buf);
  if(b[0]===0xFE&&b[1]===0xFF)return new TextDecoder('utf-16be').decode(buf);
  let z=0;for(let i=1;i<Math.min(b.length,600);i+=2)if(b[i]===0)z++;
  if(z>120)return new TextDecoder('utf-16le').decode(buf);
  let s=new TextDecoder('utf-8').decode(buf);
  const m=s.slice(0,3000).match(/charset=["']?([\w-]+)/i);
  if(m&&!/utf-?8/i.test(m[1])&&!/utf-?16/i.test(m[1])){try{s=new TextDecoder(m[1]).decode(buf)}catch(e){}}
  return s;
}
function htmlRows(txt){
  const doc=new DOMParser().parseFromString(txt,'text/html'),out=[];
  doc.querySelectorAll('tr').forEach(tr=>{const r=[];tr.querySelectorAll('td,th').forEach(td=>{r.push(td.textContent.replace(/\s+/g,' ').trim());const cs=+td.getAttribute('colspan')||1;for(let i=1;i<Math.min(cs,30);i++)r.push('')});out.push(r)});
  return out;
}
function loadXLSX(){
  if(window.XLSX)return Promise.resolve();
  return new Promise((ok,no)=>{const s=document.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js';s.onload=()=>ok();s.onerror=()=>no(new Error('xlsx'));document.head.appendChild(s)});
}
async function readAny(file){
  const name=(file.name||'').toLowerCase(),buf=await file.arrayBuffer();
  if(/\.xlsx?$/.test(name)){
    await loadXLSX();const wb=XLSX.read(buf,{type:'array',cellDates:true}),rows=[];
    wb.SheetNames.forEach(n=>rows.push(...XLSX.utils.sheet_to_json(wb.Sheets[n],{header:1,raw:true,defval:null})));
    return{kind:'rows',rows};
  }
  const txt=decodeBuf(buf);
  if(/\.json$/.test(name)||/^\s*[\[{]/.test(txt))return{kind:'json',txt};
  if(/<t[dr][\s>]/i.test(txt))return{kind:'rows',rows:htmlRows(txt)};
  return{kind:'csv',txt};
}

/* parse rows (from HTML, XLSX or CSV) into positions */
function parseBroker(rows){
  const meta={},pos=[],ord={},ops=[];let lay=null,idx=null,plat='';
  const flat=rows.slice(0,40).map(r=>(r||[]).map(cellS).join(' ')).join('\n');
  let m=flat.match(/(?:account|hesap|счёт|cuenta|konto)\s*:?\s*(\d{3,})\s*(?:\(([^)]*)\))?/i);
  if(m){meta.no=m[1];if(m[2]){const p=m[2].split(',').map(s=>s.trim());if(/^[A-Z]{3}$/.test(p[0]))meta.cur=p[0];meta.server=p[1]||''}}
  m=flat.match(/(?:currency|para birimi)\s*:?\s*([A-Z]{3})\b/i);if(m&&!meta.cur)meta.cur=m[1].toUpperCase();
  m=flat.match(/(?:company|şirket|firma)\s*:?\s*([^\n]+?)(?:\s{2,}|\n|$)/i);if(m)meta.company=m[1].trim().slice(0,60);
  const balAfter=(r,i)=>{const n=r.slice(i+1).map(bnum).filter(v=>v!==null);return n};
  rows.forEach(raw=>{
    const r=(raw||[]).map(c=>c==null?'':c),s=r.map(cellS);
    const ne=[];s.forEach((c,i)=>{if(c!=='')ne.push(i)});
    // reported final balance (MT5 Results / MT4 summary)
    const bl=s.findIndex(c=>/^(balance|bakiye)\s*:$/i.test(c));
    if(bl>=0&&!s.some(isDT)){const v=r.slice(bl+1).map(bnum).find(v=>v!==null);if(v!==undefined)meta.rbal=v;return}
    // header rows
    if(s.some(c=>/^s\s*\/\s*l$/i.test(c))&&s.some(c=>/^t\s*\/\s*p$/i.test(c))&&!s.some(isDT)){
      const first=s[ne[0]].toLowerCase();
      if(/ticket|bilet|tiket|#/.test(first)&&ne.length>=13){lay='mt4';plat='MT4'}
      else if(ne.length>=13){lay='mt5p';plat='MT5'}
      else if(ne.length>=10){lay='mt5o';plat=plat||'MT5'}
      else lay=null;
      idx=lay?Object.fromEntries(LAY[lay].map((k,i)=>[k,ne[i]])):null;return;
    }
    // unknown table header (e.g. Deals): stop reading the previous layout
    if(ne.length>=6&&!s.some(isDT)&&ne.every(i=>bnum(s[i])===null)){lay=null;idx=null;return}
    // deposits
    const bi=s.findIndex(c=>/^(balance|bakiye)$/i.test(c));
    if(bi>=0&&s.filter(isDT).length===1){const n=balAfter(r,bi),tt=dtParse(r[s.findIndex(isDT)]);
      if(n.length&&tt){const a=n.length>=2&&plat!=='MT4'?n[n.length-2]:n[n.length-1];if(a)ops.push({t:tt,a,id:s.find(c=>/^\d+$/.test(c))||tt.join('')})}return}
    if(lay&&idx){
      if(lay==='mt5o'){const id=bnum(r[idx.id]);if(id!=null&&isDT(r[idx.t1]))ord[id]={sl:bnum(r[idx.sl]),tp:bnum(r[idx.tp])};return}
      const t1=dtParse(r[idx.t1]),t2=dtParse(r[idx.t2]),dir=bside(r[idx.type]);
      if(!t1||!t2||!dir){if(isDT(r[idx.t1])&&lay==='mt5p'&&bnum(r[idx.exit])===null){/* orders table after positions without header match */}return}
      const ex=bnum(r[idx.exit]);if(ex===null)return;
      pos.push({id:cellS(r[idx.id]),sym:cellS(r[idx.sym]),dir,vol:bnum(r[idx.vol]),entry:bnum(r[idx.entry]),sl:bnum(r[idx.sl]),tp:bnum(r[idx.tp]),t1,t2,exit:ex,
        comm:bnum(r[idx.comm])||0,swap:bnum(r[idx.swap])||0,tax:lay==='mt4'?bnum(r[idx.tax])||0:0,profit:bnum(r[idx.profit])||0});
      return;
    }
    // fallback: structural detection when no header row was recognised
    const ti=[];s.forEach((c,i)=>{if(isDT(r[i]))ti.push(i)});
    const tyi=s.findIndex(c=>bside(c));
    if(ti.length===2&&tyi>ti[0]&&tyi<ti[1]&&bnum(r[ti[1]+1])!==null){
      const a=ti[0],b=ti[1],mt4=tyi===a+1;if(!mt4&&tyi!==a+3)return;
      const tail=r.slice(b+2).map(bnum).filter(v=>v!==null);
      pos.push({id:cellS(mt4?r[a-1]:r[a+1]),sym:cellS(mt4?r[tyi+2]:r[tyi-1]),dir:bside(r[tyi]),vol:bnum(r[tyi+1]),entry:bnum(r[mt4?tyi+3:tyi+2]),sl:bnum(r[mt4?tyi+4:tyi+3]),tp:bnum(r[mt4?tyi+5:tyi+4]),
        t1:dtParse(r[a]),t2:dtParse(r[b]),exit:bnum(r[b+1]),comm:tail[0]||0,swap:tail.length>=3?tail[tail.length-2]:0,tax:mt4&&tail.length>=4?tail[1]:0,profit:tail.length?tail[tail.length-1]:0});
      plat=plat||(mt4?'MT4':'MT5');
    }
  });
  const seen=new Set(),out=[];
  pos.forEach(p=>{const k=p.id||(p.t1.join('-')+p.sym);if(seen.has(k))return;seen.add(k);const o=ord[bnum(p.id)];if(o){p.osl=o.sl;p.otp=o.tp}if(p.sym&&p.entry!=null)out.push(p)});
  const tk=t=>t.map(pad).join('');ops.sort((a,b)=>tk(a.t).localeCompare(tk(b.t)));
  const first=out.map(p=>tk(p.t1)).sort()[0]||'';
  meta.ops=ops;meta.open=ops.length&&ops[0].a>0&&tk(ops[0].t)<=first?ops[0].id:null;meta.dep=meta.open?ops[0].a:null;meta.plat=plat||'MT5';
  return{meta,pos:out};
}
function cleanSym(s){s=String(s).trim();s=s.replace(/^([A-Z0-9]{6})[a-z]{1,3}$/,'$1').replace(/[._][A-Za-z0-9]{1,6}$/,'').replace(/[+!#]$/,'');return s.toUpperCase()}
function shiftDT(t,h){const d=new Date(Date.UTC(t[0],t[1]-1,t[2],t[3],t[4])+h*3600e3);return[`${d.getUTCFullYear()}-${pad(d.getUTCMonth()+1)}-${pad(d.getUTCDate())}`,`${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}`]}
function buildTrades(res,o){
  const a=o.accObj,riskM=a.bal*a.risk/100,src=(res.meta.plat||'MT').toLowerCase();
  return res.pos.map(p=>{
    const net=r2(p.profit+p.comm+p.swap+p.tax),sg=p.dir==='Long'?1:-1;
    const okSL=v=>v>0&&(p.entry-v)*sg>0,okTP=v=>v>0&&(v-p.entry)*sg>0;
    const sl=okSL(p.osl)?p.osl:okSL(p.sl)?p.sl:null,tp=okTP(p.otp)?p.otp:okTP(p.tp)?p.tp:null;
    const vpu=p.exit!==p.entry&&p.profit?Math.abs(p.profit/(p.exit-p.entry)):null;
    let R=null,est=false;
    if(sl!==null&&vpu)R=net/(Math.abs(p.entry-sl)*vpu);else if(riskM>0){R=net/riskM;est=true}
    if(R!==null)R=r2(R);
    const rr=sl!==null&&tp!==null?r2(Math.abs(tp-p.entry)/Math.abs(p.entry-sl)):null;
    const[d1,h1]=shiftDT(p.t1,o.tz),[d2,h2]=shiftDT(p.t2,o.tz);
    const outcome=R!==null?(Math.abs(R)<0.05?'BE':R>0?'Win':'Loss'):(net>0?'Win':net<0?'Loss':'BE');
    return{id:uid(),ext:`${src}:${res.meta.no||'x'}:${p.id}`,date:d1,time:h1,symbol:cleanSym(p.sym),dir:p.dir,account:o.acc,rr,rrActual:R,pnl:net,outcome,
      lots:p.vol,entry:p.entry,exit:p.exit,sl:p.osl>0?p.osl:p.sl>0?p.sl:null,tp:p.otp>0?p.otp:p.tp>0?p.tp:null,ct:`${d2} ${h2}`,rEst:est,rev:o.queue?false:undefined};
  });
}

/* ---- import UI ---- */
let IMP=null;
var IMT='mt5';
/* a report dropped anywhere on the app opens the import (not over the trade form, which takes screenshots) */
const impCan=()=>!formOpen()&&!document.querySelector('#authV:not([hidden])')&&!document.querySelector('#site:not([hidden])')&&!window.RO;
document.addEventListener('dragover',e=>{if(e.dataTransfer&&[...e.dataTransfer.types].includes('Files')&&impCan())e.preventDefault()});
document.addEventListener('drop',e=>{const f=e.dataTransfer&&e.dataTransfer.files&&e.dataTransfer.files[0];if(!f||!impCan()||e.defaultPrevented&&e.target.closest&&e.target.closest('#imDrop'))return;
  if(/\.(html?|xlsx?|csv|json)$/i.test(f.name)){e.preventDefault();impFile(f)}});
function openImport(){
  IMP=null;
  const st=k=>`<ol class="steps imsteps" id="imSteps">${t('im_'+k+'_s').split('|').map(x=>`<li>${esc(x)}</li>`).join('')}</ol>`;
  openDlg(t('im_title'),`<div style="padding-top:14px">
    <button type="button" class="imdrop" id="imDrop" onclick="$('fileAny').click()" ondragover="event.preventDefault();this.classList.add('over')" ondragleave="this.classList.remove('over')" ondrop="impDrop(event)">
      <span class="imdi">${ic('up')}</span><b>${t('im_drop')}</b><span>${t('im_drop_s')}</span></button>
    <div class="imhow"><div class="imhh"><h4>${t('im_how')}</h4><div class="seg imseg" id="imSeg">${['mt5','mt4'].map(k=>`<button type="button" class="${IMT===k?'on':''}" onclick="IMT='${k}';$('imSeg').querySelectorAll('button').forEach(b=>b.classList.toggle('on',b===this));impSteps()">MetaTrader ${k.slice(2)}</button>`).join('')}</div></div>
      ${st(IMT)}</div>
    ${typeof sbOn==='function'&&sbOn()&&sbUser&&!RO?`<div class="dsec syimp"><div><b>${t('sy_imp')}</b><p class="hint">${t('sy_manage_d')}</p></div><button class="btn sm" onclick="closeDlg(true);syStart()">${ic('link')}${t('sy_open')}</button></div>`:''}
    <details class="imfaq"><summary>${t('im_flow_h')}</summary><p>${t('im_flow')}</p></details>
    <details class="imfaq"><summary>${t('im_phone_h')}</summary><p>${t('im_phone')}</p><p style="margin-top:6px">${t('im_formats')}</p></details>
  </div>`,`<button class="btn" onclick="closeDlg()">${t('close')}</button><button class="btn pri" onclick="$('fileAny').click()">${t('im_pick')}</button>`);
}
function impSteps(){const el=document.querySelector('#imSteps,.imhow ol');if(!el)return;el.outerHTML=`<ol class="steps imsteps" id="imSteps">${t('im_'+IMT+'_s').split('|').map(x=>`<li>${esc(x)}</li>`).join('')}</ol>`}
function impDrop(e){e.preventDefault();const d=$('imDrop');if(d)d.classList.remove('over');const f=e.dataTransfer&&e.dataTransfer.files&&e.dataTransfer.files[0];if(f)impFile(f)}
function onAnyFile(inp){const f=inp.files[0];inp.value='';if(f)impFile(f)}
async function impFile(f){
  try{
    const d=await readAny(f);
    if(d.kind==='json'){impJSONData(JSON.parse(d.txt));closeDlg();return}
    const rows=d.kind==='rows'?d.rows:parseCSV(d.txt);
    const hdr=(rows[0]||[]).map(x=>cellS(x).toLowerCase());
    if(hdr.includes('date')&&hdr.includes('symbol')){impCSVText(d.kind==='rows'?rows.map(r=>r.map(c=>`"${cellS(c).replace(/"/g,'""')}"`).join(',')).join('\n'):d.txt);closeDlg();return}
    const res=parseBroker(rows);
    if(!res.pos.length){say(t('im_none'));return}
    IMP=res;impPreview();
  }catch(e){say(t(String(e&&e.message)==='xlsx'?'im_xlsx_err':'im_err'))}
}
/* find the manually logged trade that is the same position as an imported one (same account, symbol, side, within 20 min) */
function findMatch(o,used){
  let best=null,bd=1e9;const t0=tMin(o.date,o.time),k=symKey(o.symbol);
  trades.forEach(x=>{
    if(used.has(x.id)||x.ext||x.account!==o.account||symKey(x.symbol)!==k)return;
    if(x.dir&&o.dir&&x.dir!==o.dir)return;
    const d=x.time?Math.abs(tMin(x.date,x.time)-t0):x.date===o.date?600:1e9;
    if(d<=20||(d===600&&!x.time)){if(d<bd){bd=d;best=x}}
  });
  return best;
}
function impCalc(){
  const sel=$('im_acc').value,tz=+$('im_tz').value||0,isNew=sel==='new';
  const nb=Math.max(0,num($('im_nb').value)||0);
  const accObj=isNew?{bal:nb||10000,risk:1,cur:IMP.meta.cur||'USD'}:accOf(sel);
  const list=buildTrades(IMP,{acc:sel,accObj,tz,queue:$('im_q').checked});
  const exts=new Set(trades.map(x=>x.ext).filter(Boolean));
  const fresh=list.filter(o=>!exts.has(o.ext)),used=new Set(),pairs=[],adds=[];
  fresh.forEach(o=>{const m=isNew?null:findMatch(o,used);if(m){used.add(m.id);pairs.push([m,o])}else adds.push(o)});
  const src=(IMP.meta.plat||'MT').toLowerCase(),no=IMP.meta.no||'x';
  const a=isNew?null:accOf(sel),txExt=new Set(S.tx.map(z=>z.ext).filter(Boolean));if(a&&a.initExt)txExt.add(a.initExt);
  let ops=(IMP.meta.ops||[]).map(o=>({...o,ext:`${src}:${no}:bal:${o.id}`})).filter(o=>!txExt.has(o.ext)),init=null;
  const startBal=isNew?nb:a.bal,accTx=isNew?[]:S.tx.filter(z=>z.acc===sel);
  let newBal=null;
  /* the report's opening deposit is the account's starting balance; it replaces a typed/default value when the account has no cash history yet */
  if(ops.length&&IMP.meta.open&&ops[0].id===IMP.meta.open&&!accTx.length&&!(a&&a.initExt)){
    init=ops[0].ext;if(!isNew&&Math.abs(ops[0].a-startBal)>0.005)newBal=ops[0].a;ops=ops.slice(1);
  }
  const sb=newBal!=null?newBal:startBal;
  let proj=null;
  if(IMP.meta.rbal!=null&&(isNew||(!trades.some(x=>x.account===sel)&&!accTx.length)))proj=r2(sb+sum(ops.map(o=>o.a))+sum(fresh.map(o=>o.pnl||0)));
  return{sel,tz,isNew,pairs,adds,dup:list.length-fresh.length,ops,init,newBal,oldBal:startBal,proj,cur:accObj.cur||IMP.meta.cur||'USD'};
}
function impPreview(){
  const m=IMP.meta,pos=IMP.pos;
  const blank=S.accounts.length===1&&!S.accounts[0].name&&!trades.length&&!S.tx.length;
  // 1) account already linked to this number  2) legacy: number in the name  3) the only unlinked account that has trades
  const linked=m.no?S.accounts.find(a=>a.no===m.no):null;
  const named=!linked&&m.no?S.accounts.find(a=>!a.no&&a.name.includes(m.no)):null;
  const free=actAccs().filter(a=>!a.no&&!(blank&&a===S.accounts[0]));
  const used=free.filter(a=>trades.some(x=>x.account===a.id&&!x.ext));
  const byExt=!linked&&m.no?actAccs().find(a=>!a.no&&trades.some(x=>x.account===a.id&&x.ext&&x.ext.split(':')[1]===m.no)):null;
  const match=linked||named||byExt||(used.length===1?used[0]:null);
  IMP.link=linked?'linked':match?'suggest':(free.length?'choose':'new');
  const net=sum(pos.map(p=>p.profit+p.comm+p.swap+p.tax));
  const ds=pos.map(p=>p.t1.slice(0,3).map(pad).join('-')).sort();
  const tzo=[];for(let h=-12;h<=14;h++)tzo.push(opt(h,h===0?t('im_tz0'):(h>0?'+':'')+h+' '+t('im_hours'),0));
  const newName=`${m.company?m.company.split(/\s+/)[0]+' ':''}${m.no||m.plat}`,cur=m.cur||'USD';
  const def=match?match.id:'new';
  openDlg(t('im_prev'),`<div class="calsum" style="padding:14px 0 4px"><span>${m.plat}${m.no?` #${esc(m.no)}`:''}</span>${m.server?`<span>${esc(m.server)}</span>`:''}</div>
   <div class="facts" style="margin:12px 0">
    <div>${t('h_trades')}<b>${pos.length}</b></div><div>${t('im_range')}<b>${esc(dFmt(ds[0]))} – ${esc(dFmt(ds[ds.length-1]))}</b></div><div>${t('im_net')}<b class="${cls(net)}">${money(r2(net),1,cur)}</b></div></div>
   <div class="dsec fgrid">
    <label class="fld full"><span>${t('im_acc')}</span><select class="in" id="im_acc" onchange="$('im_newf').style.display=this.value==='new'?'':'none';impTz();impSum()">${S.accounts.filter(a=>!(blank&&a===S.accounts[0])&&(!a.arch||a===linked)).map(a=>opt(a.id,accLabel(a)+(a.arch?' ('+t('archived')+')':''),def)).join('')}${opt('new',t('im_newacc',{n:newName}),def)}</select></label>
    <div id="im_newf" class="full fgrid" style="${def==='new'?'':'display:none'}"><label class="fld"><span>${t('acc_name')}</span><input class="in" id="im_nn" value="${esc(newName)}"></label>
     <label class="fld"><span>${t('acc_bal')} (${esc(cur)})</span><input class="in" id="im_nb" type="number" min="0" step="any" value="${m.dep||10000}" oninput="impSum()"></label></div>
    <label class="fld"><span>${t('im_tz')}</span><select class="in" id="im_tz" onchange="impSum()">${tzo.join('')}</select></label>
    <label class="check" style="align-self:end"><input type="checkbox" id="im_q" checked onchange="impSum()"><span>${t('im_queue')}</span></label>
    <p class="hint full">${t('im_tz_h')}</p></div>
   <div class="dsec" id="im_sum"></div>`,
   `<button class="btn" onclick="closeDlg()">${t('cancel')}</button><button class="btn pri" id="im_go" onclick="impCommit()">${t('im_go')}</button>`);
  impTz();impSum();
}
/* choose the time offset: the account's last used one, otherwise the one under which manual trades match best */
function impTz(){
  const sel=$('im_acc').value,a=sel==='new'?null:accOf(sel),el=$('im_tz');let best=0;
  if(a&&a.tz!=null)best=a.tz;
  else if(a&&trades.some(x=>x.account===a.id&&!x.ext)){
    let bc=-1;for(let h=-12;h<=14;h++){el.value=String(h);const n=impCalc().pairs.length;if(n>bc||(n===bc&&Math.abs(h)<Math.abs(best))){bc=n;best=h}}
    IMP.auto=bc>0?best:null;
  }
  el.value=String(best);
}
function impSum(){
  const c=impCalc(),pos=IMP.pos,L1=[];
  const withSL=c.adds.concat(c.pairs.map(p=>p[1])).filter(o=>!o.rEst).length,tot=c.adds.length+c.pairs.length;
  if(c.adds.length)L1.push(['good',t('im_add',{n:c.adds.length})]);
  if(c.pairs.length)L1.push(['good',t('im_match',{n:c.pairs.length})]);
  if(c.dup)L1.push(['',t('im_dup',{n:c.dup})]);
  if(tot)L1.push([withSL===tot?'good':'',t('im_r',{a:withSL,b:tot-withSL})]);
  const dep=c.ops.filter(o=>o.a>0),wd=c.ops.filter(o=>o.a<0);
  if(c.newBal!=null)L1.push(['',t('im_bal_set',{a:money(c.oldBal,0,c.cur),b:money(c.newBal,0,c.cur)})]);
  if(c.ops.length)L1.push(['',t('im_ops',{d:dep.length,da:money(sum(dep.map(o=>o.a)),0,c.cur),w:wd.length,wa:money(Math.abs(sum(wd.map(o=>o.a))),0,c.cur)})]);
  if(c.proj!=null)L1.push(Math.abs(c.proj-IMP.meta.rbal)<=1?['good',t('im_bal_ok',{b:money(IMP.meta.rbal,0,c.cur)})]:['bad',t('im_bal_diff',{b:money(IMP.meta.rbal,0,c.cur),c:money(c.proj,0,c.cur)})]);
  const sa=c.isNew?null:accOf(c.sel),no=IMP.meta.no;
  if(sa&&sa.no&&no&&sa.no!==no){$('im_sum').innerHTML=`<div class="ins bad"><i></i><div>${esc(t('im_wrongacc',{k:accName(sa),a:sa.no,b:no}))}</div></div>`;$('im_go').disabled=true;return}
  if(no){if(sa&&sa.no===no)L1.unshift(['good',t('im_linked',{k:accName(sa),n:no})]);
    else if(sa)L1.unshift(['',t('im_willlink',{k:accName(sa),n:no})]);
    if(IMP.link==='choose'&&(c.isNew||!sa.no))L1.unshift(['bad',t('im_choose')])}
  if(IMP.auto!=null&&c.tz===IMP.auto&&c.pairs.length)L1.push(['',t('im_tz_auto',{h:(c.tz>0?'+':'')+c.tz})]);
  if(!tot&&!c.ops.length)L1.push(['',t('im_nothing')]);
  $('im_sum').innerHTML=L1.map(([k,x])=>`<div class="ins ${k}"><i></i><div>${esc(x)}</div></div>`).join('');
  $('im_go').disabled=!tot&&!c.ops.length;
}
function impCommit(){
  if(!IMP)return;
  const c=impCalc();let acc=c.sel;
  /* first import of a new member: show the dashboard (and its short tour) first; the review card waits on the dashboard */
  const firstImp=!trades.length;
  if(c.isNew){
    const d={name:$('im_nn').value.trim()||IMP.meta.no||'MT',bal:Math.max(0,num($('im_nb').value)||0),cur:CUR.includes(IMP.meta.cur)?IMP.meta.cur:'USD',...(IMP.meta.no?{no:IMP.meta.no}:{}),...(IMP.meta.server?{srv:IMP.meta.server}:{})};
    const blank=S.accounts.length===1&&!S.accounts[0].name&&!trades.some(x=>x.account===S.accounts[0].id)&&!S.tx.length;
    if(blank)Object.assign(S.accounts[0],d);else S.accounts.push({id:sid(),risk:1,...d});
    acc=blank?S.accounts[0].id:S.accounts[S.accounts.length-1].id;
  }
  const a=accOf(acc);if(c.isNew&&typeof welApply==='function')welApply(a);if(c.init)a.initExt=c.init;if(c.newBal!=null)a.bal=c.newBal;a.tz=c.tz;
  if(IMP.meta.no&&!a.no){a.no=IMP.meta.no;if(IMP.meta.server)a.srv=IMP.meta.server}
  c.ops.forEach(o=>S.tx.push({id:sid(),acc,date:shiftDT(o.t,c.tz)[0],kind:o.a>0?'dep':'wd',amt:Math.abs(o.a),note:'',ext:o.ext}));
  saveS();
  c.pairs.forEach(([m,o])=>impPair(m,o));
  c.adds.forEach(o=>o.account=acc);
  const m=merge(c.adds);IMP=null;closeDlg(true);
  if(V.acc!=='all'&&V.acc!==acc){V.acc=acc;saveV()}
  render();hap('success');toast(t('im_done',{n:m.add,u:c.pairs.length}));
  if(typeof proNudgeImport==='function'&&!firstImp&&!(m.add&&pending().length))proNudgeImport();
  if(!firstImp&&m.add&&pending().length)setTimeout(()=>{if(!dlgOpen()&&!formOpen()){RVi=0;openReview()}},350);
}

/* a manually logged trade takes the broker's exact numbers; the trader's own R (when the broker R is only an estimate) and notes stay */
function impPair(m,o){
  const R=o.rEst&&has(m.rrActual)?m.rrActual:o.rrActual;
  const i=trades.indexOf(m);if(i<0)return;
  trades[i]=norm({...m,date:o.date,time:o.time,dir:o.dir||m.dir,pnl:o.pnl,rrActual:R,rEst:o.rEst&&!has(m.rrActual),rr:has(o.rr)?o.rr:m.rr,
    outcome:R!==null?(Math.abs(R)<0.05?'BE':R>0?'Win':'Loss'):o.outcome,lots:o.lots,entry:o.entry,exit:o.exit,sl:o.sl,tp:o.tp,ct:o.ct,ext:o.ext,rev:m.rev});
}

/* ---- review queue ---- */
const pending=()=>chrono(rawAcc(trades).filter(x=>x.rev===false));
let RVi=0,qPlan='',qRate=0,qEmo=[],qMis=[],qRules=[];
function openReview(){
  const l=pending();if(!l.length){closeDlg();render();toast(t('rv_done'));return}
  if(RVi>=l.length)RVi=0;
  const x=l[RVi];qPlan=x.plan;qRate=x.rating||0;qEmo=[...x.emotions];qMis=[...x.mistakes];qRules=[...x.rules];
  const setups=[...new Set([...PB.map(p=>p.name),...uniq('setup')])].slice(0,12);
  const a=accOf(x.account);
  openDlg(t('rv_title',{i:RVi+1,n:l.length}),`${RVi===0?`<p class="hint" style="padding-top:14px;margin:0">${t('rv_card_s')} ${t('rv_skip_h')}</p>`:''}<div style="padding-top:14px" class="dhead"><span class="sym" style="font-size:18px">${esc(x.symbol)}</span>${x.dir?`<span class="side-${x.dir[0].toLowerCase()}">${x.dir}</span>`:''}<span class="badge ${x.outcome.toLowerCase()}">${t('o_'+x.outcome)}</span><span class="rv ${cls(x.rrActual)}">${x.rEst?'≈':''}${fr(x.rrActual)}</span></div>
   <div class="calsum" style="padding:8px 0 0"><span>${esc(dFmt(x.date,{weekday:'short',day:'numeric',month:'short'}))} ${esc(x.time)}</span>${has(x.pnl)?`<span class="${cls(x.pnl)}">${money(x.pnl,1,a.cur)}</span>`:''}${has(x.lots)?`<span>${x.lots} ${t('d_lots').toLowerCase()}</span>`:''}${has(x.entry)?`<span>${x.entry} → ${x.exit}</span>`:''}</div>
   <div class="fsec"><label class="fld"><span>${t('h_setup')}</span><input class="in" id="q_setup" value="${esc(x.setup)}" list="dlQS" placeholder="${t('ph_setup')}" oninput="qRulesBox()"><datalist id="dlQS">${setups.map(s=>`<option value="${esc(s)}">`).join('')}</datalist></label>
    ${setups.length?`<div class="chips" style="margin-top:8px">${setups.map(s=>`<button type="button" class="chip" onclick="$('q_setup').value=this.textContent;qRulesBox()">${esc(s)}</button>`).join('')}</div>`:''}
    <div id="q_rules" style="margin-top:6px"></div></div>
   <div class="fsec" style="padding-top:8px"><div class="fgrid"><div class="fld"><span>${t('l_plan')}</span><div class="segf" id="q_plan"><button type="button" class="w${qPlan==='yes'?' on':''}" data-v="yes" onclick="qPlan=qPlan==='yes'?'':'yes';segOn('q_plan',qPlan)">${t('yes')}</button><button type="button" class="l${qPlan==='no'?' on':''}" data-v="no" onclick="qPlan=qPlan==='no'?'':'no';segOn('q_plan',qPlan)">${t('no')}</button></div></div>
    <div class="fld"><span>${t('l_rating')}</span><div class="stars" id="q_rate">${[1,2,3,4,5].map(i=>`<button type="button" class="${i<=qRate?'on':''}" onclick="qRate=qRate===${i}?0:${i};$('q_rate').querySelectorAll('button').forEach((b,j)=>b.classList.toggle('on',j<qRate))">★</button>`).join('')}</div></div></div>
    <div class="fld" style="margin-top:12px"><span>${t('l_mis')}</span><div class="chips">${[...new Set([...MIS,...qMis])].map(k=>`<button type="button" class="chip${qMis.includes(k)?' on':''}" data-k="${esc(k)}" onclick="tgl(qMis,this)">${esc(misL(k))}</button>`).join('')}</div></div>
    <label class="fld" style="margin-top:12px"><span>${t('l_notes')}</span><textarea class="in" id="q_notes" style="min-height:64px" placeholder="${t('ph_notes')}">${esc(x.notes)}</textarea></label></div>`,
   `<button class="btn" onclick="RVi++;openReview()">${t('rv_skip')}</button><button class="btn pri" onclick="qSave(${x.id})">${t('rv_save')}</button>`);
  qRulesBox();
}
function qRulesBox(){
  const p=pbOf($('q_setup').value.trim()),el=$('q_rules');if(!el)return;
  el.innerHTML=p&&p.rules.length?p.rules.map((r,i)=>`<label class="check"><input type="checkbox" ${qRules.includes(r)?'checked':''} onchange="const r=pbOf($('q_setup').value.trim()).rules[${i}];qRules=qRules.filter(z=>z!==r);if(this.checked)qRules.push(r)"><span>${esc(r)}</span></label>`).join(''):'';
}
function qSave(id){
  const i=trades.findIndex(z=>z.id===id);if(i<0)return;
  const setup=$('q_setup').value.trim(),p=pbOf(setup);
  const o=norm({...trades[i],setup,plan:qPlan,rating:qRate,emotions:qEmo,mistakes:qMis,rules:p?qRules.filter(r=>p.rules.includes(r)):[],notes:$('q_notes').value,rev:true});
  if(o)trades[i]=o;saveTrades();hap('success');openReview();
}

/* ================= ui ================= */
const ICON={
copy:'<rect x="9" y="9" width="11" height="11" rx="2.5"/><path d="M5 15V6.5A1.5 1.5 0 0 1 6.5 5H15"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
dash:'<rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/>',
trades:'<path d="M8 6h13M8 12h13M8 18h13"/><circle cx="3.5" cy="6" r="1"/><circle cx="3.5" cy="12" r="1"/><circle cx="3.5" cy="18" r="1"/>',
cal:'<rect x="3" y="4.5" width="18" height="16" rx="2"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/>',
rep:'<path d="M5 20v-8M11 20V5M17 20v-5M3 20.5h18"/>',
pb:'<path d="M5 4.5A1.5 1.5 0 0 1 6.5 3H20v15H6.5A1.5 1.5 0 0 0 5 19.5z"/><path d="M5 19.5A1.5 1.5 0 0 0 6.5 21H20v-3"/><path d="M9.5 8h6.5M9.5 11.5h4.5"/>',
jr:'<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>',
set:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
more:'<circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/>',
plus:'<path d="M12 5v14M5 12h14"/>',
alert:'<path d="M12 3.5l9 16.5H3z"/><path d="M12 10v4.2M12 17.2v.3"/>',
check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',
filter:'<path d="M3 5h18l-7 8.5V19l-4 2v-7.5z"/>',
up:'<path d="M12 16V4M7 9l5-5 5 5M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"/>',down:'<path d="M12 4v12M7 11l5 5 5-5M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"/>',
sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
moon:'<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/>',
home:'<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/>',
chev:'<path d="M6 9l6 6 6-6"/>',
cols:'<rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M9 4v16M15 4v16"/>',
link:'<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
user:'<rect x="3" y="6" width="18" height="13" rx="2.5"/><path d="M3 10h18M7 15h4"/>',
acc:'<path d="M19 7V5.5A1.5 1.5 0 0 0 17.5 4h-12A2.5 2.5 0 0 0 3 6.5v11A2.5 2.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V16"/><path d="M3 6.5A2.5 2.5 0 0 0 5.5 9H20v7h-4a3.5 3.5 0 0 1 0-7"/><circle cx="16.2" cy="12.5" r=".6"/>',
share:'<path d="M12 15V3.5M7.5 8L12 3.5 16.5 8"/><path d="M8 11H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-2"/>',
img:'<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="9" cy="9" r="1.8"/><path d="M21 15.5l-5-5L5 21"/>'};
const ic=n=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[n]}</svg>`;
const VIEWS=['dash','acc','trades','cal','rep','pb','jr','set'];
let wk='',cv='dash',rt='ov',cm=new Date(),jd='',showF=false,sk='',sd=-1,tlim=100;
const TFL={q:'',out:'',setup:'',sym:'',dir:'',mis:'',tag:'',rev:''};
let CHD={};

/* ---- small utils ---- */
/* onay/uyarı penceresi: tarayıcının confirm/alert'i yerine sayfa içi (gömülü görünümlerde de çalışır) */
function cfm(msg,okTxt,cancel){return new Promise(res=>{
  let el=$('cfOv');if(!el){el=document.createElement('div');el.id='cfOv';el.className='ov cf';($('appRoot')||document.body).appendChild(el)}
  const back=document.activeElement;
  el.innerHTML=`<div class="md" role="alertdialog" aria-modal="true" aria-describedby="cfMsg"><div class="mb"><p id="cfMsg">${esc(msg)}</p></div><div class="mf">${cancel?`<button class="btn" data-r="0">${t('cancel')}</button>`:''}<button class="btn pri" data-r="1">${esc(okTxt)}</button></div></div>`;
  el.classList.add('on');
  const done=v=>{el.classList.remove('on');el.innerHTML='';document.removeEventListener('keydown',kd,true);if(back&&back.focus)back.focus();res(v)};
  const kd=e=>{if(e.key==='Escape'){e.stopPropagation();done(false)}};document.addEventListener('keydown',kd,true);
  el.onclick=e=>{const b=e.target.closest('[data-r]');if(b)done(b.dataset.r==='1');else if(e.target===el&&cancel)done(false)};
  setTimeout(()=>{const b=el.querySelector('.btn.pri');if(b)b.focus()},30)})}
const ask=m=>tgv('6.2')?new Promise(r=>TG.showConfirm(m,ok=>r(!!ok))):cfm(m,t('yes'),true);
const say=m=>{if(tgv('6.2'))TG.showAlert(m);else cfm(m,t('ok_btn'),false)};
const hap=k=>{try{if(tgv('6.1'))k==='tap'?TG.HapticFeedback.selectionChanged():TG.HapticFeedback.notificationOccurred(k)}catch(e){}};
function toast(m){const el=$('toast');if(!el)return;el.textContent=m;el.className='show';clearTimeout(toast.h);toast.h=setTimeout(()=>el.className='',2400)}
const uniq=(k,l=trades)=>[...new Set(l.flatMap(x=>[].concat(x[k])).filter(Boolean))].sort((a,b)=>String(a).localeCompare(String(b)));
const opt=(v,lab,cur)=>`<option value="${esc(v)}"${String(v)===String(cur)?' selected':''}>${esc(lab)}</option>`;
const nice=x=>{if(!(x>0))return 1;const p=10**Math.floor(Math.log10(x)),f=x/p;return (f<1.5?1:f<3?2:f<7?5:10)*p};
const stars=n=>n?'★'.repeat(n)+'<span class="mut">'+'★'.repeat(5-n)+'</span>':'—';
const pbOf=name=>PB.find(p=>p.name===name);
const narrow=()=>window.innerWidth<700;

/* ---- shell ---- */
function go(v){if(!VIEWS.includes(v))v='dash';const ch=v!==cv;cv=v;closeDlg(true);render();window.scrollTo(0,0);if(ch)viewIn()}
/* görünüm geçişi: içerik hafifçe yukarı kayarak gelir; panelde net sonuç sayarak yükselir */
function viewIn(){
  const el=$('view');el.classList.remove('vin');void el.offsetWidth;el.classList.add('vin');
  clearTimeout(viewIn.h);viewIn.h=setTimeout(()=>el.classList.remove('vin'),2200);
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  el.querySelectorAll('.strip .sb b').forEach((b,i,a)=>b.style.animationDelay=(200+i*Math.min(14,700/a.length))+'ms');
  el.querySelectorAll('#dayC rect').forEach((b,i,a)=>b.style.animationDelay=(300+i*Math.min(22,600/a.length))+'ms');
  el.querySelectorAll('.kpi .v,.acxv,.acxp b,.axsum b,.acxs b,.pbst b').forEach((b,i)=>countUp(b,250+Math.min(i,12)*40));
  /* cards come in one after another; bars grow, scores count up */
  el.querySelectorAll('.card').forEach((c,i)=>{if(!c.classList.contains('acx'))c.style.animationDelay=Math.min(i,10)*55+'ms'});
  el.querySelectorAll('.gbar,.meter b').forEach((b,i)=>b.style.animationDelay=(150+Math.min(i,24)*25)+'ms');
  el.querySelectorAll('.ring .rc b').forEach(b=>{const to=+(b.dataset.cuf||b.textContent);if(!isFinite(to))return;b.dataset.cuf=to;b.cuT=(b.cuT||0)+1;const my=b.cuT,t0=performance.now();const st=n=>{if(b.cuT!==my)return;const k=Math.max(0,Math.min(1,(n-t0)/1100)),e=1-Math.pow(1-k,3);b.textContent=Math.round(to*e);if(k<1)requestAnimationFrame(st)};requestAnimationFrame(st)});
  const big=el.querySelector('.nethead .big[data-v]');if(!big)return;
  const to=+big.dataset.v,t0=performance.now(),D=700;
  const step=n=>{const k=Math.max(0,Math.min(1,(n-t0)/D)),e=1-Math.pow(1-k,3);big.textContent=fr(Math.round(to*e*100)/100);if(k<1)requestAnimationFrame(step)};
  requestAnimationFrame(step);
}
/* a number counts up from zero into its final text, keeping its format (%48, +0,65R, $13.100,00, 2.15) */
function countUp(el,delay){
  const s=el.dataset.cuf||el.textContent,m=s.match(/\d[\d.,]*/);if(!m)return;el.dataset.cuf=s;el.cuT=(el.cuT||0)+1;const my=el.cuT;
  const tok=m[0],ls=Math.max(tok.lastIndexOf('.'),tok.lastIndexOf(','));
  let dec=0,dch='',gch='';
  if(ls>=0){const tail=tok.length-ls-1,both=tok.includes('.')&&tok.includes(',');
    if(both||tail!==3){dec=tail;dch=tok[ls];gch=both?(dch==='.'?',':'.'):''}else gch=tok[ls]}
  const to=parseFloat(tok.split(gch||'\u0000').join('').replace(dch||'\u0000','.'));if(!isFinite(to)||to===0)return;
  const fmt=v=>{let [a,b]=v.toFixed(dec).split('.');if(gch)a=a.replace(/\B(?=(\d{3})+(?!\d))/g,gch);return a+(dec?dch+b:'')};
  const pre=s.slice(0,m.index),post=s.slice(m.index+tok.length),D=900;
  el.textContent=pre+fmt(0)+post;
  setTimeout(()=>{const t0=performance.now();const st=n=>{if(el.cuT!==my)return;const k=Math.max(0,Math.min(1,(n-t0)/D)),e=1-Math.pow(1-k,3);el.textContent=k<1?pre+fmt(to*e)+post:s;if(k<1)requestAnimationFrame(st)};requestAnimationFrame(st)},delay||0);
}
/* loading: a short branded splash when the app opens. On a device with no data yet it waits (up to 5 s)
   for the first cloud sync, then the panel flows in. */
const SPL={on:false,first:true,t0:0,h:0};
const splashWait=()=>typeof sbOn==='function'&&sbOn()&&!trades.length&&syncSt!=='ok'&&syncSt!=='err';
function splashOn(){
  if(SPL.on||!SPL.first)return;SPL.first=false;
  if(typeof sbMode!=='undefined'&&sbMode==='auth')return;      // the sign-in screen needs no splash
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  let el=$('splash');
  if(!el){el=document.createElement('div');el.id='splash';el.className='splash';el.setAttribute('aria-hidden','true');
    el.innerHTML='<div class="spl"><svg viewBox="0 0 32 32" width="64" height="64"><rect width="32" height="32" rx="9" fill="#94C5CC"/><path class="b1" d="M9.5 22v-4.5"/><path class="b2" d="M16 22V12.5"/><path class="b3" d="M22.5 22V9"/></svg><b>TradeLog</b><i class="splbar"><span></span></i></div>';
    ($('appRoot')||document.body).appendChild(el)}
  el.hidden=false;el.classList.remove('out');SPL.on=true;SPL.t0=performance.now();splashCheck();
}
function splashCheck(){
  if(!SPL.on)return;const dt=performance.now()-SPL.t0;
  if(dt<900||(splashWait()&&dt<5000)){clearTimeout(SPL.h);SPL.h=setTimeout(splashCheck,120);return}
  SPL.on=false;const el=$('splash');
  if(!formOpen()&&!dlgOpen()&&!(typeof sbMode!=='undefined'&&sbMode==='auth')){render();viewIn()}
  el.classList.add('out');setTimeout(()=>{el.hidden=true},550);
}
/* placeholder panel while the first sync is still bringing the data */
function skel(){return `<div class="skelw"><div class="dgrid"><div class="dcl"><div class="card skel" style="height:300px"></div><div class="card skel" style="height:280px"></div></div><div class="dcr"><div class="card skel" style="height:360px"></div><div class="card skel" style="height:220px"></div></div></div></div>`}
function render(){
  document.documentElement.lang=L;
  if(typeof authGate==='function'&&authGate()){if(typeof aiFabSync==='function')aiFabSync();return}
  const pq=trades.length?pending().length:0;
  $('sideNav').innerHTML=VIEWS.filter(v=>v!=='set').map(v=>`<button class="nav${v===cv?' on':''}" onclick="go('${v}')"${v===cv?' aria-current="page"':''}>${ic(v)}<span>${t('v_'+v)}</span>${v==='trades'&&pq?`<span class="ct">${pq}</span>`:''}</button>`).join('');
  const tb=(v,lab)=>`<button class="${v===cv?'on':''}" onclick="go('${v}')"${v===cv?' aria-current="page"':''}>${ic(v)}<span>${lab}</span></button>`;
  $('tabBar').innerHTML=tb('dash',t('t_dash'))+tb('trades',t('t_trades'))+`<button class="fab" onclick="addMenu()" aria-label="${t('add_t')}">${ic('plus')}</button>`+tb('rep',t('t_rep'))+
    `<button class="${['dash','trades','rep'].includes(cv)?'':'on'}" onclick="moreMenu()">${ic('more')}<span>${t('t_more')}</span></button>`;
  const dk=document.documentElement.dataset.theme==='dark';
  $('sideActs').innerHTML=`<button class="btn pri full addbtn" onclick="addMenu()">${ic('plus')}<span>${t('add_t')}</span></button>`;
  $('sideFoot').innerHTML=`${typeof proSide==='function'?proSide():''}<button class="nav${cv==='set'?' on':''}" onclick="go('set')"${cv==='set'?' aria-current="page"':''}>${ic('set')}<span>${t('v_set')}</span></button>
   ${TG?'':`<button class="nav sitelink" onclick="window.showSite&&showSite()">${ic('home')}<span>${t('nav_home')}</span></button>`}
   ${typeof sbOn==='function'&&sbOn()&&sbUser?`<button class="sideuser" onclick="go('set')" title="${esc(sbUser.email||'')}"><span class="avt sm">${esc(((sbUser.email||'?')[0]).toUpperCase())}</span><span>${esc(sbUser.email||'')}</span>${typeof isPro==='function'&&isPro()?'<span class="probadge xs">PRO</span>':''}</button>`:''}
   <div class="sidefoot" id="syncSt"></div>`;setSync();
  $('vTitle').textContent=t('v_'+cv);
  topCtl();
  CHD={};
  setTimeout(tourAuto,0);
  $('view').innerHTML=(typeof roBanner==='function'?roBanner():'')+demoBar()+({dash:vDash,trades:vTrades,cal:vCal,rep:vRep,pb:vPB,jr:vJR,acc:vAcc,set:vSet})[cv]();
  if(cv==='trades')rList();
  if(cv==='set'&&typeof shList==='function')shList();
  if((cv==='set'||cv==='acc')&&typeof syLoadOnce==='function')syLoadOnce();
  if(cv==='set'&&typeof mtRender==='function')mtRender();
  bindCharts();tgUI();if(typeof aiFabSync==='function')aiFabSync();
}
let accOpen=false;
function accSw(){
  const act=actAccs(),arc=S.accounts.filter(a=>a.arch),types=ATYPES.filter(k=>act.filter(a=>a.type===k).length>1);
  const cur=V.acc==='all'?(act.length>1?t('acc_all'):accLabel(act[0])):V.acc.startsWith('type:')?t('acc_alltype',{k:typeL(V.acc.slice(5))}):accLabel(accOf(V.acc));
  const item=(v,lab,sub)=>`<button role="option" aria-selected="${V.acc===v}" class="${V.acc===v?'on':''}" onclick="setAcc('${v}')"><span>${esc(lab)}</span>${sub?`<small>${esc(sub)}</small>`:''}</button>`;
  const opts=(act.length>1?item('all',t('acc_all'),t('acc_n',{n:act.length})):'')+types.map(k=>item('type:'+k,t('acc_alltype',{k:typeL(k)}),'')).join('')
    +act.map(a=>item(act.length>1?a.id:'all',accLabel(a),a.type?typeL(a.type):'')).join('')
    +(arc.length?`<div class="accg">${t('archived')}</div>`+arc.map(a=>item(a.id,accLabel(a),'')).join(''):'');
  return `<div class="accsw" id="accSw"><button class="accbtn" onclick="event.stopPropagation();accOpen=!accOpen;topCtl()" aria-haspopup="listbox" aria-expanded="${accOpen}" aria-label="${t('h_acc')}"><span class="dot"></span><span class="nm">${esc(cur)}</span>${ic('chev')}</button>
   ${accOpen?`<div class="accm" role="listbox">${opts}<div class="accsep"></div><button class="act" onclick="accOpen=false;accDlg()">${ic('plus')}<span>${t('acc_add')}</span></button><button class="act" onclick="accOpen=false;go('acc')">${ic('acc')}<span>${t('acc_manage_all')}</span></button></div>`:''}</div>`;
}
/* İşlem ekle: TradeZella'daki gibi önce yöntem seçilir (elle ya da rapordan) */
function addMenu(){
  openDlg(t('add_t'),`<p style="padding-top:14px;font-size:14.5px;color:var(--ink2)">${t('add_how')}</p>${accOptions()}
   <div class="addfoot"><span>${accReady()?t('add_accs',{n:actAccs().filter(a=>a.name||a.no).length}):''}</span><button class="lnkb" onclick="closeDlg(true);go('acc')">${t('acc_manage_all')}</button></div>`,'');
}
function setAcc(v){V.acc=v;accOpen=false;saveV();render()}
function topCtl(){
  const per=['dash','trades','rep','pb'].includes(cv),acc=['dash','trades','rep','pb','cal','jr'].includes(cv);
  let h='';
  if(acc&&(trades.length||accReady()))h+=accSw();
  if(per&&trades.length){
    h+=`<div class="seg perseg">${PERS.map(p=>`<button class="${V.per===p?'on':''}" onclick="setPer('${p}')">${t('per_'+p)}</button>`).join('')}</div>
      <select class="sel persel" onchange="setPer(this.value)" aria-label="${t('period')}">${PERS.map(p=>opt(p,t('per_'+p),V.per)).join('')}</select>`;
  }
  const dk=document.documentElement.dataset.theme==='dark';
  h+=`<button class="ib" onclick="toggleTheme()" aria-label="${t(dk?'th_to_light':'th_to_dark')}" title="${t(dk?'th_to_light':'th_to_dark')}">${ic(dk?'sun':'moon')}</button>`;
  $('topCtl').innerHTML=h;
}
function setPer(p){V.per=p;saveV();render()}
function moreMenu(){
  const dk=document.documentElement.dataset.theme==='dark';
  openDlg(t('t_more'),`<div class="links">${['acc','cal','pb','jr','set'].map(v=>`<button onclick="go('${v}')">${t('v_'+v)}</button>`).join('')}
   <button onclick="accDlg()">${t('acc_add')}</button>
   ${typeof proSide==='function'&&sbOn()&&!isPro()?`<button onclick="proDlg('gen')">${t('pro_title')}${PRO_LIVE?'':` <span class="soon">${t('soon_l')}</span>`}</button>`:''}
   ${typeof coOpen==='function'&&sbOn()&&sbUser&&isPro()&&!RO?`<button onclick="closeDlg(true);coOpen()">${t('co_title')} <span class="soon">AI</span></button>`:''}
   ${TG?'':`<button onclick="closeDlg(true);window.showSite&&showSite()">${t('nav_home')}</button>`}
   ${typeof sbOn==='function'&&sbOn()?`<button class="dan" onclick="closeDlg(true);sbLogout()">${t('sb_out')}</button>`:''}</div>`,'');
}

/* ---- dialogs ---- */
const formOpen=()=>$('formOv').classList.contains('on');
const dlgOpen=()=>$('dlgOv').classList.contains('on');
function openDlg(title,html,foot,wide,drawer){
  $('dTitle').textContent=title;$('dBody').innerHTML=html;$('dFoot').innerHTML=foot||'';$('dFoot').style.display=foot?'':'none';
  $('dlgBox').classList.toggle('wide',!!wide);$('dlgOv').classList.toggle('drw',!!drawer&&drawer!=='ctr');$('dlgOv').classList.toggle('ctr',drawer==='ctr');$('dlgOv').classList.add('on');document.body.style.overflow='hidden';
  $('dlgOv').scrollTop=0;$('dlgBox').scrollTop=0;tgUI();
}
function closeDlg(silent){$('dlgOv').classList.remove('on');if(!formOpen())document.body.style.overflow='';if(!silent)tgUI()}
let xFn=null;
function showTxt(title,help,txt,btn,fn){
  xFn=fn;
  openDlg(title,`<p class="hint" style="margin:14px 0 10px;font-size:13.5px">${esc(help)}</p><textarea class="in" id="xA" spellcheck="false" style="min-height:220px;font-size:12.5px" ${fn?'':'readonly'}>${esc(txt)}</textarea>`,
    `<button class="btn" onclick="closeDlg()">${t('close')}</button><button class="btn pri" onclick="xAct()">${esc(btn)}</button>`);
}
async function xAct(){const v=$('xA').value;if(xFn){if(v.trim()&&impText(v))closeDlg()}else{try{await navigator.clipboard.writeText(v)}catch(e){const a=$('xA');a.removeAttribute('readonly');a.select();try{document.execCommand('copy')}catch(_){}a.setAttribute('readonly','')}hap('success');toast(t('copied'))}}

/* ---- trade card / row ---- */
function tradeCard(x){
  const bits=[];
  bits.push(`<span>${esc(dFmt(x.date))}${x.time?' '+esc(x.time):''}</span>`);
  if(x.setup)bits.push(`<span class="tag">${esc(x.setup)}</span>`);
  if(x.kz)bits.push(`<span>${esc(x.kz)}</span>`);
  if(x.plan==='no')bits.push(`<span class="neg">${t('off_plan_s')}</span>`);
  if(x.mistakes.length)bits.push(`<span class="neg">${esc(misL(x.mistakes[0]))}${x.mistakes.length>1?' +'+(x.mistakes.length-1):''}</span>`);
  if(x.demo)bits.push(`<span class="tag">${t('demo_tag')}</span>`);
  if(x.copies)bits.push(`<span class="tag">${t('copies',{n:x.copies})}</span>`);
  else if(multiView()&&S.accounts.length>1)bits.push(`<span>${esc(accName(accOf(x.account)))}</span>`);
  if(x.rev===false)bits.push(`<span class="tag" style="color:var(--br);border-color:var(--br)">${t('rv_tag')}</span>`);
  return `<button class="tc" onclick="openTrade(${x.id})"><div class="tc1"><span class="sym">${esc(x.symbol)}</span>${x.dir?`<span class="side-${x.dir[0].toLowerCase()}">${x.dir}</span>`:''}<span class="badge ${x.outcome.toLowerCase()}">${t('o_'+x.outcome)}</span><span class="rv ${cls(x.rrActual)}">${x.rEst?'≈':''}${fr(x.rrActual)}</span></div><div class="tc2">${bits.join('')}</div></button>`;
}

/* ---- dashboard ---- */
const accReady=()=>S.accounts.length>1||S.accounts.some(a=>a.name||a.no);
/* the three ways trades come in — the same everywhere (İşlem ekle, first start, Hesap ekle) */
/* where trades come from. Two different questions share this list:
   - setting up an account (welcome card, Accounts page): the manual option creates the ACCOUNT
   - adding a trade to an existing account: the manual option opens the TRADE form
   They get different labels so "manual" never means two things in a row. */
function accOptions(ctx){
  const pro=typeof planNow==='function'&&planNow()!=='free',acct=ctx==='acc',setup=acct||!accReady();
  const rec=` <span class="rec">${t('rec')}</span>`;
  const auto=`<button data-o="auto" onclick="typeof syStart==='function'?syStart():0"><span class="oi">${ic('link')}</span><span class="ot"><b>${t('acc_m_auto')}${pro?(setup?rec:''):` <span class="soon">PRO</span>`}</b><span>${t('acc_m_auto_d')}</span></span></button>`;
  const rep=`<button data-o="rep" onclick="closeDlg(true);openImport()"><span class="oi">${ic('up')}</span><span class="ot"><b>${t(setup?'acc_m_rep':'add_rep')}${setup&&!pro?rec:''}</b><span>${t(setup?'acc_m_rep_d':'add_rep_d')}</span></span></button>`;
  const man=setup?`<button data-o="man" onclick="accForm()"><span class="oi">${ic('jr')}</span><span class="ot"><b>${t(acct?'acc_m_man':'wel_man')}</b><span>${t(acct?'acc_m_man_d':'wel_man_d')}</span></span></button>`
    :`<button data-o="man" onclick="closeDlg(true);openForm()"><span class="oi">${ic('plus')}</span><span class="ot"><b>${t('add_man')}</b><span>${t('add_man_d')}</span></span></button>`;
  return `<div class="optc addopts">${setup?(pro?auto+rep+man:rep+man+auto):man+rep+auto}</div>`;
}
/* first start: what kind of account (prop rules right away), then where the trades come from */
var WEL=(()=>{try{return JSON.parse(localStorage.getItem('tradelog_wel')||'{}')||{}}catch(e){return {}}})();
function welSave(){try{localStorage.setItem('tradelog_wel',JSON.stringify(WEL))}catch(e){}}
const WEL_DEF={challenge:{dll:5,mll:10,tgt:8},funded:{dll:5,mll:10}};
function welType(k){WEL.type=WEL.type===k?'':k;WEL.rules=propType(WEL.type)?{...(WEL_DEF[WEL.type]||{})}:{};welSave();
  document.querySelectorAll('.wtype').forEach(b=>b.classList.toggle('on',b.dataset.k===WEL.type));const r=$('welRules');if(r)r.innerHTML=welRules()}
function welRules(){
  if(!propType(WEL.type))return '';const r=WEL.rules||{};
  const f=(k,lab)=>`<label class="fld"><span>${lab}</span><span class="pctin"><input class="in" type="number" min="0" max="99" step="0.5" inputmode="decimal" value="${r[k]??''}" placeholder="—" oninput="WEL.rules=WEL.rules||{};const v=num(this.value);if(v>0&&v<100)WEL.rules['${k}']=v;else delete WEL.rules['${k}'];welSave()"><i>%</i></span></label>`;
  return `<div class="welr"><p class="hint">${t('wel_rules_h')}</p><div class="fgrid3">${f('dll',t('ar_dll'))}${f('mll',t('ar_mll'))}${WEL.type==='challenge'?f('tgt',t('ar_tgt')):''}</div></div>`;
}
/* the account that was just created takes the type and prop rules chosen on the welcome card */
function welApply(a){
  if(!a||!WEL.type)return;
  if(!a.type)a.type=WEL.type;
  if(propType(WEL.type)&&WEL.rules&&Object.keys(WEL.rules).length&&!(a.rules&&Object.keys(a.rules).length))a.rules={...WEL.rules};
  WEL={};welSave();
}
function welcome(){
  if(!accReady())return `<div class="card welcome w1"><div class="wh"><span class="step1">${t('wel_hi')}</span><h2>${t('wel_acc_t')}</h2><p>${t('wel_acc_d2')}</p></div>
   <div class="welq"><div class="wqh"><span class="wn">1</span><b>${t('wel_q1')}</b><small>${t('wel_q1_s')}</small></div>
    <div class="wtypes">${['personal','challenge','funded'].map(k=>`<button type="button" class="wtype${WEL.type===k?' on':''}" data-k="${k}" onclick="welType('${k}')"><b>${t('at_'+k)}</b><span>${t('wel_t_'+k)}</span></button>`).join('')}</div>
    <div id="welRules">${welRules()}</div></div>
   <div class="welq"><div class="wqh"><span class="wn">2</span><b>${t('wel_q2')}</b></div>
   ${accOptions()}</div>
   <div class="walt"><span>${t('wel_alt2')}</span><button class="btn sm" onclick="demo()">${t('wel_demo')}</button></div></div>`;
  const a=actAccs()[0];
  /* the account is being connected automatically: say so instead of asking for a first trade */
  if(typeof SY!=='undefined'&&SY){if(!SY.links&&typeof syLoadOnce==='function')syLoadOnce();
    const lk=SY.links&&SY.links.find(k=>k.account_id===a.id&&!(k.state==='error'&&k.error==='plan'));
    if(lk){const st=lk.state==='error'?'err':lk.state==='ok'&&lk.last_sync_at?'ok':'wait';
      return `<div class="card welcome w1"><div class="wh"><span class="step1">${t('wel_sync_k')}</span><h2>${t('wel_sync_'+st+'_t')}</h2><p>${t(st==='err'?'sy_e_broker':'wel_sync_'+st+'_d')}</p></div>
       <div class="wsync"><span class="sydot ${st==='err'?'bad':st==='ok'?'on':'wait'}"></span><span class="wsn">${esc(lk.plat.toUpperCase()+' #'+lk.login+' · '+lk.server)}${st==='wait'?`<small class="wsst" data-systage="${lk.id}">${esc(syStage(lk.id))}</small>`:''}</span><button class="btn sm" onclick="syNow('${lk.id}',this)">${t('wel_sync_chk')}</button></div>
       <div class="walt"><span>${t('wel_alt')}</span><button class="btn sm" onclick="demo()">${t('wel_demo')}</button><button class="btn sm ghost" onclick="accDlg('${a.id}')">${t('acc_edit')}</button></div></div>`}}
  return `<div class="card welcome w1"><div class="wh"><span class="step1">${t('wel_step2')}</span><h2>${t('wel_ready_t')}</h2><p>${t('wel_ready_d',{k:esc(accLabel(a))})}</p></div>
   ${accOptions()}
   <div class="walt"><span>${t('wel_alt')}</span><button class="btn sm" onclick="demo()">${t('wel_demo')}</button><button class="btn sm ghost" onclick="accDlg('${a.id}')">${t('acc_edit')}</button></div></div>`;
}
function alertsH(){
  const d=discipline(),a=[];
  if(S.day>0&&d.todayR<=-S.day)a.push(t('al_day',{x:fr(d.todayR),l:S.day}));
  if(S.str>0&&d.streak>=S.str)a.push(t('al_str',{n:d.streak,l:S.str}));
  if(S.maxT>0&&d.todayN>=S.maxT)a.push(t('al_max',{n:d.todayN,l:S.maxT}));
  scopeAccs().forEach(ac=>{const p=propState(ac);if(!p)return;const k=accName(ac),m=v=>money(v,0,ac.cur);
    if(p.dl){if(p.dl.left<=0)a.push(t('al_dll_hit',{k,l:m(p.dl.lim)}));else if(p.dl.used>0&&p.dl.left<=p.dl.lim*.3)a.push(t('al_dll_near',{k,x:m(p.dl.left)}))}
    if(p.ml){if(p.ml.left<=0)a.push(t('al_mll_hit',{k}));else if(p.ml.used>0&&p.ml.left<=p.ml.lim*.3)a.push(t('al_mll_near',{k,x:m(p.ml.left)}))}});
  return a.map(x=>`<div class="alert">${ic('alert')}<span>${esc(x)}</span></div>`).join('');
}
function vDash(){
  if(!trades.length)return splashWait()?skel():welcome();
  const l=fT(),al=alertsH();
  if(!l.length)return `${al?`<div class="stack" style="margin-bottom:16px">${al}</div>`:''}<div class="card empty">${t('per_empty')}<div style="margin-top:12px"><button class="btn" onclick="setPer('all')">${t('per_all_btn')}</button></div></div>`;
  const s=stats(l),bal=balanceInfo(),ch=chrono(l).filter(x=>has(x.rrActual)).slice(-60);
  const mxa=Math.max(.01,...ch.map(x=>Math.abs(x.rrActual)));
  const strip=ch.map(x=>{const h=Math.abs(x.rrActual)/mxa*48;return `<div class="sb${x.plan==='no'?' off':''}" title="${esc(x.date+' '+x.symbol+' '+fr(x.rrActual))}"><b class="${x.rrActual>0?'u':x.rrActual<0?'d':'z'}" style="${x.rrActual?`height:${h.toFixed(1)}%`:''}"></b></div>`}).join('');
  const facts=[`<span><b>${s.n}</b> ${t('trades_l')}</span>`];
  if(s.pnl!==null)facts.push(`<span>PnL <b class="${cls(s.pnl)}">${money(s.pnl,1)}</b></span>`);
  if(bal&&V.per==='all')facts.push(`<span>${t('k_bal')} <b>${bal.est?'≈':''}${money(bal.cur)}</b>${bal.ret!=null?` <span class="${cls(bal.ret)}">(${bal.ret>0?'+':''}${bal.ret.toFixed(1)}%)</span>`:''}</span>`);
  const kp=[[t('k_wr'),pc(s.wr),t('kpi_wl',{w:s.w,l:s.ls,b:s.be?t('kpi_be',{n:s.be}):''}),''],[t('k_pf'),pfTxt(s),t('k_pf_s'),s.pf===null?'':s.pf>=1?'pos':'neg'],
    [t('k_exp'),fr(s.exp),t('k_exp_s'),cls(s.exp)],[t('k_rr'),s.real!==null?s.real.toFixed(2):'—',t('k_rr_s'),''],
    [t('k_dd'),s.hasR?fr(-s.dd):'—',t('k_dd_s'),s.dd?'neg':''],[t('k_plan'),pc(s.plan),t('k_plan_s2'),s.plan===null?'':s.plan>=80?'pos':'neu']];
  const net=`<div class="card netcard o1" data-tour="net"><div class="nethead"><div><div class="lbl">${t('hero_'+V.per)} <button type="button" class="rinfo" onclick="rInfo()" aria-label="${t('r_what')}">${t('r_what')}</button></div><div class="big ${cls(s.tot)}"${s.hasR?` data-v="${s.tot}"`:''}>${s.hasR?fr(s.tot):'—'}</div><div class="hfacts">${facts.join('')}</div></div>
    <div class="stripw"><div class="strip" aria-label="${t('strip_l')}">${strip}</div><div class="stripcap"><span>${t('strip_l')}</span>${ch.some(x=>x.plan==='no')?`<span>${t('strip_off')}</span>`:''}</div></div></div>
   <div class="kpis" data-tour="kpis">${kp.map(([a,b,c,d])=>`<div class="kpi"><div class="l">${a}</div><div class="v ${d}">${b}</div><div class="s">${c}</div></div>`).join('')}</div></div>`;
  const eq=`<div class="card o4"><div class="ch"><h2>${t('c_eq')}</h2><small>${t('c_eq_s')}</small></div><div class="cb">${eqChart(l)}</div></div>`;
  const sc=score(l),ins=insights(l);
  const pq=pending().length;
  const rq=pq?`<div class="card revq"><div><b>${t('rv_card',{n:pq})}</b><div class="hint">${t('rv_card_s')}</div></div><button class="btn pri" onclick="RVi=0;openReview()">${t('rv_start')}</button></div>`:'';
  const pst=scopeAccs().map(propState).filter(Boolean);
  const pcard=pst.length?`<div class="card o2"><div class="ch"><h2>${t('ar_card')}</h2><small>${t('ar_card_s')}</small></div><div class="cb">${pst.map(propRows).join('')}</div></div>`:'';
  const scard=`<div class="card o3" data-tour="score"><div class="ch"><h2>${t('c_score')}</h2><small><a href="#" onclick="rt='ov';go('rep');return false">${t('details')}</a></small></div><div class="cb">${scoreBlock(sc)}</div></div>`;
  const icard=`<div class="card o6" data-tour="ins"><div class="ch"><h2>${t('c_ins')}</h2>${typeof proDlg==='function'?`<small><button class="prolink" onclick="coOpen()">${t('ai_ask')} <span class="soon">Pro</span></button></small>`:''}</div><div class="cb">${ins.length?ins.map(([k,x])=>`<div class="ins ${k}"><i></i><div>${esc(x)}</div></div>`).join(''):`<div class="mut" style="font-size:14px">${t('ins_need')}</div>`}</div></div>`;
  const dcard=`<div class="card o5"><div class="ch"><h2>${t('c_daily')}</h2><small>${t('c_daily_s')}</small></div><div class="cb">${dayChart(l)}</div></div>`;
  const recent=`<div class="card o7"><div class="ch"><h2>${t('c_recent')}</h2><small><a href="#" onclick="go('trades');return false">${t('see_all')}</a></small></div><div class="tlist" style="margin-top:8px">${l.slice(0,6).map(tradeCard).join('')}</div></div>`;
  return `<div class="stack">${al}${rq}${gsCard()}${typeof proNudge==='function'?proNudge():''}<div class="dgrid"><div class="dcl">${net}${eq}${dcard}</div><div class="dcr">${pcard}${scard}${weekCard()}${icard}</div>${recent}</div></div>`;
}

/* Ana ekrana ekle: referanslardaki "mobil uygulamayı kur" adımının karşılığı.
   Android/Chrome kendi kurulum penceresini verirse onu açarız; vermezse (iPhone, diğer tarayıcılar) adımları gösteririz. */
let A2P=null;
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();A2P=e});
window.addEventListener('appinstalled',()=>{try{localStorage.setItem('tradelog_a2hs','1')}catch(e){}});
const a2Stand=()=>{try{return matchMedia('(display-mode: standalone)').matches||navigator.standalone===true}catch(e){return false}};
const a2IOS=()=>/iPhone|iPad|iPod/i.test(navigator.userAgent)||(navigator.maxTouchPoints>1&&/Mac/.test(navigator.platform||''));
const a2Show=()=>!CS&&!window.RO&&(/Android/i.test(navigator.userAgent)||a2IOS())&&!a2Stand();
function a2Done(){if(a2Stand())return true;try{return localStorage.getItem('tradelog_a2hs')==='1'}catch(e){return false}}
async function a2hs(){
  if(A2P){const p=A2P;A2P=null;try{p.prompt();const r=await p.userChoice;if(r&&r.outcome==='accepted')a2Ok(true)}catch(e){}return}
  openDlg(t('a2_t'),`<div style="padding-top:14px"><p style="font-size:14.5px;color:var(--ink2)">${t('a2_d')}</p><ol class="a2l">${t(a2IOS()?'a2_ios':'a2_and').map(x=>`<li>${x}</li>`).join('')}</ol></div>`,
    `<button class="btn" onclick="closeDlg()">${t('a2_later')}</button><button class="btn pri" onclick="a2Ok()">${t('a2_ok')}</button>`,false,'ctr');
}
function a2Ok(quiet){try{localStorage.setItem('tradelog_a2hs','1')}catch(e){}if(!quiet)closeDlg();render()}

/* Başlangıç listesi: TradeZella ve TradesViz'deki "Getting started" kartı gibi.
   Hepsi bitince ya da gizlenince bir daha görünmez. */
const GSK='tradelog_gs_off';
function gsCard(){
  if(window.RO)return '';
  let off=false;try{off=localStorage.getItem(GSK)==='1'}catch(e){}
  if(off)return '';
  const prop=S.accounts.some(a=>a.type==='challenge'||a.type==='funded');
  const items=[
    ['acc',accReady(),t('gs_acc'),'','accDlg()'],
    ['trade',trades.some(x=>!x.demo),t('gs_trade'),t('gs_trade_d'),'addMenu()'],
    ['pb',PB.some(p=>!p.demo),t('gs_pb'),t('gs_pb_d'),"go('pb');pbEdit()"],
    prop?['rules',S.accounts.some(a=>a.rules),t('gs_rules'),t('gs_rules_d'),`accDlg('${(S.accounts.find(a=>a.type==='challenge'||a.type==='funded')||{}).id}')`]:null,
    ['jr',Object.keys(JR).length>0,t('gs_jr'),t('gs_jr_d'),"go('jr')"],
    a2Show()?['app',a2Done(),t('gs_app'),t('gs_app_d'),'a2hs()']:null].filter(Boolean);
  const done=items.filter(x=>x[1]).length;
  if(done===items.length)return '';
  return `<div class="card gs"><div class="gsh"><div><h2>${t('gs_t')}</h2><span class="hint">${t('gs_s',{d:done,n:items.length})}</span></div>
   <div class="meter gsm"><b style="width:${(done/items.length*100).toFixed(0)}%"></b></div><button class="btn sm ghost" onclick="gsHide()">${t('gs_hide')}</button></div>
   ${done?`<div class="gsdone">${items.filter(x=>x[1]).map(x=>`<span><span class="gsc">${ic('check')}</span>${x[2]}</span>`).join('')}</div>`:''}
   <div class="gsl">${items.filter(x=>!x[1]).map(([k,ok,lab,d,fn])=>`<div class="gsi"><span class="gsc"></span><span class="gst"><b>${lab}</b>${d?`<span>${d}</span>`:''}</span>${fn?`<button class="btn sm" onclick="${fn}">${t('gs_go')}</button>`:''}</div>`).join('')}</div></div>`;
}
function gsHide(){try{localStorage.setItem(GSK,'1')}catch(e){}render()}
function propRows(p){
  const m=v=>money(v,0,p.a.cur),row=(lab,pct,txt,bad)=>`<div class="prow"><div class="sline"><span>${lab}</span><span class="${bad?'neg':''}">${txt}</span></div><div class="meter"><b style="width:${clamp(pct).toFixed(1)}%;${bad?'background:var(--loss)':''}"></b></div></div>`;
  let h=`<div class="pacc">${scopeAccs().length>1?`<div class="pname">${esc(accName(p.a))}${p.a.type?` <span class="tag">${typeL(p.a.type)}</span>`:''}</div>`:''}`;
  if(p.dl)h+=row(t('ar_dll'),p.dl.used/p.dl.lim*100,p.dl.left<=0?t('ar_hit'):t('ar_left',{x:m(p.dl.left),l:m(p.dl.lim)}),p.dl.left<=p.dl.lim*.3);
  if(p.ml)h+=row(t('ar_mll'),p.ml.used/p.ml.lim*100,p.ml.left<=0?t('ar_hit'):t('ar_left',{x:m(p.ml.left),l:m(p.ml.lim)}),p.ml.left<=p.ml.lim*.3);
  if(p.tg)h+=row(t('ar_tgt'),p.tg.pct,p.tg.left<=0?t('ar_done'):t('ar_prog',{x:m(Math.max(0,p.tg.prog)),l:m(p.tg.goal)}),false);
  return h+'</div>';
}

/* ---- charts ---- */
function axisY(mn,mx,Y,pl,W){
  const st=nice((mx-mn)/4);let h='';
  for(let y=Math.ceil(mn/st)*st;y<=mx+1e-9;y+=st){const yy=Y(y).toFixed(1);h+=`<line x1="${pl}" x2="${W}" y1="${yy}" y2="${yy}" stroke="var(--ln2)" ${Math.abs(y)<1e-9?'stroke="var(--ln)"':''}/><text x="${pl-8}" y="${(+yy+4)}" text-anchor="end" font-size="11" fill="var(--ink3)">${fr(y)}</text>`}
  return h;
}
function eqChart(l){
  const pts=chrono(l).filter(x=>has(x.rrActual));
  if(pts.length<2)return `<div class="empty">${t('eq_need')}</div>`;
  let c=0;const v=[0,...pts.map(x=>c+=x.rrActual)];
  const W=narrow()?360:640,H=narrow()?230:250,pl=46,pr=10,pt=10,pb=26;
  let mn=Math.min(0,...v),mx=Math.max(0,...v);const rg=(mx-mn)||1;mn-=rg*.06;mx+=rg*.06;
  const X=i=>pl+i*(W-pl-pr)/(v.length-1),Y=y=>pt+(mx-y)/(mx-mn)*(H-pt-pb);
  const path=v.map((y,i)=>(i?'L':'M')+X(i).toFixed(1)+' '+Y(y).toFixed(1)).join('');
  const z=Y(0).toFixed(1);
  const mk=pts.map((x,i)=>x.plan==='no'?`<circle cx="${X(i+1).toFixed(1)}" cy="${Y(v[i+1]).toFixed(1)}" r="4.5" fill="var(--loss)" stroke="var(--sf)" stroke-width="2"/>`:'').join('');
  const hasOff=pts.some(x=>x.plan==='no');
  CHD.eqC={W,H,xs:v.map((_,i)=>X(i)),pt:i=>[X(i),Y(v[i])],tip:i=>i===0?t('start'):`<b>${esc(pts[i-1].symbol)}</b> ${esc(dFmt(pts[i-1].date))}<br>${fr(pts[i-1].rrActual)} · ${t('cum')} ${fr(v[i])}${pts[i-1].plan==='no'?'<br>'+t('off_plan_s'):''}`};
  return `<div class="chart" id="eqC"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${t('c_eq')}">${axisY(mn,mx,Y,pl,W-pr)}
   <defs><linearGradient id="eqG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--br)" stop-opacity=".22"/><stop offset="1" stop-color="var(--br)" stop-opacity="0"/></linearGradient></defs>
   <path class="eqa" d="${path}L${X(v.length-1).toFixed(1)} ${z}L${X(0).toFixed(1)} ${z}Z" fill="url(#eqG)"/>
   <path class="eql" d="${path}" pathLength="1" fill="none" stroke="var(--br)" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"/><g class="eqm">${mk}</g>
   <line class="cross" y1="${pt}" y2="${H-pb}" stroke="var(--ink3)" stroke-dasharray="3 3" style="display:none"/>
   <circle class="hdot" r="5" fill="var(--br)" stroke="var(--sf)" stroke-width="2" style="display:none"/>
   <text x="${pl}" y="${H-6}" font-size="11" fill="var(--ink3)">${esc(dFmt(pts[0].date))}</text><text x="${W-pr}" y="${H-6}" font-size="11" fill="var(--ink3)" text-anchor="end">${esc(dFmt(pts[pts.length-1].date))}</text>
  </svg><div class="tip"></div></div>
  <div class="legend"><span><i style="background:var(--br)"></i>${t('lg_eq')}</span>${hasOff?`<span><i style="background:var(--loss)"></i>${t('lg_off')}</span>`:''}</div>`;
}
function dayChart(l){
  const by={},cn={};l.forEach(x=>{if(has(x.rrActual)){by[x.date]=(by[x.date]||0)+x.rrActual;cn[x.date]=(cn[x.date]||0)+1}});
  const ks=Object.keys(by).sort().slice(-30);
  if(ks.length<2)return `<div class="empty">${t('eq_need')}</div>`;
  const vs=ks.map(k=>by[k]),W=narrow()?360:640,H=200,pl=46,pr=6,pt=10,pb=26;
  let mn=Math.min(0,...vs),mx=Math.max(0,...vs);const rg=(mx-mn)||1;mn-=rg*.05;mx+=rg*.05;
  const Y=y=>pt+(mx-y)/(mx-mn)*(H-pt-pb),bw=(W-pl-pr)/ks.length,w=Math.max(3,Math.min(22,bw*.64));
  const cx=i=>pl+bw*i+bw/2;
  const bars=vs.map((v,i)=>{const y0=Y(0),y1=Y(v),h=Math.max(1.5,Math.abs(y1-y0));return `<rect x="${(cx(i)-w/2).toFixed(1)}" y="${(v>=0?y0-h:y0).toFixed(1)}" width="${w.toFixed(1)}" height="${h.toFixed(1)}" rx="2" fill="${v>0?'var(--win)':v<0?'var(--loss)':'var(--be)'}" class="${v<0?'dn':'up'}"/>`}).join('');
  CHD.dayC={W,H,xs:ks.map((_,i)=>cx(i)),pt:i=>[cx(i),Math.min(Y(vs[i]),Y(0))],tip:i=>`<b>${esc(dFmt(ks[i],{weekday:'short',day:'numeric',month:'short'}))}</b><br>${fr(vs[i])} · ${t('n_tr',{n:cn[ks[i]]})}`};
  return `<div class="chart" id="dayC"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${t('c_daily')}">${axisY(mn,mx,Y,pl,W-pr)}${bars}
   <line class="cross" y1="${pt}" y2="${H-pb}" stroke="var(--ink3)" stroke-dasharray="3 3" style="display:none"/>
   <text x="${pl}" y="${H-6}" font-size="11" fill="var(--ink3)">${esc(dFmt(ks[0]))}</text><text x="${W-pr}" y="${H-6}" font-size="11" fill="var(--ink3)" text-anchor="end">${esc(dFmt(ks[ks.length-1]))}</text>
  </svg><div class="tip"></div></div>`;
}
function bindCharts(){
  Object.entries(CHD).forEach(([id,d])=>{
    const el=$(id);if(!el)return;const svg=el.querySelector('svg'),tip=el.querySelector('.tip'),cross=svg.querySelector('.cross'),dot=svg.querySelector('.hdot');
    const mv=e=>{const r=svg.getBoundingClientRect(),x=(e.clientX-r.left)/r.width*d.W;let bi=0,bd=1e9;
      d.xs.forEach((xx,i)=>{const dd=Math.abs(xx-x);if(dd<bd){bd=dd;bi=i}});
      const [px,py]=d.pt(bi);
      if(cross){cross.setAttribute('x1',px);cross.setAttribute('x2',px);cross.style.display=''}
      if(dot){dot.setAttribute('cx',px);dot.setAttribute('cy',py);dot.style.display=''}
      tip.innerHTML=d.tip(bi);tip.style.display='block';
      const tw=tip.offsetWidth,left=clamp(px/d.W*r.width,tw/2,r.width-tw/2);
      tip.style.left=left+'px';tip.style.top=(py/d.H*r.height)+'px'};
    const lv=()=>{tip.style.display='none';if(cross)cross.style.display='none';if(dot)dot.style.display='none'};
    svg.addEventListener('pointermove',mv);svg.addEventListener('pointerdown',mv);svg.addEventListener('pointerleave',lv);
  });
}
function radar(sc){
  const n=sc.parts.length,cx=150,cy=118,R=80,A=i=>(-90+360/n*i)*Math.PI/180;
  const P=(i,v)=>[cx+Math.cos(A(i))*R*v/100,cy+Math.sin(A(i))*R*v/100];
  const ring=v=>sc.parts.map((_,i)=>P(i,v).map(z=>z.toFixed(1)).join(',')).join(' ');
  let h=[25,50,75,100].map(v=>`<polygon points="${ring(v)}" fill="none" stroke="var(--ln2)"/>`).join('');
  h+=sc.parts.map((_,i)=>{const [x,y]=P(i,100);return `<line x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="var(--ln2)"/>`}).join('');
  h+=`<polygon points="${sc.parts.map(([,v],i)=>P(i,Math.max(v,3)).map(z=>z.toFixed(1)).join(',')).join(' ')}" fill="var(--br)" fill-opacity=".16" stroke="var(--br)" stroke-width="2" stroke-linejoin="round"/>`;
  h+=sc.parts.map(([k],i)=>{const [x,y]=P(i,122),c=Math.cos(A(i));return `<text x="${x.toFixed(1)}" y="${(y+4).toFixed(1)}" font-size="14" fill="var(--ink2)" text-anchor="${c>.3?'start':c<-.3?'end':'middle'}">${esc(t(k+'_s'))}</text>`}).join('');
  return `<svg viewBox="0 0 300 236" role="img" aria-label="${t('c_score')}">${h}</svg>`;
}
function scoreBlock(sc){
  if(!sc)return `<div class="mut" style="font-size:14px">${t('score_need')}</div>`;
  const C=2*Math.PI*60,col=v=>v>=60?'var(--br)':v>=40?'var(--ink3)':'var(--loss)';
  return `<div class="ring"><svg viewBox="0 0 148 148" aria-hidden="true"><circle cx="74" cy="74" r="60" fill="none" stroke="var(--sf2)" stroke-width="12"/><circle class="rg" cx="74" cy="74" r="60" fill="none" stroke="var(--br)" stroke-width="12" stroke-linecap="round" stroke-dasharray="${(sc.total/100*C).toFixed(1)} ${C.toFixed(1)}"/></svg><div class="rc"><div><b>${sc.total}</b><span>/ 100</span></div></div></div>
   <div class="scnote">${t(sc.total>=70?'sc_hi':sc.total>=45?'sc_mid':'sc_lo')}</div>
   <div class="parts">${sc.parts.map(([k,v])=>`<div class="pt"><span title="${esc(t(k))}">${t(k)}</span><span class="meter"><b style="width:${v}%;background:${col(v)}"></b></span><span class="mono">${v}</span></div>`).join('')}</div>`;
}

/* ---- trades view ---- */
/* pages other than the dashboard get their own short empty state (the setup card lives on the dashboard) */
function emptyView(k){
  const setup=!accReady();
  return `<div class="card evw"><span class="evi">${ic(k)}</span><h2>${t(k==='acc'?'es_acc_t':'es_t')}</h2><p>${t('es_'+k)}</p>
   <div class="eva">${setup?`<button class="btn pri" onclick="go('dash')">${t('es_setup')}</button>`:`<button class="btn pri" onclick="addMenu()">${ic('plus')}<span>${t('es_add')}</span></button>`}<button class="btn" onclick="demo()">${t('wel_demo')}</button></div></div>`;
}
function vTrades(){
  if(!trades.length)return emptyView('trades');
  const l=fT(),sel=(k,ph,items)=>`<select class="sel" onchange="TFL.${k}=this.value;rList()">${opt('',ph,TFL[k])}${items.map(([v,lab])=>opt(v,lab,TFL[k])).join('')}</select>`;
  const p=a=>a.map(x=>[x,x]);
  return `<div class="card"><div class="toolbar"><input class="in" type="search" placeholder="${t('search_ph')}" value="${esc(TFL.q)}" oninput="TFL.q=this.value;rList()">
   <button class="btn sm ${showF?'pri':''}" onclick="showF=!showF;render()">${ic('filter')}${t('filters')}</button>
   <button class="btn sm colbtn" onclick="colDlg()">${ic('cols')}${t('cols_btn')}</button><button class="btn sm ghost" onclick="Object.keys(TFL).forEach(k=>TFL[k]='');render()">${t('f_reset')}</button></div>
   <div class="filters ${showF?'':'hide'}">${sel('out',t('f_out'),['Win','Loss','BE'].map(o=>[o,t('o_'+o)]))}${sel('setup',t('f_setup'),p(uniq('setup',l)))}${sel('sym',t('f_sym'),p(uniq('symbol',l)))}
   ${sel('dir',t('f_dir'),p(['Long','Short']))}${sel('mis',t('f_mis'),uniq('mistakes',l).map(m=>[m,misL(m)]))}${sel('tag',t('f_tag'),p(uniq('tags',l)))}${sel('rev',t('f_rev'),[['p',t('f_rev_p')]])}</div>
   <div class="sumline" id="tSum"></div><div class="dual" id="tList"></div></div>`;
}
function tradeFilter(){
  const q=TFL.q.trim().toLowerCase();
  let l=fT().filter(x=>(!TFL.out||x.outcome===TFL.out)&&(!TFL.setup||x.setup===TFL.setup)&&(!TFL.sym||x.symbol===TFL.sym)&&(!TFL.dir||x.dir===TFL.dir)&&(!TFL.mis||x.mistakes.includes(TFL.mis))&&(!TFL.tag||x.tags.includes(TFL.tag))&&(!TFL.rev||x.rev===false)
    &&(!q||[x.symbol,x.setup,x.notes,x.kz,...x.tags].join(' ').toLowerCase().includes(q)));
  if(sk)l=[...l].sort((a,b)=>{const x=a[sk],y=b[sk];if(x==null&&y==null)return 0;if(x==null)return 1;if(y==null)return -1;return(typeof x==='number'?x-y:String(x).localeCompare(String(y)))*sd});
  return l;
}
/* İşlemler tablosu sütunları; isteğe bağlı olanlar "Sütunlar" penceresinden açılıp kapanır */
const COLK='tradelog_cols',COL_DEF=['kz','rating'];
function colHid(){try{const v=JSON.parse(localStorage.getItem(COLK));if(Array.isArray(v))return v}catch(e){}return COL_DEF}
function TCOLS(){return [
  {k:'date',s:'date',h:t('h_date'),td:x=>`<td>${esc(dFmt(x.date,{day:'numeric',month:'short',year:'2-digit'}))}${x.time?` <span class="mut">${esc(x.time)}</span>`:''}</td>`},
  {k:'symbol',s:'symbol',h:t('h_sym'),td:x=>`<td class="sym">${esc(x.symbol)}${x.demo?` <span class="tag">${t('demo_tag')}</span>`:''}</td>`},
  {k:'dir',opt:1,s:'dir',h:t('h_dir'),td:x=>`<td>${x.dir?`<span class="side-${x.dir[0].toLowerCase()}">${x.dir}</span>`:'—'}</td>`},
  {k:'acc',opt:1,s:'',h:t('h_acc'),td:x=>`<td>${esc(accName(accOf(x.account)))}</td>`},
  {k:'setup',opt:1,s:'setup',h:t('h_setup'),td:x=>`<td>${esc(x.setup)||'—'}</td>`},
  {k:'kz',opt:1,s:'kz',h:t('h_sess'),td:x=>`<td class="mut">${esc(x.kz)||'—'}</td>`},
  {k:'out',opt:1,s:'',h:t('h_out'),td:x=>`<td><span class="badge ${x.outcome.toLowerCase()}">${t('o_'+x.outcome)}</span></td>`},
  {k:'r',s:'rrActual',h:'R',r:1,td:x=>`<td class="r ${cls(x.rrActual)}" style="font-weight:600">${x.rEst?'≈':''}${fr(x.rrActual)}</td>`},
  {k:'pnl',opt:1,s:'pnl',h:'PnL',r:1,td:x=>`<td class="r ${cls(x.pnl)}">${has(x.pnl)?money(x.pnl,1,accOf(x.account).cur):'—'}</td>`},
  {k:'plan',opt:1,s:'',h:t('h_plan'),td:x=>`<td>${x.plan==='yes'?`<span class="pos">${t('yes')}</span>`:x.plan==='no'?`<span class="neg">${t('no')}</span>`:'—'}</td>`},
  {k:'mis',opt:1,s:'',h:t('h_mis'),td:x=>`<td class="neg">${x.mistakes.map(misL).map(esc).join(', ')||'<span class="mut">—</span>'}</td>`},
  {k:'rating',opt:1,s:'rating',h:t('h_rating'),td:x=>`<td style="color:var(--be)">${x.rating?'★'.repeat(x.rating):'—'}</td>`}]}
function colDlg(){
  const hid=colHid();
  openDlg(t('cols_t'),`<p class="hint" style="margin:14px 0 6px;font-size:13.5px">${t('cols_h')}</p>${TCOLS().filter(c=>c.opt&&(c.k!=='acc'||scopeAccs().length>1)).map(c=>`<label class="check"><input type="checkbox" ${hid.includes(c.k)?'':'checked'} onchange="colSet('${c.k}',this.checked)"><span>${c.h}</span></label>`).join('')}`,
   `<button class="btn" onclick="try{localStorage.removeItem(COLK)}catch(e){};closeDlg();rList()">${t('cols_reset')}</button><button class="btn pri" onclick="closeDlg()">${t('close')}</button>`);
}
function colSet(k,on){const h=colHid().filter(z=>z!==k);if(!on)h.push(k);try{localStorage.setItem(COLK,JSON.stringify(h))}catch(e){}rList()}
function srt(k){sd=sk===k?-sd:-1;sk=k;rList()}
function rList(more){
  if(!$('tSum'))return; /* no trades yet: the page shows the welcome card instead of the table */
  if(more)tlim+=200;else tlim=100;
  const all=tradeFilter(),s=stats(all),l=all.slice(0,tlim);
  $('tSum').innerHTML=all.length?[t('n_tr',{n:`<b>${all.length}</b>`}),`${t('k_wr')} <b>${pc(s.wr)}</b>`,`${t('h_tot')} <b class="${cls(s.tot)}">${fr(s.tot)}</b>`,`PF <b>${pfTxt(s)}</b>`,`${t('k_exp')} <b>${fr(s.exp)}</b>`].concat(s.pnl!==null?[`PnL <b class="${cls(s.pnl)}">${money(s.pnl,1)}</b>`]:[]).map(x=>`<span>${x}</span>`).join(''):'';
  if(!l.length){$('tList').innerHTML=`<div class="empty">${fT().length?t('no_match'):t('per_empty')}</div>`;return}
  const moreBtn=all.length>l.length?`<div style="padding:14px;text-align:center"><button class="btn" onclick="rList(true)">${t('show_more',{n:all.length-l.length})}</button></div>`:'';
  const multi=scopeAccs().length>1,hid=colHid();
  const th=(k,lab,r)=>`<th class="${k?'s':''}${r?' r':''}" ${k?`onclick="srt('${k}')"`:''}>${lab}${sk===k?(sd>0?' ↑':' ↓'):''}</th>`;
  const C=TCOLS().filter(c=>(!c.opt||!hid.includes(c.k))&&(c.k!=='acc'||multi));
  const rows=l.map(x=>`<tr class="rw" onclick="openTrade(${x.id})">${C.map(c=>c.td(x)).join('')}</tr>`).join('');
  $('tList').innerHTML=`<div class="scroll tblwrap"><table><thead><tr>${C.map(c=>th(c.s,c.h,c.r)).join('')}</tr></thead><tbody>${rows}</tbody></table></div>
   <div class="tlist">${l.map(tradeCard).join('')}</div>${moreBtn}`;
}

/* ---- trade detail ---- */
function shotsH(chart){
  if(!chart)return '';
  return `<div class="shots">${chart.split('|||').map(u=>{if(!/^https?:\/\//i.test(u))return '';const m=u.match(/tradingview\.com\/x\/([A-Za-z0-9]+)/);
    const img=m?`https://s3.tradingview.com/snapshots/${m[1][0].toLowerCase()}/${m[1]}.png`:/\.(png|jpe?g|webp|gif)(\?|$)/i.test(u)?u:null;
    return img?`<a href="${esc(u)}" data-ext target="_blank" rel="noopener noreferrer"><img src="${esc(img)}" alt="" loading="lazy" onerror="this.parentNode.classList.add('lnk');this.parentNode.textContent=this.parentNode.href"></a>`:`<a class="lnk" href="${esc(u)}" data-ext target="_blank" rel="noopener noreferrer">${esc(u)}</a>`}).join('')}</div>`;
}
function openTrade(id){
  const x0=trades.find(z=>z.id===id);if(!x0)return;
  const a=accOf(x0.account),x=beFx(x0,a),pb=pbOf(x.setup);
  const f=(l,v)=>`<div>${l}<b>${v}</b></div>`;
  const facts=[f(t('h_setup'),esc(x.setup)||'—'),f(t('l_rr'),has(x.rr)?'1:'+x.rr:'—'),f(t('h_sess'),esc(x.kz)||'—'),f('Timeframe',esc(x.tf)||'—'),
    f(t('h_plan'),x.plan==='yes'?`<span class="pos">${t('plan_yes')}</span>`:x.plan==='no'?`<span class="neg">${t('plan_no')}</span>`:'—'),
    f(t('h_rating'),`<span style="color:var(--be)">${stars(x.rating)}</span>`)];
  if(has(x.mfe)||has(x.mae))facts.push(f('MFE / MAE',`${has(x.mfe)?fr(x.mfe):'—'} / ${has(x.mae)?fr(x.mae):'—'}`));
  if(S.accounts.length>1)facts.unshift(f(t('h_acc'),esc(accName(a))));
  if(has(x.entry))facts.push(f(t('d_px'),`${x.entry} → ${has(x.exit)?x.exit:'—'}`));
  if(has(x.lots))facts.push(f(t('d_lots'),x.lots));
  if(has(x.sl)||has(x.tp))facts.push(f('SL / TP',`${has(x.sl)?x.sl:'—'} / ${has(x.tp)?x.tp:'—'}`));
  if(x.ct)facts.push(f(t('d_close'),esc((x.ct.slice(0,10)===x.date?'':dFmt(x.ct.slice(0,10))+' ')+x.ct.slice(11))));
  const oc=x.outcome.toLowerCase();
  let h=`<div class="tdh ${oc}"><div class="tdh1"><span class="sym">${esc(x.symbol)}</span>${x.dir?`<span class="side-${x.dir[0].toLowerCase()}">${x.dir}</span>`:''}<span class="badge ${oc}">${t('o_'+x.outcome)}</span></div>
    <div class="tdh2"><div class="rv ${cls(x.rrActual)}">${x.rEst?'≈':''}${fr(x.rrActual)}</div>${has(x.pnl)?`<div class="pn ${cls(x.pnl)}">${money(x.pnl,1,a.cur)}</div>`:''}</div>
    <div class="tdh3">${esc(dFmt(x.date,{weekday:'long',day:'numeric',month:'long',year:'numeric'}))}${x.time?' · '+esc(x.time):''}</div>
    ${x.beAuto?`<div class="tdbe">${t('d_beauto',{v:money(a.be,0,a.cur)})}</div>`:''}</div>
   <div class="facts">${facts.join('')}</div>${x.rEst?`<p class="hint" style="margin-top:-6px">${t('d_rest')}</p>`:''}`;
  if(pb&&pb.rules.length)h+=`<div class="dsec"><h4>${t('d_rules',{k:esc(pb.name)})}</h4>${pb.rules.map(r=>`<div class="check" style="cursor:default"><span class="${x.rules.includes(r)?'pos':'neg'}" style="width:18px">${x.rules.includes(r)?'✓':'✕'}</span><span>${esc(r)}</span></div>`).join('')}</div>`;
  const chips=(a,fn,c)=>a.length?`<div class="chips">${a.map(v=>`<span class="chip" ${c?`style="color:var(--loss)"`:''}>${esc(fn(v))}</span>`).join('')}</div>`:'';
  if(x.mistakes.length||x.tags.length)h+=`<div class="dsec">${x.mistakes.length?`<h4>${t('l_mis')}</h4>${chips(x.mistakes,misL,1)}`:''}${x.tags.length?`<h4 style="margin-top:${x.mistakes.length?12:0}px">${t('l_tags')}</h4>${chips(x.tags,v=>'#'+v)}`:''}</div>`;
  if(x.shots&&x.shots.length&&typeof shotGrid==='function')h+=`<div class="dsec"><h4>${t('l_shots_img')}</h4>${shotGrid(x.shots)}</div>`;
  if(x.chart)h+=`<div class="dsec"><h4>${t('l_shots')}</h4>${shotsH(x.chart)}</div>`;
  if(x.notes)h+=`<div class="dsec"><h4>${t('l_notes')}</h4><div class="note">${esc(x.notes)}</div></div>`;
  setTimeout(()=>{if(typeof hydrateShots==='function')hydrateShots($('dBody'))},0);
  openDlg(t('d_title'),h,`<button class="btn dan ghost" onclick="delTrade(${x.id})">${t('del')}</button><button class="btn" onclick="dupTrade(${x.id})">${t('dup')}</button><button class="btn shb" onclick="shareSheet(${x.id})">${ic('share')}<span>${t('sh_btn')}</span></button><button class="btn pri" onclick="openForm(${x.id})">${t('edit')}</button>`,true,'ctr');
}

/* ---- share a trade as an image (Instagram story / square post) ---- */
const SHR={id:0,fmt:'story',money:true,blob:null,url:''};
function shareSheet(id){
  const x=trades.find(z=>z.id===id);if(!x)return;
  if(SHR.id!==id){SHR.id=id;SHR.money=true}
  const canNative=!!(navigator.canShare&&navigator.share);
  const link=typeof sbOn==='function'&&sbOn()&&typeof shareDlg==='function';
  openDlg(t('shs_title'),`<div class="shs">
    <div class="shsp ${SHR.fmt}"><img id="shsImg" alt="${t('shs_prev')}"><div class="shsl" id="shsLd"></div></div>
    <div class="shsc">
     <div class="seg shsf">${['story','square'].map(k=>`<button class="${SHR.fmt===k?'on':''}" onclick="SHR.fmt='${k}';shareSheet(${id})">${t('shs_'+k)}</button>`).join('')}</div>
     ${has(x.pnl)?`<label class="check"><input type="checkbox" ${SHR.money?'checked':''} onchange="SHR.money=this.checked;shsDraw()"><span>${t('shs_money')}<span class="hint" style="display:block">${t('shs_money_h')}</span></span></label>`:''}
     <div class="shsb">
      <button class="btn pri" id="shsGo" onclick="shsShare()">${ic(canNative?'share':'down')}<span>${t(canNative?'shs_share':'shs_dl')}</span></button>
      ${canNative?`<button class="btn" onclick="shsSave()">${ic('down')}<span>${t('shs_dl')}</span></button>`:''}
      ${link?`<button class="btn" onclick="shareDlg('trade','${x.id}')">${ic('link')}<span>${t('shs_link')}</span></button>`:''}
      <button class="btn ghost" onclick="openTrade(${x.id})">${t('shs_back')}</button>
     </div>
     <p class="hint">${t(canNative?'shs_h':'shs_h_pc')}</p></div></div>`,'',true,'ctr');
  shsDraw();
}
async function shsDraw(){
  const x=trades.find(z=>z.id===SHR.id);if(!x)return;
  SHR.blob=null;if($('shsLd'))$('shsLd').style.opacity=1;
  const c=await tradeImage(beFx(x),SHR.fmt,SHR.money);
  c.toBlob(b=>{SHR.blob=b;if(SHR.url)URL.revokeObjectURL(SHR.url);SHR.url=URL.createObjectURL(b);const im=$('shsImg');if(im){im.src=SHR.url;im.onload=()=>{if($('shsLd'))$('shsLd').style.opacity=0}}},'image/png');
}
const shsName=()=>{const x=trades.find(z=>z.id===SHR.id);return `tradelog-${x?x.symbol.toLowerCase().replace(/[^a-z0-9]/g,''):'trade'}-${x?x.date:''}.png`};
async function shsShare(){
  if(!SHR.blob){toast(t('shs_wait'));return}
  const f=new File([SHR.blob],shsName(),{type:'image/png'});
  if(navigator.canShare&&navigator.canShare({files:[f]})){try{await navigator.share({files:[f],title:'TradeLog'});hap('success')}catch(e){}return}
  shsSave();
}
function shsSave(){
  if(!SHR.blob){toast(t('shs_wait'));return}
  const a=document.createElement('a');a.href=SHR.url;a.download=shsName();document.body.appendChild(a);a.click();a.remove();toast(t('shs_saved'));
}
/* draws the card on a canvas: 1080×1920 story or 1080×1080 square */
async function tradeImage(x,fmt,showMoney){
  const W=1080,H=fmt==='story'?1920:1080,c=document.createElement('canvas');c.width=W;c.height=H;const g=c.getContext('2d');
  try{await Promise.all(['700 120px "Bricolage Grotesque"','600 40px Inter','500 40px Inter','600 200px "JetBrains Mono"'].map(f=>document.fonts.load(f)))}catch(e){}
  const a=accOf(x.account),oc=x.outcome,col=oc==='Win'?'#4ADE80':oc==='Loss'?'#F87171':'#FBBF24',glow=oc==='Win'?'74,222,128':oc==='Loss'?'248,113,113':'251,191,36';
  const FD='"Bricolage Grotesque",Inter,system-ui,sans-serif',FI='Inter,system-ui,sans-serif',FN='"JetBrains Mono",ui-monospace,Menlo,monospace';
  /* dim premium background: black, a soft glow in the result's colour and a teal glow from the brand */
  g.fillStyle='#030405';g.fillRect(0,0,W,H);
  const rg=(x0,y0,r,rgb,al)=>{const q=g.createRadialGradient(x0,y0,0,x0,y0,r);q.addColorStop(0,`rgba(${rgb},${al})`);q.addColorStop(1,`rgba(${rgb},0)`);g.fillStyle=q;g.fillRect(0,0,W,H)};
  rg(W*.78,H*.18,W*.95,glow,.30);rg(W*.08,H*.92,W*.9,'148,197,204',.16);rg(W*.5,H*.5,W*.6,'255,255,255',.025);
  g.strokeStyle='rgba(255,255,255,.035)';g.lineWidth=1;for(let i=1;i<12;i++){g.beginPath();g.moveTo(i*W/12,0);g.lineTo(i*W/12,H);g.stroke()}
  const rr=(x0,y0,w,h,r)=>{g.beginPath();g.moveTo(x0+r,y0);g.arcTo(x0+w,y0,x0+w,y0+h,r);g.arcTo(x0+w,y0+h,x0,y0+h,r);g.arcTo(x0,y0+h,x0,y0,r);g.arcTo(x0,y0,x0+w,y0,r);g.closePath()};
  const fit=(txt,font,size,max)=>{let s=size;do{g.font=font.replace('#',s);if(g.measureText(txt).width<=max)break;s-=4}while(s>20);return s};
  const P=88,st=fmt==='story';
  /* brand */
  let y=st?150:110;
  g.fillStyle='#94C5CC';rr(P,y-46,64,64,18);g.fill();g.strokeStyle='#000100';g.lineWidth=7;g.lineCap='round';
  [[P+19,y+2,y-10],[P+32,y+2,y-24],[P+45,y+2,y-32]].forEach(([bx,b0,b1])=>{g.beginPath();g.moveTo(bx,b0);g.lineTo(bx,b1);g.stroke()});
  g.fillStyle='#F8F8F8';g.font=`700 44px ${FD}`;g.textBaseline='alphabetic';g.fillText('TradeLog',P+84,y);
  g.fillStyle='rgba(248,248,248,.55)';g.font=`500 30px ${FI}`;g.textAlign='right';g.fillText(dFmt(x.date,{day:'numeric',month:'long',year:'numeric'}),W-P,y-6);g.textAlign='left';
  /* symbol and pills */
  y=st?560:330;
  fit(x.symbol,`700 #px ${FD}`,st?132:112,W-2*P);g.fillStyle='#F8F8F8';g.fillText(x.symbol,P,y);
  let px=P;const pill=(txt,fg,bg)=>{g.font=`600 32px ${FI}`;const w=g.measureText(txt).width+48;g.fillStyle=bg;rr(px,y+40,w,62,31);g.fill();g.fillStyle=fg;g.fillText(txt,px+24,y+82);px+=w+16};
  if(x.dir)pill(x.dir.toUpperCase(),x.dir==='Long'?'#4ADE80':'#F87171',x.dir==='Long'?'rgba(74,222,128,.14)':'rgba(248,113,113,.14)');
  pill(t('o_'+oc).toLocaleUpperCase(loc()),col,`rgba(${glow},.16)`);
  /* the result */
  y=st?980:640;
  const big=has(x.rrActual)?fr(x.rrActual):'—';
  const bs=fit(big,`600 #px ${FN}`,st?250:210,W-2*P);g.fillStyle=col;g.shadowColor=`rgba(${glow},.45)`;g.shadowBlur=60;g.fillText(big,P-8,y);g.shadowBlur=0;
  if(showMoney&&has(x.pnl)){g.fillStyle='rgba(248,248,248,.88)';g.font=`600 ${st?64:56}px ${FN}`;g.fillText(money(x.pnl,1,a.cur),P,y+(st?100:86))}
  /* details */
  const items=[[t('h_setup'),x.setup||'—'],[t('l_rr'),has(x.rr)?'1:'+x.rr:'—'],x.kz?[t('h_sess'),x.kz]:[t('l_time'),x.time||'—'],[t('h_plan'),x.plan==='yes'?t('plan_yes'):x.plan==='no'?t('plan_no'):'—']];
  if(st){
    const by=1250,bh=380;g.fillStyle='rgba(255,255,255,.045)';rr(P,by,W-2*P,bh,36);g.fill();g.strokeStyle='rgba(255,255,255,.08)';g.lineWidth=2;g.stroke();
    items.forEach(([k,v],i)=>{const cx=P+48+(i%2)*((W-2*P)/2),cy=by+92+Math.floor(i/2)*170;g.fillStyle='rgba(248,248,248,.5)';g.font=`500 30px ${FI}`;g.fillText(k,cx,cy);
      fit(v,`600 #px ${FI}`,44,(W-2*P)/2-80);g.fillStyle='#F8F8F8';g.fillText(v,cx,cy+60)});
  }else{
    const by=800;items.slice(0,3).forEach(([k,v],i)=>{const cx=P+i*((W-2*P)/3);g.fillStyle='rgba(248,248,248,.5)';g.font=`500 28px ${FI}`;g.fillText(k,cx,by);fit(v,`600 #px ${FI}`,40,(W-2*P)/3-24);g.fillStyle='#F8F8F8';g.fillText(v,cx,by+54)});
  }
  /* footer */
  g.fillStyle='rgba(248,248,248,.42)';g.font=`500 ${st?30:26}px ${FI}`;g.textAlign='center';g.fillText(t('shs_foot'),W/2,H-(st?110:70));g.textAlign='left';
  return c;
}

/* ---- trade form ---- */
let editId=null,fOut='',fPlan='',fRate=0,fEmo=[],fMis=[],fRules=[],fShots=[],fShots0=[],fShotsNew=[];
function openForm(id,preset){
  const x=id?trades.find(z=>z.id===id):null;if(id&&!x)return;
  closeDlg(true);editId=x?x.id:null;
  const last=trades[0],now=new Date();
  const d=x||Object.assign({date:day(),time:`${pad(now.getHours())}:${pad(now.getMinutes())}`,account:!multiView()&&!accOf(V.acc).arch?V.acc:last&&!accOf(last.account).arch?last.account:actAccs()[0].id,emotions:[],mistakes:[],tags:[],rules:[]},preset||{});
  fOut=d.outcome||'';fPlan=d.plan||'';fRate=d.rating||0;fEmo=[...(d.emotions||[])];fMis=[...(d.mistakes||[])];fRules=[...(d.rules||[])];
  const v=k=>esc(d[k]==null?'':d[k]);
  const dl=(id,a)=>`<datalist id="${id}">${a.map(z=>`<option value="${esc(z)}">`).join('')}</datalist>`;
  const setups=[...new Set([...PB.map(p=>p.name),...uniq('setup')])];
  const misAll=[...new Set([...MIS,...fMis])];
  $('fTitle').textContent=t(x?'f_edit':'f_new');
  /* the very first trade: say where we are and that two fields are enough */
  const firstT=!x&&!trades.length&&accReady();
  const multiAcc=actAccs().length>1;
  const when=(d.date===day()?t('today'):dFmt(d.date))+(d.time?' '+d.time:'');
  const cur=esc(accOf(d.account).cur);
  $('fBody').innerHTML=`${firstT?`<div class="ffirst"><span class="ffk">${t('first_k')}</span><b>${t('first_t')}</b><span>${t('first_d',{k:esc(accLabel(accOf(d.account)))})}</span></div>`:''}
  <div class="fsec"><div class="fgrid">
   <label class="fld"><span>${t('h_sym')}</span><input class="in" id="f_sym" list="dlSym" value="${v('symbol')}" placeholder="XAUUSD" autocomplete="off" autocapitalize="characters">${dl('dlSym',[...new Set([...uniq('symbol'),...SYMS])])}</label>
   <div class="fld"><span>${t('h_dir')}</span><div class="segf" id="f_dir">${['Long','Short'].map(o=>`<button type="button" class="${o==='Long'?'w':'l'}${d.dir===o?' on':''}" data-v="${o}" onclick="segPick('f_dir',this)">${o}</button>`).join('')}</div></div>
   ${multiAcc?`<label class="fld full"><span>${t('h_acc')}</span><select class="in" id="f_acc">${S.accounts.filter(a=>!a.arch||a.id===d.account).map(a=>opt(a.id,accLabel(a),d.account)).join('')}</select></label>`:`<input type="hidden" id="f_acc" value="${esc(d.account||actAccs()[0].id)}">`}
  </div></div>
  <div class="fsec"><h3>${t('fs_res')}</h3><div class="fgrid">
   <label class="fld"><span>${t('l_rra')}</span><input class="in" type="number" step="0.1" inputmode="decimal" id="f_rra" value="${v('rrActual')}" placeholder="${t('ph_rra')}" oninput="autoOut()"></label>
   <label class="fld"><span>${t('l_pnl')} <small class="mut">(${cur})</small></span><input class="in" type="number" step="any" inputmode="decimal" id="f_pnl" value="${v('pnl')}" placeholder="${t('ph_pnl')}" oninput="autoOut(1)"></label>
  </div><div class="segf" id="f_out" style="margin-top:10px">${[['Win','w'],['Loss','l'],['BE','b']].map(([o,c])=>`<button type="button" class="${c}${fOut===o?' on':''}" data-v="${o}" onclick="fOut=this.dataset.v;segOn('f_out',fOut)">${t('o_'+o)}</button>`).join('')}</div>
   <span class="hint" style="display:block;margin-top:8px">${t('r_hint2')}</span></div>
  <div class="fsec"><div class="fld"><span>${t('l_rr')}</span><div class="rrc" id="f_rrc">${RRS.map(r=>`<button type="button" class="chip${+d.rr===r?' on':''}" data-v="${r}" onclick="rrPick(this)">1:${String(r).replace('.',L==='tr'?',':'.')}</button>`).join('')}
    <label class="rrx${has(d.rr)&&!RRS.includes(+d.rr)?' on':''}"><span>1:</span><input type="number" step="0.1" min="0" inputmode="decimal" id="f_rr" value="${v('rr')}" placeholder="${t('rr_other')}" oninput="rrMark()" aria-label="${t('l_rr')}"></label></div>
   <span class="hint">${t('rr_hint2')}</span></div></div>
  <div class="fsec"><label class="fld"><span>${t('h_setup')}</span><input class="in" id="f_setup" list="dlSetup" value="${v('setup')}" placeholder="${t('ph_setup')}" autocomplete="off" oninput="rulesBox()">${dl('dlSetup',setups)}</label></div>
  <div class="fsec" id="f_rulesSec"></div>
  <div class="fsec">
   <div class="fld"><span>${t('l_plan')}</span><div class="segf" id="f_plan"><button type="button" class="w${fPlan==='yes'?' on':''}" data-v="yes" onclick="fPlan=fPlan==='yes'?'':'yes';segOn('f_plan',fPlan)">${t('yes')}</button><button type="button" class="l${fPlan==='no'?' on':''}" data-v="no" onclick="fPlan=fPlan==='no'?'':'no';segOn('f_plan',fPlan)">${t('no')}</button></div></div>
   <div class="fld" style="margin-top:14px"><span>${t('l_mis_q')}</span><div class="chips" id="f_mis">${misAll.map(k=>`<button type="button" class="chip${fMis.includes(k)?' on':''}" data-k="${esc(k)}" onclick="tgl(fMis,this)">${esc(misL(k))}</button>`).join('')}</div></div>
  </div>
  <div class="fsec">
   <label class="fld"><span>${t('l_notes')}</span><textarea class="in" id="f_notes" style="min-height:70px" placeholder="${t('ph_notes')}">${v('notes')}</textarea></label>
   ${TG?'':`<div class="fld" style="margin-top:14px"><span>${t('l_shots_img')}</span><div class="shotw" id="f_shots"></div></div>`}
  </div>
  <details class="more"${x?' open':''}><summary>${t('fs_more')} <span class="mut" style="font-weight:400">· ${esc(when)}</span></summary><div class="fgrid">
   <label class="fld"><span>${t('h_date')}</span><input class="in" type="date" id="f_date" value="${v('date')}"></label>
   <label class="fld"><span>${t('l_time')}</span><input class="in" type="time" id="f_time" value="${v('time')}"></label>
   <label class="fld"><span>${t('l_sess')}</span><input class="in" id="f_kz" list="dlSess" value="${v('kz')}" autocomplete="off">${dl('dlSess',[...new Set([...SESS,...uniq('kz')])])}</label>
   <label class="fld"><span>Timeframe</span><select class="in" id="f_tf">${opt('','—',d.tf)}${[...new Set([...TF,...(d.tf?[d.tf]:[])])].map(z=>opt(z,z,d.tf)).join('')}</select></label>
   <div class="fld full"><span>${t('l_rating')}</span><div class="stars" id="f_rate">${[1,2,3,4,5].map(i=>`<button type="button" aria-label="${i}" class="${i<=fRate?'on':''}" onclick="fRate=fRate===${i}?0:${i};rateOn()">★</button>`).join('')}</div><span class="hint">${t('rating_hint')}</span></div>
   <label class="fld"><span>MFE (R)</span><input class="in" type="number" step="0.1" min="0" inputmode="decimal" id="f_mfe" value="${v('mfe')}"><span class="hint">${t('mfe_h')}</span></label>
   <label class="fld"><span>MAE (R)</span><input class="in" type="number" step="0.1" inputmode="decimal" id="f_mae" value="${has(d.mae)?Math.abs(d.mae):''}"><span class="hint">${t('mae_h')}</span></label>
   <label class="fld full"><span>${t('l_tags')}</span><input class="in" id="f_tags" value="${esc((d.tags||[]).join(', '))}" placeholder="${t('ph_tags')}" list="dlTags">${dl('dlTags',uniq('tags'))}</label>
   <label class="fld full"><span>${t('l_shots')}</span><textarea class="in" id="f_chart" style="min-height:60px" placeholder="https://www.tradingview.com/x/...">${esc((d.chart||'').split('|||').join('\n'))}</textarea><span class="hint">${t('shots_h')}</span></label>
  </div></details>`;
  $('fDel').style.display=x?'':'none';$('fDel').textContent=t('del');$('fSave').textContent=t('save');
  fShots=((x&&x.shots)||[]).slice();fShots0=fShots.slice();fShotsNew=[];if(typeof shotsForm==='function')shotsForm();
  rulesBox();
  $('formOv').classList.add('on');$('formOv').scrollTop=0;document.body.style.overflow='hidden';tgUI();
  if(!TG&&!x)setTimeout(()=>$('f_sym').focus(),60);
}
function closeForm(){if(fShotsNew.length&&typeof shotRemove==='function'){shotRemove(fShotsNew);fShotsNew=[]}$('formOv').classList.remove('on');editId=null;if(!dlgOpen())document.body.style.overflow='';tgUI()}
function segPick(id,b){const on=!b.classList.contains('on');$(id).querySelectorAll('button').forEach(z=>z.classList.remove('on'));if(on)b.classList.add('on')}
function segOn(id,v){$(id).querySelectorAll('button').forEach(z=>z.classList.toggle('on',z.dataset.v===v))}
function rateOn(){$('f_rate').querySelectorAll('button').forEach((b,i)=>b.classList.toggle('on',i<fRate))}
function tgl(a,b){const k=b.dataset.k,i=a.indexOf(k);if(i<0)a.push(k);else a.splice(i,1);b.classList.toggle('on',i<0);hap('tap')}
/* the outcome follows the result: R first; P&L when there is no R (inside the account's breakeven range it's breakeven) */
function autoOut(fromPnl){
  const r=num($('f_rra').value),p=num($('f_pnl').value),a=accOf($('f_acc').value);
  let o='';if(p!==null&&a.be>0&&Math.abs(p)<=a.be)o='BE';else if(r!==null&&!(fromPnl&&p!==null&&r===0))o=r>0?'Win':r<0?'Loss':'BE';else if(p!==null)o=p>0?'Win':p<0?'Loss':'BE';
  if(o){fOut=o;segOn('f_out',fOut)}
}
const RRS=[1,1.5,2,3,4,5];
function rrPick(b){const on=!b.classList.contains('on');$('f_rr').value=on?b.dataset.v:'';rrMark();hap('tap')}
function rrMark(){const v=num($('f_rr').value);$('f_rrc').querySelectorAll('.chip').forEach(c=>c.classList.toggle('on',v!==null&&+c.dataset.v===v));$('f_rrc').querySelector('.rrx').classList.toggle('on',v!==null&&!RRS.includes(v))}
function rulesBox(){
  const p=pbOf($('f_setup').value.trim()),el=$('f_rulesSec');
  if(!p||!p.rules.length){el.style.display='none';el.innerHTML='';return}
  el.style.display='';
  el.innerHTML=`<h3>${t('fs_rules')}<small>${esc(p.name)}</small></h3>${p.rules.map((r,i)=>`<label class="check"><input type="checkbox" data-r="${i}" ${fRules.includes(r)?'checked':''} onchange="ruleT(${i},this.checked)"><span>${esc(r)}</span></label>`).join('')}`;
}
function ruleT(i,on){const p=pbOf($('f_setup').value.trim());if(!p)return;const r=p.rules[i];fRules=fRules.filter(z=>z!==r);if(on)fRules.push(r)}
function saveTrade(){
  const g=id=>$(id).value,dirB=$('f_dir').querySelector('.on');
  const ra=num(g('f_rra'));if(!fOut&&ra!==null)fOut=ra>0?'Win':ra<0?'Loss':'BE';
  const setup=g('f_setup').trim(),p=pbOf(setup);
  const raw={id:editId||uid(),date:g('f_date'),time:g('f_time'),symbol:g('f_sym'),dir:dirB?dirB.dataset.v:'',account:g('f_acc'),setup,kz:g('f_kz'),tf:g('f_tf'),
    rr:g('f_rr'),rrActual:ra,pnl:g('f_pnl'),mfe:g('f_mfe'),mae:g('f_mae'),plan:fPlan,outcome:fOut,rating:fRate,
    emotions:fEmo,mistakes:fMis,tags:g('f_tags'),rules:p?fRules.filter(r=>p.rules.includes(r)):[],
    chart:g('f_chart').split('\n').map(s=>s.trim()).filter(Boolean).join('|||'),notes:g('f_notes'),shots:fShots.slice()};
  if(!raw.symbol.trim()||!raw.date||!fOut){hap('error');say(t('req'));return}
  const o=norm(raw);if(!o){hap('error');say(t('req'));return}
  if(editId){const i=trades.findIndex(z=>z.id===editId);if(i>=0){const e=norm({...trades[i],...raw,rev:true,rEst:trades[i].rEst&&raw.rrActual===trades[i].rrActual});e.demo=trades[i].demo;trades[i]=e}}else trades.push(o);
  if(typeof shotRemove==='function')shotRemove(fShots0.filter(p=>!fShots.includes(p)));fShotsNew=[];
  sortT();saveTrades();closeForm();render();hap('success');toast(t('saved'));
}
function dupTrade(id){const x=trades.find(z=>z.id===id);if(!x)return;const now=new Date();openForm(null,{...x,id:null,ext:'',rev:true,lots:null,entry:null,exit:null,sl:null,tp:null,ct:'',rEst:false,shots:[],date:day(),time:`${pad(now.getHours())}:${pad(now.getMinutes())}`,rrActual:null,pnl:null,outcome:'',mfe:null,mae:null,notes:'',chart:'',rating:null,demo:false})}
async function delTrade(id){if(!id||!await ask(t('confirm_del')))return;const gone=trades.find(x=>x.id===id);trades=trades.filter(x=>x.id!==id);if(gone&&gone.shots&&typeof shotRemove==='function')shotRemove(gone.shots.filter(p=>!fShotsNew.includes(p)));saveTrades();closeForm();closeDlg(true);render();hap('warning');toast(t('deleted'))}

/* ---- reports ---- */
function gTable(title,groups,lab,o={}){
  if(!groups.length)return `<div class="card"><div class="ch"><h2>${esc(title)}</h2></div><div class="empty">${t('no_data')}</div></div>`;
  const rows=[...groups].sort(o.order?(a,b)=>a.k-b.k:o.cost?(a,b)=>a.s.tot-b.s.tot:(a,b)=>b.s.tot-a.s.tot||b.s.n-a.s.n);
  const mx=Math.max(1e-9,...rows.map(r=>Math.abs(r.s.tot)));
  return `<div class="card"><div class="ch"><h2>${esc(title)}</h2>${o.sub?`<small>${esc(o.sub)}</small>`:''}</div><div class="cb scroll" style="padding-top:6px"><table><thead><tr><th>${esc(o.col||title)}</th><th class="r">${t('h_trades')}</th><th class="r">${t('wr_s')}</th><th class="r">${t('h_tot')}</th><th class="r mh">${t('h_avg')}</th>${o.extra?`<th class="r">${o.extra[0]}</th>`:''}<th class="mh" style="width:22%"></th></tr></thead><tbody>
   ${rows.map(r=>`<tr><td>${esc(lab?lab(r.k):r.k)}</td><td class="r">${r.s.n}</td><td class="r">${pc(r.s.wr)}</td><td class="r ${cls(r.s.tot)}" style="font-weight:600">${r.s.hasR?fr(r.s.tot):'—'}</td><td class="r mh">${fr(r.s.exp)}</td>${o.extra?`<td class="r">${o.extra[1](r)}</td>`:''}<td class="mh"><div class="gbar ${r.s.tot<0?'n':'p'}" style="width:${(Math.abs(r.s.tot)/mx*100).toFixed(1)}%"></div></td></tr>`).join('')}
  </tbody></table></div></div>`;
}
function statList(rows){return `<div>${rows.map(([a,b,c],i)=>`<div class="srow" style="--n:${i}"><span class="t">${a}</span><span style="font-weight:600" class="${c||''}">${b}</span></div>`).join('')}</div>`}
function vRep(){
  if(!trades.length)return emptyView('rep');
  const l=fT();
  const tabs=`<div class="seg" style="margin-bottom:16px">${['ov','week','time','setup','psy','dist'].map(k=>`<button class="${rt===k?'on':''}" onclick="rt='${k}';render();viewIn()">${t('rt_'+k)}</button>`).join('')}</div>`;
  if(rt==='week')return tabs+vWeek();
  if(!l.length)return tabs+`<div class="card empty">${t('per_empty')}</div>`;
  const s=stats(l);let h='';
  if(rt==='ov'){
    const months=groupBy(l,x=>x.date.slice(0,7)).sort((a,b)=>b.k.localeCompare(a.k));
    h=`<div class="g2e"><div class="card"><div class="ch"><h2>${t('c_score')}</h2></div><div class="cb">${scoreBlock(score(l))}<p class="hint" style="margin-top:12px">${t('score_h')}</p></div></div>
    <div class="card"><div class="ch"><h2>${t('c_stats')}</h2></div><div class="cb">${statList([
      [t('h_trades'),`${s.n} <span class="mut" style="font-weight:400">(${t('kpi_wl',{w:s.w,l:s.ls,b:s.be?t('kpi_be',{n:s.be}):''})})</span>`],[t('h_tot'),fr(s.tot),cls(s.tot)],[t('k_wr'),pc(s.wr)],[t('k_pf'),pfTxt(s)],[t('k_exp'),fr(s.exp),cls(s.exp)],
      [t('st_aw'),fr(s.aw),'pos'],[t('st_al'),s.al!==null?fr(-s.al):'—','neg'],[t('k_rr'),s.real!==null?s.real.toFixed(2):'—'],[t('st_tgt'),s.tgt!==null?s.tgt.toFixed(2)+'R':'—'],
      [t('st_best'),fr(s.best),'pos'],[t('st_worst'),fr(s.worst),'neg'],[t('k_dd'),fr(-s.dd),'neg'],[t('st_streak'),`${s.mw} / ${s.ms}`],
      [t('st_days'),`${s.days} <span class="mut" style="font-weight:400">(${t('st_green',{p:pc(s.dayWin)})})</span>`],[t('k_plan'),pc(s.plan)],['PnL',s.pnl!==null?money(s.pnl,1):'—',cls(s.pnl)]])}</div></div></div>
    <div style="margin-top:16px">${gTable(t('r_month'),months,k=>new Date(k+'-15').toLocaleDateString(loc(),{month:'long',year:'numeric'}),{col:t('h_month')})}</div>`;
  }else if(rt==='time'){
    const hr=l.filter(x=>x.time);
    h=`<div class="g2e">${gTable(t('r_wd'),groupBy(l,x=>wdi(x.date)),k=>wdName(+k),{order:1})}${hr.length?gTable(t('r_hour'),groupBy(hr,x=>+x.time.slice(0,2)),k=>`${pad(k)}:00–${pad((+k+1)%24)}:00`,{order:1}):`<div class="card"><div class="ch"><h2>${t('r_hour')}</h2></div><div class="empty">${t('hour_need')}</div></div>`}
     ${gTable(t('r_sess'),groupBy(l,x=>x.kz))}${gTable('Timeframe',groupBy(l,x=>x.tf))}</div>`;
  }else if(rt==='setup'){
    const adh=r=>{const p=pbOf(r.k);if(!p||!p.rules.length)return '—';const a=r.l.map(x=>x.rules.filter(z=>p.rules.includes(z)).length/p.rules.length*100);return pc(avg(a))};
    h=`<div class="stack">${gTable(t('h_setup'),groupBy(l,x=>x.setup),null,{extra:[t('h_adh'),adh]})}<div class="g2e">${gTable(t('h_sym'),groupBy(l,x=>x.symbol))}${gTable(t('h_dir'),groupBy(l,x=>x.dir))}
     ${scopeAccs().length>1?gTable(t('h_acc'),groupBy(rawAcc(trades).filter(x=>!perStart(V.per)||x.date>=perStart(V.per)),x=>x.account),k=>accName(accOf(k))):''}${gTable(t('l_tags'),groupBy(l,x=>x.tags),k=>'#'+k)}</div></div>`;
  }else if(rt==='psy'){
    const d=discipline(),mt=l.filter(x=>x.mistakes.length&&has(x.rrActual)),clean=l.filter(x=>!x.mistakes.length);
    h=`<div class="g2e"><div class="card"><div class="ch"><h2>${t('c_disc')}</h2></div><div class="cb">${statList([
      [t('ds_today'),fr(d.todayR)+(S.day>0?` <span class="mut" style="font-weight:400">/ −${S.day}R</span>`:''),S.day>0&&d.todayR<=-S.day?'neg':cls(d.todayR)],
      [t('ds_streak'),`${d.streak}${S.str>0?` <span class="mut" style="font-weight:400">/ ${S.str}</span>`:''}`,S.str>0&&d.streak>=S.str?'neg':''],
      [t('ds_over'),d.overDays===null?t('off'):d.overDays,d.overDays?'neg':''],[t('ds_overT'),d.overTDays===null?t('off'):d.overTDays,d.overTDays?'neg':''],
      [t('k_plan'),pc(s.plan)],[t('ds_leak'),mt.length?fr(sum(mt.map(x=>x.rrActual))):'—',mt.length?'neg':''],[t('ds_clean'),fr(stats(clean).exp),cls(stats(clean).exp)]])}
      <p class="hint" style="margin-top:10px">${t('ds_h')}</p></div></div>
     ${gTable(t('a_plan'),groupBy(l,x=>x.plan),k=>k==='yes'?t('plan_yes'):t('plan_no'))}
     ${gTable(t('r_mis'),groupBy(l,x=>x.mistakes),misL,{cost:1,sub:t('r_mis_s')})}
     ${gTable(t('h_rating'),groupBy(l,x=>x.rating),k=>'★'.repeat(+k),{order:1})}</div>`;
  }else{
    const rs=l.filter(x=>has(x.rrActual)).map(x=>x.rrActual);
    const B=[['≤ −2R',x=>x<=-2],['−2R … −1R',x=>x>-2&&x<=-1],['−1R … 0',x=>x>-1&&x<0],['0 (BE)',x=>x===0],['0 … 1R',x=>x>0&&x<=1],['1R … 2R',x=>x>1&&x<=2],['2R … 3R',x=>x>2&&x<=3],['3R … 5R',x=>x>3&&x<=5],['> 5R',x=>x>5]];
    const c=B.map(([lb,f],i)=>[lb,rs.filter(f).length,i]),mx=Math.max(1,...c.map(x=>x[1]));
    const hist=c.map(([lb,n,i])=>`<div style="display:grid;grid-template-columns:96px 1fr 34px;gap:10px;align-items:center;margin:7px 0;font-size:13px"><span class="mut">${lb}</span><div class="gbar ${i<3?'n':'p'}" style="width:${(n/mx*100).toFixed(1)}%;${i===3?'background:var(--be)':''}"></div><span class="r">${n}</span></div>`).join('');
    const wm=l.filter(x=>x.outcome==='Win'&&x.mfe>0&&has(x.rrActual)),lm=l.filter(x=>x.outcome==='Loss'&&has(x.mfe)),am=l.filter(x=>has(x.mae));
    const tg=l.filter(x=>x.outcome==='Win'&&has(x.rr)&&has(x.rrActual));
    h=`<div class="g2e"><div class="card"><div class="ch"><h2>${t('r_hist')}</h2></div><div class="cb">${hist}</div></div>
     <div class="card"><div class="ch"><h2>${t('r_exit')}</h2></div><div class="cb">${statList([
      [t('x_cap'),wm.length?pc(avg(wm.map(x=>clamp(x.rrActual/x.mfe*100,0,100)))):'—'],[t('x_left'),wm.length?fr(sum(wm.map(x=>Math.max(0,x.mfe-x.rrActual)))):'—'],
      [t('x_lmfe'),lm.length?fr(avg(lm.map(x=>x.mfe))):'—'],[t('x_lmfe1'),lm.length?`${lm.filter(x=>x.mfe>=1).length} / ${lm.length}`:'—'],
      [t('x_mae'),am.length?fr(avg(am.map(x=>x.mae))):'—'],[t('x_tgt'),tg.length?pc(tg.filter(x=>x.rrActual>=x.rr).length/tg.length*100):'—']])}
      <p class="hint" style="margin-top:10px">${t('x_h')}</p></div></div></div>`;
  }
  return tabs+h;
}

/* ---- weekly summary ----
   TradeZella'nın "weekly recap"i ve Tradervue'nun haftalık raporu gibi: hafta seçilir,
   geçen haftayla karşılaştırılır, kurallara dayalı 1-3 öneri çıkar, haftanın notu yazılır. */
const wkRange=(m,e)=>`${dFmt(m)} – ${dFmt(e,{day:'numeric',month:'short',year:'numeric'})}`;
const wkLbl=m=>m===wkOf(day())?t('wk_this'):m===wkAdd(wkOf(day()),-7)?t('wk_prev'):'';
const dlt=(a,b,f)=>a==null||b==null?'':(a-b>0?'+':a-b<0?'−':'±')+f(Math.abs(a-b));
function wkBars(days){
  const mx=Math.max(.01,...days.map(x=>Math.abs(x.r)));
  return `<div class="wkdays">${days.map((x,i)=>`<div class="wkd${x.d===day()?' td':''}"><div class="bx">${x.n?`<b class="${x.r>0?'u':x.r<0?'d':'z'}" style="height:${(Math.max(2,Math.abs(x.r)/mx*50)).toFixed(1)}%"></b>`:''}</div><span class="wn">${wdName(i,'short')}</span><span class="wr ${cls(x.r)}">${x.n?fr(x.r):'·'}</span></div>`).join('')}</div>`;
}
function vWeek(){
  if(!wk)wk=wkLast();
  const w=wkData(wk),s=w.s,p=w.p,cur=wkOf(day()),lb=wkLbl(wk);
  const nav=`<div class="card wkhead"><div class="wkt"><h2>${esc(wkRange(w.m,w.e))}</h2>${lb?`<span class="tag">${lb}</span>`:''}</div>
   <div class="wkn"><button class="btn sm" onclick="wk=wkAdd(wk,-7);render()" aria-label="${t('wk_prev')}">‹</button>${wk!==cur?`<button class="btn sm" onclick="wk=wkOf(day());render()">${t('wk_this')}</button>`:''}<button class="btn sm" onclick="wk=wkAdd(wk,7);render()" ${wk>=cur?'disabled':''} aria-label="next">›</button>
   ${s.n&&typeof sbOn==='function'&&sbOn()?`<button class="btn sm" onclick="shareDlg('week',wk)">${ic('link')}${t('sh_btn')}</button>`:''}${s.n?`<button class="btn sm pri" onclick="wkCopy()">${ic('copy')}${t('wk_copy')}</button>`:''}</div></div>`;
  if(!s.n)return `<div class="stack">${nav}<div class="card empty">${t('wk_empty')}${p.n?`<div style="margin-top:12px"><button class="btn" onclick="wk=wkAdd(wk,-7);render()">${t('wk_go_prev')}</button></div>`:''}</div></div>`;
  const vs=(txt)=>p.n?t('wk_vs',{x:txt}):t('wk_vs_none');
  const kp=[[t('k_exp'),fr(s.exp),vs(fr(p.exp)),cls(s.exp)],[t('h_trades'),s.n,vs(p.n),''],
    [t('k_wr'),pc(s.wr),vs(pc(p.wr)),''],[t('k_pf'),pfTxt(s),vs(pfTxt(p)),s.pf===null?'':s.pf>=1?'pos':'neg'],
    [t('wk_green'),`${w.green} / ${w.act.length}`,t('wk_days_n',{n:w.act.length}),''],[t('k_plan'),pc(s.plan),p.n?vs(pc(p.plan)):t('k_plan_s2'),s.plan===null?'':s.plan>=80?'pos':'neu']];
  const delta=p.n&&s.hasR&&p.hasR?`<span class="wkdl">${t('wk_dl',{x:`<b class="${cls(s.tot-p.tot)}">${dlt(s.tot,p.tot,v=>fr(v).replace(/^[+−]/,''))}</b>`})}</span>`:'';
  const top=`<div class="card"><div class="wktop"><div><div class="lbl">${t('wk_net')}</div><div class="big ${cls(s.tot)}">${s.hasR?fr(s.tot):'—'}</div>
     <div class="hfacts"><span><b>${s.n}</b> ${t('trades_l')}</span>${s.pnl!==null?`<span>PnL <b class="${cls(s.pnl)}">${money(s.pnl,1)}</b></span>`:''}${delta}</div></div>${wkBars(w.days)}</div>
   <div class="kpis" style="padding-bottom:20px">${kp.map(([a,b,c,d])=>`<div class="kpi"><div class="l">${a}</div><div class="v ${d}">${b}</div><div class="s">${c}</div></div>`).join('')}</div></div>`;
  const tr=x=>x?`${esc(x.symbol)} <span class="${cls(x.rrActual)}">${fr(x.rrActual)}</span> <span class="mut" style="font-weight:400">· ${esc(dFmt(x.date,{weekday:'short'}))}</span>`:'—';
  const dy=x=>x?`${esc(dFmt(x.d,{weekday:'long'}))} <span class="${cls(x.r)}">${fr(x.r)}</span>`:'—';
  const hi=`<div class="card"><div class="ch"><h2>${t('wk_hi')}</h2></div><div class="cb">${statList([
    [t('wk_best_t'),tr(w.bestT)],[t('wk_worst_t'),tr(w.worstT)],[t('wk_best_d'),dy(w.bestD)],[t('wk_worst_d'),dy(w.worstD)],
    [t('wk_best_s'),w.setup?`${esc(w.setup.k)} <span class="pos">${fr(w.setup.s.tot)}</span>`:'—'],[t('wk_mis'),w.mis!==null?fr(w.mis):'—',w.mis<0?'neg':''],
    [t('wk_jr'),`${w.jd} / ${w.act.length}`]])}</div></div>`;
  const fc=`<div class="card"><div class="ch"><h2>${t('wk_focus')}</h2><small>${typeof proDlg==='function'?`<button class="prolink" onclick="coOpen(t('co_q_week'))">${t('ai_ask')} <span class="soon">Pro</span></button>`:t('wk_focus_s')}</small></div><div class="cb">${w.focus.length?w.focus.map(([k,x])=>`<div class="ins ${k}"><i></i><div>${esc(x)}</div></div>`).join(''):`<div class="mut" style="font-size:14px">${t('wk_focus_none')}</div>`}</div></div>`;
  const n=JR[wkNoteK(wk)]||{};
  const note=`<div class="card"><div class="ch"><h2>${t('wk_note')}</h2><small>${t('wk_note_s')}</small></div><div class="cb"><textarea class="in" id="wk_note" style="min-height:96px" placeholder="${t('wk_note_ph')}">${esc(n.r||'')}</textarea>
   <div style="margin-top:12px;display:flex;justify-content:flex-end"><button class="btn pri" onclick="wkNoteSave()">${t('wk_note_save')}</button></div></div></div>`;
  return `<div class="stack">${nav}${top}<div class="g2e">${fc}${hi}</div>${note}</div>`;
}
function wkNoteSave(){const v=$('wk_note').value.trim(),k=wkNoteK(wk);if(v)JR[k]={r:v};else if(JR[k])delete JR[k];else return;saveJR();hap('success');toast(t('saved'));render()}
function wkText(){
  const w=wkData(wk),s=w.s,p=w.p,L2=[];
  L2.push(`TradeLog · ${t('wk_t')}`,`${wkRange(w.m,w.e)} · ${scopeAccs().length>1?t('acc_all'):accLabel(scopeAccs()[0]||S.accounts[0])}`,'');
  L2.push(`${t('wk_net')}: ${fr(s.tot)}${s.pnl!==null?` (${money(s.pnl,1)})`:''} · ${t('n_tr',{n:s.n})} · ${t('k_wr')} ${pc(s.wr)} · ${t('k_pf')} ${pfTxt(s)}`);
  if(p.n)L2.push(`${t('wk_vs_t')}: ${fr(p.tot)} · ${t('n_tr',{n:p.n})}`);
  L2.push(`${t('wk_green')}: ${w.green} / ${w.act.length} · ${t('k_plan')}: ${pc(s.plan)}`);
  L2.push(w.days.filter(x=>x.n).map(x=>`${dFmt(x.d,{weekday:'short'})} ${fr(x.r)}`).join(' · '));
  if(w.bestT)L2.push(`${t('wk_best_t')}: ${w.bestT.symbol} ${fr(w.bestT.rrActual)}`);
  if(w.worstT)L2.push(`${t('wk_worst_t')}: ${w.worstT.symbol} ${fr(w.worstT.rrActual)}`);
  if(w.setup)L2.push(`${t('wk_best_s')}: ${w.setup.k} ${fr(w.setup.s.tot)}`);
  if(w.focus.length){L2.push('',t('wk_focus')+':');w.focus.forEach(([,x])=>L2.push('• '+x))}
  const n=JR[wkNoteK(wk)];if(n&&n.r)L2.push('',t('wk_note')+':',n.r);
  return L2.join('\n');
}
function wkCopy(){showTxt(t('wk_copy'),t('wk_copy_h'),wkText(),t('copy'))}
/* dashboard card: this week (or the latest week with trades) at a glance */
function weekCard(){
  const m=wkLast(),w=wkData(m),s=w.s,p=w.p;if(!s.n)return '';
  const lb=wkLbl(m)||wkRange(w.m,w.e),f=w.focus.find(x=>x[0]!=='info')||w.focus[0];
  return `<div class="card o6 wkc" data-tour="week"><div class="ch"><h2>${t('wk_t')}</h2><small>${esc(lb)}</small></div><div class="cb">
   <div class="wkcr"><div><div class="v ${cls(s.tot)}">${s.hasR?fr(s.tot):'—'}</div><div class="hint">${t('wk_card_s',{n:s.n,w:pc(s.wr)})}${p.n&&s.hasR&&p.hasR?` · ${t('wk_dl',{x:`<span class="${cls(s.tot-p.tot)}">${dlt(s.tot,p.tot,v=>fr(v).replace(/^[+−]/,''))}</span>`})}`:''}</div></div>${wkBars(w.days)}</div>
   ${f?`<div class="ins ${f[0]}"><i></i><div>${esc(f[1])}</div></div>`:''}
   <button class="btn sm" style="margin-top:12px" onclick="wk='${m}';rt='week';go('rep')">${t('wk_open')}${ic('arrow')}</button></div></div>`;
}

/* ---- calendar ---- */
function vCal(){
  const y=cm.getFullYear(),m=cm.getMonth(),first=new Date(y,m,1),dim=new Date(y,m+1,0).getDate(),off=(first.getDay()+6)%7;
  const mp=`${y}-${pad(m+1)}`,by={},l=byAcc(trades).filter(x=>x.date.startsWith(mp)),td=day();
  l.forEach(x=>{const o=by[x.date]=by[x.date]||{r:0,n:0,p:null};o.n++;if(has(x.rrActual))o.r+=x.rrActual;if(has(x.pnl))o.p=(o.p||0)+x.pnl});
  const s=stats(l),dv=Object.values(by),mxa=Math.max(1,...dv.map(o=>Math.abs(o.r)));
  let h=[0,1,2,3,4,5,6].map(i=>`<div class="dow">${wdName(i,'short')}</div>`).join('')+`<div class="dow">${t('week')}</div>`;
  const cells=[];for(let i=0;i<off;i++)cells.push(null);for(let d=1;d<=dim;d++)cells.push(d);while(cells.length%7)cells.push(null);
  for(let w=0;w<cells.length/7;w++){
    let wr=0,wn=0;
    for(let i=0;i<7;i++){const d=cells[w*7+i];
      if(!d){h+='<div class="cd blank"></div>';continue}
      const k=`${mp}-${pad(d)}`,o=by[k];
      if(o){wr+=o.r;wn+=o.n}
      const a=o?Math.round(10+Math.abs(o.r)/mxa*26):0;
      const bg=o?(o.r>0?`background:var(--wins);background:color-mix(in srgb,var(--win) ${a}%,var(--sf))`:o.r<0?`background:var(--losss);background:color-mix(in srgb,var(--loss) ${a}%,var(--sf))`:'background:var(--bes)'):'';
      h+=`<button class="cd${o?' hit':''}${k===td?' today':''}" style="${bg}" ${o||k<=td?`onclick="dayDlg('${k}')"`:'disabled'}><span>${d}</span>${o?`<span class="rv ${o.r>0?'pos':o.r<0?'neg':'neu'}">${fr(o.r)}</span><span class="n2">${t('n_tr',{n:o.n})}</span>`:''}</button>`}
    h+=`<div class="cd wk"><span class="wl">${t('week')} ${w+1}</span>${wn?`<span class="rv ${cls(wr)}">${fr(wr)}</span><span class="n2">${t('n_tr',{n:wn})}</span>`:''}</div>`;
  }
  return (trades.length?'':emptyView('cal'))+`<div class="card"><div class="calhead"><h2>${first.toLocaleDateString(loc(),{month:'long',year:'numeric'})}</h2><button class="btn sm" onclick="cm=new Date(cm.getFullYear(),cm.getMonth()-1,1);render()" aria-label="prev">‹</button><button class="btn sm" onclick="cm=new Date();render()">${t('today')}</button><button class="btn sm" onclick="cm=new Date(cm.getFullYear(),cm.getMonth()+1,1);render()" aria-label="next">›</button></div>
   <div class="calsum"><span>${t('h_tot')} <b class="${cls(s.tot)}">${s.hasR?fr(s.tot):'—'}</b></span>${s.pnl!==null?`<span>PnL <b class="${cls(s.pnl)}">${money(s.pnl,1)}</b></span>`:''}<span>${t('st_days')} <b>${dv.length}</b></span><span>${t('green_days')} <b>${dv.filter(o=>o.r>0).length}</b></span><span>${t('k_wr')} <b>${pc(s.wr)}</b></span></div>
   <div class="cb"><div class="calg">${h}</div></div></div>`;
}
function dayDlg(k){
  const l=byAcc(trades).filter(x=>x.date===k),s=stats(l),j=JR[k];
  let h=`<div class="calsum" style="padding:14px 0 6px"><span>${t('h_tot')} <b class="${cls(s.tot)}">${fr(s.tot)}</b></span><span>${t('n_tr',{n:`<b>${s.n}</b>`})}</span>${s.pnl!==null?`<span>PnL <b class="${cls(s.pnl)}">${money(s.pnl,1)}</b></span>`:''}</div>`;
  h+=l.length?`<div class="tlist card" style="margin:8px 0 14px">${chrono(l).map(tradeCard).join('')}</div>`:`<div class="empty">${t('day_empty')}</div>`;
  if(j&&(j.p||j.r||j.l))h+=`<div class="dsec">${j.p?`<h4>${t('j_plan')}</h4><div class="note">${esc(j.p)}</div>`:''}${j.r?`<h4 style="margin-top:10px">${t('j_rev')}</h4><div class="note">${esc(j.r)}</div>`:''}${j.l?`<h4 style="margin-top:10px">${t('j_les')}</h4><div class="note">${esc(j.l)}</div>`:''}</div>`;
  openDlg(dFmt(k,{weekday:'long',day:'numeric',month:'long',year:'numeric'}),h,`<button class="btn" onclick="jd='${k}';go('jr')">${t(j?'j_open':'j_write')}</button><button class="btn pri" onclick="openForm(null,{date:'${k}',time:''})">${t('new_trade')}</button>`);
}

/* ---- playbooks ---- */
function vPB(){
  const l=fT(),used=uniq('setup').filter(s=>!pbOf(s));
  const cards=PB.map(p=>{
    const tl=l.filter(x=>x.setup===p.name),s=stats(tl);
    const full=tl.filter(x=>p.rules.length&&p.rules.every(r=>x.rules.includes(r))),part=tl.filter(x=>p.rules.length&&!p.rules.every(r=>x.rules.includes(r)));
    const rr=p.rules.map(r=>{const n=tl.filter(x=>x.rules.includes(r)).length;return `<li><span>${esc(r)}</span><span>${tl.length?pc(n/tl.length*100):'—'}</span></li>`}).join('');
    return `<div class="card pb"><div class="cb" style="padding-top:18px"><div style="display:flex;gap:8px;align-items:flex-start"><h3 style="margin-right:auto">${esc(p.name)}</h3><button class="btn sm" onclick="pbEdit('${p.id}')">${t('edit')}</button></div>
     ${p.desc?`<p>${esc(p.desc)}</p>`:''}
     <div class="pbst"><div><b>${s.n}</b>${t('h_trades')}</div><div><b>${pc(s.wr)}</b>${t('k_wr')}</div><div><b class="${cls(s.tot)}">${s.hasR?fr(s.tot):'—'}</b>${t('h_tot')}</div><div><b>${fr(s.exp)}</b>${t('h_avg')}</div></div>
     ${p.rules.length?`<ul class="rules"><li class="mut" style="font-size:12.5px"><span>${t('pb_rules')}</span><span>${t('pb_followed')}</span></li>${rr}</ul>`:`<p class="hint">${t('pb_norules')}</p>`}
     ${full.length&&part.length?`<p class="hint" style="margin-top:10px">${t('pb_cmp',{a:fr(stats(full).exp),b:fr(stats(part).exp)})}</p>`:''}
    </div></div>`}).join('');
  return `<div class="card" style="margin-bottom:16px"><div class="cb" style="padding-top:18px;display:flex;gap:16px;align-items:center;flex-wrap:wrap"><p style="flex:1 1 320px;color:var(--ink2);font-size:14.5px">${t('pb_intro')}</p><button class="btn pri" onclick="pbEdit()">${ic('plus')}${t('pb_new')}</button></div>
   ${used.length?`<div class="cb" style="padding-top:0"><span class="hint">${t('pb_used')}</span><div class="chips" style="margin-top:6px">${used.map(u=>`<button class="chip" onclick="pbEdit(null,${esc(JSON.stringify(u))})">+ ${esc(u)}</button>`).join('')}</div></div>`:''}</div>
   ${PB.length?`<div class="pbs">${cards}</div>`:`<div class="card empty">${t('pb_empty')}</div>`}`;
}
function pbEdit(id,name){
  const p=id?PB.find(z=>z.id===id):{name:name||'',desc:'',rules:[]};
  openDlg(t(id?'pb_edit':'pb_new'),`<div class="fsec"><label class="fld"><span>${t('pb_name')}</span><input class="in" id="pb_n" value="${esc(p.name)}" placeholder="${t('ph_setup')}"></label>
   <label class="fld" style="margin-top:12px"><span>${t('pb_desc')}</span><textarea class="in" id="pb_d" style="min-height:64px" placeholder="${t('pb_desc_ph')}">${esc(p.desc)}</textarea></label>
   <label class="fld" style="margin-top:12px"><span>${t('pb_rules_l')}</span><textarea class="in" id="pb_r" style="min-height:150px" placeholder="${t('pb_rules_ph')}">${esc(p.rules.join('\n'))}</textarea><span class="hint">${t('pb_rules_h')}</span></label></div>`,
   `${id?`<button class="btn dan" onclick="pbDel('${id}')">${t('del')}</button>`:''}<button class="btn pri" onclick="pbSave('${id||''}')">${t('save')}</button>`);
}
function pbSave(id){
  const name=$('pb_n').value.trim();if(!name){say(t('pb_req'));return}
  const other=PB.find(z=>z.name===name&&z.id!==id);if(other){say(t('pb_dup'));return}
  const d={name,desc:$('pb_d').value.trim(),rules:[...new Set($('pb_r').value.split('\n').map(s=>s.trim()).filter(Boolean))]};
  if(id){const p=PB.find(z=>z.id===id);if(p.name!==name){trades.forEach(x=>{if(x.setup===p.name)x.setup=name});saveTrades()}Object.assign(p,d)}else PB.push({id:sid(),...d,demo:false});
  savePB();closeDlg();render();hap('success');toast(t('saved'));
}
async function pbDel(id){if(!await ask(t('pb_del_c')))return;PB=PB.filter(z=>z.id!==id);savePB();closeDlg();render();toast(t('deleted'))}

/* ---- journal ---- */
const MOOD=[1,2,3,4,5].map(i=>()=>t('mood_'+i));
function vJR(){
  if(!jd)jd=day();
  const e=JR[jd]||{},l=byAcc(trades).filter(x=>x.date===jd),s=stats(l);
  const ks=Object.keys(JR).filter(k=>/^\d{4}-\d{2}-\d{2}$/.test(k)).sort().reverse();
  return `<div class="g2"><div class="card"><div class="cb" style="padding-top:18px">
   <div class="fgrid"><label class="fld"><span>${t('h_date')}</span><input class="in" type="date" id="j_date" value="${jd}" onchange="jd=this.value;render()"></label>
   <div class="fld"><span>${t('j_mood')}</span><div class="chips" id="j_mood">${MOOD.map((m,i)=>`<button type="button" class="chip${e.m===i+1?' on':''}" data-v="${i+1}" onclick="this.parentNode.querySelectorAll('.chip').forEach(z=>z.classList.toggle('on',z===this&&!this.classList.contains('on')))">${m()}</button>`).join('')}</div></div></div>
   <div class="sumline" style="padding:12px 0;margin-top:12px;border-top:1px solid var(--ln2)"><span>${t('n_tr',{n:`<b>${s.n}</b>`})}</span><span>${t('h_tot')} <b class="${cls(s.tot)}">${fr(s.tot)}</b></span>${s.n?`<a href="#" onclick="dayDlg('${jd}');return false">${t('j_see')}</a>`:''}</div>
   <label class="fld" style="margin-top:12px"><span>${t('j_plan')}</span><textarea class="in" id="j_p" placeholder="${t('j_plan_ph')}">${esc(e.p)}</textarea></label>
   <label class="fld" style="margin-top:12px"><span>${t('j_rev')}</span><textarea class="in" id="j_r" placeholder="${t('j_rev_ph')}">${esc(e.r)}</textarea></label>
   <label class="fld" style="margin-top:12px"><span>${t('j_les')}</span><textarea class="in" id="j_l" placeholder="${t('j_les_ph')}">${esc(e.l)}</textarea></label>
   <div style="margin-top:14px;display:flex;justify-content:flex-end"><button class="btn pri" onclick="jSave()">${t('j_save')}</button></div></div></div>
   <div class="card"><div class="ch"><h2>${t('j_past')}</h2></div><div class="cb">${ks.length?ks.slice(0,60).map(k=>{const x=JR[k],r=sum(byAcc(trades).filter(z=>z.date===k&&has(z.rrActual)).map(z=>z.rrActual));
     return `<button class="tc" style="display:block;width:100%;text-align:left;padding:10px 0;border-top:1px solid var(--ln2)" onclick="jd='${k}';render()"><div class="tc1"><b style="font-weight:600">${esc(dFmt(k,{weekday:'short',day:'numeric',month:'short'}))}</b>${x.m?`<span class="tag">${MOOD[x.m-1]()}</span>`:''}<span class="rv ${cls(r)}" style="font-size:15px">${fr(r)}</span></div><div class="tc2" style="display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(x.r||x.p||x.l)}</div></button>`}).join(''):`<div class="mut" style="font-size:14px">${t('j_empty')}</div>`}</div></div></div>`;
}
function jSave(){
  const on=$('j_mood').querySelector('.on'),e={p:$('j_p').value.trim(),r:$('j_r').value.trim(),l:$('j_l').value.trim(),m:on?+on.dataset.v:0};
  const empty=!e.p&&!e.r&&!e.l&&!e.m;if(empty){if(!JR[jd])return;delete JR[jd]}else JR[jd]=e;
  saveJR();render();hap('success');toast(t(empty?'j_cleared':'j_saved'));
}

/* ---- settings ---- */
const typeL=k=>k?t('at_'+k):'';
function vSet(){
  const th=(()=>{try{return localStorage.getItem(K.theme)||'auto'}catch(e){return 'auto'}})();
  const act=actAccs(),arc=S.accounts.filter(a=>a.arch);
  const lim=(k,lab,d,step)=>`<div class="srow"><div><div class="t">${lab}</div><div class="d">${d}</div></div><input class="in" type="number" min="0" step="${step}" value="${S[k]}" onchange="S.${k}=Math.max(0,num(this.value)||0);saveS();toast(t('saved'))"></div>`;
  return `<div class="g2e"><div class="stack">${typeof planCard==='function'?planCard():''}
   <button class="card setacc" onclick="go('acc')"><span class="sai">${ic('acc')}</span><span><b>${t('v_acc')}</b><small>${t('ax_moved',{n:act.length})}</small></span>${ic('arrow')}</button>
   <div class="card"><div class="ch"><h2>${t('s_rules')}</h2><small>${t('s_rules_s')}</small></div><div class="cb">${lim('day',t('s_day'),t('s_day_d'),0.5)}${lim('str',t('s_str'),t('s_str_d'),1)}${lim('maxT',t('s_maxT'),t('s_maxT_d'),1)}</div></div>
   <div class="card"><div class="ch"><h2>${t('s_lang')}</h2></div><div class="cb">
    <div class="srow"><div class="t">${t('s_lang')}</div><select class="sel" onchange="setLang(this.value)">${opt('tr','Türkçe',L)}${opt('en','English',L)}</select></div></div></div>
   ${window.RO?'':`<div class="card"><div class="ch"><h2>${t('s_help')}</h2><small>${t('s_help_s')}</small></div><div class="cb"><div class="links">${typeof supDlg==='function'&&!CS?`<button onclick="supDlg()">${t('sup_btn')}</button>`:''}<button onclick="sbLegal('help')">${t('s_help_c')}</button>${a2Show()?`<button onclick="a2hs()">${t('a2_t')}</button>`:''}</div></div></div>`}
  </div><div class="stack">${typeof accountCard==='function'?accountCard():''}${typeof shareCard==='function'?shareCard():''}${typeof mentorCard==='function'?mentorCard():''}
   <div class="card"><div class="ch"><h2>${t('s_data')}</h2></div><div class="cb">
    <h4 class="lgh">${t('dg_in')}</h4><div class="links"><button onclick="$('fileJson').click()">${t('m_res')}</button><button onclick="$('fileCsv').click()">${t('m_csv_imp')}</button><button onclick="pasteImp()">${t('m_paste')}</button></div>
    <h4 class="lgh">${t('dg_out')}</h4><div class="links"><button onclick="expJSON()">${t('m_bak')}</button><button onclick="expCSV()">${t('m_csv_exp')}</button></div>
    <h4 class="lgh">${t('dg_demo')}</h4><div class="links"><button onclick="tourStart()">${t('tr_again')}</button><button onclick="demo()">${t('m_demo')}</button>${trades.some(x=>x.demo)||PB.some(p=>p.demo)?`<button onclick="demoRm()">${t('m_demo_rm')}</button>`:''}</div>
    <div class="links" style="margin-top:14px;border-top:1px solid var(--ln2)"><button class="dan" onclick="wipe()">${t('m_wipe')}</button></div>
    <p class="hint" style="margin-top:8px">${t('csv_h')}</p></div></div>
   <div class="card"><div class="ch"><h2>${t('s_priv')}</h2></div><div class="cb"><p style="font-size:14px;color:var(--ink2)">${t(typeof sbOn==='function'&&sbOn()?'privacy_sb':CS?'privacy_tg':'privacy')}</p><p class="hint" id="syncSt2" style="margin-top:8px"></p></div></div>
  </div></div>`;
}
/* ---- accounts page: every account with its balance, results and settings ---- */
function accSpark(l,cur){
  const p=chrono(l),usePn=p.filter(x=>has(x.pnl)).length>=Math.max(2,p.length*.6);
  let c=0;const pts=[0];p.forEach(x=>{const v=usePn?x.pnl:x.rrActual;if(has(v)){c+=v;pts.push(c)}});
  if(pts.length<3)return `<div class="acxsp none">${t('ax_nochart')}</div>`;
  const mn=Math.min(...pts),mx=Math.max(...pts),W=300,H=56,sx=W/(pts.length-1),sy=v=>H-4-(v-mn)/((mx-mn)||1)*(H-8);
  const d=pts.map((v,i)=>`${i?'L':'M'}${(i*sx).toFixed(1)} ${sy(v).toFixed(1)}`).join(''),k=c>=0?'w':'l';
  return `<svg class="acxsp ${k}" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-hidden="true"><path class="ar" d="${d}L${W} ${H}L0 ${H}Z"/><path class="ln" d="${d}" pathLength="1"/></svg>`;
}
function accBox(a,i){
  const l=trades.filter(x=>x.account===a.id).map(x=>beFx(x,a)),s=stats(l),b=accBal(a),cap=a.bal+b.dep,ret=cap?b.pnl/cap*100:null;
  const sync=typeof syOnAcc==='function'&&syOnAcc(a.id),r=a.rules||{};
  const meta=[a.type?typeL(a.type):'',a.no?'#'+a.no:'',a.srv||''].filter(Boolean).map(esc).join(' · ');
  const rules=[r.dll?t('ar_dll_s',{v:r.dll}):'',r.mll?t('ar_mll_s',{v:r.mll}):'',r.tgt?t('ar_tgt_s',{v:r.tgt}):''].filter(Boolean).join(' · ');
  const st=(k,v,c)=>`<div><span>${k}</span><b class="${c||''}">${v}</b></div>`;
  return `<div class="card acx${a.arch?' arch':''}" style="--i:${i}">
   <div class="acx1"><span class="acxi">${esc((accName(a)[0]||'?').toUpperCase())}</span><div class="acxn"><b>${esc(accName(a))}</b><small>${meta||t('acc_cur')+' '+esc(a.cur)}</small></div>
    ${sync?`<span class="tag sytag"><span class="sydot on"></span>${t('ax_live')}</span>`:a.arch?`<span class="tag">${t('archived')}</span>`:''}<button class="ib sm" onclick="accDlg('${a.id}')" aria-label="${t('edit')}" title="${t('edit')}">${ic('jr')}</button></div>
   <div class="acxb"><span>${t('acc_now')}</span><div class="acxv num">${b.est?'≈':''}${money(b.cur,0,a.cur)}</div>
    <div class="acxp"><span class="k">${t('ax_net')}</span> <b class="${cls(b.pnl)}">${b.est?'≈':''}${money(b.pnl,1,a.cur)}</b>${ret!==null&&b.pnl?` <span>(${ret>0?'+':'−'}${(v=>L==='tr'?'%'+v:v+'%')(Math.abs(ret).toLocaleString(loc(),{minimumFractionDigits:1,maximumFractionDigits:1}))})</span>`:''}</div></div>
   ${accSpark(l,a.cur)}
   <div class="acxs">${st(t('h_trades'),s.n)}${st(t('wr_s'),pc(s.wr))}${st(t('ax_netr'),s.hasR?fr(s.tot):'—',cls(s.tot))}${st(t('ax_be'),a.be?'±'+money(a.be,0,a.cur):t('off'),a.be?'':'mut')}</div>
   ${rules?`<div class="acxr">${esc(rules)}</div>`:''}
   <div class="acxf">${a.arch?'':`<button class="btn sm pri" onclick="setAcc('${a.id}');go('dash')">${t('ax_open')}</button>`}<button class="btn sm" onclick="txDlg('${a.id}')">${t('tx_btn',{n:S.tx.filter(z=>z.acc===a.id).length})}</button></div></div>`;
}
function vAcc(){
  if(!accReady()&&!trades.length)return emptyView('acc');
  const act=actAccs(),arc=S.accounts.filter(a=>a.arch),one=new Set(act.map(a=>a.cur)).size===1;
  const bs=act.map(accBal),tot=sum(bs.map(b=>b.cur)),pnl=sum(bs.map(b=>b.pnl)),est=bs.some(b=>b.est);
  return `<div class="card axhead"><div class="axsum">
    ${one?`<div><span>${t('ax_total')}</span><b class="num">${est?'≈':''}${money(tot,0,act[0].cur)}</b></div><div><span>${t('ax_pnl')}</span><b class="num ${cls(pnl)}">${est?'≈':''}${money(pnl,1,act[0].cur)}</b></div>`:''}
    <div><span>${t('ax_active')}</span><b class="num">${act.length}</b></div></div>
    <button class="btn pri" onclick="accDlg()">${ic('plus')}<span>${t('acc_add')}</span></button></div>
   <div class="axgrid">${act.map(accBox).join('')}</div>
   ${act.length>1?`<label class="check axdedup"><input type="checkbox" ${S.dedup?'checked':''} onchange="S.dedup=this.checked;saveS();toast(t('saved'))"><span>${t('s_dedup')}<span class="hint" style="display:block">${t('s_dedup_d')}</span></span></label>`:''}
   ${arc.length?`<details class="more axarc"><summary>${t('s_arch',{n:arc.length})}</summary><div class="axgrid">${arc.map(accBox).join('')}</div></details>`:''}`;
}
/* account editor: new accounts first choose where their data comes from */
function accDlg(id){
  if(id)return accForm(id);
  if(typeof planGate==='function'&&planGate('accounts'))return;
  openDlg(t('acc_add'),`<p style="padding-top:14px;font-size:14.5px;color:var(--ink2)">${t('acc_add_how')}</p>
   ${accOptions('acc')}`,'');
}
const propType=k=>k==='challenge'||k==='funded';
function accForm(id){
  const a=id?S.accounts.find(z=>z.id===id):{name:'',bal:10000,cur:actAccs()[0]?actAccs()[0].cur:'USD',risk:1,type:WEL.type||'',rules:{...(WEL.rules||{})}};if(!a)return;
  const locked=!!(id&&(a.initExt||a.eab));
  const r=a.rules||{},cnt=id?trades.filter(x=>x.account===id).length:0;
  const pct=(k,lab,h)=>`<label class="fld"><span>${lab}</span><input class="in" id="ad_${k}" type="number" min="0" max="99" step="0.5" inputmode="decimal" value="${r[k]||''}" placeholder="—"><span class="hint">${h}</span></label>`;
  /* new account: the fields a beginner needs first; risk and breakeven sit under "advanced" */
  const adv=`<label class="fld"><span>${t('acc_risk')}</span><input class="in" id="ad_risk" type="number" min="0" step="0.1" value="${a.risk}"><span class="hint">${t('acc_risk_h')}</span></label>
    <label class="fld"><span>${t('acc_be')} <small class="mut">(±${esc(a.cur)})</small></span><input class="in" id="ad_be" type="number" min="0" step="any" inputmode="decimal" value="${a.be||''}" placeholder="${t('off')}"><span class="hint">${t('acc_be_h')}</span></label>`;
  openDlg(t(id?'acc_edit':accReady()?'acc_add':'acc_first_t'),`${!id&&!accReady()?`<p class="hint" style="padding-top:14px;margin:0">${t('acc_first_d')}</p>`:''}<div class="fsec"><div class="fgrid">
    <label class="fld"><span>${t('acc_name')}</span><input class="in" id="ad_name" value="${esc(a.name)}" placeholder="${t('acc_name_ph')}"></label>
    <label class="fld"><span>${t('acc_type')}</span><select class="in" id="ad_type" onchange="$('ad_rules').style.display=propType(this.value)||$('ad_rules').dataset.has?'':'none'">${opt('','—',a.type||'')}${ATYPES.map(k=>opt(k,typeL(k),a.type||'')).join('')}</select></label>
    <label class="fld"><span>${t('acc_bal')}</span><input class="in" id="ad_bal" type="number" min="0" step="any" value="${a.bal}" ${locked?'disabled':''}>${locked?`<span class="hint">${t(a.eab?'sy_auto_bal':'acc_from_rep')}</span>`:''}</label>
    <label class="fld"><span>${t('acc_cur')}</span><select class="in" id="ad_cur" ${locked?'disabled':''}>${CUR.map(c=>opt(c,c,a.cur)).join('')}</select></label>
    ${id?adv:''}</div>${id?'':`<details class="fadv"><summary>${t('acc_adv')}</summary><div class="fgrid">${adv}</div></details>`}</div>
   ${id?`<div class="fsec"><h3>${t('acc_link')}</h3>${a.no
     ?`<div class="srow"><div><div class="t">MT #${esc(a.no)}</div><div class="d">${a.srv?esc(a.srv)+' – ':''}${t('acc_link_on')}</div></div><button class="btn sm ghost" onclick="accUnlink('${id}')">${t('acc_unlink')}</button></div>`
     :`<p class="hint" style="font-size:13.5px">${t('acc_link_off')}</p><button class="btn sm" style="margin-top:10px" onclick="closeDlg();openImport()">${t('m_broker')}</button>`}</div>`:''}
   ${id&&typeof syAccSec==='function'?syAccSec(id):''}
   <div class="fsec" id="ad_rules" ${Object.keys(r).length?'data-has="1"':''} style="${propType(a.type)||Object.keys(r).length?'':'display:none'}"><h3>${t('ar_title')}<small>${t('ar_sub')}</small></h3><div class="fgrid3">${pct('dll',t('ar_dll'),t('ar_dll_h'))}${pct('mll',t('ar_mll'),t('ar_mll_h'))}${pct('tgt',t('ar_tgt'),t('ar_tgt_h'))}</div>
    <p class="hint" style="margin-top:8px">${t('ar_note')}</p></div>
   ${id?`<div class="fsec"><h3>${t('acc_manage')}</h3><div class="links">
    ${a.arch?`<button onclick="accArch('${id}',false)">${t('acc_unarch')}</button>`:actAccs().length>1?`<button onclick="accArch('${id}',true)">${t('acc_arch')}<span class="hint" style="display:block">${t('acc_arch_h')}</span></button>`:''}
    ${S.accounts.length>1?`<button class="dan" onclick="accDel('${id}')">${t('acc_del')}<span class="hint" style="display:block">${t('acc_del_h',{n:cnt})}</span></button>`:''}</div></div>`:''}`,
   `<button class="btn" onclick="closeDlg()">${t('cancel')}</button><button class="btn pri" onclick="accSave('${id||''}')">${t('save')}</button>`);
}
function accSave(id){
  const g=k=>$('ad_'+k).value,bal=num(g('bal')),risk=num(g('risk'));
  if(bal==null||bal<0||risk==null||risk<0){say(t('acc_req'));return}
  const rules={};['dll','mll','tgt'].forEach(k=>{const v=num(g(k));if(v>0&&v<100)rules[k]=v});
  /* ad boş bırakılırsa hesap yine de adlandırılır; ilk kurulum ekranı bundan anlar */
  const be=num(g('be'));
  const d={name:g('name').trim()||(g('type')?typeL(g('type'))+' '+t('acc_word'):t('acc_default')),type:g('type'),bal,cur:g('cur'),risk,rules,be:be>0?be:0};
  if(id){const o=S.accounts.find(z=>z.id===id);if(o.initExt||o.eab){d.bal=o.bal;d.cur=o.cur}}
  let a=id?S.accounts.find(z=>z.id===id):null;
  const blank=!a&&S.accounts.length===1&&!S.accounts[0].name&&!S.accounts[0].no&&!trades.some(x=>x.account===S.accounts[0].id)&&!S.tx.length;
  if(blank)a=S.accounts[0];
  if(a){Object.assign(a,d)}else{a={id:sid(),...d};S.accounts.push(a)}
  if(!d.type)delete a.type;if(!Object.keys(rules).length)delete a.rules;if(!d.be)delete a.be;
  if(!id){WEL={};welSave()}
  /* ilk kurulumda (TradeZella'daki gibi) hesap açılınca doğrudan ilk işlem formuna geçilir */
  const first=!id&&!trades.length;
  S=normS(S);saveS();closeDlg();render();hap('success');
  if(first)setTimeout(()=>openForm(),260);else toast(t(id?'saved':'acc_added'));
}
async function accUnlink(id){
  const a=S.accounts.find(z=>z.id===id);if(!a||!a.no)return;
  if(!await ask(t('acc_unlink_c',{n:a.no})))return;
  delete a.no;delete a.srv;delete a.tz;saveS();accDlg(id);toast(t('saved'));
}
function accArch(id,on){
  const a=S.accounts.find(z=>z.id===id);if(!a)return;
  if(on&&actAccs().length<2){say(t('acc_last'));return}
  if(on)a.arch=true;else delete a.arch;
  if(on&&V.acc===id)V.acc='all';fixAcc();saveS();saveV();closeDlg();render();toast(t(on?'acc_archived':'acc_unarchived'));
}
async function accDel(id){
  const a=S.accounts.find(z=>z.id===id);if(!a||S.accounts.length<2)return;
  const n=trades.filter(x=>x.account===id).length;
  if(!await ask(t('acc_del_c2',{k:accName(a),n})))return;
  trades=trades.filter(x=>x.account!==id);S.tx=S.tx.filter(z=>z.acc!==id);S.accounts=S.accounts.filter(z=>z.id!==id);
  if(!actAccs().length)delete S.accounts[0].arch;
  if(V.acc===id)V.acc='all';fixAcc();saveS();saveTrades();saveV();closeDlg();render();hap('warning');toast(t('deleted'));
  if(typeof syDropAcc==='function')syDropAcc(id);
}

/* ---- deposits / withdrawals ---- */
function txDlg(id){
  const a=accOf(id),b=accBal(a),l=S.tx.filter(z=>z.acc===a.id).sort((x,y)=>y.date.localeCompare(x.date));
  const f=(k,v,c)=>`<div>${t(k)}<b class="${c||''}">${v}</b></div>`;
  openDlg(t('tx_title',{k:accName(a)}),`<div class="facts" style="margin:16px 0">${f('tx_start',money(a.bal,0,a.cur))}${f('tx_dep',money(b.dep,0,a.cur))}${f('tx_wd',money(b.wd,0,a.cur))}
    ${f('tx_pnl',(b.est?'≈':'')+money(b.pnl,1,a.cur),cls(b.pnl))}${f('acc_now',(b.est?'≈':'')+money(b.cur,0,a.cur))}</div>
   ${b.est?`<p class="hint" style="margin-top:-6px">${t('tx_est')}</p>`:''}
   <div class="dsec"><h4>${t('tx_add')}</h4><div class="fgrid">
    <div class="segf full" id="tx_k"><button type="button" class="w on" data-v="dep" onclick="segOn('tx_k','dep')">${t('tx_dep1')}</button><button type="button" class="l" data-v="wd" onclick="segOn('tx_k','wd')">${t('tx_wd1')}</button></div>
    <label class="fld"><span>${t('tx_amt')} (${esc(a.cur)})</span><input class="in" id="tx_a" type="number" min="0" step="any" inputmode="decimal"></label>
    <label class="fld"><span>${t('h_date')}</span><input class="in" id="tx_d" type="date" value="${day()}"></label>
    <label class="fld full"><span>${t('tx_note')}</span><input class="in" id="tx_n" placeholder="${t('tx_note_ph')}"></label></div>
    <button class="btn" style="margin-top:12px" onclick="txAdd('${a.id}')">${ic('plus')}${t('tx_addbtn')}</button></div>
   <div class="dsec"><h4>${t('tx_list')}</h4>${l.length?l.map(z=>`<div class="srow"><div><div class="t ${z.kind==='dep'?'pos':'neg'}" style="font-weight:600">${z.kind==='dep'?'+':'−'}${money(z.amt,0,a.cur)}</div><div class="d">${esc(dFmt(z.date,{day:'numeric',month:'short',year:'numeric'}))}${z.note?' – '+esc(z.note):''}${z.ext?' – '+t('tx_rep'):''}</div></div><button class="btn sm ghost" onclick="txDel('${z.id}','${a.id}')">${t('del')}</button></div>`).join(''):`<div class="mut" style="font-size:14px">${t('tx_empty')}</div>`}</div>`,
   `<button class="btn" onclick="closeDlg();render()">${t('close')}</button>`);
}
function txAdd(id){
  const amt=num($('tx_a').value),d=$('tx_d').value,k=$('tx_k').querySelector('.on');
  if(!(amt>0)||!/^\d{4}-\d{2}-\d{2}$/.test(d)){say(t('tx_req'));return}
  S.tx.push({id:sid(),acc:id,date:d,kind:k?k.dataset.v:'dep',amt:Math.abs(amt),note:$('tx_n').value.trim()});saveS();hap('success');toast(t('saved'));txDlg(id);
}
async function txDel(tid,id){if(!await ask(t('tx_del_c')))return;S.tx=S.tx.filter(z=>z.id!==tid);saveS();toast(t('deleted'));txDlg(id)}

/* ---- data ---- */
function dl(name,txt,type){
  /* Telegram'da ve gömülü önizlemelerde dosya indirilemez: metni kopyalanabilir göster */
  let framed=false;try{framed=window.top!==window}catch(e){framed=true}
  if(TG||framed){showTxt(name,t('x_exp_h'),txt.replace(/^﻿/,''),t('copy'),null);return}
  const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([txt],{type}));a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),1000);
}
const COLS=['date','time','account','symbol','dir','setup','kz','tf','rr','rrActual','pnl','mfe','mae','outcome','plan','rating','emotions','mistakes','tags','rules','chart','notes','lots','entry','exit','sl','tp','ct','ext'];
function expCSV(){
  if(!trades.length){toast(t('no_trades'));return}
  const q=v=>'"'+String(v==null?'':Array.isArray(v)?v.join('|'):v).replace(/"/g,'""')+'"';
  dl(`tradelog-${day()}.csv`,'﻿'+COLS.join(',')+'\n'+trades.map(x=>COLS.map(c=>q(c==='account'?accName(accOf(x.account)):x[c])).join(',')).join('\n'),'text/csv;charset=utf-8');
}
function expJSON(){dl(`tradelog-backup-${day()}.json`,JSON.stringify({...snapshot(),exported:new Date().toISOString()},null,1),'application/json')}
function merge(list){
  const ids=new Set(trades.map(x=>x.id)),sigs=new Set(trades.map(sig)),exts=new Set(trades.map(x=>x.ext).filter(Boolean));let add=0,skip=0;
  const byName={};S.accounts.forEach(a=>{byName[accName(a).toLowerCase()]=a.id});
  list.forEach(r=>{const o=norm(r);if(!o||ids.has(o.id)||sigs.has(sig(o))||(o.ext&&exts.has(o.ext))){skip++;return}if(o.ext)exts.add(o.ext);
    if(!S.accounts.some(a=>a.id===o.account))o.account=byName[o.account.toLowerCase()]||S.accounts[0].id;
    ids.add(o.id);sigs.add(sig(o));trades.push(o);add++});
  sortT();saveTrades();return{add,skip};
}
function impJSONData(d){
  let list;
  if(Array.isArray(d))list=d;
  else if(d&&Array.isArray(d.trades)){list=d.trades;
    if(d.journal&&typeof d.journal==='object'){JR=Object.assign({},d.journal,JR);saveJR()}
    if(d.settings&&typeof d.settings==='object'){
      const ns=normS(d.settings);
      /* an empty app takes the backup's settings as they are; otherwise accounts and cash movements are added */
      const fresh=!trades.length&&!S.tx.length&&S.accounts.every(a=>!a.name&&!a.no);
      if(fresh)S=ns;
      else{const have=new Set(S.accounts.map(a=>a.id));ns.accounts.forEach(a=>{if(!have.has(a.id))S.accounts.push(a)});const txid=new Set(S.tx.map(z=>z.id));normS({...d.settings,accounts:S.accounts}).tx.forEach(z=>{if(!txid.has(z.id))S.tx.push(z)})}
      fixAcc();saveS();
    }
    if(Array.isArray(d.playbooks)){normPB(d.playbooks).forEach(p=>{if(!pbOf(p.name))PB.push(p)});savePB()}}
  else throw 0;
  const m=merge(list);render();hap('success');toast(t('imported',{n:m.add,s:m.skip}));
}
function parseCSV(tx){
  tx=tx.replace(/^﻿/,'');
  const fl=tx.split(/\r?\n/)[0]||'',dlm=(fl.split(';').length>fl.split(',').length)?';':',';
  const rows=[];let row=[],c='',q=false;
  for(let i=0;i<tx.length;i++){const ch=tx[i];
    if(q){if(ch==='"'){if(tx[i+1]==='"'){c+='"';i++}else q=false}else c+=ch}
    else if(ch==='"')q=true;else if(ch===dlm){row.push(c);c=''}
    else if(ch==='\n'||ch==='\r'){if(ch==='\r'&&tx[i+1]==='\n')i++;row.push(c);c='';if(row.some(v=>v!==''))rows.push(row);row=[]}
    else c+=ch}
  if(c||row.length){row.push(c);if(row.some(v=>v!==''))rows.push(row)}
  return rows;
}
function impCSVText(txt){
  const rows=parseCSV(txt),h=(rows.shift()||[]).map(x=>x.trim().toLowerCase());
  if(!h.includes('date')||!h.includes('symbol'))throw 0;
  const map={};[...COLS,'error'].forEach(c=>map[c.toLowerCase()]=c);
  const m=merge(rows.map(v=>{const o={};h.forEach((k,j)=>{if(map[k])o[map[k]]=v[j]});return o}));
  render();hap('success');toast(t('imported',{n:m.add,s:m.skip}));
}
function impText(tx){
  tx=String(tx).replace(/^﻿/,'').trim();
  if(/^[\[{]/.test(tx)){try{impJSONData(JSON.parse(tx));return true}catch(e){say(t('bad_backup'));return false}}
  try{impCSVText(tx);return true}catch(e){say(t('bad_csv'));return false}
}
function pasteImp(){showTxt(t('m_paste'),t('x_imp_h'),'',t('restore'),true)}
function readFile(inp,fn,err){const f=inp.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{fn(r.result)}catch(e){say(t(err))}inp.value=''};r.readAsText(f)}
async function demo(){
  if(trades.length&&!await ask(t('confirm_demo')))return;
  const P=[{name:'London Breakout',desc:t('dm_d1'),rules:t('dm_r1').split('|')},{name:'NY Pullback',desc:t('dm_d2'),rules:t('dm_r2').split('|')},{name:'Liquidity Sweep',desc:t('dm_d3'),rules:t('dm_r3').split('|')}];
  P.forEach(p=>{if(!pbOf(p.name))PB.push({id:sid(),...p,demo:true})});
  const Kz={'London Breakout':'London Open','NY Pullback':'NY AM','Liquidity Sweep':'NY PM'},Hr={'London Open':[9,10],'NY AM':[16,17],'NY PM':[19,20]};
  const Y=['XAUUSD','EURUSD','NQ','GBPUSD'];let seed=11;const r=()=>(seed=seed*16807%2147483647)/2147483647;
  const acc=!multiView()?V.acc:actAccs()[0].id;
  for(let i=0;i<48;i++){
    const p=P[Math.floor(r()*3)],ruleOk=r()<.7,rules=ruleOk?[...p.rules]:p.rules.filter(()=>r()<.5),plan=ruleOk&&r()<.92?'yes':'no';
    const edge=p.name==='Liquidity Sweep'?.3:p.name==='London Breakout'?.48:.42,w=r()<(ruleOk?edge+.1:edge-.12);
    const ra=w?+(1+r()*(ruleOk?3.2:1.6)).toFixed(1):r()<.12?0:r()<.15?-1.5:-1;
    const d=new Date();d.setDate(d.getDate()-Math.round((48-i)*1.25));if(d.getDay()===0)d.setDate(d.getDate()-2);if(d.getDay()===6)d.setDate(d.getDate()-1);
    const kz=Kz[p.name],hh=Hr[kz][Math.floor(r()*2)];
    const mis=ra<0&&r()<.55?[MIS[[0,3,5,7,8,9][Math.floor(r()*6)]]]:ra>0&&!ruleOk&&r()<.4?['early_exit']:[];
    trades.push({id:uid(),date:iso(d),time:`${pad(hh)}:${pad(Math.floor(r()*12)*5)}`,symbol:Y[Math.floor(r()*Y.length)],dir:r()<.5?'Long':'Short',account:acc,setup:p.name,kz,tf:['5m','15m','1m'][Math.floor(r()*3)],
      rr:[2,3,3,4][Math.floor(r()*4)],rrActual:ra,pnl:null,mfe:ra>0?+(ra+r()*1.5).toFixed(1):+(r()*1.4).toFixed(1),mae:-(+(r()*(ra<0?1:.8)).toFixed(1)),
      plan,outcome:ra>0?'Win':ra<0?'Loss':'BE',rating:Math.max(1,Math.min(5,Math.round((ruleOk?4:2.5)+r()*1.4-.4))),
      emotions:[],mistakes:mis,tags:r()<.3?['news']:r()<.2?['A+']:[],rules,chart:'',notes:t('demo_note'),demo:true});
  }
  trades=trades.map(norm).filter(Boolean);sortT();saveTrades();savePB();render();hap('success');toast(t('demo_added'));
}
/* ---- dashboard tour: a short spotlight walk through the panel, once, the first time it has data ---- */
const TOUR_K='tradelog_tour';
var TR={i:0,steps:[],on:false,wait:false};
function tourSeen(){try{return localStorage.getItem(TOUR_K)==='1'}catch(e){return true}}
function tourAuto(){
  if(TR.on||TR.wait||tourSeen()||cv!=='dash'||!trades.length||window.RO||dlgOpen()||formOpen())return;
  TR.wait=true;setTimeout(()=>{TR.wait=false;if(!TR.on&&!tourSeen()&&cv==='dash'&&!dlgOpen()&&!formOpen()&&document.querySelector('[data-tour=net]'))tourStart()},1700);
}
function tourSteps(){
  const m=matchMedia('(max-width:900px)').matches;
  return [['net','tr_net'],['kpis','tr_kpi'],['score','tr_score'],['week','tr_week'],['ins','tr_ins'],[m?'.fab':'.addbtn','tr_add']]
    .map(([k,s])=>({sel:k.startsWith('.')?k:`[data-tour=${k}]`,k:s})).filter(x=>{const e=document.querySelector(x.sel);return e&&e.offsetParent!==null});
}
function tourStart(){
  if(cv!=='dash'){go('dash')}
  if(!trades.length){closeDlg(true);toast(t('tr_need'));return}
  closeDlg(true);
  setTimeout(()=>{TR.steps=tourSteps();TR.i=0;if(!TR.steps.length)return;TR.on=true;tourShow()},120);
}
function tourShow(){
  const st=TR.steps[TR.i],el=st&&document.querySelector(st.sel);if(!el){tourEnd();return}
  let ov=$('tourOv');
  if(!ov){ov=document.createElement('div');ov.id='tourOv';ov.className='tour';ov.innerHTML='<div class="thole"></div><div class="tcard" role="dialog" aria-live="polite"></div>';$('appRoot').appendChild(ov);requestAnimationFrame(()=>ov.classList.add('on'))}
  if(matchMedia('(max-width:900px)').matches){const tb=document.querySelector('.main .top'),off=Math.max(84,(tb?tb.getBoundingClientRect().height:0)+16);window.scrollTo({top:Math.max(0,el.getBoundingClientRect().top+scrollY-off),behavior:'smooth'})}
  else el.scrollIntoView({block:'center',behavior:'smooth'});
  const n=TR.steps.length,last=TR.i===n-1;
  ov.querySelector('.tcard').innerHTML=`<div class="tstep">${TR.i+1} / ${n}</div><h3>${t(st.k+'_t')}</h3><p>${t(st.k+'_d')}</p>
    <div class="tfoot"><button class="tskip" onclick="tourEnd()">${t('tr_skip')}</button><span class="tdots">${TR.steps.map((x,i)=>`<i class="${i===TR.i?'on':''}"></i>`).join('')}</span>
    <span class="tbtns">${TR.i?`<button class="btn sm" onclick="tourGo(-1)">${t('tr_back')}</button>`:''}<button class="btn sm pri" onclick="${last?'tourEnd()':'tourGo(1)'}">${t(last?'tr_done':'tr_next')}</button></span></div>`;
  clearTimeout(TR.pt);TR.pt=setTimeout(tourPlace,380);tourPlace();
}
function tourPlace(){
  const ov=$('tourOv'),st=TR.steps[TR.i];if(!ov||!st)return;const el=document.querySelector(st.sel);if(!el)return;
  const r=el.getBoundingClientRect(),pad=8,h=ov.querySelector('.thole'),c=ov.querySelector('.tcard');
  Object.assign(h.style,{left:r.left-pad+'px',top:r.top-pad+'px',width:r.width+pad*2+'px',height:r.height+pad*2+'px'});
  if(matchMedia('(max-width:900px)').matches){c.style.left='';c.style.top='';c.classList.add('sheet');return}
  c.classList.remove('sheet');
  const cw=Math.min(360,innerWidth-32),ch=c.offsetHeight||200;
  let top=r.bottom+16,left=Math.min(Math.max(16,r.left),innerWidth-cw-16);
  if(top+ch>innerHeight-16)top=r.top-ch-16;
  if(top<16){top=Math.min(innerHeight-ch-16,Math.max(16,r.top+16));left=r.right+16+cw<innerWidth?r.right+16:Math.max(16,r.left-cw-16)}
  Object.assign(c.style,{left:left+'px',top:top+'px',width:cw+'px'});
}
function tourGo(d){TR.i=Math.max(0,Math.min(TR.steps.length-1,TR.i+d));tourShow()}
function tourEnd(){TR.on=false;try{localStorage.setItem(TOUR_K,'1')}catch(e){}const ov=$('tourOv');if(ov){ov.classList.remove('on');setTimeout(()=>ov.remove(),250)}}
window.addEventListener('resize',()=>{if(TR.on)tourPlace()});
window.addEventListener('scroll',()=>{if(TR.on)tourPlace()},true);
document.addEventListener('keydown',e=>{if(!TR.on)return;if(e.key==='Escape'){e.stopPropagation();tourEnd()}else if(e.key==='ArrowRight')tourGo(1);else if(e.key==='ArrowLeft')tourGo(-1)},true);
/* "R nedir?" — the unit everything here is measured in */
function rInfo(){
  openDlg(t('r_what'),`<div style="padding-top:14px" class="rinfo-b"><p>${t('r_p1')}</p>
    <div class="rex"><div><span>${t('r_ex_risk')}</span><b>$100</b></div><div><span>${t('r_ex_win')}</span><b class="pos">+$250 = +2,5R</b></div><div><span>${t('r_ex_loss')}</span><b class="neg">−$100 = −1R</b></div></div>
    <p>${t('r_p2')}</p><p class="hint" style="margin-top:10px">${t('r_p3')}</p></div>`,`<button class="btn pri" onclick="closeDlg()">${t('ok_btn')}</button>`);
}
/* while sample trades are shown, say so plainly and offer the two next steps */
function demoBar(){
  if(window.RO||!['dash','trades','cal','rep'].includes(cv)||!trades.some(x=>x.demo))return '';
  const own=trades.some(x=>!x.demo);
  return `<div class="demobar"><span class="dbi">${ic('alert')}</span><div class="dbt"><b>${t('db_t')}</b><span>${t(own?'db_own':'db_d')}</span></div>
   <div class="dba">${own?'':`<button class="btn sm pri" onclick="addMenu()">${t('db_add')}</button>`}<button class="btn sm${own?' pri':''}" onclick="demoRm()">${t('db_rm')}</button></div></div>`;
}
function demoRm(){trades=trades.filter(x=>!x.demo);PB=PB.filter(p=>!p.demo);saveTrades();savePB();render();toast(t('demo_removed'))}
async function wipe(){
  if(!await ask(t(typeof sbOn==='function'&&sbOn()?'confirm_wipe_sb':'confirm_wipe')))return;
  if(typeof shotPurge==='function'&&typeof sbOn==='function'&&sbOn())shotPurge();
  trades=[];JR={};PB=[];S=normS({});V={acc:'all',per:'all'};saveJR();saveS();savePB();saveTrades();saveV();go('dash');hap('warning');toast(t('wiped'));
}

/* ---- theme / language ---- */
function applyTheme(){
  let th=null;try{th=localStorage.getItem(K.theme)}catch(e){}
  document.documentElement.dataset.theme=th==='light'?'light':'dark';
}
function toggleTheme(){setTheme(document.documentElement.dataset.theme==='dark'?'light':'dark')}
function setTheme(v){try{v==='auto'?localStorage.removeItem(K.theme):localStorage.setItem(K.theme,v)}catch(e){}applyTheme();render()}
function setLang(l){L=l;try{localStorage.setItem(K.lang,l)}catch(e){}render()}

/* ---- Telegram ---- */
let mbH=null;
function tgUI(){
  if(!TG)return;
  try{
    const cs=getComputedStyle(document.documentElement),bg=cs.getPropertyValue('--sf').trim(),ac=cs.getPropertyValue('--br').trim(),bt=cs.getPropertyValue('--brt').trim();
    if(tgv('6.9')&&/^#[0-9a-f]{6}$/i.test(bg)){TG.setHeaderColor(bg);TG.setBackgroundColor(cs.getPropertyValue('--bg').trim());if(tgv('7.10')&&TG.setBottomBarColor)TG.setBottomBarColor(bg)}
    const mb=TG.MainButton;if(mbH)mb.offClick(mbH);
    if(dlgOpen()&&!formOpen()){mb.hide();mbH=null}
    else{mbH=formOpen()?()=>saveTrade():()=>addMenu();mb.setParams({text:formOpen()?t('save'):t('add_t'),color:/^#[0-9a-f]{6}$/i.test(ac)?ac:undefined,text_color:/^#[0-9a-f]{6}$/i.test(bt)?bt:'#ffffff',is_visible:true,is_active:true});mb.onClick(mbH)}
    if(tgv('6.1')){(formOpen()||dlgOpen()||cv!=='dash')?TG.BackButton.show():TG.BackButton.hide()}
  }catch(e){}
}

/* ---- init ---- */
function init(){
  if(TG){
    document.body.classList.add('tg');
    try{TG.ready();TG.expand();if(tgv('7.7'))TG.disableVerticalSwipes()}catch(e){}
    if(tgv('6.1'))TG.BackButton.onClick(()=>{if(formOpen())closeForm();else if(dlgOpen())closeDlg();else go('dash')});
    TG.onEvent('themeChanged',()=>{applyTheme();tgUI()});
    document.addEventListener('visibilitychange',()=>{if(document.hidden&&pushT){clearTimeout(pushT);pushT=null;cloudPush()}});
  }else{
    try{matchMedia('(prefers-color-scheme: dark)').addEventListener('change',()=>{applyTheme()})}catch(e){}
  }
  $('formOv').addEventListener('click',e=>{if(e.target===$('formOv'))closeForm()});
  $('dlgOv').addEventListener('click',e=>{if(e.target===$('dlgOv'))closeDlg()});
  $('fileJson').addEventListener('change',function(){readFile(this,x=>impJSONData(JSON.parse(x)),'bad_backup')});
  $('fileCsv').addEventListener('change',function(){readFile(this,impCSVText,'bad_csv')});
  $('fileAny').addEventListener('change',function(){onAnyFile(this)});
  document.addEventListener('click',e=>{if(accOpen&&!e.target.closest('#accSw')){accOpen=false;topCtl()}});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(accOpen){accOpen=false;topCtl()}else if(dlgOpen())closeDlg();else if(formOpen())closeForm()}
    if((e.metaKey||e.ctrlKey)&&e.key==='Enter'&&formOpen())saveTrade()});
  let nw=narrow();window.addEventListener('resize',()=>{clearTimeout(init.rz);init.rz=setTimeout(()=>{if(narrow()!==nw){nw=narrow();if(!formOpen()&&!dlgOpen())render()}},250)});
  document.addEventListener('click',e=>{const a=e.target.closest('a[data-ext]');if(a&&TG&&tgv('6.4')){e.preventDefault();TG.openLink(a.href)}});
  /* the soft light on a card follows the pointer */
  if(matchMedia('(hover:hover)').matches)document.addEventListener('pointermove',e=>{const c=e.target.closest&&e.target.closest('.ap .card');if(!c)return;const r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px')},{passive:true});
  applyTheme();render();viewIn();cloudInit();
}
init();

/* ================= cloud: member accounts + server sync (Supabase) =================
   The app keeps working from the local copy (fast start, works offline). Changes are pushed
   to the server shortly after they happen; the latest server rows are pulled on start and
   whenever the tab comes back. Each table row is one trade / account / playbook / journal day.
   The publishable key below is public by design; row level security keeps users apart. */
const SBC={url:'https://gpnaafbhwdcmnkrhmymu.supabase.co',key:'sb_publishable_wytAvUS5RhQPxnB_khgn8Q_olNZAwzV',
  lib:'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.117.3/dist/umd/supabase.js',google:false,
  gid:'899339021026-bnk9hjndjc8p3ccriffr8u94mparl7hh.apps.googleusercontent.com'};
  /* gid: Google OAuth web client ID (public). With it, our own Google button opens Google's window from gotradelog.com
     (so Google shows our domain, not the Supabase address) once the "google" function has its secret; until then,
     and wherever a popup can't work, the button uses the usual Supabase redirect. '' = always the redirect */
const SBK='sb-'+SBC.url.split('//')[1].split('.')[0]+'-auth-token';
const SBU='tradelog_sb_uid',SBB='tradelog_sb_base',SBR='tradelog_sb_cur';
const TBL=['accounts','trades','cash_tx','playbooks','journal'];
var sb=null,sbUser=null,sbMode='',sbLibP=null,sbT=null,sbBusy=false,sbAgain=false,sbPulled=0,sbFail=false,sbAskRes=null;
const AU={mode:'login',email:'',busy:false,err:'',cool:0,info:'',show:false,kind:''};
var sbRecovery=false;
const sbFramed=(()=>{try{return window.top!==window}catch(e){return true}})();
const lsj=(k,d)=>{try{const v=JSON.parse(localStorage.getItem(k));return v==null?d:v}catch(e){return d}};
const lss=(k,v)=>{try{v==null?localStorage.removeItem(k):localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
const sbHasTok=()=>{try{return !!localStorage.getItem(SBK)}catch(e){return false}};
function sbOn(){return sbMode==='on'}

function sbLib(){
  if(window.supabase&&window.supabase.createClient)return Promise.resolve();
  if(sbLibP)return sbLibP;
  sbLibP=new Promise((ok,no)=>{const s=document.createElement('script');s.src=SBC.lib;s.async=true;
    s.onload=()=>window.supabase&&window.supabase.createClient?ok():no(new Error('lib'));
    s.onerror=()=>{sbLibP=null;s.remove();no(new Error('lib'))};document.head.appendChild(s)});
  return sbLibP;
}
async function sbClient(){
  if(sb)return sb;
  await sbLib();
  sb=window.supabase.createClient(SBC.url,SBC.key,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}});
  sb.auth.onAuthStateChange((ev,ses)=>{setTimeout(()=>{   // never await supabase calls inside this callback
    if(ev==='PASSWORD_RECOVERY'&&ses){sbRecovery=true;sbUser=ses.user;sbMode='auth';AU.mode='reset';render()}
    else if(ev==='SIGNED_IN'&&ses&&!sbOn()&&!sbRecovery)sbLogin(ses.user);
    else if(ev==='SIGNED_OUT'&&sbOn()){sbMode='auth';sbUser=null;render()}
  },0)});
  return sb;
}

/* ---------- start ---------- */
function sbBoot(){
  if(TG){sbMode='tg';return}
  const lh=location.hash+location.search,fromLink=/access_token=|[?&]code=/.test(lh);
  if(/error_description=/.test(lh)){AU.err=t('au_e_link');try{history.replaceState(null,'',location.pathname+'#/app')}catch(e){}}
  else if(fromLink)AU.info=t('au_linking');
  if(/type=recovery/.test(lh))sbRecovery=true;
  window.addEventListener('hashchange',()=>{if(/access_token=|error_description=/.test(location.hash))location.reload()});   // an auth link opened in this same tab
  window.addEventListener('storage',e=>{if(e.key===SBK&&e.newValue&&sbMode==='auth'&&!sbRecovery)sbStart()});   // link opened in another tab
  sbMode=sbHasTok()?'on':'auth';            // with a saved session the app opens from the local copy right away
  if(sbHasTok()||fromLink)sbStart();
  window.addEventListener('online',()=>{if(sbOn())sbStart()});
  document.addEventListener('visibilitychange',()=>{if(!sbOn()||!sbUser)return;
    if(document.hidden){if(sbT){clearTimeout(sbT);sbT=null;sbSync(false)}}else if(Date.now()-sbPulled>30000)sbSync(true)});
  setInterval(()=>{if(sbOn()&&sbUser&&!document.hidden)sbSync(true)},300000);
}
async function sbStart(){
  try{
    const c=await sbClient(),{data,error}=await c.auth.getSession();if(error)throw error;
    if(/access_token=|[?&]code=|error_description=/.test(location.hash+location.search))try{history.replaceState(null,'',location.pathname+'#/app')}catch(e){}
    if(data.session&&sbRecovery){sbUser=data.session.user;sbMode='auth';AU.mode='reset';AU.info='';render();return}
    if(data.session){if(!sbUser||sbUser.id!==data.session.user.id)await sbLogin(data.session.user);else{sbSync(true);mtPending()}}
    else if(sbOn()){sbMode='auth';render()}
  }catch(e){
    sbFail=true;setSync('off');
    if(sbMode==='auth')renderAuth();
  }
}
/* the auth screen replaces the app until the member signs in */
function authGate(){
  const pv=$('pubV');if(pv)pv.hidden=!pubMode;
  if(pubMode){const a=$('authV'),app=document.querySelector('#appRoot>.app');if(a)a.hidden=true;if(app)app.hidden=true;return true}
  const need=sbMode==='auth',a=$('authV'),app=document.querySelector('#appRoot>.app');
  if(a)a.hidden=!need;if(app)app.hidden=need;
  if(need){renderAuth();if(!sb&&!sbLibP)sbClient().catch(()=>{sbFail=true;renderAuth()})}
  return need;
}

/* ---------- sign in ----------
   Like TradesViz / TradeZella: email + password as the main way in, "Continue with Google" above it,
   separate sign-in and sign-up screens, "Forgot password". A session stays open on the device until sign-out. */
var SBS=null;   // public auth settings: which providers are on, whether new emails must be confirmed
async function sbSettings(){
  if(SBS&&!SBS.fail)return SBS;
  try{const r=await fetch(SBC.url+'/auth/v1/settings',{headers:{apikey:SBC.key}});const j=await r.json();
    SBS={google:!!(j.external&&j.external.google),confirm:!j.mailer_autoconfirm}}
  catch(e){SBS={google:SBC.google,confirm:true,fail:true}}
  if(sbMode==='auth')renderAuth();return SBS;
}
function sbIntent(m){AU.mode=m==='signup'?'signup':'login';AU.err='';AU.info=''}
const localCount=()=>trades.filter(x=>!x.demo).length;
const localReal=()=>trades.some(x=>!x.demo)||PB.some(p=>!p.demo)||Object.keys(JR).length>0||S.accounts.some(a=>a.name||a.no)||S.tx.length>0;
function auGo(m){AU.mode=m;AU.err='';AU.info='';renderAuth()}
function pwField(id,ac,ph){return `<div class="pww"><input class="in" id="${id}" type="${AU.show?'text':'password'}" autocomplete="${ac}" placeholder="${ph}" required><button type="button" class="pwt" onclick="AU.show=!AU.show;const i=$('${id}');i.type=AU.show?'text':'password';this.textContent=t(AU.show?'au_hide':'au_show')">${t(AU.show?'au_hide':'au_show')}</button></div>`}
function renderAuth(){
  const a=$('authV');if(!a||sbMode!=='auth')return;
  const m=AU.mode,n=localCount(),g=SBS?SBS.google:SBC.google;
  const legal=t('au_legal').replace('{t}',`<a href="#" onclick="sbLegal('terms');return false">${t('au_terms')}</a>`).replace('{p}',`<a href="#" onclick="sbLegal('privacy');return false">${t('au_privacy')}</a>`);
  const logo=`<svg width="34" height="34" viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="9" fill="#94C5CC"/><path d="M9.5 22v-4.5M16 22V12.5M22.5 22V9" stroke="#000100" stroke-width="3.4" stroke-linecap="round"/></svg>`;
  const em=`<label class="fld"><span>${t('au_email')}</span><input class="in" id="au_em" type="email" inputmode="email" autocomplete="email" autocapitalize="off" spellcheck="false" placeholder="ornek@mail.com" value="${esc(AU.email)}" required></label>`;
  const btn=(lab)=>`<button class="btn pri full" type="submit" ${AU.busy?'disabled':''}>${AU.busy?t('au_wait'):lab}</button>`;
  const goo=g?`<div class="gwrap"><button type="button" class="btn full augo" onclick="sbGoogle()" ${AU.busy?'disabled':''}>${GICON}<span>${t(m==='signup'?'au_google_up':'au_google')}</span></button></div><div class="auor"><span>${t('au_or')}</span></div>`:'';
  let head,form,foot='';
  if(m==='signup'){
    head=[t('au_up_t'),t('au_up_s')];
    form=`<form class="auf" onsubmit="sbSignup();return false" novalidate>${goo}${em}
      <label class="fld"><span>${t('au_pw')}</span>${pwField('au_pw','new-password',t('au_pw_new_ph'))}<span class="hint">${t('au_pw_h')}</span></label>${btn(t('au_up_btn'))}</form>`;
    foot=`<p class="ausw">${t('au_have')} <button type="button" onclick="auGo('login')">${t('au_in_link')}</button></p><p class="aulegal">${legal}</p>`;
  }else if(m==='forgot'){
    head=[t('au_fg_t'),t('au_fg_s')];
    form=`<form class="auf" onsubmit="sbForgot();return false" novalidate>${em}${btn(t('au_fg_btn'))}</form>`;
    foot=`<p class="ausw"><button type="button" onclick="auGo('login')">← ${t('au_back_in')}</button></p>`;
  }else if(m==='sent'){
    head=[t('au_t2'),t(AU.kind==='verify'?'au_vf_s':'au_rs_s')];
    form=`<div class="auf"><div class="aulink">${ic('check')}<span>${t(AU.kind==='verify'?'au_vf_sent':'au_rs_sent',{e:`<b>${esc(AU.email)}</b>`})}</span></div><p class="aum">${t('au_spam')}</p>
      <div class="aulinks"><button type="button" onclick="auGo('login')">${t('au_back_in')}</button><button type="button" id="au_re" onclick="sbResend()" ${AU.cool>0?'disabled':''}>${AU.cool>0?t('au_resend_in',{s:AU.cool}):t('au_resend_l')}</button></div></div>`;
  }else if(m==='reset'){
    head=[t('au_np_t'),t('au_np_s')];
    form=`<form class="auf" onsubmit="sbNewPw();return false" novalidate><label class="fld"><span>${t('au_pw_new')}</span>${pwField('au_pw','new-password',t('au_pw_new_ph'))}<span class="hint">${t('au_pw_h')}</span></label>${btn(t('au_np_btn'))}</form>`;
  }else{
    head=[t('au_in_t'),t('au_in_s')];
    form=`<form class="auf" onsubmit="sbSignin();return false" novalidate>${goo}${em}
      <div class="fld"><div class="pwl"><label for="au_pw">${t('au_pw')}</label><button type="button" onclick="AU.email=($('au_em')||{}).value||AU.email;auGo('forgot')">${t('au_forgot')}</button></div>${pwField('au_pw','current-password','••••••••')}</div>${btn(t('au_in_btn'))}</form>`;
    foot=`<p class="ausw">${t('au_new')} <button type="button" onclick="auGo('signup')">${t('au_up_link')}</button></p>`;
  }
  a.innerHTML=`<div class="auw"><div class="auc">
    <div class="aub">${logo}<span>TradeLog</span></div>
    <h1>${head[0]}</h1><p class="aus">${head[1]}</p>
    ${AU.err?`<div class="alert" role="alert">${ic('alert')}<span>${esc(AU.err)}</span></div>`:''}${AU.info?`<div class="auinfo">${esc(AU.info)}</div>`:''}
    ${form}${foot}
    ${n&&(m==='login'||m==='signup')?`<p class="aunote">${ic('check')}<span>${t('au_local',{n})}</span></p>`:''}
    ${sbFramed&&sbFail?`<button class="btn sm ghost" onclick="sbMode='local';render()">${t('au_preview')}</button>`:''}
    <button class="auhome" onclick="window.showSite&&showSite()">← ${t('nav_home')}</button>
   </div>
   <div class="aup"><div class="aupi"><h2>${t('au_pt')}</h2><ul>${[1,2,3].map(i=>`<li>${ic('check')}<span><b>${t('au_p'+i)}</b>${t('au_p'+i+'d')}</span></li>`).join('')}</ul></div></div></div>`;
  if(!SBS)sbSettings();
  const f=$(m==='sent'?'au_re':AU.email&&m==='login'?'au_pw':'au_em')||$('au_pw');if(f&&!narrow())setTimeout(()=>{try{f.focus()}catch(e){}},30);
  if(g)gisMount();
}
const GICON='<svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>';
function sbLegal(k){if(window.showPage){showSite();showPage(k)}}
function sbErr(e){
  const c=(e&&e.code)||'',m=String((e&&(e.message||e.msg||e.error_description))||e||''),st=e&&e.status;
  if(c==='invalid_credentials'||/invalid login credentials/i.test(m))return t('au_e_cred');
  if(c==='user_already_exists'||c==='email_exists'||/already registered|already exists/i.test(m))return t('au_e_exists');
  if(c==='weak_password'||/password should be|at least/i.test(m))return t('au_e_weak');
  if(c==='email_not_confirmed'||/not confirmed/i.test(m))return t('au_e_unconf');
  if(c==='email_address_not_authorized'||/not authorized/i.test(m))return t('au_e_noauth');
  if(c==='same_password')return t('au_e_same');
  if(c==='signup_disabled'||/signups? not allowed/i.test(m))return t('au_e_closed');
  if(st===429||/rate limit|too many|seconds/i.test(m))return t('au_e_rate');
  if(c==='provider_disabled'||/provider is not enabled|unsupported provider/i.test(m))return t('au_e_gen');
  if(!sb||m==='lib'||/fetch|network|failed to|load/i.test(m))return t('au_net');
  if(/expired|invalid/i.test(m))return t('au_e_link');
  return t('au_e_gen');
}
function auVals(needPw){
  const em=(($('au_em')||{}).value||AU.email||'').trim().toLowerCase(),pw=($('au_pw')||{}).value||'';
  AU.email=em;
  if(em!==undefined&&$('au_em')&&!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em)){AU.err=t('au_e_mail');renderAuth();return null}
  if(needPw&&pw.length<8){AU.err=t(needPw==='any'?'au_e_pw':'au_e_weak');renderAuth();return null}
  return {em,pw};
}
async function auRun(fn){
  AU.busy=true;AU.err='';AU.info='';renderAuth();
  try{await fn()}catch(e){AU.err=sbErr(e);if(AU.err===t('au_net'))sbFail=true}
  AU.busy=false;if(sbMode==='auth')renderAuth();
}
function sbSignin(){const v=auVals('any');if(!v)return;auRun(async()=>{
  const c=await sbClient(),{data,error}=await c.auth.signInWithPassword({email:v.em,password:v.pw});if(error)throw error;
  AU.busy=false;await sbLogin(data.user)})}
function sbSignup(){const v=auVals(true);if(!v)return;auRun(async()=>{
  const c=await sbClient(),{data,error}=await c.auth.signUp({email:v.em,password:v.pw,options:{emailRedirectTo:location.origin+location.pathname}});if(error)throw error;
  if(data.user&&Array.isArray(data.user.identities)&&!data.user.identities.length)throw {code:'user_already_exists'};
  if(data.session){AU.busy=false;await sbLogin(data.user);return}
  AU.mode='sent';AU.kind='verify';AU.cool=60;sbCool()})}
function sbForgot(){const v=auVals(false);if(!v)return;auRun(async()=>{
  const c=await sbClient(),{error}=await c.auth.resetPasswordForEmail(v.em,{redirectTo:location.origin+location.pathname});if(error)throw error;
  AU.mode='sent';AU.kind='reset';AU.cool=60;sbCool()})}
function sbResend(){auRun(async()=>{
  const c=await sbClient();
  const {error}=AU.kind==='verify'?await c.auth.resend({type:'signup',email:AU.email,options:{emailRedirectTo:location.origin+location.pathname}}):await c.auth.resetPasswordForEmail(AU.email,{redirectTo:location.origin+location.pathname});
  if(error)throw error;AU.info=t('au_resent_l');AU.cool=60;sbCool()})}
function sbNewPw(){const v=auVals(true);if(!v)return;auRun(async()=>{
  const c=await sbClient(),{data,error}=await c.auth.updateUser({password:v.pw});if(error)throw error;
  sbRecovery=false;AU.busy=false;toast(t('au_pw_saved'));await sbLogin(data.user)})}
function sbCool(){clearInterval(sbCool.h);sbCool.h=setInterval(()=>{AU.cool--;const b=$('au_re');if(b){b.disabled=AU.cool>0;b.textContent=AU.cool>0?t('au_resend_in',{s:AU.cool}):t('au_resend_l')}if(AU.cool<=0)clearInterval(sbCool.h)},1000)}
/* Google's own "Sign in with Google" button (Google Identity Services). It runs on our domain, so Google's window
   names gotradelog.com / TradeLog instead of the Supabase project address; the ID token is then handed to Supabase.
   If Google's script can't load (blocked, Telegram, no client ID), our own button keeps the redirect sign-in. */
var GIS={p:null,ok:false,fail:false,ready:null,state:''};
/* our Google button, Google's window: popups don't work inside Telegram or an installed (home-screen) app, so those keep the redirect */
const gisUse=()=>!!SBC.gid&&!GIS.fail&&!(window.Telegram&&Telegram.WebApp&&Telegram.WebApp.initData)&&!(navigator.standalone||matchMedia('(display-mode: standalone)').matches)&&!!(window.crypto&&crypto.getRandomValues);
function gisLoad(){
  if(GIS.p)return GIS.p;
  GIS.p=new Promise((res,rej)=>{const sc=document.createElement('script');sc.src='https://accounts.google.com/gsi/client';sc.async=true;
    sc.onload=()=>window.google&&google.accounts&&google.accounts.oauth2?res():rej(new Error('gis'));sc.onerror=()=>rej(new Error('gis'));
    setTimeout(()=>rej(new Error('gis timeout')),8000);document.head.appendChild(sc)}).then(()=>{GIS.ok=true});
  GIS.p.catch(()=>{GIS.fail=true});
  return GIS.p;
}
/* is the "google" function set up (secret saved)? asked once per tab */
async function gisReady(){
  if(GIS.ready!=null)return GIS.ready;
  try{const v=sessionStorage.getItem('tradelog_gready');if(v)return GIS.ready=v==='1'}catch(e){}
  try{const r=await fetch(SBC.url+'/functions/v1/google',{method:'POST',headers:{apikey:SBC.key,'Content-Type':'application/json'},body:'{"ping":1}'});
    const j=await r.json();GIS.ready=!!(j&&j.ok&&j.ready)}catch(e){GIS.ready=false}
  try{sessionStorage.setItem('tradelog_gready',GIS.ready?'1':'0')}catch(e){}
  return GIS.ready;
}
/* loaded ahead of the click: the window has to open right on the click, or the browser blocks it */
function gisMount(){if(gisUse()){gisLoad().catch(()=>{});gisReady()}}
function gisPopup(){
  try{
    GIS.state=[...crypto.getRandomValues(new Uint8Array(16))].map(x=>x.toString(16).padStart(2,'0')).join('');
    google.accounts.oauth2.initCodeClient({client_id:SBC.gid,scope:'openid email profile',ux_mode:'popup',state:GIS.state,select_account:true,
      callback:gisCode,error_callback:gisErr}).requestCode();
    AU.err='';return true;
  }catch(e){GIS.fail=true;return false}
}
function gisErr(e){
  if(e&&e.type==='popup_failed_to_open')return sbGoogleRedirect();   // popup blocked: the usual way
  AU.busy=false;if(sbMode==='auth')renderAuth();                     // window closed: nothing to say
}
function gisCode(r){
  if(!r||r.error||!r.code||r.state!==GIS.state){AU.busy=false;if(r&&r.error&&r.error!=='access_denied')AU.err=t('au_e_gen');if(sbMode==='auth')renderAuth();return}
  auRun(async()=>{
    let j={};
    try{const res=await fetch(SBC.url+'/functions/v1/google',{method:'POST',headers:{apikey:SBC.key,'Content-Type':'application/json'},body:JSON.stringify({code:r.code})});j=await res.json()}catch(e){j={}}
    if(!j.ok||!j.id_token){
      if(j.error==='config'){GIS.fail=true;try{sessionStorage.setItem('tradelog_gready','0')}catch(e){}}
      return sbGoogleRedirect();                                      // couldn't finish here: the usual way still signs them in
    }
    const c=await sbClient(),{data,error}=await c.auth.signInWithIdToken({provider:'google',token:j.id_token});
    if(error)throw error;AU.busy=false;await sbLogin(data.user)});
}
function sbGoogle(){
  if(gisUse()&&GIS.ok&&GIS.ready&&gisPopup())return;
  return sbGoogleRedirect();
}
async function sbGoogleRedirect(){
  AU.busy=true;AU.err='';renderAuth();
  try{const c=await sbClient(),{error}=await c.auth.signInWithOAuth({provider:'google',options:{redirectTo:location.origin+location.pathname}});if(error)throw error}
  catch(e){AU.busy=false;AU.err=sbErr(e);renderAuth()}
}
/* profile: set or change the password (members who came in with Google or a link have none yet) */
function pwDlg(){
  openDlg(t('au_pw_dlg'),`<div class="fsec"><label class="fld"><span>${t('au_pw_new')}</span><input class="in" id="pw_new" type="password" autocomplete="new-password" placeholder="${t('au_pw_new_ph')}"><span class="hint">${t('au_pw_h')}</span></label></div>`,
    `<button class="btn" onclick="closeDlg()">${t('cancel')}</button><button class="btn pri" onclick="pwSave()">${t('save')}</button>`);
}
async function pwSave(){
  const v=$('pw_new').value;if(v.length<8){say(t('au_e_weak'));return}
  try{const {error}=await sb.auth.updateUser({password:v});if(error)throw error;closeDlg();toast(t('au_pw_saved'))}catch(e){say(sbErr(e))}
}

/* ---------- first sync after sign in ---------- */
async function sbLogin(user){
  if(!user)return;
  const prev=lsj(SBU,null);
  if(prev&&prev!==user.id)sbWipe();                 // the local copy belonged to someone else
  sbUser=user;sbMode='on';AU.info='';AU.err='';AU.mode='login';render();
  if(typeof viewIn==='function')viewIn();
  /* came from the Pro card on the site: show the Pro screen once signed in */
  try{if(localStorage.getItem('tradelog_want_pro')){localStorage.removeItem('tradelog_want_pro');setTimeout(()=>{if(typeof proDlg==='function')proDlg('gen')},900)}}catch(e){}
  try{
    setSync('ing');
    if(prev===user.id){await sbSync(true);mtPending();return}
    const srv=await sbCount();
    if(!srv.any){await sbPush();lss(SBU,user.id);if(localReal())toast(t('sb_moved'))}
    else if(!localReal()){await sbPull(true);lss(SBU,user.id);await sbPush()}
    else{
      const pick=await sbAsk(localCount(),srv.trades);
      if(pick==='server')await sbPull(true);
      else if(pick==='device'){const b={};for(const tb of TBL)b[tb]=Object.fromEntries((await sbIds(tb)).map(id=>[id,'']));lss(SBB,b)}
      else await sbPull(false,true);
      await sbPush();lss(SBU,user.id);
    }
    const was=$('view')&&$('view').querySelector('.skel');
    await sbProfLoad();sbPulled=Date.now();setSync('ok');render();if(was||trades.length)viewIn();
  }catch(e){setSync('err')}
  mtPending();
}
async function sbCount(){
  const o={any:false,trades:0};
  for(const tb of ['trades','accounts','playbooks','journal']){
    const {count,error}=await sb.from(tb).select('id',{count:'exact',head:true}).eq('deleted',false);if(error)throw error;
    if(tb==='trades')o.trades=count||0;if(count)o.any=true;
  }
  return o;
}
async function sbIds(tb){const out=[];let from=0;for(;;){const {data,error}=await sb.from(tb).select('id').range(from,from+999);if(error)throw error;out.push(...data.map(r=>r.id));if(data.length<1000)return out;from+=1000}}
function sbAsk(nl,ns){return new Promise(res=>{sbAskRes=res;
  openDlg(t('sb_both_t'),`<p style="margin:14px 0 4px;color:var(--ink2);font-size:14.5px">${t('sb_both_p',{a:nl,b:ns})}</p>
   <div class="links" style="margin-top:10px"><button onclick="sbPick('merge')"><b>${t('sb_merge')}</b><span class="hint" style="display:block">${t('sb_merge_d')}</span></button>
   <button onclick="sbPick('server')"><b>${t('sb_server')}</b><span class="hint" style="display:block">${t('sb_server_d')}</span></button>
   <button onclick="sbPick('device')"><b>${t('sb_device')}</b><span class="hint" style="display:block">${t('sb_device_d')}</span></button></div>`,'')})}
function sbPick(k){const r=sbAskRes;sbAskRes=null;closeDlg(true);if(r)r(k)}

/* ---------- push / pull ---------- */
function localRows(){
  return {accounts:S.accounts.map((a,i)=>[a.id,{...a,ord:i}]),trades:trades.map(x=>[String(x.id),x]),
    cash_tx:S.tx.map(z=>[z.id,z]),playbooks:PB.map(p=>[p.id,p]),journal:Object.entries(JR)};
}
const profData=()=>({day:S.day,str:S.str,maxT:S.maxT,dedup:S.dedup});
const rh=d=>hsh(JSON.stringify(d));
async function sbPush(){
  const base=lsj(SBB,{}),rows=localRows(),u=sbUser.id;let n=0;
  for(const tb of TBL){
    const b=base[tb]||{},cur={},up=[];
    rows[tb].forEach(([id,d])=>{const h=rh(d);cur[id]=h;if(b[id]!==h)up.push({user_id:u,id:String(id),data:d,deleted:false})});
    Object.keys(b).forEach(id=>{if(!(id in cur))up.push({user_id:u,id,data:{},deleted:true})});
    for(let i=0;i<up.length;i+=400){
      const ch=up.slice(i,i+400),{error}=await sb.from(tb).upsert(ch,{onConflict:'user_id,id'});if(error)throw error;
      ch.forEach(r=>{if(r.deleted)delete b[r.id];else b[r.id]=cur[r.id]});base[tb]=b;lss(SBB,base);
    }
    base[tb]=b;n+=up.length;
  }
  const ph=rh(profData());
  if(base.profile!==ph){const {error}=await sb.from('profiles').update({settings:profData()}).eq('id',u);if(error)throw error;base.profile=ph;lss(SBB,base)}
  lss(SBB,base);return n;
}
/* full: replace the local copy with the server's. merge: keep local rows the server doesn't have. */
async function sbPull(full,merge){
  const cur=full||merge?{}:lsj(SBR,{}),base=full?{}:lsj(SBB,{});
  const got={};
  for(const tb of TBL){
    const rows=[];let ts=cur[tb]?new Date(new Date(cur[tb]).getTime()-5000).toISOString():null,lid='';
    for(;;){
      let q=sb.from(tb).select('id,data,deleted,updated_at').order('updated_at',{ascending:true}).order('id',{ascending:true}).limit(1000);
      if(ts)q=lid?q.or(`updated_at.gt.${ts},and(updated_at.eq.${ts},id.gt.${lid})`):q.gte('updated_at',ts);
      if(full||merge)q=q.eq('deleted',false);
      const {data,error}=await q;if(error)throw error;
      rows.push(...data);if(data.length<1000)break;
      ts=data[data.length-1].updated_at;lid=data[data.length-1].id;
    }
    got[tb]=rows;if(rows.length)cur[tb]=rows[rows.length-1].updated_at;
  }
  const {data:pr,error:pe}=await sb.from('profiles').select('*').eq('id',sbUser.id).maybeSingle();if(pe)throw pe;if(pr){sbProf=pr;setTimeout(proWelcomeCheck,1500)}
  if(full){trades=[];PB=[];JR={};S.accounts=[];S.tx=[]}
  const b=tb=>base[tb]=base[tb]||{};
  // trades
  if(got.trades.length){
    const m=new Map(trades.map(x=>[String(x.id),x])),sigs=merge?new Set(trades.map(sig)):null;
    got.trades.forEach(r=>{if(r.deleted){m.delete(r.id);delete b('trades')[r.id];return}
      const x=norm({...r.data,id:+r.id||r.data.id});if(!x)return;
      if(merge&&!m.has(r.id)&&sigs.has(sig(x)))return;      // same trade under another id on this device
      m.set(r.id,x);b('trades')[r.id]=rh(x)});
    trades=[...m.values()];
  }
  // accounts (+ order) and cash movements live inside S
  if(got.accounts.length||full){
    const m=new Map(S.accounts.map((a,i)=>[a.id,{...a,ord:a.ord!=null?a.ord:i}]));
    got.accounts.forEach(r=>{if(r.deleted){m.delete(r.id);delete b('accounts')[r.id]}else m.set(r.id,r.data)});
    const list=[...m.values()].sort((x,y)=>(x.ord||0)-(y.ord||0));
    S=normS({...S,accounts:list.length?list:null,tx:S.tx});
    S.accounts.forEach((a,i)=>{if(got.accounts.some(r=>r.id===a.id&&!r.deleted))b('accounts')[a.id]=rh({...a,ord:i})});
  }
  if(got.cash_tx.length){
    const m=new Map(S.tx.map(z=>[z.id,z]));
    got.cash_tx.forEach(r=>{if(r.deleted){m.delete(r.id);delete b('cash_tx')[r.id]}else m.set(r.id,r.data)});
    S=normS({...S,tx:[...m.values()]});
    S.tx.forEach(z=>{if(got.cash_tx.some(r=>r.id===z.id))b('cash_tx')[z.id]=rh(z)});
  }
  if(got.playbooks.length){
    const m=new Map(PB.map(p=>[p.id,p]));
    got.playbooks.forEach(r=>{if(r.deleted){m.delete(r.id);delete b('playbooks')[r.id]}else m.set(r.id,{...r.data,id:r.id})});
    PB=normPB([...m.values()]);PB.forEach(p=>{if(got.playbooks.some(r=>r.id===p.id))b('playbooks')[p.id]=rh(p)});
  }
  got.journal.forEach(r=>{if(r.deleted){delete JR[r.id];delete b('journal')[r.id]}else{JR[r.id]=r.data;b('journal')[r.id]=rh(r.data)}});
  if(pr&&pr.settings&&Object.keys(pr.settings).length&&(full||rh(pr.settings)!==base.profile)){
    const p=pr.settings;S=normS({...S,day:p.day,str:p.str,maxT:p.maxT,dedup:p.dedup});base.profile=rh(profData());
  }
  if(full&&!S.accounts.length)S=normS({...S,accounts:null});
  fixAcc();sortT();
  put(K.trades,trades,false);put(K.set,S,false);put(K.pb,PB,false);put(K.jr,JR,false);
  lss(SBB,base);lss(SBR,cur);
  return Object.values(got).reduce((n,r)=>n+r.length,0);
}
async function sbSync(pull){
  if(!sbOn()||!sbUser||RO)return;
  if(sbBusy){sbAgain=sbAgain||pull||'push';return}
  sbBusy=true;setSync('ing');
  try{
    if(!sb)await sbClient();
    await sbPush();
    if(pull){const was=trades.length;const n=await sbPull(false);sbPulled=Date.now();const m=await syTake();if((n||m)&&!formOpen()){render();if(!was&&trades.length)viewIn()}
      /* asking the server for new trades can take a minute (it may start the terminal), so it runs in the background */
      syAuto().then(k=>k?syTake(true):0).then(k=>{if(k&&!formOpen())render()})}
    sbFail=false;setSync('ok');
  }catch(e){
    sbFail=true;setSync(navigator.onLine===false||/fetch|network/i.test(String((e&&e.message)||''))?'off':'err');
    if(e&&(e.status===401||/jwt|token/i.test(String(e.message||''))))sbStart();
    clearTimeout(sbT);sbT=setTimeout(()=>{sbT=null;sbSync(false)},20000);
  }
  sbBusy=false;
  if(sbAgain){const p=sbAgain===true;sbAgain=false;sbSync(p)}
}
/* called by put() on every local save */
function sbQ(){
  if(sbMode==='tg'||sbMode==='local'||!sbMode)return false;
  if(!sbOn()||!sbUser||RO)return true;
  setSync('ing');clearTimeout(sbT);sbT=setTimeout(()=>{sbT=null;sbSync(false)},1200);return true;
}

/* ---------- account ---------- */
function sbWipe(){
  trades=[];PB=[];JR={};S=normS({});V={acc:'all',per:'all'};
  [K.trades,K.set,K.pb,K.jr,K.view,UPD,SBB,SBR,SBU,'tradelog_gs_off'].forEach(k=>{try{localStorage.removeItem(k)}catch(e){}});
  put(K.set,S,false);
}
function accountCard(){
  if(!sbOn()||!sbUser)return '';
  const e=sbUser.email||'';
  return `<div class="card"><div class="ch"><h2>${t('sb_acc')}</h2><small>${planLabel()}</small></div><div class="cb">
   <div class="srow" style="border-top:0;padding-top:4px"><div style="display:flex;gap:12px;align-items:center;min-width:0"><span class="avt">${esc((e[0]||'?').toUpperCase())}</span><div style="min-width:0"><div class="t" style="overflow:hidden;text-overflow:ellipsis">${esc(e)}</div><div class="d" id="syncSt3">${syncSt?t('sbs_'+syncSt):''}</div></div></div></div>
   <div class="links" style="margin-top:6px"><button onclick="sbSync(true)">${t('sb_now')}</button><button onclick="pwDlg()">${t('au_pw_dlg')}</button>${isPro()?'':`<button onclick="proDlg('gen')">${t('pro_see')}</button>`}<button onclick="sbLogout()">${t('sb_out')}</button><button class="dan" onclick="sbDelete()">${t('sb_del')}</button></div>
   <p class="hint" style="margin-top:8px">${t('sb_acc_h')}</p></div></div>`;
}
async function sbLogout(){
  if(RO)mtExit(true);
  let ok=true;try{if(sb&&sbUser)await sbPush()}catch(e){ok=false}
  if(!await ask(t(ok?'sb_out_c':'sb_out_c2')))return;
  try{if(sb)await sb.auth.signOut({scope:'local'})}catch(e){}
  try{localStorage.removeItem(SBK)}catch(e){}
  sbProf={};sbWipe();sbUser=null;sbMode='auth';AU.mode='login';AU.err='';closeDlg(true);go('dash');
}
async function sbDelete(){
  if(!await ask(t('sb_del_c')))return;
  try{
    await shotPurge();await syDropAll();
    const {error}=await sb.rpc('delete_my_account');if(error)throw error;
    try{await sb.auth.signOut({scope:'local'})}catch(e){}
    try{localStorage.removeItem(SBK)}catch(e){}
    sbWipe();sbUser=null;sbMode='auth';AU.mode='signup';AU.email='';closeDlg(true);go('dash');toast(t('sb_deleted'));
  }catch(e){say(t('sb_del_err'))}
}
/* ---------- trade screenshots: private "shots" bucket, one folder per member ----------
   Images are shrunk in the browser (max 1920px, WebP) before upload. Until Pro opens (PRO_LIVE)
   everyone gets the Pro allowance; after that free = 1 per trade, Pro = 10. */
const SHOT_B='shots';var PRO_LIVE=false;   // var: the first render runs before this file
var shotCache={},shotBusy=0;
const shotMax=()=>planLimit('shots');
function shotsReady(){return sbOn()&&!!sbUser&&!!sb}
async function shotShrink(file){
  let src;try{src=await createImageBitmap(file)}catch(e){src=await new Promise((ok,no)=>{const i=new Image();i.onload=()=>ok(i);i.onerror=no;i.src=URL.createObjectURL(file)})}
  const W=src.width,H=src.height,k=Math.min(1,1920/Math.max(W,H)),w=Math.max(1,Math.round(W*k)),h=Math.max(1,Math.round(H*k));
  const c=document.createElement('canvas');c.width=w;c.height=h;c.getContext('2d').drawImage(src,0,0,w,h);
  let b=await new Promise(r=>c.toBlob(r,'image/webp',.82));
  if(!b||b.type!=='image/webp')b=await new Promise(r=>c.toBlob(r,'image/jpeg',.85));
  return b;
}
async function shotUp(file){
  const b=await shotShrink(file),ext=b.type==='image/webp'?'webp':'jpg',p=`${sbUser.id}/${Date.now().toString(36)}${sid()}.${ext}`;
  const {error}=await sb.storage.from(SHOT_B).upload(p,b,{contentType:b.type,cacheControl:'31536000',upsert:false});if(error)throw error;
  shotCache[p]={u:URL.createObjectURL(b),exp:Infinity};return p;
}
function shotRemove(paths){paths=(paths||[]).filter(Boolean);if(!paths.length||!sb)return;sb.storage.from(SHOT_B).remove(paths).catch(()=>{})}
async function shotSign(paths){
  const need=paths.filter(p=>!shotCache[p]||shotCache[p].exp<Date.now()+60000);
  if(need.length){const {data,error}=await sb.storage.from(SHOT_B).createSignedUrls(need,3600);if(error)throw error;
    (data||[]).forEach(d=>{if(d&&d.signedUrl&&d.path)shotCache[d.path]={u:d.signedUrl,exp:Date.now()+3500e3}})}
}
async function hydrateShots(root){
  const els=[...(root||document).querySelectorAll('img[data-shot]')];if(!els.length)return;
  try{if(!sb)await sbClient();await shotSign([...new Set(els.map(e=>e.dataset.shot))])}catch(e){}
  els.forEach(e=>{const v=shotCache[e.dataset.shot];if(v)e.src=v.u;else{const s=e.closest('.shot');if(s)s.classList.add('miss')}});
}
function shotsForm(){
  const el=$('f_shots');if(!el)return;
  if(!shotsReady()){el.innerHTML=`<p class="hint" style="margin:0">${t(sbMode==='tg'?'shot_tg':'shot_need')}</p>`;return}
  const max=shotMax();
  el.innerHTML=fShots.map((p,i)=>`<div class="shot"><img data-shot="${esc(p)}" alt=""><button type="button" class="shx" onclick="shotDel(${i})" aria-label="${t('shot_rm')}">×</button></div>`).join('')
    +(shotBusy?`<div class="shot add busy"><span>${t('shot_up')}</span></div>`:fShots.length<max?`<button type="button" class="shot add" onclick="$('fileShot').click()">${ic('plus')}<span>${t('shot_add')}</span><small>${t('shot_paste')}</small></button>`:'');
  hydrateShots(el);
}
function shotDel(i){fShots.splice(i,1);shotsForm()}
async function shotAdd(files){
  files=[...files].filter(f=>/^image\//.test(f.type));if(!files.length||!shotsReady())return;
  const room=shotMax()-fShots.length;if(room<=0){toast(t('shot_max',{n:shotMax()}));return}
  if(files.length>room)toast(t('shot_max',{n:shotMax()}));
  shotBusy++;shotsForm();
  for(const f of files.slice(0,room)){try{const p=await shotUp(f);fShots.push(p);fShotsNew.push(p)}catch(e){toast(t('shot_err'))}}
  shotBusy--;shotsForm();
}
function shotGrid(paths){return paths&&paths.length?`<div class="shotg">${paths.map(p=>`<button type="button" class="shot" onclick="shotView('${esc(p)}')" aria-label="${t('shot_view')}"><img data-shot="${esc(p)}" alt=""></button>`).join('')}</div>`:''}
function shotView(p){
  const v=shotCache[p];if(!v)return;
  let el=$('shotLb');if(!el){el=document.createElement('div');el.id='shotLb';el.className='shotlb';el.onclick=()=>el.classList.remove('on');$('appRoot').appendChild(el)}
  el.innerHTML=`<img src="${esc(v.u)}" alt=""><button class="xb" aria-label="${t('close')}">×</button>`;el.classList.add('on');
}
async function shotPurge(){
  if(!sb||!sbUser)return;
  try{const {data:fs}=await sb.storage.from('share').list(sbUser.id,{limit:1000});   // shared copies: one sub-folder per link
    for(const f of fs||[]){const {data:xs}=await sb.storage.from('share').list(`${sbUser.id}/${f.name}`,{limit:100});if(xs&&xs.length)await sb.storage.from('share').remove(xs.map(x=>`${sbUser.id}/${f.name}/${x.name}`))}}catch(e){}
  try{for(let i=0;i<50;i++){const {data,error}=await sb.storage.from(SHOT_B).list(sbUser.id,{limit:100});if(error||!data||!data.length)return;
    const {error:e2}=await sb.storage.from(SHOT_B).remove(data.map(f=>`${sbUser.id}/${f.name}`));if(e2)return}}catch(e){}
}
document.addEventListener('paste',e=>{if(!formOpen()||!shotsReady())return;const fs=[...((e.clipboardData&&e.clipboardData.files)||[])].filter(f=>/^image\//.test(f.type));if(fs.length){e.preventDefault();shotAdd(fs)}});
document.addEventListener('keydown',e=>{const l=$('shotLb');if(e.key==='Escape'&&l&&l.classList.contains('on')){e.stopPropagation();l.classList.remove('on')}},true);
(()=>{const i=$('fileShot');if(i)i.addEventListener('change',function(){shotAdd(this.files);this.value=''})})();

/* ---------- share links: a snapshot of one trade or one week, readable by anyone with the link ----------
   Like Tradervue's shared trades: the page carries TradeLog's brand and a "start free" call to action. */
const SHARE_B='share';
var pubMode=null,shOpt={};
const homePath=()=>window.TL_PAGE?TL_PAGE.base:location.pathname;
const shUrl=id=>location.origin+homePath()+'#/p/'+id;
const shId=()=>{const a='ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789',r=new Uint8Array(12);crypto.getRandomValues(r);return [...r].map(v=>a[v%a.length]).join('')};
function shTrade(x,o){
  const a=accOf(x.account),d={v:1,sym:x.symbol,dir:x.dir,date:x.date,time:x.time,out:x.outcome,r:x.rrActual,setup:x.setup,plan:x.plan,rating:x.rating,by:o.by||''};
  if(o.money&&has(x.pnl)){d.pnl=x.pnl;d.cur=a.cur}
  if(o.notes&&x.notes)d.notes=x.notes;
  return d;
}
function shWeek(m,o){
  const w=wkData(m),s=w.s,d={v:1,m:w.m,e:w.e,net:s.hasR?s.tot:null,n:s.n,wr:s.wr,pf:s.pf===Infinity?999:s.pf,green:w.green,act:w.act.length,days:w.days.map(x=>({d:x.d,n:x.n,r:x.r})),by:o.by||''};
  if(w.bestT)d.best={sym:w.bestT.symbol,r:w.bestT.rrActual};
  if(w.setup)d.setup={k:w.setup.k,r:w.setup.s.tot};
  if(o.focus&&w.focus.length)d.focus=w.focus.map(([k,x])=>[k,x]);
  const n=JR[wkNoteK(m)];if(o.note&&n&&n.r)d.note=n.r;
  return d;
}
function shCard(kind,d){
  const by=`<div class="shby">${esc(d.by?t('sh_by',{k:d.by}):t('sh_anon'))} · <b>TradeLog</b></div>`;
  if(kind==='week'){
    const pf=d.pf==null?'—':d.pf>=999?'∞':(+d.pf).toFixed(2);
    return `<div class="shc"><div class="shk">${t('wk_t')}</div><div class="shm">${esc(wkRange(d.m,d.e))}</div>
      <div class="wktop" style="padding:16px 0 0"><div><div class="lbl">${t('wk_net')}</div><div class="big ${cls(d.net)}">${fr(d.net)}</div>
      <div class="hfacts"><span><b>${d.n}</b> ${t('trades_l')}</span><span>${t('k_wr')} <b>${pc(d.wr)}</b></span><span>${t('k_pf')} <b>${pf}</b></span><span>${t('wk_green')} <b>${d.green} / ${d.act}</b></span></div></div>${wkBars(d.days)}</div>
      ${d.best||d.setup?`<div style="margin-top:14px">${statList([d.best?[t('wk_best_t'),`${esc(d.best.sym)} <span class="${cls(d.best.r)}">${fr(d.best.r)}</span>`]:null,d.setup?[t('wk_best_s'),`${esc(d.setup.k)} <span class="pos">${fr(d.setup.r)}</span>`]:null].filter(Boolean))}</div>`:''}
      ${d.focus?`<h4 class="shh4">${t('wk_focus')}</h4>${d.focus.map(([k,x])=>`<div class="ins ${esc(k)}"><i></i><div>${esc(x)}</div></div>`).join('')}`:''}
      ${d.note?`<h4 class="shh4">${t('wk_note')}</h4><div class="note">${esc(d.note)}</div>`:''}${by}</div>`;
  }
  const out=['Win','Loss','BE'].includes(d.out)?d.out:'BE';
  const f=(l,v)=>`<div>${l}<b>${v}</b></div>`;
  const facts=[f(t('h_date'),esc(dFmt(d.date,{day:'numeric',month:'long',year:'numeric'}))+(d.time?' '+esc(d.time):''))];
  if(d.setup)facts.push(f(t('h_setup'),esc(d.setup)));
  if(d.plan)facts.push(f(t('h_plan'),d.plan==='yes'?`<span class="pos">${t('plan_yes')}</span>`:`<span class="neg">${t('plan_no')}</span>`));
  if(d.rating)facts.push(f(t('h_rating'),`<span style="color:var(--be)">${stars(d.rating)}</span>`));
  if(has(d.pnl))facts.splice(1,0,f('PnL',`<span class="${cls(d.pnl)}">${money(d.pnl,1,d.cur)}</span>`));
  return `<div class="shc"><div class="dhead"><span class="sym" style="font-size:20px">${esc(d.sym)}</span>${d.dir?`<span class="side-${esc(d.dir[0].toLowerCase())}">${esc(d.dir)}</span>`:''}<span class="badge ${out.toLowerCase()}">${t('o_'+out)}</span><span class="rv ${cls(d.r)}" style="margin-left:auto;font-size:26px">${fr(d.r)}</span></div>
    <div class="facts">${facts.join('')}</div>
    ${d.shots&&d.shots.length?`<div class="shotg" style="margin-top:14px">${d.shots.map(u=>`<a class="shot" href="${esc(u)}" target="_blank" rel="noopener"><img src="${esc(u)}" alt="" loading="lazy"></a>`).join('')}</div>`:''}
    ${d.notes?`<h4 class="shh4">${t('l_notes')}</h4><div class="note">${esc(d.notes)}</div>`:''}${by}</div>`;
}
async function shFind(kind,ref){const {data,error}=await sb.from('shares').select('id,created_at,views').eq('kind',kind).eq('ref',String(ref)).order('created_at',{ascending:false}).limit(1);if(error)throw error;return data[0]||null}
async function shareDlg(kind,ref){
  if(!shotsReady()){toast(t('shot_need'));return}
  let ex=null;try{ex=await shFind(kind,ref)}catch(e){toast(t('au_net'));return}
  if(ex)return shReadyDlg(kind,ex.id);
  const x=kind==='trade'?trades.find(z=>String(z.id)===String(ref)):null;
  let by='';try{by=localStorage.getItem('tradelog_share_by')||''}catch(e){}
  shOpt={kind,ref,by,notes:false,money:false,shots:!!(x&&x.shots&&x.shots.length),focus:false,note:false};
  const box=(k,lab,show)=>show?`<label class="check"><input type="checkbox" ${shOpt[k]?'checked':''} onchange="shOpt.${k}=this.checked;shPrev()"><span>${lab}</span></label>`:'';
  const n=kind==='week'?JR[wkNoteK(ref)]:null;
  const opts=kind==='trade'?box('notes',t('sh_o_notes'),!!x.notes)+box('money',t('sh_o_money'),has(x.pnl))+box('shots',t('sh_o_shots'),!!(x.shots&&x.shots.length))
    :box('focus',t('sh_o_focus'),wkData(ref).focus.length>0)+box('note',t('sh_o_note'),!!(n&&n.r));
  openDlg(t(kind==='trade'?'sh_t_trade':'sh_t_week'),`<p class="hint" style="margin:14px 0 12px;font-size:13.5px">${t('sh_p')}</p>
    <div class="fsec">${opts}<label class="fld" style="margin-top:10px"><span>${t('sh_name')}</span><input class="in" id="sh_by" value="${esc(by)}" maxlength="40" placeholder="${t('sh_name_ph')}" oninput="shOpt.by=this.value.trim();shPrev()"></label></div>
    <h4 class="lgh" style="margin-top:16px">${t('sh_prev')}</h4><div id="shPrev" class="shpv"></div>`,
    `<button class="btn" onclick="closeDlg()">${t('cancel')}</button><button class="btn pri" id="shMake" onclick="shMake()">${ic('link')}${t('sh_make')}</button>`,true);
  shPrev();
}
function shData(){const o=shOpt;if(o.kind==='trade'){const x=trades.find(z=>String(z.id)===String(o.ref));return x?shTrade(x,o):null}return shWeek(o.ref,o)}
function shPrev(){const el=$('shPrev');if(!el)return;const d=shData();if(!d)return;
  if(shOpt.kind==='trade'&&shOpt.shots){const x=trades.find(z=>String(z.id)===String(shOpt.ref));d.shots=(x.shots||[]).map(p=>shotCache[p]?shotCache[p].u:'').filter(Boolean)}
  el.innerHTML=shCard(shOpt.kind,d)}
async function shMake(){
  const b=$('shMake');if(b){b.disabled=true;b.textContent=t('sh_making')}
  const o={...shOpt},id=shId(),d=shData(),u=sbUser.id;
  try{
    try{localStorage.setItem('tradelog_share_by',o.by||'')}catch(e){}
    if(o.kind==='trade'&&o.shots){
      const x=trades.find(z=>String(z.id)===String(o.ref)),urls=[];
      for(const [i,p] of (x.shots||[]).entries()){const dst=`${u}/${id}/${i}.${p.split('.').pop()}`;
        const {error}=await sb.storage.from(SHOT_B).copy(p,dst,{destinationBucket:SHARE_B});if(error)throw error;
        urls.push(sb.storage.from(SHARE_B).getPublicUrl(dst).data.publicUrl)}
      d.shots=urls;
    }
    const {error}=await sb.from('shares').insert({id,user_id:u,kind:o.kind,ref:String(o.ref),data:d});if(error)throw error;
    hap('success');shReadyDlg(o.kind,id,true);
  }catch(e){if(b){b.disabled=false;b.innerHTML=ic('link')+t('sh_make')}say(t('sh_err'))}
}
function shReadyDlg(kind,id,fresh){
  const u=shUrl(id);
  openDlg(t(fresh?'sh_ready':kind==='trade'?'sh_t_trade':'sh_t_week'),`<p class="hint" style="margin:14px 0 10px;font-size:13.5px">${t('sh_p')}</p>
    <div class="shlink"><input class="in" id="shU" readonly value="${esc(u)}" onclick="this.select()"><button class="btn pri" onclick="shCopy('${id}')">${ic('copy')}${t('sh_copy')}</button></div>`,
    `<button class="btn dan" onclick="shRevoke('${id}')">${t('sh_revoke')}</button><a class="btn" href="${esc(u)}" target="_blank" rel="noopener">${t('sh_open')}</a>`);
  if(fresh)shCopy(id,true);
}
function shCopy(id,silent){const u=shUrl(id);
  (navigator.clipboard?navigator.clipboard.writeText(u):Promise.reject()).then(()=>toast(t('copied'))).catch(()=>{if(!silent)showTxt(t('sh_copy'),'',u,t('copy'))})}
async function shRevoke(id){
  if(!await ask(t('sh_revoke_c')))return;
  try{
    const {error}=await sb.from('shares').delete().eq('id',id);if(error)throw error;
    const {data}=await sb.storage.from(SHARE_B).list(`${sbUser.id}/${id}`,{limit:100});
    if(data&&data.length)await sb.storage.from(SHARE_B).remove(data.map(f=>`${sbUser.id}/${id}/${f.name}`));
    closeDlg(true);toast(t('sh_revoked'));if(cv==='set')shList();
  }catch(e){say(t('sb_del_err'))}
}
function shareCard(){return shotsReady()?`<div class="card"><div class="ch"><h2>${t('sh_list')}</h2><small>${t('sh_list_s')}</small></div><div class="cb" id="shareList"><p class="hint">${t('sh_loading')}</p></div></div>`:''}
async function shList(){
  const el=$('shareList');if(!el||!sb)return;
  try{const {data,error}=await sb.from('shares').select('id,kind,data,views,created_at').order('created_at',{ascending:false}).limit(50);if(error)throw error;
    el.innerHTML=data.length?data.map(r=>{const d=r.data||{},title=r.kind==='week'?`${t('wk_t')} · ${esc(wkRange(d.m,d.e))}`:`${esc(d.sym||'')} <span class="${cls(d.r)}">${fr(d.r)}</span> · ${esc(dFmt(d.date||day()))}`;
      return `<div class="srow"><div style="min-width:0"><div class="t">${title}</div><div class="d">${t('sh_views',{n:r.views})} · ${esc(dFmt(r.created_at.slice(0,10)))}</div></div><div class="shacts"><button class="btn sm" onclick="shCopy('${r.id}')">${ic('copy')}</button><a class="btn sm" href="${esc(shUrl(r.id))}" target="_blank" rel="noopener">${t('sh_open')}</a><button class="btn sm dan" onclick="shRevoke('${r.id}')">${t('sh_revoke')}</button></div></div>`}).join('')
      :`<p class="hint">${t('sh_list_empty')}</p>`;
  }catch(e){el.innerHTML=`<p class="hint">${t('au_net')}</p>`}
}
/* public page (#/p/<id>): no sign-in needed */
async function pubShow(id){
  pubMode=id;const v=$('pubV');if(!v)return;
  const site=document.getElementById('site');if(site)site.hidden=true;$('appRoot').hidden=false;
  authGate();window.scrollTo(0,0);
  const logo=`<svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="9" fill="#94C5CC"/><path d="M9.5 22v-4.5M16 22V12.5M22.5 22V9" stroke="#000100" stroke-width="3.4" stroke-linecap="round"/></svg>`;
  const shell=inner=>`<div class="pubw"><header class="pubh"><a href="#" class="aub" onclick="pubClose();return false">${logo}<span>TradeLog</span></a><button class="btn pri sm" onclick="pubStart()">${t('sh_cta')}</button></header>${inner}
    <div class="pubcta"><h3>${t('sh_cta_t')}</h3><p>${t('sh_cta_p')}</p><button class="btn pri" onclick="pubStart()">${t('sh_cta')}${ic('arrow')}</button></div></div>`;
  v.innerHTML=shell(`<div class="card"><div class="cb" style="padding:22px"><p class="hint">${t('sh_loading')}</p></div></div>`);
  try{
    const r=await fetch(SBC.url+'/rest/v1/rpc/get_share',{method:'POST',headers:{apikey:SBC.key,'Content-Type':'application/json'},body:JSON.stringify({p_id:id})});
    const j=r.ok?await r.json():null;
    v.innerHTML=shell(j&&j.data?`<div class="card"><div class="cb" style="padding:22px">${shCard(j.kind,j.data)}</div></div>`
      :`<div class="card"><div class="cb" style="padding:28px;text-align:center"><h2 style="font:700 22px var(--fd)">${t('sh_gone_t')}</h2><p class="hint" style="margin-top:8px">${t('sh_gone_p')}</p></div></div>`);
  }catch(e){v.innerHTML=shell(`<div class="card"><div class="cb" style="padding:22px"><p class="hint">${t('au_net')}</p></div></div>`)}
}
function pubClose(){pubMode=null;try{history.replaceState(null,'',location.pathname)}catch(e){}const v=$('pubV');if(v)v.hidden=true;if(window.showSite)showSite()}
function pubStart(){pubMode=null;try{history.replaceState(null,'',location.pathname+'#/app')}catch(e){}const v=$('pubV');if(v)v.hidden=true;sbIntent(sbOn()?'login':'signup');if(window.showApp)showApp();else render()}
window.addEventListener('hashchange',()=>{const m=location.hash.match(/^#\/p\/([A-Za-z0-9]{10,24})$/);if(m)pubShow(m[1]);else if(mtCatch()){if(sbOn())mtPending();else{sbIntent('signup');AU.info=t('mt_need_login');if(window.showApp)showApp()}}});

/* ---------- plans: Free / Pro / Pro trial ----------
   The profile row says which plan a member is on (members can't change it themselves).
   Until Pro opens (PRO_LIVE=false) nothing is limited; Pro-only features that don't exist yet
   open the Pro screen with a "tell me when Pro opens" waitlist. */
var sbProf={};
function planNow(){const p=sbProf||{};if(p.plan==='pro')return 'pro';if(p.trial_ends_at&&new Date(p.trial_ends_at)>new Date())return 'trial';return 'free'}
const isPro=()=>planNow()!=='free';
const PLAN_LIM={accounts:[2,20],shots:[1,10]};
const planLimit=k=>!PRO_LIVE?PLAN_LIM[k][1]:PLAN_LIM[k][isPro()?1:0];
function planLabel(){const p=planNow();if(p==='pro')return sbProf.sub_status==='trialing'?t('plan_pro_tr'):t('plan_pro');if(p==='trial')return t('plan_trial',{n:Math.max(1,Math.ceil((new Date(sbProf.trial_ends_at)-new Date())/864e5))});return t('plan_free_n')}
/* returns true (and shows the Pro screen) when the free plan's limit is reached */
function planGate(k){
  if(!PRO_LIVE||isPro())return false;
  const used=k==='accounts'?actAccs().filter(a=>a.name||a.no||trades.some(x=>x.account===a.id)).length:0;
  if(used<planLimit(k))return false;
  proDlg(k);return true;
}
async function sbProfLoad(){try{const {data}=await sb.from('profiles').select('*').eq('id',sbUser.id).maybeSingle();if(data)sbProf=data}catch(e){}}
const PRO_F=[['sync','link'],['accounts','dash'],['ai','rep'],['shots','up'],['mentor','user']];
function proDlg(src){
  src=PRO_F.some(f=>f[0]===src)?src:'gen';
  const on=sbOn()&&sbUser,w=sbProf&&sbProf.pro_waitlist,list=[...PRO_F].sort((a,b)=>(b[0]===src)-(a[0]===src)),pay=payOn();
  const amt=k=>t(k==='year'?'pay_amt_y':'pay_amt_m'),end=new Date(Date.now()+7*864e5).toLocaleDateString(loc(),{day:'numeric',month:'long'});
  const price=pay?`<div class="pivs" role="radiogroup">${['month','year'].map(k=>`<button type="button" role="radio" class="piv${PAYIV===k?' on':''}" aria-checked="${PAYIV===k}" onclick="PAYIV='${k}';proDlg('${src}')"><b>${k==='month'?'$19':'$159'}</b><span>${t(k==='month'?'pay_mo':'pay_yr_m')}</span>${k==='year'?`<em>${t('pay_save')}</em>`:''}</button>`).join('')}</div>`
      +(payTrial()?`<div class="ptl"><div><span>${t('pay_today')}</span><b>$0</b><small>${t('pay_today_s')}</small></div><div><span>${end}</span><b>${amt(PAYIV)}</b><small>${t('pay_then_s')}</small></div></div><p class="hint payh">${t('pay_fine')}</p>`
        :`<div class="ptl"><div><span>${t('pay_today')}</span><b>${amt(PAYIV)}</b><small>${t(PAYIV==='year'?'pay_ren_y':'pay_ren_m')}</small></div></div><p class="hint payh">${t('pay_fine')}</p>`)
    :`<p class="proprice"><b>$19</b> ${t('pro_mo')} · <b>$159</b> ${t('pro_yr')}</p><p class="hint" style="margin-top:6px">${t('pro_trial')}</p>`;
  openDlg('',`<div class="prod"><div class="prohd"><span class="probadge">PRO</span>${PRO_LIVE||pay?'':`<span class="soon">${t('soon_l')}</span>`}${pay&&paySandbox()?`<span class="soon">TEST</span>`:''}</div>
    <h3>${t('pro_h_'+src)}</h3><p class="prop">${t('pro_p_'+src)}</p>
    <ul class="prol">${list.map(([k,i])=>`<li class="${k===src?'on':''}"><span class="pri">${ic(i)}</span><span>${t('pro_f_'+k)}</span></li>`).join('')}</ul>
    ${price}</div>`,
    `<button class="btn" onclick="closeDlg()">${t('close')}</button>${pay?`<button class="btn pri" id="payGo" onclick="payCheckout()">${t(payTrial()?'pay_go':'pay_go2')}</button>`:w?`<button class="btn pri" disabled>${ic('check')}${t('pro_waited')}</button>`:`<button class="btn pri" onclick="proWait()">${t('pro_wait')}</button>`}`);
  const h=$('dTitle');if(h)h.textContent=t('pro_title');
}
/* ---------- Pro payments (Paddle) ----------
   Paddle is the seller of record: it runs the checkout, charges the card, handles tax and invoices.
   The checkout opens over the app (Paddle.js); Paddle then notifies the "billing" function, which sets
   plan = 'pro' on the profile. The app waits for that, then opens Pro. Cancel / card / invoices: Paddle's
   customer portal ("Manage subscription"). The client token and price IDs are public by design.
   A sandbox token (test_…) only shows the checkout on a device where #/paytest was opened once. */
const PAY={token:'live_bfc5b96fec7f8474d8cfb5b29fe',   // LIVE
  prices:{month:'pri_01m5zpt3cqqdb0821k21f11m5z',year:'pri_01m5zpv6ang1vfm46p21wa8rs2'},      // 7-day trial
  again:{month:'pri_01m5zpvs1sj14tw26njcgnp1xy',year:'pri_01m5zpwmqb4acsfxnf8m15wntr'}};      // no trial (had a subscription before)
/* SANDBOX, for testing (token test_a967f93ecc66d2f33bf50f1c143):
   prices: month pri_01m60vp80kccqjmgrehc9p0wpf · year pri_01m60vqn7mx076znb78q116t78
   again:  month pri_01m60vsbmdt7zs7redby73q0az · year pri_01m60vthtzp7vr14p1xedjpbhw */
const paySandbox=()=>/^test_/.test(PAY.token);
PRO_LIVE=/^live_/.test(PAY.token);   // a live token opens Pro: plan limits apply, the waitlist becomes the trial
function payOn(){if(!PAY.token||!PAY.prices.month||!PAY.prices.year)return false;if(!paySandbox())return true;try{return localStorage.getItem('tradelog_paytest')==='1'}catch(e){return false}}
var PAYIV='year',PDL=null;
const payTrial=()=>!(sbProf&&sbProf.paddle_subscription_id)||!PAY.again.month;   // the free trial is once per member
const payPrice=iv=>payTrial()?PAY.prices[iv]:(PAY.again[iv]||PAY.prices[iv]);
function payTestCatch(){if(location.hash!=='#/paytest')return;try{localStorage.setItem('tradelog_paytest','1')}catch(e){}try{history.replaceState(null,'',location.pathname+'#/app')}catch(e){}if(window.toast)try{toast('Test ödemesi bu cihazda açık')}catch(e){}}
payTestCatch();window.addEventListener('hashchange',payTestCatch);   // also when the address is typed into an open tab
function pdlLoad(){
  if(PDL)return PDL;
  PDL=new Promise((res,rej)=>{const sc=document.createElement('script');sc.src='https://cdn.paddle.com/paddle/v2/paddle.js';sc.async=true;
    sc.onload=()=>{try{if(paySandbox())Paddle.Environment.set('sandbox');Paddle.Initialize({token:PAY.token,eventCallback:pdlEvent});res()}catch(e){rej(e)}};
    sc.onerror=()=>rej(new Error('paddle'));setTimeout(()=>rej(new Error('paddle timeout')),15000);document.head.appendChild(sc)});
  PDL.catch(()=>{PDL=null});
  return PDL;
}
async function payCheckout(){
  if(!sbOn()||!sbUser){closeDlg(true);toast(t('pay_login'));return}
  const b=$('payGo');if(b){b.disabled=true;b.textContent=t('pay_opening')}
  try{await pdlLoad()}catch(e){if(b){b.disabled=false;b.textContent=t(payTrial()?'pay_go':'pay_go2')}say(t('pay_e_load'));return}
  closeDlg(true);
  Paddle.Checkout.open({items:[{priceId:payPrice(PAYIV),quantity:1}],customer:{email:sbUser.email},customData:{user_id:sbUser.id},
    settings:{displayMode:'overlay',theme:document.documentElement.dataset.theme==='light'?'light':'dark',locale:L==='en'?'en':'tr',allowLogout:false,variant:'one-page'}});
}
function pdlEvent(e){if(e&&e.name==='checkout.completed'&&!payWatch.on)payWatch()}
/* the payment went through: Paddle tells our server within seconds; check the profile until Pro is open */
async function payWatch(){
  payWatch.on=true;toast(t('pay_wait'));
  for(let i=0;i<45;i++){
    await new Promise(r=>setTimeout(r,2000));await sbProfLoad();
    if(sbProf.plan==='pro'&&sbProf.paddle_subscription_id){payWatch.on=false;try{Paddle.Checkout.close()}catch(e){}hap('success');render();setTimeout(proWelcome,300);return}
  }
  payWatch.on=false;say(t('pay_slow'));
}
/* Paddle's customer portal: cancel, change card, invoices. The window opens right away so pop-up blockers allow it. */
async function payPortal(kind){
  let w=null;try{w=window.open('','_blank')}catch(e){}
  try{
    if(!sb)await sbClient();
    const {data:{session}}=await sb.auth.getSession();
    const r=await fetch(SBC.url+'/functions/v1/billing',{method:'POST',headers:{Authorization:'Bearer '+(session&&session.access_token),apikey:SBC.key,'Content-Type':'application/json'},body:JSON.stringify({action:'portal'})});
    const j=await r.json().catch(()=>({}));if(!j.ok||!j.url)throw new Error(j.error||'portal');
    const u=kind==='cancel'&&j.cancel?j.cancel:j.url;if(w)w.location.href=u;else location.href=u;
  }catch(e){if(w)try{w.close()}catch(_){}say(t('pay_e_portal'))}
}
/* the subscription line in Settings → Account */
function subLine(){
  const p=sbProf||{};if(!p.paddle_subscription_id)return '';
  const d=x=>x?new Date(x).toLocaleDateString(loc(),{day:'numeric',month:'long',year:'numeric'}):'';
  const iv=t(p.sub_interval==='year'?'pay_yr':'pay_mo'),amt=t(p.sub_interval==='year'?'pay_amt_y':'pay_amt_m');
  const on=['active','trialing','past_due'].includes(p.sub_status);
  let txt;
  if(p.sub_status==='past_due')txt=t('sub_due');
  else if(!on)txt=t('sub_over');
  else if(p.sub_ends_at)txt=t('sub_ends',{d:d(p.sub_ends_at)});
  else if(p.sub_status==='trialing')txt=t('sub_trial',{d:d(p.sub_renews_at),a:amt});
  else txt=t('sub_renews',{p:iv,d:d(p.sub_renews_at),a:amt});
  const btns=on?`<button class="btn sm" onclick="payPortal()">${t('sub_manage')}</button>${p.sub_ends_at?'':`<button class="btn sm" onclick="payPortal('cancel')">${t('sub_cancel')}</button>`}`
    :`<button class="btn sm pri" onclick="proDlg('gen')">${t('pay_go2')}</button>`;
  return `<div class="subl${p.sub_status==='past_due'?' warn':''}"><span>${txt}</span><span class="subb">${btns}</span></div>`;
}
function subInfo(){
  const p=sbProf||{},d=x=>x?new Date(x).toLocaleDateString(loc(),{day:'numeric',month:'long',year:'numeric'}):'';
  const iv=t(p.sub_interval==='year'?'pay_yr':'pay_mo'),amt=t(p.sub_interval==='year'?'pay_amt_y':'pay_amt_m');
  const on=['active','trialing','past_due'].includes(p.sub_status);
  if(p.sub_status==='past_due')return {txt:t('sub_due'),on};
  if(!on)return {txt:t('sub_over'),on};
  if(p.sub_ends_at)return {txt:t('sub_ends',{d:d(p.sub_ends_at)}),on};
  if(p.sub_status==='trialing')return {txt:t('sub_trial',{d:d(p.sub_renews_at),a:amt}),on};
  return {txt:t('sub_renews',{p:iv,d:d(p.sub_renews_at),a:amt}),on};
}
/* ---------- Pro experience ----------
   After paying: a welcome screen that shows what was unlocked and the first useful step.
   Settings: a Plan card (what the plan includes, the subscription, manage / cancel).
   Free members: one gentle, dismissible invitation on the dashboard once the journal has some history,
   plus the existing prompts at the moment a Pro feature is reached. TradeLog AI: a round button bottom right. */
const PRO_LIST=[['sync','link','pw_sync_a',"typeof syStart==='function'&&syStart()"],['ai','rep','pw_ai_a','coOpen()'],['accounts','dash','',''],['shots','up','',''],['mentor','user','pw_mt_a',"go('set')"]];
const proDay=x=>x?new Date(x).toLocaleDateString(loc(),{day:'numeric',month:'long'}):'';
function proWelcome(){
  const p=sbProf||{},tr=p.sub_status==='trialing';
  try{localStorage.setItem('tradelog_pro_hi_'+(p.paddle_subscription_id||'x'),'1')}catch(e){}
  openDlg('',`<div class="pwel"><div class="pwh" aria-hidden="true"><span class="pwbadge">PRO</span>${'<i></i>'.repeat(8)}</div>
    <h2>${t('pw_t')}</h2><p class="pws">${tr?t('pw_trial',{d:proDay(p.sub_renews_at)}):t('pw_active')}</p>
    <div class="pwk">${t('pw_k')}</div>
    <div class="pwl">${PRO_LIST.map(([k,i,a,fn])=>`<div class="pwi"><span class="pri">${ic(i)}</span><span class="pwx"><b>${t('pro_f_'+k)}</b><small>${t('pw_d_'+k)}</small></span>${a?`<button class="btn sm" onclick="closeDlg(true);${fn}">${t(a)}</button>`:`<span class="pwok">${ic('check')}</span>`}</div>`).join('')}</div>
    <p class="hint pwf">${t('pw_foot')}</p></div>`,
    `<button class="btn" onclick="closeDlg()">${t('pw_later')}</button><button class="btn pri" onclick="closeDlg(true);typeof syStart==='function'&&syStart()">${t('pw_go')}</button>`);
  const h=$('dTitle');if(h)h.textContent=t('pro_title');
}
function proWelcomeCheck(){
  const p=sbProf||{};if(p.plan!=='pro'||!p.paddle_subscription_id||!['active','trialing'].includes(p.sub_status)||RO)return;
  let seen=false;try{seen=!!localStorage.getItem('tradelog_pro_hi_'+p.paddle_subscription_id)}catch(e){}
  if(!seen&&!payWatch.on&&!dlgOpen()&&!formOpen())proWelcome();
}
function planCard(){
  if(!sbOn()||!sbUser||RO)return '';
  const p=sbProf||{},sub=!!p.paddle_subscription_id,on=['active','trialing','past_due'].includes(p.sub_status);
  if(isPro()){
    const chip=p.sub_status==='trialing'?t('pc_trial'):p.sub_ends_at?t('pc_ending'):p.sub_status==='past_due'?t('pc_due'):t('pc_active');
    return `<div class="card plancard"><div class="ch"><h2>${t('pc_t')}</h2><span class="pchip${p.sub_status==='past_due'||p.sub_ends_at?' warn':''}">${chip}</span></div><div class="cb">
      <div class="pch"><span class="probadge">PRO</span><div><b>TradeLog Pro</b><small>${sub?esc(subInfo().txt):t('plan_pro')}</small></div></div>
      <ul class="pcl">${PRO_LIST.map(([k])=>`<li>${ic('check')}<span>${t('pro_f_'+k)}</span></li>`).join('')}</ul>
      ${sub&&on?`<div class="pcb"><button class="btn sm" onclick="payPortal()">${t('sub_manage')}</button>${p.sub_ends_at?'':`<button class="btn sm ghost" onclick="payPortal('cancel')">${t('sub_cancel')}</button>`}</div><p class="hint" style="margin-top:10px">${t('pc_paddle')}</p>`:''}</div></div>`;
  }
  return `<div class="card plancard"><div class="ch"><h2>${t('pc_t')}</h2><span class="pchip">${t('pc_free')}</span></div><div class="cb">
    ${sub&&!on?`<p class="hint" style="margin-bottom:12px">${t('sub_over')}</p>`:''}
    <p class="pcd">${t('pc_free_d')}</p>
    <div class="pcup"><span class="probadge sm">PRO</span><div><b>${t('pc_up_t')}</b><small>${t(!PRO_LIVE?'pro_side_s':payTrial()?'pc_up_s':'pc_up_s2')}</small></div><button class="btn pri sm" onclick="proDlg('gen')">${t(PRO_LIVE?(payTrial()?'pay_go':'pay_go2'):'pro_see')}</button></div></div></div>`;
}
function proNudge(){
  if(!PRO_LIVE||!sbOn()||!sbUser||isPro()||RO)return '';
  if(trades.filter(x=>!x.demo).length<10)return '';
  let until=0;try{until=+(localStorage.getItem('tradelog_nudge_off')||0)}catch(e){}
  if(Date.now()<until)return '';
  return `<div class="card pnudge">${coMark()}<div class="pnx"><b>${t('pn_t')}</b><small>${t('pn_s')}</small></div><div class="pnb"><button class="btn pri sm" onclick="proDlg('ai')">${t(payTrial()?'pay_go':'pay_go2')}</button><button class="btn sm ghost" onclick="proNudgeOff()">${t('pn_later')}</button></div></div>`;
}
function proNudgeOff(){try{localStorage.setItem('tradelog_nudge_off',String(Date.now()+14*864e5))}catch(e){}render()}
/* the round TradeLog AI button, bottom right (above the tab bar on phones) */
function aiFabSync(){
  let b=$('aiFab');const show=sbOn()&&!!sbUser&&!RO&&sbMode==='on';
  document.body.classList.toggle('hasfab',show);   // phones: extra room at the bottom so the button never hides the last button of a page
  if(!show){if(b)b.remove();return}
  if(!b){b=document.createElement('button');b.id='aiFab';b.className='aifab';b.type='button';
    b.onclick=()=>isPro()?coToggle():proDlg('ai');(document.getElementById('appRoot')||document.body).appendChild(b)}   // inside the app: hidden with it on the site
  b.innerHTML=`${coMark()}<span class="aifl">${t('co_title')}</span>${isPro()?'':'<span class="aifp">PRO</span>'}`;
  b.setAttribute('aria-label',t('co_title'));
}
async function proWait(){
  if(!sbOn()||!sbUser){closeDlg(true);toast(t('pro_wait_login'));return}
  try{const now=new Date().toISOString(),{error}=await sb.from('profiles').update({pro_waitlist:now}).eq('id',sbUser.id);if(error)throw error;
    sbProf.pro_waitlist=now;closeDlg(true);hap('success');toast(t('pro_wait_ok'));if(cv==='set')render()}
  catch(e){say(t('sh_err').replace(/Link|link/,'İstek'))}
}
function proSide(){
  if(!sbOn()||!sbUser||RO)return '';
  if(isPro())return '';
  return `<button class="proside" onclick="proDlg('gen')"><span class="probadge sm">PRO</span><span><b>${t('pro_side_t')}</b><small>${t(PRO_LIVE?'pro_side_try':'pro_side_s')}</small></span></button>`;
}
/* after the 3rd report upload, point at automatic sync once */
function proNudgeImport(){
  if(isPro())return;let n=0;try{n=+(localStorage.getItem('tradelog_imp_n')||0)+1;localStorage.setItem('tradelog_imp_n',String(n))}catch(e){}
  let seen=false;try{seen=localStorage.getItem('tradelog_imp_nudge')==='1'}catch(e){}
  if(n>=3&&!seen)setTimeout(()=>{if(!dlgOpen()&&!formOpen()){try{localStorage.setItem('tradelog_imp_nudge','1')}catch(e){}proDlg('sync')}},900);
}

/* ---------- mentor access (read-only) ----------
   The member invites a mentor by email and sends them a private link (#/m/<token>).
   The mentor opens it, signs in with that email, and can then view the member's journal read-only.
   While viewing (RO), nothing is saved locally or pushed to the server. */
var RO=null,roSaved=null;
const mtLink=tok=>location.origin+homePath()+'#/m/'+tok;
function mentorCard(){return sbOn()?`<div class="card"><div class="ch"><h2>${t('mentor_t')} <span class="soon">Pro</span></h2></div><div class="cb" id="mentorBox"><p style="font-size:14px;color:var(--ink2)">${t('mentor_p')}</p><p class="hint" style="margin-top:8px">${t('mt_loading')}</p></div></div>`:''}
async function mtRender(){
  const el=$('mentorBox');if(!el||!sb)return;
  const intro=`<p style="font-size:14px;color:var(--ink2)">${t('mentor_p')}</p>`;
  if(PRO_LIVE&&!isPro()){el.innerHTML=intro+`<button class="btn sm" style="margin-top:12px" onclick="proDlg('mentor')">${ic('user')}${t('mentor_add')}</button>`;return}
  try{
    const [a,b]=await Promise.all([sb.from('mentors').select('mentor_email,status,token,created_at').order('created_at'),sb.rpc('my_students')]);
    if(a.error)throw a.error;const inv=a.data||[],stu=(b&&!b.error&&b.data)||[];
    el.innerHTML=intro+`<form class="mtform" onsubmit="mtInvite();return false"><input class="in" id="mt_em" type="email" autocomplete="off" placeholder="${t('mt_ph')}"><button class="btn pri sm" type="submit">${t('mt_invite')}</button></form><p class="hint" style="margin-top:6px">${t('mt_h')}</p>`
      +(inv.length?inv.map(r=>`<div class="srow"><div style="min-width:0"><div class="t" style="overflow:hidden;text-overflow:ellipsis">${esc(r.mentor_email)}</div><div class="d"><span class="tag">${t(r.status==='active'?'mt_active':'mt_pending')}</span></div></div><div class="shacts">${r.status==='pending'?`<button class="btn sm" onclick="mtInviteDlg('${esc(r.mentor_email)}','${esc(r.token)}')">${t('mt_copy')}</button>`:''}<button class="btn sm dan" onclick="mtRemove('${esc(r.mentor_email)}')">${t('mt_remove')}</button></div></div>`).join(''):`<p class="hint" style="margin-top:10px">${t('mt_none')}</p>`)
      +(stu.length?`<h4 class="lgh" style="margin-top:18px">${t('mt_students')}</h4>`+stu.map(r=>`<div class="srow"><div class="t" style="min-width:0;overflow:hidden;text-overflow:ellipsis">${esc(r.owner_email||'')}</div><div class="shacts"><button class="btn sm pri" onclick="mtView('${r.owner}','${esc(r.owner_email||'')}')">${t('mt_view')}</button><button class="btn sm" onclick="mtLeave('${r.owner}','${esc(r.owner_email||'')}')">${t('mt_leave')}</button></div></div>`).join(''):'');
  }catch(e){el.innerHTML=intro+`<p class="hint" style="margin-top:8px">${t('au_net')}</p>`}
}
async function mtInvite(){
  const em=(($('mt_em')||{}).value||'').trim().toLowerCase();
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em)){say(t('au_e_mail'));return}
  if(sbUser&&em===String(sbUser.email||'').toLowerCase()){say(t('mt_e_self'));return}
  if(planGate('mentor'))return;
  try{const {data,error}=await sb.from('mentors').insert({mentor_email:em}).select('token').single();if(error)throw error;
    hap('success');mtInviteDlg(em,data.token);mtRender()}
  catch(e){const m=String((e&&(e.message||e.code))||'');say(t(/duplicate|23505/.test(m+(e&&e.code))?'mt_e_dup':/mentor_limit/.test(m)?'mt_e_lim':'sh_err'))}
}
function mtInviteDlg(em,tok){
  const msg=t('mt_msg',{e:em,l:mtLink(tok)});
  openDlg(t('mt_inv_t'),`<p class="hint" style="margin:14px 0 10px;font-size:13.5px">${t('mt_inv_p',{e:esc(em)})}</p><textarea class="in" id="mtMsg" readonly style="min-height:110px;font-size:13.5px" onclick="this.select()">${esc(msg)}</textarea>`,
    `<button class="btn" onclick="closeDlg()">${t('close')}</button><button class="btn pri" onclick="mtCopyMsg()">${ic('copy')}${t('copy')}</button>`);
}
function mtCopyMsg(){const v=$('mtMsg').value;(navigator.clipboard?navigator.clipboard.writeText(v):Promise.reject()).then(()=>toast(t('copied'))).catch(()=>{const a=$('mtMsg');a.select();try{document.execCommand('copy');toast(t('copied'))}catch(e){}})}
async function mtRemove(em){if(!await ask(t('mt_remove_c',{e:em})))return;try{const {error}=await sb.from('mentors').delete().eq('mentor_email',em);if(error)throw error;toast(t('deleted'));mtRender()}catch(e){say(t('sb_del_err'))}}
async function mtLeave(owner,em){if(!await ask(t('mt_leave_c',{e:em})))return;try{const {error}=await sb.rpc('leave_student',{p_owner:owner});if(error)throw error;if(RO&&RO.owner===owner)mtExit(true);toast(t('deleted'));mtRender()}catch(e){say(t('sb_del_err'))}}
/* invite link: #/m/<token> */
function mtCatch(){const m=location.hash.match(/^#\/m\/([a-f0-9]{32})$/);if(!m)return false;try{sessionStorage.setItem('tradelog_mt',m[1])}catch(e){}try{history.replaceState(null,'',location.pathname+'#/app')}catch(e){}return true}
async function mtPending(){
  let tok=null;try{tok=sessionStorage.getItem('tradelog_mt')}catch(e){}
  if(!tok||!sbOn()||!sbUser)return;
  try{sessionStorage.removeItem('tradelog_mt')}catch(e){}
  try{const {data,error}=await sb.rpc('accept_mentor',{p_token:tok});if(error)throw error;
    if(data&&data.ok){toast(t('mt_ok',{e:data.owner_email||''}));mtView(data.owner,data.owner_email||'')}
    else say(t(data&&data.reason==='email'?'mt_e_email':data&&data.reason==='self'?'mt_e_self':'mt_e_nf',{e:(data&&data.email)||''}));
  }catch(e){say(t('mt_e_nf'))}
}
async function mtView(owner,email){
  if(!sbOn()||!sb)return;
  if(RO)mtExit(true);
  try{if(sbT){clearTimeout(sbT);sbT=null}await sbSync(false)}catch(e){}
  try{
    const {data:mine}=await sb.rpc('my_students');
    if(!(mine||[]).some(r=>r.owner===owner)){say(t('mt_e_gone'));if(cv==='set')mtRender();return}
    const load=async tb=>{const out=[];for(let f=0;;f+=1000){const {data,error}=await sb.from(tb).select('id,data').eq('user_id',owner).eq('deleted',false).range(f,f+999);if(error)throw error;out.push(...data);if(data.length<1000)return out}};
    const [acc,tr,tx,pb,jr]=await Promise.all(TBL.map(load));
    const {data:pr}=await sb.from('profiles').select('settings').eq('id',owner).maybeSingle();
    roSaved={trades,S,PB,JR,V};RO={owner,email};
    const st=(pr&&pr.settings)||{};
    trades=tr.map(r=>norm({...r.data,id:+r.id||r.data.id})).filter(Boolean);
    S=normS({accounts:acc.map(r=>r.data).sort((x,y)=>(x.ord||0)-(y.ord||0)),tx:tx.map(r=>r.data),day:st.day,str:st.str,maxT:st.maxT,dedup:st.dedup});
    PB=normPB(pb.map(r=>({...r.data,id:r.id})));JR=Object.fromEntries(jr.map(r=>[r.id,r.data]));
    V={acc:'all',per:'all'};fixAcc();sortT();
    document.body.classList.add('ro');closeDlg(true);go('dash');
  }catch(e){RO=null;roSaved=null;say(t('au_net'))}
}
function mtExit(silent){
  if(!RO)return;
  trades=roSaved.trades;S=roSaved.S;PB=roSaved.PB;JR=roSaved.JR;V=roSaved.V;RO=null;roSaved=null;
  document.body.classList.remove('ro');if(!silent)go('set');
}
function roBanner(){return RO?`<div class="robar">${ic('user')}<span>${t('mt_viewing',{e:esc(RO.email)})}</span><button class="btn sm" onclick="mtExit()">${t('mt_back')}</button></div>`:''}
/* nothing that changes data runs while viewing someone else's journal */
['addMenu','openForm','accDlg','accForm','openImport','pbEdit','pbDel','jSave','wkNoteSave','delTrade','dupTrade','demo','demoRm','wipe','saveTrade','txDlg','shareDlg','openReview','expJSON','expCSV','pasteImp']
  .forEach(n=>{const f=window[n];if(typeof f!=='function')return;window[n]=function(){if(RO){toast(t('mt_ro'));return}return f.apply(this,arguments)}});

/* site header: "Log in" while signed out, "Open app" once signed in */
/* ---------- MT4/MT5 connection with the investor (read-only) password ----------
   Like TradeZella: the member enters server, account number and investor password once.
   The "broker" server function hands them to MetaApi (the password is never stored by us),
   then pulls closed trades and deposits/withdrawals into an inbox; the app takes them from there
   and turns them into trades exactly like a report import. Costs money per account, so Pro only. */
var SY={links:null,plat:'mt5',busy:false,loading:false,taking:false,at:0,autoAt:0,poll:{},stage:{},followed:{}};
function syHas(){try{return localStorage.getItem('tradelog_sy')==='1'}catch(e){return false}}
function syMark(on){try{on?localStorage.setItem('tradelog_sy','1'):localStorage.removeItem('tradelog_sy')}catch(e){}}
function syAgo(ts){const m=Math.max(0,Math.round((Date.now()-new Date(ts))/6e4));return m<2?t('sy_now'):m<60?t('sy_min',{n:m}):m<1440?t('sy_hour',{n:Math.round(m/60)}):t('sy_day',{n:Math.round(m/1440)})}
async function syFn(body){
  if(!sb)await sbClient();
  const {data,error}=await sb.functions.invoke('broker',{body});
  if(error){let d=null;try{d=error.context&&typeof error.context.json==='function'?await error.context.json():null}catch(e){}if(d&&d.error)return d;throw error}
  return data||{};
}
function syStart(acc){
  if(RO)return;
  if(!sbOn()||!sbUser){closeDlg(true);toast(t('sy_login'));return}
  if(!isPro()){proDlg('sync');return}
  syDlg(acc||'');
}
async function syLoad(){
  if(!sb)await sbClient();
  const {data,error}=await sb.from('broker_links').select('id,account_id,plat,login,server,state,error,info,sent,last_sync_at,created_at').order('created_at');
  if(error)throw error;SY.links=data||[];syMark(SY.links.length>0);
  /* a connection still being set up (e.g. after reopening the app): keep following it, once per visit */
  SY.links.forEach(k=>{if(k.state==='connecting'&&!SY.followed[k.id]&&!SY.poll[k.id]){SY.followed[k.id]=1;setTimeout(()=>syFollow(k.id),0)}});
  return SY.links;
}
function syDlg(acc){
  const accs=actAccs().filter(a=>a.name||a.no||trades.some(x=>x.account===a.id));
  const def=acc&&S.accounts.some(a=>a.id===acc)?acc:accs.length?'':'new';
  openDlg(t('sy_title'),`<div style="padding-top:14px"><p style="font-size:14.5px;color:var(--ink2)">${t('sy_intro')}</p>
    <div class="dsec fgrid">
     <label class="fld full"><span>${t('sy_acc')}</span><select class="in" id="sy_acc">${def===''?opt('','—',''):''}${accs.map(a=>opt(a.id,accLabel(a),def)).join('')}${opt('new',t('sy_acc_new'),def)}</select></label>
     <div class="fld full"><span>${t('sy_plat')}</span><div class="segf" id="sy_plat">${['mt5','mt4'].map(p=>`<button type="button" class="x${SY.plat===p?' on':''}" data-v="${p}" onclick="SY.plat='${p}';segOn('sy_plat','${p}')">MetaTrader ${p.slice(2)}</button>`).join('')}</div></div>
     <label class="fld full"><span>${t('sy_server')}</span><input class="in" id="sy_srv" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${t('sy_server_ph')}"><span class="hint">${t('sy_server_h')}</span></label>
     <label class="fld"><span>${t('sy_login_l')}</span><input class="in" id="sy_no" inputmode="numeric" autocomplete="off" placeholder="12345678"></label>
     <label class="fld"><span>${t('sy_pw')}</span><span class="pwf"><input class="in" id="sy_pw" type="password" autocomplete="new-password" spellcheck="false"></span></label>
     <div class="full"><button type="button" class="sylnk" onclick="$('sy_what').hidden=!$('sy_what').hidden">${t('sy_what_q')}</button><p class="hint" id="sy_what" hidden style="margin-top:6px">${t('sy_what')}</p></div></div>
    <div class="ins good"><i></i><div>${t('sy_safe')}</div></div>
    <div id="sy_st"></div></div>`,
   `<button class="btn" onclick="closeDlg()">${t('cancel')}</button><button class="btn pri" id="sy_go" onclick="syConnect()">${ic('link')}${t('sy_connect')}</button>`);
  const a=def&&def!=='new'?accOf(def):null;
  if(a&&a.no)$('sy_no').value=a.no;if(a&&a.srv)$('sy_srv').value=a.srv;
}
function sySt(kind,html){const el=$('sy_st');if(!el)return;el.innerHTML=html?`<div class="ins ${kind}" style="margin-top:12px"><i></i><div>${html}</div></div>`:'';if(html&&el.scrollIntoView)el.scrollIntoView({block:'nearest',behavior:'smooth'})}
const SY_CODE={missing:'TL-101',token:'TL-102',denied:'TL-103',provider:'TL-201',slow:'TL-202',server_error:'TL-500'};
const SY_ERR={tries:'sy_e_tries',input:'sy_e_input',auth:'sy_e_auth',server:'sy_e_server',exists:'sy_e_exists',limit:'sy_e_limit',slow:'sy_e_slow',config:'sy_e_config',plan:'sy_e_plan',login:'sy_login'};
async function syConnect(){
  if(SY.busy)return;
  const sel=$('sy_acc').value,server=$('sy_srv').value.trim(),login=$('sy_no').value.replace(/\D/g,''),pw=$('sy_pw').value;
  if(!sel){$('sy_acc').focus();return}
  if(!server){$('sy_srv').focus();return}
  if(!login){$('sy_no').focus();return}
  if(!pw){$('sy_pw').focus();return}
  const other=S.accounts.find(a=>a.no===login&&a.id!==sel);
  const blank=S.accounts.length===1&&!S.accounts[0].name&&!S.accounts[0].no&&!trades.some(x=>x.account===S.accounts[0].id)&&!S.tx.length;
  const acc=sel==='new'?(other?other.id:blank?S.accounts[0].id:sid()):sel;
  SY.busy=true;$('sy_go').disabled=true;sySt('',esc(t('sy_wait')));
  let r;
  try{r=await syFn({action:'connect',account:acc,plat:SY.plat,server,login,password:pw})}catch(e){r={ok:false,error:'net'}}
  SY.busy=false;if($('sy_go'))$('sy_go').disabled=false;
  if(!r.ok){
    if(r.error==='plan'){closeDlg(true);proDlg('sync');return}
    const hints=(r.hints||[]).map(h=>`<button type="button" class="chip" onclick="$('sy_srv').value=this.textContent;sySt('','')">${esc(h)}</button>`).join('');
    /* problems on our side: a calm message, a way to keep going (report upload) and a short code for support; no provider details */
    const ours=['config','provider','server_error','slow'].includes(r.error)||!SY_ERR[r.error]&&r.error!=='net';
    if(ours){
      const code=SY_CODE[r.error==='config'?(r.why||'missing'):r.error]||'TL-500';
      sySt('bad',`<b style="display:block;margin-bottom:4px">${esc(t(r.error==='slow'?'sy_e_slow':'sy_e_ours_t'))}</b>${esc(t(r.error==='slow'?'sy_e_slow_d':'sy_e_ours'))}
        <div class="syact"><button type="button" class="btn sm" onclick="closeDlg(true);openImport()">${ic('up')}<span>${t('sy_e_report')}</span></button><button type="button" class="btn sm ghost" onclick="supDlg('${code}')">${t('sup_btn')}</button><span class="sycode">${t('sy_e_code')}: ${code}</span></div>`);return;
    }
    sySt('bad',esc(t(r.error==='net'?'sy_e_net':SY_ERR[r.error],{n:r.limit||3}))+(hints?`<div class="chips" style="margin-top:8px">${hints}</div>`:''));return;
  }
  if($('sy_pw'))$('sy_pw').value='';
  if(sel==='new'&&!other){
    const d={name:'MetaTrader '+SY.plat.slice(2)+' '+login,bal:0,cur:'USD',risk:1,eab:1,no:login,srv:server.slice(0,80)};
    if(blank)Object.assign(S.accounts[0],d);else S.accounts.push({id:acc,...d});
    if(typeof welApply==='function')welApply(S.accounts.find(z=>z.id===acc));
    S=normS(S);saveS();
  }
  /* load the new link right away, so the dashboard says "connecting" instead of asking for a first trade */
  syMark(true);SY.links=null;SY.followed[r.id]=1;
  try{await syLoad()}catch(e){}
  render();
  sySt('good',esc(t('sy_linked')));
  if($('sy_go')){$('sy_go').outerHTML=`<button class="btn pri" onclick="closeDlg()">${t('ok_btn')}</button>`}
  syFollow(r.id);
}
/* after connecting: wait until MetaApi reaches the broker, then take the first sync */
/* follow a connection while the app is open: show where the setup is, and fetch the trades as soon as it's ready.
   The first connection can take a while, so this keeps going (every 5s, then every 15s) for up to 30 minutes. */
async function syFollow(id){
  if(SY.poll[id])return;SY.poll[id]=1;
  const t0=Date.now();let st='connecting',n=0,res='';
  while(Date.now()-t0<30*60e3){
    try{const r=await syFn({action:'status',id});if(r.ok){st=r.state;SY.stage[id]={s:r.stage,since:r.since};sySt2(id)}}catch(e){}
    if(st==='error')break;
    if(st==='ok'){
      try{const r=await syFn({action:'sync',id});const s=r&&r.ok&&r.states?r.states[id]:'';
        if(s==='ok'){n=await syTake(true);res='ok';break}
        if(s==='error'){st='error';break}
      }catch(e){}
    }
    await new Promise(r=>setTimeout(r,Date.now()-t0<180e3?5000:15000));
  }
  delete SY.poll[id];delete SY.stage[id];SY.links=null;
  try{await syLoad()}catch(e){}
  const msg=res==='ok'?(n?t('sy_got',{n}):t('sy_ok_none')):t(st==='error'?'sy_e_broker':'sy_e_slow2');
  if($('sy_st'))sySt(res==='ok'?'good':'bad',esc(msg));else toast(msg);
  if($('acSy'))$('acSy').innerHTML=syAccLine($('acSy').dataset.acc);
  if(!formOpen()&&!dlgOpen())render();
}
/* one line on where a connection's setup is, e.g. "Reaching your broker… · 4 min" */
/* when the next automatic (night) sync runs, in the member's own clock: weekday nights from 22:15 UTC */
function syNight(){
  const d=new Date(),c=new Date(Date.UTC(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate(),22,15));
  const inWin=(x=>{const h=x.getUTCHours(),wd=x.getUTCDay();return (h>=22&&x>=c&&wd>=1&&wd<=5)||(h<4&&wd>=2&&wd<=6)})(d);
  if(inWin)return t('sy_night_now');
  while(c<=d||c.getUTCDay()===0||c.getUTCDay()===6)c.setUTCDate(c.getUTCDate()+1);
  const tm=c.toLocaleTimeString(loc(),{hour:'2-digit',minute:'2-digit'}),days=Math.round((new Date(c.getFullYear(),c.getMonth(),c.getDate())-new Date(d.getFullYear(),d.getMonth(),d.getDate()))/864e5);
  const early=c.getHours()<12,eve=new Date(c.getTime()-864e5);
  return days<=1&&early?t('sy_night_tonight',{t:tm}):days===0?t('sy_night_today',{t:tm}):early?t('sy_night_dayn',{d:eve.toLocaleDateString(loc(),{weekday:'long'}),t:tm}):t('sy_night_day',{d:c.toLocaleDateString(loc(),{weekday:'long'}),t:tm});
}
function syStage(id){
  const g=SY.stage[id];if(!g||!g.s)return t('sy_st_wait');
  const m=g.since?Math.max(0,Math.floor((Date.now()-Date.parse(g.since))/60e3)):0;
  return t('sy_st_'+g.s)+(m?' · '+t('sy_st_min',{n:m}):'');
}
function sySt2(id){document.querySelectorAll('[data-systage="'+id+'"]').forEach(el=>{el.textContent=syStage(id)})}
function syRow(k){
  const i=k.info||{},pz=k.state==='error'&&k.error==='plan',cls=pz?'wait':k.state==='ok'?'on':k.state==='error'?'bad':'wait';
  /* Pro ended: the link is paused (its MetaApi account removed after a grace period); trades stay */
  const d=pz?t('sy_paused'):k.state==='ok'&&i.np?t('sy_pro_end'):k.state==='ok'?[k.last_sync_at?t('sy_last',{t:syAgo(k.last_sync_at)}):t('sy_first'),t('sy_next',{x:syNight()})].join(' · ')
    :k.state==='error'?t(k.error==='gone'?'sy_e_gone':k.error==='broker'?'sy_e_broker':'sy_err'):syStage(k.id);
  return `<div class="srow"><div style="min-width:0"><div class="t"><span class="sydot ${cls}"></span>${k.plat.toUpperCase()} #${esc(k.login)} · ${esc(k.server)}</div><div class="d">${i.company?esc(i.company)+' · ':''}<span${k.state==='connecting'?` data-systage="${k.id}"`:''}>${esc(d)}</span></div></div>
   <span class="acts">${k.state!=='error'?`<button class="btn sm" onclick="syNow('${k.id}',this)">${t(k.state==='ok'?'sy_now_b':'wel_sync_chk')}</button>`:''}<button class="btn sm ghost" onclick="syRm('${k.id}')">${t('sy_rm')}</button></span></div>`;
}
async function syNow(id,b){
  if(b){b.disabled=true;b.dataset.l=b.textContent;b.textContent=t('sy_checking')}let n=0;
  try{const r=await syFn({action:'sync',id});if(!r.ok)throw r;const s=r.states?r.states[id]:'';
    if(s==='connecting'){toast(t('sy_still'));SY.followed[id]=1;syFollow(id)}
    else if(s==='error')say(t('sy_e_broker'));
    else if(s==='limit'){const nx=r.next&&r.next[id];say(t('sy_daylim',{n:3,night:syNight(),t:nx?new Date(nx).toLocaleTimeString(loc(),{hour:'2-digit',minute:'2-digit'}):'—'}))}
    else{n=await syTake(true);const lf=r.left&&r.left[id];toast((n?t('sy_got',{n}):t('sy_ok_none'))+(lf!=null&&lf<3?' · '+t('sy_left',{n:lf}):''))}
  }catch(e){say(t('sy_err'))}
  if(b&&b.isConnected){b.disabled=false;b.textContent=b.dataset.l}
  SY.links=null;try{await syLoad()}catch(e){}
  if($('acSy'))$('acSy').innerHTML=syAccLine($('acSy').dataset.acc);
  if(!formOpen())render();
}
async function syRm(id){
  if(!await ask(t('sy_rm_c')))return;
  try{const r=await syFn({action:'remove',id});if(!r.ok)throw r;toast(t('sy_rm_ok'))}catch(e){say(t('sy_err'));return}
  SY.links=(SY.links||[]).filter(k=>k.id!==id);syMark(SY.links.length>0);
  if($('acSy'))$('acSy').innerHTML=syAccLine($('acSy').dataset.acc);
  if(!formOpen())render();
}
function syOnAcc(id){return !!(SY&&SY.links&&SY.links.some(k=>k.account_id===id&&k.state==='ok'))}
function syLoadOnce(){if(SY.links||SY.loading||!sbOn()||!sbUser||RO||!syHas())return;SY.loading=true;syLoad().then(l=>{SY.loading=false;if(l.length&&!formOpen()&&!dlgOpen())render()}).catch(()=>{SY.loading=false})}
/* section inside the account editor */
function syAccLine(id){
  const l=(SY.links||[]).filter(k=>k.account_id===id);
  return l.length?l.map(syRow).join(''):`<p class="hint" style="font-size:13.5px">${t('sy_manage_d')}</p><button class="btn sm" style="margin-top:10px" onclick="syStart('${id}')">${ic('link')}${t('sy_open')}</button>`;
}
function syAccSec(id){
  if(!sbOn()||!sbUser||RO)return '';
  setTimeout(async()=>{if(!SY.links)try{await syLoad()}catch(e){}const el=$('acSy');if(el)el.innerHTML=syAccLine(id)},0);
  return `<div class="fsec"><h3>${t('sy_manage')} <span class="soon">PRO</span></h3><div id="acSy" data-acc="${esc(id)}">${syAccLine(id)}</div></div>`;
}
/* deleting an account (or the whole membership) also ends its broker connections, so nothing keeps running or costing */
async function syDropAcc(id){
  if(!sbOn()||!sbUser||RO||!syHas())return;
  try{await syFn({action:'remove',account:id});SY.links=null}catch(e){}
}
async function syDropAll(){
  if(!sbOn()||!sbUser||RO)return;
  try{await syFn({action:'remove',all:true})}catch(e){}
}
/* while the app is open: ask the server for new trades every 10 minutes, then take them */
async function syAuto(){
  if(!sbOn()||!sbUser||RO||!syHas()||!isPro())return 0;
  if(Date.now()-SY.autoAt<10*60e3)return 0;SY.autoAt=Date.now();
  if(Object.keys(SY.poll).length)return 0;            // a connection being followed already asks for it
  try{const r=await syFn({action:'sync'});if(r&&r.ok&&r.synced){SY.links=null;return 1}}catch(e){}
  return 0;
}
/* take what the server delivered and add it to the journal */
async function syTake(force){
  if(!sbOn()||!sbUser||RO||SY.taking)return 0;
  if(!force&&Date.now()-SY.at<20000)return 0;
  SY.taking=true;SY.at=Date.now();let n=0;
  try{
    if(!sb)await sbClient();
    const {data,error}=await sb.from('ea_inbox').select('id,account_id,ext,kind,data').is('taken_at',null).order('id').limit(400);
    if(error)throw error;
    if(data&&data.length){
      syMark(true);
      const r=syApply(data);n=r.add;
      await sb.from('ea_inbox').update({taken_at:new Date().toISOString()}).in('id',data.map(x=>x.id));
      const msg=[r.add?t('sy_got',{n:r.add}):'',r.upd?t('sy_got_u',{n:r.upd}):'',!r.add&&!r.upd&&r.cash?t('sy_got_c',{n:r.cash}):''].filter(Boolean).join(' · ');
      if(msg&&!force)toast(msg);
      if(data.length===400)setTimeout(()=>syTake(true).then(k=>{if(k&&!formOpen())render()}),500);
    }
  }catch(e){}
  SY.taking=false;return n;
}
function syApply(rows){
  const by={},out={add:0,upd:0,cash:0};
  rows.forEach(r=>{if(r&&r.data&&typeof r.data==='object')(by[r.account_id]=by[r.account_id]||[]).push(r)});
  const n0=v=>{v=+v;return isFinite(v)?v:0};
  const ep=s=>{const d=new Date(n0(s)*1000);return[d.getUTCFullYear(),d.getUTCMonth()+1,d.getUTCDate(),d.getUTCHours(),d.getUTCMinutes()]};
  Object.keys(by).forEach(aid=>{
    const list=by[aid],last=list[list.length-1].data.acc||{},plat=String(list[0].ext).split(':')[0]==='mt4'?'MT4':'MT5';
    const login=String(last.login||'').replace(/\D/g,'');
    let a=S.accounts.find(z=>z.id===aid);
    /* the key's account is linked to another MetaTrader number: use the account with this number, or a new one */
    if(a&&a.no&&login&&a.no!==login)a=S.accounts.find(z=>z.no===login)||{id:sid(),name:'',bal:0,cur:'USD',risk:1,eab:1,_new:1};
    if(!a)a={id:aid,name:'',bal:0,cur:'USD',risk:1,eab:1,_new:1};
    if(a._new){delete a._new;S.accounts.push(a)}
    const fresh=!trades.some(x=>x.account===a.id)&&!S.tx.some(z=>z.acc===a.id)&&!a.initExt;
    if(fresh&&!a.eab&&!a.no)a.eab=1;
    if(login&&!a.no){a.no=login;if(last.server)a.srv=String(last.server).slice(0,80)}
    if(!a.name||/^MetaTrader [45]( \d+)?$/.test(a.name))a.name=`${last.company?String(last.company).split(/\s+/)[0]+' ':''}${login||plat}`;
    if(a.eab&&CUR.includes(last.cur))a.cur=last.cur;
    const eaBal=()=>{if(!a.eab||last.bal==null||!isFinite(+last.bal))return;for(let i=0;i<2;i++){const d=accBal(a).cur-a.bal;a.bal=Math.max(0,r2(+last.bal-d))}};
    eaBal();   // a rough starting balance first, so risk-based R estimates make sense
    if(a.tz==null){const off=+last.off;a.tz=isFinite(off)?Math.max(-12,Math.min(14,Math.round(-new Date().getTimezoneOffset()/60-off/3600))):0}
    const tz=a.tz;
    const txExt=new Set(S.tx.map(z=>z.ext).filter(Boolean));if(a.initExt)txExt.add(a.initExt);
    let ops=list.filter(r=>r.kind==='bal'&&!txExt.has(r.ext)).map(r=>({ext:r.ext,ts:n0(r.data.t),a:r2(n0(r.data.a))})).filter(o=>o.a).sort((x,y)=>x.ts-y.ts);
    if((fresh||a.eab)&&!a.initExt&&ops.length&&ops[0].a>0&&ops[0].ts<=Math.min(...list.filter(r=>r.kind==='pos').map(r=>n0(r.data.t1)||Infinity))){
      a.bal=ops[0].a;a.initExt=ops[0].ext;delete a.eab;ops=ops.slice(1);
    }
    const pos=list.filter(r=>r.kind==='pos').map(r=>{const d=r.data;return{id:String(d.id),sym:String(d.sym||''),dir:d.dir==='Short'?'Short':'Long',vol:n0(d.vol),entry:n0(d.entry),exit:n0(d.exit),
      sl:n0(d.sl),tp:n0(d.tp),osl:n0(d.osl),otp:n0(d.otp),t1:ep(d.t1),t2:ep(d.t2),profit:n0(d.profit),comm:n0(d.comm),swap:n0(d.swap),tax:n0(d.tax)}}).filter(p=>p.sym&&p.entry);
    const built=pos.length?buildTrades({meta:{plat,no:login||'x'},pos},{acc:a.id,accObj:a,tz,queue:true}):[];
    const exts=new Set(trades.map(x=>x.ext).filter(Boolean)),used=new Set(),adds=[];
    built.filter(o=>!exts.has(o.ext)).forEach(o=>{const m=findMatch(o,used);if(m){used.add(m.id);impPair(m,o);out.upd++}else adds.push(o)});
    ops.forEach(o=>{S.tx.push({id:sid(),acc:a.id,date:shiftDT(ep(o.ts),tz)[0],kind:o.a>0?'dep':'wd',amt:Math.abs(o.a),note:'',ext:o.ext});out.cash++});
    out.add+=merge(adds).add;
    /* without the opening deposit, the starting balance is worked out so TradeLog shows the same balance as MetaTrader */
    eaBal();
  });
  S=normS(S);saveS();saveTrades();
  return out;
}
/* ---------- TradeLog AI (Pro) ----------
   A side panel (full screen on phones) that reads the member's own journal summary and answers
   as TradeLog's built-in coach. Answers stream in; the conversation stays on this device. */
var CO={msgs:null,busy:false,left:null,limit:null,uid:null,open:false,follow:[]};
function coKey(){return 'tradelog_coach_'+(sbUser?sbUser.id:'x')}
function coLoad(){if(CO.msgs&&CO.uid===(sbUser&&sbUser.id))return;CO.uid=sbUser&&sbUser.id;try{CO.msgs=JSON.parse(localStorage.getItem(coKey())||'[]')}catch(e){CO.msgs=[]}if(!Array.isArray(CO.msgs))CO.msgs=[];CO.follow=[]}
function coSave(){try{localStorage.setItem(coKey(),JSON.stringify(CO.msgs.filter(m=>m.r!=='e'&&m.t).slice(-30)))}catch(e){}}
/* the TradeLog mark; its three bars move while the AI is thinking */
function coMark(cls=''){return `<span class="aimk ${cls}" aria-hidden="true"><svg viewBox="0 0 32 32"><rect width="32" height="32" rx="9" class="bg"/><rect class="b1" x="7.8" y="13" width="3.4" height="9" rx="1.7"/><rect class="b2" x="14.3" y="8.5" width="3.4" height="13.5" rx="1.7"/><rect class="b3" x="20.8" y="5" width="3.4" height="17" rx="1.7"/></svg></span>`}
function coOpen(q,deep){
  if(RO){toast(t('mt_ro'));return}
  if(!sbOn()||!sbUser){toast(t('co_login'));return}
  if(!isPro()){proDlg('ai');return}
  coLoad();
  if(dlgOpen())closeDlg(true);
  const p=$('aiP');if(!p)return;
  p.innerHTML=`<div class="aiph">${coMark(CO.busy?'think':'')}<div class="aipt"><b>TradeLog AI</b><small id="aiSub">${esc(coSub())}</small></div>
     <button class="aiib" onclick="coNew()" title="${t('co_new')}" aria-label="${t('co_new')}"><svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg></button>
     <button class="aiib" onclick="coClose()" aria-label="${t('close')}"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>
    <div class="aipm" id="coBox"></div>
    <div class="aipc"><div class="aicomp"><textarea id="coQ" rows="1" maxlength="1500" placeholder="${t('co_ph')}" oninput="coGrow(this)" onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();coAsk()}"></textarea>
     <button class="aisend" id="coGo" onclick="coAsk()" aria-label="${t('co_send')}"><svg viewBox="0 0 24 24"><path d="M12 19V5M6 11l6-6 6 6"/></svg></button></div>
     <p class="aift"><span id="coLeft">${CO.left!=null?esc(t('co_left',{n:CO.left})):''}</span>${t('co_note')}</p></div>`;
  if(!CO.open){p.classList.remove('on');void p.offsetWidth;p.classList.add('on')}p.setAttribute('aria-hidden','false');CO.open=true;document.body.classList.add('aion');coSide();
  coRender();
  setTimeout(()=>{const i=$('coQ');if(i&&!('ontouchstart' in window))i.focus()},250);
  if(q)coAsk(q,deep);
}
function coClose(){const p=$('aiP');if(p){p.classList.remove('on');p.setAttribute('aria-hidden','true')}CO.open=false;document.body.classList.remove('aion');coSide()}
function coToggle(){CO.open?coClose():coOpen()}
function coSide(){document.querySelectorAll('.aiside').forEach(b=>{b.classList.toggle('on',CO.open);b.setAttribute('aria-expanded',String(CO.open))})}
function coNew(){if(CO.busy)return;CO.msgs=[];CO.follow=[];coSave();coRender();const i=$('coQ');if(i)i.focus()}
function coGrow(el){el.style.height='auto';el.style.height=Math.min(el.scrollHeight,160)+'px'}
function coSub(){if(CO.busy)return t('co_thinking');const n=byAcc(trades).length;return t('co_sub',{n,v:V.acc==='all'?t('acc_all'):coName(accOf(V.acc)||{})})}
/* R values and percentages light up in the brand's win/loss colours */
function coMd(s){
  const lines=esc(s).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>').replace(/(^|[\s(])\*([^*\n]+?)\*(?=[\s.,;:!?)]|$)/g,'$1<i>$2</i>')
    .replace(/([+\-−]?\d+(?:[.,]\d+)?)\s?R\b/g,(m,v)=>{const n=parseFloat(v.replace('−','-').replace(',','.'));return `<span class="air ${n>0&&/^[+]/.test(v)?'p':n<0?'n':''}">${m}</span>`})
    .split('\n');let h='',ul='';
  lines.forEach(l=>{const m=l.match(/^\s*([-•*]|\d+[.)])\s+(.*)$/);
    if(m){const k=/\d/.test(m[1])?'ol':'ul';if(ul!==k){if(ul)h+=`</${ul}>`;h+=`<${k}>`;ul=k}h+=`<li>${m[2]}</li>`;return}
    if(ul){h+=`</${ul}>`;ul=''}
    const hd=l.match(/^#{1,4}\s+(.*)$/);if(hd){h+=`<p><b>${hd[1]}</b></p>`;return}
    if(l.trim())h+=`<p>${l}</p>`});
  if(ul)h+=`</${ul}>`;return h;
}
/* the answer ends with ">> question | question" — those become tap-to-ask chips */
function coSplit(s){const i=s.lastIndexOf('>>');if(i<0)return [s,[]];return [s.slice(0,i).trim(),s.slice(i+2).split('|').map(x=>x.trim().replace(/^[-•]\s*/,'')).filter(x=>x&&x.length<120).slice(0,3)]}
/* personal starting points, worked out from the member's own numbers */
function coIdeas(){
  const l=byAcc(trades),out=[];if(stats(l).n<5)return ['week','mistake','setup'].map(k=>({q:t('co_q_'+k),deep:k==='week'}));
  const rd=v=>(v>0?'+':'')+(Math.round(v*10)/10).toString().replace('.',L==='tr'?',':'.')+'R';
  const w=wkData(wkLast());if(w.s.n)out.push({k:t('co_i_week'),v:rd(w.s.tot),c:w.s.tot>=0?'p':'n',q:t('co_q_week'),deep:true});
  const mt=l.filter(x=>x.mistakes.length&&has(x.rrActual));
  const mg=mt.length?groupBy(mt,x=>x.mistakes).sort((a,b)=>a.s.tot-b.s.tot)[0]:null;
  if(mg&&mg.s.tot<0)out.push({k:misL(mg.k),v:rd(mg.s.tot),c:'n',q:t('co_q_mis_x',{k:misL(mg.k),r:rd(mg.s.tot)})});
  const sg=groupBy(l.filter(x=>has(x.rrActual)),x=>x.setup).filter(g=>g.s.n>=3).sort((a,b)=>b.s.tot-a.s.tot);
  if(sg.length&&sg[0].s.tot>0)out.push({k:sg[0].k,v:rd(sg[0].s.tot),c:'p',q:t('co_q_set_x',{k:sg[0].k})});
  const wd=groupBy(l.filter(x=>has(x.rrActual)),x=>wdi(x.date)).filter(g=>g.s.n>=3).sort((a,b)=>a.s.exp-b.s.exp)[0];
  if(out.length<3&&wd&&wd.s.exp<0)out.push({k:wdName(+wd.k),v:rd(wd.s.tot),c:'n',q:t('co_q_day_x',{k:wdName(+wd.k)})});
  if(out.length<3)out.push({q:t('co_q_risk')});
  if(out.length<3)out.push({q:t('co_q_next'),deep:true});
  return out.slice(0,3);
}
function coRender(){
  const b=$('coBox');if(!b)return;
  const sub=$('aiSub');if(sub)sub.textContent=coSub();
  const mk=document.querySelector('#aiP .aiph .aimk');if(mk)mk.classList.toggle('think',CO.busy);
  if(!CO.msgs.length){
    CO.ideas=coIdeas();
    b.innerHTML=`<div class="aihello">${coMark('big')}<h3>${t('co_hi')}</h3><p>${t('co_hi_p')}</p></div>
      <div class="aiideas"><small>${t('co_ideas')}</small>${CO.ideas.map((x,i)=>`<button type="button" class="aiidea" onclick="coIdea(${i})">${x.k?`<span class="aiik"><span>${esc(x.k)}</span>${x.v?`<b class="air ${x.c||''}">${esc(x.v)}</b>`:''}</span>`:''}<span class="aiiq">${esc(x.q)}</span><svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button>`).join('')}</div>`;
    return;
  }
  const last=CO.msgs.length-1;
  b.innerHTML=CO.msgs.map((m,i)=>{
    if(m.r==='u')return `<div class="aim u"><div>${esc(m.t)}</div></div>`;
    if(m.r==='e')return `<div class="aim e">${esc(m.t)}</div>`;
    const [txt,fol]=coSplit(m.t||'');
    const live=CO.busy&&i===last;
    return `<div class="aim a">${coMark(live&&!txt?'think':'')}<div class="aimb">${txt?coMd(txt):`<span class="aidots"><i></i><i></i><i></i></span>`}${live&&txt?'<span class="aicur"></span>':''}
      ${!live&&txt?`<div class="aiacts"><button onclick="coCopy(${i})">${t('copy')}</button></div>`:''}
      ${!live&&i===last&&fol.length?`<div class="aifol">${fol.map(f=>`<button type="button" onclick="coAsk(this.textContent)">${esc(f)}</button>`).join('')}</div>`:''}</div></div>`;
  }).join('');
  b.scrollTop=b.scrollHeight;
}
function coIdea(i){const x=(CO.ideas||[])[i];if(x)coAsk(x.q,x.deep)}
function coCopy(i){const m=CO.msgs[i];if(!m)return;const v=coSplit(m.t)[0].replace(/\*\*/g,'');(navigator.clipboard?navigator.clipboard.writeText(v):Promise.reject()).then(()=>toast(t('copied'))).catch(()=>{})}
const CO_ERR={limit:'co_e_limit',config:'co_e_config',busy:'co_e_busy',input:'co_e_input',login:'co_login',fail:'co_e_fail'};
async function coAsk(q,deep){
  if(CO.busy)return;
  const inp=$('coQ');q=String(q||(inp?inp.value:'')).trim();if(!q)return;
  if(inp){inp.value='';coGrow(inp)}
  const hist=CO.msgs.filter(m=>m.r!=='e'&&m.t).slice(-8).map(m=>({role:m.r==='u'?'user':'assistant',content:m.r==='a'?coSplit(m.t)[0]:m.t}));
  CO.msgs=CO.msgs.filter(m=>m.r!=='e');CO.msgs.push({r:'u',t:q});
  const a={r:'a',t:''};CO.msgs.push(a);CO.busy=true;coRender();
  if($('coGo'))$('coGo').disabled=true;
  let err=null,raf=0,cut=false,why='',det='';
  /* one call; if the connection fails before any text arrives, it is tried once more without streaming */
  const call=async st=>{
    if(!sb)await sbClient();
    const {data:{session}}=await sb.auth.getSession();
    return fetch(SBC.url+'/functions/v1/coach',{method:'POST',headers:{Authorization:'Bearer '+(session&&session.access_token),apikey:SBC.key,'Content-Type':'application/json'},
      body:JSON.stringify({lang:L,question:q,deep:!!deep,stream:st,history:hist,data:coachData()})});
  };
  try{
    let res;try{res=await call(true)}catch(e){await new Promise(r=>setTimeout(r,1200));try{res=await call(false)}catch(e2){why='fetch';throw e2}}
    const lf=res.headers.get('x-coach-left');if(lf!=null&&lf!==''){CO.left=+lf;CO.limit=+(res.headers.get('x-coach-limit')||0)}
    if(!res.ok&&!(res.headers.get('content-type')||'').includes('application/json')){err='fail';why='gateway'}   // the server's gateway answered (timeout, limit), not TradeLog AI
    else if((res.headers.get('content-type')||'').includes('application/json')){
      const j=await res.json().catch(()=>({ok:false,error:'server_error'}));
      if(j.ok&&j.text)a.t=j.text;else{err=j.error||'fail';if(!j.error)why='gateway';if(j.limit)CO.limit=j.limit;CO.why=j.why||'';det=j.d||''}   // no "error": Supabase's gateway (limit, timeout)
    }else{
      const rd=res.body.getReader(),dec=new TextDecoder();
      try{for(;;){const {done,value}=await rd.read();if(done)break;a.t+=dec.decode(value,{stream:true});if(!raf)raf=requestAnimationFrame(()=>{raf=0;coRender()})}}
      catch(e){cut=true;why='drop'}                                 // connection dropped mid-answer: keep what arrived
      const cm=a.t.match(/\u0000CUT(?::(\w+))?(?::(\w+))?/);
      if(cm){a.t=a.t.slice(0,cm.index);cut=true;why=cm[1]||'cut';det=cm[2]||''}
      /* the stream ended without a single word and without a reason (older server, a proxy cutting it):
         ask once more without streaming before showing an error */
      if(!a.t.trim()&&!cm&&!cut){
        try{const r2=await call(false),j=await r2.json().catch(()=>({}));
          if(j.ok&&j.text)a.t=j.text;else{err=j.error&&j.error!=='net'?j.error:'fail';why=j.error?j.error:'empty';CO.why=j.why||'';det=j.d||''}}
        catch(e){err='net';why='fetch'}
      }
      /* nothing arrived: provider overloaded → "busy", anything else → a retry message with a support code */
      else if(!a.t.trim())err=/overload|rate_limit/.test(why)?'busy':'fail';
    }
  }catch(e){err=why==='fetch'?'net':'fail';why=why||'client'}
  if(!err&&cut)a.t=a.t.replace(/\s+$/,'')+'…\n\n*'+t('co_cut')+'*';
  CO.busy=false;if($('coGo'))$('coGo').disabled=false;
  if(err==='plan'){CO.msgs.splice(-2);coClose();proDlg('ai');return}
  /* our side (missing key, balance…): calm words + a support code, never the provider's details */
  const AI_CODE={missing:'AI-101',key:'AI-102',denied:'AI-103',credit:'AI-104',model:'AI-105'};
  /* answer could not be fetched: a code that tells support where it broke (no internet / dropped / provider error / our server) */
  const AI_FAIL={fetch:'AI-201',drop:'AI-202',cut:'AI-203',provider:'AI-204',server_error:'AI-205',client:'AI-206',gateway:'AI-207',empty:'AI-208'};
  if(err&&!CO_ERR[err]&&err!=='net'&&err!=='fail'){why=err;err='fail'}
  const AI_WHY={overloaded_error:'busy'};if(err==='fail'&&AI_WHY[why])err=AI_WHY[why];
  const code=(err==='config'?(AI_CODE[CO.why]||'AI-100'):(err==='net'||err==='fail')?(AI_FAIL[why]||'AI-200'):'')+(det&&err!=='busy'?' · '+String(det).replace(/[^\w]/g,'').slice(0,24):'');
  if(err){CO.msgs.pop();CO.msgs.push({r:'e',t:t(CO_ERR[err]||'co_err',{n:CO.limit||''})+(code?' '+t('sy_e_code')+': '+code:'')})}
  coSave();coRender();
  const lf=$('coLeft');if(lf&&CO.left!=null)lf.textContent=t('co_left',{n:CO.left});
  if(inp&&!('ontouchstart' in window))inp.focus();
}
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&CO.open&&!dlgOpen()){e.stopPropagation();coClose()}},true);
const coName=a=>String(accName(a)||'').replace(/\d{4,}/g,'•••');   // account numbers stay here
function coachData(){
  const all=chrono(byAcc(trades)),td=day(),rd=v=>v==null||!isFinite(v)?null:Math.round(v*100)/100;
  const ago=n=>{const d=new Date(td+'T12:00:00Z');d.setUTCDate(d.getUTCDate()-n);return d.toISOString().slice(0,10)};
  const st=l=>{const s=stats(l);return{trades:s.n,wins:s.w,losses:s.ls,breakeven:s.be,winRatePct:rd(s.wr),totalR:rd(s.tot),expectancyR:rd(s.exp),profitFactor:s.pf===Infinity?'no losses':rd(s.pf),
    avgWinR:rd(s.aw),avgLossR:rd(s.al),maxDrawdownR:rd(s.dd),longestLosingStreak:s.ms,planFollowedPct:rd(s.plan),pnl:rd(s.pnl),avgSelfRating:rd(s.rating),tradingDays:s.days,greenDaysPct:rd(s.dayWin)}};
  const grp=(l,fn,lab,map)=>groupBy(l,fn).filter(g=>g.s.n>=2).sort((a,b)=>b.s.n-a.s.n).slice(0,12)
    .map(g=>({[lab]:map?map(g.k):g.k,trades:g.s.n,winRatePct:rd(g.s.wr),totalR:rd(g.s.tot),expectancyR:rd(g.s.exp)}));
  const last=all.slice(-60).map(x=>{const o={date:x.date,time:x.time||'',symbol:x.symbol,side:x.dir||'',setup:x.setup||'',outcome:x.outcome,R:rd(x.rrActual)};
    if(x.rEst)o.rEst=true;if(has(x.pnl))o.pnl=rd(x.pnl);if(has(x.rr))o.plannedRR=rd(x.rr);if(x.plan)o.followedPlan=x.plan;if(x.rating)o.selfRating=x.rating;
    if(x.mistakes.length)o.mistakes=x.mistakes.map(misL);if(x.emotions.length)o.emotions=x.emotions.map(emoL);if(x.kz)o.session=x.kz;if(has(x.lots))o.lots=x.lots;
    if(x.notes)o.notes=String(x.notes).slice(0,200);return o});
  const jr=Object.keys(JR).filter(k=>/^\d{4}-\d{2}-\d{2}$/.test(k)&&k>=ago(21)).sort().slice(-14).map(k=>{const e=JR[k]||{};return{date:k,mood:e.m||null,plan:String(e.p||'').slice(0,300),review:String(e.r||'').slice(0,300),lesson:String(e.l||'').slice(0,300)}});
  const wk=wkLast(),w=wkData(wk);
  const d={
    today:td,view:V.acc==='all'?'all accounts':coName(accOf(V.acc)||{}),
    accounts:scopeAccs().map(a=>{const b=accBal(a);return{name:coName(a),type:a.type||'',currency:a.cur,riskPerTradePct:a.risk,startBalance:rd(a.bal),currentBalance:rd(b.cur),
      propRules:a.rules?{dailyLossLimitPct:a.rules.dll||null,maxLossLimitPct:a.rules.mll||null,profitTargetPct:a.rules.tgt||null}:null}}),
    personalRules:{maxDailyLossR:S.day||null,stopAfterLosingStreak:S.str||null,maxTradesPerDay:S.maxT||null},
    allTime:st(all),last30Days:st(all.filter(x=>x.date>=ago(30))),last7Days:st(all.filter(x=>x.date>=ago(7))),
    latestWeek:{from:w.m,to:w.e,...st(w.l),previousWeekTotalR:rd(w.p.tot)},
    bySetup:grp(all,x=>x.setup,'setup'),bySymbol:grp(all,x=>x.symbol,'symbol'),bySide:grp(all,x=>x.dir,'side'),
    bySession:grp(all,x=>x.kz,'session'),byWeekday:grp(all,x=>wdi(x.date),'weekday',k=>wdName(+k)),
    byHour:grp(all.filter(x=>x.time),x=>x.time.slice(0,2)+':00','hour'),
    mistakes:grp(all,x=>x.mistakes,'mistake',misL),emotions:grp(all,x=>x.emotions,'emotion',emoL),
    followedPlan:grp(all,x=>x.plan,'followedPlan'),
    appInsights:insights(all).map(x=>x[1]),
    recentTrades:last,journal:jr};
  let s=JSON.stringify(d);
  while(s.length>70000&&d.recentTrades.length>10){d.recentTrades=d.recentTrades.slice(Math.floor(d.recentTrades.length/3));s=JSON.stringify(d)}
  return d;
}
function sbNavLabel(open,login){const on=sbOn()||sbHasTok()||sbMode==='tg';document.querySelectorAll('#site [data-st=nav_open]').forEach(el=>{el.textContent=on?open:(login||t('au_in_link'))})}

/* ---- Destek: uygulamanın içinden mesaj (TradeZella'daki destek balonunun karşılığı).
   Mesaj support_messages tablosuna yazılır (send_support); e-posta altyapısı gerekmez.
   Üye giriş yaptıysa e-postası hesabından alınır; giriş yapmamış ziyaretçi e-postasını yazar. ---- */
const SUP_TOPICS=['bug','sync','import','account','billing','idea','other'];
function supMeta(){return {v:L,ua:navigator.userAgent.slice(0,180),view:typeof cv!=='undefined'?cv:'site',w:innerWidth,pro:typeof isPro==='function'&&isPro()?1:0,tg:sbMode==='tg'?1:0}}
async function supSendRaw(email,topic,message,code){
  const body={p_email:email||'',p_topic:topic||'other',p_message:message||'',p_code:code||null,p_meta:supMeta()};
  try{
    const h={apikey:SBC.key,'Content-Type':'application/json'};
    if(sb&&sbUser){try{const {data}=await sb.auth.getSession();if(data&&data.session)h.Authorization='Bearer '+data.session.access_token}catch(e){}}
    const r=await fetch(SBC.url+'/rest/v1/rpc/send_support',{method:'POST',headers:h,body:JSON.stringify(body)});
    if(r.ok)return {ok:true};
    const j=await r.json().catch(()=>({}));const m=String(j.message||'');
    return {ok:false,error:/limit/.test(m)?'limit':/email/.test(m)?'email':/message/.test(m)?'message':r.status===404?'setup':'server'};
  }catch(e){return {ok:false,error:'net'}}
}
function supDlg(code){
  const u=sbOn()&&sbUser&&sbUser.email;
  openDlg(t('sup_t'),`<div style="padding-top:14px"><p style="font-size:14.5px;color:var(--ink2)">${t('sup_d')}</p>
    <div class="dsec fgrid">
     ${u?`<div class="fld full"><span>${t('sup_from')}</span><div class="hint" style="margin:0">${esc(sbUser.email)}</div></div>`:`<label class="fld full"><span>${t('sup_email')}</span><input class="in" id="sup_em" type="email" autocomplete="email" inputmode="email"></label>`}
     <label class="fld full"><span>${t('sup_topic')}</span><select class="in" id="sup_tp">${SUP_TOPICS.map(k=>opt(k,t('sup_tp_'+k),code?'sync':'bug')).join('')}</select></label>
     <label class="fld full"><span>${t('sup_msg')}</span><textarea class="in" id="sup_msg" rows="6" maxlength="4000" placeholder="${esc(t('sup_ph'))}"></textarea></label>
     ${code?`<div class="full hint">${t('sy_e_code')}: <b>${esc(code)}</b></div>`:''}</div>
    <div id="sup_st"></div></div>`,
   `<button class="btn" onclick="closeDlg()">${t('cancel')}</button><button class="btn pri" id="sup_go" onclick="supSend('${esc(code||'')}')">${t('sup_send')}</button>`);
  setTimeout(()=>{const f=$(u?'sup_msg':'sup_em');if(f&&matchMedia('(pointer:fine)').matches)f.focus()},60);
}
function supSt(kind,txt){const el=$('sup_st');if(el)el.innerHTML=txt?`<div class="ins ${kind}" style="margin-top:12px"><i></i><div>${esc(txt)}</div></div>`:''}
async function supSend(code){
  const em=$('sup_em')?$('sup_em').value.trim():'',msg=$('sup_msg').value.trim(),tp=$('sup_tp').value;
  if($('sup_em')&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)){supSt('bad',t('sup_e_email'));return}
  if(msg.length<5){supSt('bad',t('sup_e_msg'));return}
  $('sup_go').disabled=true;supSt('',t('sup_sending'));
  const r=await supSendRaw(em,tp,msg,code);
  if($('sup_go'))$('sup_go').disabled=false;
  if(r.ok){closeDlg();toast(t('sup_ok'));return}
  supSt('bad',t('sup_e_'+r.error));
}
window.supSendRaw=supSendRaw;
sbBoot();


(() => {
'use strict';
const SITE = document.getElementById('site');
/* ---------- helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
/* Each language and sub-page has its own address (/ , /en/, /yardim/, /en/help/ …) so search engines index both
   languages. The built page says which one it is in window.TL_PAGE; without it (preview file) the old in-place
   language switch and #hash pages are used. */
const TLP = window.TL_PAGE || null;
/* flat files (yardim.html is served at /yardim), so the whole site stays one folder to upload */
const PATHS = { tr: { home: '', help: 'yardim', privacy: 'gizlilik', terms: 'kosullar', refund: 'iade', contact: 'iletisim', mt5: 'mt5-islem-gunlugu', prop: 'prop-firm-islem-gunlugu', calc: 'lot-hesaplama' },
                en: { home: 'en', help: 'help', privacy: 'privacy', terms: 'terms', refund: 'refund', contact: 'contact', mt5: 'mt5-trading-journal', prop: 'prop-firm-trading-journal', calc: 'position-size-calculator' } };
const pathOf = (lg, pg) => (TLP ? TLP.base : '/') + PATHS[lg][pg || 'home'];
const pageAt = path => { const p = path.replace(/(\.html|\/)$/, '').replace(/\/index$/, '') || '/'; for (const lg of ['en', 'tr']) for (const pg in PATHS[lg]) { const q = pathOf(lg, pg).replace(/\/$/, '') || '/'; if (p === q) return { lg, pg }; } return null; };
/* site language: the page's own language; the app keeps the member's setting (tradelog_lang) */
const LG = () => TLP ? TLP.lang : (typeof L !== 'undefined' && L === 'en') ? 'en' : 'tr';
const dec = x => LG() === 'tr' ? x.replace('.', ',') : x;
const fr = (v, d = 1) => { const z = Math.abs(v) < Math.pow(10, -d) / 2; return (z ? '' : v > 0 ? '+' : '−') + dec(Math.abs(v).toFixed(d)) + 'R'; };
const money = v => '$' + Math.round(v).toLocaleString(LG() === 'tr' ? 'tr-TR' : 'en-US');
const pct = n => LG() === 'tr' ? '%' + n : n + '%';
const lcg = seed => { let s = seed; return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; }; };
const MON = ['Oca','Şub','Mar','Nis','May','Haz','Tem','Ağu','Eyl','Eki','Kas','Ara'];

const P = {
  logo: null,
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  arrowl: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  tg: '<path d="M21 4L3 11l6 2.5M21 4l-3.5 16-8.5-6.5M21 4L9 13.5v5.5l3-3.3"/>',
  file: '<path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z"/><path d="M14 3v5h5"/>',
  shield: '<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/>',
  layers: '<path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/>',
  gauge: '<path d="M4 16a8 8 0 1116 0"/><path d="M12 16l4-5"/>',
  alert: '<path d="M12 8v5M12 16.5v.5M10.3 3.9L2.6 17.5A2 2 0 004.3 20.5h15.4a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z"/>',
  pulse: '<path d="M3 12h4l2-5 4 10 2-5h6"/>',
  book: '<path d="M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2z"/><path d="M4 19V5M9 8h6"/>',
  cal: '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  chev: '<path d="M6 9l6 6 6-6"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  trend: '<path d="M4 17l5-5 4 4 7-8"/><path d="M15 8h5v5"/>',
  minus: '<path d="M7 12h10"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  grid: '<rect x="3" y="3" width="7" height="9" rx="2"/><rect x="14" y="3" width="7" height="5" rx="2"/><rect x="14" y="12" width="7" height="9" rx="2"/><rect x="3" y="16" width="7" height="5" rx="2"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  pen: '<path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
  upload: '<path d="M12 16V4M7 9l5-5 5 5M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 014.6 1.3c0 1.7-2.1 2-2.1 3.4M12 17h.01"/>',
  phone: '<rect x="6" y="2.5" width="12" height="19" rx="3"/><path d="M11 18h2"/>',
  link: '<path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1"/>',
  doc: '<path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>',
  lock: '<rect x="4.5" y="10.5" width="15" height="10" rx="2.5"/><path d="M8 10.5V7.5a4 4 0 018 0v3"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z"/>',
  eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.8"/>',
  down: '<path d="M12 4v12M7 11l5 5 5-5M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3"/>'
};
const ic = (n, s = 20, w = 2, extra = '') => n === 'logo'
  ? `<svg width="${s}" height="${s}" viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="9" fill="#94C5CC"/><path d="M9.5 22v-4.5M16 22V12.5M22.5 22V9" stroke="#000100" stroke-width="3.4" stroke-linecap="round"/></svg>`
  : `<svg ${extra} width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n]}</svg>`;
const fillIcons = (root = document) => $$('[data-i]', root).forEach(el => { el.outerHTML = ic(el.dataset.i, +(el.dataset.s || (el.dataset.i === 'logo' ? 32 : 20)), +(el.dataset.w || (el.dataset.i === 'check' ? 2.6 : 1.9))); });

/* Demo verisi üreteci (deterministik) */
function gen(n, seed, acc) {
  const rnd = lcg(seed), rn2 = lcg(seed + 7919);
  const syms = ['EURUSD','XAUUSD','NAS100','GBPUSD','US30'], setups = ['Breakout','Pullback','Range'], emos = ['Sakin','Sakin','Sakin','Aceleci','FOMO','Kararsız'];
  const a = [];
  for (let i = 0; i < n; i++) {
    const w = rnd() < .5;
    const r = w ? Math.round((.6 + rnd() * 1.8) * 10) / 10 : (rnd() < .3 ? -.5 : -1);
    const sym = syms[Math.floor(rnd() * syms.length)];
    let emo = emos[Math.floor(rn2() * emos.length)];
    if (r > 1.5 && emo === 'FOMO') emo = 'Sakin';
    a.push({ r, sym, acc, emo, side: rn2() < .55 ? 'Long' : 'Short', setup: setups[Math.floor(rn2() * 3)], plan: rn2() < .78, t: Math.floor(rn2() * 1000) });
  }
  return a;
}
function stats(trades) {
  let c = 0, pk = 0, dd = 0, gw = 0, gl = 0, w = 0;
  const cum = [0];
  trades.forEach(t => { c += t.r; cum.push(c); pk = Math.max(pk, c); dd = Math.max(dd, pk - c); if (t.r > 0) { gw += t.r; w++; } else gl -= t.r; });
  return { n: trades.length, c, dd, gw, gl, w, cum };
}
/* Eğri + üzerine gelince ipucu */
function curve(cum, W, H, top, bot) {
  const n = cum.length - 1, mn = Math.min(0, ...cum), mx = Math.max(1, ...cum);
  const X = i => (i / Math.max(1, n)) * W, Y = v => bot - ((v - mn) / (mx - mn)) * (bot - top);
  const line = 'M' + cum.map((v, i) => X(i).toFixed(1) + ',' + Y(v).toFixed(1)).join(' L');
  return { X, Y, line, area: line + ` L${W},${H} L0,${H} Z`, zero: `M0,${Y(0).toFixed(1)} L${W},${Y(0).toFixed(1)}` };
}
function chartHTML(cv, W, H) {
  return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-hidden="true">
<path d="${cv.zero}" stroke="rgba(161,166,180,.35)" stroke-width="1" stroke-dasharray="4 5" fill="none" vector-effect="non-scaling-stroke"/>
<path d="${cv.area}" fill="rgba(148,197,204,.10)"/>
<path d="${cv.line}" stroke="#94C5CC" stroke-width="2.5" fill="none" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"/></svg>
<div class="vl" hidden></div><div class="mk" hidden></div><div class="tip" hidden></div><div class="hit"></div>`;
}
function bindChart(el, n, W, H, cv, cum, tipFor) {
  const vl = $('.vl', el), mk = $('.mk', el), tip = $('.tip', el), hit = $('.hit', el);
  const show = x => {
    const rect = hit.getBoundingClientRect();
    if (!n || !rect.width) return;
    const i = Math.max(0, Math.min(n - 1, Math.floor(((x - rect.left) / rect.width) * n)));
    const px = cv.X(i + 1) / W * 100, py = cv.Y(cum[i + 1]) / H * 100;
    const t = tipFor(i);
    vl.style.left = mk.style.left = px + '%'; mk.style.top = py + '%';
    mk.classList.toggle('n', t.neg);
    tip.style.left = Math.min(85, Math.max(15, px)) + '%'; tip.innerHTML = t.html;
    vl.hidden = mk.hidden = tip.hidden = false;
  };
  const hide = () => { vl.hidden = mk.hidden = tip.hidden = true; };
  hit.addEventListener('pointermove', e => show(e.clientX));
  hit.addEventListener('pointerdown', e => show(e.clientX));
  hit.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') hide(); });
}

/* ================= SITE METİNLERİ (TR / EN) ================= */
const CONTACT = { tr: 'destek@gotradelog.com', en: 'support@gotradelog.com' }; /* İletişim sayfasında dile göre görünür (ikisi de aynı kutuya yönlenir) */
const ST = {
tr: {
  nav_prop: 'Prop firm', nav_plat: 'Platformlar', nav_help: 'Yardım',
  tour_k: 'Ürün turu', tour_h: 'Bütün performansın, tek bir yerde.', tour_p: 'Uygulamanın gerçek ekranları, örnek verilerle.',
  tour: [['dash', 'Panel', 'Net sonuç, kazanma oranı, profit factor, prop kuralların ve TradeLog puanın tek ekranda.'], ['acc', 'Hesaplar', 'Her hesabın bakiyesi, net kazancı, bakiye eğrisi, kuralları ve başabaş aralığı ayrı kartlarda.'], ['trades', 'İşlemler', 'Her işlem R ve tutar olarak. Ara, filtrele, istediğin sütunları göster.'], ['cal', 'Takvim', 'Günlük ve haftalık sonuçların takvim üzerinde. Bir güne tıkla, o günün işlemlerini incele.'], ['rep', 'Raporlar', 'Kazanma oranı, beklenti, drawdown ve aylık performans; saat, setup ve psikoloji raporlarıyla birlikte.']],
  prop_k: 'Prop firm trader\'ları için', prop_h: 'Challenge\'dan funded\'a, her kural kontrol altında.', prop_p: 'Prop firm hesaplarını kurallarıyla birlikte takip et. TradeLog her limite ne kadar kaldığını gösterir ve yaklaştığında seni uyarır.',
  plist: [['shield', 'Kurallar her an görünür', 'Günlük kayıp, maksimum kayıp ve kâr hedefini hesap bazında tanımla; kalan payı panelde anlık gör.'], ['alert', 'Limitten önce uyarı', 'Bir limitin %70\'ine ulaştığında panel uyarır; hesabı riske atmadan durursun.'], ['layers', 'Her hesap kendi kurallarıyla', 'Challenge, funded ve kişisel hesaplar ayrı bakiye ve kurallarla izlenir. Kopyalanan işlemler birleşik görünümde bir kez sayılır.'], ['file', 'Payout ve para hareketleri', 'Para yatırma ve çekmeler otomatik eklenir; bakiye MetaTrader verisiyle karşılaştırılır.']],
  prop_alert: 'Funded 100K: günlük kayıp limitinin %76\'sı kullanıldı. Kalan $1.200.', prop_img: 'TradeLog panelinde hesap kuralları kartı',
  ms_r: '+2,4R', nav_sec: 'Güvenlik',
  meta_title: 'TradeLog: Ücretsiz Trading Günlüğü | MT4/MT5 İşlem Takibi ve Analizi', meta_desc: 'Ücretsiz trading günlüğü: MT4/MT5 raporunu yükle ya da hesabını bağla, işlemlerini R ile analiz et. Prop firm kuralları, raporlar ve TradeLog AI koçu.',
  sec_k: 'Güvenlik ve gizlilik', sec_h: 'Verilerin sana ait.', sec_p: 'İşlem geçmişin hassas bir veri. Onu nasıl koruduğumuzu açıkça anlatıyoruz.',
  sec1_h: 'Salt okunur bağlantı', sec1_p: 'Otomatik senkron yalnızca yatırımcı şifresiyle çalışır; bu şifreyle işlem açılamaz, para çekilemez. Ana şifren hiçbir zaman istenmez, yatırımcı şifren saklanmaz.',
  sec2_h: 'AB\'de, şifreli', sec2_p: 'Verilerin Almanya\'da (Frankfurt) barındırılır; hem aktarımda hem depolamada şifrelenir.',
  sec3_h: 'Satılmaz, paylaşılmaz', sec3_p: 'Verilerin satılmaz ve reklam amacıyla kullanılmaz. TradeLog AI\'ye gönderilen veriler yapay zekâ modellerinin eğitiminde kullanılmaz.',
  sec4_h: 'Kontrol sende', sec4_p: 'Tüm verilerini tek tıkla dışa aktarabilir ya da hesabını kalıcı olarak silebilirsin.',
  plat_h: 'Bugün MetaTrader. Yakında daha fazlası.', plat_p: 'MT4/MT5 hesabını yatırımcı şifresiyle bağla (Pro) ya da raporunu yükle. Elle kayıt her platformda çalışır.',
  plats: [['MetaTrader 5', 'ok', 'Otomatik bağlantı, HTML ve Excel raporu'], ['MetaTrader 4', 'ok', 'Otomatik bağlantı, HTML raporu'], ['Match-Trader', 'next', 'Rapor içe aktarma'], ['cTrader', 'next', 'Rapor içe aktarma'], ['DXtrade', 'plan', 'Rapor içe aktarma'], ['TradeLocker', 'plan', 'Rapor içe aktarma']],
  plat_st: { ok: 'Hazır', next: 'Sırada', plan: 'Planlandı' },
  home_aria: 'TradeLog ana sayfa', nav_aria: 'Ana menü', mnav_aria: 'Mobil menü', lang_aria: 'Dil',
  nav_login: 'Giriş yap', nav_feat: 'Özellikler', nav_how: 'Nasıl çalışır', nav_price: 'Fiyatlar', nav_faq: 'SSS', nav_open: 'Panele git',
  cta_start: 'Ücretsiz başla', tg_open: 'Telegram\'da aç', menu_open: 'Menüyü aç', menu_close: 'Menüyü kapat',
  hero_new: 'YENİ', hero_eyebrow: 'TradeLog Pro yayında: otomatik senkron ve AI koç, 7 gün ücretsiz', nav_ai: 'TradeLog AI', trust4: 'Verilerin satılmaz',
  ai_k: 'TradeLog AI', ai_h: 'Rakamlarını bilen bir trading koçu.', ai_p: 'TradeLog AI işlemlerini, setup\'larını, hatalarını ve günlüğünü analiz eder. Neyin işe yaradığını rakamlarla gösterir ve bir sonraki adımını netleştirir.',
  ailist: [['chart', 'Rakamlarla konuşur', 'Genel geçer tavsiye yok: senin setup\'ların, günlerin ve hataların, R bazında.'], ['shield', 'Sinyal vermez', 'Al-sat önerisi ya da fiyat tahmini yapmaz; süreç ve disiplin üzerine çalışır.'], ['pen', 'Uygulamayı tanır', 'Playbook\'una neyi ekleyeceğini, hangi kuralı koyacağını ve haftanı nasıl değerlendireceğini söyler.']],
  ai_sub: '48 işlem · örnek veri', ai_q: 'Bu haftamı değerlendir', ai_ph: 'TradeLog AI\'ye sor…',
  ai_a: '<p><b>En önemli nokta:</b> bu hafta <span class="neg">−1,9R</span>; kaybın neredeyse tamamı <i>erken giriş</i> hatasından geldi (<span class="neg">−2R</span>, 2 işlem).</p><ul><li>London Breakout yine çalıştı: 3 işlem, <span class="pos">+2,1R</span></li><li>Cuma günleri bu ay toplam <span class="neg">−1,8R</span></li></ul><p>Gelecek hafta: girişten önce kırılım mumunun kapanmasını bekle ve Cuma\'yı yarım riskle dene.</p>', ai_fol: ['Erken girişi nasıl bırakırım?', 'Cuma işlem yapmalı mıyım?'],
  hero_h1: '<em>Edge</em>\'ini bulan<br>trading günlüğü.',
  hero_lead: 'İşlemlerini MT4/MT5\'ten otomatik aktar, raporla yükle ya da elle gir. TradeLog her işlemi R bazında analiz eder; hangi setup\'ın, seansın ve hatanın sonucunu belirlediğini net olarak gösterir.',
  trust1: 'Süresiz ücretsiz plan', trust2: 'Salt okunur MT4/MT5 bağlantısı', trust3: 'AB\'de şifreli barındırma',
  float_t: 'Günlük kayıp limiti', float_pct: '%72', float_s: 'Funded 100K · Kalan $1.400',
  strip1: '<b>MT4/MT5</b> otomatik senkron', strip2: '<b>R bazlı</b> performans analizi', strip3: '<b>Prop firm</b> kural takibi', strip4: '<b>TradeLog AI</b> koç',
  how_h: 'Dakikalar içinde hazır.', how_p: 'Hesabını bağla ya da raporunu yükle; gerisini TradeLog halleder.',
  feat_h: 'Ciddi bir trader\'ın ihtiyaç duyduğu her şey.', feat_p: 'Kartları deneyebilirsin. Hepsi ücretsiz planda.',
  score_h: 'TradeLog puanı', score_lbl: '/ 100 · İyi', score_p: 'Kazanma oranı, profit factor, beklenti, drawdown, tutarlılık ve plan uyumundan tek bir skor.',
  disc_h: 'Disiplin uyarıları', disc_toast: 'Bugünkü 3 işlem limitine ulaştın.', disc_p: 'Günlük işlem sayısı, üst üste kayıp ve risk limitlerini belirle; limite ulaştığında uyarı al.',
  emo_h: 'Hataların maliyeti', emo_calm: 'Temiz işlemler', emo_hes: 'Erken çıkış', emo_rush: 'SL\'i kaydırma', emo_p: 'Hata türüne göre işlem başına ortalama sonuç.',
  emo_v1: '+0,8R', emo_v2: '−0,2R', emo_v3: '−0,6R', emo_v4: '−1,1R',
  acc_h: 'Çoklu hesap', acc_personal: 'Kişisel', acc_p: 'Bütün hesapların tek panelde. Kopyalanan işlemler birleşik görünümde bir kez sayılır.', acc_v1: '+18,4R', acc_v2: '+6,1R', acc_v3: '−2,3R',
  wk_h: 'Haftalık özet ve paylaşım', wk_p: 'Her hafta net sonucun ve gelecek hafta için 1–3 somut öneri. İşlemlerini story ve gönderi kartı olarak paylaş.', wk_btn: 'Uygulamada gör', hero_how: 'Nasıl çalışır',
  price_h: 'Basit ve şeffaf fiyatlandırma.', price_p: 'Ücretsiz planda işlem sınırı yok; bütün raporlar ve analizler dahil. Otomatik senkron ve TradeLog AI için Pro.',
  plan_free: 'Ücretsiz', plan_free_d: 'Günlük tutmaya başlamak için ihtiyacın olan her şey.', plan_forever: 'süresiz',
  feat_free: ['Sınırsız işlem: elle ya da MT4/MT5 raporuyla', 'Tüm raporlar, TradeLog puanı ve içgörüler', 'Haftalık özet ve öneriler', 'Takvim, günlük ve playbook', 'Prop firm kuralları ve uyarıları', 'İşlem başına ekran görüntüsü', '2 aktif hesap', 'Tüm cihazlarda senkron', 'Paylaşım linki, story ve gönderi kartı'],
  soon: 'Yakında', plan_pro_d: 'İşlemlerinin otomatik gelmesini isteyen ve birden çok hesap yöneten trader\'lar için.', pro_btn: '7 gün ücretsiz dene', pro_badge: '7 gün ücretsiz',
  pro_fine: '7 gün ücretsiz · Deneme boyunca ücret alınmaz · İstediğin an iptal',
  per_mo: '/ ay', price_yr: 'ya da yıllık <b>$159</b> (ayda $13,25 · %30 indirim)', price_note: 'Fiyatlar ABD doları cinsindendir ve vergiler (KDV) dahildir; ödeme sırasında ek ücret çıkmaz.',
  feat_plus: 'Ücretsiz plandaki her şey, ek olarak:',
  feat_pro: ['MT4/MT5 otomatik senkron (3 hesap), geçmiş işlemler dahil', '20 aktif hesap', 'TradeLog AI: verilerini analiz eden kişisel koç', 'İşlem başına 10 ekran görüntüsü', 'Mentoruna salt okunur erişim'],
  cmp_show: 'Tüm özellikleri karşılaştır', cmp_hide: 'Karşılaştırmayı gizle', cmp_feature: 'Özellik', cmp_pro: 'Pro', yes_a: 'Var', no_a: 'Yok', cmp_note: 'Pro\'yu 7 gün ücretsiz dene; deneme bitmeden iptal edersen hiç ücret ödemezsin.',
  groups: [
    ['Kayıt ve içe aktarma', [['İşlem sayısı', 'Sınırsız', 'Sınırsız'], ['Elle kayıt ve MT4/MT5 raporu yükleme', 'y', 'y'], ['Otomatik MT4/MT5 senkronu', 'n', '3 hesap'], ['Ekran görüntüsü (işlem başına)', '1', '10']]],
    ['Analiz', [['Tüm raporlar ve TradeLog puanı', 'y', 'y'], ['Haftalık özet ve öneriler', 'y', 'y'], ['Takvim, günlük ve playbook', 'y', 'y'], ['AI koç', 'n', 'y']]],
    ['Hesaplar', [['Aktif hesap', '2', '20'], ['Hesaplar sayfası: bakiye, net kazanç, eğri', 'y', 'y'], ['Başabaş aralığı (hesap başına)', 'y', 'y'], ['Prop firm kuralları ve uyarılar', 'y', 'y'], ['Kopya işlemleri bir kez sayma', 'y', 'y']]],
    ['Erişim ve paylaşım', [['Web ve telefon', 'y', 'y'], ['Hesapla her cihazda aynı veri', 'y', 'y'], ['İşlem ve haftalık özet paylaşım linki', 'y', 'y'], ['Instagram story ve gönderi kartı', 'y', 'y'], ['Mentora salt okunur erişim', 'n', 'y']]]],
  faq_h: 'Sık sorulan sorular',
  faq: [
    ['TradeLog nedir?', 'TradeLog, işlemlerini kaydedip analiz eden bir trading günlüğüdür. Her işlemi R bazında ölçer; setup, seans ve hatalara göre neyin işe yaradığını gösterir. Senin adına işlem açmaz, al-sat sinyali vermez.'],
    ['Ücretsiz plan ile Pro arasındaki fark ne?', 'Ücretsiz planda işlem sınırı yok; bütün raporlar, haftalık özet ve prop firm kuralları dahil. Pro; işlemlerini MT4/MT5\'ten otomatik aktarır (3 hesaba kadar), 20 aktif hesabı destekler, TradeLog AI ve mentor erişimini ekler.'],
    ['Hesap şifremi vermem gerekiyor mu?', 'Hayır. MT4/MT5 raporu yüklerken şifre gerekmez. Otomatik senkron (Pro) yalnızca yatırımcı (salt okunur) şifreyle çalışır; bu şifreyle işlem açılamaz, para çekilemez. Ana şifreni hiçbir zaman istemeyiz, yatırımcı şifreni de saklamayız.'],
    ['Verilerim ne kadar güvende?', 'Verilerin Almanya\'da (Frankfurt) barındırılır, aktarımda ve depolamada şifrelenir ve yalnızca sen görebilirsin. Verilerini satmayız, reklam için kullanmayız. Ayarlar → Profil\'den tüm verilerini indirebilir ya da hesabını kalıcı olarak silebilirsin.'],
    ['Hangi platformlar destekleniyor?', 'MetaTrader 4 ve 5: otomatik senkron (Pro) ya da HTML/Excel raporu. Match-Trader ve cTrader sırada. Diğer platformlardaki işlemlerini elle kaydedebilirsin.'],
    ['Ücretsiz plan bir süre sonra bitiyor mu?', 'Hayır. Ücretsiz plan süresizdir ve ödeme bilgisi istemez.'],
    ['Pro ne kadar?', 'Pro aylık 19 $ ya da yıllık 159 $ (ayda 13,25 $, %30 indirim); fiyatlara vergiler dahildir. 7 gün ücretsiz deneyebilirsin ve ilk ödemeden sonraki 14 gün içinde koşulsuz iade alabilirsin.'],
    ['Ücretsiz denemede kart neden isteniyor? Ücret alınır mı?', 'Kart bilgisi, deneme bitince aboneliğin kesintisiz devam edebilmesi için istenir. 7 günlük deneme boyunca kartından hiçbir ücret alınmaz. Deneme bitmeden önce e-postayla hatırlatırız; o tarihten önce Ayarlar → Aboneliği iptal et\'ten iptal edersen hiç ödeme yapmazsın. İptal etmezsen deneme bitiminde seçtiğin plan başlar.'],
    ['Pro\'yu istediğim zaman iptal edebilir miyim?', 'Evet. Aboneliğini istediğin an iptal edebilirsin; ödediğin dönemin sonuna kadar Pro açık kalır, sonra ücretsiz plana geçersin. Verilerin silinmez.'],
    ['Telefondan kullanabilir miyim?', 'Evet. TradeLog tarayıcıda çalışır ve telefon ekranı için tasarlandı. Ana ekrana ekleyerek uygulama gibi kullanabilirsin.']],
  cta_h: 'Edge\'ini tahmin etme, ölç.', cta_p: 'Ücretsiz hesabını oluştur, ilk raporunu yükle; panelin dakikalar içinde hazır.',
  foot_disc: 'TradeLog bir trading günlüğüdür ve yatırım tavsiyesi vermez. Kaldıraçlı ürünlerde işlem yapmak yüksek risk içerir; geçmiş sonuçlar gelecekteki sonuçları garanti etmez.',
  foot_product: 'Ürün', foot_support: 'Destek', foot_legal: 'Yasal', foot_tg: 'Telegram uygulaması', foot_made: 'Tüm hakları saklıdır.',
  calc: { h: 'Lot hesaplayıcı', bal: 'Hesap bakiyesi ($)', risk: 'Risk (%)', risk_h: 'Çoğu trader işlem başına %0,5–2 riske girer.', ins: 'Enstrüman',
    ins_o: [['usd', 'EURUSD, GBPUSD, AUDUSD (…/USD)'], ['jpy', 'USDJPY, EURJPY, GBPJPY (…/JPY)'], ['base', 'USDCAD, USDCHF (USD/…)'], ['xau', 'Altın (XAUUSD)'], ['own', 'Diğer (pip değerini gir)']],
    stop: 'Stop mesafesi (pip)', stop_xau: 'Stop mesafesi ($ fiyat)', stop_xau_h: 'Örn. 2.350,00 giriş, 2.345,00 stop → 5', rate_jpy: 'USDJPY kuru', rate_base: 'Parite kuru (ör. USDCAD)',
    pv: '1 lotun pip değeri ($)', pv_h: 'Brokerının kontrat bilgisinde yazar.', need: 'Sonucu görmek için alanları doldur.',
    lots: 'Açman gereken lot', lots_s: 'Risk tutarını aşmamak için 0,01\'e aşağı yuvarlandı.', amt: 'Risk tutarı', real: 'Bu lotla gerçek risk', pvl: '1 lotun pip değeri',
    small: 'Hesaplanan lot 0,01\'in altında: bu stop mesafesiyle riskin, en küçük lotla açılan işlemden daha küçük.', tg_h: 'Hedefler (1R, 2R, 3R)', u_pip: 'pip', u_usd: '$',
    r_h: 'R kat hesaplayıcı', r_p: 'Giriş, stop ve çıkış fiyatını gir; işlemin kaç R olduğunu gör. Alış ya da satış otomatik anlaşılır.', r_en: 'Giriş fiyatı', r_sl: 'Stop fiyatı', r_ex: 'Çıkış fiyatı',
    r_res: 'İşlemin sonucu', long: 'Alış işlemi', short: 'Satış işlemi',
    disc: 'Hesaplayıcı yaklaşık değer verir ve hesap para birimini USD kabul eder; pip değeri kura ve brokerın kontrat büyüklüğüne göre değişebilir. Yatırım tavsiyesi değildir.' },
  pg_contact: 'İletişim', pg_privacy: 'Gizlilik politikası', pg_terms: 'Kullanım koşulları', pg_refund: 'İade politikası', pg_mt5: 'MT5/MT4 işlem günlüğü', pg_prop: 'Prop firm günlüğü', pg_calc: 'Lot hesaplama', foot_res: 'Kaynaklar', prop_more: 'Prop firm günlüğünü yakından tanı →', plat_more: 'MT5 ve MT4 ile nasıl çalıştığını gör →', calc_more: 'Lot hesaplayıcıyı dene →', owner: 'Taner Pehlivanlar', back_home: 'Ana sayfaya dön',
  d_panel: 'Panel', d_sample: 'Örnek veri', d_period: 'Dönem', d_per: { '7': '7G', '30': '30G', '90': '90G' },
  d_sum: '{n} işlem · {w} kazanç, {l} kayıp', d_wr: 'Kazanma oranı', d_pf: 'Profit factor', d_exp: 'İşlem başı', d_dd: 'En derin düşüş', d_total: 'Toplam',
  flow: [
    ['Hesabını ekle', '1 dakika', 'MT4/MT5 hesabını yatırımcı şifresiyle bağla ya da raporunu yükle. Bakiye, para birimi ve geçmiş işlemler otomatik gelir.'],
    ['İşlemlerin gelsin', 'Otomatik', 'Bağlı hesaplarda yeni işlemler her gece kendiliğinden eklenir. Rapordan ya da elle eklenenler tekrar sayılmaz, notların korunur.'],
    ['Edge\'ini bul', 'Her gün', 'Panel, takvim ve raporlar setup, seans ve hataya göre neyin kazandırdığını, neyin kaybettirdiğini gösterir.']],
  fl_opts: ['MT4/MT5 raporu yükle', 'Elle oluştur', 'Otomatik bağla'], fl_soon: 'Pro',
  fl_rows: [['Rapordaki işlemler', '28'], ['Eşleşen', '6'], ['Yeni', '22']],
  fl_ins: [['g', 'En iyi setup: Breakout', '+1,4R'], ['r', 'FOMO maliyeti', '−7,2R']],
  steps: [['Kaydet', 'İşlem kapanınca telefondan sembol, sonuç ve setup\'ı seç. 15 saniye.'], ['Raporu yükle', 'Haftada bir MT4/MT5 raporunu yükle. Rakamlar düzelir, eksikler eklenir.'], ['Neyin işe yaradığını gör', 'Setup, gün, saat ve hataya göre sade içgörüler.']],
  s_new: 'Yeni işlem', s_15: '15 saniye', s_sym: 'Sembol', s_side: 'Yön', s_res: 'Sonuç', s_feel: 'Planlanan R:R', s_try: 'Kendin dene', s_r: '+1,8R',
  s_feels: ['1:1', '1:2', '1:3', '1:5'],
  s_imp: 'Rapor yükle', s_ex: 'Örnek', s_read: 'Okundu', s_acc: 'MT5 · Hesap 247806 → Funded 100K',
  s_res_rows: [['Rapordaki işlemler', '28'], ['Elle girdiklerinle eşleşti, notların korundu', '6'], ['Yeni eklenecek', '22'], ['Para yatırma / çekme', '2'], ['Bakiye rapordakiyle aynı', '$101.284']],
  s_tz: 'Saat farkı otomatik bulundu: +3 saat',
  s_ins_t: 'Bu ayın içgörüleri',
  s_ins: [['g', 'trend', 'En iyi setup\'ın Breakout', '22 işlemde ortalama +1,4R. Bu ay kazancının çoğu buradan geldi.'], ['r', 'pulse', 'FOMO sana 7,2R kaybettirdi', '"FOMO" işaretli 9 işlemin 7\'si zararla kapandı.'], ['r', 'cal', 'Pazartesi en zayıf günün', 'Ortalama −0,6R. Pazartesi işlem sayını azaltmayı dene.'], ['g', 'shield', 'Plana uyduğun işlemler kazandırıyor', 'Plan içi +0,7R, plan dışı −0,4R ortalama.']],
  p_h: 'Prop firm kuralların her an önünde', p_p: 'Günlük kayıp, toplam kayıp ve kâr hedefini hesap başına gir. Limite yaklaşınca TradeLog seni uyarır.', p_acc_aria: 'Hesap',
  p_dl: 'Günlük kayıp limiti', p_ml: 'Toplam kayıp limiti', p_tg: 'Kâr hedefi', p_none: 'Funded hesapta yok', p_none_s: 'Kâr hedefi yalnızca challenge hesaplarında',
  p_left: 'Kalan {x}', p_tleft: 'Hedefe kalan {x}', p_used: '{p} kullanıldı', p_done: '{p} tamam', p_note: 'Sadece kapanmış işlemler sayılır. Oranlar başlangıç bakiyesine göredir.',
  pb_rules: ['Trend yönünde', 'Seviye retest edildi', 'Risk %1 veya altı'], pb_in: 'Plan içi', pb_out: 'Plan dışı',
  c_h: 'Takvim', c_month: 'Ekim 2026 · örnek', c_mname: 'Ekim', c_wd: ['Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct', 'Pz'], c_none: 'işlem yok', c_future: 'henüz gelmedi', c_n: '{n} işlem', c_hint: 'Bir güne gel, sonucu gör', c_win: 'Kazanç', c_loss: 'Kayıp', c_empty: 'İşlem yok',
  pages: {
    help: { t: 'Yardım', u: 'TradeLog\'u kullanırken en çok sorulanlar', st: 'Yardım: MT4/MT5 raporu, hesap bağlama ve TradeLog AI | TradeLog', sd: 'TradeLog yardım merkezi: MT4/MT5 raporu nasıl alınır, hesap nasıl bağlanır, TradeLog AI, R nedir, prop firm kuralları ve paylaşım.', s: [
      ['Başlarken', '<ol><li>Sayfanın üstünden <b>Ücretsiz başla</b>\'ya bas ve hesabını oluştur: Google ile tek tıkla ya da e-posta ve şifreyle.</li><li><b>Hesabını ekle</b>: MT4/MT5 raporu yükle ya da hesabı elle oluştur.</li><li>Raporu yüklediysen panelin hemen dolar. Elle oluşturduysan ilk işlemini gir.</li><li>Panelin üstündeki <b>Başlangıç</b> listesindeki adımları tamamla: playbook, prop kuralları, günlük.</li></ol>'],
      ['MT5 raporu nasıl alınır', '<ol><li>Bilgisayarda MetaTrader 5\'i aç.</li><li><b>Araç Kutusu</b> (Toolbox) penceresini aç: Ctrl+T.</li><li><b>Geçmiş</b> (History) sekmesine geç, listede sağ tıkla ve tarih aralığını seç.</li><li>Yine sağ tıkla, <b>Rapor</b> (Report) altından <b>HTML</b> ya da <b>Open XML (Excel)</b> seç ve kaydet.</li><li>TradeLog\'da <b>İşlem ekle → MT4/MT5 raporu yükle</b> ile dosyayı seç.</li></ol>'],
      ['MT4 raporu nasıl alınır', '<ol><li>Bilgisayarda MetaTrader 4\'ü aç.</li><li><b>Terminal</b> penceresini aç: Ctrl+T.</li><li><b>Hesap Geçmişi</b> (Account History) sekmesinde sağ tıkla ve dönemi seç (örneğin Tüm Geçmiş).</li><li>Yine sağ tıkla, <b>Detaylı Raporu Kaydet</b> (Save as Detailed Report) seç ve .htm dosyasını kaydet.</li><li>TradeLog\'da dosyayı yükle.</li></ol>'],
      ['Telefonda rapor', '<p>MT4 ve MT5\'in telefon uygulamaları rapor dışa aktaramıyor. Raporu bilgisayardan al; dosyayı telefonuna gönderip TradeLog\'da oradan da seçebilirsin.</p>'],
      ['Aynı raporu tekrar yüklersem ne olur?', '<p>Hiçbir şey bozulmaz. Daha önce eklenen işlemler atlanır, sadece yeniler eklenir. Elle girdiğin işlemler rapordaki aynı işlemle eşleşir: notların, setup\'ın ve hataların korunur, rakamlar rapordan güncellenir.</p>'],
      ['Haftalık özet', '<p><b>Raporlar → Haftalık özet</b>\'te haftanın net sonucunu, günlerini, en iyi ve en kötü işlemini geçen haftayla karşılaştırmalı görürsün. Altta işlemlerine eklediğin setup ve hatalardan çıkan 1-3 öneri ve haftanın notu var.</p><p><b>Özeti kopyala</b> ile özeti metin olarak alıp mentoruna gönderebilirsin. Panelde de bu haftanın kısa özeti görünür.</p>'],
      ['Paylaşım linki', '<p>İşlem detayında ya da Raporlar → Haftalık özet\'te <b>Paylaş</b>\'a bas. Notların, para tutarının ve ekran görüntülerinin görünüp görünmeyeceğini seç, istersen adını yaz ve <b>Link oluştur</b>\'a bas; link panoya kopyalanır. Linkleri <b>Ayarlar → Paylaşım linklerim</b>\'den görebilir ve kapatabilirsin.</p>'],
      ['MT4/MT5 hesabını bağlama (Pro)', '<p>Hesap eklerken <b>Otomatik bağla</b>\'ya ya da hesabı düzenle ekranında <b>Hesabı bağla</b>\'ya bas. MT5 ya da MT4\'ü seç; sunucu adını, hesap numaranı ve <b>yatırımcı (salt okunur) şifreni</b> gir. Bağlantı birkaç dakika içinde kurulur ve son 90 günün kapanan işlemleri, para yatırma ve çekmeleri gelir. Sonrasında yeni işlemlerin hafta içi her gece piyasa kapanınca kendiliğinden gelir (uygulama kapalıyken de); gün içinde beklemek istemezsen hesap başına günde 3 kez <b>Şimdi senkronize et</b>\'e basabilirsin. MetaTrader\'ın açık olması gerekmez. Yatırımcı şifresini bilmiyorsan aracı kurumunun e-postasına bak ya da MetaTrader\'da Araçlar → Seçenekler → Sunucu → Değiştir\'den yeni bir tane belirle. Bağlantıyı hesabı düzenle ekranından istediğin an kaldırabilirsin.</p>'],
      ['TradeLog AI (Pro)', '<p>Sol menüdeki <b>TradeLog AI</b>\'ye (telefonda Daha fazla menüsünde) ya da Panel\'deki <b>TradeLog AI\'ye sor</b>\'a bas. Panel yandan açılır; sayfana bakmaya devam ederken sohbet edebilirsin. Senin verilerinden çıkardığı önerilerle başlar. Hazır sorulardan birini seç ya da kendin yaz: “En pahalı hatam ne?”, “Hangi setup\'ım işe yarıyor?” gibi. TradeLog AI, seçili hesap görünümündeki işlemlerine, setup\'larına, hatalarına ve günlüğüne bakarak sayılarla cevap verir. Al-sat sinyali vermez, yatırım tavsiyesi değildir. Günlük soru hakkı vardır; sohbet sadece kendi cihazında saklanır.</p>'],
      ['Mentor erişimi', '<p><b>Ayarlar → Mentor erişimi</b>\'nde mentorunun e-postasını yaz ve <b>Davet et</b>\'e bas. Çıkan mesajı ona WhatsApp ya da e-postayla gönder. Mentorun linki açıp o e-postayla giriş yapınca hesabını salt okunur görür: işlemlerini, notlarını, raporlarını ve ekran görüntülerini. Hiçbir şeyi değiştiremez. Erişimi aynı yerden istediğin an kaldırabilirsin.</p>'],
      ['R nedir?', '<p>R, bir işlemde riske ettiğin tutarın katıdır. Stop olursan −1R, riskinin iki katını kazanırsan +2R yazılır. Böylece farklı lot ve hesap büyüklüklerindeki işlemler aynı ölçüyle karşılaştırılır.</p><p>Raporda stop loss varsa R otomatik hesaplanır. Stop yoksa hesabın risk yüzdesinden tahmin edilir ve yanında ≈ işareti görünür.</p>'],
      ['Hesap ve giriş', '<p>Google hesabınla ya da e-posta ve şifreyle giriş yapabilirsin. Bir cihazda giriş yaptığında çıkış yapana kadar orada açık kalırsın; her seferinde yeniden giriş yapman gerekmez. Aynı hesapla telefonda ve bilgisayarda aynı verileri görürsün.</p><p>Şifreni unuttuysan giriş ekranında <b>Şifremi unuttum</b>\'a bas; e-postana sıfırlama linki gelir. Google ile kayıt olduysan Ayarlar → Profil\'den bir şifre de belirleyebilirsin.</p><p>Daha önce TradeLog\'u hesapsız kullandıysan, o cihazdaki veriler ilk girişte hesabına taşınır. Hem cihazda hem hesabında veri varsa birleştirmek isteyip istemediğin sorulur. Çıkış yapmak ve hesabı silmek için <b>Ayarlar → Profil</b>.</p>'],
      ['Telegram\'dan web\'e geçmek', '<p>Telegram sürümü kademeli olarak kapanacak. Verilerini taşımak için Telegram\'da <b>Ayarlar → Veri → Yedek indir</b>\'e bas ve çıkan metni kopyala. Sonra web\'de giriş yap ve <b>Ayarlar → Veri → Metin yapıştırarak yükle</b> ile içeri al.</p>'],
      ['Yedek almak', '<p>Verilerin hesabında, sunucuda saklanır ve giriş yaptığın her cihazda aynıdır. Ayrıca kendi kopyanı tutmanı öneririz: Ayarlar → Veri → <b>Yedek indir</b> ile bütün verilerini tek dosyada alırsın, gerektiğinde <b>Yedek dosyasından geri yükle</b> ile içeri alırsın. Ayda bir yedek indirmek iyi bir alışkanlıktır.</p>'],
      ['Hâlâ sorun mu var?', '<p>Uygulamada <b>Ayarlar → Yardım ve destek → Destek ekibine yaz</b>\'dan ya da İletişim sayfasındaki formdan bize ulaş. Hesap bağlarken bir destek kodu (ör. TL-103) gördüysen mesajına ekle.</p>']] },
    privacy: { t: 'Gizlilik politikası', u: 'Son güncelleme: 28 Ekim 2026', st: 'Gizlilik politikası | TradeLog', sd: 'TradeLog hangi verileri işler, nerede saklar ve kimlerle paylaşır; KVKK kapsamındaki hakların.', s: [
      ['Kısaca', '<p>TradeLog\'u kullanmak için e-posta adresinle bir hesap açarsın. Girdiğin işlemler, notlar, hesap bilgileri ve ayarlar hesabında saklanır; böylece giriş yaptığın her cihazda aynı veriyi görürsün. Verilerini satmayız, reklam için kullanmayız ve hizmeti sunmak dışında bir amaçla kimseyle paylaşmayız.</p>'],
      ['Hangi verileri işliyoruz', '<ul><li><b>Hesap:</b> e-posta adresin, hesabın açılış ve giriş zamanları. Şifren yalnızca geri döndürülemez biçimde (hash) saklanır. Google ile girersen Google\'ın paylaştığı ad ve profil fotoğrafı bağlantın da hesabına kaydedilir.</li><li><b>Günlük verilerin:</b> işlemler, notlar, playbook\'lar, günlük ve haftalık notlar, hesap adları, hesap numaraları, sunucu adları, bakiye ve para hareketleri, ayarlar.</li><li><b>Teknik kayıtlar:</b> IP adresi ve tarayıcı bilgisi; güvenlik ve hata ayıklama için sunucu kayıtlarında kısa süre tutulur.</li></ul>'],
      ['Ne için kullanıyoruz', '<p>Hizmeti sunmak, girişini doğrulamak (şifre sıfırlama ve doğrulama e-postaları dahil), verilerini cihazların arasında senkronize etmek ve hizmeti güvende tutmak için. Verilerinden hesaplanan istatistikler yalnızca sana gösterilir.</p>'],
      ['Verilerin nerede saklanır', '<p>Verilerin, altyapı sağlayıcımız Supabase üzerinden Almanya\'daki (Frankfurt) sunucularda saklanır ve şifreli bağlantıyla (HTTPS) iletilir. Bu, kişisel verilerin yurt dışına aktarılması anlamına gelir. Hızlı açılış ve internetsiz kullanım için cihazında da bir kopya tutulur; çıkış yaptığında bu kopya silinir.</p>'],
      ['Yüklediğin raporlar', '<p>MT4/MT5 raporları cihazında okunur; rapor dosyasının kendisi sunucuya gönderilmez, yalnızca içinden çıkan işlemler ve hesap bilgileri hesabına kaydedilir. Hesap şifren hiçbir zaman istenmez.</p>'],
      ['Paylaşım linkleri', '<p>Bir işlemi ya da haftalık özetini paylaştığında, o anki halinin bir kopyası oluşturulur ve linki olan herkes görebilir. Notların, para tutarın ve ekran görüntülerin sadece sen seçersen eklenir. Linkin kaç kez açıldığı sayılır. Linki Ayarlar → Paylaşım linklerim\'den kapattığında kopya ve görselleri silinir.</p>'],
      ['MT4/MT5 hesap bağlantısı', '<p>Hesabını bağlarsan sunucu adın, hesap numaran ve yatırımcı (salt okunur) şifren, bağlantıyı kuran hizmet sağlayıcımız MetaApi\'ye (metaapi.cloud) iletilir; sunucuları yurt dışındadır. Yatırımcı şifreni biz saklamayız. MetaApi hesabının işlem geçmişini okur; biz oradan kapanan işlemlerini (sembol, yön, lot, giriş/çıkış fiyatı ve saati, SL/TP, kâr, komisyon, swap), para yatırma/çekme kayıtlarını, aracı kurum adını, hesap para birimini ve bakiyeni alırız. Yatırımcı şifresiyle işlem açılamaz, para çekilemez. Bağlantıyı kaldırdığında ya da üyeliğini sildiğinde MetaApi\'deki bağlantı da silinir.</p>'],
      ['TradeLog AI', '<p>TradeLog AI\'ye soru sorduğunda sorunla birlikte seçili hesap görünümünün özeti (istatistikler, setup/sembol/gün kırılımları, son 60 işlemin ayrıntıları ve notları, son iki haftanın günlük yazıları) cevabı üretmesi için Anthropic\'in Claude hizmetine gönderilir; sunucuları yurt dışındadır. E-posta adresin ve hesap numaran gönderilmez. Sorular ve cevaplar bizim sunucumuzda saklanmaz, sohbet sadece senin cihazında durur; maliyet kontrolü için sadece günlük soru sayısını tutarız.</p>'],
      ['Mentor erişimi', '<p>Mentor olarak davet ettiğin ve davet linkini açıp aynı e-postayla giriş yapan kişi, hesabındaki verileri salt okunur görebilir; değiştiremez. Erişimi Ayarlar → Mentor erişimi\'nden kaldırdığında hemen kapanır.</p>'],
      ['Ödeme bilgileri', '<p>Pro\'ya geçersen ödeme ve fatura bilgilerin (ad, e-posta, ülke, kart ya da ödeme yöntemi) satıcımız Paddle.com tarafından işlenir; kart bilgilerin bize ulaşmaz. Biz yalnızca aboneliğinin durumunu saklarız: plan, yenileme ya da bitiş tarihi ve Paddle\'daki müşteri ve abonelik numaran. Paddle\'ın gizlilik politikası: <a href="https://www.paddle.com/legal/privacy" target="_blank" rel="noopener">paddle.com/legal/privacy</a>.</p>'],
      ['Ne kadar süre saklıyoruz', '<p>Hesabın açık olduğu sürece. Hesabını sildiğinde hesabın ve bütün verilerin hemen ve kalıcı olarak silinir.</p>'],
      ['Üçüncü taraf hizmetler', '<p>Supabase (veritabanı, giriş ve e-posta altyapısı). Yazı tipleri kendi sunucumuzdan yüklenir. Uygulama açılırken bazı kütüphaneler cdnjs ve jsDelivr\'den yüklenir; bu hizmetler dosyaları gönderirken IP adresin gibi teknik bilgileri görebilir. Ziyaret sayılarını ölçmek için çerez kullanmayan Cloudflare Web Analytics kullanıyoruz; yalnızca toplu sayılar (sayfa görüntüleme, ülke, cihaz türü) görülür, seni tanımlayan bir kimlik ya da çerez oluşturulmaz. Giriş e-postaları (doğrulama, şifre sıfırlama) Resend üzerinden gönderilir. Reklam ya da izleme çerezi kullanmıyoruz. Oturumun tarayıcının yerel depolamasında tutulur.</p>'],
      ['Hakların', '<p>KVKK\'nın 11. maddesi kapsamında verilerinin işlenip işlenmediğini öğrenme, bilgi isteme, düzeltilmesini ya da silinmesini isteme ve itiraz etme hakların var. <b>Ayarlar → Profil</b>\'den verilerini indirebilir ya da hesabını tamamen silebilirsin. Diğer talepler için İletişim sayfasındaki adrese yaz.</p>'],
      ['Telegram', '<p>TradeLog\'u Telegram içinde hesapsız kullananların verileri Telegram\'ın bu uygulamaya ayırdığı bulut alanında durur ve Telegram\'ın gizlilik koşullarına tabidir. Telegram sürümü kademeli olarak kapanacak; verilerini yedekle web\'deki hesabına taşıyabilirsin.</p>'],
      ['Değişiklikler', '<p>Pro ve ödeme geldiğinde bu politika güncellenecek. Önemli değişiklikleri sitede ve e-postayla duyururuz.</p>']] },
    terms: { t: 'Kullanım koşulları', u: 'Son güncelleme: 28 Ekim 2026', st: 'Kullanım koşulları | TradeLog', sd: 'TradeLog trading günlüğünün kullanım koşulları: hesap, veriler, prop firm kuralları ve yatırım tavsiyesi olmadığı.', s: [
      ['Hizmeti sunan', '<p>TradeLog, Türkiye\'de yaşayan bireysel girişimci {owner} tarafından sunulur. Bize destek@gotradelog.com adresinden ya da {link:contact} sayfasından ulaşabilirsin.</p>'],
      ['Hizmet', '<p>TradeLog, işlemlerini kaydetmen ve sonuçlarını incelemen için bir işlem günlüğüdür. Kullanmak için e-posta adresinle hesap açman gerekir. Ücretsiz planı süre sınırı olmadan kullanabilirsin.</p>'],
      ['Hesabın', '<p>Hesabına Google hesabınla ya da e-posta ve şifreyle girersin. Şifrenin ve e-posta hesabının güvenliği senin sorumluluğundadır. Hesabını başkasıyla paylaşma. Hesabını istediğin an Ayarlar → Profil\'den silebilirsin.</p>'],
      ['Yatırım tavsiyesi değildir', '<p>Gösterilen istatistikler, TradeLog puanı ve içgörüler senin girdiğin verilerden hesaplanır. Bunlar alım satım önerisi değildir. İşlem kararların ve sonuçları sana aittir.</p>'],
      ['Prop firm kuralları', '<p>Paneldeki günlük kayıp, toplam kayıp ve kâr hedefi göstergeleri senin girdiğin oranlarla ve kapanmış işlemlerle hesaplanır. Firmanın resmi hesaplamasının yerine geçmez; kesin bilgi için firmanın kendi panelini kontrol et.</p>'],
      ['Verilerin', '<p>Verilerin sana aittir. Onları korumak için makul önlemler alırız. Sunucu tarafında geri yükleme garantisi vermediğimiz için önemli verilerin için zaman zaman Ayarlar → Veri\'den kendi yedeğini almanı öneririz. Senin sildiğin verileri geri getiremeyiz.</p>'],
      ['Hizmetin durumu', '<p>TradeLog olduğu gibi sunulur. Hataları düzeltmek için çalışırız ama hizmetin kesintisiz ya da hatasız çalışacağını garanti edemeyiz.</p>'],
      ['Kullanım kuralları', '<p>Hizmeti bozmaya, başkalarının verilerine erişmeye ya da kötüye kullanmaya çalışmak yasaktır. Bu kurallara uymayan hesapları askıya alabiliriz.</p>'],
      ['Planlar ve fiyatlar', '<p>Ücretsiz plan süresizdir ve ödeme bilgisi istemez. Pro ücretli bir aboneliktir: <b>aylık 19 $</b> ya da <b>yıllık 159 $</b>. Güncel fiyatlar ve her planın özellikleri ana sayfadaki Fiyatlar bölümündedir. Fiyatlara KDV ve satış vergisi dahildir; ödeme sırasında ek ücret eklenmez.</p>'],
      ['Ödeme', '<p>Sipariş süreci, yetkili çevrim içi satıcımız <b>Paddle.com</b> tarafından yürütülür. Paddle.com, tüm siparişlerimizin satıcısıdır (Merchant of Record): ödemeyi alır, faturayı keser, ülkene göre KDV ya da satış vergisini hesaplar; ödeme ve faturayla ilgili sorularını ve iade taleplerini de karşılar. Kart bilgilerin bize ulaşmaz. Satın alımın ayrıca <a href="https://www.paddle.com/legal/checkout-buyer-terms" target="_blank" rel="noopener">Paddle\'ın alıcı koşullarına</a> tabidir.</p>'],
      ['Ücretsiz deneme', '<p>Pro\'yu <b>7 gün ücretsiz</b> deneyebilirsin. Denemeyi başlatırken kart bilgisi istenir ama <b>deneme boyunca hiçbir ücret alınmaz</b>. Deneme bitmeden önce sana e-postayla hatırlatma gönderilir. Bitmeden iptal edersen hiç ödeme yapmazsın ve hesabın ücretsiz plana geçer; iptal etmezsen deneme bitiminde seçtiğin plan (aylık ya da yıllık) başlar ve ilk ödeme o gün alınır. Deneme her üye için bir kez geçerlidir.</p>'],
      ['Yenileme ve iptal', '<p>Pro aboneliği, iptal edene kadar seçtiğin döneme göre her ay ya da her yıl otomatik yenilenir ve ücret aynı ödeme yönteminden alınır. İstediğin zaman uygulamada <b>Ayarlar → Aboneliği iptal et</b>\'ten tek tıkla ya da ödeme makbuzundaki bağlantıdan iptal edebilirsin; ödediğin dönemin sonuna kadar Pro açık kalır.</p>'],
      ['Fiyat değişiklikleri', '<p>Pro fiyatını değiştirirsek bunu en az 30 gün önce e-postayla bildiririz. Yeni fiyat, bildirimden sonraki ilk yenilemeden itibaren geçerli olur; istemezsen o tarihten önce iptal edebilirsin.</p>'],
      ['İadeler', '<p>İlk ödemeden sonraki 14 gün içinde tam iade isteyebilirsin. Ayrıntılar {link:refund} sayfasında.</p>'],
      ['Pro sona erdiğinde', '<p>Aboneliğin biterse hesabın ücretsiz plana geçer ve verilerin kalır. Bağlı MT4/MT5 hesaplarının otomatik senkronu durur; 7 gün içinde yeniden Pro olursan bağlantı kaldığı yerden devam eder, sonrasında hesabı yeniden bağlaman gerekir.</p>'],
      ['Değişiklikler', '<p>Bu koşulları zaman zaman güncelleyebiliriz. Önemli değişiklikleri yürürlüğe girmeden önce sitede ya da e-postayla duyururuz.</p>']] },
    refund: { t: 'İade politikası', u: 'Son güncelleme: 28 Ekim 2026', st: 'İade politikası | TradeLog', sd: 'TradeLog Pro aboneliğinde 14 gün para iadesi, iptal ve yenileme koşulları.', s: [
      ['Önce 7 gün ücretsiz dene', '<p>Pro\'yu 7 gün ücretsiz deneyebilirsin. Kart bilgisi istenir ama <b>deneme boyunca hiçbir ücret alınmaz</b>. Deneme bitmeden önce e-postayla hatırlatılırsın; bitmeden Ayarlar → Aboneliği iptal et\'ten iptal edersen hiç ödeme yapmazsın. Hesabın ücretsiz plana geçer, verilerin olduğu gibi kalır.</p>'],
      ['14 gün para iadesi', '<p>Pro için yapılan ilk ödemeden (aylık ya da yıllık; deneme bitiminde alınan ödeme) sonraki <b>14 gün içinde</b>, gerekçe göstermeden tam iade isteyebilirsin. Yıllık aboneliğin yenilendiğinde de yenileme tarihinden sonraki 14 gün içinde yenileme ücretinin iadesini isteyebilirsin.</p>'],
      ['Aylık yenilemeler ve iptal', '<p>Aboneliğini istediğin an iptal edebilirsin; ödediğin dönemin sonuna kadar Pro açık kalır ve bir sonraki dönem için ücret alınmaz. Aylık yenilemelerde kısmi iade yapmıyoruz. Teknik bir sorun yüzünden Pro\'yu kullanamadıysan bize yaz; inceleyip iade ya da süre uzatma yaparız.</p>'],
      ['İade nasıl istenir', '<p>Üyelik e-posta adresinden bize yaz ya da ödeme makbuzundaki bağlantıyı (paddle.net) kullan. İade, satıcımız Paddle üzerinden ödemeyi yaptığın karta ya da yönteme yapılır; bankana göre 5–10 iş günü sürebilir. İade edilen abonelik hemen sona erer ve hesabın ücretsiz plana geçer; verilerin silinmez.</p>{mail}'],
      ['Yasal hakların', '<p>Bu politika, yaşadığın ülkenin tüketici mevzuatından doğan haklarını kısıtlamaz.</p>']] },
    mt5: { t: 'MT5 ve MT4 işlem günlüğü', u: '', st: 'MT5 ve MT4 İşlem Günlüğü: Otomatik Senkron ve Rapor Yükleme | TradeLog', sd: 'MetaTrader 5 ve MetaTrader 4 işlemlerini otomatik aktaran trading günlüğü. Raporunu ücretsiz yükle ya da yatırımcı şifresiyle bağla; her işlemi R ile analiz et.', seo: 1, s: [
      ['', '<p class="lead">TradeLog, MetaTrader 5 ve MetaTrader 4 hesabındaki işlemleri tek tek yazmadan günlüğüne getirir. Her işlemi R (risk katı) cinsinden ölçer; hangi setup\'ın, seansın ve hatanın sana kazandırdığını ya da kaybettirdiğini rakamlarla gösterir.</p><div class="lpcta"><a class="btn btn-p btn-lg" href="#/app"><span data-st="cta_start">Ücretsiz başla</span></a><a class="btn btn-g btn-lg" href="#/app" data-pro="1">Pro\'yu 7 gün ücretsiz dene</a></div><img class="lpimg" src="{img:dash}" alt="TradeLog paneli: MT5 işlemlerinden hesaplanan net sonuç, kazanma oranı ve TradeLog puanı" width="1280" height="800" loading="lazy" decoding="async">'], ['İşlemlerini getirmenin iki yolu', '<ol><li><b>Rapor yükle (ücretsiz):</b> MT5 ya da MT4 masaüstü uygulamasından geçmiş raporunu HTML ya da Excel olarak kaydet, TradeLog\'a sürükle. Rapordaki işlemler, para yatırma ve çekmeler hesabına eklenir; daha önce eklenenler tekrar sayılmaz, elle girdiğin işlemler rapordakiyle eşleşir.</li><li><b>Otomatik senkron (Pro):</b> Hesabını sunucu adı, hesap numarası ve <b>yatırımcı (salt okunur) şifresiyle</b> bir kez bağla. Geçmiş işlemlerin gelir; yeni işlemler her hafta içi gece kendiliğinden eklenir. Uygulamayı açmana gerek yoktur.</li></ol>'], ['MT5 raporu nasıl alınır', '<ol><li>MetaTrader 5 masaüstü uygulamasında <b>Araç Kutusu → Geçmiş</b> sekmesini aç.</li><li>Listede sağ tıkla, dönemi seç (ör. Tüm geçmiş).</li><li>Yine sağ tıkla → <b>Rapor → HTML</b> (ya da Open XML) ile kaydet.</li><li>Dosyayı TradeLog\'da <b>İşlem ekle → Rapor yükle</b>\'ye bırak.</li></ol><p>MT4\'te <b>Terminal → Hesap geçmişi</b> sekmesinde sağ tıklayıp <b>Ayrıntılı raporu kaydet</b>\'i seçmen yeterli. Telefon uygulamaları rapor dışa aktaramaz; bunun için masaüstü uygulamasını ya da otomatik senkronu kullan.</p>'], ['Hesabın güvende', '<ul><li><b>Ana şifreni hiçbir zaman istemeyiz.</b> Otomatik senkron yalnızca yatırımcı şifresiyle çalışır; bu şifreyle işlem açılamaz, para çekilemez.</li><li>Yatırımcı şifresi bağlantıyı kurmak için bir kez kullanılır ve saklanmaz.</li><li>Rapor dosyası cihazında okunur; dosyanın kendisi sunucuya gönderilmez.</li><li>Verilerin Almanya\'da şifreli tutulur; satılmaz, reklam için kullanılmaz.</li></ul>'], ['MT5 işlemlerinden ne öğrenirsin', '<ul><li><b>R bazında sonuçlar:</b> net R, kazanma oranı, profit factor, işlem başı beklenti, en derin düşüş.</li><li><b>Setup ve seans kırılımı:</b> hangi kurulum, gün ve saat kazandırıyor.</li><li><b>Hataların maliyeti:</b> erken çıkış, FOMO, stop kaydırma gibi etiketlerin sana kaç R kaybettirdiği.</li><li><b>Takvim ve haftalık özet:</b> her günün sonucu ve gelecek hafta için 1–3 somut öneri.</li><li><b>TradeLog AI (Pro):</b> günlüğünü okuyup soruna rakamlarla cevap veren koç.</li></ul>'], ['Hangi brokerlarla çalışır', '<p>MetaTrader 4 ya da MetaTrader 5 kullanan brokerların ve prop firmaların büyük çoğunluğuyla. Rapor yükleme her MT4/MT5 hesabında çalışır; otomatik senkron için hesabın sunucu adı ve yatırımcı şifresi yeterlidir. Farklı platformlardaki işlemlerini elle de girebilirsin. Ayrıntılar için {link:help} sayfasına bak.</p>'], ['Sık sorulanlar', '<p><b>Ücretsiz mi?</b> Rapor yükleme, bütün raporlar ve analizler ücretsiz planda, işlem sınırı olmadan. Otomatik senkron ve TradeLog AI Pro\'da; Pro\'yu 7 gün ücretsiz deneyebilirsin.</p><p><b>İşlemler ne sıklıkla güncellenir?</b> Bağlı hesaplarda her hafta içi gece; istersen hesap başına günde 3 kez "Şimdi senkronize et" ile beklemeden alabilirsin.</p><p><b>Birden çok hesabım var.</b> Kişisel, challenge ve funded hesaplarını ayrı ayrı izleyebilir, hepsini tek panelde görebilirsin. Kopyalanan işlemler birleşik görünümde bir kez sayılır.</p><div class="lpcta"><a class="btn btn-p btn-lg" href="#/app"><span data-st="cta_start">Ücretsiz başla</span></a><a class="btn btn-g btn-lg" href="#/app" data-pro="1">Pro\'yu 7 gün ücretsiz dene</a></div>']] },
    prop: { t: 'Prop firm işlem günlüğü', u: '', st: 'Prop Firm İşlem Günlüğü: Günlük Kayıp ve Max Drawdown Takibi | TradeLog', sd: 'Challenge ve funded hesapların için trading günlüğü: günlük kayıp limiti, maksimum kayıp ve kâr hedefini her işlemde gör, limite yaklaşınca uyarı al.', seo: 1, s: [
      ['', '<p class="lead">Challenge\'ı geçmek çoğu zaman tek bir kötü günü önlemekle ilgilidir. TradeLog, prop firm hesabının kurallarını işlemlerinle birlikte takip eder: günlük kayıp limiti, toplam kayıp ve kâr hedefinde nerede olduğunu her an gösterir, limite yaklaşınca uyarır.</p><div class="lpcta"><a class="btn btn-p btn-lg" href="#/app"><span data-st="cta_start">Ücretsiz başla</span></a><a class="btn btn-g btn-lg" href="#/app" data-pro="1">Pro\'yu 7 gün ücretsiz dene</a></div><img class="lpimg" src="{img:prop}" alt="Prop firm hesap kuralları: günlük ve toplam kayıp limitinden kalan tutar" width="638" height="492" loading="lazy" decoding="async">'], ['Kurallar her an görünür', '<ul><li><b>Günlük kayıp limiti:</b> bugün ne kadar kaybettiğin ve limite ne kadar kaldığı.</li><li><b>Maksimum kayıp (max drawdown):</b> başlangıç bakiyesine göre toplam kaybın.</li><li><b>Kâr hedefi:</b> challenge hedefinin yüzde kaçına ulaştığın.</li><li><b>Erken uyarı:</b> bir limitin %70\'ine ulaştığında panel seni uyarır; hesabı riske atmadan durursun.</li></ul><p>Oranları hesap başına kendin girersin (ör. günlük %5, toplam %10, hedef %8). Hesaplama kapanmış işlemlerle yapılır; kesin rakam için firmanın kendi panelini de kontrol et.</p>'], ['Challenge, funded ve kişisel hesaplar ayrı', '<p>Her hesabın kendi bakiyesi, kuralları ve istatistikleri vardır. Birden çok challenge çeviriyorsan hepsini tek panelde görebilirsin; aynı işlemi birden çok hesaba kopyaladıysan birleşik görünümde bir kez sayılır. Para yatırma, çekme ve payout\'lar bakiye hesabına dahil edilir.</p>'], ['Disiplin kuralları', '<p>Prop hesaplarını genelde tek bir duygusal gün kaybettirir. Ayarlar\'dan günlük maksimum kayıp (R cinsinden), günlük maksimum işlem sayısı ve art arda kayıp sınırı belirle; sınıra gelince TradeLog mola vermeni hatırlatır. Playbook\'unla da hangi kurala uyduğunda kazandığını görürsün.</p>'], ['İşlemlerini nasıl getirirsin', '<p>Prop firmaların çoğu MetaTrader 4 ya da 5 kullanır. Raporunu ücretsiz yükleyebilir ya da hesabını yatırımcı (salt okunur) şifresiyle bağlayıp işlemlerin her gece kendiliğinden gelmesini sağlayabilirsin (Pro). Ayrıntılar: {link:mt5}.</p>'], ['Sık sorulanlar', '<p><b>Kuralları nasıl girerim?</b> Hesabı eklerken ya da Hesaplar sayfasından firmanın günlük kayıp, toplam kayıp ve kâr hedefi oranlarını yazman yeterli; her hesap kendi kurallarıyla izlenir.</p><p><b>Açık pozisyonlar da hesaba katılıyor mu?</b> Hayır, göstergeler kapanmış işlemlerle hesaplanır. Firmalar çoğu zaman anlık özsermayeye bakar; limite yakınken firmanın panelini esas al.</p><p><b>Ücretli mi?</b> Prop firm kuralları ve uyarılar ücretsiz planda. Ücretsizde 2 aktif hesap, Pro\'da 20 aktif hesap ve otomatik senkron var.</p><div class="lpcta"><a class="btn btn-p btn-lg" href="#/app"><span data-st="cta_start">Ücretsiz başla</span></a><a class="btn btn-g btn-lg" href="#/app" data-pro="1">Pro\'yu 7 gün ücretsiz dene</a></div>']] },
    calc: { t: 'Lot hesaplama', u: '', st: 'Lot Hesaplama: Forex Pozisyon Büyüklüğü Hesaplayıcı (Ücretsiz) | TradeLog', sd: 'Hesap bakiyen, risk yüzden ve stop mesafene göre doğru lot büyüklüğünü hesapla. EURUSD, USDJPY, altın (XAUUSD) ve R kat hesaplayıcı; ücretsiz.', seo: 1, s: [
      ['', '<p class="lead">Ne kadar riske gireceğini önce belirle, lotu ona göre aç. Bakiyeni, riske atmak istediğin yüzdeyi ve stop mesafeni gir; hesaplayıcı açman gereken lot büyüklüğünü ve 1R, 2R, 3R hedeflerini gösterir.</p>{calc}'], ['Lot nasıl hesaplanır', '<p>Formül basit: <b>Lot = Risk tutarı ÷ (Stop mesafesi (pip) × 1 lotun pip değeri)</b>. Örnek: 10.000 $ bakiye, %1 risk (100 $), EURUSD\'de 25 pip stop. EURUSD\'de 1 standart lotun pip değeri yaklaşık 10 $\'dır; 100 ÷ (25 × 10) = <b>0,40 lot</b>.</p><ul><li><b>.../USD pariteleri</b> (EURUSD, GBPUSD, AUDUSD): 1 lotta 1 pip ≈ 10 $.</li><li><b>.../JPY pariteleri</b> (USDJPY): 1 lotta 1 pip ≈ 1.000 ÷ kur $.</li><li><b>USD/... pariteleri</b> (USDCHF, USDCAD): 1 lotta 1 pip ≈ 10 ÷ kur $.</li><li><b>Altın (XAUUSD):</b> 1 lot = 100 ons; fiyattaki 1 $\'lık hareket 1 lotta 100 $ eder.</li></ul><p>Brokerların kontrat büyüklüğü farklı olabilir; büyük işlemlerden önce brokerının kontrat bilgisini kontrol et. Hesaplayıcı hesap para birimini USD kabul eder.</p>'], ['R nedir, neden önemli', '<p>R, bir işlemde riske attığın tutardır. 100 $ riskle girip 180 $ kazandıysan işlemin <b>+1,8R</b>, stop olduysan <b>−1R</b>\'dir. Sonuçları R ile ölçmek, lot büyüklüğün değişse bile işlemleri karşılaştırmanı sağlar; bir stratejinin işe yarayıp yaramadığını para tutarından çok daha net gösterir. TradeLog her işlemini otomatik olarak R ile hesaplar.</p>'], ['İşlemlerini R ile takip et', '<p>Hesapladığın riskin gerçekte nasıl sonuç verdiğini görmek için işlemlerini günlüğe kaydet. TradeLog MT4/MT5 raporundan ya da otomatik senkronla işlemlerini alır; setup, seans ve hataya göre neyin kazandırdığını gösterir. Ayrıntılar: {link:mt5}.</p><div class="lpcta"><a class="btn btn-p btn-lg" href="#/app"><span data-st="cta_start">Ücretsiz başla</span></a><a class="btn btn-g btn-lg" href="#/app" data-pro="1">Pro\'yu 7 gün ücretsiz dene</a></div>']] },
    contact: { t: 'İletişim', u: '', st: 'İletişim ve destek | TradeLog', sd: 'TradeLog destek ekibine ulaş: destek@gotradelog.com ya da iletişim formu. Birkaç iş günü içinde e-postayla dönüyoruz.', s: [
      ['Bize ulaş', '<p>Hata bildirimi, soru, öneri ya da iş birliği için bize e-posta gönder ya da aşağıdaki formu kullan; birkaç iş günü içinde e-postayla dönüş yapıyoruz. Giriş yaptıysan uygulamada <b>Ayarlar → Yardım ve destek</b>\'ten de yazabilirsin.</p>{mail}{form}'],
      ['Yazarken işimize yarayanlar', '<ul><li>Ne yapmaya çalıştığın ve ne olduğu</li><li>Telefon mu bilgisayar mı, tarayıcı mı Telegram mı</li><li>Rapor yüklemeyle ilgiliyse MT4 mü MT5 mi ve raporun dili</li></ul><p>Rapor dosyanı gönderme; içinde hesap bilgilerin olabilir. Gerekirse sana nasıl paylaşacağını yazarız.</p>']] }
  },
  mail_none: '', mail_l: 'E-posta',
  cf_email: 'E-posta adresin', cf_topic: 'Konu', cf_msg: 'Mesajın', cf_send: 'Gönder', cf_sending: 'Gönderiliyor…', cf_ok: 'Mesajın bize ulaştı. E-postayla dönüş yapacağız.', cf_e_email: 'Geçerli bir e-posta adresi yaz.', cf_e_msg: 'Mesajın çok kısa.', cf_e_limit: 'Kısa sürede çok fazla mesaj gönderildi. Biraz sonra tekrar dene.', cf_e: 'Mesaj şu an gönderilemedi. Biraz sonra tekrar dene.',
  cf_topics: [['bug', 'Hata bildirimi'], ['sync', 'Hesap bağlama / senkron'], ['import', 'Rapor yükleme'], ['account', 'Üyelik ve giriş'], ['billing', 'Pro ve ödeme'], ['idea', 'Öneri'], ['partner', 'İş birliği'], ['other', 'Diğer']]
},
en: {
  nav_prop: 'Prop firms', nav_plat: 'Platforms', nav_help: 'Help',
  tour_k: 'Product tour', tour_h: 'Your entire performance, in one place.', tour_p: 'Real screens from the app, shown with sample data.',
  tour: [['dash', 'Dashboard', 'Net P&L, win rate, profit factor, your prop rules and TradeLog score on one screen.'], ['acc', 'Accounts', 'Balance, net gain, equity curve, rules and breakeven range for every account.'], ['trades', 'Trades', 'Every trade in R and in money. Search, filter and choose the columns you need.'], ['cal', 'Calendar', 'Daily and weekly results on a calendar. Click any day to review its trades.'], ['rep', 'Reports', 'Win rate, expectancy, drawdown and monthly performance, with time, setup and psychology reports.']],
  prop_k: 'For prop firm traders', prop_h: 'From challenge to funded, every rule under control.', prop_p: 'Track your prop firm accounts together with their rules. TradeLog shows how much room is left on every limit and warns you before you hit it.',
  plist: [['shield', 'Rules always in view', 'Set the daily loss, max loss and profit target per account and see the remaining buffer on your dashboard in real time.'], ['alert', 'Warned before the limit', 'Reach 70% of a limit and the dashboard warns you, so you can stop before the account is at risk.'], ['layers', 'Each account, its own rules', 'Challenge, funded and personal accounts are tracked with their own balance and rules. Copied trades count once in the combined view.'], ['file', 'Payouts and cash flow', 'Deposits and withdrawals are added automatically and your balance is reconciled with MetaTrader.']],
  prop_alert: 'Funded 100K: 76% of the daily loss limit used. $1,200 left.', prop_img: 'Account rules card on the TradeLog dashboard',
  ms_r: '+2.4R', nav_sec: 'Security',
  meta_title: 'TradeLog: Free Trading Journal | MT4/MT5 Trade Tracking and Analytics', meta_desc: 'Free trading journal: upload your MT4/MT5 report or connect your account and analyse every trade in R. Prop firm rules, reports and the TradeLog AI coach.',
  sec_k: 'Security and privacy', sec_h: 'Your data belongs to you.', sec_p: 'Your trading history is sensitive. Here is exactly how we protect it.',
  sec1_h: 'Read-only connection', sec1_p: 'Automatic sync only uses your investor password, which can\'t open trades or withdraw funds. We never ask for your master password and never store the investor password.',
  sec2_h: 'EU-hosted, encrypted', sec2_p: 'Your data is hosted in Germany (Frankfurt) and encrypted in transit and at rest.',
  sec3_h: 'Never sold, never shared', sec3_p: 'Your data is never sold or used for advertising. Data sent to TradeLog AI is not used to train AI models.',
  sec4_h: 'You stay in control', sec4_p: 'Export all your data or permanently delete your account in one click.',
  plat_h: 'MetaTrader today. More coming soon.', plat_p: 'Connect your MT4/MT5 account with its investor password (Pro) or upload a report. Manual logging works with any platform.',
  plats: [['MetaTrader 5', 'ok', 'Automatic connection, HTML and Excel reports'], ['MetaTrader 4', 'ok', 'Automatic connection, HTML reports'], ['Match-Trader', 'next', 'Report import'], ['cTrader', 'next', 'Report import'], ['DXtrade', 'plan', 'Report import'], ['TradeLocker', 'plan', 'Report import']],
  plat_st: { ok: 'Available', next: 'Next', plan: 'Planned' },
  home_aria: 'TradeLog home', nav_aria: 'Main menu', mnav_aria: 'Mobile menu', lang_aria: 'Language',
  nav_login: 'Log in', nav_feat: 'Features', nav_how: 'How it works', nav_price: 'Pricing', nav_faq: 'FAQ', nav_open: 'Open app',
  cta_start: 'Start free', tg_open: 'Open in Telegram', menu_open: 'Open menu', menu_close: 'Close menu',
  hero_new: 'NEW', hero_eyebrow: 'TradeLog Pro is live: auto-sync and an AI coach, free for 7 days', nav_ai: 'TradeLog AI', trust4: 'Your data is never sold',
  ai_k: 'TradeLog AI', ai_h: 'A trading coach that knows your numbers.', ai_p: 'TradeLog AI analyses your trades, setups, mistakes and journal. It shows what works with hard numbers and makes your next step clear.',
  ailist: [['chart', 'Speaks in numbers', 'No generic advice: your setups, your days and your mistakes, measured in R.'], ['shield', 'No signals', 'No buy/sell calls or price forecasts. It works on your process and discipline.'], ['pen', 'Knows the app', 'Tells you what to add to your playbook, which rule to set and how to review your week.']],
  ai_sub: '48 trades · sample data', ai_q: 'Review my week', ai_ph: 'Ask TradeLog AI…',
  ai_a: '<p><b>The key point:</b> this week was <span class="neg">−1.9R</span>, and almost all of it came from <i>early entries</i> (<span class="neg">−2R</span>, 2 trades).</p><ul><li>London Breakout worked again: 3 trades, <span class="pos">+2.1R</span></li><li>Fridays are <span class="neg">−1.8R</span> this month</li></ul><p>Next week: wait for the breakout candle to close before entering, and try Fridays at half risk.</p>', ai_fol: ['How do I stop entering early?', 'Should I trade on Fridays?'],
  hero_h1: 'The journal that<br>finds your <em>edge</em>.',
  hero_lead: 'Sync your MT4/MT5 trades automatically, upload a report or log them by hand. TradeLog analyses every trade in R and shows exactly which setups, sessions and mistakes drive your results.',
  trust1: 'Free forever plan', trust2: 'Read-only MT4/MT5 connection', trust3: 'Encrypted, EU-hosted',
  float_t: 'Daily loss limit', float_pct: '72%', float_s: 'Funded 100K · $1,400 left',
  strip1: '<b>MT4/MT5</b> auto-sync', strip2: '<b>R-based</b> performance analytics', strip3: '<b>Prop firm</b> rule tracking', strip4: '<b>TradeLog AI</b> coach',
  how_h: 'Up and running in minutes.', how_p: 'Connect your account or upload a report. TradeLog takes it from there.',
  feat_h: 'Everything a serious trader needs.', feat_p: 'Try the cards below. All of it is included in the free plan.',
  score_h: 'TradeLog score', score_lbl: '/ 100 · Good', score_p: 'One score from win rate, profit factor, expectancy, drawdown, consistency and plan adherence.',
  disc_h: 'Discipline alerts', disc_toast: 'You\'ve reached today\'s 3-trade limit.', disc_p: 'Set limits for trades per day, consecutive losses and risk, and get alerted when you reach them.',
  emo_h: 'The cost of mistakes', emo_calm: 'Clean trades', emo_hes: 'Early exit', emo_rush: 'Moved SL', emo_p: 'Average result per trade, by mistake type.',
  emo_v1: '+0.8R', emo_v2: '−0.2R', emo_v3: '−0.6R', emo_v4: '−1.1R',
  acc_h: 'Multiple accounts', acc_personal: 'Personal', acc_p: 'All your accounts on one dashboard. Copied trades count once in the combined view.', acc_v1: '+18.4R', acc_v2: '+6.1R', acc_v3: '−2.3R',
  wk_h: 'Weekly recap and sharing', wk_p: 'Your net result every week, with 1–3 concrete suggestions for the next. Share any trade as a story or post card.', wk_btn: 'See it in the app', hero_how: 'How it works',
  price_h: 'Simple, transparent pricing.', price_p: 'The free plan has no trade limit and includes every report and analysis. Upgrade to Pro for auto-sync and TradeLog AI.',
  plan_free: 'Free', plan_free_d: 'Everything you need to start journaling.', plan_forever: 'forever',
  feat_free: ['Unlimited trades, logged by hand or from MT4/MT5 reports', 'All reports, TradeLog score and insights', 'Weekly recap with suggestions', 'Calendar, journal and playbooks', 'Prop firm rules and alerts', 'Screenshots on every trade', '2 active accounts', 'Sync across all your devices', 'Share links, story and post cards'],
  soon: 'Coming soon', plan_pro_d: 'For traders who want their trades synced automatically and run several accounts.', pro_btn: 'Start 7-day free trial', pro_badge: '7-day free trial',
  pro_fine: '7-day free trial · No charge during the trial · Cancel anytime',
  per_mo: '/ month', price_yr: 'or <b>$159</b> per year ($13.25/month · save 30%)', price_note: 'Prices are in US dollars and include tax (VAT); nothing extra is added at checkout.',
  feat_plus: 'Everything in Free, plus:',
  feat_pro: ['MT4/MT5 auto-sync (3 accounts), including trade history', '20 active accounts', 'TradeLog AI: a personal coach that analyses your data', '10 screenshots per trade', 'Read-only access for your mentor'],
  cmp_show: 'Compare all features', cmp_hide: 'Hide comparison', cmp_feature: 'Feature', cmp_pro: 'Pro', yes_a: 'Included', no_a: 'Not included', cmp_note: 'Try Pro free for 7 days; cancel before the trial ends and you pay nothing.',
  groups: [
    ['Logging and import', [['Trades', 'Unlimited', 'Unlimited'], ['Manual logging and MT4/MT5 report upload', 'y', 'y'], ['Automatic MT4/MT5 sync', 'n', '3 accounts'], ['Screenshots per trade', '1', '10']]],
    ['Analytics', [['All reports and TradeLog score', 'y', 'y'], ['Weekly recap and suggestions', 'y', 'y'], ['Calendar, journal and playbooks', 'y', 'y'], ['AI coach', 'n', 'y']]],
    ['Accounts', [['Active accounts', '2', '20'], ['Accounts page: balance, net gain, curve', 'y', 'y'], ['Breakeven range (per account)', 'y', 'y'], ['Prop firm rules and alerts', 'y', 'y'], ['Count copied trades once', 'y', 'y']]],
    ['Access and sharing', [['Web and phone', 'y', 'y'], ['Same data on every device', 'y', 'y'], ['Share links for trades and weekly recaps', 'y', 'y'], ['Instagram story and post cards', 'y', 'y'], ['Read-only access for a mentor', 'n', 'y']]]],
  faq_h: 'Frequently asked questions',
  faq: [
    ['What is TradeLog?', 'TradeLog is a trading journal that records and analyses your trades. It measures every trade in R and shows what works by setup, session and mistake. It never places trades for you and gives no buy/sell signals.'],
    ['What is the difference between Free and Pro?', 'The free plan has no trade limit and includes every report, the weekly recap and prop firm rules. Pro syncs your trades from MT4/MT5 automatically (up to 3 accounts), supports 20 active accounts and adds TradeLog AI and mentor access.'],
    ['Do I need to share my account password?', 'No. Uploading an MT4/MT5 report needs no password. Auto-sync (Pro) only uses your investor (read-only) password, which can\'t open trades or withdraw funds. We never ask for your master password and never store the investor password.'],
    ['How secure is my data?', 'Your data is hosted in Germany (Frankfurt), encrypted in transit and at rest, and visible only to you. We never sell it or use it for advertising. From Settings → Profile you can export everything or permanently delete your account.'],
    ['Which platforms are supported?', 'MetaTrader 4 and 5: auto-sync (Pro) or HTML/Excel reports. Match-Trader and cTrader are next. Trades from any other platform can be logged by hand.'],
    ['Does the free plan expire?', 'No. The free plan has no time limit and requires no payment details.'],
    ['How much is Pro?', 'Pro is $19 per month or $159 per year ($13.25/month, save 30%), tax included. You can try it free for 7 days and get a full refund within 14 days of your first payment.'],
    ['Why is a card needed for the free trial? Will I be charged?', 'The card lets your subscription continue without interruption when the trial ends. You are not charged anything during the 7-day trial. We email you a reminder before it ends; cancel from Settings → Cancel subscription before then and you pay nothing. If you don\'t, your chosen plan starts when the trial ends.'],
    ['Can I cancel Pro any time?', 'Yes. Cancel whenever you like; Pro stays active until the end of the period you paid for, then you move to the free plan. Your data is never deleted.'],
    ['Can I use it on my phone?', 'Yes. TradeLog runs in your browser and is designed for phone screens. Add it to your home screen to use it like an app.']],
  cta_h: 'Stop guessing your edge. Measure it.', cta_p: 'Create your free account, upload your first report and your dashboard is ready in minutes.',
  foot_disc: 'TradeLog is a trading journal and does not provide investment advice. Trading leveraged products carries a high level of risk; past results do not guarantee future results.',
  foot_product: 'Product', foot_support: 'Support', foot_legal: 'Legal', foot_tg: 'Telegram app', foot_made: 'All rights reserved.',
  calc: { h: 'Position size calculator', bal: 'Account balance ($)', risk: 'Risk (%)', risk_h: 'Most traders risk 0.5–2% per trade.', ins: 'Instrument',
    ins_o: [['usd', 'EURUSD, GBPUSD, AUDUSD (…/USD)'], ['jpy', 'USDJPY, EURJPY, GBPJPY (…/JPY)'], ['base', 'USDCAD, USDCHF (USD/…)'], ['xau', 'Gold (XAUUSD)'], ['own', 'Other (enter pip value)']],
    stop: 'Stop loss (pips)', stop_xau: 'Stop loss ($ in price)', stop_xau_h: 'E.g. entry 2,350.00, stop 2,345.00 → 5', rate_jpy: 'USDJPY rate', rate_base: 'Pair rate (e.g. USDCAD)',
    pv: 'Pip value of 1 lot ($)', pv_h: 'Listed in your broker\'s contract specification.', need: 'Fill in the fields to see the result.',
    lots: 'Position size', lots_s: 'Rounded down to 0.01 so you never risk more than planned.', amt: 'Amount at risk', real: 'Actual risk at this size', pvl: 'Pip value of 1 lot',
    small: 'The size is below 0.01 lots: with this stop, your risk is smaller than the smallest possible trade.', tg_h: 'Targets (1R, 2R, 3R)', u_pip: 'pips', u_usd: '$',
    r_h: 'R-multiple calculator', r_p: 'Enter your entry, stop and exit price to see how many R the trade made. Long or short is detected automatically.', r_en: 'Entry price', r_sl: 'Stop price', r_ex: 'Exit price',
    r_res: 'Trade result', long: 'Long trade', short: 'Short trade',
    disc: 'The calculator gives approximate values and assumes a USD account; pip values change with exchange rates and your broker\'s contract size. Not investment advice.' },
  pg_contact: 'Contact', pg_privacy: 'Privacy policy', pg_terms: 'Terms of use', pg_refund: 'Refund policy', pg_mt5: 'MT5/MT4 trading journal', pg_prop: 'Prop firm journal', pg_calc: 'Position size calculator', foot_res: 'Resources', prop_more: 'Learn more about the prop firm journal →', plat_more: 'See how it works with MT5 and MT4 →', calc_more: 'Try the position size calculator →', owner: 'Taner Pehlivanlar', back_home: 'Back to home',
  d_panel: 'Dashboard', d_sample: 'Sample data', d_period: 'Period', d_per: { '7': '7D', '30': '30D', '90': '90D' },
  d_sum: '{n} trades · {w} wins, {l} losses', d_wr: 'Win rate', d_pf: 'Profit factor', d_exp: 'Per trade', d_dd: 'Max drawdown', d_total: 'Total',
  flow: [
    ['Add your account', '1 minute', 'Connect your MT4/MT5 account with its investor password or upload a report. Balance, currency and trade history come in automatically.'],
    ['Trades flow in', 'Automatic', 'New trades on connected accounts are added every night. Trades from reports or manual entries are never counted twice, and your notes are kept.'],
    ['Find your edge', 'Every day', 'Your dashboard, calendar and reports show what makes you money and what costs you, by setup, session and mistake.']],
  fl_opts: ['Upload MT4/MT5 report', 'Create manually', 'Connect automatically'], fl_soon: 'Pro',
  fl_rows: [['Trades in report', '28'], ['Matched', '6'], ['New', '22']],
  fl_ins: [['g', 'Best setup: Breakout', '+1.4R'], ['r', 'Cost of FOMO', '−7.2R']],
  steps: [['Log it', 'When a trade closes, pick the symbol, result and setup on your phone. 15 seconds.'], ['Upload your report', 'Once a week, upload your MT4/MT5 report. Numbers are corrected and missing trades added.'], ['See what works', 'Plain insights by setup, day, hour and mistake.']],
  s_new: 'New trade', s_15: '15 seconds', s_sym: 'Symbol', s_side: 'Side', s_res: 'Result', s_feel: 'Planned R:R', s_try: 'Try it yourself', s_r: '+1.8R',
  s_feels: ['1:1', '1:2', '1:3', '1:5'],
  s_imp: 'Upload report', s_ex: 'Sample', s_read: 'Read', s_acc: 'MT5 · Account 247806 → Funded 100K',
  s_res_rows: [['Trades in the report', '28'], ['Matched your manual entries, notes kept', '6'], ['New trades to add', '22'], ['Deposits / withdrawals', '2'], ['Balance matches the report', '$101,284']],
  s_tz: 'Time offset detected automatically: +3 hours',
  s_ins_t: 'This month\'s insights',
  s_ins: [['g', 'trend', 'Your best setup is Breakout', '+1.4R on average over 22 trades. Most of this month\'s gains came from it.'], ['r', 'pulse', 'FOMO cost you 7.2R', '7 of the 9 trades marked "FOMO" closed at a loss.'], ['r', 'cal', 'Monday is your weakest day', '−0.6R on average. Try trading less on Mondays.'], ['g', 'shield', 'Following your plan pays', 'On plan +0.7R, off plan −0.4R on average.']],
  p_h: 'Your prop firm rules, always in view', p_p: 'Enter the daily loss, max loss and profit target per account. TradeLog warns you as you get close.', p_acc_aria: 'Account',
  p_dl: 'Daily loss limit', p_ml: 'Max loss limit', p_tg: 'Profit target', p_none: 'Not on funded accounts', p_none_s: 'Profit targets apply to challenge accounts only',
  p_left: '{x} left', p_tleft: '{x} to target', p_used: '{p} used', p_done: '{p} done', p_note: 'Only closed trades count. Percentages are based on the starting balance.',
  pb_rules: ['With the trend', 'Level was retested', 'Risk 1% or less'], pb_in: 'On plan', pb_out: 'Off plan',
  c_h: 'Calendar', c_month: 'October 2026 · sample', c_mname: 'Oct', c_wd: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'], c_none: 'no trades', c_future: 'not yet', c_n: '{n} trades', c_hint: 'Hover a day to see its result', c_win: 'Win', c_loss: 'Loss', c_empty: 'No trades',
  pages: {
    help: { t: 'Help', u: 'The most common questions about TradeLog', st: 'Help: MT4/MT5 reports, account connection and TradeLog AI | TradeLog', sd: 'TradeLog help center: how to export MT4/MT5 reports, connect your account, use TradeLog AI, what R means, prop firm rules and sharing.', s: [
      ['Getting started', '<ol><li>Press <b>Start free</b> at the top of the page and create your account: in one click with Google, or with an email and password.</li><li><b>Add your account</b>: upload an MT4/MT5 report or create the account manually.</li><li>If you uploaded a report, your dashboard fills up right away. If you created it manually, add your first trade.</li><li>Finish the steps in the <b>Getting started</b> list on your dashboard: playbook, prop rules, journal.</li></ol>'],
      ['How to export an MT5 report', '<ol><li>Open MetaTrader 5 on your computer.</li><li>Open the <b>Toolbox</b>: Ctrl+T.</li><li>Go to the <b>History</b> tab, right-click the list and pick a date range.</li><li>Right-click again, choose <b>Report</b>, then <b>HTML</b> or <b>Open XML (Excel)</b>, and save it.</li><li>In TradeLog, choose <b>Add trade → Upload an MT4/MT5 report</b> and pick the file.</li></ol>'],
      ['How to export an MT4 report', '<ol><li>Open MetaTrader 4 on your computer.</li><li>Open the <b>Terminal</b>: Ctrl+T.</li><li>In the <b>Account History</b> tab, right-click and pick the period (for example All History).</li><li>Right-click again, choose <b>Save as Detailed Report</b> and save the .htm file.</li><li>Upload the file in TradeLog.</li></ol>'],
      ['Reports on a phone', '<p>The MT4 and MT5 phone apps can\'t export reports. Export the report on your computer; you can send the file to your phone and pick it in TradeLog there.</p>'],
      ['What if I upload the same report again?', '<p>Nothing breaks. Trades already added are skipped and only new ones are added. Trades you entered manually are matched with the same trade in the report: your notes, setup and mistakes are kept and the numbers are updated from the report.</p>'],
      ['Weekly recap', '<p><b>Reports → Weekly recap</b> shows the week\'s net result, each day, and your best and worst trade compared with last week. Below are 1-3 suggestions drawn from the setups and mistakes on your trades, plus a note of the week.</p><p>Use <b>Copy recap</b> to send it to your mentor as text. A short version of this week also appears on your dashboard.</p>'],
      ['Share links', '<p>Press <b>Share</b> on a trade or in Reports → Weekly recap. Choose whether your notes, money amount and screenshots are shown, add your name if you like, and press <b>Create link</b>; the link is copied for you. See and turn off your links in <b>Settings → My share links</b>.</p>'],
      ['Connecting your MT4/MT5 account (Pro)', '<p>When adding an account press <b>Connect automatically</b>, or press <b>Connect account</b> in the account editor. Pick MT5 or MT4 and enter the server name, your account number and your <b>investor (read-only) password</b>. The connection is ready within a few minutes and closed trades, deposits and withdrawals from the last 90 days arrive. After that, new trades arrive on their own every weekday night after the market closes (even with the app closed); during the day you can press <b>Sync now</b> up to 3 times per account. MetaTrader doesn\'t need to be open. If you don\'t know your investor password, check your broker\'s email or set a new one in MetaTrader under Tools → Options → Server → Change. You can remove the connection any time from the account editor.</p>'],
      ['TradeLog AI (Pro)', '<p>Press <b>TradeLog AI</b> in the side menu (in the More menu on phones) or <b>Ask TradeLog AI</b> on the Dashboard. The panel opens at the side, so you can keep looking at your page while you chat. It starts with suggestions drawn from your own numbers. Pick a ready question or write your own, like “What\'s my most expensive mistake?” or “Which of my setups works?”. TradeLog AI answers with numbers from the trades, setups, mistakes and journal in your current account view. It doesn\'t give buy/sell signals and isn\'t investment advice. There is a daily question limit; the chat is stored only on your device.</p>'],
      ['Mentor access', '<p>In <b>Settings → Mentor access</b>, type your mentor\'s email and press <b>Invite</b>. Send them the message by WhatsApp or email. Once they open the link and sign in with that email, they can see your account read-only: trades, notes, reports and screenshots. They can\'t change anything. You can remove access from the same place any time.</p>'],
      ['What is R?', '<p>R is a multiple of the amount you risked on a trade. A stop-out is −1R; winning twice your risk is +2R. This lets you compare trades across different lot and account sizes on one scale.</p><p>If the report has a stop loss, R is calculated automatically. If not, it is estimated from the account\'s risk percentage and shown with a ≈ sign.</p>'],
      ['Account and sign-in', '<p>Sign in with your Google account or with an email and password. Once you sign in on a device you stay signed in there until you sign out; you don\'t have to sign in every time. The same account shows the same data on your phone and computer.</p><p>Forgot your password? Press <b>Forgot password?</b> on the sign-in screen and we\'ll email you a reset link. If you signed up with Google, you can also set a password from Settings → Profile.</p><p>If you used TradeLog without an account before, the data on that device moves to your account the first time you sign in. If both the device and your account have data, you are asked whether to merge them. To sign out or delete your account, go to <b>Settings → Profile</b>.</p>'],
      ['Moving from Telegram to the web', '<p>The Telegram version will be phased out. To move your data, open <b>Settings → Data → Download backup</b> in Telegram and copy the text. Then sign in on the web and bring it in with <b>Settings → Data → Restore by pasting text</b>.</p>'],
      ['Backups', '<p>Your data is stored in your account on the server and is the same on every device you sign in on. We also recommend keeping your own copy: use Settings → Data → <b>Download backup</b> to get everything in one file, and <b>Restore from backup file</b> to bring it back if needed. Downloading a backup once a month is a good habit.</p>'],
      ['Still stuck?', '<p>In the app, go to <b>Settings → Help and support → Contact support</b>, or use the form on the Contact page. If you saw a support code while connecting an account (e.g. TL-103), include it in your message.</p>']] },
    privacy: { t: 'Privacy policy', u: 'Last updated: October 28, 2026', st: 'Privacy policy | TradeLog', sd: 'What data TradeLog processes, where it is stored, who it is shared with, and your rights.', s: [
      ['In short', '<p>To use TradeLog you create an account with your email address. Your trades, notes, account details and settings are stored in your account, so every device you sign in on shows the same data. We don\'t sell your data, use it for advertising, or share it with anyone except to provide the service.</p>'],
      ['What we process', '<ul><li><b>Account:</b> your email address, when your account was created and when you sign in. Your password is stored only as an irreversible hash. If you sign in with Google, the name and profile photo link Google shares are also saved to your account.</li><li><b>Your journal:</b> trades, notes, playbooks, daily and weekly notes, account names, account numbers, server names, balances and cash movements, settings.</li><li><b>Technical logs:</b> IP address and browser details, kept briefly in server logs for security and debugging.</li></ul>'],
      ['What we use it for', '<p>To provide the service, verify your sign-in (including password reset and confirmation emails), sync your data across devices and keep the service secure. Statistics calculated from your data are shown only to you.</p>'],
      ['Where your data is stored', '<p>Your data is stored on servers in Germany (Frankfurt) through our infrastructure provider Supabase and travels over an encrypted connection (HTTPS). For fast start-up and offline use, a copy is also kept on your device; it is removed when you sign out.</p>'],
      ['Reports you upload', '<p>MT4/MT5 reports are read on your device; the report file itself is not uploaded, only the trades and account details taken from it are saved to your account. We never ask for your account password.</p>'],
      ['Share links', '<p>When you share a trade or a weekly recap, a copy of it as it is at that moment is created and anyone with the link can see it. Your notes, money amounts and screenshots are included only if you choose. We count how many times the link is opened. When you turn the link off in Settings → My share links, the copy and its images are deleted.</p>'],
      ['MT4/MT5 account connection', '<p>If you connect your account, your server name, account number and investor (read-only) password are sent to MetaApi (metaapi.cloud), the service provider that makes the connection; its servers may be outside your country. We don\'t store your investor password. MetaApi reads your account\'s trade history, and from it we take your closed trades (symbol, side, lots, entry/exit price and time, SL/TP, profit, commission, swap), deposit/withdrawal records, broker name, account currency and balance. The investor password can\'t open trades or withdraw money. When you remove the connection or delete your membership, the connection at MetaApi is deleted too.</p>'],
      ['TradeLog AI', '<p>When you ask TradeLog AI, your question and a summary of your current account view (statistics, setup/symbol/day breakdowns, details and notes of your last 60 trades, journal entries from the last two weeks) are sent to Anthropic\'s Claude service to produce the answer; its servers may be outside your country. Your email address and account numbers are not sent. Questions and answers are not stored on our servers; the chat stays on your device, and we only keep a daily question count for cost control.</p>'],
      ['Mentor access', '<p>Someone you invite as a mentor, who opens the invite link and signs in with the same email, can see the data in your account read-only; they can\'t change it. Access ends as soon as you remove it in Settings → Mentor access.</p>'],
      ['Payment details', '<p>If you upgrade to Pro, your payment and billing details (name, email, country, card or payment method) are processed by our reseller Paddle.com; your card details never reach us. We only keep the status of your subscription: plan, renewal or end date, and your Paddle customer and subscription IDs. Paddle\'s privacy policy: <a href="https://www.paddle.com/legal/privacy" target="_blank" rel="noopener">paddle.com/legal/privacy</a>.</p>'],
      ['How long we keep it', '<p>For as long as your account exists. When you delete your account, the account and all its data are deleted right away and permanently.</p>'],
      ['Third-party services', '<p>Supabase (database, sign-in and email). Fonts are served from our own server. When the app opens, some libraries load from cdnjs and jsDelivr; these services may see technical details such as your IP address when they serve those files. We measure visits with Cloudflare Web Analytics, which uses no cookies; we only see aggregate numbers (page views, country, device type) and no identifier is created for you. Sign-in emails (confirmation, password reset) are sent through Resend. We use no advertising or tracking cookies. Your session is kept in your browser\'s local storage.</p>'],
      ['Your rights', '<p>You can ask whether your data is processed, request information, ask for it to be corrected or deleted, and object. From <b>Settings → Profile</b> you can download your data or delete your account completely. For other requests, write to the address on the Contact page.</p>'],
      ['Telegram', '<p>If you use TradeLog inside Telegram without an account, your data stays in the cloud space Telegram gives this app and Telegram\'s privacy terms apply. The Telegram version will be phased out; you can move your data to your web account with a backup.</p>'],
      ['Changes', '<p>This policy will be updated when Pro and payments arrive. We announce important changes on the site and by email.</p>']] },
    terms: { t: 'Terms of use', u: 'Last updated: October 28, 2026', st: 'Terms of use | TradeLog', sd: 'Terms of use for the TradeLog trading journal: your account, your data, prop firm rules and no investment advice.', s: [
      ['Who provides TradeLog', '<p>TradeLog is provided by {owner}, an individual entrepreneur based in Turkey. You can reach us at support@gotradelog.com or through the {link:contact} page.</p>'],
      ['The service', '<p>TradeLog is a trading journal for logging your trades and reviewing your results. You need an account, created with your email address, to use it. You can use the free plan with no time limit.</p>'],
      ['Your account', '<p>You sign in with your Google account or with an email and password. Keeping your password and email account secure is your responsibility. Don\'t share your account. You can delete it any time from Settings → Profile.</p>'],
      ['Not investment advice', '<p>Statistics, the TradeLog score and insights are calculated from the data you enter. They are not trading recommendations. Your trading decisions and their results are your own.</p>'],
      ['Prop firm rules', '<p>The daily loss, max loss and profit target meters use the percentages you enter and your closed trades. They do not replace your firm\'s official calculation; check your firm\'s dashboard for exact figures.</p>'],
      ['Your data', '<p>Your data belongs to you. We take reasonable measures to protect it. As we don\'t guarantee server-side restores, we recommend making your own backup from Settings → Data from time to time. We cannot recover data you delete.</p>'],
      ['Availability', '<p>TradeLog is provided as is. We work to fix bugs but cannot guarantee the service will run without interruptions or errors.</p>'],
      ['Acceptable use', '<p>Do not try to break the service, access other people\'s data or misuse it. We may suspend accounts that break these rules.</p>'],
      ['Plans and prices', '<p>The free plan has no time limit and requires no payment details. Pro is a paid subscription: <b>$19 per month</b> or <b>$159 per year</b>. Current prices and what each plan includes are shown in the Pricing section of the home page. Prices include VAT and sales tax; nothing extra is added at checkout.</p>'],
      ['Payment', '<p>Our order process is conducted by our online reseller <b>Paddle.com</b>. Paddle.com is the Merchant of Record for all our orders: it takes the payment, issues the invoice and calculates VAT or sales tax for your country, and it handles payment and invoice questions and returns. Your card details never reach us. Your purchase is also subject to <a href="https://www.paddle.com/legal/checkout-buyer-terms" target="_blank" rel="noopener">Paddle\'s buyer terms</a>.</p>'],
      ['Free trial', '<p>You can try Pro <b>free for 7 days</b>. A card is required to start the trial, but <b>you are not charged anything during the trial</b>. You get an email reminder before the trial ends. If you cancel before it ends, you pay nothing and your account moves to the free plan; if you don\'t, the plan you chose (monthly or yearly) starts when the trial ends and the first payment is taken that day. The trial is available once per member.</p>'],
      ['Renewal and cancellation', '<p>A Pro subscription renews automatically every month or every year, depending on the billing period you chose, until you cancel, and is charged to the same payment method. You can cancel any time in one click from <b>Settings → Cancel subscription</b> in the app, or from the link in your payment receipt; Pro stays active until the end of the period you paid for.</p>'],
      ['Price changes', '<p>If we change the price of Pro, we will tell you by email at least 30 days in advance. The new price applies from your first renewal after the notice; if you don\'t want it, you can cancel before then.</p>'],
      ['Refunds', '<p>You can ask for a full refund within 14 days of your first payment. See the {link:refund} for details.</p>'],
      ['When Pro ends', '<p>If your subscription ends, your account moves to the free plan and your data stays. Automatic sync for connected MT4/MT5 accounts stops; if you renew within 7 days the connection continues where it left off, after that you need to connect the account again.</p>'],
      ['Changes', '<p>We may update these terms from time to time. We announce important changes on the site or by email before they take effect.</p>']] },
    refund: { t: 'Refund policy', u: 'Last updated: October 28, 2026', st: 'Refund policy | TradeLog', sd: 'TradeLog Pro refund policy: 14-day money-back guarantee, cancellation and renewals.', s: [
      ['Try it free for 7 days first', '<p>You can try Pro free for 7 days. A card is required, but <b>you are not charged anything during the trial</b>. You get an email reminder before it ends; if you cancel from Settings → Cancel subscription before then, you pay nothing. Your account moves to the free plan and your data stays as it is.</p>'],
      ['14-day money-back guarantee', '<p>You can ask for a full refund, no questions asked, <b>within 14 days</b> of your first Pro payment (monthly or yearly; the payment taken when the trial ends). When a yearly subscription renews, you can also ask for a refund of the renewal within 14 days of the renewal date.</p>'],
      ['Monthly renewals and cancellation', '<p>You can cancel any time; Pro stays active until the end of the period you paid for and you are not charged again. We don\'t give partial refunds for monthly renewals. If a technical problem kept you from using Pro, write to us and we\'ll review it and refund or extend your subscription.</p>'],
      ['How to request a refund', '<p>Email us from the address on your account, or use the link in your payment receipt (paddle.net). Refunds go back to the card or method you paid with through our reseller Paddle, and may take 5–10 business days depending on your bank. A refunded subscription ends right away and your account moves to the free plan; your data is not deleted.</p>{mail}'],
      ['Your legal rights', '<p>This policy does not limit any rights you have under the consumer laws of your country.</p>']] },
    mt5: { t: 'MT5 and MT4 trading journal', u: '', st: 'MT5 & MT4 Trading Journal: Auto-Sync or Report Upload | TradeLog', sd: 'A trading journal that imports your MetaTrader 5 and MetaTrader 4 trades. Upload your report for free or connect with your investor password, and analyse every trade in R.', seo: 1, s: [
      ['', '<p class="lead">TradeLog brings the trades from your MetaTrader 5 and MetaTrader 4 accounts into your journal without typing them one by one. It measures every trade in R (multiples of risk) and shows, in numbers, which setups, sessions and mistakes make or cost you money.</p><div class="lpcta"><a class="btn btn-p btn-lg" href="#/app"><span data-st="cta_start">Start free</span></a><a class="btn btn-g btn-lg" href="#/app" data-pro="1">Try Pro free for 7 days</a></div><img class="lpimg" src="{img:dash}" alt="TradeLog dashboard: net result, win rate and TradeLog score calculated from MT5 trades" width="1280" height="800" loading="lazy" decoding="async">'], ['Two ways to bring your trades in', '<ol><li><b>Upload a report (free):</b> save your history report from the MT5 or MT4 desktop app as HTML or Excel and drop it into TradeLog. Trades, deposits and withdrawals are added to your account; ones already added are skipped and your manual entries are matched.</li><li><b>Auto-sync (Pro):</b> connect your account once with the server name, account number and your <b>investor (read-only) password</b>. Your history comes in, and new trades arrive on their own every weekday night. You don\'t need to open the app.</li></ol>'], ['How to export an MT5 report', '<ol><li>In the MetaTrader 5 desktop app, open <b>Toolbox → History</b>.</li><li>Right-click the list and choose the period (e.g. All history).</li><li>Right-click again → <b>Report → HTML</b> (or Open XML) and save it.</li><li>Drop the file into <b>Add trade → Upload a report</b> in TradeLog.</li></ol><p>In MT4, right-click in <b>Terminal → Account History</b> and choose <b>Save as Detailed Report</b>. The phone apps can\'t export reports; use the desktop app or auto-sync instead.</p>'], ['Your account stays safe', '<ul><li><b>We never ask for your master password.</b> Auto-sync only uses the investor password, which can\'t open trades or withdraw money.</li><li>The investor password is used once to make the connection and is not stored.</li><li>Report files are read on your device; the file itself is never sent to our servers.</li><li>Your data is encrypted and hosted in Germany; it is never sold or used for advertising.</li></ul>'], ['What your MT5 trades will tell you', '<ul><li><b>Results in R:</b> net R, win rate, profit factor, expectancy per trade, max drawdown.</li><li><b>Setups and sessions:</b> which setups, days and hours pay off.</li><li><b>Cost of mistakes:</b> how many R tags like early exit, FOMO or moved stop cost you.</li><li><b>Calendar and weekly recap:</b> every day\'s result and 1–3 concrete suggestions for next week.</li><li><b>TradeLog AI (Pro):</b> a coach that reads your journal and answers in numbers.</li></ul>'], ['Which brokers it works with', '<p>Most brokers and prop firms that run MetaTrader 4 or MetaTrader 5. Report upload works with any MT4/MT5 account; auto-sync needs the account\'s server name and investor password. You can also log trades from other platforms by hand. See the {link:help} for details.</p>'], ['FAQ', '<p><b>Is it free?</b> Report upload and every report and analysis are on the free plan, with no trade limit. Auto-sync and TradeLog AI are on Pro, which you can try free for 7 days.</p><p><b>How often do trades update?</b> Connected accounts sync every weekday night; you can also sync now up to 3 times a day per account.</p><p><b>I run several accounts.</b> Track personal, challenge and funded accounts separately and see them all on one dashboard. Copied trades count once in the combined view.</p><div class="lpcta"><a class="btn btn-p btn-lg" href="#/app"><span data-st="cta_start">Start free</span></a><a class="btn btn-g btn-lg" href="#/app" data-pro="1">Try Pro free for 7 days</a></div>']] },
    prop: { t: 'Prop firm trading journal', u: '', st: 'Prop Firm Trading Journal: Daily Loss & Max Drawdown Tracking | TradeLog', sd: 'A trading journal for challenge and funded accounts: see your daily loss limit, max loss and profit target with every trade, and get warned before you hit a limit.', seo: 1, s: [
      ['', '<p class="lead">Passing a challenge is often about avoiding one bad day. TradeLog tracks your prop firm account rules alongside your trades: it shows where you stand on the daily loss limit, max loss and profit target at all times, and warns you as you get close.</p><div class="lpcta"><a class="btn btn-p btn-lg" href="#/app"><span data-st="cta_start">Start free</span></a><a class="btn btn-g btn-lg" href="#/app" data-pro="1">Try Pro free for 7 days</a></div><img class="lpimg" src="{img:prop}" alt="Prop firm account rules: amount left before the daily and max loss limits" width="638" height="492" loading="lazy" decoding="async">'], ['Your rules, always in view', '<ul><li><b>Daily loss limit:</b> how much you\'ve lost today and how much room is left.</li><li><b>Max loss (max drawdown):</b> your total loss against the starting balance.</li><li><b>Profit target:</b> how far you are towards the challenge target.</li><li><b>Early warning:</b> the dashboard warns you at 70% of any limit, so you stop before the account is at risk.</li></ul><p>You enter the percentages per account (e.g. 5% daily, 10% max, 8% target). The figures use closed trades; check your firm\'s dashboard for exact numbers.</p>'], ['Challenge, funded and personal accounts, kept apart', '<p>Every account has its own balance, rules and statistics. Running several challenges? See them all on one dashboard; trades copied to several accounts count once in the combined view. Deposits, withdrawals and payouts are included in the balance.</p>'], ['Discipline rules', '<p>One emotional day loses most prop accounts. Set a daily max loss (in R), a max number of trades per day and a losing-streak limit in Settings; TradeLog reminds you to take a break when you reach them. Your playbooks show which rules you were following when you won.</p>'], ['Bringing your trades in', '<p>Most prop firms use MetaTrader 4 or 5. Upload your report for free, or connect your account with the investor (read-only) password so your trades arrive on their own every night (Pro). Details: {link:mt5}.</p>'], ['FAQ', '<p><b>How do I set the rules?</b> When you add the account, or from the Accounts page, enter your firm\'s daily loss, max loss and profit target percentages; each account is tracked with its own rules.</p><p><b>Are open positions included?</b> No, the meters use closed trades. Firms often look at live equity, so rely on your firm\'s dashboard when you\'re close to a limit.</p><p><b>Is it paid?</b> Prop firm rules and alerts are on the free plan. Free includes 2 active accounts; Pro adds 20 active accounts and auto-sync.</p><div class="lpcta"><a class="btn btn-p btn-lg" href="#/app"><span data-st="cta_start">Start free</span></a><a class="btn btn-g btn-lg" href="#/app" data-pro="1">Try Pro free for 7 days</a></div>']] },
    calc: { t: 'Position size calculator', u: '', st: 'Forex Position Size Calculator: Lot Size by Risk % (Free) | TradeLog', sd: 'Calculate the right lot size from your account balance, risk percentage and stop loss. Works for EURUSD, USDJPY, gold (XAUUSD), with an R-multiple calculator. Free.', seo: 1, s: [
      ['', '<p class="lead">Decide how much you\'re willing to lose first, then size the trade to match. Enter your balance, the percentage you want to risk and your stop distance; the calculator shows the lot size to open and your 1R, 2R and 3R targets.</p>{calc}'], ['How position size is calculated', '<p>The formula is simple: <b>Lots = Risk amount ÷ (Stop distance in pips × pip value of 1 lot)</b>. Example: $10,000 balance, 1% risk ($100), a 25-pip stop on EURUSD. One standard lot of EURUSD is worth about $10 per pip, so 100 ÷ (25 × 10) = <b>0.40 lots</b>.</p><ul><li><b>.../USD pairs</b> (EURUSD, GBPUSD, AUDUSD): about $10 per pip per lot.</li><li><b>.../JPY pairs</b> (USDJPY): about 1,000 ÷ rate dollars per pip per lot.</li><li><b>USD/... pairs</b> (USDCHF, USDCAD): about 10 ÷ rate dollars per pip per lot.</li><li><b>Gold (XAUUSD):</b> 1 lot = 100 oz; a $1 move in price is worth $100 per lot.</li></ul><p>Contract sizes can differ between brokers; check your broker\'s contract specification before large trades. The calculator assumes a USD account.</p>'], ['What R means and why it matters', '<p>R is the amount you risk on a trade. If you risked $100 and made $180, the trade is <b>+1.8R</b>; if you were stopped out it is <b>−1R</b>. Measuring results in R lets you compare trades even when your position size changes, and shows whether a strategy works far more clearly than dollar amounts. TradeLog calculates R for every trade automatically.</p>'], ['Track your trades in R', '<p>To see how the risk you planned actually played out, log your trades. TradeLog imports them from your MT4/MT5 report or with auto-sync and shows what works by setup, session and mistake. Details: {link:mt5}.</p><div class="lpcta"><a class="btn btn-p btn-lg" href="#/app"><span data-st="cta_start">Start free</span></a><a class="btn btn-g btn-lg" href="#/app" data-pro="1">Try Pro free for 7 days</a></div>']] },
    contact: { t: 'Contact', u: '', st: 'Contact and support | TradeLog', sd: 'Contact the TradeLog team: support@gotradelog.com or the contact form. We reply by email within a few business days.', s: [
      ['Get in touch', '<p>For bug reports, questions, feature requests or partnerships, email us or use the form below; we reply by email within a few business days. If you\'re signed in, you can also write to us from <b>Settings → Help and support</b> in the app.</p>{mail}{form}'],
      ['What helps us help you', '<ul><li>What you were trying to do and what happened</li><li>Phone or computer, browser or Telegram</li><li>For report uploads: MT4 or MT5, and the report\'s language</li></ul><p>Please don\'t send your report file; it may contain account details. We\'ll tell you how to share it if needed.</p>']] }
  },
  mail_none: '', mail_l: 'Email',
  cf_email: 'Your email address', cf_topic: 'Topic', cf_msg: 'Message', cf_send: 'Send message', cf_sending: 'Sending…', cf_ok: 'Your message has reached us. We\'ll reply by email.', cf_e_email: 'Enter a valid email address.', cf_e_msg: 'Your message is too short.', cf_e_limit: 'Too many messages in a short time. Please try again later.', cf_e: 'Your message couldn\'t be sent right now. Please try again later.',
  cf_topics: [['bug', 'Bug report'], ['sync', 'Account connection / sync'], ['import', 'Report upload'], ['account', 'Account and sign-in'], ['billing', 'Pro and billing'], ['idea', 'Feature request'], ['partner', 'Partnership'], ['other', 'Other']]
}};
const s = (k, o) => { let v = ST[LG()][k]; if (v == null) v = ST.tr[k]; if (v == null) return k; if (o && typeof v === 'string') for (const p in o) v = v.split('{' + p + '}').join(o[p]); return v; };

/* ================= SİTE ================= */
const S = { menu: false, per: '30', step: 0, chk: [true, true, false], acc: 0, day: -1, cmp: false, faq: 0, page: null };

function renderDemo() {
  const cfg = { '7': [9, 14], '30': [34, 7], '90': [96, 4] }[S.per];
  const tr = gen(cfg[0], cfg[1]);
  const st = stats(tr), cv = curve(st.cum, 600, 220, 24, 204);
  const per = s('d_per');
  const seg = ['7', '30', '90'].map(k => `<button data-a="per" data-v="${k}" class="${S.per === k ? 'on' : ''}" aria-pressed="${S.per === k}">${per[k]}</button>`).join('');
  $('#demo').innerHTML = `<div class="dhead"><span class="t">${s('d_panel')}</span><span class="chip mu">${s('d_sample')}</span><div class="seg ml" role="group" aria-label="${s('d_period')}">${seg}</div></div>
<div class="net"><span class="v ${st.c >= 0 ? 'pos' : 'neg'}">${fr(st.c)}</span><span class="s">${s('d_sum', { n: st.n, w: st.w, l: st.n - st.w })}</span></div>
<div class="chart" id="demoChart">${chartHTML(cv, 600, 220)}</div>
<div class="kpis"><div class="kpi"><div class="l">${s('d_wr')}</div><div class="n">${pct(Math.round(st.w / st.n * 100))}</div></div>
<div class="kpi"><div class="l">${s('d_pf')}</div><div class="n">${st.gl ? dec((st.gw / st.gl).toFixed(2)) : '—'}</div></div>
<div class="kpi"><div class="l">${s('d_exp')}</div><div class="n ${st.c >= 0 ? 'pos' : 'neg'}">${fr(st.c / st.n, 2)}</div></div>
<div class="kpi"><div class="l">${s('d_dd')}</div><div class="n neg">${st.dd ? fr(-st.dd) : '0R'}</div></div></div>`;
  bindChart($('#demoChart'), st.n, 600, 220, cv, st.cum, i => ({ neg: tr[i].r < 0, html: `#${i + 1} · ${tr[i].sym} · <b class="${tr[i].r > 0 ? 'pos' : 'neg'}">${fr(tr[i].r)}</b><br>${s('d_total')} <b>${fr(st.cum[i + 1])}</b>` }));
}

/* ürün turu: gerçek uygulama ekran görüntüleri (dile göre) */
const TOUR_IMG = {"en": {"acc": "/en_acc.webp", "cal": "/en_cal.webp", "dash": "/en_dash.webp", "m_acc": "/en_m_acc.webp", "m_cal": "/en_m_cal.webp", "m_dash": "/en_m_dash.webp", "m_rep": "/en_m_rep.webp", "m_trades": "/en_m_trades.webp", "prop": "/en_prop.webp", "rep": "/en_rep.webp", "trades": "/en_trades.webp"}, "tr": {"acc": "/tr_acc.webp", "cal": "/tr_cal.webp", "dash": "/tr_dash.webp", "m_acc": "/tr_m_acc.webp", "m_cal": "/tr_m_cal.webp", "m_dash": "/tr_m_dash.webp", "m_rep": "/tr_m_rep.webp", "m_trades": "/tr_m_trades.webp", "prop": "/tr_prop.webp", "rep": "/tr_rep.webp", "trades": "/tr_trades.webp"}};
let tourK = 'dash';
const TOUR_MQ = matchMedia('(max-width: 640px)'); /* telefonda telefon ekran görüntüsü gösterilir */
try { TOUR_MQ.addEventListener('change', () => renderTour()); } catch (e) {}
function renderTour() {
  const T = s('tour'), cur = T.find(x => x[0] === tourK) || T[0], im = (TOUR_IMG[LG()] || {});
  $('#ttabs').innerHTML = T.map(([k, l]) => `<button role="tab" aria-selected="${k === cur[0]}" class="${k === cur[0] ? 'on' : ''}" data-a="tour" data-v="${k}">${l}</button>`).join('');
  const img = $('#timg'), ph = TOUR_MQ.matches && im['m_' + cur[0]], src = ph || im[cur[0]];
  img.width = ph ? 600 : 1280; img.height = ph ? 1170 : 800;
  if (src && img.getAttribute('src') !== src) { img.classList.remove('fadein'); void img.offsetWidth; img.src = src; img.classList.add('fadein'); }
  img.alt = cur[1] + ': ' + cur[2];
  $('#tcap').textContent = cur[2];
}
function renderAISec() {
  $('#ailist').innerHTML = s('ailist').map(([i, h, d]) => `<li><span class="pi">${ic(i)}</span><span><b>${h}</b><span>${d}</span></span></li>`).join('');
  $('#aians').innerHTML = s('ai_a');
  $('#aifol').innerHTML = s('ai_fol').map(x => `<span>${x}</span>`).join('');
}
function renderPropSec() {
  $('#plist').innerHTML = s('plist').map(([i, h, d]) => `<li><span class="pi">${ic(i)}</span><span><b>${h}</b><span>${d}</span></span></li>`).join('');
  const im = TOUR_IMG[LG()] || {}, img = $('#pimg');
  if (im.prop) img.src = im.prop;
  img.alt = s('prop_img');
}
function renderPlats() {
  const st = s('plat_st');
  $('#plats').innerHTML = s('plats').map(([n, k, d]) => `<div class="plat ${k}"><div class="pn">${n}</div><div class="pd">${d}</div><span class="ps">${k === 'ok' ? ic('check', 14, 3) : ''}${st[k]}</span></div>`).join('');
}

/* Nasıl çalışır: uygulamadaki gerçek akışla aynı üç adım, her birinde o adımın küçük bir önizlemesi */
function renderSteps() {
  const F = s('flow'), ok = ic('check', 14, 3);
  const vis = [
    `<div class="fv-opts">${s('fl_opts').map((o, i) => `<div class="${i === 0 ? 'on' : ''}${i === 2 ? ' off' : ''}"><span class="fi2">${ic(['upload', 'pen', 'link'][i], 16, 2)}</span>${o}${i === 2 ? `<em>${s('fl_soon')}</em>` : ''}</div>`).join('')}</div>`,
    `<div class="fv-rows"><div class="fv-file">${ic('file', 16, 2)}<span>Report-247806.html</span><b>${ok}</b></div>${s('fl_rows').map(([a, b]) => `<div><span>${a}</span><b class="mono">${b}</b></div>`).join('')}</div>`,
    `<div class="fv-ins">${s('fl_ins').map(([c, a, b]) => `<div class="${c}"><span>${a}</span><b class="mono">${b}</b></div>`).join('')}<div class="fv-bars" aria-hidden="true">${[6, 9, 4, 12, 8, 14, 10, 16].map((h, i) => `<i style="height:${h * 3}px;animation-delay:${i * .06}s"></i>`).join('')}</div></div>`];
  $('#flow').innerHTML = F.map(([t, time, d], i) => `<li class="fstep"><div class="fvis">${vis[i]}</div><div class="fhead"><span class="fno">${i + 1}</span><span class="ftime">${time}</span></div><h3>${t}</h3><p>${d}</p></li>`).join('');
}

function renderProp() {
  const PA = [{ dl: [310, 1250], ml: [640, 2500], tg: [1280, 2000] }, { dl: [3600, 5000], ml: [4100, 10000], tg: null }][S.acc];
  const mk = (label, pair, kind) => {
    if (!pair) return `<div class="meter"><div class="r"><span style="font-weight:600">${label}</span><span class="mono">${s('p_none')}</span></div><div class="bar"><i style="width:0"></i></div><div class="r"><span class="s">${s('p_none_s')}</span><span class="chip mu">—</span></div></div>`;
    const p = Math.round(pair[0] / pair[1] * 100), warn = kind !== 'tg' && p >= 70;
    const col = kind === 'tg' ? '#94C5CC' : warn ? '#F87171' : p >= 50 ? '#B4D2E7' : '#94C5CC';
    return `<div class="meter"><div class="r"><span style="font-weight:600">${label}</span><span class="mono">${money(pair[0])} / ${money(pair[1])}</span></div><div class="bar"><i style="width:${p}%;background:${col}"></i></div><div class="r"><span class="s">${s(kind === 'tg' ? 'p_tleft' : 'p_left', { x: money(pair[1] - pair[0]) })}</span><span class="chip ${warn ? 'warn' : kind === 'tg' ? '' : 'mu'}">${s(kind === 'tg' ? 'p_done' : 'p_used', { p: pct(p) })}</span></div></div>`;
  };
  const tabs = ['Challenge 25K', 'Funded 100K'].map((l, i) => `<button data-a="pacc" data-v="${i}" class="${S.acc === i ? 'on' : ''}" aria-pressed="${S.acc === i}">${l}</button>`).join('');
  $('#b-prop').innerHTML = `<div class="hd"><span class="ic">${ic('shield')}</span><h3>${s('p_h')}</h3></div>
<p>${s('p_p')}</p>
<div class="seg" role="group" aria-label="${s('p_acc_aria')}" style="align-self:flex-start">${tabs}</div>
${mk(s('p_dl'), PA.dl, 'dl')}${mk(s('p_ml'), PA.ml, 'ml')}${mk(s('p_tg'), PA.tg, 'tg')}
<p style="font-size:13px">${s('p_note')}</p>`;
}

function renderPB() {
  const T = s('pb_rules'), k = S.chk.filter(Boolean).length;
  $('#b-pb').innerHTML = `<div class="hd"><span class="ic">${ic('book')}</span><h3>Playbook</h3><span class="chip ml ${k === 3 ? '' : 'warn'}">${k}/3 · ${k === 3 ? s('pb_in') : s('pb_out')}</span></div>
<div class="chk">${T.map((t, i) => `<button data-a="chk" data-v="${i}" aria-pressed="${S.chk[i]}"><span class="box ${S.chk[i] ? 'on' : ''}">${S.chk[i] ? ic('check', 14, 3) : ''}</span>${t}</button>`).join('')}</div>`;
}

function calData() {
  const rnd = lcg(97), days = [], mn = s('c_mname'), lab = d => LG() === 'tr' ? d + ' ' + mn : mn + ' ' + d;
  for (let i = 0; i < 35; i++) {
    const d = i - 2;
    if (d < 1 || d > 31) { days.push({ d: 0, cls: 'cx' }); continue; }
    const wd = i % 7;
    let cls = 'c0', txt = lab(d) + ' · ' + s('c_none');
    if (d > 23) { cls = 'cf'; txt = lab(d) + ' · ' + s('c_future'); }
    else if (wd < 5) { const q = rnd(), v = Math.round((rnd() * 4.6 - 1.7) * 10) / 10, k = 1 + Math.floor(rnd() * 4); if (q > .14) { cls = v >= 1.5 ? 'cw' : v > 0 ? 'cp' : 'cn'; txt = lab(d) + ' · ' + fr(v) + ' · ' + s('c_n', { n: k }); } }
    days.push({ d, cls, txt });
  }
  return days;
}
function renderCal() {
  const days = calData(), sel = S.day > 0 ? days.find(x => x.d === S.day) : null;
  $('#b-cal').innerHTML = `<div class="hd"><span class="ic">${ic('cal')}</span><h3>${s('c_h')}</h3><span class="chip mu ml">${s('c_month')}</span></div>
<div class="cal">${s('c_wd').map(x => `<span class="dw">${x}</span>`).join('')}${days.map(x => x.d ? `<button class="d ${x.cls} ${S.day === x.d ? 'sel' : ''}" data-a="day" data-v="${x.d}" data-h="day" aria-label="${esc(x.txt)}">${x.d}</button>` : `<span class="d cx"></span>`).join('')}</div>
<div class="calinfo"><span class="mono" id="calTxt">${sel ? esc(sel.txt) : s('c_hint')}</span><span class="lg"><span><i style="background:#4ADE80"></i>${s('c_win')}</span><span><i style="background:#F87171"></i>${s('c_loss')}</span><span><i style="background:#1B1E24"></i>${s('c_empty')}</span></span></div>`;
}

function renderCmp() {
  const cell = v => v === 'y' ? ic('check', 20, 2.4, `class="y" role="img" aria-label="${s('yes_a')}"`).replace('aria-hidden="true"', '') : v === 'n' ? ic('minus', 20, 2.4, `class="no" role="img" aria-label="${s('no_a')}"`).replace('aria-hidden="true"', '') : v === 's' ? `<span class="csoon">${s('soon')}</span>` : v.startsWith('s:') ? `<span class="cst"><span class="mono">${v.slice(2)}</span><span class="csoon">${s('soon')}</span></span>` : `<span class="mono">${v}</span>`;
  $('#cmp').innerHTML = `<div class="cr h"><div>${s('cmp_feature')}</div><div class="c">${s('plan_free')}</div><div class="c">${s('cmp_pro')}</div></div>` + s('groups').map(([g, rows]) => `<div class="cr g"><div>${g}</div><div></div><div></div></div>` + rows.map(([t, f, p]) => `<div class="cr"><div>${t}</div><div class="c">${cell(f)}</div><div class="c">${cell(p)}</div></div>`).join('')).join('') + `<div class="cmsg">${s('cmp_note')}</div>`;
  $('#cmp').hidden = !S.cmp;
  $('#cmpb').classList.toggle('open', S.cmp);
  $('#cmpb button').setAttribute('aria-expanded', S.cmp);
  $('#cmpb span').textContent = S.cmp ? s('cmp_hide') : s('cmp_show');
}

function renderFaq() {
  /* the questions are also given to search engines as structured data (FAQ) */
  try { let ld = document.getElementById('faqld'); if (!ld) { ld = document.createElement('script'); ld.type = 'application/ld+json'; ld.id = 'faqld'; document.head.appendChild(ld); }
    ld.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: LG(), mainEntity: s('faq').map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }); } catch (e) {}
  $('#faq').innerHTML = s('faq').map(([q, a], i) => `<div class="q ${S.faq === i ? 'open' : ''}"><button data-a="faq" data-v="${i}" aria-expanded="${S.faq === i}" aria-controls="fa${i}">${q}${ic('chev', 20, 2.2, 'class="chev"')}</button>${S.faq === i ? `<p class="ans" id="fa${i}">${a}</p>` : ''}</div>`).join('');
}
function renderFeat() {
  $$('[data-featk]', SITE).forEach(ul => {
    ul.innerHTML = (ul.dataset.plusk ? `<li class="plus">${s(ul.dataset.plusk)}</li>` : '') + s(ul.dataset.featk).map(t => Array.isArray(t) ? `<li class="fs">${ic('clock', 18, 2.2)}<span>${t[0]} <span class="fsoon">${s('soon')}</span></span></li>` : `<li>${ic('check', 18, 2.4)}${t}</li>`).join('');
  });
}
function setMenu(open) {
  S.menu = open;
  $('#mmenu').hidden = !open;
  const b = $('#burger');
  b.setAttribute('aria-expanded', open);
  b.setAttribute('aria-label', open ? s('menu_close') : s('menu_open'));
  b.innerHTML = ic(open ? 'close' : 'menu', 22, 2);
}

/* ---------- yasal sayfalar ve iletişim ---------- */
const PAGE_HASH = { help: 'yardim', privacy: 'gizlilik', terms: 'kosullar', refund: 'iade', contact: 'iletisim', mt5: 'mt5-islem-gunlugu', prop: 'prop-firm-islem-gunlugu', calc: 'lot-hesaplama' };
/* {owner}: the person behind TradeLog (set in ST); {link:page}: a link to another page in the same language */
const pageFill = b => b.replace(/\{img:(\w+)\}/g, (m, k) => (TOUR_IMG[LG()] || {})[k] || '').replace('{calc}', '<div id="calcBox" class="calc"></div>').replace(/\{owner\}/g, s('owner') || 'TradeLog').replace(/\{link:(\w+)\}/g, (m, k) => `<a href="${TLP ? pathOf(LG(), k) : '#' + PAGE_HASH[k]}" data-page="${k}">${s('pg_' + k)}</a>`);
function renderPage() {
  if (!S.page) return;
  const p = s('pages')[S.page];
  const cm = CONTACT && CONTACT[LG()];
  const mail = cm ? `<p class="mailbox"><span>${s('mail_l')}</span><a href="mailto:${esc(cm)}">${esc(cm)}</a></p>` : s('mail_none');
  const form = `<form class="supf" id="supf" novalidate><label><span>${s('cf_email')}</span><input type="email" name="em" autocomplete="email" inputmode="email" maxlength="200" required></label>
<label><span>${s('cf_topic')}</span><select name="tp">${s('cf_topics').map(([v, l]) => `<option value="${v}">${l}</option>`).join('')}</select></label>
<label><span>${s('cf_msg')}</span><textarea name="msg" rows="6" maxlength="4000" required></textarea></label>
<input type="text" name="hp" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">
<div class="cfa"><button class="btn btn-p" type="submit">${s('cf_send')}</button><span class="cfs" role="status" aria-live="polite"></span></div></form>`;
  $('#pageBody').innerHTML = `<h1>${p.t}</h1>${p.u ? `<p class="upd">${p.u}</p>` : ''}${p.s.map(([h, b]) => `<section${h ? '' : ' class="lp"'}>${h ? `<h2>${h}</h2>` : ''}${pageFill(b).replace('{mail}', mail).replace('{form}', form)}</section>`).join('')}`;
  calcRender();
}
/* ---------- position size / R calculator (the "calc" page) ---------- */
const CALC = { bal: '10000', risk: '1', ins: 'usd', stop: '25', rate: '150', pv: '10', en: '1.0850', sl: '1.0825', ex: '1.0895' };
const calcNum = v => { v = String(v || '').replace(/\s/g, ''); if (LG() === 'tr' && /^\d{1,3}(\.\d{3})+(,\d*)?$/.test(v)) v = v.replace(/\./g, ''); return parseFloat(v.replace(',', '.')); };
const calcFmt = (n, d) => new Intl.NumberFormat(LG() === 'tr' ? 'tr-TR' : 'en-US', { minimumFractionDigits: d, maximumFractionDigits: d }).format(n);
const calcUsd = n => '$' + calcFmt(n, 2);
/* dollars per pip (gold: per $1 move) for one standard lot */
function calcPv(c) {
  const r = calcNum(c.rate);
  if (c.ins === 'usd') return 10;
  if (c.ins === 'jpy') return r > 0 ? 1000 / r : NaN;
  if (c.ins === 'base') return r > 0 ? 10 / r : NaN;
  if (c.ins === 'xau') return 100;
  return calcNum(c.pv);
}
function calcOut() {
  const c = CALC, L = s('calc'), bal = calcNum(c.bal), risk = calcNum(c.risk), stop = calcNum(c.stop), pv = calcPv(c);
  const ok = bal > 0 && risk > 0 && risk <= 100 && stop > 0 && pv > 0;
  const gold = c.ins === 'xau', unit = gold ? L.u_usd : L.u_pip;
  if (!ok) return `<p class="cmsg">${L.need}</p>`;
  const amt = bal * risk / 100, raw = amt / (stop * pv), lot = Math.floor(raw * 100 + 1e-9) / 100, real = lot * stop * pv;
  const tg = [1, 2, 3].map(k => `<div><span>${k}R</span><b>${calcUsd(lot * stop * pv * k)}</b><small>${calcFmt(stop * k, gold ? 2 : 1)} ${unit}</small></div>`).join('');
  return `<div class="cbig"><span>${L.lots}</span><b>${calcFmt(lot, 2)}</b><small>${L.lots_s}</small></div>
<div class="crow"><div><span>${L.amt}</span><b>${calcUsd(amt)}</b></div><div><span>${L.real}</span><b>${calcUsd(real)}</b></div><div><span>${L.pvl}</span><b>${calcUsd(pv)}</b></div></div>
${lot < 0.01 ? `<p class="cmsg">${L.small}</p>` : ''}<h3 class="csub">${L.tg_h}</h3><div class="ctg">${tg}</div>`;
}
function calcROut() {
  const c = CALC, L = s('calc'), e = calcNum(c.en), sl = calcNum(c.sl), x = calcNum(c.ex);
  if (!(e > 0 && sl > 0 && x > 0) || e === sl) return `<p class="cmsg">${L.need}</p>`;
  const r = (x - e) / (e - sl), d = r >= 0 ? 'up' : 'dn';
  return `<div class="cbig ${d}"><span>${L.r_res}</span><b>${r >= 0 ? '+' : '−'}${calcFmt(Math.abs(r), 2)}R</b><small>${e > sl ? L.long : L.short}</small></div>`;
}
function calcRender() {
  const box = $('#calcBox'); if (!box) return;
  const c = CALC, L = s('calc');
  const f = (k, lab, hint) => `<label><span>${lab}</span><input type="text" inputmode="decimal" autocomplete="off" data-c="${k}" value="${esc(c[k])}">${hint ? `<small>${hint}</small>` : ''}</label>`;
  const rateLab = c.ins === 'jpy' ? L.rate_jpy : L.rate_base;
  box.innerHTML = `<div class="ccard"><h2 class="ch2">${L.h}</h2><div class="cgrid">
${f('bal', L.bal)}${f('risk', L.risk, L.risk_h)}
<label><span>${L.ins}</span><select data-c="ins">${L.ins_o.map(([v, l]) => `<option value="${v}"${v === c.ins ? ' selected' : ''}>${l}</option>`).join('')}</select></label>
${f('stop', c.ins === 'xau' ? L.stop_xau : L.stop, c.ins === 'xau' ? L.stop_xau_h : '')}
${c.ins === 'jpy' || c.ins === 'base' ? f('rate', rateLab) : ''}${c.ins === 'own' ? f('pv', L.pv, L.pv_h) : ''}
</div><div class="cres" id="calcRes" aria-live="polite">${calcOut()}</div></div>
<div class="ccard"><h2 class="ch2">${L.r_h}</h2><p class="cmsg">${L.r_p}</p><div class="cgrid c3">${f('en', L.r_en)}${f('sl', L.r_sl)}${f('ex', L.r_ex)}</div>
<div class="cres" id="calcR" aria-live="polite">${calcROut()}</div></div><p class="cdisc">${L.disc}</p>`;
}
document.addEventListener('input', e => {
  const k = e.target.dataset && e.target.dataset.c; if (!k || !e.target.closest('#calcBox')) return;
  CALC[k] = e.target.value;
  if (k === 'ins') { calcRender(); const sel = $('#calcBox select[data-c="ins"]'); if (sel) sel.focus(); return; }
  if (['en', 'sl', 'ex'].includes(k)) $('#calcR').innerHTML = calcROut(); else $('#calcRes').innerHTML = calcOut();
});
function showPage(name, noPush) {
  S.page = name; setMenu(false);
  $('#home').hidden = true; $('#pageView').hidden = false;
  renderPage(); setMeta(); window.scrollTo(0, 0);
  try { if (TLP) { if (!noPush && location.pathname !== pathOf(LG(), name)) history.pushState(null, '', pathOf(LG(), name)); } else history.replaceState(null, '', '#' + PAGE_HASH[name]); } catch (e) {}
}
function showHome(id, noPush) {
  const wasPage = !!S.page;
  S.page = null; $('#pageView').hidden = true; $('#home').hidden = false; setMeta();
  try { if (TLP) { if (!noPush && location.pathname !== pathOf(LG(), 'home')) history.pushState(null, '', pathOf(LG(), 'home') + (id && id !== 'top' ? '#' + id : '')); } else if (wasPage) history.replaceState(null, '', location.pathname + location.search); } catch (e) {}
  const t = id && document.getElementById(id);
  if (t) requestAnimationFrame(() => t.scrollIntoView()); else window.scrollTo(0, 0);
}

/* ---------- dil ---------- */
function applyLang() {
  const lg = LG();
  document.documentElement.lang = lg;
  $$('[data-st]', SITE).forEach(el => { const v = s(el.dataset.st); if (typeof v === 'string') el.innerHTML = v; });
  $$('[data-sa]', SITE).forEach(el => el.setAttribute('aria-label', s(el.dataset.sa)));
  if (typeof sbNavLabel === 'function') sbNavLabel(s('nav_open'), s('nav_login'));
  if (TLP) {   /* real addresses in the links, so search engines follow them */
    $$('a[data-page]', SITE).forEach(a => { a.href = pathOf(lg, a.dataset.page); });
    $$('a[data-a="home"]', SITE).forEach(a => { a.href = pathOf(lg, 'home'); });
    $$('[data-a="lang"]', SITE).forEach(b => b.setAttribute('data-href', pathOf(b.dataset.v, S.page || 'home')));
  }
  $$('[data-a="lang"]', SITE).forEach(b => { const on = b.dataset.v === lg; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
  setMenu(S.menu);
  renderFeat(); renderDemo(); renderTour(); renderSteps(); renderProp(); renderPB(); renderCal(); renderPropSec(); renderAISec(); renderPlats(); renderCmp(); renderFaq(); renderPage(); setMeta();
}
/* title and description follow the language and the open page (what Google and link previews show) */
function setMeta() {
  const pg = S.page && s('pages')[S.page];
  if (SITE.hidden) return;
  document.title = pg ? (pg.st || pg.t + ' | TradeLog') : s('meta_title');
  const m = document.querySelector('meta[name="description"]'); if (m) m.setAttribute('content', pg ? (pg.sd || s('meta_desc')) : s('meta_desc'));
}
/* sections glide in as they scroll into view */
function revealInit() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
  const sel = '.sec-h,.ttabs,.tframe,.flow>li,.ai-t,.aichat,.bento>.b,.prop-t,.pvis,.plats>.plat,.secg>.sc,.plans>.plan,.cmpb,.faq,.cta';
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12, rootMargin: '0px 0px -6% 0px' });
  $$(sel, SITE).forEach(el => { const sib = [...el.parentNode.children].filter(c => c.matches(sel)), i = sib.indexOf(el); el.style.transitionDelay = Math.min(Math.max(i, 0), 6) * 70 + 'ms'; el.classList.add('rv'); io.observe(el); });
}
function setSiteLang(v) {
  if (TLP) {   /* the other language is another address */
    try { localStorage.setItem('tradelog_lang', v); } catch (e) {}
    if (v !== TLP.lang) location.href = pathOf(v, S.page || 'home') + (S.page ? '' : location.hash.replace(/^#(\/|panel).*$/, ''));
    return;
  }
  if (typeof setLang === 'function') setLang(v); /* uygulamayla aynı ayarı kullanır */
  else { try { localStorage.setItem('tradelog_lang', v); } catch (e) {} }
  applyLang();
}
/* a visitor whose browser speaks the other language gets a one-line hint (no automatic redirect: search engines
   must be able to read both addresses as they are) */
function langHint() {
  if (!TLP || $('#lhint')) return;
  let pref = null; try { pref = localStorage.getItem('tradelog_lang'); } catch (e) {}
  const nav = /^tr/i.test(navigator.language || '') ? 'tr' : 'en';
  if (pref || nav === TLP.lang) return;
  const bar = document.createElement('div'); bar.id = 'lhint'; bar.className = 'lhint';
  bar.innerHTML = `<div class="wrap lhin"><span>${nav === 'en' ? 'This page is in Turkish.' : 'Bu sayfanın Türkçesi var.'}</span><a href="${pathOf(nav, S.page || 'home')}" data-lh="${nav}">${nav === 'en' ? 'View in English' : 'Türkçe görüntüle'} →</a><button type="button" aria-label="${nav === 'en' ? 'Close' : 'Kapat'}" data-lh="x">×</button></div>`;
  SITE.prepend(bar);
  bar.addEventListener('click', e => {
    const b = e.target.closest('[data-lh]'); if (!b) return;
    try { localStorage.setItem('tradelog_lang', b.dataset.lh === 'x' ? TLP.lang : b.dataset.lh); } catch (er) {}
    if (b.dataset.lh === 'x') bar.remove();
  });
}

/* ---------- görünüm: tanıtım sitesi / uygulama ---------- */
const APP = document.getElementById('appRoot');
const ENTER = 'tradelog_entered';
function showApp(after) {
  const ac = document.getElementById('appcss'); if (ac && ac.media !== 'all') ac.media = 'all';   // the app's styles, loaded late on the landing page
  SITE.hidden = true; APP.hidden = false; setMenu(false);
  try { localStorage.setItem(ENTER, '1'); } catch (e) {}
  window.scrollTo(0, 0);
  if (typeof render === 'function') { render(); if (typeof viewIn === 'function') viewIn(); if (typeof splashOn === 'function') splashOn(); }
  if (after === 'import' && typeof openImport === 'function') openImport();
}
function showSite(id) {
  if (typeof closeDlg === 'function') { closeDlg(true); }
  if (typeof closeForm === 'function' && typeof formOpen === 'function' && formOpen()) closeForm();
  APP.hidden = true; SITE.hidden = false;
  try { localStorage.removeItem(ENTER); } catch (e) {}
  applyLang(); showHome(id);
}
window.showApp = showApp; window.showSite = showSite; window.showPage = showPage;

/* ---------- olaylar (yalnızca site) ---------- */
const H = {
  menu: () => setMenu(!S.menu), menuClose: () => setMenu(false),
  lang: v => setSiteLang(v),
  home: () => showHome('top'),
  per: v => { S.per = v; renderDemo(); },
  tour: v => { tourK = v; renderTour(); },
  pacc: v => { S.acc = +v; renderProp(); },
  chk: v => { S.chk[+v] = !S.chk[+v]; renderPB(); },
  day: v => { S.day = +v; renderCal(); },
  cmp: () => { S.cmp = !S.cmp; renderCmp(); },
  faq: v => { S.faq = S.faq === +v ? -1 : +v; renderFaq(); }
};
SITE.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (a) {
    const h = a.getAttribute('href');
    if (h.startsWith('#/app')) { e.preventDefault(); if (a.dataset.pro) { try { localStorage.setItem('tradelog_want_pro', '1'); } catch (er) {} if (typeof sbOn === 'function' && sbOn() && typeof proDlg === 'function') { try { localStorage.removeItem('tradelog_want_pro'); } catch (er) {} showApp(); setTimeout(() => proDlg('gen'), 300); return; } } if (typeof sbIntent === 'function') sbIntent(a.dataset.pro || a.dataset.st === 'cta_start' || a.querySelector('[data-st="cta_start"]') ? 'signup' : 'login'); showApp(h.includes('import') ? 'import' : null); return; }
    if (a.dataset.page) { e.preventDefault(); showPage(a.dataset.page); return; }
    if (a.dataset.a === 'home') { e.preventDefault(); setMenu(false); showHome('top'); return; }
    if (S.page) { e.preventDefault(); setMenu(false); showHome(h.slice(1)); return; }
  }
  if (TLP && !a) {
    const l = e.target.closest('a[data-page],a[data-a="home"]');
    if (l && l.dataset.page) { e.preventDefault(); showPage(l.dataset.page); return; }
    if (l) { e.preventDefault(); setMenu(false); showHome('top'); return; }
  }
  const el = e.target.closest('[data-a]'); if (!el) return;
  const fn = H[el.dataset.a]; if (fn) fn(el.dataset.v, el, e);
});
SITE.addEventListener('pointerover', e => {
  const el = e.target.closest('[data-h="day"]'); if (!el || e.pointerType !== 'mouse') return;
  const d = calData().find(x => x.d === +el.dataset.v); if (d) $('#calTxt').textContent = d.txt;
});
document.addEventListener('keydown', e => { if (e.key === 'Escape' && S.menu) setMenu(false); });
/* iletişim formu: mesaj destek tablosuna gider (uygulamadaki "Destek ekibine yaz" ile aynı yol) */
SITE.addEventListener('submit', async e => {
  const f = e.target.closest('#supf'); if (!f) return;
  e.preventDefault();
  const st = $('.cfs', f), btn = $('button', f), say = (k, ok) => { st.textContent = s(k); st.className = 'cfs ' + (ok ? 'ok' : 'bad'); };
  const em = f.em.value.trim(), msg = f.msg.value.trim();
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)) { say('cf_e_email'); f.em.focus(); return; }
  if (msg.length < 5) { say('cf_e_msg'); f.msg.focus(); return; }
  if (f.hp.value) { f.reset(); say('cf_ok', true); return; }
  btn.disabled = true; st.textContent = s('cf_sending'); st.className = 'cfs';
  const r = typeof window.supSendRaw === 'function' ? await window.supSendRaw(em, f.tp.value, msg, null) : { ok: false };
  btn.disabled = false;
  if (r.ok) { f.reset(); say('cf_ok', true); } else say(r.error === 'limit' ? 'cf_e_limit' : r.error === 'email' ? 'cf_e_email' : 'cf_e');
});

fillIcons(SITE);
applyLang();
revealInit();
langHint();
/* back / forward between the home page and the sub-pages */
if (TLP) window.addEventListener('popstate', () => { if (SITE.hidden) return; const at = pageAt(location.pathname); if (at && at.pg !== 'home') showPage(at.pg, true); else if (at) showHome(location.hash.slice(1) || null, true); });
try { const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('inview'); io.unobserve(e.target); } }), { threshold: .3 }); io.observe($('#flow')); } catch (e) {}
let entered = false; try { entered = localStorage.getItem(ENTER) === '1'; } catch (e) {}
const pm = location.hash.match(/^#\/p\/([A-Za-z0-9]{10,24})$/);
const hp = Object.keys(PAGE_HASH).find(k => location.hash === '#' + PAGE_HASH[k]);
const tp = TLP && TLP.page !== 'home' ? TLP.page : null;   /* this address is a sub-page: show it, even for members */
if (hp && TLP) location.replace(pathOf(LG(), hp));          /* old #yardim style links */
else if (pm && typeof pubShow === 'function') pubShow(pm[1]);
else if (typeof mtCatch === 'function' && mtCatch()) { if (typeof sbIntent === 'function') sbIntent('signup'); if (typeof sbOn === 'function' && !sbOn() && !sbHasTok()) AU.info = t('mt_need_login'); showApp(); }
else if (tp && !(typeof TG !== 'undefined' && TG) && !/^#(panel|\/?app)|access_token=|error_description=/.test(location.hash)) { SITE.hidden = false; APP.hidden = true; showPage(tp, true); }
else if (hp && !(typeof TG !== 'undefined' && TG)) { SITE.hidden = false; APP.hidden = true; showPage(hp); }
else if ((typeof TG !== 'undefined' && TG) || entered || /^#(panel|\/?app)/.test(location.hash) || /access_token=|error_description=/.test(location.hash) || /[?&]code=/.test(location.search)) showApp(); else showSite();
})();
