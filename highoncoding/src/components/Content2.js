import React, { Component } from 'react'

export default class Content3 extends Component {
    constructor(props){
        super(props)
        this.state = {
            comments: 0,
            likes: 0,
        }
    }

    commentClick(){
        this.setState({
            comments: this.state.comments + 1
        })
    }

    likeClick(){
        this.setState({
            likes: this.state.likes + 1
        })
    }


  render() {
    return (
        <div>
            <h3>Hello WatchKit</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <div>
                <button onClick={(e)=>this.commentClick(this)}>{this.state.comments} comments</button>
                <button onClick={(e)=>this.likeClick(this)}>{this.state.likes} likes</button>
            </div>
        </div>
    )
  }
}
