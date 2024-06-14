create table sale(
    saleno int primary key ,
    saledate date,
    saletext varchar(80)
);
insert into sale values(1,to_date('15-01-95','dd-mm-yy'),'Scruffy Australian-called himself bruce');
insert into sale values(2,to_date('15-01-95','dd-mm-yy'),'Man. Rather fond of hats');
insert into sale values(3,to_date('15-01-95','dd-mm-yy'),'Woman. Planning to row atlantic-lengthwise');
insert into sale values(4,to_date('15-01-95','dd-mm-yy'),'Man. Trip to new york-thinks new york is a jungle');
insert into sale values(5,to_date('16-01-95','dd-mm-yy'),'Expedition leader for African safari');

create table item(itemno int primary key,itemname varchar(50),itemtype varchar(10),itemcolor varchar(80));

insert into item values(1,'Pocket knief-nile','E','Brown');
insert into item values(2,'Pocket knief-avon','E','Brown');
insert into item values(3,'Compass','N',null);
insert into item values(4,'Geo Positioning System','N',null);
insert into item values(5,'Map measure','N',null);
insert into item values(6,'Hat-polar explorer','C','Red');
insert into item values(7,'Hat-polar explorer','C','White');
insert into item values(8,'Boots-snake proof','C','Green');
insert into item values(9,'Boots-snake proof','C','Black');
insert into item values(10,'Safari chair','F','Khaki');
insert into item values(11,'Hammock','F','Khaki');
insert into item values(12,'Tent-8 person','F','Khaki');
insert into item values(13,'Tent-2 person','F','Khaki');
insert into item values(14,'Safari cooking kit','E',null);
insert into item values(15,'Pith helmet','C','Khaki');
insert into item values(16,'Pith helmet','C','White');
insert into item values(17,'Map case','N','Brown');
insert into item values(18,'Sextant','N',null);
insert into item values(19,'Stetson','C','Black');
insert into item values(20,'Stetson','C','Brown');

create table lineitem(lineno int,lineqty int,lineprice float,saleno int ,itemno int ,constraint pk_salenoItemno primary key(saleno,itemno),constraint fk_saleno foreign key(saleno) references sale(saleno),
constraint fk_itemno foreign key(itemno) references item(itemno));

insert into lineitem values(1,1,4.5,1,2);
insert into lineitem values(1,1,25,2,6);
insert into lineitem values(2,1,20,2,16);
insert into lineitem values(3,1,25,2,19);
insert into lineitem values(4,1,2.25,2,2);
insert into lineitem values(1,1,500,3,4);
insert into lineitem values(2,1,2.25,3,2);
insert into lineitem values (1,1,500,4,4);
insert into lineitem values (2,1,65,4,9);
insert into lineitem values (3,1,60,4,13);
insert into lineitem values (4,1,75,4,14);
insert into lineitem values (5,1,10,4,3);
insert into lineitem values (6,1,2.25,4,2);
insert into lineitem values (1,50,36,5,10);
insert into lineitem values (2,50,40.5,5,11);
insert into lineitem values (3,8,153,5,12);
insert into lineitem values (4,1,60,5,13);
insert into lineitem values (5,1,0,5,2);


4. Display the details of the sold items :
   select * from item where itemno in (select itemno from lineitem);
5. Display total number of the available items.
   select count(itemno) from item;
6. Display total no of sold items :
   select count(lineqty) from item;
7. Display item number and total quantity sold of that item.
   select sum(lineqty),itemno from lineitem group by itemno;
8. Display item colors.
   select itemcolor from item;
9. Display item number which is of minimum price.
select itemno from lineitem where lineprice in (select min(lineprice) from lineitem);
10. Display item number which is of maximum price.
select itemno from lineitem where lineprice in (select max(lineprice) from lineitem) group by itemno;
11. Display average quantity of sold items.
select avg(lineqty) from lineitem;
12. Display items with item type ‘cloth’.
select itemname from item where itemtype='C';
13. Display all furniture type items.
select itemname from item where itemtype='F';
14. Display information of items which have not been sold yet.
select * from item where itemno not in (select itemno from lineitem);
15. Display item names in descending order.
select itemname from item order by itemname desc;
16. Display items that are sold on 16-01-95.


.
18. Display item names starting with character ‘B’ or ‘b’













create table lineitem (
    lineno int ,
    lineqty int,
    lineprice 
)



