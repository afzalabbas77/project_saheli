import React from 'react';
import {Link} from 'react-router-dom';
import {DoctorSpeakData, DoctorSpeakBox} from './DoctorSpeakData';

const DoctorSpeak = () => {
    return (
        <>
            <section className="morevideo-article mrgntop40px container">
            <div className="headingbox">
               
               <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
    <li className="breadcrumb-item active" aria-current="page">Doctor Speak</li>
  </ol>
</nav>
             <h1>Doctor Speak</h1>
               </div>
               <div className="row doctorspeakbox">

                {
                    DoctorSpeakData.map((val, ind) =>{
                        return  <DoctorSpeakBox key={ind} id={val.Id} imgsrc={val.imgsrc} DocName={val.DocName} dudocdegree={val.dudocdegree} docarea={val.docarea} link={val.link} />
                    }
                    )
                }

               </div>
            </section>
        </>
    )
}

export default DoctorSpeak;
