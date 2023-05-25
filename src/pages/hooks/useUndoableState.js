import { useMemo, useState } from "react";
import isEqual from "lodash/isEqual";
import debounce from "lodash/debounce";

const useUndoableState = (init, debouncePeriod) => {
    const [index, setIndex] = useState(0);
    const [state, setRawState] = useState(init);
    const [states, setStates] = useState([init]);

    const debounceSetState = useMemo(
        () =>
            debounce((value) => {
                const copy = [...states];
                copy.length = index + 1;
                copy.push(value);
                setStates(copy);
                setIndex(copy.length - 1);
            }, debouncePeriod ?? 500),
        [states, index]
    );

    const setState = (value) => {
        if (isEqual(state, value)) {
            return;
        }
        setRawState(value);
        debounceSetState(value);
    }

    const resetState = (init) => {
        setIndex(0);
        setRawState(init);
        setStates([init]);
    }

    const goBack = (steps = 1) => {
        console.log(state);
        const newIndex = Math.max(0, Number(index) - (Number(steps) || 1));
        setIndex(newIndex);
        setRawState(states[newIndex]);
    }

    const goForward = (steps = 1) => {
        const newIndex = Math.min(
            states.length - 1,
            Number(index) + (Number(steps) || 1)
        );
        setIndex(newIndex);
        setRawState(states[newIndex]);
    }

    return {
        state,
        setState,
        resetState,
        index,
        lastIndex: states.length - 1,
        goBack,
        goForward
    }
}

export default useUndoableState;