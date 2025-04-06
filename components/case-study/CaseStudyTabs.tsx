"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"

const CaseStudyTabs = TabsPrimitive.Root

const CaseStudyTabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn("inline-flex items-center justify-start space-x-6 mb-2", className)}
    {...props}
  />
))
CaseStudyTabsList.displayName = "CaseStudyTabsList"

const CaseStudyTabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "text-xl md:text-2xl font-medium text-gray-500 transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-[#2e2e2e] data-[state=active]:border-b-2 data-[state=active]:border-[#2e2e2e]",
      className,
    )}
    {...props}
  />
))
CaseStudyTabsTrigger.displayName = "CaseStudyTabsTrigger"

const CaseStudyTabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-0 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2",
      className,
    )}
    {...props}
  />
))
CaseStudyTabsContent.displayName = "CaseStudyTabsContent"

export { CaseStudyTabs, CaseStudyTabsList, CaseStudyTabsTrigger, CaseStudyTabsContent }

