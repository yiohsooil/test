const checkVisibility = (ref: React.RefObject<HTMLDivElement>): boolean => {
  if (!ref.current) return false;
  const rect = ref.current.getBoundingClientRect();
  const elementTop = rect.top + window.scrollY;
  const windowHeight = window.innerHeight;
  const scrollY = window.scrollY;
  return scrollY + windowHeight > elementTop + rect.height * 0.8;
};

export { checkVisibility };
