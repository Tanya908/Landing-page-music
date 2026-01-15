"use client";

import { useState, type FormEvent, type ChangeEvent, type FocusEvent } from "react";
import { useScroll } from "../../contexts/ScrollContext";
import Button from "../ui/Button";
import { submitContactForm } from "../../services/contactService";
import { validateForm, type FormErrors } from "../../utils/contactLogic";
import type { ContactFormData } from "../../types/contact";

const initialContactFormData: ContactFormData = {
    name: "",
    role: "",
    email: "",
    service: "",
    message: "",
    privacyAccepted: false,
};

const Contact = () => {
    const { sections } = useScroll();

    const [formData, setFormData] = useState<ContactFormData>(initialContactFormData);
    const [errors, setErrors] = useState<FormErrors>({});
    const [loading, setLoading] = useState(false);

    const validationErrors = validateForm(formData);

    const isFormValid =
        !loading &&
        formData.privacyAccepted &&
        Object.keys(validationErrors).length === 0;

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (loading) return;

        const errors = validateForm(formData);
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        setLoading(true);
        try {
            const { privacyAccepted, ...payload } = formData;

            await submitContactForm(payload);

            setFormData(initialContactFormData);
            setErrors({});
        } catch {
            setErrors({
                email: ["Submission failed. Please try again."],
            });
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]:
                type === "checkbox"
                    ? (e.target as HTMLInputElement).checked
                    : value,
        }));

        if (errors[name as keyof FormErrors]) {
            setErrors(prev => {
                const next = { ...prev };
                delete next[name as keyof FormErrors];
                return next;
            });
        }
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const fieldErrors = validateForm(formData);
        const fieldName = e.target.name as keyof FormErrors;

        if (fieldErrors[fieldName]) {
            setErrors(prev => ({
                ...prev,
                [fieldName]: fieldErrors[fieldName],
            }));
        }
    };

    return (
        <section ref={sections.contact} id="contact"
                 className="w-full bg-cover bg-center mt-28"
                 style={{ backgroundImage: "url('/contact.png')" }}
        >
            <div className="flex justify-center px-4 py-14">
                <div className="w-full max-w-2xl bg-[var(--color-light-100)] px-6 py-10 text-center">
                    <h3 className="h3 mb-4">Lets make music that matters</h3>
                    <p className="body mb-6 text-[var(--color-green-700)]">
                        Whether you need track ideas, an original score or want to cover a famous track, we're ready to get started.
                    </p>
                    <a href="mailto:hello@freereinmusic.com" className="body-bold uppercase text-[var(--color-green-700)]">
                        hello@freereinmusic.com
                    </a>

                    <form onSubmit={handleSubmit} noValidate>
                        <fieldset className="flex flex-col gap-4 mt-11">

                            <label className="flex flex-col">
                                <input
                                    className="form-field" name="name" placeholder="Name"
                                    value={formData.name} onChange={handleChange} onBlur={handleBlur}
                                />
                                {errors.name?.map((err, i) => (
                                    <p key={i} className="error-message">{err}</p>
                                ))}
                            </label>

                            <label className="flex flex-col">
                                <input
                                    className="form-field" name="role" placeholder="Company / Role"
                                    value={formData.role} onChange={handleChange} onBlur={handleBlur}
                                />
                                {errors.role?.map((err, i) => (
                                    <p key={i} className="error-message">{err}</p>
                                ))}
                            </label>

                            <label className="flex flex-col">
                                <input
                                    className="form-field" type="email" name="email" placeholder="Email"
                                    value={formData.email} onChange={handleChange} onBlur={handleBlur}
                                />
                                {errors.email?.map((err, i) => (
                                    <p key={i} className="error-message">{err}</p>
                                ))}
                            </label>

                            <textarea
                                className="form-field resize-none" rows={2} name="message"
                                placeholder="Message / link to brief" value={formData.message} onChange={handleChange}
                            />

                            <label className="flex items-start gap-6 cursor-pointer mt-8 mb-14">
                                <input
                                    type="checkbox" name="privacyAccepted" checked={formData.privacyAccepted}
                                    className="peer hidden" onChange={handleChange}
                                />
                                <span className="w-4 h-4 border border-[var(--color-green-500)] grid place-items-center
                                 transition [&>img]:opacity-0 peer-checked:[&>img]:opacity-100 aspect-square">
                                  <img src="/checkedIcon.svg" alt="checked" className="w-3 h-3" />
                                </span>
                                <span className="caption text-left">
                                  We’ll only use your details to respond to your enquiry.
                                </span>
                            </label>

                            <Button type="submit" disabled={!isFormValid}>
                                {loading ? "Sending..." : "Send"}
                            </Button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
