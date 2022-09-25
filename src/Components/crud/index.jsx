import React, { Component } from "react";
import './style.css'
class Crud extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            AddName: "",
            selected: {}
        }
    }
    render() {
        let OnUpdate = (selected) => {
            this.setState({ selected })
        }
        let OnUpdateCancel = () =>{
            this.setState({ selected: null })
        }
        // let onChangeValue = ({target:{value}}) => {
        //     this.setState({selected: {...this.state.selected, name: value}})
        // }
        let OnUpdateSave = () =>{

        }
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
                                {this.state.selected?.id == value.id ?
                                    <input type="text" onChange={onChangeValue} value={this.state.selected.name} />
                                    : value.name
                                }
                            </div>
                            <div className="user-controls">
                                {this.state.selected?.id == value.id ?
                                    <>
                                        <button>Save</button>
                                        <button onClick={OnUpdateCancel}>Cancel</button>
                                    </>
                                    :
                                    <>
                                        <button onClick={() => this.props.deleteUser(value.id)}>Delete</button>
                                        <button onClick={() => OnUpdate(value)}>Edit</button>
                                    </>
                                }
                            </div>
                        </div>))}

                </div>
            </div>
        )
    }
}


export default Crud;