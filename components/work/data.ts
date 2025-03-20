import { JobProps } from "@/types";

const today = new Date();

export const data: JobProps[] = [
  {
    company: {
      address: "Kitchener, ON",
      country: "Canada",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFCZOXlaGbA5Q/company-logo_200_200/company-logo_200_200/0/1731191706768/rattlehub_logo?e=1747872000&v=beta&t=L_y4l_n7wHbGWdr9jziw_4LhK15TJ_QJMBkR92vYh9w",
      name: "RattleHub",
      summary:
        'RattleHub is a Canadian software company building tools which allow Financial Institutions, and other companies, to be The Legacy Partner to their clients, helping achieve our vision of "Estate Planning Simplified"',
      website: "https://rattlehub.com",
    },
    job: {
      isRemote: true,
      role: "Frontend Web Developer",
      startDate: new Date(2024, 10, 12).toDateString(),
      endDate: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
      ).toDateString(),
      skillsUsed: [
        "HTML5",
        "JavaScript",
        "React",
        "TypeScript",
        "NextJS",
        "CSS3",
        "TailwindCSS",
        "REST APIs",
        "Vite",
        "Git",
        "Neon PostgreSQL",
      ],
      summary: "string",
    },
  },
  {
    company: {
      address: "Johannesburg, Gauteng",
      country: "South Africa",
      logo: "Carter is start-up revolutionising the customer journey and experience to make new car buying hassle free and convenient.",
      name: "Carter",
      summary:
        "Carter is start-up revolutionising the customer journey and experience to make new car buying hassle free and convenient",
      website: "https://www.heycarter.com",
      phone: "010 045 2682",
    },
    job: {
      isRemote: true,
      role: "Frontend Web Developer",
      startDate: new Date(2023, 6, 1).toDateString(),
      endDate: new Date(2024, 10, 30).toDateString(),
      skillsUsed: [
        "HTML5",
        "JavaScript",
        "React",
        "TypeScript",
        "NextJS",
        "CSS3",
        "TailwindCSS",
        "REST APIs",
        "Vite",
        "Azure DevOps",
        "Git",
        "Neon PostgreSQL",
      ],
      summary: "string",
    },
  },
  {
    company: {
      address: "Johannesburg, Gauteng",
      country: "South Africa",
      logo: "https://media.licdn.com/dms/image/v2/C560BAQFmvKlV4eJk1A/company-logo_200_200/company-logo_200_200/0/1631366992572?e=1747872000&v=beta&t=OqyeGJ27E3GpISoGqSwNalRO6tFbgwXlr-D--TcegX8",
      name: "Carter",
      summary:
        "Carter is start-up revolutionising the customer journey and experience to make new car buying hassle free and convenient",
      website: "https://www.heycarter.com",
      phone: "010 045 2682",
    },
    job: {
      isRemote: true,
      role: "Jnr. Frontend Developer",
      startDate: new Date(2022, 3, 17).toDateString(),
      endDate: new Date(2023, 6, 1).toDateString(),
      skillsUsed: [
        "HTML5",
        "JavaScript",
        "React",
        "TypeScript",
        "NextJS",
        "CSS3",
        "TailwindCSS",
        "REST APIs",
        "Vite",
        "Azure DevOps",
        "Git",
        "Neon PostgreSQL",
      ],
      summary:
        "Developing web apps with React (and partially Nextjs for the time being).",
    },
  },
];
