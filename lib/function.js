async function count(s) {
  s = Number(s);
  var d = Math.floor(s / (3600 * 24));
  var h = Math.floor(s % (3600 * 24) / 3600);
  var m = Math.floor(s % 3600 / 60);
  var s = Math.floor(s % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " Hari ,":" Hari,") : ""
  var hDisplay = h > 0 ? h + (h == 1 ? " Jam, ":" Jam,") : " 00 Jam "
  var mDisplay = m > 0 ? m + (m == 1 ? " Menit, ":" Menit ") : " 00 Menit "
  var sDisplay = s > 0 ? s + (s == 1 ? "  Detik, ":" Detik ") : ""
  return dDisplay + hDisplay + mDisplay + sDisplay
}