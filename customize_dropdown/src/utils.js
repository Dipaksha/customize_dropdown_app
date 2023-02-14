const dropdownOptionData = [
  { label: "jQuery", id: 0 },
  { label: "JavaScript", id: 1 },
  { label: "AngularJS", id: 2 },
  { label: "reactNative", id: 3 },
  { label: " Vue.js", id: 4 },
];

const isOptionSelected = (id, arr) => {
  return arr.findIndex((item) => item.id === id) >= 0 ? true : false;
};

export { dropdownOptionData, isOptionSelected };
