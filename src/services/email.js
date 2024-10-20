import emailjs from "@emailjs/browser";

// Cette fonction envoie un email en utilisant EmailJS
export const sendEmail = async (formData) => {
    // Initialise EmailJS avec ta clé publique (pas la User ID)
    emailjs.init({ publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY });
    let templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
    };
    // Envoie le formulaire
    try {
        const result = await emailjs.send(
            import.meta.env.VITE_EMAIL_SERVICE_ID,
            import.meta.env.VITE_EMAIL_TEMPLATE_ID,
            templateParams
        );
        return result;
    } catch (error) {
        return error;
    }
};
