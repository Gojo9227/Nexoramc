
function copyText() {
  const text = document.getElementById("minecraft-text").textContent;
  navigator.clipboard.writeText(text).then(() => {
  }).catch(err => {
    console.error("Error copying text: ", err);
  });
}
 
