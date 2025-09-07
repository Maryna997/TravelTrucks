import { Field } from 'formik';
import css from './VehicleTypes.module.css';

import sprite from '../../../assets/sprite.svg';

const vehicleTypes = [
  { text: 'Van', value: 'panelTruck', icon: '../../../assets/sprite.svg#van' },
  {
    text: 'Fully Integrated',
    value: 'fullyIntegrated',
    icon: '../../../assets/sprite.svg#fullyIntegrated',
  },
  { text: 'Alcove', value: 'alcove', icon: '../../../assets/sprite.svg#alcove' },
];

const VehicleTypes: React.FC = () => {
  return (
    <div className={css.typesWrapper}>
      <h2 className={css.typesTitle}>Vehicle type</h2>
      <ul className={css.typesList}>
        {vehicleTypes.map((element, index) => {
          return (
            <li key={index} className={css.radioBtnItem}>
              <label className={css.radioBtnLabel}>
                <Field
                  type='radio'
                  name='form'
                  value={element.value}
                  className={css.radioBtn}
                />
                <div className={css.radioBtnCustom}>
                  <svg width={32} hanging={32} className={css.radioBtnIcon}>
                    <use href={`${sprite}${element.icon}`}></use>
                  </svg>
                  <p className={css.radioBtnText}>{element.text}</p>
                </div>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default VehicleTypes;
