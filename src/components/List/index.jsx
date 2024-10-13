import ProtoTypes from 'prop-types';
import { sections } from '../../data'
import './index.css'

function List({ className, id }) {
  return (
    <ul className={className}>
      {
        sections[id].listItems.filter((e) => e.visible === undefined || e.visible === true).sort((a, b) => a.title ? a.title.localeCompare(b.title) : a.alt.localeCompare(b.alt)).map((item, index) => {
          return (
            <li
              key={index}
              data-toggle="tooltip"
              data-placement="top"
              data-bs-custom-class="custom-tooltip"
              title={item.title === undefined ? item.alt : item.title}
            >
              <a
                target="_blank"
                rel="noreferrer noopener"
                href={item.link}>
                <img src={item.img}
                  alt={item.alt}
                />
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}

List.propTypes = {
  className: ProtoTypes.string,
  id: ProtoTypes.number
}

export { List }