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
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto URL with form data
    const mailtoUrl = `mailto:mikkel_ander@hotmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`;
    
    // Open default email client
    window.location.href = mailtoUrl;
    
    toast({
      title: "Email client opened",
      description: "Your message has been prepared in your default email client.",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-card hover:bg-card-lighter text-white border-accent">
          Contact Me
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact Me</DialogTitle>
          <DialogDescription>
            Send me a message and I'll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
              required
            />
          </div>
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;