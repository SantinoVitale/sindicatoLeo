fetch("../json/DB.json")
    .then(res => res.json())
    .then(data => setTimeout(() => {
        let suma = 0
        for (u of data.usuarios){
            suma += u.donacion
            console.log(suma)
        } 
    }, 2000))

    let consultaDona = document.querySelector("#dona")
    let contenedorDona = document.createElement("div")
    contenedorDona.innerHTML= `<p> ${dona} </p>`
    contenedorDona.appendChild("dona")