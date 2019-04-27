create table customers (
	cust_id int not null auto_increment,
	cust_name char(50) not null,
	cust_address char(50) null,
	cust_city char(50) null,
	cust_state char(5) null,
	cust_zip char(10) null,
	cust_country char(50) null,
	cust_contact char(50) null,
	cust_email char(255) null,
	primary key(cust_id)
);