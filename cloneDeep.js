 
function cloneObject(value) {
  if (isPrimitiveValue(value)) {
    return value
  }

  let result

  if (typeof value === 'function') {
    result = eval(`(${value.toString()})`)
  } else if (Array.isArray(value)) {
    result = []
  } else if (value instanceof RegExp) {
    result = new RegExp(value)
  } else if (value instanceof Date) {
    result = new Date(value)
  } else if (value instanceof Number) {
    result = new Number(value)
  } else if (value instanceof String) {
    result = new String(value)
  } else if (value instanceof Boolean) {
    result = new Boolean(value)
  } else if (typeof value === 'object') {
    result = new Object()
  }

  for (let key in value) {
    if (value.hasOwnProperty(key)) {
      try {
        result[key] = cloneObject(value[key])
      } catch (error) {
        // console.error(error)
      }
    }
  }

  return result
}

 
function isPrimitiveValue(value) {
  if (
    typeof value === 'string' ||
    typeof value === 'number' ||
    value == null ||
    typeof value === 'boolean' ||
    Number.isNaN(value)
  ) {
    return true
  }

  return false
}

 
