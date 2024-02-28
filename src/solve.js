const resolveXYZArray = (checkObject, unpredictableObject) => {
  let result = null;

  const findArrayWithXYZ = (obj) => {
    if (Array.isArray(obj)) {
      for (const i of obj) {
        if (typeof i === "object" && i !== null) {
          const keys = Object.keys(checkObject);
          if (keys.every(key => i[key] === checkObject[key])) {
            result = [i];
            return true;
          }
        }
      }
    } else if (typeof obj === "object") {
      for (const i in obj) {
        if (i === "xyz") {
          const foundData = findArrayWithXYZ(obj[i]);
          if (foundData) {
            return true;
          }
        } else {
          const foundData = findArrayWithXYZ(obj[i]);
          if (foundData) {
            return true;
          }
        }
      }
    }
    return false;
  };

  findArrayWithXYZ(unpredictableObject);
  return result;
};

// Example usage
const stringObject = {
  a: "343",
  c: "444",
  d: "344",
};

const unpredictableObject = {
  a: 22,
  c: {
    xcd: {
      ddffd: {
        xyz: [
          {
            a: "343",
            c: "444",
            d: "344",
          },
          {
            x: "7889",
            c: "blabla",
            d: "344",
          },
        ],
      },
    },
  },
};
resolveXYZArray(stringObject, unpredictableObject)
// console.debug(resolveXYZArray(stringObject, unpredictableObject));
console.info(resolveXYZArray(stringObject, unpredictableObject))
console.table(resolveXYZArray(stringObject, unpredictableObject))