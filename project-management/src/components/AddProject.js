import React from 'react';
import uuid from 'uuid';

class AddProject extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            newProject: []
        }

        
    }

    static defaultProps = {
        categories: ["Front-End", "Full-Stack", "React-Redux"]

    }


    handleSubmit(e){

        if(this.refs.title.value === ""){
            alert('Title is required');
        } else{
            this.setState({
                newProject: {
                    id: uuid.v4(),
                    title: this.refs.title.value,
                    category: this.refs.category.value
                }
            }, ()=>{
                console.log(this.state)
                this.props.addProject(this.state.newProject)
            })
        }
        e.preventDefault();

    }
    

    render() {
        let categoryOptions = this.props.categories.map(cat=>{
            return <option key={cat} value={cat}>{cat}</option>

        })



        return (
            <div>
                <h3>Add Project</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Title</label><br />
                        <input ref="title" type="text" />
                    </div>
                    <div>
                        <label>Category</label><br />
                        <select ref="category">
                            {categoryOptions}
                        </select>
                    </div>
                    <button type="submit" value="Submit">Submit</button>
                </form>
            </div>
            
        );
    }
}




export default AddProject
