import lbvimg from "@/assets/lbv.webp";
import DivMaxWidth from "@/components/container/DivMaxWidth";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import errorimg from "../assets/error.svg";
import successimg from "../assets/success.svg";
import Loader from "../components/loader/Loader";
import { sendEmail } from "../services/email";
import { validate } from "../utils/validateForm";

const Contact = () => {
    const devisRef = React.useRef(null);
    const [submitInfo, setSubmitInfo] = React.useState({
        isLoading: false,
        success: false,
        error: false,
    });
    const [captacha, setCaptacha] = React.useState(false);
    const questionsRef = React.useRef(null);
    const [isValid, setIsValid] = React.useState(false);
    const [reload, setReload] = React.useState(false);
    const [errors, setErrors] = React.useState({
        name: {
            message: "",
            error: false,
        },
        email: {
            message: "",
            error: false,
        },
        message: {
            message: "",
            error: false,
        },
    });

    const [isVisible, setIsVisible] = React.useState({
        devis: true,
        questions: false,
    });

    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        message: "",
    });

    const recaptchaRef = React.useRef();

    console.log(captacha);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // Valider tous les champs à chaque changement
        setIsValid(
            validate(
                {
                    ...formData,
                    [name]: value,
                },
                setErrors
            )
        );
    };

    const subtmitClick = async () => {
        if (!isValid) return;
        if (!captacha) return;
        setSubmitInfo({
            isLoading: true,
            success: false,
            error: false,
        });
        try {
            let result = await sendEmail(formData);
            if (result?.status === 200) {
                setSubmitInfo({
                    isLoading: false,
                    success: true,
                    error: false,
                });
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });
            }
        } catch {
            setSubmitInfo({
                isLoading: false,
                success: false,
                error: true,
            });
            setFormData({
                name: errors.name?.error ? "" : formData.name,
                email: errors.email?.error ? "" : formData.email,
                message: errors.message?.error ? "" : formData.message,
            });
        } finally {
            setTimeout(() => {
                setSubmitInfo({
                    isLoading: false,
                    success: false,
                    error: false,
                });

                setIsValid(false);
            }, 3000);
        }
    };

    console.log("bool", { isValid, captacha });

    const handleClick = async () => {
        const token = recaptchaRef?.current.getValue(); // Récupère le token généré quand la case est cochée
        if (!token) {
            recaptchaRef.current.reset();
            // alert("Veuillez vérifier le reCAPTCHA !");
            return;
        }

        try {
            // Tu envoies le token à Integromat avec tes données de formulaire
            const response = await fetch(import.meta.env.VITE_INTEGROMAT_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    recaptchaToken: token,
                    secret: import.meta.env.VITE_RECAPTCHA_SECRET_KEY,
                }),
            });

            // Traiter la réponse
            const result = await response.json();
            console.log(result);
            if (result.success) {
                await subtmitClick();
            } else {
                // alert("Erreur veuillez réessayer");
            }
        } catch (error) {
            console.log(error);
        }
    };

    // console.log(isVisible);
    // console.log(errors);

    React.useEffect(() => {
        if (!devisRef || !questionsRef) {
            setReload(!reload);
        }
    }, [reload]);

    React.useEffect(() => {
        let devisCurrent = devisRef?.current;
        let questionsCurrent = questionsRef?.current;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible((prevState) => ({
                            ...prevState,
                            [entry.target.id]: true,
                        }));
                    }
                });
            },
            { threshold: 0.05 }
        );

        if (devisRef.current) observer.observe(devisRef.current);
        if (questionsRef.current) observer.observe(questionsRef.current);

        return () => {
            if (devisCurrent) observer.unobserve(devisCurrent);
            if (questionsCurrent) observer.unobserve(questionsCurrent);
        };
    }, []);

    console.log("captcha", captacha);

    if (!lbvimg) return null;

    return (
        <div
            className={`w-full flex flex-col gap-0 `}
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${lbvimg})`,
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
            }}
        >
            <div className="w-full min-h-[24rem] max-h-[24rem] max-sm:max-h-[12rem] transition ">
                {submitInfo.success && (
                    <div className="w-full h-screen flex items-center justify-center backdrop-blur-lg fixed z-20">
                        <div
                            className="w-[15em] min-h-[15em] justify-center  bg-slate-900  p-5 rounded-3xl flex flex-col items-center gap-5
                            shadow-2xl border-3 border-green-500
                        "
                        >
                            <h1 className="text-xl text-center text-green-500 font-semibold">
                                Message envoyé!
                            </h1>
                            <img
                                src={successimg}
                                className="max-w-[3em] animate__animated animate__bounceIn animate-delay-slow"
                                alt="success"
                            />
                        </div>
                    </div>
                )}
                {submitInfo.isLoading && <Loader />}
                {submitInfo.error && (
                    <div className="w-full h-screen flex items-center justify-center backdrop-blur-lg fixed z-20">
                        <div
                            className="w-[15em] min-h-[15em] justify-center  bg-slate-900 p-5 rounded-3xl flex flex-col items-center gap-5
                            shadow-2xl border-3 border-red-500
                        "
                        >
                            <h1 className="text-xl text-center text-red-500 font-semibold">
                                Erreur veuillez réessayer
                            </h1>
                            <img
                                src={errorimg}
                                className="max-w-[3em] animate__animated animate__bounceIn animate-delay-fast"
                                alt="error"
                            />
                        </div>
                    </div>
                )}
            </div>
            <div className="w-full bg-slate-900">
                <DivMaxWidth>
                    <div
                        className={`p-28 w-full bg-slate-700 overflow-hidden max-sm:-mt-44 sm:-mt-56 max-sm:px-7 max-sm:py-10 animate__animated ${
                            isVisible.devis &&
                            "animate__fadeInUp animate-delay-fast"
                        } `}
                        ref={devisRef}
                        id="devis"
                    >
                        <div className="mb-10 w-full flex flex-col items-start ">
                            <p
                                className={`text-lg text-yellow-500 font-semibold animate__animated ${
                                    isVisible.devis &&
                                    "animate__fadeInUp animate-delay-fast"
                                }`}
                            >
                                Obtenir un devis
                            </p>
                            <h2
                                className={`text-4xl text-white font-serif text-start text-nowrap font-semibold animate__animated ${
                                    isVisible.devis &&
                                    "animate__fadeInUp animate-delay-medium"
                                }`}
                            >
                                Me contacter
                            </h2>
                            <p
                                className={`text-start mt-7 text-md animate__animated ${
                                    isVisible.devis &&
                                    "animate__fadeInUp animate-delay-slow"
                                }`}
                            >
                                Merci de donner un maximum de détail sur le
                                projet afin que je puisse évaluer correctement
                                la charge de travail que représente votre
                                projet. Cela permettra aussi d&apos;avoir un
                                premier chiffrage au plus proche du devis final.
                            </p>
                        </div>
                        <div
                            className={`w-full h-full flex flex-row items-center gap-5 max-sm:flex-col animate__animated ${
                                isVisible.devis &&
                                "animate__fadeInUp animate-delay-last"
                            }`}
                        >
                            <div className="min-w-[20em] max-lg:min-w-[14em] flex flex-col justify-between max-sm:min-w-full">
                                <input
                                    type="text"
                                    name="name"
                                    className={`w-full h-14 p-4 border-2 bg-slate-700 rounded-lg transition-all duration-500 ease-in-out outline-1 focus:outline-none 
                                        ${
                                            errors.name?.error
                                                ? "focus:border-red-500"
                                                : "focus:border-yellow-500 "
                                        }
                                        ${
                                            errors.name?.error &&
                                            "border-red-500"
                                        }  `}
                                    placeholder="Nom et Prénom"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <div className="min-h-5">
                                    {errors.name?.error && (
                                        <p className="text-red-500 pt-1 text-sm text-left">
                                            *{errors.name.message}
                                        </p>
                                    )}
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    className={`w-full h-14 p-4 border-2 bg-slate-700 rounded-lg mt-3 transition-all duration-500 ease-in-out focus:outline-none
                                                ${
                                                    errors.email?.error
                                                        ? "focus:border-red-500"
                                                        : "focus:border-yellow-500"
                                                } 
                                                ${
                                                    errors.email?.error &&
                                                    "border-red-500"
                                                }`}
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <div className="min-h-5">
                                    {errors.email?.error && (
                                        <p className="text-red-500 pt-1 text-sm text-left">
                                            *{errors.email.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="w-full flex flex-col">
                                <textarea
                                    name="message"
                                    id="message"
                                    className={`w-full min-h-36 border-2 bg-slate-700 rounded-lg p-4 transition-all duration-500 ease-in-out focus:outline-none 
                                            ${
                                                errors.message?.error &&
                                                "border-red-500"
                                            } 
                                            ${
                                                errors.message?.error
                                                    ? "focus:border-red-500"
                                                    : "focus:border-yellow-500"
                                            } `}
                                    placeholder="Description du projet"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                                <div className="min-h-5">
                                    {errors.message?.error && (
                                        <p className="text-red-500 pt-1 text-sm text-left">
                                            *{errors.message.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div
                            className={`mt-5 flex flex-col animate__animated ${
                                isVisible.devis &&
                                "animate__fadeInUp animate__delay-1s"
                            }`}
                        >
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                className="w-full grecaptcha-badge"
                                badge={"bottomleft"}
                                sitekey={
                                    import.meta.env.VITE_RECAPTCHA_SITE_KEY
                                }
                                onChange={() => {
                                    setCaptacha(!captacha);
                                }}
                            />
                            {!captacha && isValid && (
                                <p
                                    className={`text-sm pt-2 text-left text-red-500`}
                                >
                                    *Veuillez cocher la case ci-dessous pour
                                    prouver que vous n&apos;êtes pas un robot.
                                </p>
                            )}
                        </div>
                        <div
                            className={`w-full flex justify-start mt-9 animate__animated ${
                                isVisible.devis &&
                                "animate__fadeInUp animate-delay-last"
                            } `}
                        >
                            <button
                                className={`font-semibold p-4 rounded-lg border-2 border-yellow-500
                                transition-all duration-1000 ease-in-out ${
                                    isValid && captacha
                                        ? "bg-yellow-500 text-slate-700"
                                        : "text-yellow-500"
                                }`}
                                onClick={handleClick}
                                disabled={
                                    !isValid ||
                                    !captacha ||
                                    submitInfo.isLoading
                                }
                            >
                                Obtenir un devis
                            </button>
                        </div>
                    </div>
                    <div className="w-full flex flex-row py-28 justify-start max-sm:flex-col max-sm:py-16">
                        <div className="w-full">
                            <div className="text-left flex flex-col gap-3 mb-7">
                                <h1
                                    className={`text-lg text-yellow-500 max-md:text-2xl font-semibold animate__animated ${
                                        isVisible.questions &&
                                        "animate__fadeInUp animate-delay-fast"
                                    }`}
                                >
                                    FAQ
                                </h1>
                                <div
                                    className={`flex flex-col font-serif justify-center gap-3 animate__animated ${
                                        isVisible.questions &&
                                        "animate__fadeInUp animate-delay-medium"
                                    }`}
                                >
                                    <h1 className="text-4xl  font-bold text-nowrap">
                                        Les questions
                                    </h1>
                                    <h1 className="text-4xl  font-bold ">
                                        fréquentes
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div
                            className="w-full"
                            ref={questionsRef}
                            id="questions"
                        >
                            <div className={`flex flex-col gap-10 `}>
                                <div className="text-left">
                                    <h1
                                        className={`mb-3 text-3xl playfair max-sm:text-2xl animate__animated ${
                                            isVisible.questions &&
                                            "animate__fadeInUp animate-delay-medium"
                                        }`}
                                    >
                                        Quels sont vos disponibilités ?
                                    </h1>
                                    <p
                                        className={`md:text-lg animate__animated ${
                                            isVisible.questions &&
                                            "animate__fadeInUp animate-delay-medium"
                                        }`}
                                    >
                                        Je suis actuellement disponible
                                    </p>
                                </div>
                                <div className="text-left">
                                    <h1
                                        className={`mb-3 text-3xl playfair max-sm:text-2xl animate__animated ${
                                            isVisible.questions &&
                                            "animate__fadeInUp animate-delay-medium"
                                        }`}
                                    >
                                        Quels sont vos tarifs ?
                                    </h1>
                                    <p
                                        className={`md:text-lg animate__animated ${
                                            isVisible.questions &&
                                            "animate__fadeInUp animate-delay-medium"
                                        }`}
                                    >
                                        La tarification dépend du projet et
                                        surtout du temps qui sera nécessaire
                                        pour le mener à bien. À titre indicatif
                                        mon tarif journalier moyen se situe aux
                                        alentour de{" "}
                                        <b className="text-yellow-500">200€</b>{" "}
                                        /jour
                                    </p>
                                </div>
                                <div className="text-left">
                                    <h1
                                        className={`mb-3 text-3xl playfair max-sm:text-2xl animate__animated ${
                                            isVisible.questions &&
                                            "animate__fadeInUp animate-delay-medium"
                                        }`}
                                    >
                                        Effectuez-vous des missions en Agence ?
                                    </h1>
                                    <p
                                        className={`md:text-lg animate__animated ${
                                            isVisible.questions &&
                                            "animate__fadeInUp animate-delay-medium"
                                        }`}
                                    >
                                        J&apos;effectue l&apos;ensemble de mes
                                        missions à distance.
                                    </p>
                                </div>
                                <div className="text-left">
                                    <h1
                                        className={`mb-3 text-3xl playfair max-sm:text-2xl animate__animated ${
                                            isVisible.questions &&
                                            "animate__fadeInUp animate-delay-medium"
                                        }`}
                                    >
                                        Faites-vous la partie design des
                                        projets?
                                    </h1>
                                    <p
                                        className={`md:text-lg animate__animated ${
                                            isVisible.questions &&
                                            "animate__fadeInUp animate-delay-medium"
                                        }`}
                                    >
                                        Je ne suis malheureusement pas en
                                        capacité d&apos;effectuer le design
                                        d&apos;une application aussi il sera
                                        nécessaire de fournir le design si la
                                        mission le nécessite. Je vous donnerai
                                        le contact d&apos;un designer web si
                                        vous n&apos;en avez pas.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </DivMaxWidth>
            </div>
        </div>
    );
};

export default Contact;
