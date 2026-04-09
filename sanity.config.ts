"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./sanity/schemaTypes";
import { apiVersion, dataset, projectId } from "./sanity/env";

export default defineConfig({
    name: "sunthru-studio",
    title: "SunThru CMS",
    projectId,
    dataset,
    schema,
    plugins: [structureTool()],
    basePath: "/studio",
});
