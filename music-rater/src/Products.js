import React from 'react';
import Product from './Product';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.music = this.myMusic();
        }


    myMusic(){
        return [{   title: "Friday Night Lights",
                artist: "J.Cole",
                rating: "5",
                releaseDate: "",
                description: "Mixtape",
                coverArt: "",
                price: "",
                listNo: "1"
            },
            {   title: "Forrest Hills Drive",
                artist: "J.Cole",
                rating: "4",
                releaseDate: "",
                description: "Album",
                coverArt: "",
                price: "",
                listNo: "2"
            },
            {   title: "Cole World: The Sideline Story",
                artist: "J.Cole",
                rating: "5",
                releaseDate: "",
                description: "album",
                coverArt: "",
                price: "",
                listNo: "3"
            },
            {   title: "Born Sinner",
                artist: "J.Cole",
                rating: "5",
                releaseDate: "",
                description: "mixtape",
                coverArt: "",
                price: "",
                listNo: "4"

            },
            {   title: "KOD",
                artist: "J.Cole",
                rating: "4",
                releaseDate: "2018",
                description: "Album",
                coverArt: "",
                price: "",
                listNo: "5"
            },
            {   title: "4 Your Eyez Only",
                artist: "J.Cole",
                rating: "5",
                releaseDate: "",
                description: "Album",
                coverArt: "",
                price: "",
                listNo: "6"
            }]
    }



    render() {

        const listMusic = this.music.map(item => {
            console.log(item)
            // return <Product key = {item.listNo} data = {item}  />
        });
        return (
            <div>
                {listMusic}
            </div>
            
        );
    }
}


Products.propTypes = {
    
};

export default Products
