
import React from 'react'
import {Link} from 'react-router-dom'


const FeaturedContainer = (props) => {
    return (
        <>
        <div className="col-12 col-md-6">
       <div className="bordergray featuredminlead">
            <div className="featuredpic"><img src={props.imgsrc} alt={props.title} className="img-fluid" />
            <div className="featured-view"><i className="far fa-eye"></i> {props.view}</div>
            <div className="featured-time">{props.duration}</div>
            </div>
            <div className="text-featured">
            <h3><Link to="#" title={props.title}>{props.title}</Link></h3>
            
            <h4>{props.writer}</h4><span>{props.date}</span>
            </div>
            </div>
            
        </div> 
        </>
    )
}

export default FeaturedContainer;
