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
<div style="text-align:center; margin-top:30px;">
  <img src="/SENSIX2.png" style="width:150px; border-radius:15px; box-shadow:0 5px 15px rgba(0,0,0,0.2);" />
  <p>Dapatkan <strong>SensiX Beta</strong> versi terbaru sekarang! Klik tombol di bawah dan tunggu beberapa detik untuk memulai.</p>

  <button @click="startDownload" :disabled="loading" style="padding:12px 25px; margin:5px; border-radius:30px; background:linear-gradient(90deg, #4CAF50, #67E2AE); color:white;">
    {{ loading ? 'Menunggu... ⏳' : 'Download SensiX Beta' }}
  </button>

  <button @click="copyLink" style="padding:12px 25px; margin:5px; border-radius:30px; background:linear-gradient(90deg, #008CBA, #00CFFF); color:white;">
    Salin Link
  </button>
</div>
</template>