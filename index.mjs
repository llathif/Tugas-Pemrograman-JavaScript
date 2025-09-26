// index.mjs

import { tampilkanSemuaData, tambahkanPenggunaBaru, hapusPenggunaBerdasarkanIndeks } from "./controller.mjs";

const main = () => {
    // Memberi judul dan memulai program
    console.log("=========================================");
    console.log("         | Manajemen Pengguna |          ");
    console.log("=========================================");

    // Menampilkan data awal
    console.log("\n=== Tahap 1: Data Pengguna Saat Ini ===");
    tampilkanSemuaData();

    // Menambahkan data baru
    const penggunaBaru1 = { nama: 'Rizky Prabowo', umur: 27, alamat: 'Jl. Pemuda No. 5, Surabaya', email: 'rizky.prabowo@gmail.com' };
    const penggunaBaru2 = { nama: 'Citra Amelia', umur: 25, alamat: 'Jl. Merdeka No. 10, Malang', email: 'citra.amelia@gmail.com' };

    console.log("\n=== Tahap 2: Menambahkan Pengguna Baru ===");
    tambahkanPenggunaBaru(penggunaBaru1);
    tambahkanPenggunaBaru(penggunaBaru2);

    // Menampilkan data setelah penambahan
    console.log("\n=== Tahap 3: Daftar Pengguna Setelah Penambahan ===");
    tampilkanSemuaData();

    // Menghapus data
    console.log("\n=== Tahap 4: Menghapus Pengguna ===");
    // Menghapus pengguna pada indeks 0 (data pertama)
    hapusPenggunaBerdasarkanIndeks(0);

    // Menampilkan data akhir
    console.log("\n=== Tahap 5: Daftar Pengguna Terkini ===");
    tampilkanSemuaData();
    
    console.log("=========================================");
    console.log("           Program Selesai               ");
    console.log("=========================================");
};

main();