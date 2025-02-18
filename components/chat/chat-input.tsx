"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { z } from "zod";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import Gallery from "./gallery";
import Voice from "./voice/voice";

const FormSchema = z.object({
  text: z.string(),
});

const container = {
  hidden: { opacity: 0, x: 48 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: 16, scale: 0.8 },
  show: { opacity: 1, x: 0, scale: 1 },
};

const AiIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.0802 7.89712C11.1568 5.96571 11.6952 5 12.5 5C13.3048 5 13.8432 5.96571 14.9198 7.89712L15.1984 8.3968C15.5043 8.94564 15.6573 9.22007 15.8958 9.40114C16.1343 9.5822 16.4314 9.64942 17.0255 9.78384L17.5664 9.90622C19.6571 10.3793 20.7025 10.6158 20.9512 11.4156C21.1999 12.2153 20.4872 13.0487 19.0619 14.7154L18.6932 15.1466C18.2881 15.6203 18.0856 15.8571 17.9945 16.1501C17.9034 16.443 17.934 16.759 17.9953 17.3909L18.051 17.9662C18.2665 20.19 18.3742 21.3019 17.7231 21.7962C17.072 22.2905 16.0932 21.8398 14.1357 20.9385L13.6292 20.7053C13.073 20.4492 12.7948 20.3211 12.5 20.3211C12.2052 20.3211 11.927 20.4492 11.3708 20.7053L10.8643 20.9385C8.90677 21.8398 7.928 22.2905 7.27688 21.7962C6.62575 21.3019 6.7335 20.19 6.94899 17.9662L7.00474 17.3909C7.06597 16.759 7.09659 16.443 7.00548 16.1501C6.91438 15.8571 6.71186 15.6203 6.30683 15.1466L5.93808 14.7154C4.51276 13.0487 3.8001 12.2153 4.04881 11.4156C4.29751 10.6158 5.34288 10.3793 7.43361 9.90622L7.9745 9.78384C8.56862 9.64942 8.86568 9.5822 9.1042 9.40114C9.34272 9.22007 9.4957 8.94565 9.80165 8.3968L10.0802 7.89712Z"
      fill="currentColor"
    />
    <path
      d="M4.86752 2.50058C4.89751 2.3948 5.08528 2.39416 5.11598 2.49974C5.25618 2.98185 5.51616 3.69447 5.90928 4.08495C6.30241 4.47543 7.01676 4.73058 7.49981 4.86752C7.6056 4.89751 7.60623 5.08528 7.50065 5.11598C7.01854 5.25618 6.30592 5.51616 5.91545 5.90928C5.52497 6.30241 5.26981 7.01676 5.13287 7.49981C5.10288 7.6056 4.91511 7.60623 4.88441 7.50065C4.74421 7.01854 4.48424 6.30592 4.09111 5.91545C3.69798 5.52497 2.98363 5.26981 2.50058 5.13287C2.3948 5.10288 2.39416 4.91511 2.49974 4.88441C2.98185 4.74421 3.69447 4.48424 4.08495 4.09111C4.47543 3.69798 4.73058 2.98363 4.86752 2.50058Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 3.25C19.4142 3.25 19.75 3.58579 19.75 4V4.25H20C20.4142 4.25 20.75 4.58579 20.75 5C20.75 5.41421 20.4142 5.75 20 5.75H19.75V6C19.75 6.41421 19.4142 6.75 19 6.75C18.5858 6.75 18.25 6.41421 18.25 6V5.75H18C17.5858 5.75 17.25 5.41421 17.25 5C17.25 4.58579 17.5858 4.25 18 4.25H18.25V4C18.25 3.58579 18.5858 3.25 19 3.25Z"
      fill="currentColor"
    />
  </svg>
);

const AttachmentIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M19.5 12.0001V13.5001C19.5 17.6422 16.1421 21.0001 12 21.0001C7.85786 21.0001 4.5 17.6422 4.5 13.5001V8C4.5 5.23858 6.73858 3 9.5 3C12.2614 3 14.5 5.23858 14.5 8V13.5C14.5 14.8807 13.3807 16 12 16C10.6193 16 9.5 14.8807 9.5 13.5V9.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CompactIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13 17C13 15.1144 13 14.1716 13.5858 13.5858C14.1716 13 15.1144 13 17 13H18C19.8856 13 20.8284 13 21.4142 13.5858C22 14.1716 22 15.1144 22 17C22 18.8856 22 19.8284 21.4142 20.4142C20.8284 21 19.8856 21 18 21H17C15.1144 21 14.1716 21 13.5858 20.4142C13 19.8284 13 18.8856 13 17Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 3H14C17.7712 3 19.6569 3 20.8284 4.17157C21.7775 5.1206 21.9577 6.86626 21.992 9.49974C22.0042 10.4366 22.0102 10.905 21.7166 11.2025C21.4229 11.5 20.9486 11.5 20 11.5H17.5C14.6716 11.5 13.2574 11.5 12.3787 12.3787C11.5 13.2574 11.5 14.6716 11.5 17.5V19.5C11.5 19.9659 11.5 20.1989 11.4239 20.3827C11.3224 20.6277 11.1277 20.8224 10.8827 20.9239C10.6989 21 10.4659 21 10 21C6.22876 21 4.34315 21 3.17157 19.8284C2 18.6569 2 16.7712 2 13V11C2 7.22876 2 5.34315 3.17157 4.17157C4.34315 3 6.22876 3 10 3ZM8.03033 6.96967C7.73744 6.67678 7.26256 6.67678 6.96967 6.96967C6.67678 7.26256 6.67678 7.73744 6.96967 8.03033L9.68934 10.75H8.5C8.08579 10.75 7.75 11.0858 7.75 11.5C7.75 11.9142 8.08579 12.25 8.5 12.25H11.5C11.9142 12.25 12.25 11.9142 12.25 11.5V8.5C12.25 8.08579 11.9142 7.75 11.5 7.75C11.0858 7.75 10.75 8.08579 10.75 8.5V9.68934L8.03033 6.96967Z"
      fill="currentColor"
    />
  </svg>
);

const ExpandIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    color="currentColor"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13 17C13 15.1144 13 14.1716 13.5858 13.5858C14.1716 13 15.1144 13 17 13H18C19.8856 13 20.8284 13 21.4142 13.5858C22 14.1716 22 15.1144 22 17C22 18.8856 22 19.8284 21.4142 20.4142C20.8284 21 19.8856 21 18 21H17C15.1144 21 14.1716 21 13.5858 20.4142C13 19.8284 13 18.8856 13 17Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M7.5 7.5V10.5M7.5 7.5H10.5M7.5 7.5L11.5 11.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11 21H10C6.22876 21 4.34315 21 3.17157 19.8284C2 18.6569 2 16.7712 2 13V11M22 11C22 7.22876 22 5.34315 20.8284 4.17157C19.6569 3 17.7712 3 14 3H10C6.22876 3 4.34315 3 3.17157 4.17157C2.51839 4.82475 2.22937 5.69989 2.10149 7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const GalleryIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 6.75C15.3096 6.75 14.75 7.30964 14.75 8C14.75 8.69036 15.3096 9.25 16 9.25C16.6904 9.25 17.25 8.69036 17.25 8C17.25 7.30964 16.6904 6.75 16 6.75ZM13.25 8C13.25 6.48122 14.4812 5.25 16 5.25C17.5188 5.25 18.75 6.48122 18.75 8C18.75 9.51878 17.5188 10.75 16 10.75C14.4812 10.75 13.25 9.51878 13.25 8Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9426 1.25H12.0574C14.3658 1.24999 16.1748 1.24998 17.5863 1.43975C19.031 1.63399 20.1711 2.03933 21.0659 2.93414C21.9607 3.82895 22.366 4.96897 22.5603 6.41371C22.75 7.82519 22.75 9.63423 22.75 11.9426V12.0574C22.75 14.3658 22.75 16.1748 22.5603 17.5863C22.366 19.031 21.9607 20.1711 21.0659 21.0659C20.1711 21.9607 19.031 22.366 17.5863 22.5603C16.1748 22.75 14.3658 22.75 12.0574 22.75H11.9426C9.63423 22.75 7.82519 22.75 6.41371 22.5603C4.96897 22.366 3.82895 21.9607 2.93414 21.0659C2.03933 20.1711 1.63399 19.031 1.43975 17.5863C1.24998 16.1748 1.24999 14.3658 1.25 12.0574V11.9426C1.24999 9.63423 1.24998 7.82519 1.43975 6.41371C1.63399 4.96897 2.03933 3.82895 2.93414 2.93414C3.82895 2.03933 4.96897 1.63399 6.41371 1.43975C7.82519 1.24998 9.63423 1.24999 11.9426 1.25ZM3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.77289 16.2449 2.75296 14.7885 2.75038 12.8401L4.24546 11.5319C4.85958 10.9946 5.78515 11.0254 6.36216 11.6024L10.6519 15.8922C11.5968 16.8371 13.0843 16.9659 14.1776 16.1975L14.4758 15.988C15.334 15.3849 16.4951 15.4547 17.2747 16.1564L20.4983 19.0576C20.5334 19.0892 20.5706 19.1168 20.6095 19.1406C20.4478 19.4815 20.2487 19.7617 20.0052 20.0052C19.4355 20.5749 18.6648 20.9018 17.3864 21.0736C16.0864 21.2484 14.3782 21.25 12 21.25C9.62177 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052ZM6.61358 2.92637C5.33517 3.09825 4.56445 3.42514 3.9948 3.9948C3.42514 4.56445 3.09825 5.33517 2.92637 6.61358C2.78124 7.69307 2.75552 9.05407 2.75098 10.8465L3.25771 10.4031C4.46613 9.34572 6.28741 9.40636 7.42282 10.5418L11.7125 14.8315C12.1421 15.261 12.8182 15.3196 13.3152 14.9703L13.6134 14.7607C15.0437 13.7555 16.9788 13.872 18.2782 15.0415L21.0522 17.5381C21.0596 17.4883 21.0667 17.4378 21.0736 17.3864C21.2484 16.0864 21.25 14.3782 21.25 12C21.25 9.62177 21.2484 7.91356 21.0736 6.61358C20.9018 5.33517 20.5749 4.56445 20.0052 3.9948C19.4355 3.42514 18.6648 3.09825 17.3864 2.92637C16.0864 2.75159 14.3782 2.75 12 2.75C9.62177 2.75 7.91356 2.75159 6.61358 2.92637Z"
      fill="currentColor"
    />
  </svg>
);

const SendIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    color="currentColor"
    fill="none"
    {...props}
  >
    <path
      d="M21.0477 3.05293C18.8697 0.707363 2.48648 6.4532 2.50001 8.551C2.51535 10.9299 8.89809 11.6617 10.6672 12.1581C11.7311 12.4565 12.016 12.7625 12.2613 13.8781C13.3723 18.9305 13.9301 21.4435 15.2014 21.4996C17.2278 21.5892 23.1733 5.342 21.0477 3.05293Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M12 12.5L15 9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SimileCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    color="currentColor"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5Z"
      fill="currentColor"
    />
    <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="currentColor" />
  </svg>
);

const SoundwaveIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    color="currentColor"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 4L12 20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M16 7L16 17"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M8 7L8 17"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M20 11L20 13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M4 11L4 13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const StickerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    color="currentColor"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 12C2 17.5228 6.47715 22 12 22C12.6477 22 13.2503 21.7004 13.7083 21.2424L21.2424 13.7083C21.7004 13.2503 22 12.6477 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M8.9126 15.9336C9.94668 16.1928 11.0951 16.2391 12.2688 16.0337"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <ellipse
      cx="14.5094"
      cy="9.77405"
      rx="1"
      ry="1.5"
      transform="rotate(-15 14.5094 9.77405)"
      fill="currentColor"
    />
    <ellipse
      cx="8.71402"
      cy="11.3278"
      rx="1"
      ry="1.5"
      transform="rotate(-15 8.71402 11.3278)"
      fill="currentColor"
    />
    <path
      d="M12 22C12 19.2071 12 17.8107 12.3928 16.688C13.0964 14.6773 14.6773 13.0964 16.688 12.3928C17.8107 12 19.2071 12 22 12"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

function ChatInput() {
  const [isOpen, setIsOpen] = useState(false);
  const [voiceIsOpen, setVoiceIsOpen] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [isFocused, setIsFocused] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      text: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  function handleFilesChange(filesList: FileList | null) {
    if (!filesList) return;

    setFiles([...files, ...filesList]);
  }

  return (
    <div className="space-y-4 w-full">
      {files && files.length > 0 && (
        <Gallery
          files={files}
          onRemoveClick={(index) => {
            const copy = [...files];
            copy.splice(index, 1);
            setFiles(copy);
          }}
        />
      )}
      <motion.div
        className={cn(
          "rounded-2xl shadow-2xs border bg-neutral-50 dark:bg-neutral-900",
          {
            "ring-4 outline-1 ring-blue-600/20 outline-blue-600/40": isFocused,
          }
        )}
      >
        <Form {...form}>
          <motion.form
            layout
            className="relative"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.75, type: "spring" }}
                      className={cn("h-13 relative z-20 mr-24", {
                        "resize-y h-32 mr-0 mb-16": isOpen,
                      })}
                    >
                      <Textarea
                        placeholder="Type your message here"
                        className={cn(
                          "resize-none text-base bg-transparent border-none shadow-none rounded-none pt-3.5 h-full min-h-0 ring-0 dark:outline-none focus-visible:ring-0 focus-visible:outline-0 pb-0 pr-10",
                          {
                            "resize-y pr-0": isOpen,
                          }
                        )}
                        {...field}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                      />
                    </motion.div>
                  </FormControl>
                </FormItem>
              )}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-full flex justify-end items-center px-2 py-2 overflow-hidden"
              layout="position"
            >
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    layout
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 8 }}
                    transition={{ duration: 0.75, type: "spring" }}
                    className="flex items-center grow gap-2"
                  >
                    <label htmlFor="file-upload">
                      <div className="flex items-center justify-center h-9 w-9">
                        <GalleryIcon className="!h-5 !w-5 p-0 text-icon" />
                        <input
                          multiple
                          accept="image/*"
                          type="file"
                          id="file-upload"
                          className="hidden"
                          onChange={(e) => handleFilesChange(e.target.files)}
                        />
                      </div>
                    </label>

                    <Voice isOpen={voiceIsOpen} setIsOpen={setVoiceIsOpen}>
                      <Button size="icon" type="button" variant="ghost">
                        <SoundwaveIcon className="!h-5 !w-5 p-0 text-icon" />
                      </Button>
                    </Voice>
                    <motion.div whileTap={{ scale: 0.95 }}>
                      <Button
                        className="bg-linear-45 from-indigo-500 via-purple-500 to-pink-500 h-8 w-8 ml-2 rounded-full"
                        size="icon"
                        type="button"
                        variant="ghost"
                      >
                        <AiIcon className="!h-4 !w-4 p-0 text-white" />
                      </Button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.div className="flex items-center h-full space-x-2">
                <Button
                  size="icon"
                  type="button"
                  variant="ghost"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {!isOpen && (
                    <ExpandIcon className="!h-5 !w-5 p-0 text-icon" />
                  )}
                  {isOpen && <CompactIcon className="!h-5 !w-5 p-0" />}
                </Button>
                <motion.div whileTap={{ scale: 0.95 }}>
                  <Button
                    className="bg-blue-700 rounded-xl shadow-doger-blue/10 shadow-lg text-white"
                    aria-label="Send button"
                    disabled={!form.watch("text")}
                    type="submit"
                    size="icon"
                  >
                    <SendIcon className="!h-4 !w-4" />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.form>
        </Form>
      </motion.div>
      <motion.div
        className="flex items-center gap-2"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} whileTap={{ scale: 0.9 }}>
          <Button className="rounded-lg" size="sm" variant="secondary">
            <StickerIcon />
            <span className="text-xs mr-1">Stickers</span>
          </Button>
        </motion.div>
        <motion.div variants={item} whileTap={{ scale: 0.9 }}>
          <Button className="rounded-lg" size="sm" variant="secondary">
            <SimileCircleIcon />
            <span className="text-xs mr-1">Emoji</span>
          </Button>
        </motion.div>
        <motion.div variants={item} whileTap={{ scale: 0.9 }}>
          <Button className="rounded-lg" size="sm" variant="secondary">
            <AttachmentIcon />
            <span className="text-xs mr-1">Other</span>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ChatInput;
