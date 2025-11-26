import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        name: v.string(),
        email: v.string(),
    }),
    posts: defineTable({
        title: v.string(),
        content: v.string(),
        authorId: v.id("users"),
    }),
});