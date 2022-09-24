import React, { Component } from "react";
import './style.css'
class Crud extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            AddName: ""
        }
    }
    render() {

        return (
            <div className="crud">
                <div className="crud-main">
                    <div className="usertitle">
                        <div className="id-title">№</div>
                        <div className="name-title">Name</div>
                        <div className="controls-title">Controls</div>
                    </div>
                    {this.props.data.map((value, index) => value.name.toLowerCase().includes(this.props.FilterTextFuncNav.toLowerCase()) && (
                        <div key={value.id} className="user">
                            <div className="userid">
                                {index + 1}
                            </div>
                            <div className="username">
                                {value.name}
                            </div>
                            <div className="user-controls">
                                <button onClick={() => this.props.deleteUser(value.id)}>
                                    Delete
                                </button>
                                <button>
                                    Edit
                                </button>
                            </div>
                        </div>))}

                </div>
            </div>
        )
    }
}


export default Crud;