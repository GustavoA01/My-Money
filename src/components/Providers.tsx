"use client"
import { queryClient } from "@/lib/reactQuery"
import { QueryClientProvider } from "@tanstack/react-query"
import React from "react"
import { ThemeProvider } from "./ui/theme-provider"
import { Toaster } from "sonner"
import { ExpenseProvider } from "@/contexts/ExpenseProvider"

export const Providers = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <ExpenseProvider>
        {children}
        <Toaster />
      </ExpenseProvider>
    </ThemeProvider>
  </QueryClientProvider>
)
