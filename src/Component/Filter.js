import React from 'react'

function Filter({applyFilter}) {
  
  return (
    <div className="product-header">
            <h4 className="product-title">Products</h4>
            <button
              className="product-btn"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              {" "}
              <i className="bi bi-funnel-fill"></i>Filter
            </button>

            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div className="offcanvas-header">
                <h5 id="offcanvasRightLabel">Filter</h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <h6>Price</h6>
                <div className="price-range">
                  <input type="number" placeholder="min" id="filter-min" />
                  -
                  <input type="number" placeholder="max" id="filter-max" />
                </div>

                <h6>Date</h6>
                <input className="date-input" type="date" placeholder="dd-mm-yyyy" />

                <h6>Category</h6>
                <select id="filter-select" className="category-select">
                  <option value=""></option>
                  <option value="laptop">Laptop</option>
                  <option value="mobile">Mobile</option>
                  <option value="keyboard">Keyboard</option>
                  <option value="headseat">Headset</option>
                  <option value="watch">Watch</option>
                </select>

                <div className="filter-btn">
                  <button className=" filter-cancel" data-bs-dismiss="offcanvas" aria-label="Close">
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      applyFilter();
                    }}
                    className="filter-apply"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Filter