<p align="center">
  <img src="/sensix.png" alt="thumbnail" style="width:100%; max-width:100%; height:auto;" />
</p>

<p align="center">
  <!-- Tombol Download -->
  <a href="https://safefileku.com/download/nyNqimQkOoUwJj3w" target="_blank">
    <button style="padding:10px 20px; margin:5px; background-color:#4CAF50; color:white; border:none; border-radius:5px; cursor:pointer;">
      Download SensiX Beta
    </button>
  </a>

  <!-- Tombol Salin Link -->
  <button onclick="copyLink()" style="padding:10px 20px; margin:5px; background-color:#008CBA; color:white; border:none; border-radius:5px; cursor:pointer;">
    Salin Link
  </button>
</p>

<script>
function copyLink() {
  const link = "https://safefileku.com/download/nyNqimQkOoUwJj3w";
  navigator.clipboard.writeText(link)
    .then(() => alert("Link berhasil disalin!"))
    .catch(err => alert("Gagal menyalin link: " + err));
}
</script>