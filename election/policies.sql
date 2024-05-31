-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 14, 2024 at 09:08 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `election`
--

-- --------------------------------------------------------

--
-- Table structure for table `policies`
--

CREATE TABLE `policies` (
  `id` int(11) NOT NULL,
  `name` varchar(80) NOT NULL,
  `party` int(11) DEFAULT NULL,
  `detail` varchar(200) NOT NULL,
  `file_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `policies`
--

INSERT INTO `policies` (`id`, `name`, `party`, `detail`, `file_name`) VALUES
(1, 'เงินหมื่นดิจิตอล', 5, 'รับเงินหนึ่งหมื่นบาทในรูปแบบดิจิตอลวอลเล็ทเพื่อการจับจ่ายใช้สอยในท้องถิ่น', '10k.webp'),
(2, '20บาทตลอดสาย', 5, 'ค่าเดินทางรถไฟรวม20บาทตลอดสาย', '20.webp'),
(3, 'แก้ไขมาตรา112', 7, 'แก้ไขกฎหมายมาตรา112เพื่อเสรีภาพในการแสดงออก', '112.jpg'),
(4, 'ยกเลิกเกณฑ์ทหาร', NULL, 'ยกเลิกการเกณฑ์ทหาร เปลี่ยนเป็นรูปแบบสมัครใจ', 'military.jpg'),
(5, 'สมรสเท่าเทียม', NULL, 'สิทธิในการสมรสเพื่อความเท่าเทียมทางเพศ', 'pride.jpg'),
(6, 'กัญชาเสรี', 22, 'การใช้กัญชาทางการแพทย์และสันทนาการ', 'weeds.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `policies`
--
ALTER TABLE `policies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `party` (`party`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `policies`
--
ALTER TABLE `policies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `policies`
--
ALTER TABLE `policies`
  ADD CONSTRAINT `policies_ibfk_1` FOREIGN KEY (`party`) REFERENCES `parties` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
