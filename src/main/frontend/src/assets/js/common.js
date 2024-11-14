const handleChng = (event, mthd, obj) => {
  const { name, value } = event.target;
  mthd({
    ...obj,
    [name]: value,
  });

  return obj;
};

export default handleChng;
