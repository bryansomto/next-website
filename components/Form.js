import { useState } from "react";
import { withSwal } from "react-sweetalert2";
import Button from "./Button";

function MessageForm({ swal, handleToggle }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      name,
      email,
      message,
    };

    const validateEmail = (email) => {
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return regex.test(email);
    };

    if (data.name === "" || data.email === "" || data.message === "") {
      swal.fire({
        title: "Message not sent!",
        text: "All input fields are required!",
        icon: "error",
        confirmButtonColor: "#BA1A1A",
      });
      return false;
    }
    if (validateEmail(data.email)) {
      fetch("../api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        if (res.status === 200) {
          swal
            .fire({
              title: "Message sent!",
              text: "You'll hear from us.",
              icon: "success",
              confirmButtonColor: "#386A1F",
            })
            .then((result) => {
              if (result.isConfirmed) {
                setSubmitted(true);
                setName("");
                setEmail("");
                setMessage("");
              }
            });
        }
      });
    } else {
      swal.fire({
        title: "Message not sent!",
        text: "Email is not valid!",
        icon: "error",
        confirmButtonColor: "#BA1A1A",
      });
      return false;
    }
  };

  return (
    <div id="messageMe" className="font-body">
      <p className="text-sm md:text-base text-primary capitalize mb-2">
        Send me a message
      </p>

      <div className="space-y-.5">
        <div className="space-y-2">
          <input
            className="input"
            name="name"
            type="text"
            placeholder="Enter your Name..."
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            className="input"
            name="email"
            type="email"
            placeholder="Enter your Email..."
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <textarea
            placeholder="Enter your Message..."
            required
            className="input h-20 py-3"
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="">
          <Button
            secondary="true"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}

export default withSwal(({ swal, handleToggle }, ref) => (
  <MessageForm swal={swal} handleToggle={handleToggle} />
));
