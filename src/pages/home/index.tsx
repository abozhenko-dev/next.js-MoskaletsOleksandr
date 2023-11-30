import { FC, useState } from "react";

import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useForm } from "react-hook-form";

import { Form, Title } from "@components";

import { useTranslation } from "@hooks";

import { ITestData, TestFormBody } from "@utils";

export const Home: FC = () => {
  const [formStep, setFormStep] = useState<number>(1);

  const t = useTranslation();
  const methods = useForm({
    resolver: classValidatorResolver(TestFormBody),
    mode: "onChange"
  });

  const allowToSecondStep = Boolean(
    methods.formState.dirtyFields.firstName &&
      !methods.formState.errors?.firstName &&
      methods.formState.dirtyFields.lastName &&
      !methods.formState.errors?.lastName &&
      methods.formState.dirtyFields.email &&
      !methods.formState.errors?.email &&
      methods.formState.dirtyFields.phoneNumber &&
      !methods.formState.errors?.phoneNumber
  );
  const allowToThirdStep = Boolean(
    methods.formState.dirtyFields.city &&
      !methods.formState.errors?.city &&
      methods.formState.dirtyFields.state &&
      !methods.formState.errors?.state &&
      methods.formState.dirtyFields.country &&
      !methods.formState.errors?.country
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
    methods.reset();
  };

  return (
    <section className="home">
      <Title title={t.title.homePage} />
      <p>a@mail.com</p>
      <div className="form-wrapper">
        <Form
          methods={methods}
          onSubmit={methods.handleSubmit(onSubmit)}
          className="form"
        >
          {formStep === 1 && (
            <>
              <div className="name">
                <Form.Input
                  name="firstName"
                  labelText="Name"
                  InputProps={{ placeholder: "First name" }}
                />
                <Form.Input
                  name="lastName"
                  InputProps={{ placeholder: "Last name" }}
                />
              </div>
              <Form.Input
                name="email"
                labelText={t.form.label.email}
                InputProps={{ placeholder: "example@mail.com" }}
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
                labelText="City"
                InputProps={{ placeholder: "Kyiv" }}
              />
              <Form.Input
                name="state"
                labelText="State"
                InputProps={{ placeholder: "Kyiv region" }}
              />
              <Form.Input
                name="country"
                labelText="Country"
                InputProps={{ placeholder: "Ukraine" }}
              />
            </>
          )}
          {formStep === 3 && (
            <>
              <Form.Textarea
                name="message"
                labelText={t.form.label.message}
                minHeight={100}
                InputProps={{ placeholder: "I'd like ..." }}
              />
            </>
          )}
          {formStep === 4 && (
            <div className="data">
              <p className="data__heading">
                Check everything one more time, if you need to change something,
                click the &quot;Back&quot; button.
              </p>
              <ul className="data__list">
                <li className="data__item">
                  <p>Name:</p>
                  <p className="data__info">
                    {methods.watch("firstName")} {methods.watch("lastName")}
                  </p>
                </li>
                <li className="data__item">
                  <p>Email:</p>
                  <p className="data__info">{methods.watch("email")}</p>
                </li>
                <li className="data__item">
                  <p>Phone Number:</p>
                  <p className="data__info">{methods.watch("phoneNumber")}</p>
                </li>
                <li className="data__item">
                  <p>City:</p>
                  <p className="data__info">{methods.watch("city")}</p>
                </li>
                <li className="data__item">
                  <p>State:</p>
                  <p className="data__info">{methods.watch("state")}</p>
                </li>
                <li className="data__item">
                  <p>Country:</p>
                  <p className="data__info">{methods.watch("country")}</p>
                </li>
                <li className="data__item">
                  <p>Message:</p>
                  <p className="data__info data__info--message">
                    {methods.watch("message")}
                  </p>
                </li>
              </ul>
            </div>
          )}

          <div className="form-btns">
            {formStep > 1 && (
              <button type="button" className="button" onClick={handlePrevStep}>
                Back
              </button>
            )}
            {formStep === 1 && (
              <button
                type="button"
                className="button"
                onClick={handleNextStep}
                disabled={!allowToSecondStep}
              >
                Next
              </button>
            )}
            {formStep === 2 && (
              <button
                type="button"
                className="button"
                onClick={handleNextStep}
                disabled={!allowToThirdStep}
              >
                Next
              </button>
            )}
            {formStep === 3 && (
              <button
                type="button"
                className="button"
                onClick={handleNextStep}
                disabled={!methods.formState.isValid}
              >
                Next
              </button>
            )}
            {formStep === 4 && (
              <button
                type="submit"
                className="button"
                disabled={!methods.formState.isValid}
              >
                Submit
              </button>
            )}
          </div>
        </Form>
      </div>
    </section>
  );
};
