import Link from "next/link";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Badge } from "@/components/ui/badge";

const ArrowDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
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

const PdfIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M20 13V10.6569C20 9.83935 20 9.4306 19.8478 9.06306C19.6955 8.69552 19.4065 8.40649 18.8284 7.82843L14.0919 3.09188C13.593 2.593 13.3436 2.34355 13.0345 2.19575C12.9702 2.165 12.9044 2.13772 12.8372 2.11401C12.5141 2 12.1614 2 11.4558 2C8.21082 2 6.58831 2 5.48933 2.88607C5.26731 3.06508 5.06508 3.26731 4.88607 3.48933C4 4.58831 4 6.21082 4 9.45584V13M13 2.5V3C13 5.82843 13 7.24264 13.8787 8.12132C14.7574 9 16.1716 9 19 9H19.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.75 16H17.25C16.6977 16 16.25 16.4477 16.25 17V19M16.25 19V22M16.25 19H19.25M4.25 22V19.5M4.25 19.5V16H6C6.9665 16 7.75 16.7835 7.75 17.75C7.75 18.7165 6.9665 19.5 6 19.5H4.25ZM10.25 16H11.75C12.8546 16 13.75 16.8954 13.75 18V20C13.75 21.1046 12.8546 22 11.75 22H10.25V16Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SourceCodeSquareIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M16 10L17.2265 11.0572C17.7422 11.5016 18 11.7239 18 12C18 12.2761 17.7422 12.4984 17.2265 12.9428L16 14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 10L6.77346 11.0572C6.25782 11.5016 6 11.7239 6 12C6 12.2761 6.25782 12.4984 6.77346 12.9428L8 14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 9L11 15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

function Timeline() {
  return (
    <div className="py-8">
      <header className="px-6 pb-3">
        <h1 className="text-xl text-foreground/85">—Work experience</h1>
      </header>
      <ul className="p-6 space-y-6">
        <li>
          <div className="space-y-4">
            <p className="text-sm">April 17, 2023</p>
            <div className="grid grid-cols-[36px_1fr] ">
              <div className="grid-rows-[36px_1fr]">
                <div className="h-9 w-9 flex items-center justify-center">
                  <div className="flex items-center justify-center rounded-full h-4.5 w-4.5 bg-[#794dff33]">
                    <div className="w-3 h-3 rounded-full bg-[#794dff]" />
                  </div>
                </div>
                <div className="grow flex justify-center row-start-1 h-full max-h-[calc(100%-36px)]">
                  <Separator orientation="vertical" />
                </div>
              </div>
              <div className="grid grid-rows-[36px_1fr] gap-1 text-sm ">
                <div className="flex items-center h-full">
                  <p className="font-semibold text-foreground/90">
                    Jnr. Frontend Developer
                  </p>
                </div>
                <div className="row-start-2 space-y-3">
                  <p>HeyCarter Pty Ltd</p>
                  <p className="text-[0.8rem] leading-5 tracking-wide text-secondary-foreground/75 text-pretty">
                    Carter was established to transform the car buying process.
                    Since 2016, we have aimed to create a transparent, helpful
                    and friendly experience for all our customers.
                  </p>
                  <a
                    className="text-blue-400 font-medium flex items-center gap-2 text-[0.8rem]"
                    href="https://www.heycarter.co.za/"
                    target="_blank"
                  >
                    <LinkIcon className="h-3 w-3 shrink-0 mt-px" />
                    <span>https://www.heycarter.co.za</span>
                  </a>
                </div>
                <div className="pt-6 grid-rows-1">
                  <div className="flex items-center gap-2">
                    <Badge>Remote</Badge>
                    <Badge>Full-time</Badge>
                  </div>
                </div>
                <div className="pt-4 text-xs font-medium flex items-center space-x-2">
                  <SourceCodeSquareIcon className="h-4 w-4" />
                  <span>HTML5, Azure DevOps and +12 skills</span>
                </div>
                <div className="pt-4">
                  <Button className="-ml-2" size="sm" variant="link">
                    <span className="text-[0.85rem]">Show more</span>
                    <ArrowDownIcon className="h-4 w-4" />
                  </Button>
                </div>
                {/* <div className="p-4 bg-[#171717] rounded-2xl">
                  <div className="flex flex-wrap gap-2">
                    <Link href="/invoice.pdf">
                      <div className="flex items-center gap-2 text-xs px-3 py-2 rounded-md bg-secondary">
                        <PdfIcon className="h-4 w-4 text-[#fb4141]" />
                        <span className="leading-none">Perfomance</span>
                      </div>
                    </Link>
                    <Link href="/invoice.pdf">
                      <div className="flex items-center gap-2 text-xs px-3 py-2 rounded-md bg-secondary">
                        <PdfIcon className="h-4 w-4 text-[#fb4141]" />
                        <span className="leading-none">Perfomance (2)</span>
                      </div>
                    </Link>
                    <Link href="/invoice.pdf">
                      <div className="flex items-center gap-2 text-xs px-3 py-2 rounded-md bg-secondary">
                        <PdfIcon className="h-4 w-4 text-[#fb4141]" />
                        <span className="leading-none">Promotion</span>
                      </div>
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="space-y-4">
            <p className="text-sm">March 31, 2024</p>
            <div className="grid grid-cols-[36px_1fr] ">
              <div className="grid-rows-[36px_1fr]">
                <div className="h-9 w-9 flex items-center justify-center">
                  <div className="flex items-center justify-center rounded-full h-4.5 w-4.5 bg-[#02ca4b33]">
                    <div className="w-3 h-3 rounded-full bg-[#02ca4b]" />
                  </div>
                </div>
                <div className="grow flex justify-center row-start-1 h-full max-h-[calc(100%-36px)]">
                  <Separator orientation="vertical" />
                </div>
              </div>
              <div className="grid grid-rows-[36px_1fr] gap-1 text-sm ">
                <div className="flex items-center h-full">
                  <p className="font-medium text-foreground/90">
                    12 Invoices have been paid
                  </p>
                </div>
                <p className="row-start-2 text-sm text-secondary-foreground/80">
                  Invoices have been paid to the company
                </p>
                <div className="flex flex-wrap gap-2 py-4">
                  <Link href="/invoice.pdf">
                    <div className="flex items-center gap-2 text-[13px] px-3 py-2 rounded-md bg-secondary">
                      <PdfIcon className="h-4 w-4 text-[#fb4141]" />
                      <span className="leading-none">
                        Perfomance Evaluation
                      </span>
                    </div>
                  </Link>
                </div>
                <div>
                  <Button size="sm" variant="link">
                    <span>Show more</span>
                    <ArrowDownIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="space-y-4">
            <p className="text-sm">March 31, 2024</p>
            <div className="grid grid-cols-[36px_1fr] ">
              <div className="grid-rows-[36px_1fr]">
                <div className="h-9 w-9 flex items-center justify-center">
                  <div className="flex items-center justify-center rounded-full h-4.5 w-4.5 bg-[#06b6d433]">
                    <div className="w-3 h-3 rounded-full bg-[#06b6d4]" />
                  </div>
                </div>
                <div className="grow flex justify-center row-start-1 h-full max-h-[calc(100%-36px)]">
                  <Separator orientation="vertical" />
                </div>
              </div>
              <div className="grid grid-rows-[36px_1fr] gap-1 text-sm ">
                <div className="flex items-center h-full">
                  <p className="font-medium text-foreground/90">
                    Create a new project for client
                  </p>
                </div>
                <p className="row-start-2 text-sm text-secondary-foreground/80">
                  6 team members in a project
                </p>
                <div className="flex flex-wrap gap-2 py-4">
                  <Link href="/invoice.pdf">
                    <div className="flex items-center gap-2 text-xs px-3 py-2 rounded-md bg-[#121212]">
                      <PdfIcon className="h-4 w-4" />
                      <span className="leading-none">Promotion</span>
                    </div>
                  </Link>
                </div>
                <div>
                  <Button size="sm" variant="link">
                    <span>Show more</span>
                    <ArrowDownIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="space-y-4">
            <p className="text-sm">March 31, 2024</p>
            <div className="grid grid-cols-[36px_1fr] ">
              <div className="grid-rows-[36px_1fr]">
                <div className="h-9 w-9 flex items-center justify-center">
                  <div className="flex items-center justify-center rounded-full h-4.5 w-4.5 bg-[#06b6d433]">
                    <div className="w-3 h-3 rounded-full bg-[#06b6d4]" />
                  </div>
                </div>
                <div className="grow flex justify-center row-start-1 h-full max-h-[calc(100%-36px)]">
                  <Separator orientation="vertical" />
                </div>
              </div>
              <div className="grid grid-rows-[36px_1fr] gap-1 text-sm ">
                <div className="flex items-center h-full">
                  <p className="font-medium text-foreground/90">
                    Create a new project for client
                  </p>
                </div>
                <p className="row-start-2 text-sm text-secondary-foreground/80">
                  6 team members in a project
                </p>
                <div className="flex flex-wrap gap-2 py-4">
                  <Link href="/invoice.pdf">
                    <div className="flex items-center gap-2 text-[13px] px-3 py-2 rounded-md bg-secondary">
                      <PdfIcon className="h-4 w-4 text-[#fb4141]" />
                      <span className="leading-none">Promotion</span>
                    </div>
                  </Link>
                </div>
                <div>
                  <Button size="sm" variant="link">
                    <span>Show more</span>
                    <ArrowDownIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Timeline;
