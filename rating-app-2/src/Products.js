import React from 'react';
// import PropTypes from 'prop-types';
import Product from './Product';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.store = this.myStore();
    }

    // Function returns array of objects with properties 
    myStore(){
        return [
                {id: 1,
                title: "iPhone XR",
                price: 799,
                brand: "Apple",
                rating: 5,
                description: "The iPhone XR features a precision-machined 7000 Series aerospace-grade aluminum frame that wraps around an all-glass enclosure with the same durable glass used in the iPhone XS. Apple has designed the iPhone XR in six colors: white, black, blue, coral, yellow, and (PRODUCT)RED.",
                image: "https://cdn.macrumors.com/article-new/2018/09/iphonexr.jpg"
                },
                {id: 2,
                title: "Google Pixel 3",
                price: 799,
                brand: "Google",
                rating: 4,
                description: "The Google Pixel 3 is the ideal smartphone for anyone who cares about photo quality and isn’t satisfied with their phone’s picture-taking abilities today. It has the camera smarts and Android Pie-powered AI smarts of the Pixel 3 XL, without the awkward notch cut-out at the top. And, unlike the comparable, one-hand-friendly iPhone XS, it’s cheap – at least by 2018 and 2019 flagship standards.n",
                image: "https://assets.hardwarezone.com/img/2018/10/Google-Pixel-3-hero.jpg"
                },
                {id: 3,
                title: "Samsung Galaxy S9",
                price: 619,
                brand: "Samsung",
                rating: 4,
                description: "",
                image: "https://www.att.com/catalog/en/skus/Samsung/Samsung%20Galaxy%20S9/overview/S8_cut.jpg"
                },
                {id: 4,
                title: "Samsung Galaxy Note 9",
                price: 899,
                brand: "Samsung",
                rating: 5,
                description: "Galaxy Note9 puts powerful technology in the hands of pioneers who demand more. Innovative features and design make it the only phone to keep up with the next generation of achievers.",
                image: "https://cnet3.cbsistatic.com/img/9ZuQOnOyKtMTzVm-GnTVtZwMmds=/2018/08/15/cfdf138b-06fc-42bf-b61f-724f248f05a9/samsung-galaxy-note-9-use-1161.jpg",
                },
                {id: 5,
                title: "OnePlus-6T",
                price: 549,
                brand: "OnePlus",
                rating: 3,
                description: "Featuring our largest display ever and a resilient glass back, the OnePlus 6T was crafted with care and purpose. Experience a 6.41 inch Optic AMOLED display for true immersion through an 86% screen-to-body ratio, beautifully slim cut-out, and more.",
                image: "https://cdn.opstatics.com/store/20170907/assets/images/events/2018/08/6t/specs/specs_banner_01_750.jpg"
                }]
    }




    render() {
        const storeItems = this.store.map(item=>{
            return <Product key = {item.id} data = {item} />
        })



        return (
            <div>
                <li>{storeItems}</li>
            </div>            
        );
    }
}


Products.propTypes = {
    
};

export default Products
