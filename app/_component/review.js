import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { StarIcon } from "lucide-react";
import GiveReview from "./giveReview";
import prisma from "@/lib/prisma";

async function Review() {
  const reviewData = await prisma.review.findMany({
    take: 5,
    orderBy: {
      created: "desc",
    },
  });

  return (
    <section className="bg-background px-4 py-12 md:px-6 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-2 text-muted-foreground">
            Hear from our satisfied customers about their experiences.
          </p>
        </div>
        <div className="grid gap-8">
          {reviewData.map((data, index) => (
            <>
              <div className="flex gap-4" key={index}>
                <Avatar className="w-12 h-12 border">
                  <AvatarImage src="/user_placeholder.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold">{data.name}</h3>
                    <span className="text-sm text-muted-foreground">
                      2 days ago
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <StarIcon
                        key={index}
                        className={`w-5 h-5 ${
                          index < data.rate
                            ? "fill-primary"
                            : "fill-muted stroke-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground">{data.comment}</p>
                </div>
              </div>
              <Separator />
            </>
          ))}
        </div>
        {/* Review button */}
        <div className="flex justify-center pt-12">
          <GiveReview />
        </div>
      </div>
    </section>
  );
}

export default Review;
