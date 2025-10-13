<?php
    // Siapkan variabel dulu agar tidak error
    $nama = '';
    $email = '';
    $nilai = '';
    $hasil = '';

    // Cek dulu, APAKAH tombol dengan name="submit" sudah ditekan?
    if (isset($_POST['submit'])) {
        
        // JIKA SUDAH DITEKAN, baru jalankan kode di bawah ini
        $nama = $_POST['nama_lengkap'];
        $email = $_POST['email_address'];
        $nilai = $_POST['nilai_ujian'];

        // (lanjutan kode logika if-else Anda...)
        if ($nilai > 70) {
            $hasil = "Selamat, kamu LULUS!";
        } else {
            $hasil = "Maaf, kamu REMEDIAL.";
        }
    }
?>

<!DOCTYPE html>
<html>
<head>
    <title>Belajar Form dan PHP</title>
    <style>
        body { font-family: sans-serif; }
        .container { max-width: 500px; margin: 40px auto; padding: 20px; border: 1px solid #ccc; border-radius: 8px; }
        input { width: 100%; padding: 8px; margin-bottom: 10px; box-sizing: border-box; }
        button { width: 100%; padding: 10px; background-color: #007bff; color: white; border: none; cursor: pointer; }
        .hasil { margin-top: 20px; padding: 15px; background-color: #f0f0f0; border-radius: 5px; }
    </style>
</head>
<body>

    <div class="container">
        <h2>Form Nilai Ujian Siswa</h2>
        
        <form action="" method="POST">
            <label>Nama Kamu:</label>
            <input type="text" name="nama_lengkap">
            
            <label>Email Kamu:</label>
            <input type="email" name="email_address">
            
            <label>Nilai Ujian (0-100):</label>
            <input type="number" name="nilai_ujian">
            
            <button type="submit" name="submit">Cek Hasil</button>
        </form>

        <?php
            // Langkah keempat: Tampilkan hasil jika sudah ada
            // Kode ini hanya akan menampilkan sesuatu jika variabel $hasil tidak kosong lagi
            if ($hasil != '') {
                echo "<div class='hasil'>";
                echo "<h3>Hasil Kamu:</h3>";
                echo "Nama: " . $nama . "<br>";
                echo "Email: " . $email . "<br>";
                echo "Nilai: " . $nilai . "<br>";
                echo "<strong>Status: " . $hasil . "</strong>";
                echo "</div>";
            }
        ?>

    </div>

</body>
</html>