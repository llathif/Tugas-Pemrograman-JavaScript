// Class Kendaraan (kelas dasar untuk semua kendaraan)
class Kendaraan {
    constructor(merek, model, tahun) {
        this.merek = merek;   // merek mobil, misalnya "Hyundai"
        this.model = model;   // model mobil, misalnya "Stargazer"
        this.tahun = tahun;   // tahun keluaran
    }

    // Metode untuk menampilkan informasi dasar kendaraan
    getInfo() {
        return `${this.merek} ${this.model} (${this.tahun})`;
    }
}

// Class Mobil (turunan dari Kendaraan, dengan tambahan properti kursi)
class Mobil extends Kendaraan {
    constructor(merek, model, tahun, kursi) {
        super(merek, model, tahun); 
        this.kursi = kursi; // jumlah kursi mobil
    }

    // Override metode getInfo() untuk menambahkan info kursi
    getInfo() {
        return `${super.getInfo()}, Kursi: ${this.kursi}`;
    }
}

// Class Pelanggan
class Pelanggan {
    constructor(nama, nomor) {
        this.nama = nama;     // nama pelanggan
        this.nomor = nomor;   // nomor telepon pelanggan
        this.kendaraanyangdisewa = null; // kendaraan yang disewa (default null)
    }

    // Fungsi untuk menyewa kendaraan
    sewaKendaraan(kendaraan) {
        this.kendaraanyangdisewa = kendaraan;
        console.log(`Transaksi berhasil: ${this.nama} telah menyewa ${kendaraan.merek} ${kendaraan.model}.`);
        console.log("-------------------------------------------------------------------------");
    }
}

// Array untuk menyimpan daftar pelanggan
const daftarpelanggan = [];

// Fungsi untuk menampilkan daftar pelanggan yang sedang menyewa kendaraan
function tampilkanPelangganMenyewa() {
    console.log("\n===| Daftar Pelanggan yang Menyewa Kendaraan |===");
    
    // Filter hanya pelanggan yang sudah menyewa kendaraan
    const pelangganmenyewa = daftarpelanggan.filter(p => p.kendaraanyangdisewa !== null);

    // Jika tidak ada pelanggan yang menyewa
    if (pelangganmenyewa.length === 0) {
        console.log("Belum ada pelanggan yang sedang menyewa kendaraan.");
        return;
    }

    // Loop semua pelanggan yang menyewa dan tampilkan detailnya
    pelangganmenyewa.forEach((pelanggan, index) => {
        console.log(`\n[${index + 1}] Nama Pelanggan: ${pelanggan.nama}`);
        console.log(`    Nomor Telepon : ${pelanggan.nomor}`);
        console.log(`    Kendaraan     : ${pelanggan.kendaraanyangdisewa.getInfo()}`); 
    });
    console.log("=========================================================================");

}

// Contoh data mobil dengan merek dan kursi terbaru
const mobilStargazer = new Mobil("Hyundai", "Stargazer", 2023, 7); // MPV, 7 kursi
const mobilFortuner  = new Mobil("Toyota", "Fortuner", 2022, 7);   // SUV, 7 kursi
const mobilMazda3    = new Mobil("Mazda", "Mazda 3", 2021, 5);     // Sedan, 5 kursi

// Contoh data pelanggan dengan nama & nomor baru
const pelanggan1 = new Pelanggan("Rizky Pratama", "081222334455");
const pelanggan2 = new Pelanggan("Siti Rahmawati", "082233445566");
const pelanggan3 = new Pelanggan("Dewi Kusuma", "083344556677");

// Tambahkan pelanggan ke daftar
daftarpelanggan.push(pelanggan1, pelanggan2, pelanggan3);

// Pelanggan melakukan penyewaan kendaraan
pelanggan1.sewaKendaraan(mobilStargazer);
pelanggan2.sewaKendaraan(mobilFortuner);

// Tampilkan daftar pelanggan yang sedang menyewa
tampilkanPelangganMenyewa();