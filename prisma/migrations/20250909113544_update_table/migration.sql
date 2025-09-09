/*
  Warnings:

  - Added the required column `image` to the `characters` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `eastereggs` table without a default value. This is not possible if the table is not empty.
  - Made the column `title` on table `eastereggs` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_characters" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "firstEp" TEXT NOT NULL,
    "alive" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_characters" ("age", "alive", "createdAt", "description", "firstEp", "id", "name", "updatedAt") SELECT "age", "alive", "createdAt", "description", "firstEp", "id", "name", "updatedAt" FROM "characters";
DROP TABLE "characters";
ALTER TABLE "new_characters" RENAME TO "characters";
CREATE TABLE "new_eastereggs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "secrets" TEXT,
    "facts" TEXT,
    "theories" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_eastereggs" ("createdAt", "facts", "id", "secrets", "theories", "title", "updatedAt") SELECT "createdAt", "facts", "id", "secrets", "theories", "title", "updatedAt" FROM "eastereggs";
DROP TABLE "eastereggs";
ALTER TABLE "new_eastereggs" RENAME TO "eastereggs";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
