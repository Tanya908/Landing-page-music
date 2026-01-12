"use client";

import { useState } from "react";
import {useScroll} from "../../contexts/ScrollContext.tsx";
import Button from "../ui/Button.tsx";
import {ContactService} from "../../services/contactService.ts"

const options:string[] = [
    "Music Trend Reports + Cultural Compass",
    "Music Searches & Licensing",
    "Bespoke Composition",
    "Re-Records",
    "Artist partnerships",
];

export interface ContactFormData {
    name: string;
    role: string;
    email: string;
    service: string;
    message: string;
    privacyAccepted: boolean;
}

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
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState<ContactFormData>(initialContactFormData);

    const isFormValid =
        formData.name.trim() !== "" &&
        formData.email.trim() !== "" &&
        formData.service.trim() !== "" &&
        formData.privacyAccepted &&
        !loading;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (loading) return;

        setLoading(true);

        try {
            await ContactService(formData);
            setFormData(initialContactFormData);
            setOpen(false);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value, type } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]:
                type === "checkbox"
                    ? (e.target as HTMLInputElement).checked
                    : value,
        }));
    };

    return (
        <section
            ref={sections.contact}
            id="contact"
            className="w-full bg-cover bg-center mt-28 overflow-x-hidden "
            style={{ backgroundImage: "url('/contact.png')" }}
        >
            <div className="flex justify-center gap-4 px-4 py-14 md:py-10 md:px-14">
                <div className=" w-full lg:max-w-3xl xl:max-w-2xl bg-[var(--color-light-100)]  px-2 py-6 md:py-10 md:px-14 text-center" >
                    <h3 className="h3 mb-4">Lets make music that matters</h3>
                    <p className="body text-[var(--color-green-700)] mb-6 ">Whether you need track ideas, an original score or want to cover a famous track, we're ready to get started.</p>
                    <a href="mailto:hello@freereinmusic.com" className=" body-medium text-[var(--color-green-700)]  ">hello@freereinmusic.com</a>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-12">
                        <fieldset className="flex flex-col space-y-4 w-full">
                            <input className="form-field body-medium" type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                            <input className="form-field body-medium" type="text" name="role" placeholder="Company role" value={formData.role} onChange={handleChange} />
                            <input className="form-field body-medium" type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} />

                            <div className="relative w-full" >
                                <button
                                    type="button"
                                    onClick={() => setOpen(prev => !prev)}
                                    className=" w-full text-left form-field body-medium items-center grid grid-cols-[1fr_16px]"
                                > {formData.service || "Services needed"}
                                    <img src="/arrowOpen.svg" alt="arrowOpen"
                                         className={` w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                                    />
                                </button>

                                {open && (
                                    <ul className=" absolute z-50 w-full bg-[var(--color-light-100)]"
                                    >
                                        {options.map((option) => (
                                            <li
                                                key={option}
                                                onClick={() => {
                                                    setFormData(prev => ({ ...prev, service: option }));
                                                    setOpen(false);
                                                }}
                                                className={`body cursor-pointer px-4 py-4 transition border-b border-[var(--color-light-200)]
                                                 hover:bg-[var(--color-dark-700)] hover:text-[var(--color-light-200)] active:bg-[var(--color-dark-700)] active:text-[var(--color-light-200)]`}
                                            >
                                                {option}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            <textarea className="body-medium form-field resize-none" rows={2} name="message"
                                      placeholder="Message / link to brief" value={formData.message} onChange={handleChange}
                            />

                            <label className="flex items-start gap-6 cursor-pointer mt-8 mb-14">
                                <input
                                    type="checkbox"
                                    name="privacyAccepted"
                                    checked={formData.privacyAccepted}
                                    onChange={handleChange}
                                    className="peer hidden"
                                    required
                                />

                                <span
                                    className="w-4 h-4 border border-[var(--color-green-500)]  grid place-items-center
                                               transition [&>img]:opacity-0 peer-checked:[&>img]:opacity-100 aspect-square peer-checked:border-[var(--color-green-100)]"
                                ><img
                                    src="/checkedIcon.svg"
                                    alt="checked"
                                    className="w-3 h-3 transition-opacity"
                                />
                                </span>

                                <span className="caption text-left">
                                    We’ll only use your details to respond to your enquiry.
                                </span>
                            </label>

                            <Button variant="primary" type="submit" disabled={!isFormValid}>
                                {loading ? "Sending..." : "Brief us"}
                            </Button>

                        </fieldset>
                    </form>
                </div>
            </div>
        </section>

    )
}
export default Contact
