/*
  Warnings:

  - A unique constraint covering the columns `[userName]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `users.userName_unique` ON `users`(`userName`);
