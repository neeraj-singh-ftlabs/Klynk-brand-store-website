"use client";
import { Button } from "@relume_io/relume-ui";
import { useState } from "react";

const SubscribeModal = ({ show, onClose }: any) => {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 p-2"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full "
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {" "}
        <p className="text-sm font-semibold">Sub Title</p>
        <h6 className="text-2xl font-bold mb-3">Subscribe to our newsletter</h6>
        <form>
          <input
            type="email"
            placeholder="Enter your email"
            className="border p-3 w-full mb-10 rounded mt-5 "
          />
          <Button
            onClick={onClose}
            className=" text-white p-3 rounded justify-center w-full"
          >
            Subscribe
          </Button>
        </form>
        {/* <Button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ×
        </Button> */}
      </div>
    </div>
  );
};

export default SubscribeModal;
