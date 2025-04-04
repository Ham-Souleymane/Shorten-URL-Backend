-- CreateTable
CREATE TABLE "url" (
    "id" TEXT NOT NULL,
    "original" TEXT NOT NULL,
    "short" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "numOfClicked" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "url_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "url_short_key" ON "url"("short");
