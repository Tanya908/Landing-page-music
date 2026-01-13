import type {ContactFormData} from "../types/contact.ts";

export type FormErrors = {
    name?: string[];
    role?: string[];
    email?: string[];
};

export function validateForm(data: ContactFormData): FormErrors {
    const errors: FormErrors = {};

    if (!data.name.trim()) {
        errors.name = ["Name is required"];
    } else {
        if (data.name.trim().length < 3) {
            errors.name = [...(errors.name ?? []), "Name must be at least 3 characters"];
        }
        if (/\d/.test(data.name)) {
            errors.name = [...(errors.name ?? []), "Name cannot contain numbers"];
        }
    }

    if (!data.role.trim()) {
        errors.role = ["Role is required"];
    } else {
        if (data.role.trim().length < 3) {
            errors.role = [...(errors.role ?? []), "Role must be at least 3 characters"];
        }
        if (/\d/.test(data.role)) {
            errors.role = [...(errors.role ?? []), "Role cannot contain numbers"];
        }
    }

    if (!data.email.trim()) {
        errors.email = ["Email is required"];
    } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
        errors.email = ["Please enter a valid email address"];
    }

    return errors;
}
