import { useEffect, useState } from 'react'
const PawsRatingInput = ({ rating, disabled, onChange }) => {

  const [activeRating, setActiveRating] = useState(rating);

  useEffect(() => {
    setActiveRating(rating);
  }, [rating])

  const onMouseLeave = () => {
    setActiveRating(rating);
  }

  return (
    <>
      <input
        type="number"
        disabled={disabled}
        value={rating}
        onChange={onChange}

      />
      <div className="rating-input">
        <div className={activeRating >= 1 ? "filled" : "empty"}
          onMouseEnter={!disabled ? () => { setActiveRating(1) } : null}
          onMouseLeave={!disabled ?  onMouseLeave : null }
          onClick={!disabled ? (() => onChange(1)) : null}

        >
          <i className="fa fa-paw"></i>
        </div>
        <div className={activeRating >= 2 ? "filled" : "empty"}
          onMouseEnter={!disabled ? () => { setActiveRating(2) } : null}
          onMouseLeave={ onMouseLeave }
          onClick={!disabled ? (() => onChange(2)) : null}


        >
          <i className="fa fa-paw"></i>
        </div>
        <div className={activeRating >= 3 ? "filled" : "empty"}
          onMouseEnter={!disabled ? () => { setActiveRating(3) } : null}
          onMouseLeave={ onMouseLeave }
          onClick={!disabled ? (() => onChange(3)) : null}


        >
          <i className="fa fa-paw"></i>
        </div>
        <div className={activeRating >= 4 ? "filled" : "empty"}
          onMouseEnter={!disabled ? () => { setActiveRating(4) } : null}
          onMouseLeave={ onMouseLeave }
          onClick={!disabled ? (() => onChange(4)) : null}


        >
          <i className="fa fa-paw"></i>
        </div>
        <div className={activeRating >= 5 ? "filled" : "empty"}
          onMouseEnter={!disabled ? () => { setActiveRating(5) } : null}
          onMouseLeave={ onMouseLeave }
          onClick={!disabled ? (() => onChange(5)) : null}


        >
          <i className="fa fa-paw"></i>
        </div>
      </div>
    </>
  );
};

export default PawsRatingInput;
