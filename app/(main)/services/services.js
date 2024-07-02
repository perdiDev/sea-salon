"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useCheckoutStore } from "./_store";
import { useRouter } from "next/navigation";

export default function Component() {
  const [services, setServices] = useState([
    {
      category: "Haircuts and Styling",
      items: [
        {
          name: "Classic Haircut",
          description: "A timeless cut tailored to your style and face shape.",
          price: "$45",
        },
        {
          name: "Blowout",
          description:
            "Volumizing and smoothing treatment for a salon-fresh look.",
          price: "$55",
        },
        {
          name: "Updo",
          description: "Elegant hairstyle perfect for special occasions.",
          price: "$75",
        },
      ],
    },
    {
      category: "Manicure and Pedicure",
      items: [
        {
          name: "Classic Manicure",
          description:
            "Nourishing treatment to keep your nails healthy and groomed.",
          price: "$35",
        },
        {
          name: "Deluxe Pedicure",
          description: "Indulgent foot treatment to revitalize and refresh.",
          price: "$65",
        },
        {
          name: "Gel Manicure",
          description:
            "Long-lasting, chip-resistant nail polish for a flawless finish.",
          price: "$55",
        },
      ],
    },
    {
      category: "Facial Treatments",
      items: [
        {
          name: "Deep Cleansing Facial",
          description:
            "Purify and nourish your skin for a radiant, healthy glow.",
          price: "$85",
        },
        {
          name: "Hydrating Facial",
          description:
            "Quench and replenish your skin for a plump, dewy complexion.",
          price: "$95",
        },
        {
          name: "Anti-Aging Facial",
          description:
            "Reduce the appearance of fine lines and wrinkles for a youthful look.",
          price: "$115",
        },
      ],
    },
  ]);

  const router = useRouter();

  const { checkoutServices } = useCheckoutStore();
  const [savedServices, setSavedServices] = useState([]);

  const handleSaveService = (service) => {
    let isAdded = true;
    if (savedServices.some((s) => s.name === service.name)) {
      handleRemoveService(service);
      isAdded = false;
    } else {
      setSavedServices([...savedServices, service]);
    }
    console.log("Masuk disini");
    toast(service.name + (isAdded ? " Saved" : " Remove"), {
      description:
        "The service has been " +
        (isAdded ? "added" : removed) +
        " to your saved list.",
    });
  };

  const handleRemoveService = (service) => {
    setSavedServices(savedServices.filter((s) => s.name !== service.name));
    toast(service.name + " Remove", {
      description: "The service has been remove from your saved list.",
    });
  };

  const handleCheckout = () => {
    console.log("Checking out saved services:", savedServices);
    checkoutServices(savedServices);

    router.push("/services/checkout");
  };

  const totalPrice = savedServices.reduce((total, service) => {
    const price = parseFloat(service.price.replace("$", ""));
    return total + price;
  }, 0);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16 relative">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Our Services</h1>
      {services.map((category, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            {category.category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.items.map((item, itemIndex) => (
              <Card
                key={itemIndex}
                className={`bg-background rounded-lg shadow-md overflow-hidden cursor-pointer ${
                  savedServices.some((s) => s.name === item.name)
                    ? "bg-accent text-green-50"
                    : ""
                }`}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-muted-foreground mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">{item.price}</span>
                    {savedServices.some((s) => s.name === item.name) ? (
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-transparent"
                        onClick={() => handleRemoveService(item)}
                      >
                        Remove
                      </Button>
                    ) : (
                      <Button size="sm" onClick={() => handleSaveService(item)}>
                        Reserve
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
      {savedServices.length > 0 && (
        <div className="fixed bottom-4 right-4 w-[85%] md:w-96 bg-background shadow-lg p-2 md:p-4 rounded-lg z-50">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h3 className="text-base md:text-xl font-semibold mb-4">
                  Saved Services
                </h3>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 md:space-y-4 max-h-[50vh] overflow-y-auto">
                  {savedServices.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <h4 className="text-base md:text-lg font-semibold">
                          {service.name}
                        </h4>
                        <p className="text-muted-foreground">{service.price}</p>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleRemoveService(service)}
                        className="bg-red-400 text-green-50"
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="mt-4 flex justify-between">
            <div className="text-lg font-bold mr-4">
              Total: ${totalPrice.toFixed(2)}
            </div>
            <Button size="sm" onClick={handleCheckout}>
              Checkout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
