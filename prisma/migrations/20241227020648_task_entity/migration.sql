/*
  Warnings:

  - The primary key for the `tasks` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Int` on the `tasks` table. All the data in the column will be lost.
  - Added the required column `id` to the `Tasks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tasks` DROP PRIMARY KEY,
    DROP COLUMN `Int`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);
