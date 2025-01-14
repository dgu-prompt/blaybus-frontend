"use client";

import React from "react";

// import { Container, Wrapper } from "@/components/container";
import { NavigationBar } from "@/components/navigation-bar";

import { List, Section } from "./_components/list";

export default function Page() {
  return (
    <>
      <List>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </List>

      <List>
        <Section
          header={<div>Section Header</div>}
          footer={<div>Section Footer</div>}
        >
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
        </Section>
      </List>
      {/* 
      <NavigationBar title="HI" noBackButton />
      <NavigationBar title="HI" />
      <Container as="main">
        <Wrapper>
          <div className="flex w-full">
            <div className="h-20 w-full bg-orange-600">1</div>
            <div className="h-20 w-full bg-blue-600">1</div>
            <div className="h-20 w-full bg-yellow-600">1</div>
            <div className="h-20 w-full bg-gray-600">1</div>
            <div className="h-20 w-full bg-red-600">1</div>
            <div className="h-20 w-full bg-cyan-600">1</div>
            <div className="h-20 w-full bg-orange-600">1</div>
            <div className="h-20 w-full bg-orange-600">1</div>
            <div className="h-20 w-full bg-orange-600">1</div>
            <div className="h-20 w-full bg-orange-600">1</div>
            <div className="h-20 w-full bg-orange-600">1</div>
            <div className="h-20 w-full bg-orange-600">1</div>
          </div>

          <div className="h-20">1</div>
          <div className="h-20">1</div>
          <div className="h-20">1</div>
          <div className="h-20">1</div>
          <div className="h-20">1</div>
          <div className="h-20">1</div>
          <div className="h-20">1</div>
          <div className="h-20">1</div>
          <div className="h-20">1</div>
          <div className="h-20">1</div>
          <div className="h-20">1</div>
          <div className="h-20">1</div>
          <div className="flex w-full">
            <div className="h-20 w-full bg-orange-600">1</div>
            <div className="h-20 w-full bg-blue-600">1</div>
            <div className="h-20 w-full bg-yellow-600">1</div>
            <div className="h-20 w-full bg-gray-600">1</div>
            <div className="h-20 w-full bg-red-600">1</div>
            <div className="h-20 w-full bg-cyan-600">1</div>
            <div className="h-20 w-full bg-orange-600">1</div>
            <div className="h-20 w-full bg-orange-600">1</div>
            <div className="h-20 w-full bg-orange-600">1</div>
            <div className="h-20 w-full bg-orange-600">1</div>
            <div className="h-20 w-full bg-orange-600">1</div>
            <div className="h-20 w-full bg-orange-600">1</div>
          </div>
          <div className="h-20">1</div>
          <div className="h-20">1</div>
          <div className="h-20">1</div>
          <div className="h-20">1</div>
          <div className="h-20">1</div>
          <div className="h-20">1</div>
          <div className="h-20">1</div>
          <div className="h-20">1</div>
          <div className="h-20">1</div>
          <div className="h-20">1</div>
          <div className="h-20">1</div>
          <div className="flex w-full">
            <div className="h-20 w-full bg-orange-600">1</div>
            <div className="h-20 w-full bg-blue-600">1</div>
            <div className="h-20 w-full bg-yellow-600">1</div>
            <div className="h-20 w-full bg-gray-600">1</div>
            <div className="h-20 w-full bg-red-600">1</div>
            <div className="h-20 w-full bg-cyan-600">1</div>
            <div className="h-20 w-full bg-orange-600">1</div>
            <div className="h-20 w-full bg-orange-600">1</div>
            <div className="h-20 w-full bg-orange-600">1</div>
            <div className="h-20 w-full bg-orange-600">1</div>
            <div className="h-20 w-full bg-orange-600">1</div>
            <div className="h-20 w-full bg-orange-600">1</div>
          </div>
        </Wrapper>
      </Container> */}
    </>
  );
}
