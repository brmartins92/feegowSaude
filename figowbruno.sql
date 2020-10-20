-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 20-Out-2020 às 00:13
-- Versão do servidor: 10.4.10-MariaDB
-- versão do PHP: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `figowbruno`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `agendamento`
--

DROP TABLE IF EXISTS `agendamento`;
CREATE TABLE IF NOT EXISTS `agendamento` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `specialty_id` int(11) NOT NULL,
  `professional_id` int(11) NOT NULL,
  `name` text COLLATE utf8_bin NOT NULL,
  `cpf` varchar(14) COLLATE utf8_bin NOT NULL,
  `source_id` int(11) NOT NULL,
  `birthdate` varchar(10) COLLATE utf8_bin NOT NULL,
  `date_time` datetime NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `agendamento`
--

INSERT INTO `agendamento` (`id`, `specialty_id`, `professional_id`, `name`, `cpf`, `source_id`, `birthdate`, `date_time`) VALUES
(8, 251, 85, 'Sandra Gama da Silva', '798.987.465-64', 43, '01/01/2412', '2020-10-19 21:47:07'),
(9, 258, 84, 'TESTE', '798.987.465-64', 63, '01/01/2412', '2020-10-19 21:48:31'),
(10, 187, 140, 'Telephone bruno', '147.066.637-50', 62, '01/01/2412', '2020-10-19 23:30:52');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
