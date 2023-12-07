const logger = (store) => (next) => (action) => {
  const currentState = store.getState();
  console.log("prev state =>", currentState);
  console.log("action", action);
  next(action);
  console.log("next state", store.getState());
};

export default logger;
