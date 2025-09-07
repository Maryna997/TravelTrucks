import { vehicle } from '../../types/campersTypes';
import css from './Categories.module.css';
import sprite from '../../assets/sprite.svg';

interface Category {
  href: string;
  text: string;
}

type CategoriesObj = {
  [key: string]: Category;
};

const Categories: React.FC<{ item: vehicle | null }> = ({ item }) => {
  const categoriesObj: CategoriesObj = {
    AC: { href: `${sprite}#wind`, text: 'AC' },
    TV: { href: `${sprite}#TV`, text: 'TV' },
    transmission: {
      href: `${sprite}#diagram`,
      text: item?.transmission === 'automatic' ? 'Automatic' : 'Manual',
    },
    bathroom: { href: `${sprite}#shower`, text: 'Bathroom' },
    kitchen: { href: `${sprite}#cup-hot`, text: 'Kitchen' },
    radio: { href: `${sprite}#radios`, text: 'Radio' },
    refrigerator: {
      href: `${sprite}#fridge`,
      text: 'Refrigerator',
    },
    microwave: {
      href: `${sprite}#microwave`,
      text: 'Microwave',
    },
    gas: { href: `${sprite}#gas-stove`, text: 'Gas' },
    water: { href: `${sprite}#water`, text: 'Water' },
  };

  return (
    <ul className={css.categoryList}>
      {Object.keys(categoriesObj).map(key =>
        item?.[key as keyof vehicle] ? (
          <li key={key} className={css.category}>
            <svg
              width={20}
              height={20}
              className={
                key === 'water' || key === 'microwave' || key === 'gas'
                  ? css.icon
                  : undefined
              }
            >
              <use href={categoriesObj[key].href}></use>
            </svg>
            <p>{categoriesObj[key].text}</p>
          </li>
        ) : null
      )}
    </ul>
  );
};

export default Categories;
