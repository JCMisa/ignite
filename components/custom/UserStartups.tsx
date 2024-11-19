import { client } from "@/sanity/lib/client";
import { STARTUPS_BY_AUTHOR_QUERY } from "@/sanity/lib/queries";
import React from "react";
import StartupCard, { StartupTypeCard } from "./StartupCard";

const UserStartups = async ({ id }: { id: string }) => {
  const userStartups = await client.fetch(STARTUPS_BY_AUTHOR_QUERY, { id });

  return (
    <>
      {userStartups?.length > 0 ? (
        userStartups?.map((startup: StartupTypeCard) => (
          <StartupCard key={startup?._id} post={startup} />
        ))
      ) : (
        <p className="no-result">No posts yet.</p>
      )}
    </>
  );
};

export default UserStartups;
