import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import * as Yup from 'yup';

import * as React from 'react';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import css from './UsersSettingsForm.module.css';

interface UsersSettingsFormProps {
  onClose: () => void;
}

interface FormValues {
  avatarUrl: File | null;
  gender: 'woman' | 'man';
  name: string;
  email: string;
  weight: number | null;
  activeTime: number | null;
  waterNorm: number | null;
  waterDrink: string;
}

const validationSettingSchema = Yup.object().shape({
  avatarUrl: Yup.mixed(),
  gender: Yup.string().oneOf(['woman', 'man']).required('Gender is required'),
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  weight: Yup.number()
    .min(5, 'Weight is too small.')
    .max(250, 'Max weight is taken')
    .required('Weight is required'),
  activeTime: Yup.number()
    .min(0, 'Active time cannot be negative')
    .max(24, 'Max hours are taken')
    .required('Active time is required'),
  waterNorm: Yup.number()
    .min(0, 'Water norm must be a positive number')
    .required('Water norm is required'),
});

const UsersSettingsForm: React.FC<UsersSettingsFormProps> = ({ onClose }) => {
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [calculateWaterNorm, setCalculateWaterNorm] = useState<string | null>(
    null,
  );

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSettingSchema),
  });

  const weight = watch('weight');
  const activeTime = watch('activeTime');
  const gender = watch('gender');

  useEffect(() => {
    if (weight && activeTime && gender) {
      let waterNorm = 0;
      if (gender === 'woman') {
        waterNorm = Math.max(weight * 0.03 + activeTime * 0.4, 0);
      } else if (gender === 'man') {
        waterNorm = Math.max(weight * 0.04 + activeTime * 0.6, 0);
      }
      setValue('waterDrink', waterNorm.toFixed(1));
      setCalculateWaterNorm(waterNorm.toFixed(1));
    }
  }, [weight, activeTime, gender, setValue]);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setAvatarPreview(URL.createObjectURL(file));
      setValue('avatarUrl', file); // Оновлюємо стан з файлом
    }
  };

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log(data);
    onClose();
  };

  return (
    <form className={css.settingForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={css.settingFormAvatar}>
        {avatarPreview ? (
          <img
            className={css.settingAvatarImg}
            src={avatarPreview}
            alt="Avatar"
          />
        ) : (
          <div className={css.avatarPlaceholder}>N</div>
        )}
        <div>
          <button
            className={css.settingModalButton}
            type="button"
            onClick={() => document.getElementById('avatarInput')?.click()}
          >
            <svg width="18" height="18" className={css.settingAvatarIcon}>
              <use href="/public/sprite.svg#icon-upload"></use>
            </svg>
            <span className={css.avatarButtonText}>Upload a photo</span>
          </button>
          <input
            type="file"
            id="avatarInput"
            {...register('avatarUrl')}
            onChange={handleAvatarChange}
            style={{ display: 'none' }}
          />
        </div>
      </div>

      <div className={css.settingAllForms}>
        <div className={css.settingGenderForm}>
          <label className={css.settingLabel}>Your gender identity</label>
          <div className={css.settingRadioButton}>
            <label className={css.settingRadioLabel}>
              <input
                type="radio"
                value="woman"
                {...register('gender')}
                className={css.settingRadioInput}
              />
              <span className={css.settingRadioCustom}></span>
              <span className={css.settingRadioText}>Woman</span>
            </label>
            <label className={css.settingRadioLabel}>
              <input
                type="radio"
                value="man"
                {...register('gender')}
                className={css.settingRadioInput}
              />
              <span className={css.settingRadioCustom}></span>
              <span className={css.settingRadioText}>Man</span>
            </label>
          </div>
          {errors.gender && (
            <p className={css.settingError}>{errors.gender.message}</p>
          )}
        </div>

        <div className={css.settingAllFormsDesktop}>
          <div className={css.settingNameForm}>
            <label className={css.settingLabel}>Your name</label>
            <input
              type="text"
              {...register('name')}
              className={clsx(css.settingFormInput, {
                [css.errorInput]: errors.name,
              })}
            />
            {errors.name && (
              <p className={css.settingError}>{errors.name.message}</p>
            )}
          </div>

          <div className={css.settingWeightTimeForm}>
            <label className={css.settingWeightContext}>
              Your weight in kilograms:
            </label>
            <input
              type="number"
              {...register('weight')}
              className={clsx(css.settingFormInput, {
                [css.errorInput]: errors.weight,
              })}
            />
          </div>

          <div className={css.settingCalculateForm}>
            <p className={css.settingCalculateText}>
              The required amount of water in liters per day:
            </p>
            <p className={css.settingCalculateTextSpan}>
              {calculateWaterNorm} liters
            </p>
          </div>
        </div>
      </div>

      <button type="submit" className={css.settingFormButton}>
        Save
      </button>
    </form>
  );
};

export default UsersSettingsForm;
