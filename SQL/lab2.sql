create table supplier(
    sno char(3) primary key,
    same varchar(30) not null,
    scity varchar(30) default ‘ Ahmedabad ’,
    status int
);

create table part(
    pno char(3) primary key,
    pname varcher(30) unique,
    pcolor varchar(30) check (
        lower(pcolor) = ‘ red ’
        or lower(pcolor) = ‘ blue ’
        or lower(pcolor) = ‘ green ’
    )
,
pcity varchar(30)
);
create table shipment(sno char(3),pno char(3),primary key (supno,pno),qty int check(qty>0));