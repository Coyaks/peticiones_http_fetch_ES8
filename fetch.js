// 1. solicitud
// 2. respuesta
// 3. hacer lo que te da la gana

let url="https://dniruc.apisperu.com/api/v1/dni/74815854?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImNveWFrczE5QGdtYWlsLmNvbSJ9.1NdRT9-w-xvSN0NONmckZLfMLcVixw_7sC30dAW9ALI"
//opciones de la peticion
const opciones={
    method: "GET" //POST
}

fetch(url,opciones)
    .then(response=>response.json())
    .then(response=> { //respuesta
        console.log(response) //ALL
        console.log(response.nombres) //Solo nombre
    })
    .catch(err =>{
        console.error("Error Fecth: ",err.message)
    })


