"use client";

import { ChevronDownIcon } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

type AccordionContextValue = {
  value?: string;
  collapsible?: boolean;
  setValue: (value?: string) => void;
};

const AccordionContext = React.createContext<AccordionContextValue | null>(null);
const AccordionItemContext = React.createContext<string | null>(null);

type AccordionProps = Omit<React.HTMLAttributes<HTMLDivElement>, "defaultValue"> & {
  type?: "single";
  collapsible?: boolean;
  defaultValue?: string;
};

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, collapsible, defaultValue, ...props }, ref) => {
    const [value, setValue] = React.useState<string | undefined>(defaultValue);

    return (
      <AccordionContext.Provider value={{ value, collapsible, setValue }}>
        <div ref={ref} className={className} {...props} />
      </AccordionContext.Provider>
    );
  },
);
Accordion.displayName = "Accordion";

type AccordionItemProps = React.HTMLAttributes<HTMLDivElement> & {
  value: string;
};

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, value, ...props }, ref) => {
    const accordion = React.useContext(AccordionContext);
    const open = accordion?.value === value;

    return (
      <AccordionItemContext.Provider value={value}>
        <div
          ref={ref}
          data-state={open ? "open" : "closed"}
          className={cn("border-b", className)}
          {...props}
        />
      </AccordionItemContext.Provider>
    );
  },
);
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const accordion = React.useContext(AccordionContext);
  const itemValue = React.useContext(AccordionItemContext);
  const open = Boolean(itemValue && accordion?.value === itemValue);

  return (
    <div className="flex">
      <button
        ref={ref}
        type="button"
        aria-expanded={open}
        data-state={open ? "open" : "closed"}
        className={cn(
          "flex flex-1 items-center justify-between py-4 text-left text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
          className,
        )}
        onClick={(event) => {
          props.onClick?.(event);
          if (event.defaultPrevented || !accordion || !itemValue) {
            return;
          }

          if (open && accordion.collapsible) {
            accordion.setValue(undefined);
          } else {
            accordion.setValue(itemValue);
          }
        }}
        {...props}
      >
        {children}
        <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
      </button>
    </div>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const accordion = React.useContext(AccordionContext);
  const itemValue = React.useContext(AccordionItemContext);
  const open = Boolean(itemValue && accordion?.value === itemValue);

  return (
    <div
      ref={ref}
      aria-hidden={!open}
      data-state={open ? "open" : "closed"}
      className="grid text-sm transition-[grid-template-rows,opacity] duration-300 ease-out data-[state=closed]:grid-rows-[0fr] data-[state=open]:grid-rows-[1fr] data-[state=closed]:opacity-0 data-[state=open]:opacity-100"
      {...props}
    >
      <div className="overflow-hidden"><div className={cn("pb-4 pt-0", className)}>{children}</div></div>
    </div>
  );
});
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
