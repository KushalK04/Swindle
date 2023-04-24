import Head from "next/head";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import styles from '../styles/Ai.module.css'
import BottomNav from "@/Components/NavBarBottom";

export default function ChatBot() {

  

  const [botResponse, setBotResponse] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = (message) => {
    const url = "https://api.openai.com/v1/chat/completions";
    const headers = {
      "Content-type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
    };
    const data = {
      model: "gpt-3.5-turbo-0301",
      messages: [{ role: "user", content: message }],
    };

    setIsLoading(true);
    axios
      .post(url, data, { headers: headers })
      .then((response) => {
        console.log(response);
        setBotResponse(response.data.choices[0].message.content);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();

    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { type: "user", message: inputValue },
    ]);

    sendMessage(inputValue);

    setInputValue("");
  };

  useEffect(() => {
    if (botResponse !== "") {
      setChatLog((prevChatLog) => [
        ...prevChatLog,
        { type: "bot", message: botResponse },
      ]);
      setBotResponse("");
    }
  }, [botResponse]);

  return (
    <>
      <Head>
        <title>Swindle</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Layer_1(3).svg" />
      </Head>

      <main className={styles.main}>
        <div className={styles.Container}>
          <div className={styles.messagesContainer}>
          {chatLog.map((message, index) => (
            <div
              key={index}
              className={
                message.type === "bot" ? styles.botMessage : styles.userMessage
              }
            >
              {message.message}
            </div>
          ))}
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <textarea
              className={styles.textArea}
              type="text"
              placeholder="Ask About Scams!"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isLoading} 
            />
            <button type="submit" className={styles.button}>
                Send
            </button>
          </form>
        </div>
        <BottomNav/>
      </main>
    </>
  );
}

console.log(process.env.API_KEY);


