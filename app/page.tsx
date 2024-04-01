"use client";
import Image from "next/image";
import { toast } from "react-toastify";

export default function Home() {
  const sendNotification = () => {
    toast.success("Yaay! You just tapped the send notification button!", {
      position: "top-center",
      theme: "dark",
    });
  };

  return (
    <div className="pwa-notifaction-app-container w-full min-h-screen bg-black flex justify-center items-center pt-2.125rem pb-4.313rem">
      <div className="flex-col items-center justify-center">
        <h2 className="text-center text-heading text-white font-medium">
          Lorem Ipsum...
        </h2>
        <p className="text-center text-sub-heading text-dim-white mt-4 mb-6.25rem font-normal">
          Lorem ipsum dolor sit amet.
        </p>
        <div className="image-container w-full flex justify-center items-center px-4">
          <Image
            src="/illustration.png"
            alt="illustration image"
            width={344}
            height={344}
            className="max-h-21.5rem"
          />
        </div>
        <div className="notification-button-container w-full px-6 mt-6.75rem">
          <div className="notification-button-wrapper">
            <button
              onClick={sendNotification}
              className="font-bold py-0.813rem w-full sm:w-auto sm:px-5.719rem notification-button text-white rounded-lg cursor-pointer relative z-10"
            >
              Send Notification
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
