import { useState } from "react";

const options = [
    "Music Trend Reports + Cultural Compass",
    "Music Searches & Licensing",
    "Bespoke Composition",
    "Re-Records",
    "Artist partnerships",
];

const Contact = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("Services needed");

    return (
        <section
            id="contact"
            className="relative w-screen bg-cover bg-center left-1/2 -translate-x-1/2 mt-20"
            style={{ backgroundImage: "url('/contact.png')" }}
        >
            <div className="flex justify-center gap-4 px-4 py-14 md:py-10 md:px-14">
                <div className=" w-full lg:max-w-3xl xl:max-w-2xl bg-[var(--color-light-100)]  px-2 py-6 md:py-10 md:px-14 text-center" >
                    <h3 className="h3 mb-4">Lets make music that matters</h3>
                    <p className="body text-[var(--color-green-700)] mb-6 ">Whether you need track ideas, an original score or want to cover a famous track, we're ready to get started.</p>
                    <a href="mailto:hello@freereinmusic.com" className=" body-medium text-[var(--color-green-700)]  ">hello@freereinmusic.com</a>

                    <form className="flex flex-col gap-6 mt-12">
                        <fieldset className="flex flex-col space-y-4 w-full">
                            <input className="form-field body-medium" type="text" name="name" placeholder="Name" />
                            <input className="form-field body-medium" type="text" name="role" placeholder="Company role" />
                            <input className="form-field body-medium" type="email" name="email" placeholder="Email" required />

                            <div className="relative w-full" >
                                <button
                                    type="button"
                                    onClick={() => setOpen(prev => !prev)}
                                    className=" w-full text-left form-field body-medium items-center grid grid-cols-[1fr_16px]"
                                > {value}
                                    <img src="/arrowOpen.svg" alt="arrowOpen"
                                           className={` w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                                    />
                                </button>

                                {open && (
                                    <ul className=" absolute z-50 w-full bg-[var(--color-light-100)] text-[var(--color-dark-700)]"
                                    >
                                        {options.map((option) => (
                                            <li
                                                key={option}
                                                onClick={() => {
                                                    setValue(option);
                                                    setOpen(false);
                                                }}
                                                className={`body text-[var(--color-dark-700)]  cursor-pointer px-4 py-4  transition border-b border-[var(--color-light-200)]
                                                 hover:bg-[var(--color-dark-700)] hover:text-[var(--color-light-200)]                                         
                                                `}
                                            >
                                                {option}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            <textarea className="body-medium form-field resize-none" rows={2}
                                      name="message" placeholder="Message / link to brief"
                            />

                            <label className="flex items-start gap-6 cursor-pointer mt-8 mb-14">
                                <input
                                    type="checkbox"
                                    name="privacy"
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

                                <span className="caption text-left text-[var(--color-dark-700)]">
                                    We’ll only use your details to respond to your enquiry.
                                </span>
                            </label>


                            <button
                                type="submit"
                                className="btn-primary uppercase"
                            >
                                Brief us
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </section>

    )
}
export default Contact
