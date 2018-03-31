import DATA_CATEGORIES from 'static/categories.json';

export const getCategoriesLevel1 = () => {
  return DATA_CATEGORIES.categories.map(level1 => {
    return { value: level1.id, label: level1.label };
  });
};
