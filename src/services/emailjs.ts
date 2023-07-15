import emailjs from "@emailjs/browser";

type EmailProps = {
  name: string;
  email: string;
  message: string;
};

const email = {
  send: async ({ name, email, message }: EmailProps) => {
    return emailjs.send(
      "service_yk850xe",
      "template_fyggjsd",
      {
        from_name: name,
        to_name: "Thomas",
        reply_to: email,
        to_email: "amighithomas@gmail.com",
        message: message,
      },
      "cbf4-DN-h3V2IcMYN"
    );
  },
};

export default email;
