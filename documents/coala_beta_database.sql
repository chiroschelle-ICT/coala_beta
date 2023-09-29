-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 29, 2023 at 07:12 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `coala_beta_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `leden`
--

CREATE TABLE `leden` (
  `id` int(11) NOT NULL,
  `naam` varchar(32) NOT NULL,
  `voornaam` varchar(32) NOT NULL,
  `afdeling` varchar(32) NOT NULL,
  `afdelingId` int(11) NOT NULL,
  `email` varchar(32) NOT NULL,
  `telefoon` varchar(32) NOT NULL,
  `Straat` varchar(32) NOT NULL,
  `Huisnummer` text NOT NULL,
  `Gemeente` varchar(32) NOT NULL,
  `Postcode` int(32) NOT NULL,
  `lidgeldBetaald` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `leden`
--

INSERT INTO `leden` (`id`, `naam`, `voornaam`, `afdeling`, `afdelingId`, `email`, `telefoon`, `Straat`, `Huisnummer`, `Gemeente`, `Postcode`, `lidgeldBetaald`) VALUES
(1, 'Serluppens', 'Killian', 'Leiding', 13, 'killian.serluppens@gmail.com', '+324 71 81 27 48', 'Azaleastraat', '22', 'Schelle', 2627, 1),
(3, 'Huysmans', 'Ferre', 'Kerels', 10, 'ingehuysmans@telenet.be', '0475 76 05 29', 'Suyslaan', '22', 'Schelle', 2627, 0),
(4, 'Temmerman', 'Benoit', 'Kerels', 10, 'dagmar.debeukelaer@gmail.com', '0478 54 41 82', 'Oude Schans', '32', 'Schelle', 2627, 1),
(5, 'Verbeeck', 'Xander', 'Kerels', 10, 'verbeeck.theus@gmail.com', '0473 43 48 71', 'verhuist', 'verhuist', 'verhuist', 2627, 0),
(6, 'Jorrid', 'Verbeeck', 'Kerels', 10, 'verbeeck.theus@gmail.com', '0473 43 48 71', 'verhuist', 'verhuist', 'verhuist', 2627, 1),
(7, 'De Ridder', 'Ferre', 'Kerel', 10, 'jessie.vanherck@komatsu.eu', '0479 39 10 42', 'Kapelstraat ', '181', 'Schelle', 2627, 0),
(8, 'Herremans', 'Kobe', 'Kerel', 10, 'herremanskim@gmail.com', '0468 25 21 67', 'Intrescautlaan ', '61', 'Schelle', 2627, 1),
(9, 'De Kennick', 'Rhune', 'Kerel', 10, 'Carovankerkhoven@hotmail.com', '0476 76 02 98', 'Frans Cretelaan', '31', 'Schelle', 2627, 0),
(10, 'Geerts', 'Jason', 'Kerel', 10, 'maartenvg@telenet.be', '0486835467', 'Steenwinkelstraat', '117', 'Schelle', 2627, 1),
(11, 'Test', 'RibbelJ', 'Ribbel Jongens', 2, 'test@mail.com', '0471812736', 'TestStraat', '1', 'Schelle', 2627, 0),
(12, 'Test', 'RibbelM', 'Ribbel Meisjes', 1, 'test@mail.com', '0471812736', 'TestStraat', '1', 'Schelle', 2627, 0),
(13, 'Jhon', 'De Bakker', 'Rakkers', 6, 'bakker@mail.com', '0461923471', 'Bakkerlaan', '12', 'Schelle', 2627, 0),
(14, 'Jo', 'De Pro', 'Toppers', 8, 'pro@mail.com', '12314124', 'Fan Straat', '12', 'Schelle', 1212, 0),
(16, 'Bo', 'De Roos', 'Speelclub Meisjes', 3, 'roos@gmail.com', '1111111', 'BlomeenStraat', '1234', 'Schelle', 8008, 0),
(17, 'Linnie', 'Boen', 'Ribbel Jongens', 0, 'gaming@mail.com', '1111111', 'Bambistraat', '1111', 'Hertenland', 0, 0),
(18, 'Jef', 'De Beff', 'Rakkers', 6, 'bekerman@beker.beker', '123133', 'leutstraat', '12', 'pintjesDorp', 1111, 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `LidId` int(11) NOT NULL,
  `naam` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `LidId`, `naam`, `email`, `password`) VALUES
(1, 1, 'killian.serluppens', 'killian.serluppens@chiroschelle.be', '123'),
(2, 3, 'test.User', 'testUser@email.com', '123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `leden`
--
ALTER TABLE `leden`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `leden`
--
ALTER TABLE `leden`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
