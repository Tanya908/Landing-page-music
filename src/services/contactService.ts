import type {ContactPayload} from "../types/contact.ts";

export async function submitContactForm(data: ContactPayload) {
    const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        throw new Error("Failed to submit form");
    }
    return res.json();
}