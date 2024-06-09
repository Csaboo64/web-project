-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Máj 20. 14:15
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `project`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `sorsjegy`
--

CREATE TABLE `sorsjegy` (
  `id` int(11) NOT NULL,
  `nev` varchar(50) DEFAULT NULL,
  `ar` int(11) DEFAULT NULL,
  `fonyeremeny_millio` int(11) DEFAULT NULL,
  `nyeresi_esely` double DEFAULT NULL,
  `kaphato` tinyint(1) DEFAULT 0,
  `keplink` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `sorsjegy`
--

INSERT INTO `sorsjegy` (`id`, `nev`, `ar`, `fonyeremeny_millio`, `nyeresi_esely`, `kaphato`, `keplink`) VALUES
(1, 'Nagykarácsony', 3500, 125, 2.88, 0, 'Nagykaracsony.png'),
(2, 'Kincsvadász', 2000, 75, 3.08, 1, 'Kincsvadasz.png'),
(3, 'Black Jack', 300, 15, 3.01, 1, 'Blackjack.png'),
(4, 'Nagy meglepetés', 1000, 50, 3.0, 1, 'Nagymeglepetes.png'),
(5, 'Astro', 300, 10, 3.11, 1,'Astro.jpg'),
(6, 'Afrika', 200, 5, 3.43, 0,'Afrika.jpg'),
(7, 'Szalon', 3000, 150, 2.78, 1,'Szalon.jpg'),
(8, 'Darts', 1500, 75, 3.06, 1,'Darts.png');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
