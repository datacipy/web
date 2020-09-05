let checkbox = (label, value) => `<div class="col-md-6">
<div class="form-check">
  <input
    class="form-check-input"
    type="checkbox"
    value="${value}"
    id="${value}"
  />
  <label class="form-check-label" for="${value}">
    ${label}
  </label>
</div>
</div>`

module.exports = checkbox