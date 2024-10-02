export function sortByFieldName(isAsc, fieldA, fieldB) {
    if (isAsc) {
        return fieldA.localeCompare(fieldB)
    } else {
        return fieldB.localeCompare(fieldA)
    }
}