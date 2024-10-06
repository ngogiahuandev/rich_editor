import React from "react";

export default function Footer() {
  return (
    <div className="fixed bottom-0 right-0 left-0 h-10 p-2 bg-transparent backdrop-blur-3xl">
      <div>
        <div className="text-center">
          <span className="text-sm text-gray-500">
            Built with ❤️ by{" "}
            <a
              href="https://github.com/ngogiahuandev"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              NgoGiaHuan
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
