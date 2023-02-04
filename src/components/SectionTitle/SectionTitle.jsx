import styles from './sectionTitle.module.css'
import PropTypes from "prop-types";

const SectionTitle = ({ children, title }) => {
    return (
     <div>
     <h2 className={styles.title}>{title}</h2>
     {children}
     </div>
)
}

export default SectionTitle;

SectionTitle.prototypes = {
   title: PropTypes.string.isRequired,
   children: PropTypes.element.isRequired
}