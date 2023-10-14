import React from 'react'
import { tours } from '../Data'

const Tours = () => {
  return (
    <section className="section" id="tours">
    <div className="section-title">
      <h2>featured <span>tours</span></h2>
    </div>

    <div className="section-center featured-center">
      {tours.map((tour)=>{
        const{id,image,date,title,text,location,duration,cost}=tour
        return(
          <article className="tour-card">
          <div className="tour-img-container">
            <img src={image}className="tour-img" alt={title} />
            <p className={id}>{date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{title}</h4>
            </div>
        
            {text}
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> {location}
              </p>
              <p>{duration}</p>
              <p>from ${cost}</p>
            </div>
          </div>
        </article>

        );
      })}
    </div>
  </section>
  )
}

export default Tours