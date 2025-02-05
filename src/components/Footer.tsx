import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-accent/10 py-8 mt-auto">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            <p className="font-medium text-white">Mikkel Kaj Andersen</p>
            <p>CVR: 39399903</p>
            <p>Est. December 20, 2022</p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/mikkel-kaj-andersen-b0a097a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 