import React from "react";
import { ArrowUpRightIcon, ArrowUpIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <div className="bg-[var(--textrenk)] text-[var(--bgrenk)]">
      <div className="text-2xl py-10 text-center">
        BELKİ BURAYA BİR KAYAN YAZI
      </div>

      <div className="container mx-auto px-4 text-xl">
        <div className="flex flex-col md:flex-row justify-between gap-10 py-10">
          <ul className="flex flex-col gap-5 text-center md:text-left">
            <li>
              <a
                href="https://www.linkedin.com/in/sedanur-ceylan-190702/"
                target="_blank"
                className="flex justify-center md:justify-start gap-1 items-center hover:underline"
              >
                Linkedin <ArrowUpRightIcon className="size-5" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/SedanurCeylan"
                target="_blank"
                className="flex justify-center md:justify-start gap-1 items-center hover:underline"
              >
                Github <ArrowUpRightIcon className="size-5" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/sedanur_ceylan_/"
                target="_blank"
                className="flex justify-center md:justify-start gap-1 items-center hover:underline"
              >
                Instagram <ArrowUpRightIcon className="size-5" />
              </a>
            </li>
          </ul>

          <div className="w-full md:max-w-[400px] text-justify px-2 md:px-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            fuga amet odio ipsum modi! Placeat corporis magni excepturi ullam
            sunt cumque soluta natus itaque sequi quae, recusandae saepe
            commodi neque.
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-10 text-center text-sm md:text-base">
          <p>sdnrcyln2@gmail.com</p>
          <p>© 2025 Sedanur Ceylan</p>
          <a
            href="#"
            className="flex gap-1 items-center hover:underline justify-center"
          >
            <ArrowUpIcon className="size-5" /> Başa Dön
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
