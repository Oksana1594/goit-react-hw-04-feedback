import PropTypes from 'prop-types';
import Button from "../../../shared/Button/Button";

const FeedbackOptions = ({leaveFeedback, options}) => 
{
    const elements = options.map(name =>
        <div key={name}>
        <Button onClick={() => leaveFeedback(name)} type="button">{name}</Button>
        </div>)
   return (
        <>
           {elements}
        </>
    )
}


FeedbackOptions.propTypes= {
   options: PropTypes.arrayOf(PropTypes.string).isRequired,
   leaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;