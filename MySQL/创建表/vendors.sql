create table vendors (
	vend_id int not null auto_increment,
	vend_name char(50) not null,
	vend_address char(50) null,
	vend_city char(50) null,
	vend_state char(50) null,
	vend_zip char(10) null,
	vend_country char(50) null,
	primary key(vend_id)
);