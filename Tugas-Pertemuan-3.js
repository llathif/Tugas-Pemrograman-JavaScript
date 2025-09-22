// ---| Data Barang |---
let daftarBarang = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];
let tambahIdBarang = 4;

/**
 * Fungsi untuk menambahkan barang baru ke dalam array daftarBarang.
 * ID baru akan ditambahkan secara berurutan.
 * @param {string} nama - Nama barang baru.
 * @param {number} harga - Harga barang baru.
 * @param {number} stok - Jumlah stok barang baru.
 */
function tambahBarang(nama, harga, stok) {
    const barangBaru = { id: tambahIdBarang, nama: nama, harga: harga, stok: stok };
    daftarBarang.push(barangBaru);
    tambahIdBarang++;
    console.log(`Barang "${nama}" berhasil ditambahkan.`);
}

/**
 * Fungsi untuk menghapus barang dari array daftarBarang berdasarkan ID.
 * @param {number} id - ID barang yang akan dihapus.
 */
function hapusBarang(id) {
    const index = daftarBarang.findIndex(barang => barang.id === id);
    if (index !== -1) {
        const namaBarang = daftarBarang[index].nama;
        daftarBarang.splice(index, 1);
        console.log(`Barang dengan ID ${id} (${namaBarang}) berhasil dihapus.`);
    } else {
        console.log(`Barang dengan ID ${id} tidak ditemukan.`);
    }
}

/**
 * Fungsi untuk menampilkan semua barang yang ada di dalam array daftarBarang.
 * Menggunakan console.table untuk tampilan yang lebih rapi.
 */
function tampilkanBarang() {
    console.log("---| Daftar Barang Toko Saat Ini |---");
    if (daftarBarang.length === 0) {
        console.log("Tidak ada barang yang tersedia.");
        return;
    }
    console.table(daftarBarang);
}

// ---| Data Pelanggan |---
let daftarPelanggan = [
    { id: 1, nama: "Fahad", alamat: "Sidoarjo" },
    { id: 2, nama: "Nurdiyanti", alamat: "Pasuruan" }
];
let tambahIdPelanggan = 3;

// ---| Data Pesanan |---
let daftarPesanan = [];
let daftarPesananGagal = [];
let tambahIdPesanan = 1;

/**
 * Fungsi untuk menambahkan pelanggan baru ke dalam array daftarPelanggan.
 * @param {string} nama - Nama pelanggan baru.
 * @param {string} alamat - Alamat pelanggan baru.
 */
function tambahPelanggan(nama, alamat) {
    const pelangganBaru = { id: tambahIdPelanggan, nama: nama, alamat: alamat };
    daftarPelanggan.push(pelangganBaru);
    tambahIdPelanggan++;
    console.log(`\n Pelanggan "${nama}" berhasil ditambahkan.`);
}

/**
 * Fungsi untuk membuat pesanan baru, memeriksa stok, dan menghitung total harga.
 * Akan mengurangi stok jika pesanan berhasil.
 @param {number} idPelanggan - ID dari pelanggan yang membuat pesanan.
 @param {array} keranjang - Array objek yang berisi item pesanan, contoh: [{idBarang: 1, jumlah: 2}].
 */
function buatPesanan(idPelanggan, keranjang) {
    const customer = daftarPelanggan.find(p => p.id === idPelanggan);
    if (!customer) {
        console.error(`\n Pelanggan dengan ID ${idPelanggan} tidak ditemukan.`);
        return;
    }

    let totalHarga = 0;
    let itemsPesanan = [];
    let gagal = false;
    let alasanGagal = "";

    // Memeriksa ketersediaan setiap barang di keranjang
    for (const item of keranjang) {
        const barang = daftarBarang.find(b => b.id === item.idBarang);
        if (!barang) {
            gagal = true;
            alasanGagal = `Barang dengan ID ${item.idBarang} tidak ditemukan.`;
            break;
        }
        if (barang.stok < item.jumlah) {
            gagal = true;
            alasanGagal = `Barang "${barang.nama}" tidak mencukupi. Tersisa ${barang.stok}, butuh ${item.jumlah}.`;
            break;
        }
        totalHarga += barang.harga * item.jumlah;
        itemsPesanan.push({
            namaBarang: barang.nama,
            jumlah: item.jumlah,
        });
    }

    if (gagal) {
        console.error(`\n * Pesanan untuk "${customer.nama}" GAGAL: ${alasanGagal}`);
        daftarPesananGagal.push({
            ID: tambahIdPesanan,
            Pelanggan: customer.nama,
            Items: keranjang.map(item => `ID${item.idBarang} x${item.jumlah}`).join(', '),
            Alasan: alasanGagal
        });
        tambahIdPesanan++;
        return;
    }

    // Kalau stok cukup → kurangi stok dan buat pesanan sukses
    for (const item of keranjang) {
        const barang = daftarBarang.find(b => b.id === item.idBarang);
        barang.stok -= item.jumlah;
    }

    const pesananBaru = {
        ID: tambahIdPesanan,
        Pelanggan: customer.nama,
        Items: itemsPesanan.map(i => `${i.namaBarang} x${i.jumlah}`).join(', '),
        Total: `Rp. ${totalHarga.toLocaleString('id-ID')}`
    };
    daftarPesanan.push(pesananBaru);
    tambahIdPesanan++;
    console.log(`\n * Pesanan untuk "${customer.nama}" berhasil dibuat.`);
}

/* Fungsi untuk menampilkan daftar pesanan yang berhasil dan yang gagal.*/
function tampilkanPesanan() {
    console.log("\n===| Pesanan Berhasil Dibuat |===");
    if (daftarPesanan.length === 0) {
        console.log("Belum ada pesanan berhasil.");
    } else {
        console.table(daftarPesanan);
    }

    console.log("\n===| Pesanan Gagal Dibuat |===");
    if (daftarPesananGagal.length === 0) {
        console.log("Tidak ada pesanan gagal.");
    } else {
        console.table(daftarPesananGagal);
    }
}

// ---| Testing Program |---
console.log("1. Menampilkan daftar barang awal:");
tampilkanBarang();

console.log("\n2. Menambahkan barang baru...");
tambahBarang("Printer", 1200000, 6);
tampilkanBarang();

console.log("\n3. Menghapus barang dengan ID 2...");
hapusBarang(2);
tampilkanBarang();

console.log("\n4. Menambahkan pelanggan baru");
tambahPelanggan("Bagus", "Malang");

console.log("\n - Pesanan sukses dibuat oleh Fahad (ID 1)");
let keranjangFahad = [
    { idBarang: 3, jumlah: 1 },
    { idBarang: 4, jumlah: 1 }
];
buatPesanan(1, keranjangFahad);

console.log("\n - Pesanan gagal dibuat oleh Nurdiyanti (ID 2)");
let keranjangNurdiyanti = [
    { idBarang: 1, jumlah: 10 } // gagal, stok laptop tidak cukup
];
buatPesanan(2, keranjangNurdiyanti);

console.log("\n Menampilkan semua pesanan");
tampilkanBarang();
tampilkanPesanan();