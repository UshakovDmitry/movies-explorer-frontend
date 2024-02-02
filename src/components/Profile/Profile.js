import './Profile.css';
import Field from '../Field/Field';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext, useEffect, useState } from 'react';
import useForm from '../../hooks/useForm';

const Profile = ({ onSubmit, errorMessage, onLogout }) => {
  const currentUser = useContext(CurrentUserContext);
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const { formik, disabled } = useForm({ name: '', email: '' }, onSubmit, () => {
    setIsSubmitted(true); 
  });
  const { touched, errors, resetForm } = formik;


  useEffect(() => {
    resetForm({ values: { name: currentUser.name, email: currentUser.email } });
  }, [currentUser, resetForm]);

  return (
    <form className="profile page__element"onSubmit={formik.handleSubmit}>
      <h2 className="profile__title">Привет, {currentUser.name}!</h2>
      <Field
        className={`profile__input${touched.name && errors.name ? ' profile__input_onError' : ''}`}
        labelStyle="profile__label"
        errorStyle="profile__error"
        name="name"
        type="text"
        label="Имя"
        formik={formik}
      />
      <Field
        className={`profile__input${
          touched.email && errors.email ? ' profile__input_onError' : ''
        }`}
        labelStyle="profile__label"
        errorStyle="profile__error"
        name="email"
        type="email"
        label="E-mail"
        formik={formik}
      />

      <div className="profile__submit-area">
        <p className={`profile__submit-info${errorMessage ? ' profile__submit-info_onError' : ''}`}>
          {isSubmitted && (errorMessage || 'Данные профиля обновлены')}
        </p>
        <button
          className={`profile__submit-button${disabled ? ' profile__submit-button_disabled' : ''}`}
          type="submit"
          aria-label="Редактировать"
          disabled={disabled}
        >
          Редактировать
        </button>
        <button
          className="profile__logout"
          onClick={onLogout}
          type="button"
          aria-label="Выйти из аккаунта"
        >
          Выйти из аккаунта
        </button>
      </div>
    </form>
  );
};

export default Profile;