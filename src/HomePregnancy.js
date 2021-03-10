import React from 'react';
import{PregnancyData, PregnancyMaps} from './PregnancyData';

const HomePregnancy = () => {
    return (
        <>
        <section className="featured Pregnancy margintop">
         <h2>Pregnancy</h2>
         <div className="row">
            
         {
            PregnancyData.map((val, ind) => {
                     return <PregnancyMaps key={ind} Id={val.Id} imgsrc={val.imgsrc} title={val.title} view={val.view} duration={val.duration} writer={val.writer} date={val.date}  />
                            })
                     }
            
            </div>
            </section>
        </>
    )
}

export default HomePregnancy;
