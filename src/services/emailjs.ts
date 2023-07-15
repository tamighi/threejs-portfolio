import emailjs from "@emailjs/browser";

type EmailProps = {
  name: string;
  email: string;
  message: string;
};

const email = {
  send: async ({ name, email, message }: EmailProps) => {
    return emailjs.send(
      import.meta.env.VITE_EMAIL_SERVICE,
      import.meta.env.VITE_EMAIL_TEMPLATE,
      {
        from_name: name,
        to_name: "Thomas",
        reply_to: email,
        to_email: "amighithomas@gmail.com",
        message: message,
      },
      import.meta.env.VITE_EMAIL_PUBLIC_KEY
    );
  },
};

export default email;
