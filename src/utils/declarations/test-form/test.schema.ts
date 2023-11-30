import { IsEmail, IsNotEmpty, Matches, MaxLength } from "class-validator";

import { ErrorMessagesEnum } from "../error/error.enum";

export class TestFormBody {
  @MaxLength(39, { message: ErrorMessagesEnum.MAX_LENGTH })
  @Matches(/^[A-Za-zА-Яа-яЁё\s]+$/, {
    message: ErrorMessagesEnum.NAME_PATTERN
  })
  @IsNotEmpty({ message: ErrorMessagesEnum.NAME_IS_REQUIRED })
  firstName: string;

  @MaxLength(39, { message: ErrorMessagesEnum.MAX_LENGTH })
  @Matches(/^[A-Za-zА-Яа-яЁё\s]+$/, {
    message: ErrorMessagesEnum.NAME_PATTERN
  })
  @IsNotEmpty({ message: ErrorMessagesEnum.NAME_IS_REQUIRED })
  lastName: string;

  @MaxLength(39, { message: ErrorMessagesEnum.MAX_LENGTH })
  @IsEmail({}, { message: ErrorMessagesEnum.EMAIL_IS_INVALID })
  @IsNotEmpty({ message: ErrorMessagesEnum.EMAIL_IS_REQUIRED })
  email: string;

  @IsNotEmpty({ message: ErrorMessagesEnum.PHONE_IS_REQUIRED })
  phoneNumber: string;

  @MaxLength(39, { message: ErrorMessagesEnum.MAX_LENGTH })
  @Matches(/^[A-Za-zА-Яа-яЁё\s]+$/, {
    message: ErrorMessagesEnum.NAME_PATTERN
  })
  @IsNotEmpty({ message: ErrorMessagesEnum.NAME_IS_REQUIRED })
  city: string;

  @MaxLength(39, { message: ErrorMessagesEnum.MAX_LENGTH })
  @Matches(/^[A-Za-zА-Яа-яЁё\s]+$/, {
    message: ErrorMessagesEnum.NAME_PATTERN
  })
  @IsNotEmpty({ message: ErrorMessagesEnum.NAME_IS_REQUIRED })
  state: string;

  @MaxLength(39, { message: ErrorMessagesEnum.MAX_LENGTH })
  @Matches(/^[A-Za-zА-Яа-яЁё\s]+$/, {
    message: ErrorMessagesEnum.NAME_PATTERN
  })
  @IsNotEmpty({ message: ErrorMessagesEnum.NAME_IS_REQUIRED })
  country: string;

  @MaxLength(199, { message: ErrorMessagesEnum.MAX_LENGTH_MESSAGE })
  @IsNotEmpty({ message: ErrorMessagesEnum.MESSAGE_IS_REQUIRED })
  message: string;
}
