import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoSrc from "./logo.png";


const Signup: React.FC = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors("");
    };

    const validate = () => {
        if (!form.name || !form.email || !form.password || !form.confirmPassword) {
            return "All fields are required";
        }

        if (!/\S+@\S+\.\S+/.test(form.email)) {
            return "Invalid email format";
        }

        if (form.password.length < 6) {
            return "Password must be at least 6 characters";
        }

        if (form.password !== form.confirmPassword) {
            return "Passwords do not match";
        }

        return "";
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const validationError = validate();
        if (validationError) {
            setErrors(validationError);
            return;
        }

        try {
            // 🔥 Replace with your backend API
            console.log("Signup data:", form);

            alert("Signup successful 🚀");

            // Reset form
            setForm({
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
            });
        } catch (err) {
            setErrors("Something went wrong. Try again.");
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <div style={{ textAlign: "center", marginBottom: 30 }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 10 }}>
                        <img
                            src={logoSrc}
                            alt="Voyaka logo"
                            style={{ width: 52, height: 52, borderRadius: 14, objectFit: "contain", filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.18))" }}
                        />
                        <span style={{ fontFamily: "'Sora', sans-serif", fontSize: 24, fontWeight: 800, color: "#1a1a2e" }}>Voyaka</span>
                    </div>
                    <h1 style={{ fontFamily: "'Sora', sans-serif", fontSize: 22, fontWeight: 800, color: "#1a1a2e", marginBottom: 6 }}>
                        Create Account
                    </h1>
                    <p style={{ fontSize: 14, color: "rgb(0,0,0)" }}>Join Voyaka & explore the world</p>
                </div>

                <form onSubmit={handleSubmit} style={styles.form}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={form.name}
                        onChange={handleChange}
                        style={styles.input}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={form.email}
                        onChange={handleChange}
                        style={styles.input}
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        style={styles.input}
                    />

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        style={styles.input}
                    />

                    {errors && <p style={styles.error}>{errors}</p>}

                    <button type="submit" style={styles.button}>
                        Sign Up
                    </button>
                </form>

                <p style={styles.footer}>
                    Already have an account?{" "}
                    <span
                        style={{ color: "#0e1a3a", fontWeight: 700, cursor: "pointer" }}
                        onClick={() => navigate("/signin")}
                    > Signin</span>
                </p>
            </div>
        </div >
    );
};

export default Signup;

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#71bdfc",
    },
    card: {
        width: 380,
        padding: 30,
        borderRadius: 16,
        background: "#ffffff",
        backdropFilter: "blur(12px)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
        color: "#fff",
    },
    title: {
        fontSize: 28,
        fontStyle: "Arial",
        fontWeight: 800,
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        color: "#cbd5f5",
        marginBottom: 20,
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: 12,
    },
    input: {
        padding: "12px 14px",
        borderRadius: 8,
        border: "1px solid #334155",
        background: "#ffffff",
        color: "#fff",
        outline: "none",
    },
    button: {
        marginTop: 10,
        padding: "12px",
        borderRadius: 8,
        border: "none",
        background: "#0e1a3a",
        color: "#fff",
        fontWeight: 600,
        cursor: "pointer",
    },
    error: {
        color: "#f87171",
        fontSize: 12,
    },
    footer: {
        marginTop: 15,
        fontSize: 13,
        textAlign: "center",
        color: "rgb(0,0,0)  ",
    },
    link: {
        color: "#0e1a3a",
        cursor: "pointer",
        fontWeight: 600,
    },
};
