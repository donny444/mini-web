-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 14, 2024 at 09:07 AM
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
-- Table structure for table `candidates`
--

CREATE TABLE `candidates` (
  `id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `party` int(11) DEFAULT NULL,
  `file_name` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `candidates`
--

INSERT INTO `candidates` (`id`, `name`, `party`, `file_name`) VALUES
(9, 'เสรีพิศุทธ์ เตมียเวส', 2, 'seri.webp'),
(10, 'จุรินทร์ ลักษณวิศิษฏ์', 3, 'jurin.jpg'),
(11, 'ประยุทธ์ จันทร์โอชา', 4, 'prayuth.jpg'),
(12, 'เศรษฐา ทวีสิน', 5, 'shetta.webp'),
(13, 'วรงค์ เดชกิจวิกรม', 6, 'warong.webp'),
(14, 'พิธา ลิ้มเจริญรัตน์', 7, 'pita.jpg'),
(15, 'วราวุธ ศิลปอาชา', 8, 'warawuth.jpg'),
(16, 'สุดารัตน์ เกยุราพันธุ์', 9, 'sudarat.jpg'),
(17, 'กรณ์ จาติกวณิช', 10, 'korn.jpg'),
(18, 'ประวิตร วงษ์สุวรรณ', 11, 'prawit.jpg'),
(19, 'อนุทิน ชาญวีรกูล', 22, 'anutin.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `candidates`
--
ALTER TABLE `candidates`
  ADD PRIMARY KEY (`id`),
  ADD KEY `party` (`party`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `candidates`
--
ALTER TABLE `candidates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `candidates`
--
ALTER TABLE `candidates`
  ADD CONSTRAINT `candidates_ibfk_1` FOREIGN KEY (`party`) REFERENCES `parties` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
