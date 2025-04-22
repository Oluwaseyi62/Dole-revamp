import React, { useEffect, useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Button from '../components/common/Button';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact | Dolevian';
  }, []);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when field is edited
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        
        // In a real app, you would send the form data to your backend here
        console.log('Form submitted:', formData);
      }, 1500);
    }
  };

  return (
    <div className="pt-24">
      <section className="py-12 bg-dolevian-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h5 className="mb-2 text-sm tracking-wider uppercase text-dolevian-gold">Get In Touch</h5>
            <h1 className="section-title">Contact Us</h1>
            <p className="text-dolevian-gray-600">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="mb-6 font-serif text-2xl">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-dolevian-cream">
                      <MapPin className="w-5 h-5 text-dolevian-gold" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-1 font-serif text-lg">Our Location</h3>
                    <p className="text-dolevian-gray-600">
                      123 Fashion Avenue<br />
                      Osun, Osogbo<br />
                      Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-dolevian-cream">
                      <Phone className="w-5 h-5 text-dolevian-gold" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-1 font-serif text-lg">Phone</h3>
                    <p className="text-dolevian-gray-600">
                      Customer Service: +234 915 263 9685 <br />
                      Orders & Inquiries: +234 915 263 9685
                    </p>
                  </div>
                </div>
      
                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-dolevian-cream">
                      <Mail className="w-5 h-5 text-dolevian-gold" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-1 font-serif text-lg">Email</h3>
                    <p className="text-dolevian-gray-600">
                      Customer Support: support@dolevian.com<br />
                      General Inquiries: info@dolevian.com
                    </p>
                  </div>
                </div>  
                

                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-dolevian-cream">
                      <Clock className="w-5 h-5 text-dolevian-gold" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-1 font-serif text-lg">Business Hours</h3>
                    <p className="text-dolevian-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <h2 className="mb-6 font-serif text-2xl">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="py-8 text-center rounded-md bg-dolevian-cream/50">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-dolevian-success/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-dolevian-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-serif text-xl">Message Sent Successfully!</h3>
                  <p className="mb-6 text-dolevian-gray-600">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block mb-1 text-sm font-medium text-dolevian-gray-700">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`input-field ${errors.name ? 'border-dolevian-error' : ''}`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-dolevian-error">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block mb-1 text-sm font-medium text-dolevian-gray-700">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`input-field ${errors.email ? 'border-dolevian-error' : ''}`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-dolevian-error">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block mb-1 text-sm font-medium text-dolevian-gray-700">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`input-field ${errors.subject ? 'border-dolevian-error' : ''}`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs text-dolevian-error">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-1 text-sm font-medium text-dolevian-gray-700">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className={`input-field resize-none ${errors.message ? 'border-dolevian-error' : ''}`}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-xs text-dolevian-error">{errors.message}</p>
                    )}
                  </div>

                  <div>
                    <Button 
                      type="submit" 
                      className="flex items-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : (
                        <>
                          Send Message <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;