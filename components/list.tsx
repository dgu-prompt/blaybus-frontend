import { Children, cloneElement, isValidElement } from "react";
import { Container, Wrapper } from "./container";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function List({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex w-full flex-col", className)}>
      {Children.map(children, (child) =>
        isValidElement(child) ? cloneElement(child) : child,
      )}
    </div>
  );
}

export function Section({
  header,
  footer,
  children,
}: {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      {header && <SectionHeader>{header}</SectionHeader>}
      {Children.map(children, (child) =>
        isValidElement(child) ? cloneElement(child) : child,
      )}
      {footer && <SectionFooter>{footer}</SectionFooter>}
    </>
  );
}

export function SectionHeader({
  children,
  className,
  containerClassName,
  wrapperClassName,
}: {
  children: React.ReactNode;
  className?: string; // Wrapper와 Container 모두에 적용할 공통 클래스
  containerClassName?: string; // Container에만 적용할 클래스
  wrapperClassName?: string; // Wrapper에만 적용할 클래스
}) {
  return (
    <Container className={cn(containerClassName)}>
      <Wrapper className={cn(wrapperClassName)}>
        <div
          className={cn(
            "ml-4 mt-5 flex items-center border-b py-2 pr-4 text-xs font-semibold text-muted-foreground",
            className,
          )}
        >
          {children}
        </div>
      </Wrapper>
    </Container>
  );
}

export function SectionFooter({
  children,
  className,
  containerClassName,
  wrapperClassName,
}: {
  children: React.ReactNode;
  className?: string; // Wrapper와 Container 모두에 적용할 공통 클래스
  containerClassName?: string; // Container에만 적용할 클래스
  wrapperClassName?: string; // Wrapper에만 적용할 클래스
}) {
  return (
    <Container className={cn(containerClassName)}>
      <Wrapper className={cn(wrapperClassName)}>
        <div
          className={cn(
            "mb-5 ml-4 flex items-center py-2 pr-4 text-sm text-muted-foreground",
            className,
          )}
        >
          {children}
        </div>
      </Wrapper>
    </Container>
  );
}

export function ListContent({ children }: { children: React.ReactNode }) {
  return (
    <>
      {Children.map(children, (child) =>
        isValidElement(child) ? cloneElement(child) : child,
      )}
    </>
  );
}

function LinkChevron() {
  return (
    <div className="-m-3 p-3">
      <ChevronRight className="h-5 w-5 text-muted-foreground" />
    </div>
  );
}

export function ListItem({
  children,
  className,
  containerClassName,
  wrapperClassName,
  href,
  action,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  wrapperClassName?: string;
  href?: string;
  action?: () => void;
}) {
  if (href) {
    return (
      <Link href={href}>
        <Container
          className={cn("hover:bg-accent active:bg-accent", containerClassName)}
        >
          <Wrapper className={cn(wrapperClassName)}>
            <div
              className={cn(
                "ml-4 flex min-h-11 items-center justify-between border-b py-2.5 pr-4",
                className,
              )}
            >
              {children}
              <LinkChevron />
            </div>
          </Wrapper>
        </Container>
      </Link>
    );
  }

  if (action) {
    return (
      <button onClick={action}>
        <Container
          className={cn("hover:bg-accent active:bg-accent", containerClassName)}
        >
          <Wrapper className={cn(wrapperClassName)}>
            <div
              className={cn(
                "ml-4 flex min-h-11 items-center justify-between border-b py-2.5 pr-4 text-primary",
                className,
              )}
            >
              {children}
            </div>
          </Wrapper>
        </Container>
      </button>
    );
  }

  return (
    <Container className={cn(containerClassName)}>
      <Wrapper className={cn(wrapperClassName)}>
        <div
          className={cn(
            "ml-4 flex min-h-11 items-center border-b py-2.5 pr-4",
            className,
          )}
        >
          {children}
        </div>
      </Wrapper>
    </Container>
  );
}

export function ListSpacer() {
  return (
    <Container>
      <Wrapper>
        <div className="ml-4 flex h-4 items-center border-b py-2.5 pr-4" />
      </Wrapper>
    </Container>
  );
}

export function MultilineListItem({
  children,
  href,
  containerClassName,
  wrapperClassName,
}: {
  children: React.ReactNode;
  href?: string;
  containerClassName?: string;
  wrapperClassName?: string;
}) {
  const content = (
    <Container
      className={cn("hover:bg-accent active:bg-accent", containerClassName)}
    >
      <Wrapper className={cn("border-b", wrapperClassName)}>{children}</Wrapper>
    </Container>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}

export function Upper({
  title,
  subtitle,
  icon: Icon,
  className,
}: {
  title: string;
  subtitle?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex min-h-14 items-center justify-between px-4 py-2",
        className,
      )}
    >
      <div className="flex items-center gap-2">
        {Icon && <Icon className="h-5 w-5" />}
        <span className="font-semibold">{title}</span>
      </div>
      <div className="flex items-center gap-1">
        {subtitle && (
          <span className="text-sm text-muted-foreground">{subtitle}</span>
        )}
        <ChevronRight className="h-5 w-5 text-muted-foreground" />
      </div>
    </div>
  );
}

export function Lower({
  leftContent,
  rightContent,
  className,
}: {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex w-full items-end justify-between px-4 pb-2.5",
        className,
      )}
    >
      <div>{leftContent}</div>
      <div>{rightContent}</div>
    </div>
  );
}
