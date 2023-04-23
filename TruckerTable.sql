/*
 Navicat Premium Data Transfer

 Source Server         : Handynote
 Source Server Type    : MySQL
 Source Server Version : 80030 (8.0.30)
 Source Host           : localhost:3306
 Source Schema         : csc4402

 Target Server Type    : MySQL
 Target Server Version : 80030 (8.0.30)
 File Encoding         : 65001

 Date: 14/04/2023 11:58:16
*/
CREATE DATABASE IF NOT EXISTS TRUCKER;
USE TRUCKER;

-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY ''; --Insert SQl password to get to post information on board
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for trucks_delivering
-- ----------------------------
DROP TABLE IF EXISTS `trucks_delivering`;
CREATE TABLE `trucks_delivering`  (
  `Email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT 'Email',
  `DateAvailable` datetime NULL DEFAULT NULL COMMENT 'Date',
  `CoNumber` int NULL DEFAULT NULL COMMENT 'CO#',
  `EquipmentType` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT 'Equipment Type',
  `OriginCity` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT 'Origin City',
  `OriginState` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT 'Origin State',
  `DestinationCity` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT 'Destination City',
  `DestinationState` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT 'Destination State',
  `Miles` int NULL DEFAULT NULL COMMENT 'Miles',
  `TruckCost` int NULL DEFAULT NULL COMMENT 'Truck Cost',
  `Type` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT 'Type',
  `UniqueJobId` INT AUTO_INCREMENT PRIMARY KEY NOT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of trucks_delivering
-- ----------------------------
INSERT INTO `trucks_delivering` VALUES ('johndoe@example.com', '2015-11-16 00:00:00', 8, 'Flatbed', 'CLEVELAND', 'OH', 'MILFORD', 'CT', 517, 5000, 'Broker', NULL);
INSERT INTO `trucks_delivering` VALUES ('janedoe@example.com', '2015-11-16 00:00:00', 8, 'FLAT OR STEP DECK', 'MARIETTA', 'OH', 'CEDAR RAOIDS', 'IA', 689, 11000, 'Broker', NULL);
INSERT INTO `trucks_delivering` VALUES ('jimsmith@example.com', '2015-11-16 00:00:00', 7, 'VAN', 'BUCYRUS', 'OH', 'DANVILLE', 'IL', 309, NULL, 'Truck', NULL);
INSERT INTO `trucks_delivering` VALUES ('johndoe@example.com', '2023-04-19 10:00:00', 8, 'Refrigerated', 'Boston', 'MA', 'Dallas', 'TX', 1900, 9000, 'Full Truckload', NULL);
INSERT INTO `trucks_delivering` VALUES ('janedoe@example.com', '2023-04-20 08:00:00', 7, 'Dry Van', 'Seattle', 'WA', 'Orlando', 'FL', 3000, 12000, 'Full Truckload', NULL);
INSERT INTO `trucks_delivering` VALUES ('jimsmith@example.com', '2023-04-21 12:00:00', 9, 'Flatbed', 'Portland', 'OR', 'New York', 'NY', 4000, 15000, 'Full Truckload', NULL);
INSERT INTO `trucks_delivering` VALUES ('johnsmith@example.com', '2023-04-22 15:00:00', 12, 'Dry Van', 'Chicago', 'IL', 'Los Angeles', 'CA', 2000, 10000, 'Full Truckload', NULL);
INSERT INTO `trucks_delivering` VALUES ('janesmith@example.com', '2023-04-23 09:00:00', 13, 'Flatbed', 'Miami', 'FL', 'Houston', 'TX', 1200, 8000, 'Full Truckload', NULL);
INSERT INTO `trucks_delivering` VALUES ('johntaylor@example.com', '2023-04-24 14:00:00', 8, 'Refrigerated', 'Atlanta', 'GA', 'San Francisco', 'CA', 3000, 12000, 'Full Truckload', NULL);
SET FOREIGN_KEY_CHECKS = 1;