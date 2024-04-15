export const getQ = (selection) => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error("Not an element!");
  }
};

export const getId = (selection) => {
  const element = document.getElementById(selection);
  if (element) {
    return element;
  } else {
    throw new Error("Not an Id!");
  }
};

export const getQA = (selection) => {
  const element = document.querySelectorAll(selection);
  if (element) {
    return element;
  } else {
    throw new Error("Not an element!");
  }
};
