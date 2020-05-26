import React from 'react';
import Jumbotron from './jumbotron/Jumbotron';
import Navbar from './navbar/Navbar'
import ProductList from './products/ProductList'
import './App.css'
import axios from 'axios'

class App extends React.Component {
    constructor() {
        super()
        this.refreshJWT_backend()
        this.state = {
            selectedProducts: [],
            total: 0,
            count: 0,
            show: 'none',
            username: '',
            isLoggedIn: true
        }
        //check if log in or not
        this.loadEntrys_backend()
    }

    //refresh token
    refreshJWT_backend = () => {
        var formdata = new FormData();
        formdata.append("refresh", window.localStorage.getItem('refresh_token'));
        axios({
            method: 'post',
            url: 'https://djangorest-277405.uc.r.appspot.com/auth/jwt/refresh/',
            data: formdata,
            headers: { 'Content-Type': 'multipart/form-data' }
        }).then((result) => {
            // console.log(result.data)
            window.localStorage.setItem('jwt_token', result.data.access)

        }).catch(err => {
            // console.log('refresh fail!!')
            this.setState({ isLoggedIn: false })
        })
    }

    //load user's cart data from backend
    loadEntrys_backend = () => {
        axios({
            method: 'get',
            url: 'https://djangorest-277405.uc.r.appspot.com/auth/users/me/',
            headers: {
                "Authorization": "Bearer " + window.localStorage.getItem('jwt_token')
            }
        })
            .then((response) => {
                //handle success
                this.setState({
                    selectedProducts: response.data.cart.entrys.map((entry) => {
                        return {
                            title: entry.product.name,
                            price: entry.product.cost,
                            amount: entry.quantity,
                            id: entry.id
                        }
                    }),
                    username: response.data.username,
                    total: response.data.cart.total,
                    count: response.data.cart.count

                })

            })
            .catch(response => {
                //handle error
                // console.log(response);
                alert('請登入')
                window.location.hash = "/login"
                this.setState({ isLoggedIn: false })
            });
    }

    // add item at frontend
    addItem = (product) => {
        console.log(product)
        if (product.amount > 0) {
            var newArray = this.state.selectedProducts;
            var cartWithoutProduct = true
            for (let i = 0; i < newArray.length; i++) {
                if (newArray[i].title === product.title) {
                    newArray[i].amount += product.amount
                    cartWithoutProduct = false
                    this.updateEntry(newArray[i])
                    this.setState({
                        selectedProducts: newArray,
                        count: this.state.count + product.amount
                    })
                    this.checkOut(newArray);
                    break
                }
            }
            if (cartWithoutProduct) {
                this.addEntry_backend(product, newArray)
            }
        }

    }

    // add item to backend
    addEntry_backend = (product, newArray) => {
        var form = new FormData();
        form.append("productname", product.title);
        form.append("productcost", product.price);
        form.append("quantity", product.amount);
        axios({
            method: 'post',
            data: form,
            url: 'https://djangorest-277405.uc.r.appspot.com/api/entrys/',
            headers: {
                "Authorization": "Bearer " + window.localStorage.getItem('jwt_token')
            }
        })
            .then(response => {
                //handle success
                //console.log(response);
                product.id = response.data.id
                newArray.push(product)
                this.setState({
                    selectedProducts: newArray,
                    count: this.state.count + product.amount
                })
                this.checkOut(newArray);
                // console.log(newArray)
            })
            .catch(response => {
                //handle error
                console.log(response);
            });
    }



    updateEntry = (product) => {
        var form = new FormData();
        var entry_id = product.id
        form.append('quantity', product.amount)
        // console.log(entry_id)
        axios({
            method: 'put',
            data: form,
            url: `https://djangorest-277405.uc.r.appspot.com/api/entrys/${entry_id}/`,
            headers: {
                "Authorization": "Bearer " + window.localStorage.getItem('jwt_token')
            }
        })
            .then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err.response.data)
            })
    }

    //delete product at frontend
    deleteProduct = (i) => {
        return () => {
            const newArray = this.state.selectedProducts;
            this.deleteEntry_backend(newArray[i].id)
            const deleteProductAmount = newArray[i].amount
            newArray.splice(i, 1);
            this.setState({
                selectedProducts: newArray,
                count: this.state.count - deleteProductAmount
            });
            // console.log(this.state.selectedProducts);
            this.checkOut(newArray)
        }

    }

    //delete product at backend
    deleteEntry_backend = async product_id => {
        await axios({
            method: 'delete',
            url: 'https://djangorest-277405.uc.r.appspot.com/api/entrys/' + product_id + '/',
            headers: {
                "Authorization": "Bearer " + window.localStorage.getItem('jwt_token')
            }
        })
    }

    checkOut = (arr) => {
        var total_new = arr.reduce(
            (accumulator, p) => {
                return p.price * p.amount + accumulator
            },
            0
        )
        this.setState({ total: total_new })
    }

    closeModal = () => {
        this.setState({ show: 'none' })
    }

    swapModal = () => {
        this.setState({ show: this.state.show === 'block' ? 'none' : 'block' })
    }

    render() {
        return (
            <div>
                <Navbar productAmount={this.state.count} swapModal={this.swapModal} username={this.state.username} isLoggedIn={this.state.isLoggedIn} />
                <Jumbotron />
                <ProductList addItem={this.addItem} />
                <div className="modal" style={{ display: this.state.show }}>
                    <span className="closebtn" onClick={this.closeModal}>&times;</span>
                    <table className="shoppingCart">
                        <thead>
                            <tr>
                                <td>商品</td>
                                <td>數量</td>
                                <td>價錢</td>
                            </tr>
                        </thead>
                        <tbody id="i">
                            {this.state.selectedProducts.map((p, idx) => (
                                <tr key={idx} >
                                    <td>
                                        <span className="deleteBtn" onClick={this.deleteProduct(idx)}>
                                            <i className="fas fa-minus"></i>
                                        </span>
                                        {p.title}
                                    </td>
                                    <td>{p.amount}</td>
                                    <td>{p.price}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="2" >
                                    總計
                                </td>
                                <td>
                                    NTD {this.state.total}
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                    <button className="close" onClick={this.closeModal}>Close</button>
                </div>
            </div >
        )
    }
}





export default App;
