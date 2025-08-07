import type { H3Error } from "h3";

export function isH3Error(error: unknown): error is H3Error {
  return typeof error === "object" && error !== null && "statusCode" in error;
}
