export interface ContactFormData {
    name: string;
    role: string;
    email: string;
    service: string;
    message: string;
    privacyAccepted: boolean;
}

export interface ContactPayload {
    name: string;
    role: string;
    email: string;
    service: string;
    message: string;
}