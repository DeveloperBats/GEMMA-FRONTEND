import { useState } from "react"

interface IUseFormProps<V> {
    initial?: V
}

export const useForm = <V>(props: IUseFormProps<V>) => {
    const [form, setForm] = useState(props.initial || {})
    const handleChange = (value: unknown, name: string) => {
        setForm({ ...form, [name]: value })
    }
    return { handleChange, form }
}
