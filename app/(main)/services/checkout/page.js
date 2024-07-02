// "use client";

// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import { useCheckoutStore } from "../_store";
// import { getUser, getUserId, submitCheckout } from "./action";
// import { useEffect } from "react";
// import { useState } from "react";

// function page() {
//   const [user, setUser] = useState(null);
//   const { services } = useCheckoutStore();

//   const handleSubmit = async () => {
//     try {
//       const review = await submitCheckout(name, userId);
//       console.log("Review submitted successfully!", review);
//     } catch (error) {
//       console.error("Failed to submit review:", error);
//     }
//   };

//   useEffect(() => {
//     const getUserInfo = async () => {
//       try {
//         const idUser = await getUserId();
//         const userLogin = await getUser(idUser);
//         console.log("user", userLogin);
//         setUser(userLogin);
//       } catch (error) {
//         console.error("Failed to fetch user:", error);
//       }
//     };

//     getUserInfo();
//   }, []);

//   const totalPrice = services.reduce((total, service) => {
//     const price = parseFloat(service.price.replace("$", ""));
//     return total + price;
//   }, 0);

//   return (
//     <div className="flex w-full justify-center items-center py-12">
//       <Card
//         className="overflow-hidden  min-w-96"
//         x-chunk="dashboard-05-chunk-4"
//       >
//         <CardHeader className="flex flex-row items-start bg-muted/50">
//           <div className="grid gap-0.5">
//             <CardTitle className="group flex items-center gap-2 text-lg">
//               Services Order
//             </CardTitle>
//           </div>
//         </CardHeader>
//         <CardContent className="p-6 text-sm">
//           <div className="grid gap-3">
//             <div className="font-semibold">Services Details</div>
//             <ul className="grid gap-3">
//               {services.map((service, index) => (
//                 <li key={index} className="flex items-center justify-between">
//                   <span className="text-muted-foreground">{service.name}</span>
//                   <span>{service.price}</span>
//                 </li>
//               ))}
//             </ul>
//             <Separator className="my-2" />
//             <ul className="grid gap-3">
//               <li className="flex items-center justify-between font-semibold">
//                 <span className="text-muted-foreground">Total</span>
//                 <span>{totalPrice}</span>
//               </li>
//             </ul>
//           </div>
//           <Separator className="my-4" />
//           <div className="grid gap-3">
//             <div className="font-semibold">Customer Information</div>
//             <dl className="grid gap-3">
//               <div className="flex items-center justify-between">
//                 <dt className="text-muted-foreground">Customer</dt>
//                 <dd>{user.fullname}</dd>
//               </div>
//               <div className="flex items-center justify-between">
//                 <dt className="text-muted-foreground">Email</dt>
//                 <dd>
//                   <a href="mailto:">liam@acme.com</a>
//                 </dd>
//               </div>
//               <div className="flex items-center justify-between">
//                 <dt className="text-muted-foreground">Phone</dt>
//                 <dd>
//                   <a href="tel:">+1 234 567 890</a>
//                 </dd>
//               </div>
//             </dl>
//           </div>
//           <Separator className="my-4" />
//           <div className="w-full flex justify-end">
//             <Button variant="outlined">Batal</Button>
//             <Button type="submit" onClick={handleSubmit}>
//               Reserve
//             </Button>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// export default page;
// "use client";

// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import { useCheckoutStore } from "../_store";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// function Page() {
//   const router = useRouter();
//   const [user, setUser] = useState(null);
//   const { services } = useCheckoutStore();

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await fetch("/api/reservation");
//         const userData = await response.json();
//         setUser(userData);
//       } catch (error) {
//         console.error("Failed to fetch user:", error);
//       }
//     };

//     fetchUser();
//   }, []);

//   const handleSubmit = async () => {
//     try {
//       const totalPrice = services.reduce((total, service) => {
//         const price = parseFloat(service.price.replace("$", ""));
//         return total + price;
//       }, 0);

//       const response = await fetch("/api/reservation", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: user.fullname,
//           userId: user.id_user,
//           totalPrice,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error("Error submitting review");
//       }

//       const reservation = await response.json();
//       console.log("Review submitted successfully!", reservation);

//       router.push("/");
//     } catch (error) {
//       console.error("Failed to submit review:", error);
//     }
//   };

//   if (!user) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="flex w-full justify-center items-center py-12">
//       <Card className="overflow-hidden min-w-96">
//         <CardHeader className="flex flex-row items-start bg-muted/50">
//           <div className="grid gap-0.5">
//             <CardTitle className="group flex items-center gap-2 text-lg">
//               Services Order
//             </CardTitle>
//           </div>
//         </CardHeader>
//         <CardContent className="p-6 text-sm">
//           <ServiceDetails services={services} />
//           <Separator className="my-4" />
//           <CustomerInformation user={user} />
//           <Separator className="my-4" />
//           <div className="w-full flex justify-end gap-2">
//             <Button variant="outlined">Cancel</Button>
//             <Button type="submit" onClick={handleSubmit}>
//               Reserve
//             </Button>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// const ServiceDetails = ({ services }) => {
//   const totalPrice = services.reduce((total, service) => {
//     const price = parseFloat(service.price.replace("$", ""));
//     return total + price;
//   }, 0);

//   return (
//     <div className="grid gap-3">
//       <div className="font-semibold">Services Details</div>
//       <ul className="grid gap-3">
//         {services.map((service, index) => (
//           <li key={index} className="flex items-center justify-between">
//             <span className="text-muted-foreground">{service.name}</span>
//             <span>{service.price}</span>
//           </li>
//         ))}
//       </ul>
//       <Separator className="my-2" />
//       <ul className="grid gap-3">
//         <li className="flex items-center justify-between font-semibold">
//           <span className="text-muted-foreground">Total</span>
//           <span>{totalPrice}</span>
//         </li>
//       </ul>
//     </div>
//   );
// };

// const CustomerInformation = ({ user }) => (
//   <div className="grid gap-3">
//     <div className="font-semibold">Customer Information</div>
//     <dl className="grid gap-3">
//       <div className="flex items-center justify-between">
//         <dt className="text-muted-foreground">Customer</dt>
//         <dd>{user.fullname}</dd>
//       </div>
//       <div className="flex items-center justify-between">
//         <dt className="text-muted-foreground">Email</dt>
//         <dd>
//           <a href={`mailto:${user.email}`}>{user.email}</a>
//         </dd>
//       </div>
//       <div className="flex items-center justify-between">
//         <dt className="text-muted-foreground">Phone</dt>
//         <dd>
//           <a href={`tel:${user.phone}`}>{user.phone}</a>
//         </dd>
//       </div>
//     </dl>
//   </div>
// );

// export default Page;

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCheckoutStore } from "../_store";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { useRouter } from "next/navigation";

function Page() {
  const [user, setUser] = useState(null);
  const [bookingTime, setBookingTime] = useState("");
  const { services } = useCheckoutStore();

  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/reservation");
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };

    fetchUser();
  }, []);

  const handleSubmit = async () => {
    try {
      console.log("Masuk handle submit");
      const totalPrice = services.reduce((total, service) => {
        const price = parseFloat(service.price.replace("$", ""));
        return total + price;
      }, 0);

      const response = await fetch("/api/reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user.fullname,
          userId: user.id_user,
          totalPrice,
          bookingTime,
        }),
      });

      if (!response.ok) {
        throw new Error("Error submitting review");
      }

      const reservation = await response.json();
      console.log("Review submitted successfully!", reservation);

      router.push("/");
    } catch (error) {
      console.error("Failed to submit review:", error);
    }
  };

  const handleTimeChange = (event) => {
    const time = event.target.value;
    setBookingTime(time);
  };

  const isTimeValid = (time) => {
    const [hours, minutes] = time.split(":").map(Number);
    return hours >= 9 && hours < 21;
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex w-full justify-center items-center py-12">
      <Card className="overflow-hidden min-w-96">
        <CardHeader className="flex flex-row items-start bg-muted/50">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-lg">
              Services Order
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-6 text-sm">
          <ServiceDetails services={services} />
          <Separator className="my-4" />
          <CustomerInformation user={user} />
          <Separator className="my-4" />
          <BookingTimeInput
            time={bookingTime}
            onTimeChange={handleTimeChange}
            isValid={isTimeValid(bookingTime)}
          />
          <Separator className="my-4" />
          <div className="w-full flex justify-end gap-2">
            <Button variant="outlined">Cancel</Button>
            <Button onClick={handleSubmit} disabled={!isTimeValid(bookingTime)}>
              Reserve
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

const ServiceDetails = ({ services }) => {
  const totalPrice = services.reduce((total, service) => {
    const price = parseFloat(service.price.replace("$", ""));
    return total + price;
  }, 0);

  return (
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
  );
};

const CustomerInformation = ({ user }) => (
  <div className="grid gap-3">
    <div className="font-semibold">Customer Information</div>
    <dl className="grid gap-3">
      <div className="flex items-center justify-between">
        <dt className="text-muted-foreground">Customer</dt>
        <dd>{user.fullname}</dd>
      </div>
      <div className="flex items-center justify-between">
        <dt className="text-muted-foreground">Email</dt>
        <dd>
          <a href={`mailto:${user.email}`}>{user.email}</a>
        </dd>
      </div>
      <div className="flex items-center justify-between">
        <dt className="text-muted-foreground">Phone</dt>
        <dd>
          <a href={`tel:${user.phone}`}>{user.phone}</a>
        </dd>
      </div>
    </dl>
  </div>
);

const BookingTimeInput = ({ time, onTimeChange, isValid }) => (
  <div className="grid gap-3">
    <div className="font-semibold">Select Booking Time</div>
    <input
      type="time"
      value={time}
      onChange={onTimeChange}
      className={`border p-2 ${!isValid && "border-red-500"}`}
      min="09:00"
      max="21:00"
      required
    />
    {!isValid && (
      <p className="text-red-500">
        Please select a time between 9:00 AM and 9:00 PM.
      </p>
    )}
  </div>
);

export default Page;
