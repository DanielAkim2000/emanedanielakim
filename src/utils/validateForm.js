const validate = (formData, setErrors) => {
    let errors = {}; // Crée un objet d'erreurs local

    if (!formData.name || formData.name.trim() === "") {
        errors.name = {
            message: "Nom requis",
            error: true,
        };
    } else if (formData.name.length < 3) {
        errors.name = {
            message: "Nom trop court",
            error: true,
        };
    }

    if (!formData.email) {
        errors.email = {
            message: "Email requis",
            error: true,
        };
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = {
            message: "Email invalide",
            error: true,
        };
    }

    if (formData.message.length < 10 || formData.message.trim() === "") {
        errors.message = {
            message: "Message trop court",
            error: true,
        };
    } else if (formData.message.length > 1000) {
        errors.message = {
            message: "Message trop long",
            error: true,
        };
    }

    // Met à jour l'état des erreurs
    setErrors(errors);

    // Vérifie si tout est valide
    return Object.values(errors).every((error) => !error.error);
};

export { validate };
