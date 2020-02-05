const optionsBuilder = (options) => options.map((value) => ({
  key: value.toString(),
  text: value.toString(),
  value,
}));

export default optionsBuilder;
