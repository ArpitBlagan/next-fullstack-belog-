/*
  Warnings:

  - Changed the type of `upvote` on the `Comment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `downvote` on the `Comment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "upvote",
ADD COLUMN     "upvote" INTEGER NOT NULL,
DROP COLUMN "downvote",
ADD COLUMN     "downvote" INTEGER NOT NULL;
