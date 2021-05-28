import React from "react";
import withLayout from "../../hoc/withLayout";

import NewProductForm from "../../components/NewProductForm";

/**
 * Remove the following components from the component:
 * 1. fragment
 * 2. <AppHeader />
 * 3. <Main />
 * 4. <Footer />
 */
function NewProduct({ saveNewProduct }) {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col col-8">
          <div className="row">
            <header className="col col-12">
              <h1>New product</h1>
            </header>
            <div className="col col-12">
              <hr />
            </div>

            <div className="col col-12">
              <NewProductForm saveNewProduct={saveNewProduct} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withLayout(NewProduct);
