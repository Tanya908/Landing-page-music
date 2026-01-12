import type {ContactFormData} from "../components/sections/Contact.tsx";

export async function ContactService(data: ContactFormData) {
    const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        const error = await res.text();
        throw new Error(error || "Failed to submit form");
    }
}