import SearchForm from "@/components/custom/SearchForm";
import StartupCard from "@/components/custom/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "John Carlo" },
      _id: 1,
      description: "This is a description",
      image:
        "https://cdn.prod.website-files.com/66e3ffddf1c6e55cc8c157f6/670e5eb8e61989bc964945e5_655b5e2e1972c2cc19a3c190_startup-business-model.png",
      category: "Robots",
      title: "We Robots",
    },
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 2, name: "John Moniel" },
      _id: 2,
      description: "This is a description",
      image:
        "https://cdn.prod.website-files.com/66e3ffddf1c6e55cc8c157f6/670e5eb8e61989bc964945e5_655b5e2e1972c2cc19a3c190_startup-business-model.png",
      category: "Robots",
      title: "We Robots",
    },
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 3, name: "John Vincent" },
      _id: 3,
      description: "This is a description",
      image:
        "https://cdn.prod.website-files.com/66e3ffddf1c6e55cc8c157f6/670e5eb8e61989bc964945e5_655b5e2e1972c2cc19a3c190_startup-business-model.png",
      category: "Robots",
      title: "We Robots",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Spark Your <span className="text-primary">Ideas</span>, <br />{" "}
          <span className="text-primary">Ignite</span> Your Business
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts?.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-result">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
