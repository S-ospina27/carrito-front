let datos = [];
let new_data = {};
let active_data = { id: "", name: "", url: "" };
let table_cuerpo = document.getElementById("table_decoration");
const carrito_show = document.getElementById("carrito-show");

if (localStorage.getItem("carrito") === null) {
  localStorage.setItem("carrito", "");
} else {
  const carrito = localStorage.getItem("carrito");
  if (carrito) {
    try {
      new_data = JSON.parse(carrito);
    } catch (error) {
      console.error("Error con el JS:", error);
    }
  }
}

const resetData = (id) => {
  localStorage.removeItem("carrito");
  delete new_data[id];
  reloadTable();
  localStorage.setItem(
    "carrito",
    Object.keys(new_data).length > 0 ? JSON.stringify(new_data) : ""
  );
};

const showSidebar = (id) => {
  data = [];
  table_cuerpo.innerHTML = "";
  offcanvas = new bootstrap.Offcanvas(id);
  offcanvas.show();
};

const getDataCards = (name_class) => {
  const button_card = document.querySelectorAll(`.${name_class}`);

  if (button_card) {
    button_card.forEach((button_click) => {
      button_click.addEventListener("click", () => {
        const cardDiv = button_click.closest(".row");
        active_data.id = cardDiv.getAttribute("data-id_card");
        active_data.name = cardDiv.querySelector(".card-title").textContent;
        active_data.url = cardDiv.querySelector("img").getAttribute("src");

        showSidebar(document.getElementById("offcanvasRight"));
        createTable();
      });
    });
  }
};

const reloadTable = () => {
  table_cuerpo.innerHTML = "";
  Object.entries(new_data).forEach(([id, item]) => {
    const { name, url, cantidad } = item;
    table_cuerpo.append(
      addRow([
        addColumnImage(url),
        addColumn(name),
        addColumn(cantidad),
        addColumnButton(id),
      ])
    );
  });
};

const createTable = () => {
  if (!new_data[active_data.id]) {
    new_data[active_data.id] = {
      cantidad: 1,
      name: active_data.name,
      url: active_data.url,
    };
  } else {
    new_data[active_data.id].cantidad += 1;
  }

  reloadTable();
  localStorage.setItem("carrito", JSON.stringify(new_data));
};

const addRow = (columns) => {
  const tr = document.createElement("TR");
  columns.forEach((td) => tr.appendChild(td));
  return tr;
};

const addColumnImage = (url) => {
  const td = document.createElement("TD");
  const img = document.createElement("IMG");
  img.setAttribute("src", url);
  img.style.width = "100px";
  img.style.borderRadius = "20px";
  td.appendChild(img);
  return td;
};

const addColumnButton = (id) => {
  const button = document.createElement("BUTTON");
  button.textContent = "Eliminar";
  button.classList.add(
    "btn",
    "btn-danger",
    "btn-sm",
    "rounded-pill",
    "fw-bold",
    "text-uppercase",
    "my-2",
    "ms-2"
  );
  button.addEventListener("click", () => {
    resetData(id);
  });

  const td = document.createElement("TD");
  td.appendChild(button);
  return td;
};

const addColumn = (value) => {
  const td = document.createElement("TD");
  td.textContent = value;
  return td;
};

if (carrito_show) {
  carrito_show.addEventListener("click", () => {
    offcanvas = new bootstrap.Offcanvas(
      document.getElementById("offcanvasRight")
    );
    reloadTable();
    offcanvas.show();
  });
}

getDataCards("decoration-button");
getDataCards("feeding-button");
getDataCards("recreation-button");
getDataCards("inflatable-button");
getDataCards("characters-button");

const username = document.getElementById("username");
const form_shopping = document.getElementById("shooping_form");
if (form_shopping) {
  form_shopping.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("submit");
    const host = "http://127.0.0.1:8000/create";
    axios
      .post(host, {
        data: JSON.parse(localStorage.getItem("carrito")),
        username: username.value,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "success") {
          localStorage.removeItem("carrito");
          username.value = "";
          data = [];
          new_data = {};
          table_cuerpo.innerHTML = "";
        }
      });
  });
}
