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
    
    const mailtoUrl = `mailto:hello@mikkelkajandersen.dk?subject=Consultation Request: ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name}\n\n${message}`)}`;
    window.location.href = mailtoUrl;
    
    toast({
      title: "Message Prepared",
      description: "Your consultation request has been prepared in your default email client.",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="bg-accent hover:bg-accent/90 text-primary border-primary px-8 py-6 text-lg font-medium"
        >
          Request Consultation
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-card border-accent/10">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">Schedule Consultation</DialogTitle>
          <DialogDescription className="text-gray-400">
            Please provide your details for a professional consultation.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">Full Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              className="bg-card-lighter border-accent/10 text-white placeholder:text-gray-500"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-white">Project Details</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Please describe your project requirements"
              required
              className="bg-card-lighter border-accent/10 text-white placeholder:text-gray-500 min-h-[120px]"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-accent hover:bg-accent/90 text-primary font-medium"
          >
            Submit Request
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;