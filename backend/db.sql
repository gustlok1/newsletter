DROP DATABASE IF EXISTS NEWSLETTER;
CREATE DATABASE NEWSLETTER;
USE NEWSLETTER;

CREATE TABLE Emails (
    ID_EMAIL INT PRIMARY KEY NOT NULL,
    DESC_EMAIL VARCHAR(100) NOT NULL,
    REGISTERED TINYINT(1)
);
CREATE TABLE Users (
    ID_USER INT PRIMARY KEY NOT NULL,
    USERNAME VARCHAR (50),
    ID_EMAIL INT NOT NULL,
    PASSWORD VARCHAR (50),
    CONSTRAINT fk_RelationEmail FOREIGN KEY (ID_EMAIL) REFERENCES Emails (ID_EMAIL)
);
CREATE TABLE Articles (
    ID_ARTICLE INT PRIMARY KEY NOT NULL,
    TITLE VARCHAR (50) NOT NULL,
    DESCRIPTION VARCHAR (100),
    DATE VARCHAR (50),
    CONTENT VARCHAR (100) NOT NULL
);

CREATE TABLE UserArticle (
    ID_USERATICLE INT PRIMARY KEY NOT NULL,
    ID_USER INT,
    ID_ARTICLE INT,
    READBOLL TINYINT(1),
    FAVORITE TINYINT(1),
    READLAST TINYINT(1),
    CONSTRAINT fk_RelationUser FOREIGN KEY (ID_USER) REFERENCES Users (ID_USER),
    CONSTRAINT fk_RelationArticle FOREIGN KEY (ID_ARTICLE) REFERENCES Articles (ID_ARTICLE)
);