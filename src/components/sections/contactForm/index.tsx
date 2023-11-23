import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { Gender, IContact} from "../../../utils";
import { nanoid } from "nanoid";

type Props = {
    handleAddContact: (newContact: IContact) => void;
}

const ContactForm = ({handleAddContact}: Props) => {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
        reset
    } = useForm({
        mode: 'onBlur',
        defaultValues: {
            name: '',
            email: '',
            gender: null,
            phoneNumbers: [{number: ''}],
        }
    });

    const { fields, append, remove } = useFieldArray({
        name: 'phoneNumbers',
        control,
    });

    const onSubmit: SubmitHandler<IContact> = (data) => {
        const contactWithId = { ...data, id: nanoid() };        
        handleAddContact(contactWithId)
        reset();
    }

    return (
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
                <button type="button" onClick={() => append({ number: '' })} >
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
    )
}

export default ContactForm;