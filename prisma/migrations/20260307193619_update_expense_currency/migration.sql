/*
  Warnings:

  - You are about to drop the column `amount` on the `Expense` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Expense` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Expense` table. All the data in the column will be lost.
  - Added the required column `currency` to the `Expense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `exchangeRate` to the `Expense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `method` to the `Expense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tag` to the `Expense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Expense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valueBRL` to the `Expense` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Expense" DROP COLUMN "amount",
DROP COLUMN "title",
DROP COLUMN "type",
ADD COLUMN     "currency" TEXT NOT NULL,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "exchangeRate" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "method" TEXT NOT NULL,
ADD COLUMN     "tag" TEXT NOT NULL,
ADD COLUMN     "value" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "valueBRL" DECIMAL(65,30) NOT NULL;
