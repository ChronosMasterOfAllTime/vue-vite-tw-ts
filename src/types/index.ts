/**
 * Returns the string keys of an enum-like object, excluding numeric keys.
 *
 * @param enumObj - The enum-like object whose keys are to be extracted.
 * @returns An array of the string keys of the enum object.
 */
export function enumKeys<T extends object>(enumObj: T): Array<keyof T> {
  return Object.keys(enumObj).filter((key) => isNaN(Number(key))) as Array<
    keyof T
  >
}
