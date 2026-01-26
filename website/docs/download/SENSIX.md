<div style="display:flex; justify-content:center; margin-top:30px; font-family:sans-serif;">

  <!-- Card Download -->
  <div style="
      background: rgba(255,255,255,0.1);
      backdrop-filter: blur(15px);
      border-radius: 20px;
      padding: 20px;
      max-width: 400px;
      text-align: center;
      box-shadow: 0 8px 20px rgba(0,0,0,0.2);
      transition: transform 0.3s ease;
  " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">

    <!-- Thumbnail -->
    <img src="/SENSIX2.png" alt="thumbnail" style="
        width:150px;
        height:auto;
        border-radius: 15px;
        margin-bottom: 15px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    " />

    <!-- Deskripsi -->
    <p style="color:white; line-height:1.5; margin-bottom:20px;">
      Dapatkan **SensiX Beta** versi terbaru sekarang! Nikmati fitur terbaru, performa stabil, dan tampilan keren. Pastikan kamu mendownload dari link resmi untuk keamanan. Klik tombol di bawah dan tunggu beberapa detik untuk memulai.
    </p>

    <!-- Tombol Download -->
    <button id="downloadBtn" style="
        padding:12px 25px;
        margin:5px;
        background: linear-gradient(90deg, #4CAF50, #67E2AE);
        color:white;
        border:none;
        border-radius:30px;
        font-weight:bold;
        cursor:pointer;
        transition: all 0.3s ease;
    " onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'" onclick="startDownload()">
      Download SensiX Beta
    </button>

    <!-- Tombol Salin Link -->
    <button onclick="copyLink()" style="
        padding:12px 25px;
        margin:5px;
        background: linear-gradient(90deg, #008CBA, #00CFFF);
        color:white;
        border:none;
        border-radius:30px;
        font-weight:bold;
        cursor:pointer;
        transition: all 0.3s ease;
    " onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
      Salin Link
    </button>

    <!-- Loading text -->
    <p id="loadingText" style="color:#fff; margin-top:15px; display:none;">Sedang mempersiapkan download... ⏳</p>
  </div>
</div>

<script>
function copyLink() {
  const link = "https://safefileku.com/download/nyNqimQkOoUwJj3w";
  navigator.clipboard.writeText(link)
    .then(() => alert("Link berhasil disalin!"))
    .catch(err => alert("Gagal menyalin link: " + err));
}

function startDownload() {
  const btn = document.getElementById('downloadBtn');
  const loading = document.getElementById('loadingText');

  btn.disabled = true;
  btn.style.opacity = 0.6;
  loading.style.display = "block";

  // Tunggu 5 detik sebelum membuka link
  setTimeout(() => {
    window.open("https://safefileku.com/download/nyNqimQkOoUwJj3w", "_blank");
    btn.disabled = false;
    btn.style.opacity = 1;
    loading.style.display = "none";
  }, 5000);
}
</script>