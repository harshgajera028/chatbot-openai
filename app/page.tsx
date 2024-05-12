"use client";
import { useChat } from "ai/react";
import { IoSendSharp } from "react-icons/io5";
import Textarea from "react-textarea-autosize"
export default function Home() {

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api",
  });

  return (
    <div className="min-h-screen bg-neutral-800  ">
      {messages.length !== 0 ? (
        <div><h1>you have messages</h1></div>
      ) : (
        <div className="w-full flex justify-center pt-32">
          <h1 className="font-bold text-3xl"> Please use the input filed below ⬇️</h1>
        </div >
      )
      }
      <form onSubmit={handleSubmit} className="p-5 fixed bottom-8 left-0 w-{75%} right-0 mx-auto bg-neutral-800">
      <div className="relative flex items-center">
        <Textarea
          tabIndex={0}
          required
          rows={1}
          value={input}
          onChange={handleInputChange}
          autoFocus
          placeholder="Send message..."
          spellCheck={false}
          className="w-full focus:outline-none shadow-teal-700 shadow-xl placeholder:text-gray-200 text-sm text-white p-5 pr-16 rounded-xl bg-neutral-600"
        />
        <button type="submit" className="absolute bg-teal-500 p-2 rounded-lg right-0 mr-5"><IoSendSharp /></button>
      </div>
      </form>
    </div >
  );
}
