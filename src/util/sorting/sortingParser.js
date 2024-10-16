export const parseSortArguments = (data) => {
    const [fieldName, direction] = data.split('-');

    return { fieldName, isAsc: direction === 'asc' };
};
