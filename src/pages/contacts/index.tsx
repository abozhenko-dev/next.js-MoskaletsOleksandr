import { ContactCard, Title } from '@components/index';
import { Gender, IContact } from '@utils/index';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { fakeContacts } from 'src/data/fakeData';

interface FormData {
  name: string;
  email: string;
  gender: Gender;
  phoneNumbers: { number: string }[];
  dob: Date;
}

export const Contacts = () => {
    const [contacts, setContacts] = useState<IContact[]>(fakeContacts);

    const {
        register,
        control,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
        reset,
        watch
    } = useForm<FormData>({
        mode: 'onBlur',
        defaultValues: {
            name: '',
            email: '',
            gender: null,
            phoneNumbers: [{ number: '' }],
            dob: new Date()
        }
    });

    const { fields, append, remove } = useFieldArray({
        name: 'phoneNumbers',
        control,
    });

    const watchPhoneNumbers = watch('phoneNumbers');    

    const onSubmit = (data: FormData): void => {
        const contactWithId = { ...data, id: nanoid() };
        setContacts([...contacts, contactWithId]);
        reset();
    };

    return (
        <section className='contacts'>
            <Title title='Contacts' />
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className='contact-form' >
                    <div className='field' >
                        <label htmlFor="name">Name:</label>
                        <input id="name" className='input' {...register('name', {
                            required: 'Name is rerequired',
                            maxLength: {
                                value: 49,
                                message: 'Enter no more than 49 letters'
                            },
                            pattern: {
                                value: /^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ\s]+$/,
                                message: 'Enter only letters'
                            }
                        })} />
                        {errors?.name && <p className='error' >{errors?.name?.message || 'Error!'}</p>}
                    </div>
                    <div className='phones'>
                        <label>List of phone numbers:</label>
                        {fields.map((field, index) => {
                            return (
                                <div key={field.id}>
                                    <input {...register(`phoneNumbers.${index}.number` as const, {
                                        required: 'Phone number is rerequired',
                                        pattern: {
                                            value: /^[0-9]*[-\s]?[0-9]*$/,
                                            message: 'Enter only numbers, spaces or dashes'
                                        },
                                        maxLength: {
                                            value: 19,
                                            message: 'Enter no more than 19 symbols'
                                        }
                                    })} />
                                    {index > 0 && (
                                        <button type="button" onClick={() => remove(index)}>
                                            Remove
                                        </button>
                                    )}
                                    {errors?.phoneNumbers?.[index] && <p className='error' >{errors?.phoneNumbers?.[index]?.number?.message || 'Error!'}</p>}
                                </div>
                            )
                        })}
                        <button type="button" onClick={() => append({ number: '' })}
                            disabled={watchPhoneNumbers[watchPhoneNumbers.length - 1].number === ''}
                        >
                            Add one more number
                        </button>
                    </div>
                    <div className='field' >
                        <label htmlFor="email">Email:</label>
                        <input id="email" className='input' {...register('email', {
                            required: 'Email is rerequired',
                            maxLength: {
                                value: 49,
                                message: 'Enter no more than 49 letters'
                            },
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Enter a valid email address'
                            }
                        })} />
                        {errors?.email && <p className='error' >{errors?.email?.message || 'Error!'}</p>}
                    </div>
                    <div className='field-dob' >
                        <label htmlFor="dob">Date of birth:</label>
                        <input type='date' id="dob" className='input' {...register('dob', {
                            valueAsDate: true,
                            required: 'Date of birth is rerequired',
                        })} />
                        {errors?.dob && <p className='error' >{errors?.dob?.message || 'Error!'}</p>}
                    </div>
                    <div className='field' >
                        <label>Gender:</label>
                        <label>
                            <input
                                type="radio"
                                value={Gender.Male}
                                {...register('gender', { required: 'Gender is required' })}
                            /> Male
                        </label>
                        <label>
                            <input
                                type="radio"
                                value={Gender.Female}
                                {...register('gender', { required: 'Gender is required' })}
                            /> Female
                        </label>
                        {errors?.gender && <p className='error' >{errors?.gender?.message || 'Error!'}</p>}
                    </div>
                    <input type="submit" className='button' value="Add to contacts" disabled={!isValid || isSubmitting} />
                </form>
                <div className='contact-list' >
                    <h2>Contact List</h2>
                    <ul>
                        {contacts.map(contact => (
                            <li key={contact.id}>
                                <ContactCard contact={contact} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};