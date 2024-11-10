import React from "react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search Startups"
      />

      <div className="flex gap-2">
        {query && <SearchFormReset />}
        {/* when this button s is clicked, it will redirect to "/" by the Form action */}
        {/* this will refresh the page and check again if the query is null or not */}
        <button type="submit" className="search-btn text-white">
          S
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
