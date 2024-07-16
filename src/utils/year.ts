function yearsSince(): number {
  const date = new Date();
  const year = date.getFullYear();
  return year - 1979;
}

export { yearsSince };
