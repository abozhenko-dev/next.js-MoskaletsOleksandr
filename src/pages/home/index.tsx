import { FC, useState } from "react";

import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useForm } from "react-hook-form";

import { Form, Title } from "@components";

import { useTranslation } from "@hooks";

import { ITestData, TestFormBody, isFieldValid } from "@utils";

export const Home: FC = () => {
  const [formStep, setFormStep] = useState<number | null>(1);

  const t = useTranslation();
  const methods = useForm<ITestData>({
    resolver: classValidatorResolver(TestFormBody),
    mode: "onChange"
  });
  const { formState, watch, handleSubmit, reset } = methods;

  const isFirstStepValid: boolean = !(
    isFieldValid("firstName", formState) &&
    isFieldValid("lastName", formState) &&
    isFieldValid("email", formState) &&
    isFieldValid("phoneNumber", formState)
  );

  const isSecondStepValid: boolean = !(
    isFieldValid("city", formState) &&
    isFieldValid("state", formState) &&
    isFieldValid("country", formState)
  );

  const handlePrevStep: () => void = () => {
    setFormStep((prev) => prev - 1);
  };

  const handleNextStep: () => void = () => {
    setFormStep((prev) => prev + 1);
  };

  const onSubmit = (data: ITestData): void => {
    window.alert(JSON.stringify(data, null, 2));
    setFormStep(1);
    reset();
  };

  return (
    <section className="home">
      <Title title={t.title.homePage} />
      <div className="form-wrapper">
        <Form
          methods={methods}
          onSubmit={handleSubmit(onSubmit)}
          className="form"
        >
          {formStep === 1 && (
            <>
              <div className="name">
                <Form.Input
                  name="firstName"
                  labelText={t.form.label.name}
                  InputProps={{ placeholder: t.form.placeholder.firstName }}
                />
                <Form.Input
                  name="lastName"
                  InputProps={{ placeholder: t.form.placeholder.lastName }}
                />
              </div>
              <Form.Input
                name="email"
                labelText={t.form.label.email}
                InputProps={{ placeholder: t.form.placeholder.email }}
              />
              <Form.Phone
                name="phoneNumber"
                labelText={t.form.label.phoneNumber}
              />
            </>
          )}
          {formStep === 2 && (
            <>
              <Form.Input
                name="city"
                labelText={t.form.label.city}
                InputProps={{ placeholder: t.form.placeholder.city }}
              />
              <Form.Input
                name="state"
                labelText={t.form.label.state}
                InputProps={{ placeholder: t.form.placeholder.state }}
              />
              <Form.Input
                name="country"
                labelText={t.form.label.country}
                InputProps={{ placeholder: t.form.placeholder.country }}
              />
            </>
          )}
          {formStep === 3 && (
            <>
              <Form.Textarea
                name="message"
                labelText={t.form.label.message}
                minHeight={100}
                InputProps={{ placeholder: t.form.placeholder.message }}
              />
            </>
          )}
          {formStep === 4 && (
            <div className="data">
              <p className="data__heading">{t.common.testFormText}</p>
              <ul className="data__list">
                <li className="data__item">
                  <p>{t.form.label.name}:</p>
                  <p className="data__info">
                    {watch("firstName")} {watch("lastName")}
                  </p>
                </li>
                <li className="data__item">
                  <p>{t.form.label.email}:</p>
                  <p className="data__info">{watch("email")}</p>
                </li>
                <li className="data__item">
                  <p>{t.form.label.phoneNumber}:</p>
                  <p className="data__info">{watch("phoneNumber")}</p>
                </li>
                <li className="data__item">
                  <p>{t.form.label.city}:</p>
                  <p className="data__info">{watch("city")}</p>
                </li>
                <li className="data__item">
                  <p>{t.form.label.state}:</p>
                  <p className="data__info">{watch("state")}</p>
                </li>
                <li className="data__item">
                  <p>{t.form.label.country}:</p>
                  <p className="data__info">{watch("country")}</p>
                </li>
                <li className="data__item">
                  <p>{t.form.label.message}:</p>
                  <p className="data__info data__info--message">
                    {watch("message")}
                  </p>
                </li>
              </ul>
            </div>
          )}

          <div className="form-btns">
            {formStep > 1 && (
              <button type="button" className="button" onClick={handlePrevStep}>
                {t.action.back}
              </button>
            )}
            {formStep === 1 && (
              <button
                type="button"
                className="button"
                onClick={handleNextStep}
                disabled={isFirstStepValid}
              >
                {t.action.next}
              </button>
            )}
            {formStep === 2 && (
              <button
                type="button"
                className="button"
                onClick={handleNextStep}
                disabled={isSecondStepValid}
              >
                {t.action.next}
              </button>
            )}
            {formStep === 3 && (
              <button
                type="button"
                className="button"
                onClick={handleNextStep}
                disabled={!formState.isValid}
              >
                {t.action.next}
              </button>
            )}
            {formStep === 4 && (
              <button
                type="submit"
                className="button"
                disabled={!formState.isValid}
              >
                {t.action.submit}
              </button>
            )}
          </div>
        </Form>
      </div>
    </section>
  );
};

// const isStepValid = (step: number): boolean => {
//   switch (step) {
//     case 1:
//       return isFirstStepValid;
//     case 2:
//       return isSecondStepValid;
//     case 3:
//       return !formState.isValid;
//     default:
//       return false;
//   }
// };

/* {formStep > 1 && (
                <button
                  type="button"
                  className="button"
                  onClick={handlePrevStep}
                >
                  Back
                </button>
              )}
              {formStep <= 4 && (
                <button
                  type="button"
                  className="button"
                  onClick={handleNextStep}
                  disabled={isStepValid(formStep)}
                >
                  {formStep < 4 ? "Next" : "Submit"}
                </button>
              )}
 */
