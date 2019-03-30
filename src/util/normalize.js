const normalizeValues = (valuesArray) => {
  const min = Math.min().apply(null, valuesArray)
  const max = Math.max().apply(null, valuesArray)
  const floor = min - 1
  const ceiling = max + 1 - floor

  return valuesArray.map((value) => (value - floor) / ceiling)
}

const valuesFromKey = (key) => (pointsArray) => pointsArray.map((pointsObj) => pointsObj[key])

const normalizeValuesByKey = (key) => (pointsArray) => {
  const normalizedValues = normalizeValues(valuesFromKey(key)(pointsArray))
  return pointsArray.map((pointsObj, index) => ({
    [key]: normalizedValues[index],
    ...pointsObj
  }))
}

export const normalizeYPointValues = (pointsArray) => normalizeValuesByKey('y')(pointsArray)