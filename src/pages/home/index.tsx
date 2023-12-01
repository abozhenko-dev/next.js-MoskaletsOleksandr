import { FC, useMemo, useState } from "react";

import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useForm } from "react-hook-form";

import { Form, Title } from "@components";

import { useTranslation } from "@hooks";

import { TestFormBody } from "@utils";

export const Home: FC = () => {
  const [formStep, setFormStep] = useState<number>(1);

  const t = useTranslation();
  const methods = useForm<TestFormBody>({
    resolver: classValidatorResolver(TestFormBody),
    mode: "onChange"
  });
  const { handleSubmit, reset, trigger, getValues } = methods;

  const formValues = useMemo(() => {
    if (formStep < 4) return;

    return getValues();
  }, [formStep, getValues]);

  const handlePrevStep = () => {
    if (formStep <= 1) return;

    setFormStep((prev) => prev - 1);
  };

  const handleNextStep = async () => {
    switch (formStep) {
      case 1: {
        const isValid = await trigger([
          "firstName",
          "lastName",
          "email",
          "phoneNumber"
        ]);
        if (isValid) setFormStep(2);
        break;
      }
      case 2: {
        const isValid = await trigger(["city", "state", "country"]);
        if (isValid) setFormStep(3);
        break;
      }
      case 3: {
        const isValid = await trigger("message");
        if (isValid) setFormStep(4);
        break;
      }
      case 4: {
        const isValid = await trigger();
        if (isValid) handleSubmit(onSubmit)();
        break;
      }
      default:
        break;
    }
  };

  const onSubmit = (data: TestFormBody) => {
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
                    {formValues.firstName} {formValues.lastName}
                  </p>
                </li>
                <li className="data__item">
                  <p>{t.form.label.email}:</p>
                  <p className="data__info">{formValues.email}</p>
                </li>
                <li className="data__item">
                  <p>{t.form.label.phoneNumber}:</p>
                  <p className="data__info">{formValues.phoneNumber}</p>
                </li>
                <li className="data__item">
                  <p>{t.form.label.city}:</p>
                  <p className="data__info">{formValues.city}</p>
                </li>
                <li className="data__item">
                  <p>{t.form.label.state}:</p>
                  <p className="data__info">{formValues.state}</p>
                </li>
                <li className="data__item">
                  <p>{t.form.label.country}:</p>
                  <p className="data__info">{formValues.country}</p>
                </li>
                <li className="data__item">
                  <p>{t.form.label.message}:</p>
                  <p className="data__info data__info--message">
                    {formValues.message}
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
            {formStep >= 1 && (
              <button type="button" className="button" onClick={handleNextStep}>
                {formStep === 4 ? t.action.submit : t.action.next}
              </button>
            )}
          </div>
        </Form>
      </div>
    </section>
  );
};
