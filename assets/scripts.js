/** @format */

const panjangTaliInput = document.getElementById("panjang-tali");
const periodeInput = document.getElementById("periode");
const satuanPanjangSelect = document.getElementById("satuan-panjang");
const satuanPeriodeSelect = document.getElementById("satuan-periode");
const hasilParagraf = document.getElementById("hasil");

const hitungGravitasi = () => {
  const panjangTali = parseFloat(panjangTaliInput.value);
  const periode = parseFloat(periodeInput.value);
  const satuanPanjang = satuanPanjangSelect.value;
  const satuanPeriode = satuanPeriodeSelect.value;

  // Konversi satuan panjang ke meter
  let panjangTaliMeter;
  if (satuanPanjang === "centimeter") {
    panjangTaliMeter = panjangTali / 100;
  } else if (satuanPanjang === "meter") {
    panjangTaliMeter = panjangTali;
  } else {
    console.error("Satuan panjang tidak valid");
    return;
  }

  // Konversi satuan periode ke detik
  let periodeDetik;
  if (satuanPeriode === "detik") {
    periodeDetik = periode;
  } else if (satuanPeriode === "menit") {
    periodeDetik = periode * 60;
  } else {
    console.error("Satuan periode tidak valid");
    return;
  }

  // Menghitung gravitasi
  const gravitasi =
    (4 * Math.PI * Math.PI * panjangTaliMeter) / (periodeDetik * periodeDetik);

  // Menampilkan hasil
  hasilParagraf.textContent = `Hasil: ${gravitasi.toFixed(2)} m/s²`;
};

document
  .getElementById("hitungGravitasi")
  .addEventListener("click", hitungGravitasi);
