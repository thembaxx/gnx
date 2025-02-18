"use client";

import axios from "axios";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Spinner } from "../ui/spinner";

const BrowserIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    color={"#fafafa"}
    fill={"none"}
    {...props}
  >
    <path
      d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M2.5 9H21.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M6.99981 6H7.00879"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.9998 6H11.0088"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GalleryBoldIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    color="currentColor"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18 8C18 9.10457 17.1046 10 16 10C14.8954 10 14 9.10457 14 8C14 6.89543 14.8954 6 16 6C17.1046 6 18 6.89543 18 8Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9426 1.25H12.0574C14.3658 1.24999 16.1748 1.24998 17.5863 1.43975C19.031 1.63399 20.1711 2.03933 21.0659 2.93414C21.9607 3.82895 22.366 4.96897 22.5603 6.41371C22.75 7.82519 22.75 9.63423 22.75 11.9426V12.0309C22.75 13.9397 22.75 15.5023 22.6463 16.7745C22.5422 18.0531 22.3287 19.1214 21.8509 20.0087C21.6401 20.4001 21.3812 20.7506 21.0659 21.0659C20.1711 21.9607 19.031 22.366 17.5863 22.5603C16.1748 22.75 14.3658 22.75 12.0574 22.75H11.9426C9.63423 22.75 7.82519 22.75 6.41371 22.5603C4.96897 22.366 3.82895 21.9607 2.93414 21.0659C2.14086 20.2726 1.7312 19.2852 1.51335 18.0604C1.29935 16.8573 1.2602 15.3603 1.25207 13.5015C1.25 13.0287 1.25 12.5286 1.25 12.001V11.9426C1.24999 9.63424 1.24998 7.82519 1.43975 6.41371C1.63399 4.96897 2.03933 3.82895 2.93414 2.93414C3.82895 2.03933 4.96897 1.63399 6.41371 1.43975C7.82519 1.24998 9.63424 1.24999 11.9426 1.25ZM6.61358 2.92637C5.33517 3.09825 4.56445 3.42514 3.9948 3.9948C3.42514 4.56445 3.09825 5.33517 2.92637 6.61358C2.75159 7.91356 2.75 9.62178 2.75 12C2.75 12.2905 2.75 12.5715 2.75034 12.8435L3.75148 11.9675C4.66275 11.1702 6.03617 11.2159 6.89238 12.0721L11.1821 16.3618C11.8693 17.0491 12.9511 17.1428 13.7463 16.5839L14.0445 16.3744C15.1887 15.5702 16.7368 15.6634 17.7764 16.599L20.6068 19.1463C20.8917 18.548 21.0609 17.7618 21.1513 16.6527C21.2494 15.4482 21.25 13.9459 21.25 12C21.25 9.62178 21.2484 7.91356 21.0736 6.61358C20.9018 5.33517 20.5749 4.56445 20.0052 3.9948C19.4355 3.42514 18.6648 3.09825 17.3864 2.92637C16.0864 2.75159 14.3782 2.75 12 2.75C9.62178 2.75 7.91356 2.75159 6.61358 2.92637Z"
      fill="currentColor"
    />
  </svg>
);

const LinkIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    color="currentColor"
    fill={"none"}
    {...props}
  >
    <path
      d="M9.5 14.5L14.5 9.49995"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M16.8463 14.6095L19.4558 12C21.5147 9.94108 21.5147 6.60298 19.4558 4.54411C17.397 2.48524 14.0589 2.48524 12 4.54411L9.39045 7.15366M14.6095 16.8463L12 19.4558C9.94113 21.5147 6.60303 21.5147 4.54416 19.4558C2.48528 17.3969 2.48528 14.0588 4.54416 12L7.1537 9.39041"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    color="currentColor"
    fill={"none"}
    {...props}
  >
    <path
      d="M14 14L16.5 16.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M16.4333 18.5252C15.8556 17.9475 15.8556 17.0109 16.4333 16.4333C17.0109 15.8556 17.9475 15.8556 18.5252 16.4333L21.5667 19.4748C22.1444 20.0525 22.1444 20.9891 21.5667 21.5667C20.9891 22.1444 20.0525 22.1444 19.4748 21.5667L16.4333 18.5252Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M16 9C16 5.13401 12.866 2 9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16C12.866 16 16 12.866 16 9Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

const formSchema = z.object({
  url: z.string(),
});

function AddBookmark() {
  const [isFocused, setIsFocused] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [iconSrc, setIconSrc] = useState<string | null>(null);
  const [data, setData] = useState<
    | {
        description: string;
        domain: string;
        duration: number;
        favicon: string;
        images: string[];
        sitename: string[];
        title: string;
        url: string;
      }
    | undefined
  >();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsProcessing(true);

    const baseUrl = "https://icon.horse/icon";
    const { url } = values;

    let uri = url.toLowerCase().replace("https://", "");
    uri = uri.toLowerCase().replace("http://", "");
    uri = uri.split("/")[0];

    const resp = await axios.get(`${baseUrl}/${uri}`, { responseType: "blob" });

    if (resp && resp.data) {
      setIconSrc(URL.createObjectURL(resp.data));
    }

    const res = await axios.get(
      `https://jsonlink.io/api/extract?api_key=${"pk_52c60789c9555f458ac93583e430f60f3c91ae99"}&url=${url}`
    );

    setData(res?.data);

    setIsProcessing(false);
  }

  return (
    <div className="space-y-4">
      <div
        className={cn(
          "bg-[#242629] rounded-2xl py min-h-24 aspect-square w-full",
          {
            "animate-pulse": isProcessing,
          }
        )}
      >
        {iconSrc && (
          <div className="flex items-center justify-center h-full w-full">
            <div className="p-4 rounded-2xl gap-12 w-full h-full flex flex-col text-center items-center relative">
              <div className="absolute top-0 left-0 m-6">
                <Image
                  src={iconSrc}
                  alt=""
                  height={36}
                  width={36}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="mt-auto px-2 pb-2">
                {data && (
                  <div className="text-left space-y-6">
                    {data.domain && (
                      <div>
                        <a
                          href="https://support.mozilla.org/en-US/kb/how-manage-your-camera-and-microphone-permissions"
                          className="items-center text-blue-500 flex space-x-1.5 w-full"
                          target="_blank"
                        >
                          <LinkIcon className="h-3 w-3 shrink-0 mt-px" />
                          <p className="text-sm font-medium truncate">
                            {data.domain}
                          </p>
                        </a>
                      </div>
                    )}
                    <div className="space-y-4">
                      <div className="space-y-1.5">
                        <p className="text-base font-semibold text-pretty line-clamp-2">
                          {data.title}
                        </p>
                        <p className="text-xs opacity-80 underline">
                          {data.url}
                        </p>
                      </div>
                      <p className="text-sm leading-6 text-pretty line-clamp-4 opacity-90">
                        {data.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        {!iconSrc && (
          <div className="h-full w-full flex items-center justify-center flex-col gap-6">
            <GalleryBoldIcon className="h-16 w-16 text-icon" />
            <p className="text-sm text-secondary-foreground/40">
              Search for website icon
            </p>
          </div>
        )}
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div
                    className={cn(
                      "relative h-12 rounded-lg overflow-hidden border-2",
                      {
                        "outline ring-3": isFocused,
                      }
                    )}
                  >
                    <Input
                      className="h-full rounded-lg text-base pl-4 pr-14 truncate border-none ring-0"
                      placeholder="eg. www.office.com"
                      {...field}
                      disabled={isProcessing}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                    />
                    <div className="absolute right-1 p-0 top-1 h-full rounded-sm">
                      <Button
                        className="w-10"
                        disabled={isProcessing}
                        type="submit"
                        variant="default"
                      >
                        {!isProcessing && <SearchIcon className="!h-5 !w-5" />}
                        {isProcessing && (
                          <Spinner className="!h-6 !w-6" variant="infinite" />
                        )}
                      </Button>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
}

export default AddBookmark;
