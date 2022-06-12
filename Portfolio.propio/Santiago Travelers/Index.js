// var Servicios = [
//     {
//         name: "Tours",
//         imagen: "Collage.Santiago.png",
//         descripcion: "Nuestro catálogo de tours ofrecidos para turistas",
//     },

//     {
//         name: "Paquetes",
//         imagen: "Collage Santiago2.png",
//         descripcion: "Nuestro catálogo de paquetes de servicio ofrecidos para turistas",
//     },

//     {
//         name: "Hoteleria",
//         imagen: "Collage.Santiago.png",
//         descripcion: "Ofrecemos facilidad para realizar reservas en hoteles",
//     },

//     {
//         name: "Transporte",
//         imagen: "Collage.Santiago.png",
//         descripcion: "Ofrecemos servicios de transporte para nuestros turistas",
//     },
// ]

// function showItems() {
//     let row = document.getElementById("cardItem")

//     for (let i = 0; i < inventario.length; i++) {
//         let elememt = inventario[i] // asigno el objeto a una variable
//         let card = `<div class="col-sm-6 col-md-3 col-lg-3">
//         <div class="card">
//         <img src="${elememt.imagen}" class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${elememt.name}</h5>
//           <p class="card-text">${elememt.descripcion}</p>
//           <a href="./JS/detalle.js"/>Detalle</a>
//           <button onclick=${showDetail(elememt, i)} class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modal${i}">Ver más</button>
//         </div>
//         </div>
//         </div>`;

//       row.insertAdjacentHTML("afterbegin", card);
//       }
// }

// function saveData(elememt,i) {
//     localStorage.setItem("nombre", "Servicios");
// }

// function showDetail(elememt, i) {
//     let divModal = document.getElementById("modalDetail")
//     let modal = `
//     <div class="modal fade" id="modal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//     <div class="modal-dialog">
//       <div class="modal-content">
//         <div class="modal-header">
//           <h5 class="modal-title" id="itemTittle">${elememt.name}</h5>
//           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//         </div>
//         <div class="modal-body">
//         <img src="${elememt.imagen}" class="img-fluid" alt="...">
//         <br/>
//         <p class="fw-normal fw-semibold">${elememt.descripcion}</p>
//         </div>
//         <div class="modal-footer">
//           <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         </div>
//       </div>
//     </div>
//   </div>`

//   divModal.insertAdjacentHTML("afterbegin", modal)
    
// }

// showItems();

