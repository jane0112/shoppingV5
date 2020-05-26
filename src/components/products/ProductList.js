import React from 'react'
import PorductCard from './ProductCard'

class ProductList extends React.Component {
    constructor(props) {
        super(props)
        this.products = [
            {
                id: '1',
                title: 'Apple',
                price: 10,
                img: 'https://i.pinimg.com/564x/60/4a/82/604a82768a91dab6d684b34009f955d7.jpg',
                tags: ['水果'],
                isAvailable: true
            },
            {
                id: '2',
                title: 'Plate',
                price: 60,
                img: 'https://i.pinimg.com/564x/38/d9/40/38d940442ab1d63b8ec2fb4f02252ef6.jpg',
                tags: ['生活用品'],
                isAvailable: true
            },
            {
                id: '3',
                title: 'Pen',
                price: 180,
                img: 'https://i.pinimg.com/474x/ea/d0/48/ead0488575060ad4bc476749ff2ab372.jpg',
                tags: ['文具'],
                isAvailable: true
            },
            {
                id: '4',
                title: 'Umbrella',
                price: 220,
                img: 'https://i.pinimg.com/564x/60/87/c9/6087c9413bf3b09b8d288db970ca3b14.jpg',
                tags: ['生活用品'],
                isAvailable: true
            },
            {
                id: '5',
                title: 'Pillow',
                price: 360,
                img: 'https://i.pinimg.com/564x/73/53/c3/7353c3e8f8fea87e016b5ebcd3b88b54.jpg',
                tags: ['生活用品'],
                isAvailable: true
            },
            {
                id: '6',
                title: 'Mirror',
                price: 360,
                img: 'https://i.pinimg.com/564x/90/85/fc/9085fc877a692f873f98025ed4c2599f.jpg',
                tags: ['生活用品'],
                isAvailable: true
            },
            {
                id: '7',
                title: 'T-shirt',
                price: 400,
                img: 'https://i.pinimg.com/564x/bc/9c/1e/bc9c1e0b42b1dde05b65c20ab2ae30da.jpg',
                tags: ['衣服'],
                isAvailable: true
            },
            {
                id: '8',
                title: 'Bag',
                price: 450,
                img: 'https://i.pinimg.com/564x/d0/9e/f0/d09ef03e2f7f782b09dfcc0f044b1228.jpg',
                tags: ['生活用品'],
                isAvailable: true
            },
            {
                id: '9',
                title: 'Body Lotion',
                price: 520,
                img: 'https://i.pinimg.com/564x/80/e6/73/80e67398cf1293395de3038a789a4a1e.jpg',
                tags: ['藥妝'],
                isAvailable: true
            }
        ];

        //Map all products in productList to turn into PorductCards,and send data inside products to ProductCard
        this.productlist = this.products.map((product) => {
            // console.log(product)
            return <PorductCard key={product.id} title={product.title} price={product.price} image={product.img} addItem={this.props.addItem} />

        })

    }

    render() {
        return (

            <div
                className="product-list"
                style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
            >
                {this.productlist}

            </ div >

        )
    }

}










export default ProductList