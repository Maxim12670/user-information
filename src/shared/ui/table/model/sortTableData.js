export const sortTableData = (array, sortBy, typeSort) => {

  const typeSortValue = typeof (array[0][sortBy]) == 'string' ? 'string' : 'number';

  switch (typeSortValue) {
    case 'string':
      if (typeSort == 'increase') {
        return array.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
      } else {
        return array.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
      }

    case 'number':
      if (typeSort == 'increase') {
        return array.sort((a, b) => a[sortBy] - b[sortBy]);
      } else {
        return array.sort((a, b) => b[sortBy] - a[sortBy]);
      }
  }
}
