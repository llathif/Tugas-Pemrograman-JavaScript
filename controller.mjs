// controller.mjs

import pengguna from "./data.mjs";

const tampilkanSemuaData = () => {
    console.log('')
  // Tampilkan setiap pengguna dalam format yang rapi
  const dataTerformat = pengguna.map((user, indeks) => {
    return `${indeks + 1}. Nama: ${user.nama}, Umur: ${user.umur}, Email: ${user.email}, Alamat: ${user.alamat}`;
  });
  console.log(dataTerformat.join("\n"));
};

const tambahkanPenggunaBaru = (dataPengguna) => {
  // Tambah data baru ke dalam array
  pengguna.push(dataPengguna);
  console.log(`\n- Menambahkan Pengguna Baru: "${dataPengguna.nama}" -`);
  console.log("Pengguna baru berhasil ditambahkan!");
};

const hapusPenggunaBerdasarkanIndeks = (indeksYangAkanDihapus) => {
  // Periksa apakah indeks valid sebelum menghapus
  if (indeksYangAkanDihapus >= 0 && indeksYangAkanDihapus < pengguna.length) {
    const penggunaYangDihapus = pengguna[indeksYangAkanDihapus];
    console.log(`\n- Menghapus Pengguna pada Indeks ${indeksYangAkanDihapus + 1}: "${penggunaYangDihapus.nama}" -`);
    // Hapus satu elemen dari array pada indeks yang ditentukan
    pengguna.splice(indeksYangAkanDihapus, 1);
    console.log("Data pengguna berhasil dihapus!");
  } else {
    console.log(`\n- Gagal Menghapus: Indeks ${indeksYangAkanDihapus} tidak valid atau tidak ditemukan -`);
  }
};

export { tampilkanSemuaData, tambahkanPenggunaBaru, hapusPenggunaBerdasarkanIndeks };