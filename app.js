function getDog() {
  const xhr = new XMLHttpRequest();
  const url = "https://dog.ceo/api/breeds/image/random";
  xhr.open("GET", url, true);
  xhr.send();

  xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      console.log(JSON.parse(this.responseText));
      document.getElementById("result").innerText = "Done! check your console!";
      const mydiv = document.createElement("div");
      mydiv.classList.add("col-lg-3");
      let myimage = document.createElement("img");
      myimage.classList.add("card-img-top");
      myimage.setAttribute("src", JSON.parse(this.responseText).message);
      mydiv.appendChild(myimage);

      document.getElementById("therow").appendChild(mydiv);
    } else if (this.status === 404) {
      console.log("Resource Not Found");
    }
  };
}

document.getElementById("querybutton").onclick = getDog;
