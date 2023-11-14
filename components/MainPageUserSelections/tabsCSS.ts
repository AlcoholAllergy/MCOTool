const getCSS = (selected: boolean) => {
  return `tab tab-lifted tab-md font-semibold text-gray-300 hover:scale-105 hover:bg-slate-400 ${
    selected ? 'tab-active bg-secondary text-gray-600' : null
  }`;
};

export default getCSS;
