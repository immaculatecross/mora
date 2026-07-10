import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import RootLayout, { metadata } from "./layout";

describe("RootLayout", () => {
  it("sets Mora metadata and the document language", () => {
    const markup = renderToStaticMarkup(
      <RootLayout>
        <main>Lesson</main>
      </RootLayout>,
    );
    const document = new DOMParser().parseFromString(markup, "text/html");

    expect(metadata).toMatchObject({
      title: "Mora",
      description: "Focused language feedback from your natural speech.",
    });
    expect(document.documentElement.getAttribute("lang")).toBe("en");
    expect(document.body.textContent).toContain("Lesson");
  });
});
