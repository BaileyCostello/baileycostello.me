/*javascript*/

function svgasimg() { /*https://css-tricks.com/a-complete-guide-to-svg-fallbacks/*/
  return document.implementation.hasFeature(
    "http://www.w3.org/TR/SVG11/feature#Image", "1.1");
}

if (!svgasimg()){
  var e = document.getElementsByTagName("img");
  if (!e.length){
    e = document.getElementsByTagName("IMG");
  }
  for (var i=0, n=e.length; i<n; i++){
    var img = e[i],
        src = img.getAttribute("src");
    if (src.match(/svgz?$/)) {
      /* URL ends in svg or svgz */
      img.setAttribute("src", 
             img.getAttribute("data-fallback"));
    }
  }    
}

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}