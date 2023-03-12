function down() {
  div = document.createElement('div');
  div.style.display = 'none';
  let v = 0;
  let name=document.getElementById("name");
  let ytlink = document.getElementById('link').value;
  if (ytlink.includes("&") === true) {
    v = ytlink.indexOf("v=")
    v = v + 2;
    and = ytlink.indexOf("&")
    alert(v)
    id = ytlink.substring(v, and)
  } else {
    v = ytlink.indexOf("v=")
    v = v + 2;
    id = ytlink.substring(v, ytlink.length)
  }
  // alert(id)

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd0ce9043damshf86a95c7fc3ed44p1728ebjsn15ead1eb3581',
      'X-RapidAPI-Host': 'youtube-mp3-download1.p.rapidapi.com'
    }
  };

  fetch('https://youtube-mp3-download1.p.rapidapi.com/dl?id=' + id, options)
    .then(response => response.json())
    .then(res => {
      dlink = res.link;
      name.innerHTML= res.title;
      lnk = document.createElement("a"),
        lnk.href = dlink,
        lnk.download = "my_file.mp3",
        document.body.appendChild(lnk),
        lnk.click(),
        document.body.removeChild(lnk)
    }).then()
    .catch(err => console.error(err));
}

