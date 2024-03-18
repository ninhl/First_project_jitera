import { QueryFunctionContext } from "react-query";
import { serviceFetch } from "@utils/service";
import { getRoute } from "@utils/route";

export const DefaultGetApiNotesQueryKey: [string, string, string] = ["Note", "GET", "/api/notes"];
export type FetchGetApiNotesRequestBody = {
  notes: { content?: string; user_id?: string };
  pagination_page: number;
  pagination_limit: number;
};
export type FetchGetApiNotesResponseBody = {
  total_pages: number;
  notes: {
    id?: number;
    created_at?: Date;
    updated_at?: Date;
    content?: string;
    user_id?: string;
    user?: { id?: number; created_at?: Date; updated_at?: Date; fullname?: string; email?: string };
  }[];
};

export const fetchGetApiNotes = async (
  context: QueryFunctionContext<
    [string, string, string, Partial<FetchGetApiNotesRequestBody> | undefined]
  >
): Promise<FetchGetApiNotesResponseBody> => {
  return serviceFetch({
    url: getRoute("/api/notes", context.queryKey[3]),
    params: context.queryKey[3],
    method: "GET",
  });
};
export const DefaultGetApiNotesIdQueryKey: [string, string, string] = [
  "Note",
  "GET",
  "/api/notes/:id",
];
export type FetchGetApiNotesIdRequestBody = { id: string };
export type FetchGetApiNotesIdResponseBody = {
  note: {
    id?: number;
    created_at?: Date;
    updated_at?: Date;
    content?: string;
    user_id?: string;
    user?: { id?: number; created_at?: Date; updated_at?: Date; fullname?: string; email?: string };
  };
};

export const fetchGetApiNotesId = async (
  context: QueryFunctionContext<
    [string, string, string, Partial<FetchGetApiNotesIdRequestBody> | undefined]
  >
): Promise<FetchGetApiNotesIdResponseBody> => {
  return serviceFetch({
    url: getRoute("/api/notes/:id", context.queryKey[3]),
    params: context.queryKey[3],
    method: "GET",
  });
};

export type MutatePostApiNotesRequestBody = { notes: { content?: string; user_id?: string } };
export type MutatePostApiNotesResponseBody = {
  note: {
    id?: number;
    created_at?: Date;
    updated_at?: Date;
    content?: string;
    user_id?: string;
    user?: { id?: number; created_at?: Date; updated_at?: Date; fullname?: string; email?: string };
  };
};

export const mutatePostApiNotes = async (
  body: MutatePostApiNotesRequestBody
): Promise<MutatePostApiNotesResponseBody> => {
  return serviceFetch({
    url: getRoute("/api/notes", body),
    method: "POST",
    data: body,
  });
};
export type MutatePutApiNotesIdRequestBody = {
  id: string;
  notes: { content?: string; user_id?: string };
};
export type MutatePutApiNotesIdResponseBody = {
  note: {
    id?: number;
    created_at?: Date;
    updated_at?: Date;
    content?: string;
    user_id?: string;
    user?: { id?: number; created_at?: Date; updated_at?: Date; fullname?: string; email?: string };
  };
};

export const mutatePutApiNotesId = async (
  body: MutatePutApiNotesIdRequestBody
): Promise<MutatePutApiNotesIdResponseBody> => {
  return serviceFetch({
    url: getRoute("/api/notes/:id", body),
    method: "PUT",
    data: body,
  });
};
export type MutateDeleteApiNotesIdRequestBody = { id: string };
export type MutateDeleteApiNotesIdResponseBody = Record<string, never>;

export const mutateDeleteApiNotesId = async (
  body: MutateDeleteApiNotesIdRequestBody
): Promise<MutateDeleteApiNotesIdResponseBody> => {
  return serviceFetch({
    url: getRoute("/api/notes/:id", body),
    method: "DELETE",
    data: body,
  });
};
