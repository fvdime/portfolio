import React from "react";

const Footer = ({Content}: {Content: string}) => {
  return (
    <footer className="w-full flex items-center justify-center text-sm border-t pt-4 dark:border-zinc-400 font-semibold">
      {Content} <span className="underline ms-1 font-bold">faya</span>
    </footer>
  );
};

export default Footer;
