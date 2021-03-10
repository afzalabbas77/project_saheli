import React from 'react';
import FeaturedsData from './FeaturedsData';
import FeaturedContainer from './FeaturedContainer';
import flimg from '../src/images/featured-leadpic.jpg';

const HomeFeatured = () => {
    return (
        <>
            <section className="featured margintop margintopmobile">
    
    <h2>Featured</h2>    
        
    
    <div className="row">
    
        <div className="col-12 col-md-6 mobile-marginbttm30px">
       <div className="bordergray">
            <div className="featuredpic"><img src={flimg} alt="" title="" className="img-fluid" />
            <div className="featured-view"><i className="far fa-eye"></i> 1056</div>
            <div className="featured-time">5:25</div>
            </div>
            <div className="text-featured">
            <h3><a href="#" title="First Time Pregnancy: The Only Guide You Will Need">First Time Pregnancy: The Only Guide You Will Need</a></h3>
            <p>PM Modi also thanked Mulayam Singh Yadav for his blessings from earlier in the day and will now look to get into the election mode</p>
            <h4><i className="fas fa-user-circle"></i> Manupreet Kaur</h4><span>23rd February 2019</span>
            </div>
            </div>
            
        </div>
        
        <div className="col-12 col-md-6">
        
        <div className="row">
       
             
            {FeaturedsData.map((val, ind) => {
                return <FeaturedContainer key={ind} Id={val.Id}  imgsrc={val.imgsrc} title={val.title} view={val.view} duration={val.duration} writer={val.writer} date={val.date} />
            }
            )}
  
            
            </div>
        
        </div>
    
    </div>
        
        
        </section>
        </>
    )
}

export default HomeFeatured;
