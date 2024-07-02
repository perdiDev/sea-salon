"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCheckoutStore } from "../_store";
import { submitCheckout } from "./action";

async function page() {
  const { services } = useCheckoutStore();

  const handleSubmit = async () => {
    try {
      const review = await submitCheckout(name);
      console.log("Review submitted successfully!", review);
    } catch (error) {
      console.error("Failed to submit review:", error);
    }
  };

  const totalPrice = services.reduce((total, service) => {
    const price = parseFloat(service.price.replace("$", ""));
    return total + price;
  }, 0);

  return (
    <div className="flex w-full justify-center items-center py-12">
      <Card
        className="overflow-hidden  min-w-96"
        x-chunk="dashboard-05-chunk-4"
      >
        <CardHeader className="flex flex-row items-start bg-muted/50">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-lg">
              Services Order
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-6 text-sm">
          <div className="grid gap-3">
            <div className="font-semibold">Services Details</div>
            <ul className="grid gap-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-center justify-between">
                  <span className="text-muted-foreground">{service.name}</span>
                  <span>{service.price}</span>
                </li>
              ))}
            </ul>
            <Separator className="my-2" />
            <ul className="grid gap-3">
              <li className="flex items-center justify-between font-semibold">
                <span className="text-muted-foreground">Total</span>
                <span>{totalPrice}</span>
              </li>
            </ul>
          </div>
          <Separator className="my-4" />
          <div className="grid gap-3">
            <div className="font-semibold">Customer Information</div>
            <dl className="grid gap-3">
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Customer</dt>
                <dd>Liam Johnson</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Email</dt>
                <dd>
                  <a href="mailto:">liam@acme.com</a>
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Phone</dt>
                <dd>
                  <a href="tel:">+1 234 567 890</a>
                </dd>
              </div>
            </dl>
          </div>
          <Separator className="my-4" />
          <div className="w-full flex justify-end">
            <Button variant="outlined">Batal</Button>
            <Button type="submit" onClick={handleSubmit}>
              Reserve
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default page;
