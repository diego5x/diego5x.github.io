const routes = {
  "/": "index.html",
  "/contact": "/pages/contact.html",
  "/rices": "/pages/rices.html",
  "/uses": "/pages/uses.html",
  "/pubkey": "/key/pubkey.txt"
};

async function router() {
  const path = window.location.pathname;
  const route = routes[path] || routes["/"];
  
  const response = await fetch(route);
  const html = await response.text();

  document.getElementById("app").innerHTML = html;
}

function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}

document.addEventListener("click", e => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    navigateTo(e.target.href);
  }
});

window.addEventListener("popstate", router);
window.addEventListener("load", router);
