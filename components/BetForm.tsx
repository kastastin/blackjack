"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormItem,
  FormField,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  betAmount: z
    .number({
      required_error: "Bet amount has to be between 5 and 100",
    })
    .min(5, { message: "Minimum bet is 5" })
    .max(100, { message: "Maximum bet is 100" }),
});

export default function BetForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      betAmount: undefined,
    },
  });

  const setBetAmount = (amount: number) => {
    form.setValue("betAmount", amount);
  };

  const handleMin = () => setBetAmount(5);
  const handleMax = () => setBetAmount(100);
  const handleDouble = () => {
    const currentAmount = form.getValues("betAmount");
    setBetAmount(Math.min(currentAmount * 2, 100));
  };
  const handleHalf = () => {
    const currentAmount = form.getValues("betAmount");
    setBetAmount(Math.max(Math.floor(currentAmount / 2), 5));
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <div className="grid grid-cols-4 gap-2">
          <Button
            type="button"
            className="rounded-sm px-4 py-2 font-bold uppercase underline underline-offset-2"
            onClick={handleMin}
          >
            Min
          </Button>
          <Button
            type="button"
            className="rounded-sm px-4 py-2 font-bold uppercase underline underline-offset-2"
            onClick={handleDouble}
          >
            x2
          </Button>
          <Button
            type="button"
            className="rounded-sm px-4 py-2 font-bold uppercase underline underline-offset-2"
            onClick={handleHalf}
          >
            x/2
          </Button>
          <Button
            type="button"
            className="rounded-sm px-4 py-2 font-bold uppercase underline underline-offset-2"
            onClick={handleMax}
          >
            Max
          </Button>
        </div>
        <FormField
          control={form.control}
          name="betAmount"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="number"
                  placeholder="5 - 100"
                  {...field}
                  value={field.value !== undefined ? field.value : ""}
                  onChange={(e) =>
                    field.onChange(
                      e.target.value ? parseInt(e.target.value, 10) : undefined
                    )
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full rounded-sm px-4 py-2 font-bold uppercase underline underline-offset-2"
        >
          Make a bet
        </Button>
      </form>
    </Form>
  );
}
