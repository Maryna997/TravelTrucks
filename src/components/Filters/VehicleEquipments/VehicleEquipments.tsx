import { Field } from 'formik';

import css from './VehicleEquipments.module.css';

const vehicleEquipments = [
  { text: 'AC', name: 'AC', icon: '/assets/sprite.svg#wind' },
  {
    text: 'Automatic',
    name: 'transmission',
    value: 'automatic',
    icon: '/assets/sprite.svg#diagram',
  },
  { text: 'TV', name: 'TV', icon: '/assets/sprite.svg#TV' },
  { text: 'Kitchen', name: 'kitchen', icon: '/assets/sprite.svg#cup-hot' },
  { text: 'Bathroom', name: 'bathroom', icon: '/assets/sprite.svg#shower' },
  { text: 'Microwave', name: 'microwave', icon: '/assets/sprite.svg#microwave' },
  {
    text: 'Refrigerator',
    name: 'refrigerator',
    icon: '/assets/sprite.svg#fridge',
  },
  { text: 'Radio', name: 'radio', icon: '/assets/sprite.svg#radios' },
  { text: 'Gas', name: 'gas', icon: '/assets/sprite.svg#gas-stove' },
  { text: 'Water', name: 'water', icon: '/assets/sprite.svg#water' },
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
                    <use href={`/categories${element.icon}`}></use>
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
