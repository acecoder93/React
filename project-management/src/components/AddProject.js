import React from 'react';

class AddProject extends React.Component {
    constructor(props) {
        super(props);
        
    }

    static defaultProps = {
        categories: ["Front-End", "Full-Stack", "React-Redux"]

    }

    render() {
        let categoryOptions = this.props.categories.map(cat=>{
            return <option key={cat} value={cat}>{cat}</option>

        })



        return (
            <div>
                <h3>Add Project</h3>
                <form onSubmit={}>
                    <div>
                        <label>Title</label><br />
                        <input type="text" />
                    </div>
                    <div>
                        <label>Category</label><br />
                        <select>
                            {categoryOptions}
                        </select>
                    </div>
                </form>
            </div>
            
        );
    }
}




export default AddProject
