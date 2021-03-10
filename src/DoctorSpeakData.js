import React from 'react'
import {Link} from 'react-router-dom'
import flimg1 from '../src/images/doctor1.png';
import flimg2 from '../src/images/doctor2.png';
import flimg3 from '../src/images/doctor3.png';
import flimg4 from '../src/images/doctor4.png';

const DoctorSpeakData = [
    {
        Id: 1,
        imgsrc: flimg1,
        DocName: "Dr. Manisha Ranjan",
        dudocdegree: "MBBS, DGO",
        docarea: "1Gynecologist/Obstetrician",
        link: "/About"
},

{
    Id: 2,
    imgsrc: flimg2,
    DocName: "Dr. Faisal Jalal",
    dudocdegree: "MBBS, DGO",
    docarea: "Gynecologist/Obstetrician",
    link: "/"
},

{
    Id: 3,
    imgsrc: flimg3,
    DocName: "Dr. Ayesha Jalal",
    dudocdegree: "MBBS, DGO",
    docarea: "Gynecologist/Obstetrician",
    link: "/"
},


{
    Id: 4,
    imgsrc: flimg4,
    DocName: "Dr. Zainab",
    dudocdegree: "MBBS, DGO",
    docarea: "Gynecologist/Obstetrician",
    link: "/"
},
{
    Id: 5,
    imgsrc: flimg1,
    DocName: "Dr. Aalif Abbasi",
    dudocdegree: "MBBS, DGO",
    docarea: "Gynecologist/Obstetrician",
    link: "/"
},

{
    Id: 6,
    imgsrc: flimg2,
    DocName: "Dr. Rifa ABbasi",
    dudocdegree: "MBBS, DGO",
    docarea: "Gynecologist/Obstetrician",
    link: "/"
},

{
    Id: 7,
    imgsrc: flimg3,
    DocName: "Dr SD Singh",
    dudocdegree: "MBBS, DGO",
    docarea: "Gynecologist/Obstetrician"   ,
    link: "/"                 
},


{
    Id: 8,
    imgsrc: flimg4,
    DocName: "Dr. Piyush Rana",
    dudocdegree: "MBBS, DGO",
    docarea: "Gynecologist/Obstetrician",
    link: "/"
}
];



const DoctorSpeakBox = (props) => {
    return (
        <>
             <div className="col-12 col-sm-6 col-md-3">
     <div className="doctorbg"><Link to={props.link}><img src={props.imgsrc} title={props.DocName} className="img-fluid" /></Link>
         <div className="aboutdoctor"><Link to={props.link}><h4>{props.DocName}</h4><h5>{props.dudocdegree} <span>|</span>{props.docarea}</h5></Link></div>
                </div>
            
        </div>
        </>
    )
}

export {DoctorSpeakData, DoctorSpeakBox};
