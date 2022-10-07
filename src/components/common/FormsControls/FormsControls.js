import s from './FormsControls.module.css'

export const InputCreator = (InputType) => {

    return ({input, meta, ...props}) => {
        const hasError = meta.touched && meta.error
        return (
            <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
                <div>
                    {hasError && <span>{meta.error}</span>}
                </div>
                <div>
                    <InputType {...input} {...props} />
                </div>
            </div>

        )
    }
}

