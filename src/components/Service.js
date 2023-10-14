import React from 'react'
import Title from './Title'
import { services} from '../Data'
const Service = () => {
  return (
    <section className="service" id="service">
      <Title title = 'our' subTitle='service' />
    <div className="section-center service-center">
      {services.map((service)=>{
        const {id,icon,title,text}=service
        return(
          <article className="service" key={id}> 
          <span className="service-icon"><i className={icon}></i></span>
          <div className="service-info">
            <h4 className="service-title">{title}</h4>
            <p className="service-text"> {text }
            </p>
          </div>
        </article>

        );

      }
      )}
    
    </div>
  </section>

  )
}

export default Service