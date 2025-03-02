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

export const combinedDataByIndex = <TNonLocalized, TLocalized>(data: {
  nonLocalizedData: TNonLocalized[];
  localizedData: TLocalized[];
}): Array<TNonLocalized & TLocalized> => {
  const { nonLocalizedData, localizedData } = data;

  // Verificar que ambos arrays existan y tengan la misma longitud
  if (
    !nonLocalizedData ||
    !localizedData ||
    nonLocalizedData.length !== localizedData.length
  ) {
    console.error("Los arrays no coinciden o están vacíos");
    return [];
  }
  const combinedDataByIndex = nonLocalizedData.map(
    (item: any, index: number) => ({
      ...item,
      ...localizedData[index],
    })
  );

  return combinedDataByIndex;
};

export function formatDate(strDate: string) {
  const date = new Date(strDate);
  // Get month and add 1 since getMonth() returns 0-11
  const month = (date.getMonth() + 1).toString().padStart(2, "0");

  // Get day of the month
  const day = date.getDate().toString().padStart(2, "0");

  // Return formatted string
  return `${month}/${day}`;
}
