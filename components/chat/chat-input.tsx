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

const FormSchema = z.object({
  text: z.string(),
});

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
  const [files, setFiles] = useState<File[]>([]);

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

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="space-y-4 w-full">
      {files && files.length > 0 && <Gallery files={files} />}
      <motion.div className="rounded-2xl shadow-2xs border bg-neutral-50">
        <Form {...form}>
          <motion.form
            layout="position"
            className="relative"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className={cn("h-13", { "resize-y h-32": isOpen })}>
                      <Textarea
                        placeholder="Type your message here"
                        className={cn(
                          "resize-none text-base bg-transparent border-none shadow-none h-full min-h-0 rounded-2xl ring-doger-blue/40 pb-0 pr-10",
                          {
                            "resize-y pr-0": isOpen,
                          }
                        )}
                        {...field}
                      />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <motion.div
              className="absolute bottom-0 z-100 right-0 w-full flex justify-end items-center px-2 py-2 overflow-hidden"
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
                    className="flex items-center grow"
                  >
                    <label htmlFor="file-upload">
                      <div className="flex items-center justify-center h-9 w-9">
                        <GalleryIcon className="!h-5 !w-5 p-0 text-icon" />
                        <input
                          aria-hidden
                          multiple
                          accept="image/*"
                          type="file"
                          id="file-upload"
                          className="hidden"
                          onChange={(e) => handleFilesChange(e.target.files)}
                        />
                      </div>
                    </label>

                    <Button size="icon" type="button" variant="ghost">
                      <SoundwaveIcon className="!h-5 !w-5 p-0 text-icon" />
                    </Button>
                    <Button size="icon" type="button" variant="ghost">
                      <StickerIcon className="!h-5 !w-5 p-0 text-icon" />
                    </Button>
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
                  {isOpen && (
                    <CompactIcon className="!h-5 !w-5 p-0 text-icon" />
                  )}
                </Button>
                <motion.div whileTap={{ scale: 0.95 }}>
                  <Button
                    className="bg-doger-blue rounded-xl shadow-doger-blue/10 shadow-lg"
                    aria-label="Send button"
                    disabled={!form.watch("text")}
                    type="submit"
                    size={isOpen ? "sm" : "icon"}
                  >
                    <SendIcon className="!h-4 !w-4" />
                    {isOpen && (
                      <motion.span layout className="mr-2">
                        Send
                      </motion.span>
                    )}
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.form>
        </Form>
      </motion.div>
    </div>
  );
}

export default ChatInput;
