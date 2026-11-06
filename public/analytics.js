window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "G-DSL4Z03NFE");

/* Analytics waits until the page has finished loading, so it never delays the first view. */
window.addEventListener("load", function () {
  setTimeout(function () {
    var script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-DSL4Z03NFE";
    document.head.appendChild(script);
  }, 2500);
});
