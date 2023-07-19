function calculate(){
    var berat = document.getElementById("beratbadan").value;
    var tinggi = document.getElementById("tinggibadan").value;

    var result = parseFloat(berat) /(parseFloat(tinggi)/100)**2;

    if(!isNaN(result)){
        document.getElementById("hasil-bmi").innerHTML = result;
        if(result < 18.5){
            document.getElementById("keterangan-bmi").innerHTML = "Kekurangan Berat Badan";
        }
        else if(result < 25){
            document.getElementById("keterangan-bmi").innerHTML = "Normal (Ideal)";
        }
        else if(result < 30){
            document.getElementById("keterangan-bmi").innerHTML = "Kelebihan Berat Badan";
        }
        else{
            document.getElementById("keterangan-bmi").innerHTML = "Kegemukan (Obesitas)";
        }
    }
        

    if(!isNaN(result)){
        document.getElementById("hasil-bmi").innerHTML = result;
        if(result < 18.5){
            document.getElementById("ket-bmi").innerHTML = "Anda Kekurangan Berat Badan ";
        }
        else if(result < 25){
            document.getElementById("ket-bmi").innerHTML = "Normal";
        }
        else if(result < 30){
            document.getElementById("ket-bmi").innerHTML = "Anda Kelebihan berat badan";
        }
        else{
            document.getElementById("ket-bmi").innerHTML = "Anda Kegemukan (Obesitas)";
        }
    }
    if(!isNaN(result)){
        document.getElementById("hasil-bmi").innerHTML = result;
        if(result < 18.5){
            document.getElementById("Keteranganlanjut").innerHTML = "Hasil BMI kurang dari 18.5<br>Anda berada di kategori Underweight atau berat badan kurang<br>Rekomendasi:<br> 1.Konsumsi makanan sehat dengan frekuensi lebih sering untuk menaikkan berat badan.<br> 2.Hindari konsumsi obat penambah berat badan instan.<br> 3.Bentuk tubuh dengan olahraga angkat beban atau fleksibilitas.";
        }
        else if(result < 25){
            document.getElementById("Keteranganlanjut").innerHTML = "Hasil BMI diantara 18.5 dan 24.9<br>Anda berada di kategori Normal atau Ideal<br>Rekomendasi:<br>1.Tetap konsumsi makanan sehat dan bergizi seimbang.<br>2. Tetap aktif bergerak 30 menit per hari.";
        }
        else if(result < 30){
            document.getElementById("Keteranganlanjut").innerHTML = "Hasil BMI diantara 25 dan 29.9<br>Anda berada di kategori Overweight atau berat badan lebih<br>Rekomendasi:<br>1.Atur pola makan dengan membatasi konsumsi makanan tinggi kalori, pemanis buatan, dan gula.<br>  2.Penurunan berat badan yang direkomendasikan adalah 0.5-1 kg setiap pekan.<br> 3.Hindari konsumsi penurun berat badan instan.<br> 4.Lakukan olahraga 3-4 kali per minggu selama 30 menit, misalnya bersepeda atau berjalan kaki.";
        }
        else{
            document.getElementById("Keteranganlanjut").innerHTML = "Hasil BMI lebih dari 29.9<br>Anda berada di kategori Kegemukan atau Obesitas<br>Rekomendasi:<br>1.Atur pola makan dengan membatasi konsumsi makanan tinggi kalori, pemanis buatan, dan gula.<br>  2.Penurunan berat badan yang direkomendasikan adalah 0.5-1 kg setiap pekan.<br> 3.Hindari konsumsi penurun berat badan instan.<br> 4.Lakukan olahraga 3-4 kali per minggu selama 30 menit, misalnya bersepeda atau berjalan kaki.";
        }
    }
}


let btnClear = document.getElementById ('Reset');
let inputs = document.querySelectorAll('input');
btnClear.addEventListener('click', () => {
    inputs.forEach(input =>  input.value = '');
});
