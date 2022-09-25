import React, { Component } from "react";
import Navbar from "../../Components/navbar";
import Crud from "../../Components/crud";
class MainPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    name: "Abdulaziz",
                    controls: false,

                },
                {
                    id: 2,
                    name: "Azizbek",
                    controls: false,

                },
                {
                    id: 3,
                    name: "Hojiakbar",
                    controls: false,
                },
                {
                    id: 4,
                    name: "Abdurahmon",
                    controls: false,
                },
                {
                    id: 5,
                    name: "Shoaziz",
                    controls: false,
                },
                {
                    id: 6,
                    name: "Asilbek",
                    controls: false,
                },
                {
                    id: 7,
                    name: "Sardor",
                    controls: false,
                },
                {
                    id: 8,
                    name: "Sobirjon",
                    controls: false,
                },
                {
                    id: 9,
                    name: "Odina",
                    controls: false,
                },
                {
                    id: 10,
                    name: "Ruqayya",
                    controls: false,
                },
            ],
        }
    }
    render() {
        return (
            <div>
                <Crud  data={this.state.data}></Crud>
            </div>
        )
    }
}


export default MainPage;