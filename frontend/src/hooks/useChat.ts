import { useState, useEffect, useRef } from 'react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const abortController = useRef<AbortController | null>(null);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    abortController.current = new AbortController();

    try {
      const res = await fetch('http://localhost:8000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          resume_context: true,
        }),
        signal: abortController.current.signal,
      });

      if (!res.ok) throw new Error('Chat failed');

      const data = await res.json();
      setMessages((prev) => [...prev, data]);
    } catch (err: any) {
      if (err.name !== 'AbortError') {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: 'Sorry, something went wrong 😓' },
        ]);
      }
    } finally {
      setIsLoading(false);
      abortController.current = null;
    }
  };

  const cancelRequest = () => {
    abortController.current?.abort();
  };

  return {
    messages,
    input,
    setInput,
    sendMessage,
    isLoading,
    cancelRequest,
  };
}