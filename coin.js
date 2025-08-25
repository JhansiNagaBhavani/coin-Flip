    // let heading=document.createElement("h1")
    // heading.textContent="COIN FLIP"
    // // heading.classList='heading'
    // document.body.appendChild(heading)
    

    let flip_btn = document.getElementById("flipBtn");
    let coin_img = document.getElementById("coinImage");

    function flipcoin() {
      let coin = Math.random()*2  
      coin=Math.ceil(coin)
      // console.log(coin)

      if (coin === 1) {
        coin_img.src="https://en.numista.com/catalogue/photos/inde/3208-original.jpg";
        coin_img.alt = "Heads";
      } else {
        coin_img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaUXfx2GxwJmq3wNE45zDmbnb4r4z6xagpnw&s";
        coin_img.alt = "Tails";
      }
    }

    