let submit = document.getElementById("submit");
submit.addEventListener("submit", () => {
  let ans = document.getElementById("answer").value;
  let url = window.location.href.replace(/\/.*\.html/, `${ans}.html`);
  window.location.href = url;
  return false;
});
