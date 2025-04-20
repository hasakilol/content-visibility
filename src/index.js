const container = document.getElementById("contained_auto");

function onChange(e) {
  console.log(e, e.skipped);
}

container.addEventListener("contentvisibilityautostatechange", onChange);
