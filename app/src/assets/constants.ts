export type Page = {
  name: string;
  slug: string;
};

export const pages = [
  { name: "General", slug: "/general" },
  { name: "People", slug: "/people" },
  { name: "Awards", slug: "/awards" },
];

export type Label = {
  label: string;
  displayName: string;
};
