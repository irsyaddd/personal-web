"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowUpRight,
  Container,
  Figma,
  Mail,
  Moon,
  PaintBucket,
  Sparkles,
  Sun,
  Youtube,
} from "lucide-react";
import { useTheme } from "next-themes";
import { space_grotesk } from "./fonts";
import Link from "next/link";
import {
  ArrowTopRightIcon,
  FigmaLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  VideoIcon,
} from "@radix-ui/react-icons";
import { Badge, badgeVariants } from "@/components/ui/badge";

export default function Home() {
  const { setTheme } = useTheme();
  return (
    <div className="w-full">
      <div className="flex justify-between items-center my-12">
        <div className="w-1/2">
          <div className="font-semibold text-3xl text-primary font-space flex flex-col gap-1">
            <span className="flex items-center">
              <Container className="mr-2" />
              frontend engineer.
            </span>{" "}
            <span className="flex items-center">
              figma user.
              <PaintBucket className="ml-2" />
            </span>{" "}
            <span className="flex items-center">
              <Sparkles className="mr-2" />
              lifelong learner.
            </span>{" "}
          </div>
        </div>
        <div className="w-1/2">
          <p className="text-sm dark:text-slate-400 text-[#6f6f6f] mt-2 tracking-wide">
            I’m Irsyad Al Ghifary, a guy with a blend of creative mind and
            technical skills. combine aesthetics and functionality to create
            truly impactful and memorable experiences. striving to learn and
            grow in my craft.
          </p>
          <p className="text-sm dark:text-slate-400 text-[#6f6f6f] mt-2 tracking-wide">
            Currently working as Frontend Engineer building{" "}
            <span>
              <Link href="https://bolehbelajar.com/" target="_blank">
                Boleh Belajar LMS
              </Link>
            </span>
            . I spent most of my free time learning about frontend and playing
            around with Spline and Figma.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Card className="h-[280px]">
          <CardHeader>
            <CardTitle className="text-base">
              Writing
              <Badge
                variant={"secondary"}
                className="ml-2 text-xs bg-teal-100 text-teal-500"
              >
                17
              </Badge>
            </CardTitle>
          </CardHeader>
        </Card>
        <Card className="h-[280px]">
          <CardHeader>
            <CardTitle className="text-base">
              Craft
              <Badge
                variant={"secondary"}
                className="ml-2 text-xs  bg-yellow-100 text-yellow-500"
              >
                7
              </Badge>
            </CardTitle>
          </CardHeader>
        </Card>
        <Card className="h-[280px]">
          <CardHeader>
            <CardTitle className="text-base">
              Design
              <Badge
                variant={"secondary"}
                className="ml-2 text-xs bg-pink-100 text-pink-500"
              >
                Featured Exploration
              </Badge>
            </CardTitle>
          </CardHeader>
        </Card>
        <div className="border col-span-2 rounded-lg flex justify-center items-center h-72">
          <Button>Coming Soon</Button>
        </div>
        <div className="grid grid-rows-4 gap-4">
          <div className="border rounded-lg row-span-3 p-3 flex flex-col justify-between">
            <Button
              variant={"ghost"}
              className="w-full flex items-center justify-between"
            >
              <span className="flex">
                <GitHubLogoIcon className="h-5 w-5 mr-4" />
                Github
              </span>
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button
              variant={"ghost"}
              className="w-full flex items-center justify-between"
            >
              <span className="flex">
                <Figma className="h-5 w-5 mr-4" />
                Figma
              </span>
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button
              variant={"ghost"}
              className="w-full flex items-center justify-between"
            >
              <span className="flex">
                <VideoIcon className="h-5 w-5 mr-4" />
                Youtube
              </span>
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button
              variant={"ghost"}
              className="w-full flex items-center justify-between"
            >
              <span className="flex">
                <LinkedInLogoIcon className="h-5 w-5 mr-4" />
                Linkedin
              </span>
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="border rounded-lg flex justify-between items-center px-5">
            <h2 className="text-sm">Wanna Talk? </h2>
            <Link
              href={"/"}
              className={badgeVariants({
                variant: "outline",
                className: "bg-blue-100 text-blue-500",
              })}
            >
              <Mail className="mr-2 h-4 w-4" />
              Badge
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
