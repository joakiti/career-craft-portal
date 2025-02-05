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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const ConsultationForm = () => {
  const [email, setEmail] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mailtoUrl = `mailto:hello@mikkelkajandersen.dk?subject=Consultation Request: ${encodeURIComponent(selectedService)}&body=${encodeURIComponent(`Service: ${selectedService}\nContact Email: ${email}`)}`;
    window.location.href = mailtoUrl;
    
    toast({
      title: "Request Sent",
      description: "Your consultation request has been prepared in your default email client.",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="bg-accent hover:bg-accent/90 text-white border-accent/20 px-8 py-6 text-lg font-semibold tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 animate-pulse hover:animate-none"
        >
          🚀 Schedule Your Free Consultation
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-card border-accent/10">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">Request Consultation</DialogTitle>
          <DialogDescription className="text-gray-400">
            Please select a service and provide your email for consultation.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="service" className="text-white">Select Service</Label>
            <Select required onValueChange={setSelectedService}>
              <SelectTrigger className="bg-card-lighter border-accent/10 text-white">
                <SelectValue placeholder="Choose a service" />
              </SelectTrigger>
              <SelectContent className="bg-card border-accent/10">
                <SelectItem value="full-time" className="text-white">Full-Time Project</SelectItem>
                <SelectItem value="part-time" className="text-white">Part-Time Engagement</SelectItem>
                <SelectItem value="consultancy" className="text-white">Consultancy Package</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="bg-card-lighter border-accent/10 text-white placeholder:text-gray-500"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-accent hover:bg-accent/90 text-white font-semibold tracking-wide shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Submit Request
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationForm;