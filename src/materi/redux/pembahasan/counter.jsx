import { useDispatch, useSelector } from "react-redux";
import { decrementWithCheckingAction, increment } from "../../../app/features/counter/action";

const Counter = () => {
    let {count} = useSelector(state => state.counter)
    const dispatch = useDispatch(); 

    return(
        <div>
            <button onClick={() => dispatch(decrementWithCheckingAction(1))}>-</button>
            {' '}<span>{count}</span>{' '}
            <button onClick={() => dispatch(increment(1))}>+</button>
        </div>
    )
}

export default Counter;