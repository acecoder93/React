import React from 'react';
import { Link } from 'react-router-dom';
class BaseLayout extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <td style={{width: 300}}>
                            Menu Items
                            <ul>
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        Content
                        {this.props.children}

                        </td>
                    </tr>
                </table>
            </div>
            
        );
    }
}




export default BaseLayout
