import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export const ContactSection = () => {
  return (
    <section className="py-16 px-6 max-w-3xl mx-auto" id="contact">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
      <form className="space-y-4 bg-gray-50 p-6 rounded-2xl shadow-md">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Name
          </label>
          <Input id="name" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email
          </label>
          <Input id="email" type="email" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="message">
            Message
          </label>
          <Textarea id="message" rows={5} placeholder="Tell me about your project..." />
        </div>
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </section>
  );
};
