
import propTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ options, onClick }) => (
    <div>
        {options.map((option, index) => (
            <button
                key={index}
                onClick={() => onClick(option)}
                className={css.feedbackbtn}
            >
                {option}
            </button>
        ))}
    </div>
)

FeedbackOptions.propTypes = {
    options: propTypes.arrayOf(propTypes.string).isRequired,
    onClick: propTypes.func.isRequired,
}