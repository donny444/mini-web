-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 25, 2024 at 06:19 PM
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
-- Table structure for table `parties`
--

CREATE TABLE `parties` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `candidate` int(11) DEFAULT NULL,
  `file_name` varchar(20) NOT NULL,
  `number` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `parties`
--

INSERT INTO `parties` (`id`, `name`, `candidate`, `file_name`, `number`) VALUES
(2, 'เสรีรวมไทย', 9, 'เสรีรวมไทย.jpg', 25),
(3, 'ประชาธิปัตย์', 10, 'ประชาธิปัตย์.jpg', 26),
(4, 'รวมไทยสร้างชาติ', 11, 'รวมไทยสร้างชาติ.jpg', 22),
(5, 'เพื่อไทย', 12, 'เพื่อไทย.jpg', 29),
(6, 'ไทยภักดี', 13, 'ไทยภักดี.jpg', 21),
(7, 'ก้าวไกล', 14, 'ก้าวไกล.jpg', 31),
(8, 'ชาติไทยพัฒนา', 15, 'ชาติไทยพัฒนากล้า.jpg', 18),
(9, 'ไทยสร้างไทย', 16, 'ไทยสร้างไทย.jpg', 32),
(10, 'ชาติพัฒนากล้า', 17, 'ชาติพัฒนากล้า.jpg', 14),
(11, 'พลังประชารัฐ', 18, 'พลังประชารัฐ.jpg', 37),
(22, 'ภูมิใจไทย', 19, 'ภูมิใจไทย.jpg', 7);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `parties`
--
ALTER TABLE `parties`
  ADD PRIMARY KEY (`id`),
  ADD KEY `candidate` (`candidate`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `parties`
--
ALTER TABLE `parties`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `parties`
--
ALTER TABLE `parties`
  ADD CONSTRAINT `parties_ibfk_1` FOREIGN KEY (`candidate`) REFERENCES `candidates` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
