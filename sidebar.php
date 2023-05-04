<div class="offcanvas offcanvas-end bg-light border border-primary shadow-lg w-50" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <!-- <h5 id="offcanvasRightLabel">Offcanvas right</h5> -->
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <h1 class="text-center">CARRITO</h1>
  <div class="offcanvas-body">
    <form id="shooping_form">
      <div class="row">
        <div class="input-group mb-3">
          <input type="text" class="form-control" id="username" required>
          <button  type="submit" class="btn btn-danger" >Comprar</button>
        </div>
      </div>
    </form>
    <table class="table table-striped table-hover p-5 text-center">
      <thead>
        <tr>
          <th scope="col">Imagen</th>
          <th scope="col">Nombre</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Acción</th>
        </tr>
      </thead>
      <tbody id="table_decoration"></tbody>
    </table>

  </div>
</div>