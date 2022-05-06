interface WindowingBounds {
  wwMin: number;
  wwMax: number;
  wcMin: number;
  wcMax: number;
  min: number;
  max: number;
}

export const convertMinMaxToWW = (
  min: number,
  max: number,
  bounds: WindowingBounds,
) => {
  let ww = parseFloat(Math.abs(min - max).toFixed(2));
  if (ww < bounds.wwMin) {
    ww = bounds.wwMin;
  }

  if (ww > bounds.wwMax) {
    ww = bounds.wwMax;
  }

  return ww;
};

export const convertMinMaxToWC = (
  min: number,
  max: number,
  bounds: WindowingBounds,
) => {
  let wc = parseFloat(((min + max) / 2).toFixed(2));
  if (wc < bounds.wcMin) {
    wc = bounds.wcMin;
  }

  if (wc > bounds.wcMax) {
    wc = bounds.wcMax;
  }

  return wc;
};

export const convertWindowingToMin = (
  ww: number,
  wc: number,
  bounds: WindowingBounds,
) => {
  let min = wc - ww / 2;
  if (min < bounds.min) {
    min = bounds.min;
  }

  if (min > bounds.max) {
    min = bounds.max;
  }

  return parseFloat(min.toFixed(2));
};

export const convertWindowingToMax = (
  ww: number,
  wc: number,
  bounds: WindowingBounds,
) => {
  let max = wc + ww / 2;
  if (max < bounds.min) {
    max = bounds.min;
  }

  if (max > bounds.max) {
    max = bounds.max;
  }

  return parseFloat(max.toFixed(2));
};
