import React from 'react';

const RatingSelector = ({rating, setRating}) => {

    const onRatingSelected = (event) => {
        const rating = +event.currentTarget.value
        setRating(rating);
    }

    return (
        <ul className="rating">
            {Array.from({length : 10}, (_, idx) => (
                <li key={`num-${idx + 1}`}>
                    <input
                        type="radio"
                        id={`num${idx + 1}`}
                        name="rating"
                        value={idx + 1}
                        onChange={onRatingSelected}
                        checked={rating === idx + 1}
                    />
                    <label htmlFor={`num${idx + 1}`}>{idx + 1}</label>
                </li>
            ))}
        </ul>
    )
}

export default RatingSelector
