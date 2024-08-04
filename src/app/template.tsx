"use client";
import SubscribeModal from "@/components/common/SubscribeModal";
import { useState, useEffect } from "react";
import { usePageLeave } from "react-use";

export default function Template({ children }: { children: React.ReactNode }) {

  const [modalVisible, setModalVisible] = useState(false);
  usePageLeave(() => {
    if (!modalVisible) {
      setModalVisible(true);
    }
  });

  const handleClose = () => setModalVisible(false);
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (!modalVisible) {
        event.preventDefault();
        setModalVisible(true);
        event.returnValue = ""; // Required for modern browsers
      }
    };
     

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden" && !modalVisible) {
        setModalVisible(true);
      }
    };

    // window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      // window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [modalVisible]);


  return (
    <div>
      {modalVisible && (
        <SubscribeModal show={modalVisible} onClose={handleClose} />
      )}
      {children}
    </div>
  );
}
