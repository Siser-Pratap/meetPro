"use client"

import {Toaster} from 'sonner';

const ToastProvider = () => {
  return (
    <Toaster
      position="top-right"
      expand={true}
      richColors
      closeButton
      toastOptions={{
        style: {
          background: "rgba(28, 31, 46, 0.95)", // Using your bg-dark-2 color
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(37, 42, 65, 0.5)", // Using your dark-3 color
          color: "white",
          borderRadius: "12px",
          padding: "16px",
          fontWeight: "500",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
        },
        className: "toast-custom",
        duration: 3000,
      }}
      theme="dark"
    />
  )
}

export default ToastProvider
