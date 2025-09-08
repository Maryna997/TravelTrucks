import { Field } from 'formik';

import css from './VehicleEquipments.module.css';

import sprite from '../../../assets/sprite.svg';

const vehicleEquipments = [
  { text: 'AC', name: 'AC', icon: '../../../assets/sprite.svg#wind' },
  {
    text: 'Automatic',
    name: 'transmission',
    value: 'automatic',
    icon: `${sprite}#diagram`,
  },
  { text: 'TV', name: 'TV', icon: `${sprite}#TV` },
  { text: 'Kitchen', name: 'kitchen', icon: `${sprite}#cup-hot` },
  { text: 'Bathroom', name: 'bathroom', icon: `${sprite}#shower` },
  { text: 'Microwave', name: 'microwave', icon: `${sprite}#microwave` },
  {
    text: 'Refrigerator',
    name: 'refrigerator',
    icon: `${sprite}#fridge`,
  },
  { text: 'Radio', name: 'radio', icon: `${sprite}#radios` },
  { text: 'Gas', name: 'gas', icon: `${sprite}#gas-stove` },
  { text: 'Water', name: 'water', icon: `${sprite}#water` },
];

const VehicleEquipments: React.FC = () => {
  return (
    <div className={css.equipmentsWrapper}>
      <h2 className={css.equipmentsTitle}>Vehicle equipment</h2>
      <ul className={css.equipmentsList}>
        {vehicleEquipments.map((element, index) => {
          return (
            <li key={index} className={css.equipmentItem}>
              <label className={css.checkboxLabel}>
                <Field
                  type='checkbox'
                  name={element.name}
                  value={element.value}
                  className={css.checkbox}
                />
                <div className={css.checkboxCustom}>
                  <svg width={32} hanging={32} className={css.checkboxIcon}>
                    <use href= {`${sprite}${element.icon}`}></use>
                  </svg>
                  <p className={css.checkboxText}>{element.text}</p>
                </div>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default VehicleEquipments;
