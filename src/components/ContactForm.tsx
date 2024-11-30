import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mailtoUrl = `mailto:hello@mikkelkajandersen.dk?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name}\n\n${message}`)}`;
    window.location.href = mailtoUrl;
    
    toast({
      title: "Email client opened",
      description: "Your message has been prepared in your default email client.",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="bg-accent hover:bg-accent/90 text-primary border-primary px-8 py-6 text-lg font-semibold whitespace-nowrap animate-pulse"
        >
          Send me a message →
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-card border-accent">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">Contact Me</DialogTitle>
          <DialogDescription className="text-gray-400">
            Send me a message and I'll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              className="bg-card-lighter border-accent/50 text-white placeholder:text-gray-500"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-white">Message</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
              required
              className="bg-card-lighter border-accent/50 text-white placeholder:text-gray-500 min-h-[120px]"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold"
          >
            Send Message
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;