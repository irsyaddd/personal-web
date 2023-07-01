"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Container, Moon, PaintBucket, Sparkles, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { space_grotesk } from "./fonts";
import Link from "next/link";

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
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="p-0 mr-2">
                    <Sparkles className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              {/* <Sparkles className="mr-2" /> */}
              lifelong learner.
            </span>{" "}
          </div>
        </div>
        <div className="w-1/2">
          <p className="text-sm dark:text-slate-400 mt-2 tracking-wide">
            I’m Irsyad Al Ghifary, a guy with a blend of creative mind and
            technical skills. combine aesthetics and functionality to create
            truly impactful and memorable experiences. striving to learn and
            grow in my craft.
          </p>
          <p className="text-sm dark:text-slate-400 mt-2 tracking-wide">
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
      <div className="grid grid-cols-3 gap-9 ">
        <div className="border rounded-lg flex justify-center items-center h-64"></div>
        <div className="border rounded-lg flex justify-center items-center h-64"></div>
        <div className="border rounded-lg flex justify-center items-center h-64"></div>
        <div className="border col-span-2 rounded-lg flex justify-center items-center h-72"></div>
        <div className="border rounded-lg flex justify-center items-center h-72"></div>
      </div>
    </div>
  );
}
