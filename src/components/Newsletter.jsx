import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import useIsMobile from "../hooks/useIsMobile";
import { toast } from "react-toastify";

const Newsletter = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const isMobile = useIsMobile();

  const styles = {
    container: {
      background:
        "linear-gradient(rgba(0,0,0,0.5), rgba(255, 255, 255, 0.5)), url(https://i.pinimg.com/originals/d8/2d/02/d82d026cf9b5f7d8dba5efd40f8b9938.jpg) center",
      display: "flex",
      flexDirection: "column",
      width: "100vw",
      minHeight: "70vh",
      alignItems: "center",
      color: "white",
      padding: 40,
      justifyContent: "flex-start",
    },
    title: {
      fontSize: 40,
    },
    desc: {
      fontSize: 30,
    },
    inputContainer: {
      width: isMobile ? "90%" : "50%",
      marginTop: 20,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      // backgroundColor: "#ffffff99",
    },
  };

  const handleChange = ({ target: input }) => {
    const name = input.name;
    const value = input.value;

    const newData = { ...data };
    newData[name] = value;

    setData(newData);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log(data);
    console.log("taped...");
    toast.info("Thank you!", {
      position: "top-center",
      style: {}
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.title}>News Letter.</div>
      <div style={styles.desc}>
        Subscribe to receive email everytime a new product comes out.
      </div>
      <form style={styles.inputContainer} onSubmit={handleSubscribe} >
        <Input
        required
          onChange={handleChange}
          placeHolder="First Name"
          value={data.firstName}
          name="firstName"
          label="First Name"
        />
        <Input
          required 
          type="email"
          onChange={handleChange}
          placeHolder="Last Name"
          name="lastName"
          value={data.lastName}
          label="Last Name"
        />
        <Input
          required
          onChange={handleChange}
          placeHolder="Email"
          name="email"
          value={data.email}
          label="Email"
        />
        <Button type="submit" width={300} title="Subscribe" />
      </form>
    </div>
  );
};

export default Newsletter;
