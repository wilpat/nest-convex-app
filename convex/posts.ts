import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createPost = mutation({
  args: { title: v.string(), content: v.string(), authorId: v.id("users") },
  handler: async (ctx, args) => {
    return await ctx.db.insert("posts", args);
  },
});

export const getPosts = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("posts").collect();
  },
});
