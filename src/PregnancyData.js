import React from 'react';
import {Link} from 'react-router-dom'
import flimg1 from '../src/images/pregnancyimg1.jpg';
import flimg2 from '../src/images/pregnancyimg2.jpg';
import flimg3 from '../src/images/pregnancyimg3.jpg';
import flimg4 from '../src/images/pregnancyimg4.jpg';
import flimg5 from '../src/images/pregnancyimg5.jpg';
import flimg6 from '../src/images/pregnancyimg6.jpg';

const PregnancyData = [
    {
        Id: 5,
        imgsrc: flimg1,
        title: "Drinking Milk During Pregnancy: What You Need To Know",
        view: 1052,
        duration: 2.58,
        writer: "Manupreet Kaur",
        date: "13th February 2021"
},

{
    Id: 6,
    imgsrc: flimg2,
    title: "What You Need To Know About Headaches During Pregnancy",
    view: 57,
    duration: 3.58,
    writer: "Raj Khurana",
    date: "21rd February 2021"
},

{
    Id: 7,
    imgsrc: flimg3,
    title: "Is It Safe To Eat Pineapple When You Are Pregnant?",
    view: 152,
    duration: 2.18,
    writer: "Vinay Rajput",
    date: "23rd February 2021"
},

,


{
    Id: 8,
    imgsrc: flimg4,
    title: "25 Early Pregnancy Symptoms You Need To Watch Out For",
    view: 200,
    duration: 5.25,
    writer: "Sanjay Rawat",
    date: "23rd February 2021"
}

,


{
    Id: 9,
    imgsrc: flimg5,
    title: "20 Vegetables You Should Avoid During Pregnancy And Why",
    view: 200,
    duration: 5.25,
    writer: "Hapreet Kaur",
    date: "3rd February 2021"
},


{
    Id: 10,
    imgsrc: flimg6,
    title: "What Causes Constipation In Pregnancy And How To Relieve It",
    view: 200,
    duration: 5.25,
    writer: "Daljeet Singh",
    date: "23rd February 2021"
}
];


const PregnancyMaps = (props) => {
    return (
        
        <>
        <div className="col-12 col-md-4">
       <div className="bordergray featuredminlead">
            <div className="featuredpic"><img src={props.imgsrc} alt={props.title} className="img-fluid" />
            <div className="featured-view"><i className="far fa-eye"></i> {props.view}</div>
            <div className="featured-time">{props.duration}</div>
            </div>
            <div className="text-featured">
            <h3><Link to="/" title={props.title}>{props.title}</Link></h3>
            
            <h4>{props.writer}</h4><span>{props.date}</span>
            </div>
            </div>
            
        </div> 
        </>
            
      
    )
}

export{PregnancyData, PregnancyMaps} ;
