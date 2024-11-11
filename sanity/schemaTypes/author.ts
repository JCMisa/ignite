import { UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const author = defineType({
  name: "author", // name of the table
  title: "Authors", // title of the table in plural form
  type: "document", // type of the table
  icon: UserIcon, // icon of the table
  // fields or columns that this table should have
  fields: [
    defineField({
      name: "id", // name of the column
      type: "number", // datatype of the column
    }),
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "username",
      type: "string",
    }),
    defineField({
      name: "email",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "url",
    }),
    defineField({
      name: "bio",
      type: "text",
    }),
  ],
  // this allows us to select the author by name and preview them
  preview: {
    select: {
      title: "name",
    },
  },
});
