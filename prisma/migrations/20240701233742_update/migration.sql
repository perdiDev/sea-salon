-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Admin', 'Customer');

-- CreateTable
CREATE TABLE "User" (
    "id_user" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'Customer',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "Reservation" (
    "id_reservation" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id_reservation")
);

-- CreateTable
CREATE TABLE "Service" (
    "id_service" SERIAL NOT NULL,
    "service_name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id_service")
);

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;
