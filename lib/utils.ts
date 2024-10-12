export type AnyObject = Record<string, any>;

export function deepMergeObjects<T extends AnyObject, U extends AnyObject>(
  nonLocalizedData: T | T[],
  localizedData: U | U[]
): (T & U) | (T & U)[] {
  if (Array.isArray(nonLocalizedData) && Array.isArray(localizedData)) {
    return nonLocalizedData.map((item, index) =>
      deepMergeObjects(item, localizedData[index] || {})
    ) as (T & U)[];
  } else if (isObject(nonLocalizedData) && isObject(localizedData)) {
    const merged: AnyObject = { ...nonLocalizedData };

    for (const key of Object.keys(localizedData)) {
      const nonLocalizedValue = (nonLocalizedData as AnyObject)[key];
      const localizedValue = (localizedData as AnyObject)[key];

      merged[key] = deepMergeObjects(nonLocalizedValue, localizedValue);
    }

    return merged as T & U;
  } else {
    return (
      localizedData !== undefined ? localizedData : nonLocalizedData
    ) as T & U;
  }
}

export function isObject(value: any): value is AnyObject {
  return value && typeof value === "object" && !Array.isArray(value);
}
