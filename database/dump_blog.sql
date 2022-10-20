-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema blog
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema blog
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `blog` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci ;
USE `blog` ;

-- -----------------------------------------------------
-- Table `blog`.`author`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blog`.`author` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(65) NOT NULL,
  `email` VARCHAR(65) NOT NULL,
  `image` VARCHAR(128) NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_spanish_ci;


-- -----------------------------------------------------
-- Table `blog`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blog`.`category` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(45) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_spanish_ci;


-- -----------------------------------------------------
-- Table `blog`.`post`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blog`.`post` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(64) CHARACTER SET 'utf8mb4' NOT NULL,
  `description` VARCHAR(256) CHARACTER SET 'utf8mb4' NOT NULL,
  `post_date` DATE NOT NULL,
  `author_id` INT UNSIGNED NOT NULL,
  `category_id` INT UNSIGNED NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_post_author_idx` (`author_id` ASC),
  INDEX `fk_post_category1_idx` (`category_id` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_spanish_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `blog`.`author`
-- -----------------------------------------------------
START TRANSACTION;
USE `blog`;
INSERT INTO `blog`.`author` (`id`, `name`, `email`, `image`, `created_at`, `updated_at`) VALUES (DEFAULT, 'Rubén González Martín', 'ruben.gonzalez@mail.com', 'https://picsum.photos/id/237/400/400', DEFAULT, DEFAULT);
INSERT INTO `blog`.`author` (`id`, `name`, `email`, `image`, `created_at`, `updated_at`) VALUES (DEFAULT, 'Patricia Martín Muñoz', 'patricia.martin@mail.com', 'https://picsum.photos/id/1005/400/400', DEFAULT, DEFAULT);

COMMIT;


-- -----------------------------------------------------
-- Data for table `blog`.`category`
-- -----------------------------------------------------
START TRANSACTION;
USE `blog`;
INSERT INTO `blog`.`category` (`id`, `description`, `created_at`, `updated_at`) VALUES (DEFAULT, 'Personal', DEFAULT, DEFAULT);
INSERT INTO `blog`.`category` (`id`, `description`, `created_at`, `updated_at`) VALUES (DEFAULT, 'Desarrollo web', DEFAULT, DEFAULT);

COMMIT;


-- -----------------------------------------------------
-- Data for table `blog`.`post`
-- -----------------------------------------------------
START TRANSACTION;
USE `blog`;
INSERT INTO `blog`.`post` (`id`, `title`, `description`, `post_date`, `author_id`, `category_id`, `created_at`, `updated_at`) VALUES (DEFAULT, 'Mi primer post - Rubén', 'Lorem ipsum dolor sit amet consectetur adipiscing elit in, facilisis augue netus conubia suspendisse suscipit curabitur', '2022-10-01', 1, 1, DEFAULT, DEFAULT);
INSERT INTO `blog`.`post` (`id`, `title`, `description`, `post_date`, `author_id`, `category_id`, `created_at`, `updated_at`) VALUES (DEFAULT, 'Mi segundo post - Rubén', 'Lorem ipsum dolor sit amet consectetur adipiscing elit in, facilisis augue netus conubia suspendisse suscipit curabitur', '2022-10-02', 1, 1, DEFAULT, DEFAULT);
INSERT INTO `blog`.`post` (`id`, `title`, `description`, `post_date`, `author_id`, `category_id`, `created_at`, `updated_at`) VALUES (DEFAULT, 'Tutorial de node y angular', 'Lorem ipsum dolor sit amet consectetur adipiscing elit in, facilisis augue netus conubia suspendisse suscipit curabitur', '2022-10-07', 1, 2, DEFAULT, DEFAULT);
INSERT INTO `blog`.`post` (`id`, `title`, `description`, `post_date`, `author_id`, `category_id`, `created_at`, `updated_at`) VALUES (DEFAULT, 'Mi primer post - Patricia', 'Lorem ipsum dolor sit amet consectetur adipiscing elit in, facilisis augue netus conubia suspendisse suscipit curabitur', '2022-10-05', 2, 1, DEFAULT, DEFAULT);

COMMIT;

