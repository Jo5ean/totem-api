-- CreateTable
CREATE TABLE `facultades` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(255) NOT NULL,
    `codigo` VARCHAR(50) NULL,
    `sheet_id` VARCHAR(255) NULL,
    `activa` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `facultades_nombre_key`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `carreras` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `facultad_id` INTEGER NOT NULL,
    `nombre` VARCHAR(255) NOT NULL,
    `codigo` VARCHAR(50) NOT NULL,
    `activa` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `carreras_facultad_id_codigo_key`(`facultad_id`, `codigo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `examenes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `carrera_id` INTEGER NOT NULL,
    `facultad_id` INTEGER NOT NULL,
    `aula_id` INTEGER NULL,
    `materia_codigo` VARCHAR(20) NOT NULL,
    `nombre_materia` VARCHAR(255) NOT NULL,
    `areatema` VARCHAR(100) NULL,
    `fecha` DATE NOT NULL,
    `hora` TIME(0) NULL,
    `tipo_examen` VARCHAR(100) NULL,
    `modalidad_examen` VARCHAR(50) NULL,
    `catedra` VARCHAR(100) NULL,
    `docente` VARCHAR(255) NULL,
    `monitoreo` VARCHAR(100) NULL,
    `control_cargo` VARCHAR(50) NULL,
    `material_permitido` TEXT NULL,
    `observaciones` TEXT NULL,
    `observaciones_adicionales` TEXT NULL,
    `url` VARCHAR(255) NULL,
    `acta_numero` VARCHAR(50) NULL,
    `cantidad_inscriptos` INTEGER NULL DEFAULT 0,
    `fecha_ult_consulta` DATETIME(3) NULL,
    `requiere_pc` BOOLEAN NOT NULL DEFAULT false,
    `activo` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `examenes_aula_id_fkey`(`aula_id`),
    INDEX `examenes_carrera_id_fkey`(`carrera_id`),
    INDEX `examenes_facultad_id_fkey`(`facultad_id`),
    INDEX `examenes_materia_codigo_fkey`(`materia_codigo`),
    INDEX `examenes_fecha_fkey`(`fecha`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `estudiantes` (
    `dni` VARCHAR(20) NOT NULL,
    `nombre` VARCHAR(100) NOT NULL,
    `apellido` VARCHAR(100) NOT NULL,
    `email` VARCHAR(255) NULL,
    `telefono` VARCHAR(50) NULL,
    `activo` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`dni`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `aulas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `sede` VARCHAR(100) NOT NULL,
    `capacidad` INTEGER NOT NULL,
    `activa` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `aulas_nombre_key`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ocupacion_aula` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `aula_id` INTEGER NOT NULL,
    `fecha` DATE NOT NULL,
    `hora` VARCHAR(10) NOT NULL,
    `utilizados` INTEGER NOT NULL DEFAULT 0,
    `capacidad_teorica` INTEGER NOT NULL,
    `observaciones` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `ocupacion_aula_fecha_fkey`(`fecha`),
    UNIQUE INDEX `ocupacion_aula_aula_id_fecha_hora_key`(`aula_id`, `fecha`, `hora`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `totem_data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sheetName` VARCHAR(255) NOT NULL,
    `data` JSON NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `processed` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `estudiante_examen` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `examen_id` INTEGER NOT NULL,
    `dni` VARCHAR(20) NOT NULL,
    `asistencia` BOOLEAN NOT NULL DEFAULT false,
    `aprobado` BOOLEAN NOT NULL DEFAULT false,
    `nota` DECIMAL(4, 2) NULL,
    `observaciones` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `estudiante_examen_dni_fkey`(`dni`),
    UNIQUE INDEX `estudiante_examen_examen_id_dni_key`(`examen_id`, `dni`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sectores_facultades` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sector` VARCHAR(50) NOT NULL,
    `facultad_id` INTEGER NOT NULL,
    `activo` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `sectores_facultades_sector_key`(`sector`),
    INDEX `sector_facultad_facultad_id_fkey`(`facultad_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `carreras_totem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `codigo_totem` VARCHAR(50) NOT NULL,
    `carrera_id` INTEGER NULL,
    `nombre_totem` VARCHAR(255) NOT NULL,
    `activo` BOOLEAN NOT NULL DEFAULT true,
    `es_mapeada` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `carreras_totem_codigo_totem_key`(`codigo_totem`),
    INDEX `carrera_totem_carrera_id_fkey`(`carrera_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `examenes_totem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `examen_id` INTEGER NOT NULL,
    `sector_totem` VARCHAR(50) NOT NULL,
    `carrera_totem` VARCHAR(50) NOT NULL,
    `materia_totem` VARCHAR(50) NOT NULL,
    `area_tema_totem` VARCHAR(50) NULL,
    `modo_totem` VARCHAR(50) NULL,
    `url_totem` TEXT NULL,
    `catedra_totem` VARCHAR(255) NULL,
    `docente_totem` VARCHAR(255) NULL,
    `monitoreo_totem` VARCHAR(255) NULL,
    `control_totem` VARCHAR(255) NULL,
    `data_original` JSON NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `examenes_totem_examen_id_key`(`examen_id`),
    INDEX `examen_totem_sector_fkey`(`sector_totem`),
    INDEX `examen_totem_carrera_fkey`(`carrera_totem`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `carreras` ADD CONSTRAINT `carreras_facultad_id_fkey` FOREIGN KEY (`facultad_id`) REFERENCES `facultades`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `examenes` ADD CONSTRAINT `examenes_carrera_id_fkey` FOREIGN KEY (`carrera_id`) REFERENCES `carreras`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `examenes` ADD CONSTRAINT `examenes_facultad_id_fkey` FOREIGN KEY (`facultad_id`) REFERENCES `facultades`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `examenes` ADD CONSTRAINT `examenes_aula_id_fkey` FOREIGN KEY (`aula_id`) REFERENCES `aulas`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ocupacion_aula` ADD CONSTRAINT `ocupacion_aula_aula_id_fkey` FOREIGN KEY (`aula_id`) REFERENCES `aulas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `estudiante_examen` ADD CONSTRAINT `estudiante_examen_examen_id_fkey` FOREIGN KEY (`examen_id`) REFERENCES `examenes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `estudiante_examen` ADD CONSTRAINT `estudiante_examen_dni_fkey` FOREIGN KEY (`dni`) REFERENCES `estudiantes`(`dni`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sectores_facultades` ADD CONSTRAINT `sectores_facultades_facultad_id_fkey` FOREIGN KEY (`facultad_id`) REFERENCES `facultades`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `carreras_totem` ADD CONSTRAINT `carreras_totem_carrera_id_fkey` FOREIGN KEY (`carrera_id`) REFERENCES `carreras`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `examenes_totem` ADD CONSTRAINT `examenes_totem_examen_id_fkey` FOREIGN KEY (`examen_id`) REFERENCES `examenes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
