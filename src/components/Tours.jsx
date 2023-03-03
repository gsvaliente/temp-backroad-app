import { tours } from '../data';
import Title from './Title';
import Tour from './Tour';

function Tours() {
  return (
    <section className="section" id="tours">
      <Title title="featured" subtitle="tours" />
      <div className="section-center featured-center">
        {tours.map((tour) => {
          // const { id, img, date, title, info, country, duration, price } = tour;
          return (
            <Tour key={tour.id} {...tour} />
            // <article className="tour-card" key={id}>
            //   <div className="tour-img-container">
            //     <img src={img} className="tour-img" alt="" />
            //     <p className="tour-date">{date}</p>
            //   </div>
            //   <div className="tour-info">
            //     <div className="tour-title">
            //       <h4>{title}</h4>
            //     </div>
            //     <p>{info}</p>
            //     <div className="tour-footer">
            //       <p>
            //         <span>
            //           <i className="fas fa-map"></i>
            //         </span>{' '}
            //         {country}
            //       </p>
            //       <p>{duration}</p>
            //       <p>{price}</p>
            //     </div>
            //   </div>
            // </article>
          );
        })}
      </div>
    </section>
  );
}
export default Tours;
