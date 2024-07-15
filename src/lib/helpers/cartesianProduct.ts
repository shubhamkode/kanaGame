export function cartesianProduct<T extends string>(
  arr: Array<T>,
  arr2: Array<T>
) {
  const result: Array<string> = [];

  arr.map((arr1Value) => {
    arr2.map((arr2Value) => {
      result.push(arr1Value + arr2Value);
    });
  });

  return result;
}
