import { useForm, SubmitHandler } from "react-hook-form";
import { Contact, Gender } from "../../interfaces";
import { nanoid } from "nanoid";
import styles from './ContactForm.module.scss'

type Props = {
    handleAddContact: (newContact: Contact) => void;
}

const ContactForm = ({handleAddContact}: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
        reset
    } = useForm({
        mode: 'onBlur'
    });

    const onSubmit: SubmitHandler<Contact> = (data) => {
        const contactWithId = { ...data, id: nanoid() };        
        handleAddContact(contactWithId)
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form} >
            <div className={styles.field} >
                <label htmlFor="name" className={styles.label} >Name:</label>
                <input id="name" className={styles.input} {...register('name', {
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
                {errors?.name && <p className={styles.error} >{errors?.name?.message || 'Error!'}</p>}
            </div>
            <div className={styles.field} >
                <label htmlFor="email" className={styles.label} >Email:</label>
                <input id="email" className={styles.input} {...register('email', {
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
                {errors?.email && <p className={styles.error} >{errors?.email?.message || 'Error!'}</p>}
            </div>
            <div className={styles.field} >
                <label className={styles.label}>Gender:</label>
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
                {errors?.gender && <p className={styles.error} >{errors?.gender?.message || 'Error!'}</p>}
            </div>
            <input type="submit" className={styles.btn} value="Add to contacts" disabled={!isValid || isSubmitting} />
        </form>
    )
}

export default ContactForm;