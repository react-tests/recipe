import { useEffect, useReducer } from "react";

function fetchReducer(state, action) {
  switch (action.type) {
    case "fetch":
      return {
        ...state,
        loading: true,
      };
    case "success":
      return {
        ...state,
        data: action.res,
        loading: false,
        error: null,
      };
    case "error":
      return {
        ...state,
        error: "Unexpected Server Error!",
        loading: false,
      };
    default:
      throw new Error("Session expired");
  }
}

const useFetch = (func) => {
  const [state, dispatch] = useReducer(fetchReducer, {
    data: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      try {
        dispatch({ type: "fetch" });
        const res = await func;
        if (mounted) {
          dispatch({ type: "success", res });
        }
      } catch (error) {
        if (error && error.status === 401) {
          dispatch({ type: "error" });
        } else {
          dispatch({ type: "error" });
        }
      }
    };
    fetchData();
    return () => (mounted = false);
  }, []);

  return { loading: state.loading, error: state.error, data: state.data };
};

export default useFetch;
