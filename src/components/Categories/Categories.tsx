import { vehicle } from '../../types/campersTypes';
import css from './Categories.module.css';

interface Category {
  href: string;
  text: string;
}

type CategoriesObj = {
  [key: string]: Category;
};

const Categories: React.FC<{ item: vehicle | null }> = ({ item }) => {
  const categoriesObj: CategoriesObj = {
    AC: { href: '/sprite.svg#wind', text: 'AC' },
    TV: { href: '/sprite.svg#TV', text: 'TV' },
    transmission: {
      href: '/sprite.svg#diagram',
      text: item?.transmission === 'automatic' ? 'Automatic' : 'Manual',
    },
    bathroom: { href: '/sprite.svg#shower', text: 'Bathroom' },
    kitchen: { href: '/sprite.svg#cup-hot', text: 'Kitchen' },
    radio: { href: '/sprite.svg#radios', text: 'Radio' },
    refrigerator: {
      href: '/sprite.svg#fridge',
      text: 'Refrigerator',
    },
    microwave: {
      href: '/sprite.svg#microwave',
      text: 'Microwave',
    },
    gas: { href: '/sprite.svg#gas-stove', text: 'Gas' },
    water: { href: '/sprite.svg#water', text: 'Water' },
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
