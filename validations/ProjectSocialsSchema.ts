import { z } from "zod";

const optionalUrl = z.union([
  z.string().url("Invalid URL"),
  z.literal(""),
  z.null(),
]);

export const ProjectSocialsSchema = z.object({
  linkedInUrl: optionalUrl,
  facebookUrl: optionalUrl,
  instagramUrl: optionalUrl,
  twitterUrl: optionalUrl,
  youtubeUrl: optionalUrl,
});

export type ProjectSocialsDataType = z.infer<typeof ProjectSocialsSchema>;
