function getProperty <T extends object, K extends keyof T> (obj: T, key: K) {
  return obj[key]
}