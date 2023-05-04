// let datos = [];
// let new_data = {};
// let active_data = { id: "", name: "", url: "" };
// let table_cuerpo = document.getElementById("table_decoration");

// // if (localStorage.getItem("carrito") === null) {
// //   localStorage.setItem("carrito", "");
// // } else {
// //   new_data = JSON.parse(localStorage.getItem("carrito"));
// // }
// if (localStorage.getItem("carrito") === null) {
//   localStorage.setItem("carrito", "");
// } else {
//   const carrito = localStorage.getItem("carrito");
//   if (carrito) {
//     try {
//       new_data = JSON.parse(carrito);
//     } catch (error) {
//       console.error("Error con el JS:", error);
//     }
//   }
// }

// const resetData = (index) => {
//   const new_object_data = {};
//   localStorage.removeItem("carrito");
//   document.getElementById("table_decoration").innerHTML = "";

//   Object.keys(new_data).forEach((key) => {
//     if (key != index) {
//       new_object_data[key] = new_data[key];
//     }
//   });

//   new_data = new_object_data;

//   localStorage.setItem(
//     "carrito",
//     Object.keys(new_object_data).length > 0 ? JSON.stringify(new_data) : ""
//   );
// };

// const showSidebar = (id) => {
//   data = [];
//   table_cuerpo.innerHTML = "";
//   offcanvas = new bootstrap.Offcanvas(id);
//   offcanvas.show();
// };

// const getDataCards = (name_class) => {
//   const button_card = document.querySelectorAll(`.${name_class}`);

//   if (button_card) {
//     button_card.forEach((button_click) => {
//       button_click.addEventListener("click", () => {
//         const cardDiv = button_click.closest(".row");
//         active_data.id = cardDiv.getAttribute("data-id_card");
//         active_data.name = cardDiv.querySelector(".card-title").textContent;
//         active_data.url = cardDiv.querySelector("img").getAttribute("src");

//         showSidebar(document.getElementById("offcanvasRight"));
//         createTable();
//       });
//     });
//   }
// };

// const reloadTable = () => {
//   table_cuerpo.innerHTML = "";
//   Object.entries(new_data).forEach(([index, item]) => {
//     table_cuerpo.append(
//       addRow([
//         addColumnImage(item.row.url),
//         addColumn(item.row.name),
//         addColumn(item.cantidad),
//         addColumnButton(index),
//       ])
//     );
//   });
// };


// const createTable = () => {
//   if (!new_data[active_data.id]) {
//     new_data[active_data.id] = {
//       cantidad: 1,
//       row: active_data,
//     };
//   } else {
//     new_data[active_data.id].cantidad += 1;
//     new_data[active_data.id].row = active_data;
//   }

//   reloadTable();
//   localStorage.setItem("carrito", JSON.stringify(new_data));
// };

// const addRow = (columns) => {
//   const tr = document.createElement("TR");
//   columns.forEach((td) => tr.appendChild(td));
//   return tr;
// };

// const addColumnImage = (url) => {
//   const td = document.createElement("TD");
//   const img = document.createElement("IMG");
//   img.setAttribute("src", url);
//   img.style.width = "100px";
//   img.style.borderRadius = "20px";
//   td.appendChild(img);
//   return td;
// };

// const addColumnButton = (index) => {
//   const button = document.createElement("BUTTON");
//   button.textContent = "Eliminar";
//   button.classList.add(
//     "btn",
//     "btn-danger",
//     "btn-sm",
//     "rounded-pill",
//     "fw-bold",
//     "text-uppercase",
//     "my-2",
//     "ms-2"
//   );
//   button.addEventListener("click", () => {
//     resetData(index);
//     reloadTable();
//   });

//   const td = document.createElement("TD");
//   td.appendChild(button);
//   return td;
// };

// const addColumn = (value) => {
//   const td = document.createElement("TD");
//   td.textContent = value;
//   return td;
// };

// getDataCards("decoration-button");
// getDataCards("feeding-button");
// getDataCards("recreation-button");
// getDataCards("inflatable-button");
// getDataCards("characters-button");
