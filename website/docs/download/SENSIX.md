<script setup>
import { ref } from 'vue'

const loading = ref(false)

function startDownload() {
  loading.value = true
  setTimeout(() => {
    window.open("https://safefileku.com/download/nyNqimQkOoUwJj3w", "_blank")
    loading.value = false
  }, 5000)
}

function copyLink() {
  navigator.clipboard.writeText("https://safefileku.com/download/nyNqimQkOoUwJj3w")
    .then(() => alert("Link berhasil disalin!"))
}
</script>

<template>
<div style="display:flex; justify-content:center; align-items:center; flex-direction:column; min-height:80vh; padding:20px;">

  <!-- Card Blur -->
  <div style="
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(15px);
    border-radius: 20px;
    padding: 30px;
    text-align: center;
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
    max-width:400px;
    width:100%;
    transition: transform 0.3s ease;
  " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">

    <!-- Logo / Thumbnail -->
    <img src="/SENSIX2.png" style="width:150px; border-radius:15px; box-shadow:0 5px 15px rgba(0,0,0,0.2); margin-bottom:20px;" />

    <!-- Deskripsi -->
    <p style="color:white; line-height:1.5; margin-bottom:20px;">
      Dapatkan <strong>SensiX Beta</strong> versi terbaru sekarang! Nikmati fitur terbaru, performa stabil, dan tampilan keren. Klik tombol di bawah dan tunggu beberapa detik untuk memulai.
    </p>

    <!-- Tombol Download -->
    <button @click="startDownload" :disabled="loading" style="
      padding:12px 25px; 
      margin:5px; 
      border-radius:30px; 
      background:linear-gradient(90deg, #4CAF50, #67E2AE); 
      color:white; 
      font-weight:bold;
      cursor:pointer;
      transition: all 0.3s ease;
    ">
      {{ loading ? 'Menunggu... ⏳' : 'Download SensiX Beta' }}
    </button>

    <!-- Tombol Salin Link -->
    <button @click="copyLink" style="
      padding:12px 25px; 
      margin:5px; 
      border-radius:30px; 
      background:linear-gradient(90deg, #008CBA, #00CFFF); 
      color:white;
      font-weight:bold;
      cursor:pointer;
      transition: all 0.3s ease;
    ">
      Salin Link
    </button>

    <!-- Loading text tambahan -->
    <p v-if="loading" style="color:#fff; margin-top:15px;">Sedang mempersiapkan download... ⏳</p>
  </div>

</div>
</template>