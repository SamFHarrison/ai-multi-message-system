import { create } from "zustand";
import { SYSTEM_PROMPT } from "../constants/data";
import { Message } from "../constants/types";

export interface MessageStore {
  messages: Message[];
  addMessageToStore: (newMessage: Message) => void;
  clearChat: () => void;
}

export const useMessageStore = create<MessageStore>((set) => ({
  messages: [SYSTEM_PROMPT],
  addMessageToStore: (newMessage) =>
    set((state: MessageStore) => ({
      messages: [...state.messages, newMessage],
    })),
  clearChat: () => set({ messages: [SYSTEM_PROMPT] }),
}));
