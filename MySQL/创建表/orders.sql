create table orders (
	order_num int not null auto_increment,
	order_data datetime not null,
	cust_id int not null,
	primary key(order_num)
);