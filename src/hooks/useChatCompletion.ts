import { useState } from "react";
import { API_URL } from "../constants/globals";
import { Message } from "../constants/types";
import { useMessageStore } from "./useMessageStore";

export function useChatCompletion() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messages = useMessageStore((state) => state.messages);
  const addMessageToStore = useMessageStore((state) => state.addMessageToStore);

  const sendMessage = async () => {
    if (input.trim() === "") return;

    const newMessage: Message = { content: input, role: "user" };
    addMessageToStore(newMessage);

    setInput("");
    setLoading(true);

    const updatedMessages = [...messages, newMessage];

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_APP_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: updatedMessages.map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
        }),
      });

      const data = await response.json();

      if (data.choices && data.choices.length > 0) {
        const assistantMessage: Message = {
          content: data.choices[0].message.content,
          role: "assistant",
        };

        addMessageToStore(assistantMessage);
        console.log(messages);
      }
    } catch (error) {
      console.error("Error fetching response:", error);
    } finally {
      setLoading(false);
    }
  };

  return { messages, input, setInput, sendMessage, loading };
}
