import { Children, cloneElement, isValidElement } from "react";
import { Container, Wrapper } from "./container";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

export function Box({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      {children}
    </div>
  );
}

export function HStack({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("flex flex-row items-center gap-1 self-stretch", className)}
    >
      {children}
    </div>
  );
}

export function VStack({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-1 flex-col gap-2 self-stretch", className)}>
      {children}
    </div>
  );
}

export function List({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Container className="bg-muted dark:bg-background">
      <Container as="ul" className={cn("my-4 gap-6", className)}>
        {children}
      </Container>
    </Container>
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
    <Container as="li" className="section-root">
      <Wrapper className="px-safe-or-4">
        {header && <SectionHeader>{header}</SectionHeader>}
        <Wrapper
          as="ul"
          className="ios-divide-y w rounded-xl bg-background dark:bg-primary-foreground"
        >
          {Children.map(children, (child) =>
            isValidElement(child) ? cloneElement(child) : child,
          )}
        </Wrapper>

        {footer && <SectionFooter>{footer}</SectionFooter>}
      </Wrapper>
    </Container>
  );
}

// TODO: container, wrapper 정리
export function SectionHeader({
  children,
  className,
  containerClassName,
  wrapperClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  wrapperClassName?: string;
}) {
  return (
    <Container className={cn(containerClassName)}>
      <Wrapper className={cn(wrapperClassName)}>
        <div
          className={cn(
            "flex items-center px-4 py-1.5 text-xs font-medium text-muted-foreground",
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

function LinkChevron() {
  return (
    <div className="-m-3 p-3">
      <ChevronRight className="h-5 w-5 text-muted-foreground" />
    </div>
  );
}

function ListItemContainer({
  children,
  href,
}: {
  children?: React.ReactNode;
  href?: string;
}) {
  return (
    <li
      className={cn(
        "flex min-h-11 w-full pl-4 transition-colors active:bg-accent",
      )}
    >
      {href ? (
        <a href={href} className={cn("list-content flex w-full py-2.5 pr-4")}>
          {children}
        </a>
      ) : (
        <div className={cn("list-content flex w-full py-2.5 pr-4")}>
          {children}
        </div>
      )}
    </li>
  );
}

export function ListItem({
  children,
  detail,
  href,
  title,
}: {
  children?: React.ReactNode;
  href?: string;
  title?: React.ReactNode;
  detail?: React.ReactNode;
}) {
  return (
    <ListItemContainer href={href}>
      <VStack>
        <HStack>
          <div className="mr-auto">{title}</div>
          <div className="text-muted-foreground">{detail}</div>
          {href && <LinkChevron />}
        </HStack>
        {children}
      </VStack>
    </ListItemContainer>
  );
}

// TODO: need remake
export function ListLink({
  children,
  detail,
  href,
  title,
}: {
  children?: React.ReactNode;
  href?: string;
  title?: React.ReactNode;
  detail?: React.ReactNode;
}) {
  return (
    <ListItemContainer href={href}>
      <VStack>
        <HStack>
          <div className="mr-auto text-blue-500 dark:text-blue-400">
            {title}
          </div>
          <div className="text-muted-foreground">{detail}</div>
        </HStack>
        {children}
      </VStack>
    </ListItemContainer>
  );
}

// TODO: need remake
export function ListButton({
  detail,
  title,
  onClick,
}: {
  title?: React.ReactNode;
  detail?: React.ReactNode;
  onClick?: () => void; // onClick 추가
}) {
  return (
    <ListItemContainer>
      <button
        className="w-full text-blue-600 dark:text-blue-400"
        onClick={onClick}
      >
        {detail ? (
          <HStack>
            <div className="mr-auto text-blue-500 dark:text-blue-400">
              {title}
            </div>
            <div className="text-muted-foreground">{detail}</div>
          </HStack>
        ) : (
          title
        )}
      </button>
    </ListItemContainer>
  );
}
