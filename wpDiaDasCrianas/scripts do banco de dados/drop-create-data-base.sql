USE [master]
GO

/****** Object:  Database [labRodrigues]    Script Date: 07/10/2019 15:40:45 ******/
DROP DATABASE [labRodrigues]
GO

/****** Object:  Database [labRodrigues]    Script Date: 07/10/2019 15:40:45 ******/
CREATE DATABASE [labRodrigues]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'labRodrigues', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\labRodrigues.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'labRodrigues_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\labRodrigues_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO

IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [labRodrigues].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO

ALTER DATABASE [labRodrigues] SET ANSI_NULL_DEFAULT OFF 
GO

ALTER DATABASE [labRodrigues] SET ANSI_NULLS OFF 
GO

ALTER DATABASE [labRodrigues] SET ANSI_PADDING OFF 
GO

ALTER DATABASE [labRodrigues] SET ANSI_WARNINGS OFF 
GO

ALTER DATABASE [labRodrigues] SET ARITHABORT OFF 
GO

ALTER DATABASE [labRodrigues] SET AUTO_CLOSE OFF 
GO

ALTER DATABASE [labRodrigues] SET AUTO_SHRINK OFF 
GO

ALTER DATABASE [labRodrigues] SET AUTO_UPDATE_STATISTICS ON 
GO

ALTER DATABASE [labRodrigues] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO

ALTER DATABASE [labRodrigues] SET CURSOR_DEFAULT  GLOBAL 
GO

ALTER DATABASE [labRodrigues] SET CONCAT_NULL_YIELDS_NULL OFF 
GO

ALTER DATABASE [labRodrigues] SET NUMERIC_ROUNDABORT OFF 
GO

ALTER DATABASE [labRodrigues] SET QUOTED_IDENTIFIER OFF 
GO

ALTER DATABASE [labRodrigues] SET RECURSIVE_TRIGGERS OFF 
GO

ALTER DATABASE [labRodrigues] SET  DISABLE_BROKER 
GO

ALTER DATABASE [labRodrigues] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO

ALTER DATABASE [labRodrigues] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO

ALTER DATABASE [labRodrigues] SET TRUSTWORTHY OFF 
GO

ALTER DATABASE [labRodrigues] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO

ALTER DATABASE [labRodrigues] SET PARAMETERIZATION SIMPLE 
GO

ALTER DATABASE [labRodrigues] SET READ_COMMITTED_SNAPSHOT OFF 
GO

ALTER DATABASE [labRodrigues] SET HONOR_BROKER_PRIORITY OFF 
GO

ALTER DATABASE [labRodrigues] SET RECOVERY SIMPLE 
GO

ALTER DATABASE [labRodrigues] SET  MULTI_USER 
GO

ALTER DATABASE [labRodrigues] SET PAGE_VERIFY CHECKSUM  
GO

ALTER DATABASE [labRodrigues] SET DB_CHAINING OFF 
GO

ALTER DATABASE [labRodrigues] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO

ALTER DATABASE [labRodrigues] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO

ALTER DATABASE [labRodrigues] SET DELAYED_DURABILITY = DISABLED 
GO

ALTER DATABASE [labRodrigues] SET QUERY_STORE = OFF
GO

ALTER DATABASE [labRodrigues] SET  READ_WRITE 
GO
