
# command to create docker
yarn db-up


# command to create two databases as Entities - connection info is in .env file.


create database first;
use first;

CREATE TABLE `first` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `age` int(11) DEFAULT NULL,
  `school` varchar(255) DEFAULT NULL,
  `isSenior` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
);

create database second;
use second;

CREATE TABLE `second` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
);