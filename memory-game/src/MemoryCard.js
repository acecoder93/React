import React, { Component } from 'react';
import './MemoryCard.css';



class MemoryCard extends Component{
    constructor(props){
    super(props);
        this.state = {isFlipped:false};



    } // End of Constructor Function
    clickHandler(){
        this.setState({
            isFlipped: !this.state.isFlipped
        }) // End of Set State
    } // End of click Handler

    render(){

        var cardClass = "MemoryCardInner";
		if (this.state.isFlipped) {
		    cardClass += " flipped";
		}
        
        return(
            <div className = "MemoryCard" onClick={(e)=>this.clickHandler(this)}>
                {/* <img alt="test" src="https://media.istockphoto.com/vectors/houston-texas-linear-emblem-design-for-t-shirts-travel-stickers-and-vector-id860711778"></img> */}
                <div className = {cardClass}>
                    <div className = "MemoryCardBack"></div>
                    <div className = "MemoryCardFront">∆</div>
                </div>
            </div>
        )
    }

}

export default MemoryCard;