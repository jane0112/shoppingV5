import React from 'react'
import './ProductCard.css'

class ProductCard extends React.Component {

    constructor(props) {
        super(props)
        this.state = { amount: '' }
    }

    // to setState when the value of input change
    onInputChange = (e) => {
        this.setState({ amount: e.target.value })
    }

    //When the form submit,the selected product will be send to the callback function addItem(). 
    onFormSubmit = event => {
        event.preventDefault()
        // console.log(this)
        const Selectedproduct = {
            // id: this.props.id,
            title: this.props.title,
            price: this.props.price,
            amount: parseInt(this.state.amount),
            createdAt: new Date().getTime()
        }
        this.props.addItem(Selectedproduct)

        //after formSubmit, value(amount) show nothing on the productCard
        this.setState({ amount: '' })



    }







    render() {

        return (

            <div className="card">
                < div >
                    <a href="/" className="cardLink" >
                        < img src={this.props.image} style={{ width: '100%' }} alt="product" />
                    </a>
                </div >
                <div className="productContent">
                    <h2>{this.props.title}</h2>
                    <h3> NT${this.props.price}</h3>
                </div>
                <form className="productForm" onSubmit={this.onFormSubmit}>
                    <input
                        className="productInput"
                        type="number" min="1" max="10"
                        value={this.state.amount}
                        onChange={this.onInputChange}
                        required />
                    <button
                        className="addBtn"
                        style={{ display: 'block' }}
                        onClick={this.onSubmit}
                    >
                        BUY
                        {/* <i className="fas fa-shopping-cart"></i> */}
                    </button>
                </form>

            </div >

        )

    }

}


export default ProductCard
