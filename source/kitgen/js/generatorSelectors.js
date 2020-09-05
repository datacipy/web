const options = (label, value) => `<option value="${value}">${label}</option>`

let checkbox = (label, values) => `<div class="col-12">
<div class="form-group">
  <label for="inputState">${label}</label>
  <select id="inputState" class="form-control">
  ${values.map(q=>options(q[0],q[1])).join("\n")}

  </select>
</div>
</div>`

module.exports = checkbox