import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  title?: string;
  subtitle?: string;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, id, title, subtitle, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn("py-20 md:py-32 container mx-auto px-4 md:px-8", className)}
        {...props}
      >
        {(title || subtitle) && (
          <div className="mb-12 md:mb-20 text-center max-w-3xl mx-auto">
            {subtitle && (
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block"
              >
                {subtitle}
              </motion.span>
            )}
            {title && (
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold text-foreground mb-6"
              >
                {title}
              </motion.h2>
            )}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
            />
          </div>
        )}
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";
