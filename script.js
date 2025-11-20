// =========================================================
// DATASET UTAMA
// =========================================================

// --- A. Intensitas ---
const INTENSITIES = [
    "parah", "banget", "gila", "brutal", "badai", "pol", "setengah mati", 
    "mumet", "struk", "seketika", "pusing", "overload", "maksimal", "super", 
    "tingkat dewa", "ampun-ampunan", "terlalu", "berlebihan", "puas-puasin", 
    "keterlaluan", "mampus", "abis-abisan", "banget-banget", "poll", "gilak",
    "serius", "bikin nangis", "sangat", "amat sangat"
];

// --- B. Kata Kunci Sekolah & Akademik (SCHOOL_KEYWORDS) ---
const SCHOOL_KEYWORDS = [
    "sekolah", "tugas", "ujian", "guru", "nilai", "deadline", "pelajaran", "pr", 
    "matematika", "fisika", "kimia", "biologi", "sejarah", "ekonomi", "akuntansi", 
    "presentasi", "laporan", "tryout", "universitas", "kuliah", "jurusan", "kurikulum",
    "ekskul", "osis", "piket", "bolos", "remedial", "rapor", "belajar", "hafalan",
    "proyek", "esai", "tugas kelompok", "kelompok"
];

// --- C. Kata Kunci Emosi & Overthinking (EMOTION_KEYWORDS) ---
const EMOTION_KEYWORDS = [
    "overthinking", "galau", "bingung", "down", "insecure", "hampa", "kesepian", 
    "capek", "sedih", "depresi", "cemas", "panik", "marah", "benci", "khawatir", 
    "stres", "gundah", "resah", "gelisah", "trauma", "ngebatin", "nge-drop", 
    "lelah", "frustasi", "jenuh", "bosan", "kosong", "gila", "mau mati", "hilang",
    "nggak semangat", "moody", "mood"
];

// --- D. Kata Kunci Hubungan & Sosial (RELATIONSHIP_KEYWORDS) ---
const RELATIONSHIP_KEYWORDS = [
    "temen", "sahabat", "gebetan", "pacar", "ortu", "dijauhin", "toxic", 
    "berantem", "curiga", "putus", "selingkuh", "diselingkuhin", "cinta", 
    "keluarga", "kakak", "adik", "saudara", "pertemanan", "persahabatan", 
    "cemburu", "komunikasi", "diabaikan", "dibohongi", "dicuekin", "mantan", 
    "salah paham", "ribut", "kumpul"
];

// --- E. Kata Kunci Jati Diri & Eksistensi (IDENTITY_KEYWORDS) ---
const IDENTITY_KEYWORDS = [
    "masa depan", "gue siapa", "tujuan hidup", "nggak berguna", "bodoh", "lemah", 
    "nggak punya bakat", "perbandingan", "iri", "cemburu", "karir", "jati diri", 
    "ekspektasi", "harapan", "bingung", "percaya diri", "identitas", "hidup"
];

// Jawaban untuk Motivasi Harian (diperbanyak)
const motivasiHarian = [
    "Jangan jadikan hari kemarin sebagai alasan untuk menyerah hari ini. *Keep going*!",
    "Kamu udah berhasil sampai di titik ini, berarti kamu **sekuat itu**! *Nggak* usah *overthink*!",
    "Kesuksesan itu **bukan *short cut***, tapi konsistensi. *Chill* aja, proses *nggak* pernah bohong.",
    "Kegagalan itu cuma **umpan balik**, bukan *vonis*! Besok coba lagi dengan cara yang beda *ya*.",
    "Istirahat itu penting, bukan berarti kamu lemah. *Self-care is a must*.",
    "Hari ini pasti ada aja yang bikin **bete**, tapi jangan biarin itu *ngancurin* seluruh harimu.",
    "Orang lain punya jalannya sendiri. **Fokus sama jalanmu** sendiri. Jangan bandingin diri sama orang lain!",
    "Ambil napas dalam-dalam. **Semuanya bakal baik-baik aja**, *trust me*.",
    "Ingat, bahkan bunga pun butuh lumpur untuk tumbuh. Jadi, **terus berjuang**!",
    "Kamu lebih kuat dari yang kamu bayangkan. **Percaya deh**!",
    "Lakukan yang terbaik, sisanya serahkan pada semesta. **Tetap positif**!"
];

// =========================================================
// DATA BARU UNTUK FITUR TAMBAHAN
// =========================================================

// Data Artikel Simulasi
const articlesData = [
    { title: "5 Menit Atasi Panik Ujian", content: "Teknik pernapasan 4-7-8 bisa bantu kamu menenangkan sistem saraf dan mengurangi panik. Coba tarik napas 4 detik, tahan 7 detik, dan buang perlahan 8 detik. Ulangi 3-5 kali.", id: 1 },
    { title: "Cara Jitu Hadapi Toxic Friend", content: "Tentukan batasan yang jelas dan tegaskan bahwa kamu tidak akan menoleransi perilaku yang menyakitkan. Jika tidak mempan, menjauh adalah pilihan terbaik untuk kesehatan mentalmu.", id: 2 },
    { title: "Pentingnya Tidur untuk Mental Health", content: "Kualitas tidur yang baik sangat mempengaruhi mood dan kemampuan konsentrasi. Usahakan tidur 7-9 jam per malam dan hindari gadget satu jam sebelum tidur.", id: 3 },
    { title: "Tips Mengatur Waktu Belajar (Time Management)", content: "Coba metode Pomodoro: belajar 25 menit, istirahat 5 menit. Setelah 4 sesi, ambil istirahat panjang. Ini membantu otak tetap fokus dan tidak mudah lelah.", id: 4 }
];

// Array untuk menyimpan entri Jurnal (simulasi)
let journalEntries = [];


// =========================================================
// FUNGSI CHATBOT UTAMA
// =========================================================

function checkKeywords(text, keywords) {
    // Memastikan kecocokan setidaknya satu kata kunci
    return keywords.some(keyword => text.includes(keyword));
}

function getBotResponse(userText) {
    // Bersihkan teks dari tanda baca
    const lowerText = userText.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

    const isIntense = checkKeywords(lowerText, INTENSITIES);

    // 1. Logika Keluhan Sekolah/Akademik
    if (checkKeywords(lowerText, SCHOOL_KEYWORDS)) {
        if (isIntense) {
            return "Waduh, kedengarannya kamu lagi **capek brutal** sama urusan sekolah ya? *It's okay to slow down*. Coba ambil 5 menit buat **dengerin lagu favorit** dulu, baru kita bahas pelan-pelan strategi biar nggak *mumet*. Gimana?";
        } else {
            return "Sekolah emang kadang *ngeselin* ya. Paling bikin kamu **bad mood** itu bagian mana? Kita coba cari solusi paling *simple* *deh*. Ingat, satu-satu aja ya!";
        }
    }

    // 2. Logika Keluhan Emosi/Overthinking
    if (checkKeywords(lowerText, EMOTION_KEYWORDS)) {
        if (isIntense) {
            return "Aku paham, lagi **overthinking parah** ya? Tarik napas, buang. Perasaan kamu valid, *kok*. Mau coba kita **nulis jurnal** sebentar? Kadang, *ngeliat* masalah di kertas bisa bantu biar *nggak* **down brutal**.";
        } else {
            return "**Nggak apa-apa** buat ngerasa galau atau bingung. Itu bagian dari proses. Fokusin pikiranmu ke **satu hal yang paling bikin *resah*** sekarang. Yuk, kita *breakdown* masalahnya!";
        }
    }
    
    // 3. Logika Keluhan Hubungan/Relasi
    if (checkKeywords(lowerText, RELATIONSHIP_KEYWORDS)) {
        if (isIntense) {
            return "Kalau udah nyangkut masalah **temen toxic** atau **ortu yang nuntut**, emang bikin hati **sakit pol**. Jangan pernah ngerasa sendirian. Ingat, **kamu berhak bahagia**. Ada yang bisa kamu *share* lebih detail? Aku siap dengerin.";
        } else {
            return "Hubungan itu emang *complicated*. Coba dipikir-pikir lagi, **apa yang sebenarnya kamu harapkan** dari mereka? Komunikasi yang baik bisa jadi kuncinya *lho*!";
        }
    }
    
    // 4. Logika Keluhan Jati Diri & Eksistensi
    if (checkKeywords(lowerText, IDENTITY_KEYWORDS)) {
        if (isIntense) {
            return "Perasaan 'gue nggak berguna' itu berat **banget-banget**. Stop membandingkan diri! Ingat, setiap orang punya waktunya sendiri. Apa **satu hal kecil** yang kamu syukuri hari ini? Fokus ke sana dulu ya.";
        } else {
            return "Pertanyaan tentang 'siapa gue' itu wajar. Kamu lagi dalam proses tumbuh! Yuk, kita coba cari **satu hobi baru** yang bisa bikin kamu lebih *happy* dan nemuin jati diri.";
        }
    }


    // 5. Respon Default (Jika tidak ada pola yang cocok)
    const defaults = [
        "Hmm, aku nggak yakin bisa *connect* nih. Tapi aku *tetep* dengerin *kok*. Coba ceritakan **detail** masalahnya *ya*! Kita cari solusinya bareng.", 
        "Terima kasih sudah mau cerita. Aku tahu ini berat. Coba fokus ke **satu hal positif** yang kamu rasain hari ini.",
        "Aku nggak punya semua jawaban, tapi aku ada buat kamu. Mau lanjut cerita, atau mau ambil **motivasi harian** dulu?"
    ];
    return defaults[Math.floor(Math.random() * defaults.length)];
}

// =========================================================
// FUNGSI UTILITY (MENGIRIM PESAN & MOTIVASI)
// =========================================================

function sendMessage() {
    const userInput = document.getElementById('userInput');
    const userText = userInput.value.trim();
    
    if (userText === "") return;

    const chatWindow = document.querySelector('.chat-window');

    // Tampilkan pesan pengguna
    const userMessageDiv = document.createElement('div');
    userMessageDiv.classList.add('message', 'user-message');
    userMessageDiv.textContent = userText;
    chatWindow.appendChild(userMessageDiv);

    // Dapatkan dan tampilkan respons AI
    const botResponse = getBotResponse(userText);
    
    // Simulasi loading/delay
    setTimeout(() => {
        const aiMessageDiv = document.createElement('div');
        aiMessageDiv.classList.add('message', 'ai-message');
        // Gunakan innerHTML karena respons chatbot kadang mengandung tag <b> atau <i>
        aiMessageDiv.innerHTML = botResponse; 
        chatWindow.appendChild(aiMessageDiv);

        // Scroll ke bawah
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }, 500);

    // Kosongkan input
    userInput.value = '';
    userInput.focus();
}

// Tambahkan event listener untuk tombol Enter
document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});


function getMotivation() {
    const quoteText = document.getElementById('dailyMotivation');
    const randomIndex = Math.floor(Math.random() * motivasiHarian.length);
    quoteText.textContent = motivasiHarian[randomIndex];
}


// =========================================================
// FUNGSI BARU UNTUK ARTIKEL & JOURNALING
// =========================================================

// --- ARTIKEL ---
function loadArticles() {
    const artikelSection = document.getElementById('artikel');
    artikelSection.classList.remove('coming-soon'); 

    let html = '<h2>Artikel Singkat 📚</h2><div class="articles-list">';
    
    articlesData.forEach(article => {
        html += `<div class="article-item" onclick="viewArticle(${article.id})">
                    <h3>${article.title}</h3>
                    <p>${article.content.substring(0, 80)}...</p>
                </div>`;
    });
    html += '</div>';

    artikelSection.innerHTML = html;
}

function viewArticle(id) {
    const article = articlesData.find(a => a.id === id);
    if (article) {
        alert(`Judul: ${article.title}\n\nIsi Lengkap:\n${article.content}`);
    }
}

// --- JOURNALING ---
function setupJournaling() {
    const journalSection = document.getElementById('journal');
    journalSection.classList.remove('coming-soon'); 
    
    let html = '<h2>Journaling 📝</h2>';
    html += '<textarea id="journalInput" rows="5" placeholder="Tuliskan semua perasaan dan pikiranmu di sini..."></textarea>';
    html += '<button onclick="saveJournalEntry()">Simpan Entri</button>';
    html += '<h3>Entri Sebelumnya:</h3>';
    html += '<div id="journalList"></div>';

    journalSection.innerHTML = html;
    loadJournalEntries(); // Muat entri yang sudah tersimpan
}

function saveJournalEntry() {
    const journalInput = document.getElementById('journalInput');
    const entryText = journalInput.value.trim();

    if (entryText === "") {
        alert("Entri tidak boleh kosong!");
        return;
    }

    const newEntry = {
        date: new Date().toLocaleDateString('id-ID', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
        }),
        text: entryText
    };

    journalEntries.push(newEntry);
    journalInput.value = '';
    
    loadJournalEntries();
    alert("Entri jurnal berhasil disimpan!");
}

function loadJournalEntries() {
    const journalList = document.getElementById('journalList');
    journalList.innerHTML = '';
    
    // Urutkan dari yang terbaru
    const displayEntries = [...journalEntries].reverse(); 

    if (displayEntries.length === 0) {
        journalList.innerHTML = '<p style="font-style: italic;">Belum ada entri. Yuk, mulai nulis!</p>';
        return;
    }

    displayEntries.forEach(entry => {
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('journal-item');
        entryDiv.innerHTML = `<strong>${entry.date}</strong><p>${entry.text.substring(0, 100)}${entry.text.length > 100 ? '...' : ''}</p>`;
        
        journalList.appendChild(entryDiv);
    });
}


// =========================================================
// FUNGSI NAVIGASI CARD & INISIALISASI
// =========================================================

function showSection(sectionId) {
    // Sembunyikan semua card
    document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('active');
        card.style.display = 'none';
    });

    // Tampilkan card yang dipilih
    const activeCard = document.getElementById(sectionId);
    activeCard.classList.add('active');
    activeCard.style.display = 'block';
    
    // Panggil fungsi inisialisasi jika itu Article atau Journal
    if (sectionId === 'artikel') {
        loadArticles();
    }
    if (sectionId === 'journal') {
        setupJournaling();
    }
}

// Event Listeners Navigasi
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        // Ambil target ID dari href (misal: "#chat" menjadi "chat")
        const targetId = this.getAttribute('href').substring(1); 
        showSection(targetId);
    });
});

// Inisialisasi tampilan awal saat halaman dimuat
window.onload = function() {
    // Sembunyikan semua kecuali chat
    document.querySelectorAll('.card').forEach(card => {
        card.style.display = 'none';
    });
    // Tampilkan 'chat' sebagai default
    document.getElementById('chat').style.display = 'block'; 
    document.getElementById('chat').classList.add('active');
};