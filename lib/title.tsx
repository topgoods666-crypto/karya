import React from "react";

export function renderTitle({
  titleLine1,
  titleLine2,
  titleEm,
  titleEnd,
}: {
  titleLine1: string;
  titleLine2?: string;
  titleEm: string;
  titleEnd?: string;
}) {
  const Em = (
    <span className="italic text-champagne">{titleEm}</span>
  );

  if (titleLine2) {
    if (titleLine2.includes("[EM]")) {
      const [a, b] = titleLine2.split("[EM]");
      return (
        <>
          {titleLine1}
          <br />
          {a}
          {Em}
          {b}
        </>
      );
    }
    return (
      <>
        {titleLine1}
        <br />
        {titleLine2}
      </>
    );
  }
  if (titleEnd) {
    if (titleEnd.includes("[EM]")) {
      const [a, b] = titleEnd.split("[EM]");
      return (
        <>
          {titleLine1}
          <br />
          {a}
          {Em}
          {b}
        </>
      );
    }
    return (
      <>
        {titleLine1}
        <br />
        {Em}
        {titleEnd}
      </>
    );
  }
  return (
    <>
      {titleLine1} {Em}
    </>
  );
}

export function newlineToBr(s: string) {
  return s.split("\n").map((part, i, arr) => (
    <React.Fragment key={i}>
      {part}
      {i < arr.length - 1 && <br />}
    </React.Fragment>
  ));
}
