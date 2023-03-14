import { Link } from "gatsby";
import React from "react";
import { Overline, Subtitle1 } from "./Typography";

const AlgoCard = ({ algo }) => {
  return (
    <div
      className="group border border-l-8 px-4 py-4 hover:shadow-sm"
      style={{
        borderLeftColor: `${
          algo.frontmatter.difficulty === "easy"
            ? "rgba(16, 185, 129)"
            : algo.frontmatter.difficulty === "medium"
              ? "rgba(59, 130, 246)"
              : "rgba(239, 68, 68)"
        }`
      }}
    >
      <Link to={algo.fields.slug}>
        <div
          className="flex flex-row items-center justify-between"
          title={algo.frontmatter.title}
        >
          <Subtitle1
            level={3}
            className={`text-sm font-bold text-gray-600 group-hover:text-indigo-primary`}
          >
            {algo.frontmatter.title}
          </Subtitle1>
          <Overline className="rounded-xl bg-green-300 px-2 py-0.5" style={{
            backgroundColor: `${
              algo.frontmatter.difficulty === "easy"
                ? "rgba(16, 185, 129)"
                : algo.frontmatter.difficulty === "medium"
                  ? "rgba(59, 130, 246)"
                  : "rgba(239, 68, 68)"
            }`
          }}>
            {algo.frontmatter.category}
          </Overline>
        </div>
      </Link>
    </div>
  );
};

export default AlgoCard;
