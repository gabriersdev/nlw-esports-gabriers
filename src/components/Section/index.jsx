import PropTypes from 'prop-types';
import { List } from "../List";
import './index.css'

function Section({ title, legend, className, id }) {
  return (
    <section>
      <div>
        <h2>{title}</h2>
        <p>{legend}</p>
        <List
          id={id}
          className={className}
        />
      </div>
    </section>
  )
}

Section.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number,
  legend: PropTypes.string,
};

export { Section }