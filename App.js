import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Divider from "./components/Divider"
import data from "./data"

export default function App() {
        const items = data.map((item, index) => (
                <React.Fragment key={index}>
                    <Card {...item}/>
                    <Divider />
                </React.Fragment>
        ))
    
    return (
        <div className="travel-log">
            <Navbar />
                <div className="content">
                {items}                
                </div>      
        </div>
    )
}