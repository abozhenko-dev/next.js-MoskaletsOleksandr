import { FC, useState } from "react";

import { useTranslation } from "@hooks";

import { SelectOption } from "@utils";

interface SingleSelect {
  value: SelectOption | null;
  onChange: (value: SelectOption | null) => void;
}

type SelectProps = {
  options: SelectOption[];
  labelText?: string;
} & SingleSelect;

export const Select: FC<SelectProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const { onChange, options, value, labelText, ...rest } = props;
  const t = useTranslation();

  const handleChange = (option: SelectOption) => {
    onChange(option);
    return;
  };

  const handleDropdown = (value: boolean) => () => {
    setIsOpen(value);
  };

  const getSelectClasses = () => {
    let classes = "select";

    if (isOpen) {
      classes += " opened";
    }

    return classes;
  };

  const getOptionClasses = (option: SelectOption, index: number) => {
    let classes = "select-option";

    if (value?.value === option.value) {
      classes += " selected";
    }
    return classes;
  };

  return (
    <div
      className={getSelectClasses()}
      onClick={handleDropdown(true)}
      {...rest}
    >
      <div className="select-wrapper">
        <label>
          {labelText && <p>{labelText}</p>}
          <div
            className="select-dropdown"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="select-dropdown__scroll custom-scroll">
              {options.length !== 0 ? (
                <ul className="select-options">
                  {options.map((option, index) => (
                    <li
                      key={option.value}
                      className={getOptionClasses(option, index)}
                      onClick={(e) => {
                        e.preventDefault();

                        handleChange(option);
                        setIsOpen(false);
                      }}
                    >
                      {option.label}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Not found</p>
              )}
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};
