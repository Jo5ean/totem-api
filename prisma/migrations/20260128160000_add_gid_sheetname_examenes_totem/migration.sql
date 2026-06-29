-- AlterTable
ALTER TABLE `examenes_totem` ADD COLUMN `gid` VARCHAR(50) NULL;
ALTER TABLE `examenes_totem` ADD COLUMN `sheet_name` VARCHAR(255) NULL;

-- CreateIndex
CREATE INDEX `examen_totem_gid_fkey` ON `examenes_totem`(`gid`);
