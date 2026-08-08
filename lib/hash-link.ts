import type { MouseEvent } from "react";

export function scrollToHashTarget(id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  const header = document.querySelector("header");
  const offset = header ? header.getBoundingClientRect().height : 0;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({ top, behavior: "smooth" });
}

// next/link only scrolls to a hash when the URL changes, so re-clicking the same hash normally does nothing
export function handleHashLinkClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith("#")) return;

  const id = href.slice(1);
  if (!document.getElementById(id)) return;

  event.preventDefault();
  scrollToHashTarget(id);

  if (window.location.hash !== href) {
    window.history.pushState(null, "", href);
  }
}
