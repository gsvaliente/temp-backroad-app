import { serviceLinks } from '../data';
import Service from './Service';
import Title from './Title';

function Services() {
  return (
    <section className="section services" id="services">
      <Title title="our" subtitle="services" />

      <div className="section-center services-center">
        {serviceLinks.map((service) => {
          // const { id, icon, title, text } = service;
          return <Service key={service.id} {...service} />;
          // <article className="service" key={id}>
          //   <span className="service-icon">
          //     <i className={icon}></i>
          //   </span>
          //   <div className="service-info">
          //     <h4 className="service-title">{title}</h4>
          //     <p className="service-text">{text}</p>
          //   </div>
          // </article>
        })}
      </div>
    </section>
  );
}
export default Services;
