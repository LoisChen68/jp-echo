import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider, Flex } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JP Echo",
  description: "Help you learn Japanese better.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-tw" suppressHydrationWarning>
      <body className={inter.className}>
        <ChakraProvider>
          <Flex
            backgroundColor="var(--primary-color)"
            justifyContent="center"
            height="100%"
            overflowY="auto"
          >
            {children}
          </Flex>
        </ChakraProvider>
      </body>
    </html>
  );
}
