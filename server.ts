import express from "express";
import path from "path";
import fs from "fs/promises";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware
  app.use(express.json());

  // Database setup
  const DATA_DIR = path.join(process.cwd(), "data");
  const DATA_FILE = path.join(DATA_DIR, "waitlist.json");

  // Ensure directory and data file exist
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    try {
      await fs.access(DATA_FILE);
    } catch {
      await fs.writeFile(DATA_FILE, JSON.stringify([], null, 2), "utf-8");
    }
  } catch (err) {
    console.error("Error creating waitlist data store:", err);
  }

  // Helper helper to read waitlist
  async function readWaitlist(): Promise<any[]> {
    try {
      const content = await fs.readFile(DATA_FILE, "utf-8");
      return JSON.parse(content);
    } catch {
      return [];
    }
  }

  // Helper helper to write waitlist
  async function writeWaitlist(data: any[]): Promise<void> {
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
  }

  // Base virtual spot count (makes user feel part of an exclusive pre-launch hype)
  const BASE_WAITLIST_COUNT = 1438;

  // API Route - Get waitlist counts
  app.get("/api/waitlist/status", async (req, res) => {
    try {
      const waitlist = await readWaitlist();
      res.json({
        success: true,
        count: BASE_WAITLIST_COUNT + waitlist.length,
        countRegistered: waitlist.length,
      });
    } catch (err) {
      res.status(500).json({ error: "Failed to read database state" });
    }
  });

  // API Route - Submit Waitlist Form
  app.post("/api/waitlist", async (req, res) => {
    try {
      const { name, email, vibe_preference } = req.body;

      if (!email || typeof email !== "string" || !email.includes("@")) {
        return res.status(400).json({ success: false, error: "Please enter a valid email address." });
      }

      if (!vibe_preference) {
        return res.status(400).json({ success: false, error: "Please select your preferred cafe aura." });
      }

      const waitlist = await readWaitlist();

      // Check for duplicate emails
      const isRegistered = waitlist.some(
        (entry) => entry.email.trim().toLowerCase() === email.trim().toLowerCase()
      );

      if (isRegistered) {
        return res.status(409).json({
          success: false,
          error: "This email is already on our exclusive waitlist! We'll keep you updated.",
        });
      }

      // Add entry
      const newEntry = {
        id: `wait_${Math.random().toString(36).substring(2, 11)}_${Date.now()}`,
        name: name ? name.trim() : "Future Cafolian",
        email: email.trim().toLowerCase(),
        vibe_preference: vibe_preference,
        created_at: new Date().toISOString(),
      };

      waitlist.push(newEntry);
      await writeWaitlist(waitlist);

      res.status(201).json({
        success: true,
        message: "You're in! Welcome to the CAFORA Inner Circle.",
        spotNumber: BASE_WAITLIST_COUNT + waitlist.length,
        entry: newEntry,
      });
    } catch (err) {
      console.error("Waitlist error:", err);
      res.status(500).json({ success: false, error: "An unexpected error occurred. Please try again later." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Vite development middleware integrated.");
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log("Static production assets mounted from dist.");
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[CAFORA Server] Running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
