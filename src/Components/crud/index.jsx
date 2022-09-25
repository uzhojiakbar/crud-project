import React, { Component } from "react";
import './style.css';
import Navbar from "../navbar";
class Crud extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            AddName: "",
            selected: {},
            searchingText: ''
        }
    }
    render() {
        let OnUpdate = (selected) => {
            this.setState({ selected })
        }
        let OnUpdateCancel = () => {
            this.setState({ selected: null })
        }
        let onChangeValue = (value) => {
            // this.setState({selected: {...this.state.selected, name: value}})
            this.setState((state) => { return { selected: { ...state.selected, name: value } } })
        }
        let OnUpdateSave = () => {
            let save = this.state.data.map(value => value.id == this.state.selected.id ? value = this.state.selected : value)
            this.setState({ data: save, selected: null })
            console.log(this.state.selected.name);
        }
        let deleteUser = (id) => {
            let Users = this.state.data.filter((value, index) => value.id !== id)
            this.setState({ data: Users })
        }
        let FilterFunc = (searchText) => {
            this.setState({ searchingText: searchText })
        }
        let AddUser = (AddText) => {
            let UsersAdd = {
                id: this.state.data.length + 1,
                name: AddText,
                controls: false,
            }
            this.setState({ data: [...this.state.data, UsersAdd] })
        }
        return (
            <>
                <Navbar SearchName={FilterFunc} AddUser={AddUser} ></Navbar>
                <div className="crud">
                    <div className="crud-main">
                        <div className="usertitle">
                            <div className="id-title">№</div>
                            <div className="name-title">Name</div>
                            <div className="controls-title">Controls</div>
                        </div>
                        {this.state.data.map((value, index) => value.name.toLowerCase().includes(this.state.searchingText.toLowerCase()) && (
                            <div key={value.id} className="user">
                                <div className="userid">
                                    {index + 1}
                                </div>
                                <div className="username">
                                    {this.state.selected?.id == value.id ?
                                        <input type="text" onChange={(e) => onChangeValue(e.target.value)} value={this.state.selected.name} />
                                        : value.name
                                    }
                                </div>
                                <div className="user-controls">
                                    {this.state.selected?.id == value.id ?
                                        <>
                                            <button onClick={OnUpdateSave}>Save</button>
                                            <button onClick={OnUpdateCancel}>Cancel</button>
                                        </>
                                        :
                                        <>
                                            <button onClick={() => deleteUser(value.id)}>Delete</button>
                                            <button onClick={() => OnUpdate(value)}>Edit</button>
                                        </>
                                    }
                                </div>
                            </div>))
                        }

                    </div>
                </div>
            </>

        )
    }
}


export default Crud;