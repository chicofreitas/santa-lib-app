'use client';
import React from "react";
import {NextUIProvider} from "@nextui-org/react";
export default function Application({children}: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <main  className="dark text-foreground bg-background">
        <NextUIProvider>
            {children}
        </NextUIProvider>
    </main>
  );
}
