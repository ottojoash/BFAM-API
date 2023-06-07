import React, { Component } from 'react';
import '../style/style.css';


class ProductsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      name: '',
      price: '',
      quantity: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  addProduct = (event) => {
    event.preventDefault();
    const { name, price, quantity } = this.state;

    const newProduct = {
      name: name,
      price: price,
      quantity: quantity,
    };

    this.setState((prevState) => ({
      products: [...prevState.products, newProduct],
      name: '',
      price: '',
      quantity: '',
    }));
  };

  render() {
    const { products, name, price, quantity } = this.state;

    return (
      <div className="products-page"> {/* Add the CSS class here */}
        <h1 className="page-title">Welcome to the Farmers' Products Page</h1>
        <form onSubmit={this.addProduct} className="product-form">
          <label className="input-label">
            Product Name:
            <input type="text" name="name" value={name} onChange={this.handleInputChange} required className="input-field" />
          </label>
          <br />
          <label className="input-label">
            Price:
            <input
              type="number"
              name="price"
              value={price}
              step="0.01"
              onChange={this.handleInputChange}
              required
              className="input-field"
            />
          </label>
          <br />
          <label className="input-label">
            Quantity:
            <input
              type="number"
              name="quantity"
              value={quantity}
              onChange={this.handleInputChange}
              required
              className="input-field"
            />
          </label>
          <br />
          <button type="submit" className="submit-button">Add Product</button>
        </form>
        <div>
          <h2 className="products-heading">Products:</h2>
          {products.length === 0 ? (
            <p className="no-products">No products available.</p>
          ) : (
            <table className="products-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    );
  }
}

export default ProductsPage;
