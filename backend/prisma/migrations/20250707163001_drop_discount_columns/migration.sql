/*
  Warnings:

  - You are about to drop the column `discount` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `originalPrice` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `percentage` on the `products` table. All the data in the column will be lost.
  - Changed the type of `images` on the `products` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "discount",
DROP COLUMN "originalPrice",
DROP COLUMN "percentage",
DROP COLUMN "images",
ADD COLUMN     "images" JSON NOT NULL DEFAULT '{}';
