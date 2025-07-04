-- AlterTable
ALTER TABLE "products" ADD COLUMN     "aspects" TEXT[] DEFAULT ARRAY[]::TEXT[];
