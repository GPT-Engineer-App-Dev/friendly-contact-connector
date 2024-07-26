import { Package2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-red-500">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex items-center gap-4 text-sm text-white">
          <Package2 className="h-6 w-6" />
          <p>© 2024 Acme Inc. All rights reserved.</p>
        </div>
        <nav className="flex gap-4 text-sm text-white">
          <a href="#" className="hover:underline hover:text-gray-200">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
