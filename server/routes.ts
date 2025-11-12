import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import aiRouter from "./api/ai";
import passport from "passport";
import { requireAuth } from "./auth";
import type { User } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Authentication Routes
  app.post("/api/auth/register", async (req, res, next) => {
    try {
      const { email, username, password, name } = req.body;

      // Validation
      if (!email || !username || !password) {
        return res.status(400).json({
          error: "Missing required fields",
          message: "Email, username, and password are required"
        });
      }

      if (password.length < 8) {
        return res.status(400).json({
          error: "Invalid password",
          message: "Password must be at least 8 characters long"
        });
      }

      // Check if user already exists
      const existingUserByEmail = await storage.getUserByEmail(email);
      if (existingUserByEmail) {
        return res.status(409).json({
          error: "Email already exists",
          message: "An account with this email already exists"
        });
      }

      const existingUserByUsername = await storage.getUserByUsername(username);
      if (existingUserByUsername) {
        return res.status(409).json({
          error: "Username already exists",
          message: "An account with this username already exists"
        });
      }

      // Create user
      const user = await storage.createUser({
        email,
        username,
        password, // Will be hashed in storage.createUser
      });

      // Log the user in automatically
      req.login(user, (err) => {
        if (err) {
          return next(err);
        }

        // Return user without password
        const { password: _, ...userWithoutPassword } = user;
        res.status(201).json({
          message: "Account created successfully",
          user: userWithoutPassword
        });
      });
    } catch (error: any) {
      console.error("Registration error:", error);
      res.status(500).json({
        error: "Registration failed",
        message: "An error occurred during registration"
      });
    }
  });

  app.post("/api/auth/login", (req, res, next) => {
    passport.authenticate("local", (err: any, user: User, info: any) => {
      if (err) {
        return next(err);
      }

      if (!user) {
        return res.status(401).json({
          error: "Authentication failed",
          message: info?.message || "Invalid email or password"
        });
      }

      req.login(user, (err) => {
        if (err) {
          return next(err);
        }

        // Return user without password
        const { password: _, ...userWithoutPassword } = user;
        res.json({
          message: "Logged in successfully",
          user: userWithoutPassword
        });
      });
    })(req, res, next);
  });

  app.post("/api/auth/logout", (req, res) => {
    req.logout((err) => {
      if (err) {
        return res.status(500).json({
          error: "Logout failed",
          message: "An error occurred during logout"
        });
      }

      res.json({ message: "Logged out successfully" });
    });
  });

  app.get("/api/auth/me", requireAuth, (req, res) => {
    const user = req.user as User;
    const { password: _, ...userWithoutPassword } = user;
    res.json({ user: userWithoutPassword });
  });

  // AI Content Generation Routes
  app.use("/api/ai", aiRouter);

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "SFS Social Powerhouse API" });
  });

  const httpServer = createServer(app);

  return httpServer;
}
