import { Input } from "../ui/input";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  Briefcase08Icon,
  Location01Icon,
  Search01Icon,
} from "@hugeicons/core-free-icons";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countries } from "@/lib/Countries";
import { Button } from "../ui/button";
import { jobCategories } from "@/lib/JobCategories";
import heroImage from "@images/new-hero.webp";
import userImage from "@images/employee.png";
import Image from "next/image";
import StarsRates from "./StarsRates";

export default function NewHeroSection() {
  return (
    <div className="w-full min-h-[90vh] md:px-10 px-5 flex items-stretch lg:flex-row flex-col lg:gap-0 gap-5">
      {/* Left */}
      <div className="w-full pt-6 relative flex flex-col items-center text-center md:text-left md:items-start lg:gap-10 gap-5">
        <div className="w-40 p-4 bg-white rounded-3xl absolute xl:right-[-27%] right-[-40%] top-10 space-y-4 lg:block hidden">
          <div className="flex items-start gap-4">
            {/* Image */}
            <div className="size-15 rounded-full bg-input-bg overflow-hidden">
              <Image
                src={userImage}
                alt="user image"
                className="w-full object-cover"
              />
            </div>

            <div className="p-2 border rounded-full">
              <HugeiconsIcon
                icon={Search01Icon}
                className="size-5"
                strokeWidth={2}
              />
            </div>
          </div>

          <p className="text-sm capitalize">Find Your Dream job easy</p>
        </div>

        {/* Top */}
        <StarsRates />

        {/* Mid */}
        <div className="lg:space-y-18 space-y-6">
          <div className="xl:text-[4rem] lg:text-5xl md:text-4xl text-3xl capitalize font-semibold leading-[1.2]">
            <p>Career opportunities</p>
            <p>Await worker helps</p>
            <p>you find the right job</p>
          </div>

          <div className="flex items-start xl:gap-16 lg:gap-10 md:gap-5 gap-2">
            <p className="text-lg font-medium">{"//"}</p>
            <p className="max-w-xl md:text-lg text-base text-black/70">
              Each Job Posting Comes With A Clear And Compelling Description, So
              You Can Easily Understand What Is Expected
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="xl:w-[120%] w-full flex-col xl:flex-row rounded-2xl xl:h-30 bg-white flex items-center gap-10 justify-between lg:pr-5 relative">
          <div className="w-full flex items-center xl:gap-10 gap-5 justify-between flex-col md:flex-row">
            {/* Search Input */}
            <div className="flex items-center w-full bg-input-bg rounded-2xl pl-3">
              <HugeiconsIcon
                icon={Search01Icon}
                className="text-black/50 size-5.5"
                strokeWidth={2}
              />
              <Input
                className="w-full h-15 bg-transparent rounded-none shadow-none focus-visible:ring-0 focus-visible:border-0"
                placeholder="Job title"
              />
            </div>
            {/* Select Industry */}
            <div className="w-full h-15 flex items-center bg-input-bg rounded-2xl pl-4">
              <HugeiconsIcon
                icon={Briefcase08Icon}
                className="text-black/50 size-5.5"
                strokeWidth={2}
              />
              <Select>
                <SelectTrigger className="w-full h-15 bg-transparent rounded-none shadow-none focus-visible:ring-0 focus-visible:border-0">
                  <SelectValue placeholder="Industry" />
                </SelectTrigger>
                <SelectContent className="bg-white text-black border border-border-color">
                  <SelectGroup>
                    {jobCategories.map((cat) => (
                      <SelectItem
                        className="hover:bg-input-bg! hover:text-black!"
                        key={cat}
                        value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="w-full flex items-center xl:gap-10 gap-5 justify-between flex-col md:flex-row">
            {/* Select Location */}
            <div className="w-full h-15 flex items-center bg-input-bg rounded-2xl pl-4">
              <HugeiconsIcon
                icon={Location01Icon}
                className="text-black/50 size-5.5"
                strokeWidth={2}
              />
              <Select>
                <SelectTrigger className="w-full h-15 bg-transparent rounded-none shadow-none focus-visible:ring-0 focus-visible:border-0">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent className="bg-white text-black border border-border-color">
                  <SelectGroup>
                    {countries.map((country) => (
                      <SelectItem
                        className="hover:bg-input-bg! hover:text-black!"
                        key={country}
                        value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <Button className="bg-black text-white text-sm h-15 px-6! rounded-2xl gap-3 md:w-40 hover:bg-black/80 w-full">
              Search
              <span className="size-8 rounded-full bg-white flex items-center justify-center text-black">
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  className="size-5"
                  strokeWidth={2}
                />
              </span>
            </Button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 flex md:items-start items-center md:flex-row flex-col gap-20">
          {/* users */}
          <div>
            <p className="text-3xl font-semibold">{">"}120K</p>

            <p className="text-lg capitalize">professional people</p>

            <div className="flex items-center justify-center md:justify-start mt-4">
              <div className="size-10 rounded-full bg-input-bg"></div>
              <div className="size-10 rounded-full bg-input-bg -ml-3"></div>
              <div className="size-10 rounded-full bg-input-bg -ml-3"></div>
            </div>
          </div>

          {/* Companies */}
          <div>
            <p className="text-3xl font-semibold">{">"}300</p>

            <p className="text-lg capitalize">verified companies</p>

            <div className="flex items-center justify-center md:justify-start mt-4">
              <div className="size-10 rounded-full bg-input-bg"></div>
              <div className="size-10 rounded-full bg-input-bg -ml-3"></div>
              <div className="size-10 rounded-full bg-input-bg -ml-3"></div>
            </div>
          </div>

          {/* Jobs */}
          <div>
            <p className="text-3xl font-semibold">{">"}300</p>

            <p className="text-lg capitalize">total Jobs</p>

            <div className="flex items-center justify-center md:justify-start mt-4">
              <div className="size-10 rounded-full bg-input-bg"></div>
              <div className="size-10 rounded-full bg-input-bg -ml-3"></div>
              <div className="size-10 rounded-full bg-input-bg -ml-3"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="w-full bg-input-bg  rounded-4xl overflow-hidden">
        <Image
          src={heroImage}
          alt="hero image"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
