/*
  Warnings:

  - You are about to drop the column `short` on the `url` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[code]` on the table `url` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "url_short_key";

-- AlterTable
ALTER TABLE "url" DROP COLUMN "short",
ADD COLUMN     "code" TEXT,
ADD COLUMN     "shortenUrl" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "url_code_key" ON "url"("code");
