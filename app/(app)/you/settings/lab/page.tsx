"use client";
import Link from "next/link";
import { Container, Wrapper } from "@/components/container";
import {
  Briefcase,
  Check,
  ChevronRight,
  Heart,
  Icon,
  Phone,
} from "lucide-react";
import { Bar, BarChart } from "recharts";
import { NavigationBar } from "@/components/navigation-bar";
import {
  HStack,
  List,
  ListItem,
  Section,
  VStack,
  Box,
} from "@/components/grouped-list";

const chartData = [
  { week: 1, expDo: 80 },
  { week: 2, expDo: 60 },
  { week: 3, expDo: 70 },
  { week: 4, expDo: 90 },
  { week: 5, expDo: 80, fill: "hsl(var(--chart-1))" },
];

function MiniBarChart({
  data,
}: {
  data: { week: number; expDo: number; fill?: string }[];
}) {
  return (
    <BarChart
      width={100}
      height={50}
      data={data}
      barCategoryGap="10%"
      margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
    >
      <Bar
        dataKey="expDo"
        radius={[4, 4, 0, 0]}
        fill="hsl(var(--border))"
        background={{ fill: "transparent" }}
      />
    </BarChart>
  );
}

function LinkChevron() {
  return (
    <div className="-m-3 p-3">
      <ChevronRight className="h-5 w-5 text-muted-foreground" />
    </div>
  );
}
function CustomListItem({
  title,
  subtitle,
  chartData,
  score,
  href,
}: {
  title: string;
  subtitle: string;
  chartData: { label: string; value: number }[];
  score: number;
  href?: string;
}) {
  return (
    <Link href={href}>
      <Container className="hover:bg-accent active:bg-accent">
        <Wrapper className="border-b">
          <div className="flex min-h-14 items-center justify-between px-4 py-2">
            {/* Left: Title and Subtitle */}
            <div>
              <div className="flex items-center gap-2 text-chart-1">
                <Briefcase className="h-5 w-5" />
                <span className="font-semibold">{title}</span>
              </div>
            </div>

            {/* Right: Chevron */}
            <div className="flex">
              <div className="text-sm text-muted-foreground">{subtitle}</div>
              <LinkChevron />
            </div>
          </div>

          {/* Chart and Score */}
          <div className="flex w-full items-end justify-between px-4 pb-2.5">
            <div>
              <span className="text-2xl font-semibold">{score}</span>
              <span className="text-base"> do</span>
            </div>
            <MiniBarChart data={chartData} />
          </div>
        </Wrapper>
      </Container>
    </Link>
  );
}

const person = [
  { name: "Juan Chavez", phoneNumber: "(408) 555-4301" },
  { name: "Mei Chen", phoneNumber: "(919) 555-2481" },
];

const company = {
  departments: [
    {
      name: "Sales",
      staff: [
        { name: "Juan Chavez", phoneNumber: "(408) 555-4301" },
        { name: "Mei Chen", phoneNumber: "(919) 555-2481" },
      ],
    },
    {
      name: "Engineering",
      staff: [
        { name: "Bill James", phoneNumber: "(408) 555-4450" },
        { name: "Anne Johnson", phoneNumber: "(417) 555-9311" },
      ],
    },
  ],
};

function PersonRowView({
  person,
}: {
  person: { name: string; phoneNumber: string };
}) {
  return (
    <VStack className="items-start gap-1">
      <Text>{person.name}</Text>
      <HStack className="gap-1">
        <Label icon={<Phone />}>{person.phoneNumber}</Label>
      </HStack>
    </VStack>
  );
}

function StaffList() {
  return (
    <List>
      {person.map((staff, index) => (
        <PersonRowView key={index} person={staff} />
      ))}
    </List>
  );
}

export default function Page() {
  return (
    <>
      <NavigationBar title="테스트 페이지" />
      <List>
        <Section>
          <ListItem>a</ListItem>
          <ListItem>b</ListItem>
          <ListItem>c</ListItem>
        </Section>

        <Section>
          <ListItem href="#">a</ListItem>
          <ListItem href="#">b</ListItem>
          <ListItem href="#">c</ListItem>
        </Section>

        <Section>
          <ListItem
            href="#"
            trailing={
              <HStack>
                <div>b</div>
                <div>Chartarea</div>
              </HStack>
            }
          >
            <HStack>
              <span>a</span>
              <span>trailing item</span>
            </HStack>
          </ListItem>
          <ListItem href="#">b</ListItem>
          <ListItem href="#">c</ListItem>
        </Section>

        <Section>
          <ListItem
            title="C"
            groupTitle
            className="ios:top-11-safe material:top-16-safe sticky"
          />
          <ListItem title="Caiden" />
          <ListItem title="Calvin" />
          <ListItem title="Candy" href="#" />
          <ListItem
            href="#"
            chevronMaterial={false}
            title="Yellow Submarine"
            after="$15"
            subtitle="Beatles"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
            media={
              <img
                className="ios:rounded-lg material:rounded-full ios:w-20 material:w-10"
                src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg"
                width="80"
                alt="demo"
              />
            }
          />
          <ListItem
            link
            header="Email"
            title="john@konsta"
            footer="Work"
            after="Edit"
            media={<Briefcase />}
          />
        </Section>
        <Section>
          <ListItem>
            <Box>
              <div>d</div>
              <div>d</div>
            </Box>
          </ListItem>
        </Section>
        <Section>
          <ListItem>dd</ListItem>
        </Section>
        <Section header="d">
          <ListItem
            title="C"
            groupTitle
            className="ios:top-11-safe material:top-16-safe sticky"
          />
          <ListItem title="Caiden" />
          <ListItem title="Calvin" />
          <ListItem title="Candy" />
          <ListItem
            link
            chevronMaterial={false}
            title="Yellow Submarine"
            after="$15"
            subtitle="Beatles"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
            media={
              <img
                className="ios:rounded-lg material:rounded-full ios:w-20 material:w-10"
                src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg"
                width="80"
                alt="demo"
              />
            }
          />
          <ListItem
            link
            header="Email"
            title="john@konsta"
            footer="Work"
            after="Edit"
            media={<Briefcase />}
          />
        </Section>
      </List>
      {/* <CustomListItem
        title="직무 퀘스트"
        subtitle="27주차"
        chartData={chartData}
        score={80}
        href="/job-quest-details"
      /> */}
    </>
  );
}
