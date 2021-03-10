import React from 'react';
import imgone from '../src/images/all-about-pregnancy.jpg';
import imgtwo from '../src/images/all-about-doctor.jpg';
import imgthree from '../src/images/all-about-smile.jpg';


const TopVideosData = [
    {
        Id: 11,
        imgsrc: imgone,
        title: "ALL ABOUT",
        titspan: "PREGNANCY",
        button: "Watch Videos",
        link: "/Pregnancy",
        target: "_blank"
},

{
    Id: 12,
    imgsrc: imgtwo,
    title: "ALL ABOUT",
    titspan: "Smile Please",
    button: "Watch Videos",
    link: "/SmilePlease",
    target: "_blank"
},

{
    Id: 13,
    imgsrc: imgthree,
    title: "ALL ABOUT",
    titspan: "DOCTOR SPEAK",
    button: "Watch Videos",
    link: "/DoctorSpeak",
    target: "_blank"
}
];

const TopVideo = (props) => {
    return (
        <>
        <div className="col-4">
             <div className="prgnancybox ">
                <img src={props.imgsrc} alt={`${props.title} ${props.titspan}`} />
                <div className="prgnancybox-content align-middle">
                     <h3 className="prgnancytitle">{props.title} <span>{props.titspan} </span></h3>
                    <span className="prgnancypost"><a href={props.link} title={props.button}> {props.button} 
                    <i className="fas fa-caret-right"></i></a></span>
                </div>
                
            </div>
    </div> 
        </>
    )
}

export {TopVideosData, TopVideo} ;
