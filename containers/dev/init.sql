-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: database
-- Tempo de geração: 31/05/2023 às 02:02
-- Versão do servidor: 8.0.33
-- Versão do PHP: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `enterprises-crud`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `cities`
--

CREATE TABLE `cities` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `state_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `cities`
--

INSERT INTO `cities` (`id`, `name`, `state_id`) VALUES
(1, 'Porto Alegre', 1),
(2, 'Gravataí', 1),
(3, 'Pelotas', 1),
(4, 'São Paulo', 2),
(5, 'Belo Horizonte', 3);

-- --------------------------------------------------------

--
-- Estrutura para tabela `enterprises`
--

CREATE TABLE `enterprises` (
  `id` bigint UNSIGNED NOT NULL,
  `cnpj` char(14) NOT NULL,
  `name` varchar(255) NOT NULL,
  `cep` char(8) NOT NULL,
  `street` varchar(255) NOT NULL,
  `number` int NOT NULL,
  `neighborhood` varchar(255) NOT NULL,
  `city_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `enterprises`
--

INSERT INTO `enterprises` (`id`, `cnpj`, `name`, `cep`, `street`, `number`, `neighborhood`, `city_id`) VALUES
(3, '11111111115555', 'Amazon', '94040500', 'Rua major joão', 1001, 'Parque Flórido', 2),
(4, '11111111115234', 'Consultoria Y', '80054654', 'Rua lisboa', 508, 'Praia de Belas', 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `states`
--

CREATE TABLE `states` (
  `id` bigint UNSIGNED NOT NULL,
  `acronym` char(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `states`
--

INSERT INTO `states` (`id`, `acronym`) VALUES
(3, 'MG'),
(1, 'RS'),
(2, 'SP');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `id_states` (`state_id`);

--
-- Índices de tabela `enterprises`
--
ALTER TABLE `enterprises`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `cnpj` (`cnpj`),
  ADD KEY `city_id` (`city_id`);

--
-- Índices de tabela `states`
--
ALTER TABLE `states`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `acronym` (`acronym`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `cities`
--
ALTER TABLE `cities`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `enterprises`
--
ALTER TABLE `enterprises`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `states`
--
ALTER TABLE `states`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `cities`
--
ALTER TABLE `cities`
  ADD CONSTRAINT `cities_ibfk_1` FOREIGN KEY (`state_id`) REFERENCES `states` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Restrições para tabelas `enterprises`
--
ALTER TABLE `enterprises`
  ADD CONSTRAINT `enterprises_ibfk_1` FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
