import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="bg-[#131313] pt-10 md:pt-20 pb-10 mt-16 lg:mt-28">
        <div className="grid lg:grid-cols-2 w-[90%] 2xl:max-w-2xl mx-auto">
          <div>
            <Image
              src={"/assets/png/logo.png"}
              alt=""
              width={196}
              height={32}
              className="mx-auto md:mx-0"
            />
            <h4 className="text-center md:text-start font-normal text-sm xl:text-base text-white opacity-50 mt-5">
              Fightr is a platform built for fighters, by fighters, bringing
              real-world achievements online. With personalized plans, facility
              maps, and spirited challenges, we empower continuous growth.
            </h4>

            <div className="flex justify-center md:justify-start gap-2 mt-5">
              <Link
                href="https://www.facebook.com/share/1G1wHBj1Dh/?mibextid=wwXIfr"
                target="_blank"
              >
                <div className="w-[52px] h-[52px] flex items-center justify-center bg-[#161616] rounded-lg cursor-pointer">
                  <FaFacebookF size={20} color="#fff" />
                </div>
              </Link>
              <Link href="https://instagram.com/fightr.app" target="_blank">
                <Image
                  src={"/assets/svg/fsoc2.svg"}
                  alt=""
                  width={52}
                  height={52}
                  className="cursor-pointer"
                />
              </Link>
              <Link href="https://x.com/fightrapp" target="_blank">
                <Image
                  src={"/assets/svg/fsoc4.svg"}
                  alt=""
                  width={52}
                  height={52}
                  className="cursor-pointer"
                />
              </Link>
              <Link href="https://www.tiktok.com/@fightrapp" target="_blank">
              <div className="relative">
                <div className="self-center bg-[#161616] opacity-70 backdrop-blur-xs rounded-[12px]  w-[52px] h-[52px]"></div>

                <FaTiktok className="text-white text-[20px] absolute z-20 top-4 left-0 right-0 mx-auto" />
              </div>
            </Link>
            </div>
          </div>

          <div className="flex gap-20 lg:justify-end mt-10 lg:mt-0">
            <div>
              <p className="font-bold text-sm text-white mb-5">Useful Links</p>
              <Link
                href={"/privacy-policy"}
                className="font-medium text-[12px] text-white opacity-50 hover:opacity-100 cursor-pointer"
              >
                <p>Privacy Policy</p>
              </Link>
              <Link
                href={"/terms-service"}
                className="font-medium text-[12px] text-white opacity-50 hover:opacity-100 cursor-pointer"
              >
                <p className="mt-5">Terms of Service</p>
              </Link>
            </div>

            <div>
              <p className="font-bold text-sm text-white">Contact Us</p>
              <p className="font-medium text-[12px] text-white opacity-50 hover:opacity-100 cursor-pointer mt-5">
                support@fightr.app
              </p>
            </div>
          </div>
        </div>

        <p className="font-medium text-[12px] md:text-sm text-white opacity-50 text-center mt-10">
          Copyright © 2025 FIGHTR .All rights reserved.
        </p>

        <div className="flex gap-3 justify-center mt-5">
          <Link href={"/privacy-policy"}>
            <p className="font-medium text-[10px] text-white ">
              Privacy Policy
            </p>
          </Link>
          <Link href={"/terms-service"}>
            <p className="font-medium text-[10px] text-white ">
              Terms of Service
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}
