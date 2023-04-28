import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    const items = data.map(item => {
        return (          
                <Card
                key={item.id}
                {...item}
                />      
            
        )
    })
    
    return (
        <div className="log">
            <Navbar />
                <div className="content">
                {items}                
                </div>      
        </div>
    )
}