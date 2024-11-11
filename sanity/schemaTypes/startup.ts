import { defineField, defineType } from "sanity";

export const startup = defineType({
  name: "startup", // name of the table
  title: "Startups", // title of the table in plural form
  type: "document", // type of the table
  // fields or columns that this table should have
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug", // name of the column
      type: "slug", // datatype of the column
      options: {
        source: "title", // means that the generated slug will be based on the startup title
      },
    }),
    defineField({
      name: "author",
      type: "reference", // means that this author column is with a type of author schema that we created
      to: { type: "author" }, // this line is used to reference this column field to the author schema
    }),
    defineField({
      name: "views",
      type: "number",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "category",
      type: "string",
      validation: (
        Rule // this is a validation to make sure that the category of the startup satisfies the rules specified
      ) => Rule.min(1).max(20).required().error("Please enter a category"),
    }),
    defineField({
      name: "image",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "pitch",
      type: "markdown",
    }),
  ],
});
