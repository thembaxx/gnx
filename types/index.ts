import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type JobProps = {
  id?: string;
  company: {
    address: string;
    country: string;
    logo: string;
    name: string;
    summary: string;
    website: string;
  };
  job: {
    isRemote: boolean;
    role: string;
    startDate: string;
    endDate: string;
    skillsUsed: string[];
    summary: string;
  };
};
