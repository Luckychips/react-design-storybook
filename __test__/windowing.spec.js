import {
  convertMinMaxToWW,
  convertMinMaxToWC,
  convertWindowingToMin,
  convertWindowingToMax,
} from '@/utils/windowing';

const bounds = {
  wwMin: 1,
  wwMax: 510,
  wcMin: -127.5,
  wcMax: 382.5,
  min: -127.5,
  max: 382.5,
};

test('min,max => window width', () => {
  const ww1 = convertMinMaxToWW(100, 255, bounds);
  expect(ww1).toBe(155);
  const ww2 = convertMinMaxToWW(100, 200, bounds);
  expect(ww2).toBe(100);
  const ww3 = convertMinMaxToWW(10, 99, bounds);
  expect(ww3).toBe(89);
});

test('min,max => window center/level', () => {
  const wc1 = convertMinMaxToWC(100, 255, bounds);
  expect(wc1).toBe(177.5);
  const wc2 = convertMinMaxToWC(100, 200, bounds);
  expect(wc2).toBe(150);
  const wc3 = convertMinMaxToWC(10, 99, bounds);
  expect(wc3).toBe(54.5);
});

test('windowing => min value', () => {
  const min1 = convertWindowingToMin(150, 155, bounds);
  expect(min1).toBe(80);
  const min2 = convertWindowingToMin(24, 199, bounds);
  expect(min2).toBe(187);
  const min3 = convertWindowingToMin(13, 301, bounds);
  expect(min3).toBe(294.5);
});

test('windowing => max value', () => {
  const max1 = convertWindowingToMax(22, 297, bounds);
  expect(max1).toBe(308);
  const max2 = convertWindowingToMax(104, 155, bounds);
  expect(max2).toBe(207);
  const max3 = convertWindowingToMax(111, 222, bounds);
  expect(max3).toBe(277.5);
});
