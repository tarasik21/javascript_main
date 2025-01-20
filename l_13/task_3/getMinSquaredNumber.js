const getMinSquaredNumber = arr => {
    if (!Array.isArray(arr) || arr.length === 0) {
      return null;
    }
  

    const absoluteValues = arr.map(num => Math.abs(num));
    let minValue = Math.min(...absoluteValues);  
    return minValue ** 2;
  };