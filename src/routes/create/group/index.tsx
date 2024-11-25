import * as React from 'react'
import {createFileRoute} from '@tanstack/react-router'
import {useForm} from '@tanstack/react-form'
import { zodValidator } from '@tanstack/zod-form-adapter'
import {z} from 'zod';

const groupSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    description: z.string().min(1, 'Description is required'),
});


export const Route = createFileRoute('/create/group/')({
    component: RouteComponent,
})

function RouteComponent() {
    const form = useForm({
        defaultValues: {
            title: '',
            description: '',
        },
        validatorAdapter: zodValidator(),
        validators: {
            onChange: groupSchema
        },
        onSubmit: async ({value}) => {
            console.log(value)
        },
    })

    return (
        <div>
            <h1>Create Group</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    form.handleSubmit()
                }}
            >
                <div>
                    <form.Field
                        name="title"
                        children={(field) => (
                            <div>
                                <input
                                    name={field.title}
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />
                                {field.state.error && <p>{field.state.meta.errors.join(",")}</p>}
                            </div>
                        )}
                    />
                    <form.Field
                        name="description"
                        children={(field) => (
                            <div>
                                <textarea
                                    name={field.description}
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />
                                {field.state.error && <p>{field.state.error}</p>}
                            </div>
                        )}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
