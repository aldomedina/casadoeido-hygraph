"use client";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const MailchimpForm = () => {
  const t = useTranslations("footer");
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSuccess(false);

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true); // Start loading

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Something went wrong. Please try again.");
      } else {
        setSuccess(true);
        setEmail(""); // Clear input after success
        setTimeout(() => setSuccess(false), 3000); // Reset success after 3 seconds
      }
    } catch (error) {
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="bg-beige mb-4">
      <form
        onSubmit={handleSubmit}
        className="container flex flex-col md:flex-row md:justify-between md:items-center text-sm py-3"
      >
        <label className="mb-2 md:mr-10 md:mb-0" htmlFor="email-input">
          {t("newsletter")}
        </label>
        <div className="flex flex-1">
          <input
            className="px-4 py-2 font-extralight flex-1 mr-6"
            id="email-input"
            type="email"
            value={email}
            onChange={(event) => {
              if (error) setError("");
              setEmail(event.target.value);
            }}
            required
          />
          {error && <p className="mt-2 mr-6 text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className={`btn ${
              success ? "bg-green-500 text-white" : "btn-white"
            } transition-all duration-300 ease-in-out flex items-center justify-center`}
          >
            {loading ? (
              <span className="loader border-t-transparent border-white"></span>
            ) : success ? (
              "Subscribed!"
            ) : (
              t("subscribe")
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MailchimpForm;
