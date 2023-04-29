import React from "react"

export default function Card(props) {
return (          
    <div className="card">
        <img src={props.imageUrl} className="location--img"/>
        <div className="card--details">
            <img src="../images/pin.png" className="pin--logo" />
            <span className="card--location">{props.location} </span>
            <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
            <div className="card--title">{props.title}</div>
            <div className="card--date">{props.startDate} - {props.endDate}</div>
            <div className="card--info">{props.description}</div>
        </div>
    </div>
    )
}