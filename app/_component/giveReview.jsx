"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SendIcon } from "lucide-react";
import { HeartIcon } from "lucide-react";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { submitReview } from "../actions/review";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";

export default function GiveReview() {
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const handleSubmit = async () => {
    try {
      const review = await submitReview(name, rating, comment);
      console.log("Review submitted successfully!", review);

      setOpen(false);
      router.refresh();
    } catch (error) {
      console.error("Failed to submit review:", error);
    }
  };

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="flex justify-center items-center gap-2">
          <HeartIcon className="size-4 fill-primary" />
          Give Your Review
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Review</DialogTitle>
          <DialogDescription>
            Please give you honest review. Click send to finish.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="w-full flex-row">
            <Rating onClick={handleRating} SVGstyle={{ display: "inline" }} />
          </div>
          <div className="flex flex-col items-start gap-2">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              className="col-span-3"
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <Label htmlFor="comment" className="text-right">
              Comment
            </Label>
            <Textarea
              id="comment"
              className="col-span-3"
              name="comment"
              type="textarea"
              onChange={(e) => setComment(e.target.value)}
              required
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="gap-2" onClick={handleSubmit}>
            <SendIcon className="size-4" /> Send
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
