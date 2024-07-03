CREATE TABLE `project` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text,
	`ownerId` text NOT NULL,
	`description` text,
	FOREIGN KEY (`ownerId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
