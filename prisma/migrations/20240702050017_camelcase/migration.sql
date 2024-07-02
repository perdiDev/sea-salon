/*
  Warnings:

  - You are about to drop the column `startTime` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `totalPrice` on the `Reservation` table. All the data in the column will be lost.
  - Added the required column `start_time` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_price` to the `Reservation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "startTime",
DROP COLUMN "totalPrice",
ADD COLUMN     "start_time" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "total_price" INTEGER NOT NULL;
